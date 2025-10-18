import { render, screen } from "@testing-library/react";
import HelloWorld from "../../src/components/HelloWorld";

describe("HelloWorld()", () => {
  it("should render the HelloWorld properly", () => {
    render(<HelloWorld />);

    expect(screen.getByText("HelloWorld")).toBeInTheDocument();
  });
});
