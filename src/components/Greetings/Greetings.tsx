import { memo } from "react";

import "./Greetings.css";
import {
  GreetingsDescription,
  GreetingsDescriptionProps,
} from "./GreetingsDescription/GreetingsDescription";
import {
  GreetingsTitle,
  GreetingsTitleProps,
} from "./GreetingsTitle/GreetingsTitle";
import { mergeClass } from "../../util/helper";

interface GreetingProps {
  className?: string;
}

export const Greetings = memo(
  ({
    fullName,
    className,
  }: GreetingsTitleProps & GreetingsDescriptionProps & GreetingProps) => {
    return (
      <div className={mergeClass("greetings", className)} data-testid="greetings">
        <GreetingsTitle fullName={fullName} />
        <GreetingsDescription />
      </div>
    );
  }
);
