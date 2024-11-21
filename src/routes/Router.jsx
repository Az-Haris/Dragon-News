import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const Router = createBrowserRouter([
  {
    path: "",
    element: <Navigate to={"/category/01"}></Navigate>,
  },
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <div>News layout!</div>,
  },
  {
    path: "/auth",
    element: <div>Login!</div>,
  },
  {
    path: "*",
    element: <div>Error!</div>,
  },
]);

export default Router;
