import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

import Home from "../Home";
import MOCK_DATA from "../__mocks__/mockResListData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchInput = screen.getByPlaceholderText("Search");
  const searchIcon = screen.getByTestId("search-icon");

  fireEvent.change(searchInput, { target: { value: "Burger" } });
  fireEvent.click(searchIcon);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter the Top Rated Restaurants(ratings 4.1+)", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", { name: "Ratings 4.1+" });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(13);

  fireEvent.click(topRatedBtn);
  const cardsAfterCancelFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterCancelFilter.length).toBe(20);
});
