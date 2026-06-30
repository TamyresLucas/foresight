import * as React from 'react';
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

export const WithOpenEnd: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('option-3');
    const [text, setText] = React.useState('');
    return (
      <RadioGroup {...args} value={value} onValueChange={setValue}>
        <RadioGroupOption value="option-1" label="Option A" checked={value === 'option-1'} />
        <RadioGroupOption value="option-2" label="Option B" checked={value === 'option-2'} />
        <RadioGroupOption
          value="option-3"
          label="Other"
          checked={value === 'option-3'}
          openEnd
          openEndValue={text}
          onOpenEndChange={setText}
        />
      </RadioGroup>
    );
  },
};

