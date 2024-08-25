import "./DocumentsMain.css";
import PurpleIcon from "../../../assets/icons/purple_paper.svg";
import KebabIcon from "../../../assets/icons/kebab.svg";
import { Column } from "../Column/Column";
import { formatDate } from "../../../util/helper";
import { IconButton } from "../../IconButton/IconButton";
import { DocumentItem } from "../DocumentItem/DocumentItem";
import { IDocument } from "../../../api/requests/documents/types";
import { Container } from "../../Container/Container";

interface DocumentsMainProps {
  documents: IDocument[];
}

export const DocumentsMain = ({ documents }: DocumentsMainProps) => {
  const documentNames = [];
  const documentReceived = [];
  const documentStatuses = [];
  const documentControls = [];

  for (const document of documents) {
    documentNames.push(document.document_name);
    documentReceived.push(formatDate(document.received_on));
    documentStatuses.push(document.status);
    documentControls.push(null);
  }

  return (
    <Container>
      <Column headerText="Document name" columnClassName="flex--one">
        {documentNames.map((name, key) => {
          return (
            <DocumentItem classNames={["documents-main__item__name"]} key={key}>
              <img src={PurpleIcon} alt="purple_icon" />
              <span>{name}</span>
            </DocumentItem>
          );
        })}
      </Column>
      <Column headerText="Received On">
        {documentReceived.map((dateString, key) => {
          return (
            <DocumentItem
              classNames={[
                "documents-main__item--center",
                "documents-main__date",
              ]}
              key={key}
            >
              {formatDate(dateString)}
            </DocumentItem>
          );
        })}
      </Column>
      <Column>
        {documentControls.map((_, key) => {
          return (
            <DocumentItem
              classNames={["documents-main__item--center"]}
              key={key}
            >
              <IconButton
                src={KebabIcon}
                alt="kebab"
                imgClassName="documents-main__item__controls-image"
                buttonClassName="documents-main__item__controls-button"
              />
            </DocumentItem>
          );
        })}
      </Column>
    </Container>
  );
};
