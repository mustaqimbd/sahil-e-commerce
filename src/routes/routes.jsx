import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Products from "../pages.jsx/Products";
import ProductDetails from "../pages.jsx/ProductDetails";
import DisplayCartItems from "../pages.jsx/DisplayCartItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "phone/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart-items",
        element: <DisplayCartItems />,
      },
    ],
  },
]);
