import React from "react";

const Cart = ({ carts }) => {
  return (
    <div className="bg-purple-100 rounded-lg px-4 py-3 sticky top-0 h-screen">
      {carts.map((ts) => (
        <div key={ts._id} className="cart-item">
          <p className="card-title">{ts.name}</p>{" "}
          <button className="btn ml-auto">x</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
