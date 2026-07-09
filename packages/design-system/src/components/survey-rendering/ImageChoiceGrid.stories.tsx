import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ImageChoiceGrid, type ImageChoiceGridColumn } from "./ImageChoiceGrid";

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
          "ImageChoiceGrid works like ChoiceGrid, but each column option is a selectable image instead of a radio button. Each row is a single-choice question: picking an image selects that column for the row (Radix RadioGroup keeps the single-select + keyboard semantics). A selected image is tinted with the brand primary at low opacity and outlined with the primary color at full opacity, matching the other image question types. Responsive: a table on wide containers, an accordion of image options on narrow ones.\n\n" +
          "**Column and image sizing:** the `<colgroup>` splits the table width evenly across the row-label column and every choice column (`100 / (columns.length + 1)%` each), so all choice columns are always equal width regardless of how many there are. Each image itself renders at `width=\"100%\"` in Card's fill-width mode (no explicit `height`), so it fills that column's width and keeps its own natural aspect ratio — see the **MixedAspectRatios** story for a landscape/portrait example.\n\n" +
          "**Attached open end:** flag a column `openEnd` (conventionally labeled \"Other\") to reveal an OpenEndInput for the row once selected — the same attached-open-end pattern as RadioGroup, Checkbox, ChoiceGrid, and HybridGrid. See the **With open end** stories here, and the **OpenEndInput** story for its own states.",
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

// Real photos used as the per-column choices, repeated across every row.
const columns = [
  {
    value: "apples",
    label: "Apples",
    src: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=300&fit=crop",
    alt: "Apples",
  },
  {
    value: "pears",
    label: "Pears",
    src: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=300&h=300&fit=crop",
    alt: "Pears",
  },
  {
    value: "lemons",
    label: "Lemons",
    src: "https://images.unsplash.com/photo-1582287086947-1fd0fdac5cc9?w=300&h=300&fit=crop",
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

// Deliberately mismatched aspect ratios (landscape, portrait) to show that
// each choice image fills its own column's width and keeps its own natural
// ratio, rather than being forced into a uniform square — the two columns
// still split the table width evenly between them.
const aspectRatioColumns = [
  {
    value: "landscape",
    label: "Landscape",
    src: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=300&h=200&fit=crop",
    alt: "Landscape photo",
  },
  {
    value: "portrait",
    label: "Portrait",
    src: "https://images.pexels.com/photos/7784610/pexels-photo-7784610.jpeg?w=300&h=450&fit=crop",
    alt: "Ice cream in a bowl, portrait format",
  },
];

export const MixedAspectRatios: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Landscape and portrait images side by side: both columns still split the table width evenly (`100 / (columns.length + 1)%` each), and each image fills its own column's width via Card's fill-width mode — no forced square crop, no leftover blank space around either shape.",
      },
    },
  },
  args: {
    rows,
    columns: aspectRatioColumns,
  },
};

// --- Open-end reveal ---
// A column flagged `openEnd` (e.g. "Other") reveals a free-text field for the
// row once selected: an extra row directly below the answered row on desktop,
// inline beneath the choice within the same accordion item on mobile.

const openEndColumns: ImageChoiceGridColumn[] = [
  ...columns,
  {
    value: "other",
    label: "Other",
    src: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop",
    alt: "Assorted fruit basket",
    openEnd: true,
    openEndPlaceholder: "Tell us more…",
  },
];

const WithOpenEndRender = (args: React.ComponentProps<typeof ImageChoiceGrid>) => {
  const [value, setValue] = React.useState<Record<string, string>>({ store1: "other" });
  const [openEndValues, setOpenEndValues] = React.useState<Record<string, string>>({});
  return (
    <ImageChoiceGrid
      {...args}
      value={value}
      onValueChange={setValue}
      openEndValues={openEndValues}
      onOpenEndValuesChange={setOpenEndValues}
    />
  );
};

export const DesktopWithOpenEnd: Story = {
  name: "Desktop / With open end",
  parameters: {
    docs: {
      description: {
        story:
          "The revealed input sits in its own row directly below the answered row, but only spans the selected column's own width (aligned under \"Other\" here) rather than the full grid — empty cells before/after it keep the surrounding row structure intact.",
      },
    },
  },
  render: WithOpenEndRender,
  args: { rows, columns: openEndColumns, variant: "desktop" },
};

export const MobileWithOpenEnd: Story = {
  name: "Mobile / With open end",
  render: WithOpenEndRender,
  args: { rows: [rows[0]], columns: openEndColumns, variant: "mobile" },
  decorators: [
    (Story) => (
      <div data-survey-theme className="w-[390px] mx-auto p-4">
        <Story />
      </div>
    ),
  ],
  parameters: { viewport: { defaultViewport: "iphone12" } },
};

