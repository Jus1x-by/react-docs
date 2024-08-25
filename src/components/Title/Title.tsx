import { memo } from "react";
import { mergeClass } from "../../util/helper";

import "./Title.css";

interface TitlePtops {
  text?: string;
  className?: string;
}

export const Title = memo(({ text, className }: TitlePtops) => {
  return (
    <div className={mergeClass("title", className)} data-testid="title-text">
      {text}
    </div>
  );
});
