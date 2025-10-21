import { render, screen } from "@testing-library/react";
import QueryAllByQueries from "./QueryAllByQueries";

describe("QueryByAllQueries", () => {
  it("should query all by role", () => {
    render(<QueryAllByQueries />);

    const buttons = screen.queryAllByRole("button");
    const alerts = screen.queryAllByRole("alert");
    const regions = screen.queryAllByRole("region");

    expect(buttons).toHaveLength(2);
    expect(alerts).toHaveLength(2);
    expect(regions).toHaveLength(2);
  });
  it("should query all by placeholder text", () => {
    render(<QueryAllByQueries />);

    const searchInputs = screen.queryAllByPlaceholderText("Search");
    const emailInputs = screen.queryAllByPlaceholderText("Email");

    expect(searchInputs).toHaveLength(3);
    expect(emailInputs).toHaveLength(1);
  });

  it("should query all by text", () => {
    render(<QueryAllByQueries />);

    const headers = screen.queryAllByText(/Header text/i);
    const paragraph = screen.queryAllByText(/paragraph text/i);

    expect(headers).toHaveLength(2);
    expect(paragraph).toHaveLength(2);
  });

  it("should query all by testid", () => {
    render(<QueryAllByQueries />);

    const customElements = screen.queryAllByTestId("custom-element");

    expect(customElements).toHaveLength(2);
  });

  it("should query all by display value", () => {
    render(<QueryAllByQueries />);
    const inputValues = screen.queryAllByDisplayValue("Pre-field value 1");
    const inputValues2 = screen.queryAllByDisplayValue("Pre-field value 2");

    expect(inputValues).toHaveLength(2);
    expect(inputValues2).toHaveLength(1);
  });
});
