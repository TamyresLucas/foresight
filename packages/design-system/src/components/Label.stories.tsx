import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

const meta = {
  title: "ShadCn/Form Elements/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Label text content.",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Email address",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Label htmlFor="disabled-input">Disabled field</Label>
      <Input id="disabled-input" disabled placeholder="Not editable" />
    </div>
  ),
};
