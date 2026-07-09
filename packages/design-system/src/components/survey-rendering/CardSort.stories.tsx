import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { CardSort } from "./CardSort";

const meta = {
  title: "Survey Rendering/CardSort",
  component: CardSort,
  tags: ["autodocs"],
  decorators: [
    // `w-screen` (not `w-full`) gives the wrapper a definite, viewport-tied
    // width: Storybook's centered layout otherwise shrink-wraps `w-full` to
    // CardSort's own content, which — especially for compact `imageOnly`
    // cards — can stay under the 480px stacked/side-by-side breakpoint
    // regardless of the actual browser width.
    (Story) => (
      <div className="w-screen max-w-4xl p-8">
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

const imageItems = [
  {
    id: "apple",
    label: "Apple",
    imageSrc: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=300&fit=crop",
  },
  {
    id: "pear",
    label: "Pear",
    imageSrc: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=300&h=300&fit=crop",
  },
  {
    id: "lemon",
    label: "Lemon",
    imageSrc: "https://images.unsplash.com/photo-1582287086947-1fd0fdac5cc9?w=300&h=300&fit=crop",
  },
];

export const ImageOnly: Story = {
  name: "Image only",
  args: {
    items: imageItems,
    cardVariant: "imageOnly",
    cardShape: "square",
  },
};

// Landscape, portrait, and square source photos, deliberately mismatched in
// aspect ratio (and shape: "rectangle" here, so each card keeps its image's
// own ratio instead of being cropped to a square). The source column and
// both choice columns share the page width equally (each `flex-1`); every
// card fills its column's width regardless of which column it's in — height
// is what varies with the image's own ratio — so a card dropped into either
// column (like "Portrait" here, prefilled into Choice 1) is already the
// right width, and the column itself never resizes on drop.
const mixedSizeItems = [
  {
    id: "landscape",
    label: "Landscape",
    imageSrc: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=300&h=200&fit=crop",
  },
  {
    id: "portrait",
    label: "Portrait",
    imageSrc: "https://images.pexels.com/photos/7784610/pexels-photo-7784610.jpeg?w=300&h=450&fit=crop",
  },
  {
    id: "apple",
    label: "Apple",
    imageSrc: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=300&fit=crop",
  },
  {
    id: "pear",
    label: "Pear",
    imageSrc: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=300&h=300&fit=crop",
  },
];

export const ImageOnlyMixedSizes: Story = {
  name: "Image only / Mixed sizes",
  args: {
    items: mixedSizeItems,
    cardVariant: "imageOnly",
    defaultValue: { portrait: "choice1" },
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
