import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex gap-6 items-center justify-end mr-11 my-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Order">Order</NavLink>
      <NavLink to="/LogIn" className={`btn btn-primary`}>
        Log In
      </NavLink>
    </nav>
  );
};

export default Header;
