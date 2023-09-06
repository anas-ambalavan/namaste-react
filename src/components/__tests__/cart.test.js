import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import MOCK_DATA from "../__mocks__/mockResMenu.json";
import store from "../../utils/store";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should show accordion items", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    );
  });

  const accordionItem = screen.getByText("kings premium burgers - (4)");
  fireEvent.click(accordionItem);

  expect(screen.getAllByTestId("foodItem").length).toBe(4);
});

it("Should add items to cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionItem = screen.getByText("recommended - (21)");
  fireEvent.click(accordionItem);

  const addBtn = screen.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[0]);

  const cartItemLength = screen.getByTestId("cartItemLength");

  expect(cartItemLength.innerHTML).toBe("2");

  fireEvent.click(addBtn[1]);
  expect(cartItemLength.innerHTML).toBe("3");
});

it("Should render items in cart component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const resName = screen.getByText("Burger King");
  expect(resName).toBeInTheDocument();

  expect(screen.getByText("Veg Whopper")).toBeInTheDocument();
  expect(screen.getByText("Chicken Whopper")).toBeInTheDocument();

  const quantityItem = screen.getAllByTestId("cartItemQuantity");

  expect(quantityItem[0].innerHTML).toBe("2");
  expect(quantityItem[1].innerHTML).toBe("1");
});

it("Should increment cart item quantity in cart component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const incrementBtn = screen.getAllByTestId("cartItemQuantityIncrement");

  fireEvent.click(incrementBtn[0]);
  fireEvent.click(incrementBtn[1]);

  const quantityItem = screen.getAllByTestId("cartItemQuantity");

  expect(quantityItem[0].innerHTML).toBe("3");
  expect(quantityItem[1].innerHTML).toBe("2");
});

it("Should decrement cart item quantity in cart component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const decrementBtn = screen.getAllByTestId("cartItemQuantityDecrement");

  fireEvent.click(decrementBtn[0]);
  fireEvent.click(decrementBtn[1]);

  const quantityItem = screen.getAllByTestId("cartItemQuantity");

  expect(quantityItem[0].innerHTML).toBe("2");
  expect(quantityItem[1].innerHTML).toBe("1");
});

it("Should clear cart items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);

  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  expect(screen.getByTestId("cartItemLength").innerHTML).toBe("0");
});
