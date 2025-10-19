import { render, screen } from "@testing-library/react";
import GetByQueries from "./GetByQueries";

describe("GetByQueries()", () => {
  it("should render the component with the correct heading", () => {
    render(<GetByQueries />);

    const heading = screen.getByText("My Component");
    expect(heading).toBeInTheDocument();
  });

  it("should find an input by placeholder text", () => {
    render(<GetByQueries />);

    const inputField = screen.getByPlaceholderText("Enter Text");
    expect(inputField).toBeInTheDocument();
  });

  it("should find an anchor tag with specific href", () => {
    render(<GetByQueries />);

    const link = screen.getByRole("link", { name: /Visit Example/i });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("should find a div using data-testid", () => {
    render(<GetByQueries />);
    const customElement = screen.getByTestId("custom-element");

    expect(customElement).toBeInTheDocument();
  });

  it("should find an element by its role", () => {
    render(<GetByQueries />);
    const button = screen.getByRole("button", { name: "submit" });
    expect(button).toBeInTheDocument();
  });
});
