import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Support from "./components/Support";
import ThemeContext, { ThemeProvider } from "./utils/ThemeContext";
import store from "./utils/store";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import Disclaimer from "./components/Disclaimer";
import RestaurantMenuSearch from "./components/RestaurantMenuSearch";

const Search = lazy(() => import("./components/Search"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(data) => (
            <div className={`app-container ${data?.state?.darkMode && "dark"}`}>
              <Header />
              <SideMenu />
              <Outlet />
              <Footer />
              <Disclaimer />
              <ScrollRestoration />
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </Provider>
  );
};

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants",
        children: [
          {
            path: ":slug",
            element: <RestaurantMenu />,
          },
          {
            path: ":slug/search",
            element: <RestaurantMenuSearch />,
          },
        ],
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
