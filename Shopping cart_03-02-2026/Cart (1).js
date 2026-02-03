import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Atomic Habits", price: 20, quantity: 1 },
    { id: 2, name: "The Alchemist", price: 15, quantity: 1 },
    { id: 3, name: "Rich Dad Poor Dad", price: 18, quantity: 1 },
    { id: 4, name: "Think Like a Monk", price: 22, quantity: 1 },
  ]);

  const increment = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const reset = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: 0 } : item
      )
    );
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #e0f7fa, #e8f5e9)",
        minHeight: "100vh",
        paddingTop: "30px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
        📚 Shopping Cart
      </h1>

      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increment={() => increment(item.id)}
          decrement={() => decrement(item.id)}
          reset={() => reset(item.id)}
        />
      ))}
    </div>
  );
}

export default Cart;
