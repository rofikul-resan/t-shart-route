import React from "react";

const Cart = ({ carts, removeFromCart }) => {
  return (
    <div className="bg-purple-100 rounded-lg px-4 py-3 sticky top-0 h-screen">
      {carts.map((ts) => (
        <div key={ts._id} className="cart-item">
          <p className="card-title mr-4">{ts.name}</p>{" "}
          <p> price : ${ts.price}</p>
          <button
            onClick={() => removeFromCart(ts._id)}
            className="btn btn-outline btn-xs ml-auto"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
