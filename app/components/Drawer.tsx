import React from "react";
import classNames from "classnames";

interface IDrawerProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Drawer({
  title,
  children,
  isOpen,
  setIsOpen,
}: IDrawerProps) {
  return (
    <section>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="fixed inset-0 bg-black opacity-30 z-40"
        ></div>
      )}
      <div
        className={classNames(
          "fixed w-full lg:w-1/3 h-screen right-0 top-0 bg-white shadow-xl delay-400 duration-700 ease-in-out transition-all transform z-50 overflow-y-auto",
          { "translate-x-0": isOpen, "translate-x-full": !isOpen }
        )}
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
