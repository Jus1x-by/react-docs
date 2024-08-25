import { render, screen } from "@testing-library/react";
import { GoalTitle } from "./GoalTitle";

describe("GoalTitle Component", () => {
  it("renders correctly with the provided role", () => {
    const role = "Software Engineer";

    render(<GoalTitle role={role} />);

    const staticTextElement = screen.getByText("I want to become a");
    expect(staticTextElement).toBeInTheDocument();

    const roleElement = screen.getByText(role);
    expect(roleElement).toBeInTheDocument();
  });

  it("renders correctly without a role", () => {
    render(<GoalTitle />);

    const staticTextElement = screen.getByText("I want to become a");
    expect(staticTextElement).toBeInTheDocument();

    const roleElement = screen.queryByText(/.+/);
    expect(roleElement).toBeInTheDocument();
  });

  it("applies the correct class to the goal title container", () => {
    const { container } = render(<GoalTitle role="Designer" />);

    expect(container.firstChild).toHaveClass("goal-title");
  });
});
