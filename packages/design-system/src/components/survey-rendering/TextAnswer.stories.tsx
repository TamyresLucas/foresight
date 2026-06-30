import type { Meta, StoryObj } from '@storybook/react';
import { TextAnswer } from './TextAnswer';

const meta = {
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
    focused: { control: 'boolean' },
    selected: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'TextAnswer component for survey rendering. Displays a text input field with support for focused and selected states. Compose with QuestionText (and optionally QuestionField) for the question label and error message.',
      },
    },
  },
} satisfies Meta<typeof TextAnswer>;

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


export const WithValue: Story = {
  args: { defaultValue: 'Sample response', focused: true },
};

export const Interactive: Story = {
  args: { placeholder: 'Click me for blue border, Tab for gray...' },
};
