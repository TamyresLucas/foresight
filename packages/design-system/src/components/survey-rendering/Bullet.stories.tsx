import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Bullet } from "./Bullet";

const meta = {
  title: "Survey Rendering/Bullet",
  component: Bullet,
  tags: ["autodocs"],
  argTypes: {
    selected: { control: "boolean" },
    answered: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="p-8 font-survey">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Bullet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { selected: false, answered: false },
};

export const Selected: Story = {
  args: { selected: true, answered: false },
};

export const Answered: Story = {
  args: { selected: false, answered: true },
};

export const AnsweredSelected: Story = {
  args: { selected: true, answered: true },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Bullet selected={false} answered={false} aria-label="Not answered, not selected" />
      <Bullet selected answered={false} aria-label="Not answered, selected" />
      <Bullet selected={false} answered aria-label="Answered, not selected" />
      <Bullet selected answered aria-label="Answered, selected" />
    </div>
  ),
};

// Focused variants — each button auto-focuses on mount to show the keyboard ring.
const FocusedBullet = (props: React.ComponentProps<typeof Bullet>) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => { ref.current?.focus(); }, []);
  return <Bullet ref={ref} {...props} />;
};

export const DefaultFocused: Story = {
  render: () => <FocusedBullet selected={false} answered={false} aria-label="Default focused" />,
};

export const SelectedFocused: Story = {
  render: () => <FocusedBullet selected answered={false} aria-label="Selected focused" />,
};

export const AnsweredFocused: Story = {
  render: () => <FocusedBullet selected={false} answered aria-label="Answered focused" />,
};

export const AnsweredSelectedFocused: Story = {
  render: () => <FocusedBullet selected answered aria-label="Answered selected focused" />,
};

export const AllStatesFocused: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <FocusedBullet selected={false} answered={false} aria-label="Default focused" />
      <FocusedBullet selected answered={false} aria-label="Selected focused" />
      <FocusedBullet selected={false} answered aria-label="Answered focused" />
      <FocusedBullet selected answered aria-label="Answered selected focused" />
    </div>
  ),
};
