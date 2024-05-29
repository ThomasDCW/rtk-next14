"use client";
import React from "react";
import classNames from "classnames";

interface IDrawerProps {
  title: string;
  position?: "right" | "left" | "top" | "bottom";
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export default function Drawer({
  title,
  position,
  isOpen,
  setIsOpen,
  children,
}: IDrawerProps) {
  const right = classNames(
    "fixed w-full lg:w-1/3 h-screen right-0 top-0 bg-white shadow-xl delay-400 duration-700 ease-in-out transition-all transform z-50 overflow-y-auto rounded-lg rounded-tr-none rounded-br-none",
    { "translate-x-0": isOpen, "translate-x-full": !isOpen }
  );

  const left = classNames(
    "fixed w-full lg:w-1/3 h-screen left-0 top-0 bg-white shadow-xl delay-400 duration-700 ease-in-out transition-all transform z-50 overflow-y-auto rounded-lg rounded-tr-none rounded-br-none",
    { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
  );

  const bottom = classNames(
    "fixed w-full h-1/3 bottom-0 left-0 bg-white shadow-xl delay-400 duration-700 ease-in-out transition-all transform z-50 overflow-y-auto rounded-lg rounded-tr-none rounded-br-none",
    { "translate-y-0": isOpen, "translate-y-full": !isOpen }
  );

  const top = classNames(
    "fixed w-full h-1/3 top-0 left-0 bg-white shadow-xl delay-400 duration-700 ease-in-out transition-all transform z-50 overflow-y-auto rounded-lg rounded-tr-none rounded-br-none",
    { "translate-y-0": isOpen, "-translate-y-full": !isOpen }
  );

  return (
    <section>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="fixed inset-0 bg-black opacity-30 z-40"
        ></div>
      )}

      <div
        className={
          position === "right"
            ? right
            : position === "left"
            ? left
            : position === "top"
            ? top
            : position === "bottom"
            ? bottom
            : right
        }
        aria-hidden={!isOpen}
      >
        <div className="bg-white border-l-1 border-gray-300 fixed top-0 right-0 bottom-0 w-full">
          <button
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <p className="text-center text-xl mx-auto font-bold p-4">{title}</p>
          <div className="flex flex-col mx-auto p-4">{children}</div>
        </div>
      </div>
    </section>
  );
}
