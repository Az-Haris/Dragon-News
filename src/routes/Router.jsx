import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
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