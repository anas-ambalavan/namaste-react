import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Home from "./components/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
