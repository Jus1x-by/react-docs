import { memo } from "react";
import "./GreetingsDescription.css";

export interface GreetingsDescriptionProps {
  description?: string;
}

export const GreetingsDescription = memo(
  ({
    description = "Manage your documents issued by SMU Academy or track your career goal.",
  }: GreetingsDescriptionProps) => {
    return <div className="greetings-description" data-testid="greet-desc">{description}</div>;
  }
);
