import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

describe("Title Component", () => {
  it("renders the text prop when provided", () => {
    render(<Title text="Test Title" />);
    const titleElement = screen.getByText(/Test Title/i);

    expect(titleElement).toBeInTheDocument();
  });

  it("does not render any text when text prop is not provided", () => {
    render(<Title />);
    const titleElement = screen.queryByText(/Test Title/i);

    expect(titleElement).not.toBeInTheDocument();
  });

  it("applies custom class names", () => {
    render(<Title text="Styled Title" className="custom-class" />);
    const titleElement = screen.getByText(/Styled Title/i);

    expect(titleElement).toHaveClass("custom-class");
  });

  it("renders empty when text is an empty string", () => {
    const { container } = render(<Title text="" />);

    expect(container.firstChild).toBeInTheDocument();

    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
