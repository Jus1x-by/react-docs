import { PropsWithChildren } from "react";
import { mergeClass } from "../../../util/helper";
import "./Column.css";
import { ColumnHeader, ColumnHeaderProps } from "../ColumnHeader/ColumnHeader";

interface DocumentsColumnProps {
  columnClassName?: string;
}

export const Column = ({
  headerClassName,
  columnClassName,
  children,
  headerText,
}: PropsWithChildren & DocumentsColumnProps & ColumnHeaderProps) => {
  return (
    <div className={mergeClass("column", columnClassName)}>
      <ColumnHeader
        headerText={headerText}
        headerClassName={`grey-line ${headerClassName}`}
      />
      {children}
    </div>
  );
};
