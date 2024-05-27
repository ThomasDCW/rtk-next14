"use client";
import { FormEvent } from "react";
import { useAppDispatch } from "../lib/hook";
import { addToCart } from "../lib/features/shoppingCart/shoppingCartSlice";
import { Product } from "@prisma/client";

export default function AddToShoppingCartInput({
  id,
  title,
  price,
  image,
}: Pick<Product, "id" | "title" | "price" | "image">) {
  const dispatch = useAppDispatch();
  const handleAddToShoppingCart = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addToCart({ id, price, title, image }));
  };

  return (
    <form onSubmit={handleAddToShoppingCart} className="p-1">
      <button
        type="submit"
        className="text-white mt-4 sm:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center"
        role="button"
      >
        Add to cart
      </button>
    </form>
  );
}
