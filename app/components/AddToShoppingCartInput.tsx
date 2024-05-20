"use client";
import { v4 as uuidv4 } from "uuid";
import { FormEvent } from "react";
import { useAppDispatch } from "../lib/hook";
import { addToCart } from "../lib/features/shoppingCart/shoppingCartSlice";
import { Product } from "@prisma/client";

export default function AddToShoppingCartInput({
  id,
  title,
  price,
}: Pick<Product, "id" | "title" | "price">) {
  const dispatch = useAppDispatch();
  const handleAddToShoppingCart = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addToCart({ id, price, title }));
  };

  return (
    <form onSubmit={handleAddToShoppingCart} className="p-1">
      <button
        type="submit"
        className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        +
      </button>
    </form>
  );
}
