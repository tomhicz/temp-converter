import { render, screen } from "@testing-library/react";
import UnitConverter from "./UnitConverter";

test("renders footer details", () => {
  render(<UnitConverter />);
  const detailsElement = screen.getByText(/is equal to/i);
  expect(detailsElement).toBeInTheDocument();
});
