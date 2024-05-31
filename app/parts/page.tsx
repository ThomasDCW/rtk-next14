import { Part } from "@prisma/client";
import { PartCard } from "../components/client/Card";
import Link from "next/link";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import CarCarousel from "../components/client/Carousel";

async function fetchParts(): Promise<Part[]> {
  const res = await fetch("http://localhost:3000/api/parts");
  const products: Part[] = await res.json();
  return products;
}

export default async function Parts() {
  const parts = await fetchParts();
  return (
    <div className="flex">
      <div className="w-1/3 p-5 mt-10">
        <CarCarousel />
      </div>
      <div className="flex justify-center p-5 mt-10">
        <Link
          className="fixed top-2 left-2 text-blue-500 hover:underline"
          href="/"
        >
          home
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {parts.map((part) => (
            <div key={part.id}>
              <PartCard {...part} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
