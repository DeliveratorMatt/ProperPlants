import CartItem from "./CartItem.jsx";

// import "./cart.css";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section className="Cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
    </section>
  );
}
