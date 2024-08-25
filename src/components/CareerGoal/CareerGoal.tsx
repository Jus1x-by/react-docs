import { memo } from "react";
import { Goal } from "../../api/requests/goals/types";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { ColumnHeader } from "../Documents/ColumnHeader/ColumnHeader";
import { ProgressChart } from "../ProgressChart/ProgressChart";
import { Title } from "../Title/Title";

import "./CareerGoal.css";
import { GoalTitle } from "./GoalTitle/GoalTitle";

interface CareerGoalProps {
  goal: Goal;
}

export const CareerGoal = memo(({ goal }: CareerGoalProps) => {
  return (
    <div data-testid="career-goal">
      <Title text="career goal" className="mb-16" />
      <Container
        className="career-goal__container"
        data-testid="career-goal-container"
      >
        <ColumnHeader
          headerText="your progress"
          headerClassName="career-goal__column-header"
        />
        <ProgressChart value={goal?.progress ?? 0} size={180} />
        <GoalTitle role={goal?.name ?? ""} />
        <Button text="View Insights" />
      </Container>
    </div>
  );
});
