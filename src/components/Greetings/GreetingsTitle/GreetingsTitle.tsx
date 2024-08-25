import { memo } from "react";

import './GreetingsTitle.css'

export interface GreetingsTitleProps {
  fullName: string;
}

export const GreetingsTitle = memo(({ fullName }: GreetingsTitleProps) => {
  return <div className="greetings">Hi, {fullName} 👋</div>;
});
