import { UUID } from "crypto";
import AddToShoppingCartInput from "./AddToShoppingCartInput";

interface ProductCardProps {
  id: UUID;
  title: string;
  price: number;
}

export default function ProductCard({ title, price }: ProductCardProps) {
  return (
    <div className="w-72 flex items-center justify-around m-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <span>{price} €</span>
      <AddToShoppingCartInput title={title} price={price} />
    </div>
  );
}
