import { Button } from "../../Button/Button";
import { Title } from "../../Title/Title";
import "./DocumentsHeader.css";

export const DocumentsHeader = () => {
  return (
    <div className="documents-header">
      <Title text="recent documents"/>
      <Button text="View All Documents"/>
    </div>
  );
};
