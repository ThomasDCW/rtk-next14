import Image from "next/image";
import ProductCard from "./components/ProductCard";
import { randomUUID } from "crypto";
import ShoppingCart from "./components/ShoppingCart";

const products = [
  {
    id: randomUUID(),
    title: "Produit 1",
    price: 99.0,
  },
  {
    id: randomUUID(),
    title: "Produit 2",
    price: 199.0,
  },
  {
    id: randomUUID(),
    title: "Produit 3",
    price: 299.0,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="p-24 flex">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div>
        <ShoppingCart />
      </div>
    </main>
  );
}
