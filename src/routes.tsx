import { createBrowserRouter } from "react-router";
import RootLayout from "./pages/RootLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Error from "@/pages/Error";
import Services from "@/pages/Services";
// import BlogRootLayout from "@/pages/blog/BlogRootLayout";
// import Blog from "@/pages/blog/Blog";
// import BlogDetail from "@/pages/blog/BlogDetail";
import ProductRootLayout from "@/pages/product/ProductRootLayout";
import Product from "@/pages/product/Product";
import ProductDetail from "@/pages/product/ProductDetail";

//for lazy loading page //for initial pageကိုမြန်အောင်lazy loading လုပ်လို့ရ
import { lazy, Suspense } from "react";
const BlogRootLayout = lazy(() => import("@/pages/product/ProductRootLayout"));
const Blog = lazy(() => import("@/pages/blog/Blog"));
const BlogDetail = lazy(() => import("@/pages/blog/BlogDetail"));

const SuspenseFallback = () => <div className=" text-center text-2xl font-bold  ">Loading ....</div>

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
        element: <Suspense fallback={< SuspenseFallback />}>
          <BlogRootLayout />
        </Suspense>,
        children: [
          {
            index: true,

            element: <Suspense fallback={< SuspenseFallback />}>
              <Blog />
            </Suspense>,

          },

          {
            path: ":postId",

            element: <Suspense fallback={< SuspenseFallback />}>
              <BlogDetail />
            </Suspense>,
          },
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
