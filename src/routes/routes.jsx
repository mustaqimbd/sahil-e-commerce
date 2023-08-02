import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Products from "../pages.jsx/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
    ],
  },
]);
