import { render, screen } from "@testing-library/react";
import FindByQueries from "./FindByQueries";

describe("FindByQueries()", () => {
  test("finds an element by its text content", async () => {
    render(<FindByQueries />);

    const headingElement = await screen.findByText(/FindBy Queries/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("finds an element by its aria-label", async () => {
    render(<FindByQueries />);

    const buttonElement = await screen.findByLabelText(/click-me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("finds an element by its placeholder text", async () => {
    render(<FindByQueries />);
    const inputElement = await screen.findByPlaceholderText(/Enter text here/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("finds an element by its alt text", async () => {
    render(<FindByQueries />);
    const imageElement = await screen.findByAltText(/test-image/i);
    expect(imageElement).toBeInTheDocument();
  });
  test("finds an element by its defaultValue", async () => {
    render(<FindByQueries />);
    const inputElement = await screen.findByDisplayValue(
      /This is a test value/i
    );
    expect(inputElement).toBeInTheDocument();
  });

  test("finds an element by testId", async () => {
    render(<FindByQueries />);

    const testElement = await screen.findByTestId(/test-element/i);
    expect(testElement).toBeInTheDocument();
  });

  test("finds an element by label text", async () => {
    render(<FindByQueries />);

    const labelELement = await screen.findByLabelText(/Test Input Label/i);
    expect(labelELement).toBeInTheDocument();
  });
});
