export default function ProductQuantityInput({
  quantity,
}: {
  quantity: number;
}) {
  return (
    <div>
      <p>
        {quantity} {quantity > 1 ? "items" : "item"}
      </p>
    </div>
  );
}
