import type { Meta, StoryObj } from "@storybook/react";
import { ImageChoiceGrid } from "./ImageChoiceGrid";

const meta = {
  title: "Survey Rendering/ImageChoiceGrid",
  component: ImageChoiceGrid,
  tags: ["autodocs"],
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
    docs: {
      description: {
        component:
          "ImageChoiceGrid works like ChoiceGrid, but each column option is a selectable image instead of a radio button. Each row is a single-choice question: picking an image selects that column for the row (Radix RadioGroup keeps the single-select + keyboard semantics). A selected image is tinted with the brand primary at low opacity and outlined with the primary color at full opacity, matching the other image question types. Responsive: a table on wide containers, an accordion of image options on narrow ones.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        data-survey-theme
        className="w-screen max-w-[390px] md:max-w-2xl mx-auto p-4"
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImageChoiceGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  { id: "service", label: "Service" },
  { id: "value", label: "Value for money" },
  { id: "quality", label: "Quality" },
];

// Reaction faces used as the per-column choices, repeated across every row.
const columns = [
  {
    value: "love",
    label: "Love it",
    src: "https://images.unsplash.com/photo-1545315003-c5ad6226c272?w=120&h=120&fit=crop",
    alt: "Smiling face",
  },
  {
    value: "like",
    label: "Like it",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&fit=crop",
    alt: "Content face",
  },
  {
    value: "neutral",
    label: "Neutral",
    src: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?w=120&h=120&fit=crop",
    alt: "Neutral face",
  },
  {
    value: "dislike",
    label: "Dislike it",
    src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=120&h=120&fit=crop",
    alt: "Unhappy face",
  },
];

export const Default: Story = {
  args: { rows, columns },
};

export const Selected: Story = {
  args: {
    rows,
    columns,
    defaultValue: { service: "love", quality: "neutral" },
  },
};

export const Desktop: Story = {
  args: { rows, columns, variant: "desktop" },
};

export const Mobile: Story = {
  args: { rows, columns, variant: "mobile", defaultValue: { service: "love" } },
  decorators: [
    (Story) => (
      <div data-survey-theme className="w-[390px] mx-auto p-4">
        <Story />
      </div>
    ),
  ],
};

export const WithError: Story = {
  args: { rows, columns, error: "Please answer every row" },
};

export const Disabled: Story = {
  args: { rows, columns, defaultValue: { service: "love" }, disabled: true },
};
