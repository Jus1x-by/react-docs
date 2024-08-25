import { PropsWithChildren } from "react";
import { mergeClass } from "../../../util/helper";

import "./DocumentItem.css";

interface DocumentItemProps {
  classNames?: string[];
}

export const DocumentItem = ({
  children,
  classNames,
}: PropsWithChildren & DocumentItemProps) => {
  return (
    <div
      className={mergeClass(
        "documents-main__item__container",
        "grey-line",
        classNames
      )}
    >
      {children}
    </div>
  );
};
