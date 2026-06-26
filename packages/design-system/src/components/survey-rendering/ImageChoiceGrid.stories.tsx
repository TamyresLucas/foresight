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
        <p className="mb-4 text-survey-foreground text-survey-body font-survey-regular font-survey">
          What fruit was on display in the following stores?
        </p>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImageChoiceGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  { id: "store1", label: "Store 1" },
  { id: "store2", label: "Store 2" },
  { id: "store3", label: "Store 3" },
];

// Fruit emoji used as the per-column choices, repeated across every row.
// Twemoji assets are keyed by Unicode codepoint, so the fruit is deterministic.
const TWEMOJI = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72";
const columns = [
  {
    value: "apples",
    label: "Apples",
    src: `${TWEMOJI}/1f34f.png`, // 🍏 green apple
    alt: "Apples",
  },
  {
    value: "pears",
    label: "Pears",
    src: `${TWEMOJI}/1f350.png`, // 🍐 pear
    alt: "Pears",
  },
  {
    value: "lemons",
    label: "Lemons",
    src: `${TWEMOJI}/1f34b.png`, // 🍋 lemon
    alt: "Lemons",
  },
];

export const Default: Story = {
  args: { rows, columns },
};

export const Selected: Story = {
  args: {
    rows,
    columns,
    defaultValue: { store1: "apples", store3: "lemons" },
  },
};

export const Desktop: Story = {
  args: { rows, columns, variant: "desktop" },
};

export const Mobile: Story = {
  args: { rows, columns, variant: "mobile", defaultValue: { store1: "apples" } },
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
  args: { rows, columns, defaultValue: { store1: "apples" }, disabled: true },
};
