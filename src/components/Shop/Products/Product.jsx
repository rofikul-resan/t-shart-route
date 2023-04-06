import React from "react";

const Product = ({ productItem, handleCart }) => {
  const { name, picture, price } = productItem;
  return (
    <div className="card h-full w-full bg-base-100 shadow-xl">
      <figure className="w-full h-4/6">
        <img className="w-8/12 mx-auto" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : ${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleCart(productItem)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
