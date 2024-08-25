import {
  ButtonHTMLAttributes,
  FC,
  ImgHTMLAttributes,
  PropsWithChildren,
} from "react";
import { mergeClass } from "../../util/helper.ts";

import './IconButton.css';

type IconButtonProps = PropsWithChildren<{
  imgClassName?: string;
  buttonClassName?: string;
}>;

export const IconButton: FC<
IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & ImgHTMLAttributes<HTMLImageElement>
> = ({
  imgClassName = "",
  buttonClassName = "",
  alt,
  onClick,
  src,
}: IconButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <button
      className={mergeClass(
        "button--clean button--icon",
        buttonClassName
      )}
      onClick={onClick}
    >
      <img
        className={imgClassName}
        src={src}
        alt={alt}
      />
    </button>
  );
};
