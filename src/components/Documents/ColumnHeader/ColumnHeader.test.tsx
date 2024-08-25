import { render, screen } from "@testing-library/react";
import { ColumnHeader } from "./ColumnHeader";

describe("ColumnHeader Component", () => {
  it("renders with the provided headerText", () => {
    const headerText = "Column Title";

    render(<ColumnHeader headerText={headerText} />);

    const headerElement = screen.getByText(headerText);
    expect(headerElement).toBeInTheDocument();
  });

  it("applies the default class and additional className correctly", () => {
    const headerText = "Column Title";
    const additionalClassName = "additional-class";

    const { container } = render(
      <ColumnHeader
        headerText={headerText}
        headerClassName={additionalClassName}
      />
    );

    const headerElement = container.firstChild;
    expect(headerElement).toHaveClass("column-header");
    expect(headerElement).toHaveClass(additionalClassName);
  });

  it("renders without crashing when no headerText is provided", () => {
    const { container } = render(<ColumnHeader headerText="" />);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
