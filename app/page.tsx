import { auth } from "./auth";
import { ProductCard } from "./components/Card";
import ShoppingCart from "./components/ShoppingCart";
import { SignIn, SignOut } from "./components/AuthButtons";
import { Product } from "@prisma/client";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json() as Promise<Product[]>;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Home() {
  const session = await auth();
  const products = await getData();

  return (
    <>
      {session?.user ? (
        <main className="flex min-h-screen flex-col items-center">
          <h1 className="text-2xl font-bold mt-6 mb-6">
            Bienvenue {session.user.name}
          </h1>
          <div>
            <ShoppingCart />
          </div>
          <div className="p-16 flex flex-wrap justify-around">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
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
