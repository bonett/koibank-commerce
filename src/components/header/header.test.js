import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeaderComponent from "./header";
import { routesLinkData } from "../main-view/main-view";
import "react-router-dom";

jest.mock("react-router-dom", () => {
  return {
    useLocation: () => {
      return {
        pathname: "/dashboard"
      };
    }
  };
});

describe("Header component", () => {
  test("Should render component", () => {
    render(<HeaderComponent routesLink={routesLinkData} />);
    const heading = screen.getByText(/Welcome Guest/i);
    const description = screen.getByText(
      /Entérate de cómo interactuan las compañias en la siguiente información/i
    );
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
