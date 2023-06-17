import { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Group,
  Text,
  Modal,
  Input,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ExclamationMark } from "tabler-icons-react";
import { stripeAxios } from "@/lib/axios";
import { useCart, useTotalPrice } from "@/stores/cart";
import getStripe from "@/utils/getStripe";
import styles from "./OrderSummary.module.css";
import { createSession } from "@/api/stripe/checkout";

const OrderSummary = () => {
  const { totalPrice } = useTotalPrice();
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleCheckout = async () => {
    if (!email) {
      notifications.show({
        title: "Missing Email",
        message: "Please enter your email address.",
        color: "red",
        icon: <ExclamationMark />,
      });
      return;
    }

    try {
      setLoading(true);
      // products: cart.map((item) => ({
      //   id: item.id,
      //   quantity: item.quantity,
      //   size: item.size,
      // })),
      const products = cart.map((item) => ({
        name: item.attributes.title,
        id: item.id,
        quantity: item.quantity,
        size: item.size,
        price: item.attributes.price,
      }));

      const response = await createSession(email, products);
      window.location.href = response?.url;

      setLoading(false);
    } catch (err) {
      notifications.show({
        title: "Unexpected Error",
        message: "Please try again later.",
        color: "red",
        icon: <ExclamationMark />,
      });
      setLoading(false);
    }
  };

  return (
    <Card
      withBorder
      padding={30}
      radius={0}
      bg="gray.0"
      className={styles.card}
    >
      <Text weight={600} size={18} mb={20}>
        Order Summary
      </Text>
      <Group position="apart" mb={6} noWrap>
        <Text weight={500}>Subtotal</Text>
        <Text>${totalPrice}.00</Text>
      </Group>
      <Group position="apart" noWrap>
        <Text weight={500}>Shipping</Text>
        <Text size={14}>FREE</Text>
      </Group>
      <Divider my={15} />
      <Group position="apart" noWrap>
        <Text weight={600}>Total</Text>
        <Text weight={600}>${totalPrice}.00</Text>
      </Group>
      <Button
        w="100%"
        h={50}
        size="md"
        radius={0}
        mt={20}
        onClick={() => setModalOpen(true)}
        loading={loading}
      >
        CHECKOUT
      </Button>

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Enter Your Email"
        size="sm"
      >
        <Input
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleCheckout();
            }
          }}
          autoFocus
          required
          style={{ marginBottom: "20px" }}
        />
        <Button
          color="blue"
          onClick={handleCheckout}
          loading={loading}
          disabled={!email}
        >
          Proceed to Stripe for Payment
        </Button>
      </Modal>
    </Card>
  );
};

export default OrderSummary;
