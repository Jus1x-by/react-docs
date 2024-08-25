import { render, screen } from "@testing-library/react";
import { DocumentsHeader } from "./DocumentsHeader";

describe("DocumentsHeader Component", () => {
  it("renders Title and Button with correct text", () => {
    render(<DocumentsHeader />);

    const titleElement = screen.getByText("recent documents");
    expect(titleElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "View All Documents",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the correct class to the documents-header", () => {
    const { container } = render(<DocumentsHeader />);

    expect(container.firstChild).toHaveClass("documents-header");
  });
});
