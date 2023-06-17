const stripe = require("stripe")(process.env.SK);

export const createSession = async (email: string, products: any[]) => {
  console.log("products", products);

  const lineItems = await Promise.all(
    products.map(async (product) => {
      const stripeProduct = await stripe.products.create({
        name: product.name, // Replace with the actual product name
      });

      console.log(stripeProduct.id);

      const unitAmount = Math.round(Number(product.price) * 100); // Convert price to cents

      const price = await stripe.prices.create({
        unit_amount: unitAmount,
        currency: "usd",
        product: stripeProduct.id,
      });

      console.log(price.id);

      return {
        price: price.id,
        quantity: product.quantity,
      };
    })
  );
  const currentUrl = `${window.location.protocol}//${window.location.host}`;
  console.log("currentUrl", currentUrl)
  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    line_items: lineItems,
    mode: "payment",
    success_url: `${currentUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${currentUrl}/cart`,
  });

  console.log("session", session);
  return session;
};
