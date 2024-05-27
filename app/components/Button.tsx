import { stripe } from "../../lib/stripe";

export const BuyButton = async () => {
  const paymentLink = await stripe.paymentLinks.create({
    line_items: [
      {
        price: "price_1PIuC6JxS9u8vRuXcnhATtLX",
        quantity: 1,
      },
    ],
  });
  console.log(paymentLink.url);

  return (
    <a href={paymentLink.url}>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Buy
      </button>
    </a>
  );
};
