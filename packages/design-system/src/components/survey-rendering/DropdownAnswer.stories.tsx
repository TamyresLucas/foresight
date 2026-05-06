import type { Meta, StoryObj } from '@storybook/react';
import { DropdownAnswer } from './DropdownAnswer';

const options = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  { value: 'option-3', label: 'Option 3' },
  { value: 'option-4', label: 'Option 4' },
];

const meta = {
  title: 'Survey Rendering/DropdownAnswer',
  component: DropdownAnswer,
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
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'DropdownAnswer component for survey rendering. Displays a select dropdown field with support for focused and selected states. Compose with QuestionText (and optionally QuestionField) for the question label and error message.',
      },
    },
  },
} satisfies Meta<typeof DropdownAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { options, placeholder: 'Select' },
};

export const Focused: Story = {
  args: { options, placeholder: 'Select answer', focused: true },
};

export const Selected: Story = {
  args: { options, placeholder: 'Select answer', selected: true },
};

export const SelectedAndFocused: Story = {
  args: { options, placeholder: 'Select answer', selected: true, focused: true },
};

export const WithError: Story = {
  args: { options, error: 'This question is required' },
};

export const WithErrorFocused: Story = {
  args: { options, error: 'This question is required', focused: true },
};

export const Interactive: Story = {
  args: { options },
};
