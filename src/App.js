import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Support from "./components/Support";

const Search = lazy(() => import("./components/Search"));

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
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/support/issues",
        element: <Support />,
        children: [
          {
            path: "/support/issues/:id",
            element: <Support />,
          },
        ],
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes} />);
