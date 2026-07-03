import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Survey Rendering/Card',
  component: Card,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Statement (default) ---

export const Default: Story = {
  args: { children: 'Option' },
};

export const Selected: Story = {
  args: { children: 'Option', selected: true },
};

export const Focused: Story = {
  args: { children: 'Option', focused: true },
};

export const FocusedAndSelected: Story = {
  args: { children: 'Option', focused: true, selected: true },
};

export const Square: Story = {
  args: { children: 'Option', shape: 'square' },
};

export const SizeSmall: Story = {
  args: { children: 'Option', size: 'sm' },
};

export const SizeLarge: Story = {
  args: { children: 'Option', size: 'lg' },
};

export const CustomDimensions: Story = {
  args: { children: 'Option', width: 240, height: 120 },
};

export const Group: Story = {
  args: { children: 'Option' },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Card>Option A</Card>
      <Card selected>Option B</Card>
      <Card>Option C</Card>
    </div>
  ),
};

// --- Image Only ---

export const ImageOnly: Story = {
  args: {
    variant: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
    imageAlt: 'Green sofa',
    width: 200,
    height: 200,
  },
};

export const ImageOnlySelected: Story = {
  args: {
    variant: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
    imageAlt: 'Green sofa',
    selected: true,
    width: 200,
    height: 200,
  },
};

export const ImageOnlyFocused: Story = {
  args: {
    variant: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
    imageAlt: 'Green sofa',
    focused: true,
    width: 200,
    height: 200,
  },
};

export const ImageOnlyFocusedAndSelected: Story = {
  args: {
    variant: 'image',
    imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
    imageAlt: 'Green sofa',
    focused: true,
    selected: true,
    width: 200,
    height: 200,
  },
};

export const ImageOnlySquare: Story = {
  args: {
    variant: 'image',
    shape: 'square',
    imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
    imageAlt: 'Green sofa',
    width: 200,
  },
};

export const ImageOnlyGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Card variant="image" imageSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop" imageAlt="Sofa" width={160} height={160} />
      <Card variant="image" imageSrc="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop" imageAlt="Chair" width={160} height={160} selected />
      <Card variant="image" imageSrc="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=300&fit=crop" imageAlt="Desk" width={160} height={160} />
    </div>
  ),
};

// --- Image + Statement ---

export const ImageStatement: Story = {
  args: {
    variant: 'imageStatement',
    imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
    imageAlt: 'Green sofa',
    children: 'Armchair',
    width: 257,
    height: 311,
  },
};

export const ImageStatementSelected: Story = {
  args: {
    variant: 'imageStatement',
    imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
    imageAlt: 'Green sofa',
    children: 'Armchair',
    selected: true,
    width: 257,
    height: 311,
  },
};

export const ImageStatementFocused: Story = {
  args: {
    variant: 'imageStatement',
    imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
    imageAlt: 'Green sofa',
    children: 'Armchair',
    focused: true,
    width: 257,
    height: 311,
  },
};

export const ImageStatementFocusedAndSelected: Story = {
  args: {
    variant: 'imageStatement',
    imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
    imageAlt: 'Green sofa',
    children: 'Armchair',
    focused: true,
    selected: true,
    width: 257,
    height: 311,
  },
};

export const ImageStatementLongText: Story = {
  args: {
    variant: 'imageStatement',
    imageSrc: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop',
    imageAlt: 'Chair',
    children: 'A French fry is a thinly sliced strip of potato that is deep-fried until crispy and golden.',
    width: 257,
    height: 480,
  },
};

export const ImageStatementGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Card variant="imageStatement" imageSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop" imageAlt="Sofa" width={200} height={260}>
        Sofa
      </Card>
      <Card variant="imageStatement" imageSrc="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop" imageAlt="Chair" width={200} height={260} selected>
        Chair
      </Card>
      <Card variant="imageStatement" imageSrc="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=300&fit=crop" imageAlt="Desk" width={200} height={260}>
        Desk
      </Card>
    </div>
  ),
};

// --- All Variants Side by Side ---

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-start gap-4">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-xs text-muted-foreground">Statement</span>
        <Card variant="statement" width={160} height={160}>Option A</Card>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-xs text-muted-foreground">Image</span>
        <Card variant="image" imageSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop" imageAlt="Sofa" width={160} height={160} />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-xs text-muted-foreground">Image + Statement</span>
        <Card variant="imageStatement" imageSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop" imageAlt="Sofa" width={200} height={260}>
          Armchair
        </Card>
      </div>
    </div>
  ),
};
