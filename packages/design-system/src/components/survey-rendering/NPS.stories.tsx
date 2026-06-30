import type { Meta, StoryObj } from '@storybook/react';
import { NPS, NPSOption } from './NPS';

const meta = {
  title: 'Survey Rendering/NPS',
  component: NPS,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    error: { control: 'text' },
  },
} satisfies Meta<typeof NPS>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <NPS {...args} />,
};

export const WithSelection: Story = {
  render: (args) => <NPS {...args} defaultValue="8" />,
};

export const Focused: Story = {
  render: (args) => (
    <NPS {...args}>
      {Array.from({ length: 10 }, (_, i) => {
        const value = String(i + 1);
        return <NPSOption key={value} value={value} focused={i === 0} />;
      })}
    </NPS>
  ),
};

export const FocusedAndSelected: Story = {
  render: (args) => (
    <NPS {...args} defaultValue="1">
      {Array.from({ length: 10 }, (_, i) => {
        const value = String(i + 1);
        return <NPSOption key={value} value={value} focused={i === 0} />;
      })}
    </NPS>
  ),
};

export const WithLabels: Story = {
  render: (args) => (
    <NPS {...args} leftLabel="Very unlikely" rightLabel="Very likely" />
  ),
};

export const WithError: Story = {
  render: (args) => <NPS {...args} error="This question is required" />,
};
