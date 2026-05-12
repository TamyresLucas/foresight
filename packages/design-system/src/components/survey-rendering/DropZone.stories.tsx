import type { Meta, StoryObj } from '@storybook/react';
import { DropZone } from './DropZone';
import { Card } from './Card';

const meta = {
  title: 'Survey Rendering/DropZone',
  component: DropZone,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DropZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Choice 1' },
};

export const WithCard: Story = {
  args: { label: 'Choice 1' },
  render: (args) => (
    <DropZone {...args}>
      <Card shape="rectangle">Option</Card>
    </DropZone>
  ),
};

export const CustomLabel: Story = {
  args: { label: 'Drop your answer here' },
};

export const MultipleCards: Story = {
  args: { label: 'Choice 1' },
  render: (args) => (
    <DropZone {...args}>
      <Card shape="rectangle">Option A</Card>
      <Card shape="rectangle">Option B</Card>
      <Card shape="rectangle">Option C</Card>
    </DropZone>
  ),
};

export const FixedSize: Story = {
  args: { label: 'Choice 1', width: 320, height: 200 },
};
