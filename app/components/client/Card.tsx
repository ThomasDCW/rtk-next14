"use client";
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

export const ProductCardSkeleton = () => {
  return (
    <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
  );
};

export const CartCard = React.memo(function CartCard({
  title,
  price,
  image,
  quantity,
}: Pick<Product, "id" | "title" | "price" | "image"> & { quantity: number }) {
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow flex flex-row items-center w-full">
      <Image
        width={50}
        height={50}
        src={image}
        alt="product"
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700">${price}</p>
        <p className="text-gray-500">Quantité: {quantity}</p>
      </div>
    </div>
  );
});
