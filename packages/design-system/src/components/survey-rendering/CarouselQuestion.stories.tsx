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
    id: "portrait",
    label: "Portrait",
    imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?h=450&w=338&fit=crop",
    imageAlt: "Portrait of a person smiling",
    imageWidth: 338,
    imageHeight: 450,
  },
  {
    id: "fries",
    label: "French Fries",
    imageSrc: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600",
    imageAlt: "French fries",
    imageWidth: 600,
    imageHeight: 400,
  },
  {
    id: "sushi",
    label: "Sushi",
    imageSrc: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
    imageAlt: "Sushi platter",
    imageWidth: 600,
    imageHeight: 400,
  },
  {
    id: "coffee",
    label: "Coffee",
    imageSrc: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    imageAlt: "Cup of coffee",
    imageWidth: 600,
    imageHeight: 400,
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
        error="This question is required"
      />
      <CarouselQuestion {...args} />
    </div>
  ),
  args: {
    items,
    answerType: "radio",
    options: ratingOptions,
    error: "This question is required",
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

/**
 * Tighter height cap (max 280px) to show the hugging behaviour on portrait
 * images: the card narrows to keep the image ratio — no crop, no letterbox.
 */
export const TightHeightCap: Story = {
  args: {
    items,
    answerType: "nps",
    navigation: "bullets",
    npsLeftLabel: "Very unlikely",
    npsRightLabel: "Very likely",
    maxSlideHeight: 280,
  },
};

const manyItems = [
  ...items, // portrait, fries, sushi, coffee (4)
  { id: "macaroon", label: "Macaroon", imageSrc: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600", imageAlt: "Macaroons", imageWidth: 600, imageHeight: 400 },
  { id: "pizza", label: "Pizza", imageSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600", imageAlt: "Pizza", imageWidth: 600, imageHeight: 400 },
  { id: "salad", label: "Salad", imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600", imageAlt: "Salad bowl", imageWidth: 600, imageHeight: 400 },
  { id: "ramen", label: "Ramen", imageSrc: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600", imageAlt: "Bowl of ramen", imageWidth: 600, imageHeight: 400 },
];

/**
 * Overflow indicator: with more than 6 slides, the bullet navigation can't show
 * one dot per slide at once. It shows a sliding window of up to 6 full-size
 * bullets centered on the active slide, plus a smaller "more" dot on each side
 * that still has hidden slides — signalling there are more slides than the
 * bullets currently display. Navigate with the arrows (or answer to advance) to
 * watch the window slide and the leading/trailing "more" dots appear.
 */
export const ManySlidesOverflow: Story = {
  args: {
    items: manyItems,
    answerType: "nps",
    navigation: "bullets",
    npsLeftLabel: "Very unlikely",
    npsRightLabel: "Very likely",
  },
};
