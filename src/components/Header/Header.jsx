import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex gap-6 items-center justify-center mr-11 my-6">
      <NavLink className={`text-violet-700 font-bold hover:border-b-2`} to="/">
        Home
      </NavLink>
      <NavLink
        className={`text-violet-700 font-bold hover:border-b-2`}
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={`text-violet-700 font-bold hover:border-b-2`}
        to="/Order"
      >
        Order
      </NavLink>
      <NavLink to="/LogIn" className={`btn btn-primary`}>
        Log In
      </NavLink>
    </nav>
  );
};

export default Header;
