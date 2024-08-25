export interface Goal {
  id: number;
  name: string;
  description: string;
  category: string;
  type: "technical" | "non-technical" | string;
  progress: number;
}

export interface GoalsResponse {
  data: Goal[];
}
