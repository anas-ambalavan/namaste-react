import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import MOCK_ACCORDION_DATA from "../__mocks__/mockAccordionListItem.json";
import MOCK_RES_DATA from "../__mocks__/mockResMenu.json";
import store from "../../utils/store";
import AccordionListItem from "../AccordionListItem";
import Header from "../Header";

it("Should render the Accordion List Item", () => {
  render(
    <Provider store={store}>
      <AccordionListItem data={MOCK_ACCORDION_DATA} resInfo={MOCK_RES_DATA} />
    </Provider>
  );

  expect(screen.getByText("Bestseller")).toBeInTheDocument();
  expect(screen.getByText("Veg Whopper")).toBeInTheDocument();
  expect(screen.getByText("₹ 179")).toBeInTheDocument();
  expect(screen.getByText("Customisable")).toBeInTheDocument();
});

it("Should render cart item quantity 1 in header", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <AccordionListItem data={MOCK_ACCORDION_DATA} resInfo={MOCK_RES_DATA} />
      </Provider>
    </BrowserRouter>
  );

  const addBtn = screen.getByTestId("addBtn");
  fireEvent.click(addBtn);

  expect(screen.getByTestId("cartItemLength").innerHTML).toBe("1");
});
