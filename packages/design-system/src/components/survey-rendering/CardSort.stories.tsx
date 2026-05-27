import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { CardSort } from "./CardSort";

const meta = {
  title: "Survey Rendering/CardSort",
  component: CardSort,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardSort>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  { id: "apple", label: "Apple" },
  { id: "banana", label: "Banana" },
  { id: "cherry", label: "Cherry" },
  { id: "date", label: "Date" },
  { id: "elderberry", label: "Elderberry" },
];

export const Default: Story = {
  args: { items: sampleItems },
};

export const Prefilled: Story = {
  args: {
    items: sampleItems,
    defaultValue: {
      apple: "choice1",
      banana: "choice2",
      cherry: "choice1",
    },
  },
};

export const CustomLabels: Story = {
  args: {
    items: sampleItems,
    choiceLabels: ["Like", "Dislike"],
  },
};

export const WithGroups: Story = {
  args: {
    items: [
      { id: "apple", label: "Apple", group: "Group 1" },
      { id: "banana", label: "Banana", group: "Group 1" },
      { id: "cherry", label: "Cherry", group: "Group 1" },
      { id: "date", label: "Date", group: "Group 2" },
      { id: "elderberry", label: "Elderberry", group: "Group 2" },
    ],
    sourceGroups: ["Group 1", "Group 2"],
  },
};

export const DragStates: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-survey-foreground font-survey">
        Drag a card to see the primary-colored ghost and empty placeholder.
      </p>
      <div className="flex gap-4 items-start">
        <Card size="md">Normal card</Card>
        <Card size="md" dragged>Placeholder (invisible)</Card>
        <Card
          size="md"
          className="bg-survey-primary text-survey-primary-foreground border-survey-primary"
        >
          Drag ghost preview
        </Card>
      </div>
    </div>
  ),
};
