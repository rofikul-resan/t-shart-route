import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShopLayout from "./components/Shop/ShopLayout";
import ProductContener from "./components/Shop/Products/ProductContener";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopLayout></ShopLayout>,
    children: [
      {
        path: "/",
        element: <ProductContener></ProductContener>,
        loader: () => fetch("tShirt.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
