// ManagedPage.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import { Mock, describe, it, vi } from "vitest";
import { ManagedPage } from "./ManagedPage";
import { useFetch } from "../../api";
import { IDocument } from "../../api/requests/documents/types";

vi.mock("../../api", () => ({
  useFetch: vi.fn(),
}));

describe("ManagedPage Component", () => {
  it("renders the greetings and career goal", () => {
    (useFetch as Mock).mockReturnValue({
      fetch: vi.fn().mockReturnValue({
        then: () => Promise,
      }),
      loading: false,
    });

    render(<ManagedPage />);

    expect(screen.getByTestId("greetings")).toBeInTheDocument();
    expect(screen.getByTestId("career-goal")).toBeInTheDocument();
  });

  it("fetches documents on mount and displays them", async () => {
    const mockDocuments: IDocument[] = [
      {
        id: 1,
        status: "issued",
        document_name: "Document 1",
        issuer_name: "Issuer 1",
        issuer_logo_url: "http://example.com/logo1.png",
        recipient_name: "Recipient 1",
        received_on: "2023-01-01",
        expire_at: null,
        created_at: "2023-01-01T00:00:00Z",
        updated_at: "2023-01-02T00:00:00Z",
        archived_at: null,
        deleted_at: null,
      },
      {
        id: 2,
        status: "approved",
        document_name: "Document 2",
        issuer_name: "Issuer 2",
        issuer_logo_url: "http://example.com/logo2.png",
        recipient_name: "Recipient 2",
        received_on: "2023-01-02",
        expire_at: null,
        created_at: "2023-01-02T00:00:00Z",
        updated_at: "2023-01-03T00:00:00Z",
        archived_at: null,
        deleted_at: null,
      },
    ];

    (useFetch as Mock).mockReturnValue({
      fetch: vi.fn().mockResolvedValue({ data: mockDocuments }),
      loading: false,
    });

    render(<ManagedPage />);

    await waitFor(() => {
      expect(screen.getByText("Document 1")).toBeInTheDocument();
      expect(screen.getByText("Document 2")).toBeInTheDocument();
    });
  });
});
