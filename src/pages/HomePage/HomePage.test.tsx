import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("renders the home page with the correct links", () => {
    render(<HomePage />);

    expect(screen.getByTestId("home-page")).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Personal Page/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Personal Page/i })
    ).toHaveAttribute("href", "/personal");

    expect(
      screen.getByRole("link", { name: /Managed Page/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Managed Page/i })).toHaveAttribute(
      "href",
      "/managed"
    );
  });
});
