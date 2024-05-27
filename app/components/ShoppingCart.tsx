"use client";
import React from "react";
import { reset } from "../lib/features/shoppingCart/shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "../lib/hook";
import ProductQuantityInput from "./QuantityInput";
import Link from "next/link";
import Drawer from "./Drawer";
import Image from "next/image";
import { CartCard } from "./Card";

export default function ShoppingCart() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state) => state.shoppingCartReducer.products
  );
  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`fixed top-3 right-24 bg-white border border-gray-200 rounded-lg shadow h-12"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex justify-around">
        <svg
          className="w-10 h-6 m-2 text-gray-800 dark:text-white hover:cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            fillRule="evenodd"
            d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-2 -right-2">
          {products.reduce((total, product) => total + product.quantity!, 0)}
        </span>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        {isOpen ? (
          <div className="mt-4">
            {products.length === 0 ? (
              <p className="m-2 text-center">Votre panier est vide</p>
            ) : (
              <ul>
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between items-center p-8 border-b border-gray-200"
                  >
                    <CartCard
                      key={product.id}
                      quantity={product.quantity!}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      image={product.image!}
                    />
                  </li>
                ))}
                <li className="font-bold text-right mt-4">
                  total : {totalPrice} €
                </li>
              </ul>
            )}
            {products.length === 0 ? null : (
              <Link href="/cart" className="">
                <button className="mt-4 p-2 mx-auto w-full bg-green-500 text-white rounded-lg">
                  valider le panier
                </button>
              </Link>
            )}
          </div>
        ) : null}
      </Drawer>
      {isOpen && (
        <div
          className="overlay overflow-y-hidden h-screen w-screen"
          onClick={() => setIsOpen(false)}
        >
          {/* Overlay semi-transparent pour assombrir le reste de l'écran */}
        </div>
      )}
    </div>
  );
}
