import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from '../pages/Register'

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
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      }
    ]
  },
  {
    path: "*",
    element: <div>Error!</div>,
  },
]);

export default Router;
