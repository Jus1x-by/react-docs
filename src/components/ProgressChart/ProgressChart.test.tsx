import { render, screen } from "@testing-library/react";
import { ProgressChart } from "./ProgressChart";

describe("ProgressChart Component", () => {
  it("renders correctly with default props", () => {
    render(<ProgressChart value={0} size={180} />);

    const svgElement = screen.getByTestId("progress-chart");
    expect(svgElement).toBeInTheDocument();

    const circles = svgElement.querySelectorAll("circle");
    expect(circles).toHaveLength(2);

    const textElement = screen.getByText("0%");
    expect(textElement).toBeInTheDocument();
  });

  it("renders correctly with a value of 50", () => {
    render(<ProgressChart value={50} size={180} />);

    const textElement = screen.getByText("50%");
    expect(textElement).toBeInTheDocument();
  });

  it("renders correctly with a value greater than 100", () => {
    render(<ProgressChart value={150} size={180} />);

    const textElement = screen.getByText("100%");
    expect(textElement).toBeInTheDocument();
  });

  it("renders correctly with a value less than 0", () => {
    render(<ProgressChart value={-20} size={180} />);

    const textElement = screen.getByText("0%");
    expect(textElement).toBeInTheDocument();
  });
});
