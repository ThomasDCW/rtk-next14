import { useAppDispatch } from "../lib/hook";

export default function ProductQuantityInput({
  quantity,
}: {
  quantity: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        className="border border-gray-300 rounded-md px-4 py-2 w-20 m-3"
        type="number"
        min="1"
        value={quantity}
      />
    </div>
  );
}
