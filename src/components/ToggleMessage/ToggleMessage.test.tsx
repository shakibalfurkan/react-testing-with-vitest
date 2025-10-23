import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import ToggleMessage from "./ToggleMessage";

describe("ToggleMessage()", () => {
  it("should toggle the message visibility when the button is clicked", async () => {
    render(<ToggleMessage />);

    const button = screen.getByRole("button", { name: /Toggle Message/i });

    expect(screen.queryByText(/Message is visible/i)).toBeNull();

    await user.click(button);

    expect(screen.getByText(/Message is visible/i)).toBeInTheDocument();

    await user.click(button);

    expect(screen.queryByText(/Message is visible/i)).toBeNull();
  });
});
