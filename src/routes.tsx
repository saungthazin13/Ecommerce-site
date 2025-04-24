import { createBrowserRouter } from "react-router";
import RootLayout from "./pages/RootLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Error from "@/pages/Error";
import Services from "@/pages/Services";
import BlogRootLayout from "@/pages/blog/BlogRootLayout";
import Blog from "@/pages/blog/Blog";
import BlogDetail from "@/pages/blog/BlogDetail";
import ProductRootLayout from "@/pages/product/ProductRootLayout";
import Product from "@/pages/product/Product";
import ProductDetail from "@/pages/product/ProductDetail";

import "./index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Services /> },
      {
        path: "blog",
        element: <BlogRootLayout />,
        children: [
          { index: true, element: <Blog /> },
          { path: ":postId", element: <BlogDetail /> },
        ],
      },

      {
        path: "product",
        element: <ProductRootLayout />,
        children: [
          { index: true, element: <Product /> },
          { path: ":productId", element: <ProductDetail /> },
        ],
      },
    ],
  },
]);
