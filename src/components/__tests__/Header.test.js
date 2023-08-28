import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "../Header";
import store from "../../utils/store";
import { ThemeProvider } from "../../utils/ThemeContext";

it("Should render header component with a SignIn button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const SignInLink = screen.getByRole("link", { name: "Sign In" });

  expect(SignInLink).toBeInTheDocument();
});

it("Should render header component with a cart 0", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("0");
  //const cartItems = screen.getByText(/0/); we can pass regex as well

  expect(cartItems).toBeInTheDocument();
});

it("Should change to Dark Mode", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );

  const themeMode = screen.getByTestId("theme-icon");
  fireEvent.click(themeMode);

  const nav = screen.getByRole("navigation");

  expect(nav.classList.contains("dark")).toBe(true);
});
