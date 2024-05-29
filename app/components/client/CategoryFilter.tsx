"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  return (
    <div className="flex flex-col space-y-4 mb-6">
      <Link href="/" className="text-blue-500 hover:underline">
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={`?category=${category}`}
          className="flex items-center space-x-2"
        >
          <input
            type="checkbox"
            value={category}
            title={category}
            checked={selectedCategory === category}
            readOnly
            className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
          />
          <label htmlFor={category} className="text-gray-700">
            {category}
          </label>
        </Link>
      ))}
    </div>
  );
}
