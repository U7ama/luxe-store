const stripe = require("stripe")(process.env.SK);
import { Button, Center, Group, MediaQuery, rem, Text } from "@mantine/core";
import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/stores/cart";

export default function Success() {
  const resetCart = useCartStore((state) => state.resetCart);
  async function paymentConfirm() {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("session_id");
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const currentTime = Math.floor(Date.now() / 1000);

    const isPaymentSuccessful =
      session.payment_status === "paid" && session.expires_at > currentTime;
    if (isPaymentSuccessful) {
      // alert("Payment was successfull");
      resetCart();
    } else {
      alert("Payment was not successfull");
    }
  }
  useEffect(() => {
    paymentConfirm();
  }, []);

  return (
    <MediaQuery largerThan={768} styles={{ padding: rem(32) }}>
      <Center p={16} mt={30}>
        <div>
          <Text mb={15} align="center" size={36} weight={600}>
            Thank you.
          </Text>
          <Text mb={30} align="center" size={18} weight={500}>
            Your order was completed successfully.
          </Text>
          <Group position="center">
            <Button
              size="md"
              radius={2}
              h={50}
              component={Link}
              href="/"
              replace
            >
              Continue Shopping
            </Button>
          </Group>
        </div>
      </Center>
    </MediaQuery>
  );
}
