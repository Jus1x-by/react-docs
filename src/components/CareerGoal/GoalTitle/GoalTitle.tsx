import { memo } from "react";

import "./GoalTitle.css";
import { Title } from "../../Title/Title";

export interface GoalTitleProps {
  role?: string;
}

export const GoalTitle = memo(({ role = "" }: GoalTitleProps) => {
  return (
    <div className="goal-title">
      <div className="goal-title__text">I want to become a</div>
      <Title text={role} />
    </div>
  );
});
