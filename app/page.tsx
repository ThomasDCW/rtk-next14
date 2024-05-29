import { auth } from "./auth";
import { ProductCard, ProductCardSkeleton } from "./components/client/Card";
import ShoppingCart from "./components/client/ShoppingCart";
import { SignIn, SignOut } from "./components/server/AuthButtons";
import { Product } from "@prisma/client";
import React from "react";
import Link from "next/link";
import CategoryFilter from "./components/client/CategoryFilter";

async function getProducts(category?: string) {
  const url = new URL("http://localhost:3000/api/products");
  if (category) url.searchParams.append("category", category);
  try {
    const res = await fetch(url.toString(), { cache: "force-cache" });
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json() as Promise<Product[]>;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function getCategories() {
  const res = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await res.json();
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return categories;
  // Start of Selection
}

export default async function Home({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const session = await auth();
  const products = await getProducts(searchParams.category);
  const categories = await getCategories();
  return (
    <>
      {session?.user ? (
        <main className="flex min-h-screen flex-col items-center">
          <h1 className="text-2xl font-bold mt-6 mb-6">
            Bienvenue {session.user.name}
          </h1>
          <ShoppingCart />
          <CategoryFilter categories={categories} />
          <div className="p-16 flex flex-wrap justify-around">
            {products.map((product) => (
              <React.Suspense
                key={product.id}
                fallback={<ProductCardSkeleton />}
              >
                <ProductCard {...product} />
              </React.Suspense>
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
