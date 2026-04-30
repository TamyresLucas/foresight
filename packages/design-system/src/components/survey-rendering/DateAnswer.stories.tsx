import type { Meta, StoryObj } from '@storybook/react';
import { DateAnswer } from './DateAnswer';

const meta = {
  title: 'Survey Rendering/DateAnswer',
  component: DateAnswer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-md p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    focused: { control: 'boolean' },
    selected: { control: 'boolean' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'DateAnswer component for survey rendering. Displays a native date input field with support for focused and selected states, optional labels, validation errors, and required field indicators.',
      },
    },
  },
} satisfies Meta<typeof DateAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Date question with optional custom validation',
    required: true,
  },
};

export const Focused: Story = {
  args: {
    label: 'Date question with optional custom validation',
    required: true,
    focused: true,
  },
};

export const Selected: Story = {
  args: {
    label: 'Date question with optional custom validation',
    required: true,
    selected: true,
  },
};

export const SelectedAndFocused: Story = {
  args: {
    label: 'Date question with optional custom validation',
    required: true,
    selected: true,
    focused: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Date question with optional custom validation',
    required: true,
    error: 'This question is required',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Date question with optional custom validation',
    required: true,
    defaultValue: '2025-03-27',
    focused: true,
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive (click or tab to test)',
    required: true,
  },
};
