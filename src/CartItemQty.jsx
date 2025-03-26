export default function CartItemQuantity({ item, removeFromCart, addToCart }) {
  return (
    <div className="cartItemQty">
      <button onClick={() => removeFromCart(item)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
