import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter Component", () => {
  it("increments counter value on button click", async () => {
    render(<Counter />);

    const counterValue = screen.getByTestId("counter-value");
    expect(counterValue.textContent).toEqual("0");

    const button = screen.getByRole("button", { name: /Increment/i });

    await userEvent.click(button);

    expect(counterValue.textContent).toEqual("1");
  });
});
