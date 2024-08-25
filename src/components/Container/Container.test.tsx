import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container Component", () => {
  it("renders correctly with children", () => {
    render(<Container>Test Container</Container>);

    const childElement = screen.getByText("Test Container");
    expect(childElement).toBeInTheDocument();
  });

  it("applies the correct class to the container", () => {
    const { container } = render(<Container>Test Container</Container>);

    expect(container.firstChild).toHaveClass("container");
  });

  it("applies additional className correctly", () => {
    const { container } = render(
      <Container className="custom-class">Test Container</Container>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
