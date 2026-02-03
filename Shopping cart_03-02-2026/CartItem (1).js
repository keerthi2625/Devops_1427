import React from "react";

function CartItem({ item, increment, decrement, reset }) {
  const totalPrice = item.price * item.quantity;

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        padding: "20px",
        width: "280px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h3 style={{ color: "#1565c0" }}>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <p style={{ fontWeight: "bold", color: "#2e7d32" }}>
        Total: ${totalPrice}
      </p>

      <button onClick={increment} style={btnStyle}>
        +
      </button>

      <button
        onClick={decrement}
        disabled={item.quantity === 0}
        style={{ ...btnStyle, margin: "0 10px" }}
      >
        -
      </button>

      <button onClick={reset} style={resetStyle}>
        Reset
      </button>
    </div>
  );
}

const btnStyle = {
  padding: "6px 12px",
  backgroundColor: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const resetStyle = {
  padding: "6px 12px",
  backgroundColor: "#d32f2f",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default CartItem;
