import type { Meta, StoryObj } from '@storybook/react';
import { QuestionText } from './QuestionText';

const meta = {
  title: 'Survey Rendering/QuestionText',
  component: QuestionText,
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
    error: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'QuestionText displays the question prompt for any survey question type. It owns the optional error message shown above the prompt; when an error is present, the prompt itself also switches to the destructive color.',
      },
    },
  },
} satisfies Meta<typeof QuestionText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Question text',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Question text',
    required: true,
    error: 'This question is required',
  },
};
