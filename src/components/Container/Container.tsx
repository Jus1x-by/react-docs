import { FC, PropsWithChildren } from "react";

import "./Container.css";
import { mergeClass } from "../../util/helper";

export interface ContainerProps {
  className?: string;
}

export const Container: FC<PropsWithChildren & ContainerProps> = ({
  children,
  className,
}: PropsWithChildren & ContainerProps) => {
  return <div className={mergeClass("container", className)}>{children}</div>;
};
