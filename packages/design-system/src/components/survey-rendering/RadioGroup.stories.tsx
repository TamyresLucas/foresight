import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupOption } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
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
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

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

export const WithRealOptions: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="satisfied">
      <RadioGroupOption value="very-satisfied" label="Very satisfied" />
      <RadioGroupOption value="satisfied" label="Satisfied" />
      <RadioGroupOption value="neutral" label="Neutral" />
      <RadioGroupOption value="dissatisfied" label="Dissatisfied" />
      <RadioGroupOption value="very-dissatisfied" label="Very dissatisfied" />
    </RadioGroup>
  ),
};
