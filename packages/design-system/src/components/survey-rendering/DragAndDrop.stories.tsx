import type { Meta, StoryObj } from "@storybook/react";
import { DragAndDrop } from "./DragAndDrop";

const meta = {
  title: "Survey Rendering/DragAndDrop",
  component: DragAndDrop,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DragAndDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  { id: "image1", label: "Image 1" },
  { id: "image2", label: "Image 2" },
  { id: "image3", label: "Image 3" },
  { id: "image4", label: "Image 4" },
  { id: "image5", label: "Image 5" },
];

export const Default: Story = {
  args: { items: sampleItems },
};

export const Prefilled: Story = {
  args: {
    items: sampleItems,
    defaultValue: ["image3", "image1", "image5"],
  },
};

export const CustomLabel: Story = {
  args: {
    items: sampleItems,
    dropZoneLabel: "Order of preference",
  },
};

export const WithGroups: Story = {
  args: {
    items: [
      { id: "apple", label: "Apple", group: "Fruits" },
      { id: "banana", label: "Banana", group: "Fruits" },
      { id: "cherry", label: "Cherry", group: "Fruits" },
      { id: "carrot", label: "Carrot", group: "Vegetables" },
      { id: "broccoli", label: "Broccoli", group: "Vegetables" },
    ],
    sourceGroups: ["Fruits", "Vegetables"],
    dropZoneLabel: "Rank your favorites",
  },
};
