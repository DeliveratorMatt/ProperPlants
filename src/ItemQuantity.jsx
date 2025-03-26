export default function ItemQuantity({ quantity }) {
  return (
    <>
      <button onClick={() => (quantity += 1)}>+</button>
      <p>{quantity}</p>
      <button>-</button>
    </>
  );
}
