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
    focused: { control: 'boolean' },
    selected: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'OpenEndAnswer component for survey rendering. Displays a multi-line text input field (textarea) with support for focused and selected states. Compose with QuestionText (and optionally QuestionField) for the question label and error message.',
      },
    },
  },
} satisfies Meta<typeof OpenEndAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Type your answer here...' },
};

export const Focused: Story = {
  args: { focused: true, placeholder: 'Type your answer here...' },
};

export const Selected: Story = {
  args: { selected: true, placeholder: 'Type your answer here...' },
};

export const SelectedAndFocused: Story = {
  args: { selected: true, focused: true, placeholder: 'Type your answer here...' },
};

export const WithValue: Story = {
  args: { defaultValue: 'Sample multi-line response\nSecond line', focused: true },
};

export const Interactive: Story = {
  args: { placeholder: 'Click me for blue border, Tab for gray...' },
};
