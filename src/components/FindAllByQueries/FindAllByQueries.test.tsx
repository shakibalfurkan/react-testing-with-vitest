import { render, screen } from "@testing-library/react";
import FindAllByQueries from "./FindAllByQueries";

describe("FindAllByQueries methods", () => {
  beforeEach(() => {
    render(<FindAllByQueries />);
  });

  it("finds all the elements by the text", async () => {
    const paragraphs = await screen.findAllByText(/Item \d/);
    expect(paragraphs).toHaveLength(3);

    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });
  });

  it("finds all the elements by the role", async () => {
    const buttons = await screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it("should finds all the elements by placeholder text", async () => {
    const inputs = await screen.findAllByPlaceholderText("Enter text here");

    expect(inputs).toHaveLength(3);

    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });

  it("should finds all by alt text", async () => {
    const imageElements = await screen.findAllByAltText("test-image");

    expect(imageElements).toHaveLength(3);

    imageElements.forEach((imageElement) => {
      expect(imageElement).toBeInTheDocument();
    });
  });

  it("should finds element by display value", async () => {
    const inputs = await screen.findAllByDisplayValue(/Test input \d/);

    expect(inputs).toHaveLength(3);

    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });

  it("should finds element by test ID", async () => {
    const testElements = await screen.findAllByTestId("test-element");

    expect(testElements).toHaveLength(3);

    testElements.forEach((testELement) => {
      expect(testELement).toBeInTheDocument();
    });
  });
});
