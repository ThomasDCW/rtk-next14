"use client";
import { useGetProductByIdQuery } from "../../services/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { data, error, isLoading } = useGetProductByIdQuery(
    parseInt(params.slug)
  );
  console.log("useGetProductByIdQuery ====>", data, error, isLoading);
  console.log("params ====>", params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {isLoading && <p>Loading...</p>}
      {typeof error === "string" && <p>Error: {error}</p>}
      <h1>Product {params.slug}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
