import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Cart from "./Cart/Cart";
import ProductContener from "./Products/ProductContener";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopLayout = () => {
  const allTShirts = useLoaderData();
  const [carts, setCart] = useState([]);
  const handleCart = (product) => {
    const isEexist = carts.find((ts) => ts._id === product._id);
    if (isEexist) {
      toast("You have already added this item.. 🙄");
    } else {
      setCart([...carts, product]);
    }
  };

  const removeFromCart = (id) => {
    const remaining = carts.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-shop-grid ">
        <ProductContener
          allTShirts={allTShirts}
          handleCart={handleCart}
        ></ProductContener>
        <Cart removeFromCart={removeFromCart} carts={carts}></Cart>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShopLayout;
