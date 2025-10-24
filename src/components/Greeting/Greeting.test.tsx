import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  it("renders a default greeting message", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("renders greeting with a name", () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText("Hello, Alice!")).toBeInTheDocument();
  });
});
