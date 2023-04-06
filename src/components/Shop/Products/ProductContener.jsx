import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const ProductContener = ({ allTShirts, handleCart }) => {
  return (
    <div className="grid grid-cols-3 gap-6 w-11/12 mx-auto">
      {allTShirts.map((pd) => (
        <Product productItem={pd} key={pd._id} handleCart={handleCart} />
      ))}
    </div>
  );
};

export default ProductContener;
