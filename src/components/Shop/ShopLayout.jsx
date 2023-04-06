import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Cart from "./Cart/Cart";

const ShopLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-shop-grid ">
        <Outlet />
        <Cart></Cart>
      </div>
    </div>
  );
};

export default ShopLayout;
