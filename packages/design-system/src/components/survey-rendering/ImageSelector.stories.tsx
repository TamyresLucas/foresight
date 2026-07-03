import type { Meta, StoryObj } from '@storybook/react';
import { QuestionText } from './QuestionText';
import { ImageSelector } from './ImageSelector';

const rainbow =
  'https://images.unsplash.com/photo-1507783548227-544c3b8fc065?w=300&h=160&fit=crop';
const sunflower =
  'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=160&fit=crop';

const options = [
  { id: 'c1', label: 'Choice 1', src: rainbow, alt: 'Rainbow over a field' },
  { id: 'c2', label: 'Choice 2', src: sunflower, alt: 'Sunflower' },
  { id: 'c3', label: 'Choice 3', src: rainbow, alt: 'Rainbow over a field' },
  { id: 'c4', label: 'Choice 4', src: sunflower, alt: 'Sunflower' },
  { id: 'c5', label: 'Choice 5', src: rainbow, alt: 'Rainbow over a field' },
  { id: 'c6', label: 'Choice 6', src: sunflower, alt: 'Sunflower' },
];

// Same furniture photos as Card's `ImageOnlyGroup` story, so the `imageOnly`
// variant here can be compared 1:1 against Card's own image-only treatment.
const sofa =
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop';
const chair =
  'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop';
const desk =
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=300&fit=crop';

const furnitureOptions = [
  { id: 'sofa', label: 'Sofa', src: sofa, alt: 'Sofa' },
  { id: 'chair', label: 'Chair', src: chair, alt: 'Chair' },
  { id: 'desk', label: 'Desk', src: desk, alt: 'Desk' },
];

// Deliberately mismatched aspect ratios (landscape, portrait, extra-wide) to
// show that Card renders each image in fill-width mode — no explicit `height`
// is ever passed, so the image (and the card around it) keeps its own true
// ratio instead of being forced into a uniform square.
const friesLandscape =
  'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=250&fit=crop';
const portraitTall =
  'https://images.pexels.com/photos/7784610/pexels-photo-7784610.jpeg?w=300&h=450&fit=crop';
const sushiWide =
  'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=200&fit=crop';

const originalRatioOptions = [
  { id: 'fries', label: 'Landscape (8:5)', src: friesLandscape, alt: 'French fries' },
  { id: 'portrait', label: 'Portrait (2:3)', src: portraitTall, alt: 'Ice cream in a bowl, portrait format' },
  { id: 'sushi', label: 'Wide banner (2.5:1)', src: sushiWide, alt: 'Sushi platter' },
];

const meta = {
  title: 'Survey Rendering/ImageSelector',
  component: ImageSelector,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div data-survey-theme className="w-full max-w-2xl p-4 md:p-8 mx-auto">
        <Story />
      </div>
    ),
  ],
  args: {
    options,
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['imageStatement', 'imageOnly'] },
    selectionMode: { control: 'inline-radio', options: ['single', 'multiple'] },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'ImageSelector: a single- or multiple-answer question where the respondent selects whole images. It works like ImageAreaSelector, but each option is an entire image (with an optional caption) rather than a region within one image. A selected image mirrors the same framing used by ImageAreaEvaluator/ImageAreaSelector: a solid primary-color outer border, a white ring just inside it, and a low-opacity primary tint over the image; its caption (when shown) is also highlighted in the primary color. Compose with QuestionText for the question label and error message.\n\n' +
          '**Variant:** `imageStatement` (default) shows each option\'s `label` in a caption strip below the image. `imageOnly` always shows just the bare image with no caption strip, regardless of `label` — `label` is still used as the option\'s accessible name. See the **ImageOnly** and **ImageOnlySelected** stories.\n\n' +
          '**Hover/focus:** each option is a plain Card, so it automatically gets Card\'s own hover (a 2px border plus a white/grey wash over the image) and keyboard-focus ring — no extra wiring here, both states combine cleanly with the selected framing above.\n\n' +
          '**Selection modes:** `multiple` (default) lets any number of images be selected; `single` keeps at most one selected, so picking another replaces the previous selection. Clicking a selected image deselects it in both modes.',
      },
    },
  },
} satisfies Meta<typeof ImageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <QuestionText label="Single or Multiple answers question using Images" />
      <ImageSelector {...args} />
    </div>
  ),
  args: {
    defaultValue: ['c1'],
  },
};

export const Multiple: Story = {
  args: {
    selectionMode: 'multiple',
    defaultValue: ['c1', 'c2'],
  },
};

export const Single: Story = {
  args: {
    selectionMode: 'single',
    defaultValue: ['c1'],
  },
};

export const ImageOnly: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `imageOnly` variant: no caption strip, just the bare images (`label` is still used as each option\'s accessible name). Uses the same furniture photos as Card\'s `ImageOnlyGroup` story for a direct comparison.',
      },
    },
  },
  args: {
    variant: 'imageOnly',
    options: furnitureOptions,
  },
};

export const ImageOnlySelected: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `imageOnly` variant with a selection: the same framing as Card\'s `ImageOnlySelected` story — a solid primary-color outer border, a white ring just inside it, and a low-opacity primary tint over the image.',
      },
    },
  },
  args: {
    variant: 'imageOnly',
    options: furnitureOptions,
    defaultValue: ['chair'],
  },
};

export const OriginalAspectRatio: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "ImageSelector never crops to a fixed box: Card renders each option in its \"fill-width\" mode (no explicit `height` is passed), so the image keeps its own natural ratio and the card's height follows it. Mixing a landscape, a portrait, and an extra-wide photo here shows each card taking on a different shape to match — none of them forced into a square.",
      },
    },
  },
  args: {
    variant: 'imageOnly',
    options: originalRatioOptions,
  },
};

