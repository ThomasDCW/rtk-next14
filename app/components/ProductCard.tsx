import { UUID } from "crypto";
import AddToShoppingCartInput from "./AddToShoppingCartInput";

interface ProductCardProps {
  id: UUID;
  title: string;
  price: number;
}

export default function ProductCard({ id, title, price }: ProductCardProps) {
  return (
    <div
      id={id}
      className="max-w-sm p-6 m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title} - {price} €
        </h5>
      </div>
      <AddToShoppingCartInput />
    </div>
  );
}
