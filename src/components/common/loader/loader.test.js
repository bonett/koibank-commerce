import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loader from "./loader";

describe("Loader component", () => {
  test("Should render component", () => {
    render(<Loader />);
    const linkElement = screen.getByText(/Fetching data.../i);
    expect(linkElement).toBeInTheDocument();
  });
});
