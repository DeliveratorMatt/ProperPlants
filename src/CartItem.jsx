import CartItemQuantity from "./CartItemQty";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <li className="cartItem">
      <figure>{item.image}</figure>
      <h3>{item.name}</h3>
      <CartItemQuantity
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </li>
  );
}
