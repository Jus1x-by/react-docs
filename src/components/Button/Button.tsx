import { ButtonHTMLAttributes, memo } from "react";

import "./Button.css";

export interface ButtonProps {
  text?: string;
}

export const Button = memo<
  ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
>(
  ({
    text,
    ...props
  }: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
    return (
      <button className="button--default" {...props}>
        {text}
      </button>
    );
  }
);
