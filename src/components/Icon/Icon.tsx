import { ImgHTMLAttributes, memo } from "react";
import { mergeClass } from "../../util/helper";

export interface IconProps {
  className?: string;
  imgClassName?: string;
}

export const Icon = memo(
  ({
    className,
    imgClassName,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & IconProps) => {
    return (
      <div className={className}>
        <img className={mergeClass("icon", imgClassName)} {...props} />
      </div>
    );
  }
);
