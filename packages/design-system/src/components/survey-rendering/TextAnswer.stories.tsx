import type { Meta, StoryObj } from '@storybook/react';
import { TextAnswer } from './TextAnswer';

const meta: Meta<typeof TextAnswer> = {
  title: 'Survey Rendering/TextAnswer',
  component: TextAnswer,
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
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'TextAnswer component for survey rendering. Displays a text input field with support for focused and selected states, optional labels, validation errors, and required field indicators.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextAnswer>;

export const Default: Story = {
  args: {
    label: 'Textual answer question with optional custom validation',
    required: true,
  },
};

export const Focused: Story = {
  args: {
    label: 'Textual answer question with optional custom validation',
    required: true,
    focused: true,
  },
};

export const Selected: Story = {
  args: {
    label: 'Textual answer question with optional custom validation',
    required: true,
    selected: true,
  },
};

export const SelectedAndFocused: Story = {
  args: {
    label: 'Textual answer question with optional custom validation',
    required: true,
    selected: true,
    focused: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Textual answer question with optional custom validation',
    required: true,
    error: 'This field is required',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Textual answer question with optional custom validation',
    required: true,
    defaultValue: 'Sample response',
    focused: true,
  },
};
