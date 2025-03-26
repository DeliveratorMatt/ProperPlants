export default function Plant({ plant, addToCart }) {
  return (
    <li>
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
