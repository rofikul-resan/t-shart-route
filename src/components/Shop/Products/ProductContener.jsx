import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductContener = () => {
  const allTShirts = useLoaderData();
  return (
    <div>
      <h1>total product {allTShirts.length}</h1>
    </div>
  );
};

export default ProductContener;
