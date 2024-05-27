"use client";
import React from "react";

interface IDrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Drawer({ children, isOpen, setIsOpen }: IDrawerProps) {
  return (
    <div>
      {isOpen && (
        <div
          className={`bg-white p-4 border-l-1 border-gray-300 fixed top-0 right-0 bottom-0 w-1/3 transition-transform duration-1000 transform translate-x-0 ease-in-out`}
        >
          <button
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <div className="flex flex-col">
            <span className="text-xl mx-auto">Panier</span>
          </div>
          <div className="flex flex-col">
            <span className="mx-auto">{children}</span>
          </div>
        </div>
      )}
    </div>
  );
}
