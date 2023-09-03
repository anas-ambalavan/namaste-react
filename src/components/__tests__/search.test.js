import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "../Home";
import MOCK_DATA from "../__mocks__/mockResListData.json";
import store from "../../utils/store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for burger text input", async () => {
  jest.useFakeTimers();
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(29);

  const searchInput = screen.getByPlaceholderText("Search");

  fireEvent.change(searchInput, { target: { value: "Burger" } });

  act(() => {
    jest.advanceTimersByTime(500);
  });

  const cardsAfterSearch = await screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(21);
  jest.useRealTimers();
});

it("Should filter the Top Rated Restaurants(ratings 4.2+)", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(29);

  const topRatedBtn = screen.getByRole("button", { name: "Ratings 4.2+" });
  await act(async () => {
    fireEvent.click(topRatedBtn);
  });

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(24);

  await act(async () => {
    fireEvent.click(topRatedBtn);
  });

  const cardsAfterCancelFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterCancelFilter.length).toBe(29);
});
