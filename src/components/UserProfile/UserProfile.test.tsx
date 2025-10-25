import { render, screen, waitFor } from "@testing-library/react";
import { vi, type Mock } from "vitest";
import UserProfile from "./UserProfile";

describe("UserProfile Component", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("fetches and displays user data", async () => {
    const mockUserData = {
      id: 4,
      name: "John Doe",
      email: "johndoe@example.com",
    };

    (global.fetch as Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue(mockUserData),
    });

    render(<UserProfile userId={4} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /john/i })
      ).toBeInTheDocument();

      expect(screen.getByText(/johndoe@example.com/i)).toBeInTheDocument();
    });
  });
});
