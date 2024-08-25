import { memo } from "react";
import { mergeClass } from "../../../util/helper";

import "./ColumnHeader.css";

export interface ColumnHeaderProps {
  headerText?: string;
  headerClassName?: string;
}

export const ColumnHeader = memo(
  ({ headerText, headerClassName }: ColumnHeaderProps) => {
    return (
      <div className={mergeClass("column-header", headerClassName)}>
        {headerText}
      </div>
    );
  }
);
