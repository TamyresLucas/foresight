import type { Meta, StoryObj } from '@storybook/react'
import { DropdownAnswer } from './DropdownAnswer'

const options = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  { value: 'option-3', label: 'Option 3' },
  { value: 'option-4', label: 'Option 4' },
]

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
          'DropdownAnswer component for survey rendering. Displays a select dropdown field with support for focused and selected states, optional labels, validation errors, and required field indicators.',
      },
    },
  },
} satisfies Meta<typeof DropdownAnswer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Single answer question using an Auto Complete',
    required: true,
    options,
    placeholder: 'Select',
  },
}

export const Focused: Story = {
  args: {
    label: 'Single answer question using an Auto Complete',
    required: true,
    options,
    placeholder: 'Select answer',
    focused: true,
  },
}

export const Selected: Story = {
  args: {
    label: 'Single answer question using an Auto Complete',
    required: true,
    options,
    placeholder: 'Select answer',
    selected: true,
  },
}

export const SelectedAndFocused: Story = {
  args: {
    label: 'Single answer question using an Auto Complete',
    required: true,
    options,
    placeholder: 'Select answer',
    selected: true,
    focused: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Single answer question using an Auto Complete',
    required: true,
    options,
    error: 'This question is required',
  },
}

export const WithErrorFocused: Story = {
  args: {
    label: 'Single answer question using an Auto Complete',
    required: true,
    options,
    error: 'This question is required',
    focused: true,
  },
}

export const Interactive: Story = {
  args: {
    label: 'Interactive (click or tab to test)',
    required: true,
    options,
  },
}
