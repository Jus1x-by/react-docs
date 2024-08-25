import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import { Navigation } from "./Navigation";
import { useNavigate } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

describe("Navigation Component", () => {
  it("renders the navigation with all icons", () => {
    render(<Navigation />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByAltText("home")).toBeInTheDocument();
    expect(screen.getByAltText("paper")).toBeInTheDocument();
    expect(screen.getByAltText("ideas")).toBeInTheDocument();
    expect(screen.getByAltText("guard")).toBeInTheDocument();
    expect(screen.getByAltText("settings")).toBeInTheDocument();
  });

  it("navigates to the home page when the logo is clicked", () => {
    const mockNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockNavigate);

    render(<Navigation />);

    fireEvent.click(screen.getByAltText("logo"));

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
