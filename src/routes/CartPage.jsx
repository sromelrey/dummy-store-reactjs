import React from "react";

import { useCart } from "../hooks/useCart";

function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  console.log(cartItems);
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
