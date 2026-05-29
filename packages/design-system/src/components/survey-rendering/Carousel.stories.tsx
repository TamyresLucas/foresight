import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

const meta = {
  title: "Survey Rendering/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[320px] p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    id: "armchair",
    label: "Armchair",
    imageSrc:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400",
    imageAlt: "Yellow armchair",
  },
  {
    id: "fries",
    label: "French Fries",
    imageSrc:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
    imageAlt: "French fries",
  },
  {
    id: "sushi",
    label: "Sushi",
    imageSrc:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400",
    imageAlt: "Sushi platter",
  },
  {
    id: "coffee",
    label: "Coffee",
    imageSrc:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
    imageAlt: "Cup of coffee",
  },
  {
    id: "macaroon",
    label: "Macaroon",
    imageSrc:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400",
    imageAlt: "Macaroons",
  },
];

export const CounterNavigation: Story = {
  args: {
    items,
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
