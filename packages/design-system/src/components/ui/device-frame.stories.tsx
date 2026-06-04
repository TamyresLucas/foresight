import type { Meta, StoryObj } from "@storybook/react";
import { DeviceFrame } from "./device-frame";

const meta = {
  title: "UI/DeviceFrame",
  component: DeviceFrame,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DeviceFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    screenClassName: "px-4 py-6",
    children: (
      <div className="space-y-4">
        <h2 className="text-survey-h2 font-survey-bold text-survey-foreground">
          Survey title
        </h2>
        {Array.from({ length: 12 }, (_, i) => (
          <p key={i} className="text-survey-body text-survey-foreground">
            Sample content line {i + 1} — scroll inside the phone screen to see
            how a long survey behaves on a mobile viewport.
          </p>
        ))}
      </div>
    ),
  },
};
