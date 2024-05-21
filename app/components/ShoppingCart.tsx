"use client";
import React from "react";
import { reset } from "../lib/features/shoppingCart/shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "../lib/hook";
import ProductQuantityInput from "./QuantityInput";

export default function ShoppingCart() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state) => state.shoppingCartReducer.products
  );
  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className={`fixed top-5 right-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${
        isExpanded ? "h-auto" : "h-12"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex justify-around">
        <svg
          className="w-6 h-6 m-2 text-gray-800 dark:text-white hover:cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          onClick={() => setIsExpanded(!isExpanded)}
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
      {isExpanded ? (
        <div className="w-96 p-4">
          {products.length === 0 ? (
            <p className="m-2 text-center">Votre panier est vide</p>
          ) : (
            <ul>
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700"
                >
                  <span className="w-1/2">{product.title}</span>
                  <span className="w-1/3 text-end">
                    <ProductQuantityInput quantity={product.quantity!} />
                  </span>
                  <span className="w-1/3 text-end">{product.price} €</span>
                </li>
              ))}
              <li className="font-bold text-right mt-4">
                total : {totalPrice} €
              </li>
            </ul>
          )}
          {products.length === 0 ? null : (
            <button
              onClick={() => dispatch(reset())}
              className="w-full p-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
            >
              vider le panier
            </button>
          )}
          {products.length === 0 ? null : (
            <button className="w-full p-2 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800">
              valider le panier
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}
