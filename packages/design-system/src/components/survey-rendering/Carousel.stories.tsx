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

// Naturally landscape source photos (no cropping) so the rendered slide height
// stays under 500px at the story width (image always fills the width).
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
  {
    id: "macaroon",
    label: "Macaroon",
    imageSrc:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600",
    imageAlt: "Macaroons",
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
