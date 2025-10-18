import { render, screen } from "@testing-library/react";
import ProgrammingLanguagesList from "../../src/components/ProgrammingLanguagesList";

describe("ProgrammingLanguagesList()", () => {
  it("should render a list of programming languages", () => {
    const languages = ["JavaScript", "Python", "Java", "Ruby", "Golang"];

    render(<ProgrammingLanguagesList languages={languages} />);

    languages.forEach((language) => {
      expect(screen.getByText(language)).toBeInTheDocument();
    });
  });

  it("should render a message when the list is empty", () => {
    render(<ProgrammingLanguagesList languages={[]} />);

    expect(screen.getByText(/No languages/i)).toBeInTheDocument();
  });
});
