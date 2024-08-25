import { instance } from "../../index";
import { AxiosResponse } from "axios";
import { DocumentResponse } from "./types";

const LoggerMiddleware = (res: AxiosResponse) => {
  return res;
};

export const getDocuments = () =>
  instance
    .get("/documents.json")
    .then(LoggerMiddleware)
    .then(
      (response: { data: DocumentResponse }) =>
        response.data as DocumentResponse
    );
