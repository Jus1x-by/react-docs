import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CareerGoal } from "./CareerGoal";
import { Goal } from "../../api/requests/goals/types";

describe("CareerGoal Component", () => {
  const mockGoal: Goal = {
    id: 1,
    name: "Become a Senior Developer",
    description: "Achieve a senior developer position in my career.",
    category: "Career Advancement",
    type: "technical",
    progress: 75,
  };

  it("renders the CareerGoal component with the correct elements", () => {
    render(<CareerGoal goal={mockGoal} />);

    expect(screen.getByText("career goal")).toBeInTheDocument();

    expect(screen.getByText("75%")).toBeInTheDocument();

    expect(screen.getByText("Become a Senior Developer")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /View Insights/i })
    ).toBeInTheDocument();
  });

  it("renders default values when goal is not provided", () => {
    render(<CareerGoal goal={{} as Goal} />);

    expect(screen.getByText("0%")).toBeInTheDocument();
  });
});
