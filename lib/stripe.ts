import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ??
    "sk_test_51PIsqDJxS9u8vRuXfcODHu6X568roMvv0yFSOI8iV3oYLblvvncHW6HiTOzFS2u9j78TLuTNuj4TWNUY0VW3JyXE004TugCK2G",
  {
    apiVersion: "2024-04-10",
    typescript: true,
  }
);
