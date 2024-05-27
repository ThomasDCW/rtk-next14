import AddToShoppingCartInput from "./AddToShoppingCartInput";
import { Product } from "@prisma/client";
import Link from "next/link";
import RenderStars from "./RenderStars";
import React from "react";
import Image from "next/image";

export const ProductCard = React.memo(function ProductCard({
  id,
  title,
  price,
  image,
  rating,
}: Pick<Product, "id" | "title" | "price" | "image" | "rating">) {
  return (
    <div className="m-2 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/product/${id}`}>
        <Image
          className="p-8 rounded-t-lg"
          src={image}
          alt="product image"
          layout="responsive"
          width={500}
          height={500}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href={`/product/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <RenderStars rating={rating} />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <AddToShoppingCartInput
            id={id}
            title={title}
            price={price}
            image={image}
          />
        </div>
      </div>
    </div>
  );
});