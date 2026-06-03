import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { CarouselQuestion, type CarouselQuestionValue } from "./CarouselQuestion";
import { QuestionText } from "./QuestionText";

const meta = {
  title: "Survey Rendering/CarouselQuestion",
  component: CarouselQuestion,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CarouselQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    id: "armchair",
    label: "Armchair",
    imageSrc:
      "https://images.pexels.com/photos/32710106/pexels-photo-32710106.jpeg?auto=compress&cs=tinysrgb&w=600",
    imageAlt: "Armchair in warm light",
  },
  {
    id: "fries",
    label: "French Fries",
    imageSrc:
      "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600",
    imageAlt: "French fries",
  },
  {
    id: "sushi",
    label: "Sushi",
    imageSrc:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
    imageAlt: "Sushi platter",
  },
  {
    id: "coffee",
    label: "Coffee",
    imageSrc:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    imageAlt: "Cup of coffee",
  },
];

const ratingOptions = [
  { value: "love", label: "Love it" },
  { value: "like", label: "Like it" },
  { value: "neutral", label: "Neutral" },
  { value: "dislike", label: "Dislike it" },
];

/** Carousel + radio buttons: rate each slide with a single-choice list. */
export const WithRadio: Story = {
  args: {
    items,
    answerType: "radio",
    options: ratingOptions,
    navigation: "bullets",
  },
};

/** Carousel + NPS: score each slide on the 1–10 scale, with anchor labels. */
export const WithNPS: Story = {
  args: {
    items,
    answerType: "nps",
    navigation: "bullets",
    npsLeftLabel: "Very unlikely",
    npsRightLabel: "Very likely",
  },
};

export const StatementCardsWithRadio: Story = {
  args: {
    items: items.map((it) => ({ ...it, imageSrc: undefined })),
    cardVariant: "statement",
    answerType: "radio",
    options: ratingOptions,
    navigation: "bullets",
  },
};

/**
 * The error *message* lives above the question text (via `QuestionText`); the
 * `error` prop on `CarouselQuestion` only flags the inputs invalid (red borders).
 */
export const WithError: Story = {
  render: (args) => (
    <div className="flex flex-col">
      <QuestionText
        label="How do you feel about each item?"
        required
        error="Please rate every item before continuing."
      />
      <CarouselQuestion {...args} />
    </div>
  ),
  args: {
    items,
    answerType: "radio",
    options: ratingOptions,
    error: "Please rate every item before continuing.",
  },
};

/** Controlled example wiring `value`/`onValueChange` and showing live answers. */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<CarouselQuestionValue>({});
    return (
      <div className="flex flex-col gap-4">
        <CarouselQuestion {...args} value={value} onValueChange={setValue} />
        <pre className="rounded bg-survey-muted-background p-3 text-xs text-survey-foreground">
          {JSON.stringify(value, null, 2)}
        </pre>
      </div>
    );
  },
  args: {
    items,
    answerType: "radio",
    options: ratingOptions,
    navigation: "bullets",
  },
};
