import { memo } from "react";

export interface ProgressChartProps {
  value: number;
  size: number;
}

export const ProgressChart = memo(
  ({ value = 0, size = 180 }: ProgressChartProps) => {
    const normalizedValue = Math.max(0, Math.min(value, 100));

    const radius = size / 2 - size * 0.1;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (normalizedValue / 100) * circumference;

    return (
      <svg width={size} height={size} data-testid="progress-chart">
        <circle
          stroke="lightgrey"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeWidth={size * 0.1}
        />
        <circle
          stroke="#493DF5"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeWidth={size * 0.1}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.35s ease-in-out",
            transform: "rotate(-90deg)", // Rotate the circle
            transformOrigin: `${size / 2}px ${size / 2}px`, // Set the origin for the rotation
          }}
        />
        <text
          x={"50%"}
          y={"50%"}
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={28}
          fontWeight={700}
          fill="#2B22B5"
        >
          {normalizedValue}%
        </text>
      </svg>
    );
  }
);
