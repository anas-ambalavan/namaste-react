import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Offers from "../Offers";

describe("Offer Component tests", () => {
  test("Should loads Offer component", () => {
    render(<Offers />);

    const heading = screen.getByText("Restaurants With Great Offers Near Me");

    expect(heading).toBeInTheDocument();
  });

  test("Should loads heading", () => {
    render(<Offers />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
