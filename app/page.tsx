import { auth } from "./auth";
import ProductCard from "./components/ProductCard";
import ShoppingCart from "./components/ShoppingCart";
import { randomUUID, Sign } from "crypto";
import { SignIn, SignOut } from "./components/AuthButtons";

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

export default async function Home() {
  const session = await auth();
  return (
    <>
      {session?.user ? (
        <main className="flex min-h-screen flex-col items-center">
          <h1 className="text-2xl font-bold mt-6 mb-6">
            Bienvenue {session.user.name}
          </h1>
          <div className="p-16 flex">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div>
            <ShoppingCart />
          </div>
          <SignOut />
        </main>
      ) : (
        <main className="flex min-h-screen flex-col items-center">
          <SignIn />
        </main>
      )}
    </>
  );
}
