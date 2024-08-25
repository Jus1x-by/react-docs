// Type for each document item in the data array
export interface IDocument {
  id: number;
  status: "issued" | "approved" | string;
  document_name: string;
  issuer_name: string;
  issuer_logo_url: string;
  recipient_name: string;
  received_on: string | null;
  expire_at: string | null;
  created_at: string;
  updated_at: string;
  archived_at: string | null;
  deleted_at: string | null;
}

export interface ILinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface IMetaLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: IMetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface DocumentResponse {
  data: IDocument[];
  links: ILinks;
  meta: IMeta;
}
