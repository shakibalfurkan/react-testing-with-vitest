import { render, screen } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus";

describe("UserStatus()", () => {
  it("display a welcome message when an email is provided", () => {
    render(<UserStatus email="jhon@mail.com" />);

    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("display the signup button when no email is provided", () => {
    render(<UserStatus email="" />);
    const signupButton = screen.getByText(/Sign Up/i);
    expect(signupButton).toBeInTheDocument();
  });
});
