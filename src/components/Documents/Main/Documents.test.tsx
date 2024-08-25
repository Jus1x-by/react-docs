import { render, screen } from "@testing-library/react";
import { DocumentsMain } from "./DocumentsMain";
import { IDocument } from "../../../api/requests/documents/types";
import { formatDate } from "../../../util/helper";

describe("DocumentsMain Component", () => {
  const mockDocuments: IDocument[] = [
    {
      id: 1,
      status: "issued",
      document_name: "Document 1",
      issuer_name: "Issuer A",
      issuer_logo_url: "http://example.com/logoA.png",
      recipient_name: "Recipient A",
      received_on: "2023-01-01",
      expire_at: null,
      created_at: "2022-12-31",
      updated_at: "2023-01-01",
      archived_at: null,
      deleted_at: null,
    },
    {
      id: 2,
      status: "approved",
      document_name: "Document 2",
      issuer_name: "Issuer B",
      issuer_logo_url: "http://example.com/logoB.png",
      recipient_name: "Recipient B",
      received_on: "2023-02-01",
      expire_at: null,
      created_at: "2023-01-31",
      updated_at: "2023-02-01",
      archived_at: null,
      deleted_at: null,
    },
    {
      id: 3,
      status: "issued",
      document_name: "Document 3",
      issuer_name: "Issuer C",
      issuer_logo_url: "http://example.com/logoC.png",
      recipient_name: "Recipient C",
      received_on: "2023-03-01",
      expire_at: null,
      created_at: "2023-02-28",
      updated_at: "2023-03-01",
      archived_at: null,
      deleted_at: null,
    },
  ];

  it("renders correctly with the provided documents", () => {
    render(<DocumentsMain documents={mockDocuments} />);

    mockDocuments.forEach((document) => {
      const documentNameElement = screen.getByText(document.document_name);
      expect(documentNameElement).toBeInTheDocument();
    });

    const formattedDates = mockDocuments.map((doc) =>
      formatDate(doc.received_on)
    );
    formattedDates.forEach((date) => {
      const receivedDateElement = screen.getByText(formatDate(date) as string);
      expect(receivedDateElement).toBeInTheDocument();
    });

    const controlIcons = screen.getAllByAltText("kebab");
    expect(controlIcons).toHaveLength(mockDocuments.length);
  });

  it("renders the correct number of DocumentItem components", () => {
    render(<DocumentsMain documents={mockDocuments} />);

    const documentItems = screen.getAllByText(/Document/);
    expect(documentItems).toHaveLength(mockDocuments.length + 1);

    const dateItems = screen.getAllByText(/2023/);
    expect(dateItems).toHaveLength(2);
  });
});
