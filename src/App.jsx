import Plants from "./Plants";
import Cart from "./Cart";
import { useState } from "react";
import PLANTS from "./data.js";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [plants] = useState(PLANTS);

  const addToCart = (plant) => {
    const itemExists = cart.find((item) => item.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const newPlant = { ...plant, quantity: 1 };
      setCart([...cart, newPlant]);
    }
  };

  const removeFromCart = (plantToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === plantToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants plants={plants} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
