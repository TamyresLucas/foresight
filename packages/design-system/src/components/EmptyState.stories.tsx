import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Button } from "./ui/button";

// Empty State Component
interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
  };
}

const EmptyState = ({
  icon,
  title,
  description,
  action,
  secondaryAction,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
      {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground max-w-sm mb-6">
          {description}
        </p>
      )}
      {(action || secondaryAction) && (
        <div className="flex gap-3">
          {secondaryAction && (
            <Button variant="outline" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
          {action && <Button onClick={action.onClick}>{action.label}</Button>}
        </div>
      )}
    </div>
  );
};

const ResponsesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const meta = {
  title: "ShadCn/Feedback/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "No responses yet",
    description: "Share your survey to start collecting responses",
    action: { label: "Copy Link" },
    icon: <ResponsesIcon />,
  },
  render: (args) => (
    <div className="w-full max-w-2xl border border-primary/20 rounded-lg bg-card p-4">
      <EmptyState {...(args || {})} />
    </div>
  ),
};

export const Minimal = {
  args: {},
  render: () => (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      <p className="text-sm text-muted-foreground">No questions added yet</p>
      <Button variant="link" className="mt-2">
        Add your first question
      </Button>
    </div>
  ),
};
