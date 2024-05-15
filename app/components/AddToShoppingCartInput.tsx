"use client";
import { v4 as uuidv4 } from "uuid";
import { FormEvent } from "react";
import { useAppDispatch } from "../lib/hook";
import { add } from "../lib/features/shoppingCart/shoppingCartSlice";

export default function AddToShoppingCartInput() {
  const dispatch = useAppDispatch();
  const handleAddToShoppingCart = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Add to shopping cart");
    dispatch(add({ id: uuidv4(), price: 42, title: "Product 1" }));
  };

  return (
    <form onSubmit={handleAddToShoppingCart}>
      <button
        type="submit"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Ajouter au panier
      </button>
    </form>
  );
}
