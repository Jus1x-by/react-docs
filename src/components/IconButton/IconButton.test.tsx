import { render, screen, fireEvent } from "@testing-library/react";
import { IconButton } from "./IconButton";

describe("IconButton Component", () => {
  it("renders correctly with default props", () => {
    render(<IconButton src="example.jpg" alt="Example" />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("Example");
    expect(imageElement).toBeInTheDocument();
  });

  it("applies custom classes correctly", () => {
    render(
      <IconButton
        src="example.jpg"
        alt="Example"
        imgClassName="custom-img-class"
        buttonClassName="custom-button-class"
      />
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("custom-button-class");

    const imageElement = screen.getByAltText("Example");
    expect(imageElement).toHaveClass("custom-img-class");
  });

  it("triggers the onClick event correctly", () => {
    const mockOnClick = vi.fn();
    render(
      <IconButton src="example.jpg" alt="Example" onClick={mockOnClick} />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
