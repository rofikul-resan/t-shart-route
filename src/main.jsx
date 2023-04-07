import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShopLayout from "./components/Shop/ShopLayout";
import ProductContener from "./components/Shop/Products/ProductContener";
import About from "./components/About/About";
import LogIn from "./components/LogIn/LogIn";
import Error404 from "./components/error/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopLayout></ShopLayout>,
    loader: () => fetch("tShirt.json"),
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
