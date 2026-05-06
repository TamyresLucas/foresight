import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupOption } from './RadioGroup';

const meta = {
  title: 'Survey Rendering/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    error: { control: 'text' },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupOption value="option-1" label="Option" />
      <RadioGroupOption value="option-2" label="Option" />
      <RadioGroupOption value="option-3" label="Option" />
      <RadioGroupOption value="option-4" label="Option" />
    </RadioGroup>
  ),
};

export const WithSelection: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-1">
      <RadioGroupOption value="option-1" label="Option" />
      <RadioGroupOption value="option-2" label="Option" />
      <RadioGroupOption value="option-3" label="Option" />
      <RadioGroupOption value="option-4" label="Option" />
    </RadioGroup>
  ),
};

export const Focused: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupOption value="option-1" label="Option" focused />
      <RadioGroupOption value="option-2" label="Option" />
      <RadioGroupOption value="option-3" label="Option" />
      <RadioGroupOption value="option-4" label="Option" />
    </RadioGroup>
  ),
};

export const FocusedAndSelected: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="option-1">
      <RadioGroupOption value="option-1" label="Option" focused />
      <RadioGroupOption value="option-2" label="Option" />
      <RadioGroupOption value="option-3" label="Option" />
      <RadioGroupOption value="option-4" label="Option" />
    </RadioGroup>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <RadioGroup {...args} error="This question is required">
      <RadioGroupOption value="option-1" label="Option" />
      <RadioGroupOption value="option-2" label="Option" />
      <RadioGroupOption value="option-3" label="Option" />
      <RadioGroupOption value="option-4" label="Option" />
    </RadioGroup>
  ),
};

export const WithDisabledOptions: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupOption value="option-1" label="Enabled Option" />
      <RadioGroupOption value="option-2" label="Disabled Option" disabled />
      <RadioGroupOption value="option-3" label="Enabled Option" />
      <RadioGroupOption value="option-4" label="Disabled Option" disabled />
    </RadioGroup>
  ),
};

export const AllDisabled: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupOption value="option-1" label="Disabled Option 1" disabled />
      <RadioGroupOption value="option-2" label="Disabled Option 2" disabled />
      <RadioGroupOption value="option-3" label="Disabled Option 3" disabled />
      <RadioGroupOption value="option-4" label="Disabled Option 4" disabled />
    </RadioGroup>
  ),
};
