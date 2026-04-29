import type { Meta, StoryObj } from '@storybook/react';
import { OpenEndAnswer } from './OpenEndAnswer';

const meta = {
  title: 'Survey Rendering/OpenEndAnswer',
  component: OpenEndAnswer,
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
          'OpenEndAnswer component for survey rendering. Displays a multi-line text input field (textarea) with support for focused and selected states, optional labels, validation errors, and required field indicators.',
      },
    },
  },
} satisfies Meta<typeof OpenEndAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Open ended answer question that can be recorded',
    required: true,
    placeholder: 'Type your answer here...',
  },
};

export const Focused: Story = {
  args: {
    label: 'Open ended answer question that can be recorded',
    required: true,
    focused: true,
    placeholder: 'Type your answer here...',
  },
};

export const Selected: Story = {
  args: {
    label: 'Open ended answer question that can be recorded',
    required: true,
    selected: true,
    placeholder: 'Type your answer here...',
  },
};

export const SelectedAndFocused: Story = {
  args: {
    label: 'Open ended answer question that can be recorded',
    required: true,
    selected: true,
    focused: true,
    placeholder: 'Type your answer here...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Open ended answer question that can be recorded',
    required: true,
    error: 'This question is required',
    placeholder: 'Type your answer here...',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Open ended answer question that can be recorded',
    required: true,
    defaultValue: 'Sample multi-line response\nSecond line',
    focused: true,
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive (click or tab to test)',
    required: true,
    placeholder: 'Click me for blue border, Tab for gray...',
  },
};
