import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

const meta = {
  title: "Survey Rendering/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    id: "portrait",
    label: "Portrait",
    imageSrc: "https://images.pexels.com/photos/7784610/pexels-photo-7784610.jpeg?h=450&w=338&fit=crop",
    imageAlt: "Ice cream in a bowl, portrait format",
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
  {
    id: "macaroon",
    label: "Macaroon",
    imageSrc: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600",
    imageAlt: "Macaroons",
    imageWidth: 600,
    imageHeight: 400,
  },
];

export const CounterNavigation: Story = {
  args: {
    items,
    navigation: "counter",
  },
};

/** Pure image cards: the photo fills a fixed-height slide with no border. */
export const ImageCards: Story = {
  args: {
    items,
    cardVariant: "image",
    navigation: "counter",
  },
};

/** Combined cards: image on top with a statement bar beneath, framed by a border. */
export const ImageStatementCards: Story = {
  args: {
    items,
    cardVariant: "imageStatement",
    navigation: "counter",
  },
};

export const StatementCards: Story = {
  args: {
    items: items.map((it) => ({ ...it, imageSrc: undefined })),
    cardVariant: "statement",
    navigation: "counter",
  },
};

export const BulletNavigation: Story = {
  args: {
    items,
    navigation: "bullets",
  },
};

export const BulletNavigationStatementCards: Story = {
  args: {
    items: items.map((it) => ({ ...it, imageSrc: undefined })),
    cardVariant: "statement",
    navigation: "bullets",
  },
};

/**
 * Tighter height cap (max 300px) to show the hugging behaviour on portrait
 * images: the card narrows to keep the image ratio — no crop, no letterbox.
 */
export const TightHeightCap: Story = {
  args: {
    items,
    cardVariant: "imageStatement",
    navigation: "counter",
    maxSlideHeight: 300,
  },
};
