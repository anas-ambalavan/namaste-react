import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import MOCK_DATA from "../__mocks__/mockResMenu.json";
import store from "../../utils/store";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should show BROWSE MENU Button", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    );
  });

  const btnBrowseMenu = screen.getByRole("button", { name: "BROWSE MENU" });

  expect(btnBrowseMenu).toBeInTheDocument();
});

it("Should show list of menu items in modal", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    );
  });

  const btnBrowseMenu = screen.getByRole("button", { name: "BROWSE MENU" });
  expect(btnBrowseMenu).toBeInTheDocument();

  await act(() => {
    fireEvent.click(btnBrowseMenu);
  });

  expect(screen.getAllByTestId("modalMenuTitle").length).toBe(16);

  const modal = screen.getByTestId("modal");
  await act(() => {
    fireEvent.click(modal);
  });
  expect(modal).not.toBeInTheDocument();
});

it("Should open the recommended menu items while clicking on the recommended item in the modal", async () => {
  jest.useFakeTimers();
  await act(async () => {
    render(
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    );
  });

  const btnBrowseMenu = screen.getByRole("button", { name: "BROWSE MENU" });
  expect(btnBrowseMenu).toBeInTheDocument();

  await act(() => {
    fireEvent.click(btnBrowseMenu);
  });
  const modal = screen.getByTestId("modal");

  expect(modal).toBeInTheDocument();

  const menuItemsInModal = screen.getAllByTestId("modalMenuTitle");

  expect(menuItemsInModal.length).toBe(16);

  await act(() => {
    fireEvent.click(menuItemsInModal[0]);
  });

  expect(modal).not.toBeInTheDocument();

  await act(() => {
    jest.advanceTimersByTime(500);
  });

  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(21);

  jest.useRealTimers();
});
