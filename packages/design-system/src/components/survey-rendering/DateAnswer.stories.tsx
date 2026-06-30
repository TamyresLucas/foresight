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
    focused: { control: 'boolean' },
    selected: { control: 'boolean' },
    error: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'DateAnswer component for survey rendering. Displays a native date input field with support for focused and selected states. Compose with QuestionText (and optionally QuestionField) for the question label and error message.',
      },
    },
  },
} satisfies Meta<typeof DateAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Focused: Story = {
  args: { focused: true },
};

export const Selected: Story = {
  args: { selected: true },
};

export const SelectedAndFocused: Story = {
  args: { selected: true, focused: true },
};

export const WithError: Story = {
  args: { error: 'This question is required' },
};

export const WithValue: Story = {
  args: { defaultValue: '2025-03-27', focused: true },
};

export const Interactive: Story = {};
