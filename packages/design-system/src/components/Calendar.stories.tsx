import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./ui/calendar";

const meta = {
  title: "Components/Data Display/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Calendar className="rounded-md border" />;
  },
};
