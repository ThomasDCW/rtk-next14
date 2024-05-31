import Image from "next/image";
import immat from "../../assets/immat.png";
import { Button } from "flowbite-react";
import { FiSearch } from "react-icons/fi";

export default function ImmatInput() {
  const formatImmat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (value.length > 2) value = value.slice(0, 2) + "-" + value.slice(2);
    if (value.length > 6) value = value.slice(0, 6) + "-" + value.slice(6, 8);
    e.target.value = value;
  };

  return (
    <form className="flex items-center">
      <label htmlFor="immat">
        <Image
          className="rounded-l-lg"
          src={immat}
          alt="immat"
          width={25}
          height={20}
        />
      </label>
      <input
        type="text"
        placeholder="FB-204-NL"
        className="placeholder:opacity-50 placeholder:text-center placeholder:font-semibold placeholder:text-xl text-xl font-semibold p-0 text-center border-t-2 border-b-2 border-[rgb(1,51,153)] h-full focus:border-[rgb(1,51,153)] focus:ring-inset focus:ring-[rgb(1,51,153)]"
        onInput={formatImmat}
      />
      <div className="bg-[rgb(1,51,153)] rounded-r-lg w-5 h-full" />
      <Button className="flex justify-center items-center bg-green-500 hover:bg-green-600 h-full ml-4">
        <FiSearch className="text-white w-5 h-5" />
      </Button>
    </form>
  );
}
