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
