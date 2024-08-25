import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UserManage } from "./UserManage";
import { MemoryRouter } from "react-router-dom";

describe("UserManage Component", () => {
  it("renders the user manage component with the correct props", () => {
    const mockIcon = "https://example.com/icon.png";
    const mockFullName = "John Doe";

    render(
      <MemoryRouter>
        <UserManage icon={mockIcon} fullName={mockFullName} />
      </MemoryRouter>
    );

    expect(screen.getByAltText("user")).toHaveAttribute("src", mockIcon);
    expect(screen.getByText(mockFullName)).toBeInTheDocument();
  });

  it("toggles the dropdown when the arrow button is clicked", () => {
    render(
      <MemoryRouter>
        <UserManage />
      </MemoryRouter>
    );

    expect(
      screen.queryByTestId("user-manage-dropdown")
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByAltText("arrow-down"));

    expect(screen.getByTestId("user-manage-dropdown")).toBeInTheDocument();

    fireEvent.click(screen.getByAltText("arrow-down"));

    expect(
      screen.queryByTestId("user-manage-dropdown")
    ).not.toBeInTheDocument();
  });
});
