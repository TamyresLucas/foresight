import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { DropdownPopUp } from './DropdownPopUp';

const meta: Meta<typeof DropdownPopUp> = {
  title: 'Survey Rendering/DropdownPopUp',
  component: DropdownPopUp,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-md p-8 border border-dashed rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DropdownPopUp>;

const options = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  { value: 'option-3', label: 'Option 3' },
  { value: 'option-4', label: 'Option 4' },
  { value: 'option-5', label: 'Option 5' },
];

export const Default: Story = {
  args: {
    options,
  },
};

export const WithSelection: Story = {
  args: {
    options,
    selectedValue: 'option-2',
  },
};

export const Empty: Story = {
  args: {
    options: [],
    emptyMessage: 'No options available',
  },
};

export const LongList: Story = {
  args: {
    options: Array.from({ length: 30 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    })),
    maxHeight: 240,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [selected, setSelected] = React.useState<string | undefined>(args.selectedValue);
    return (
      <div className="space-y-4">
        <p className="text-sm font-medium">Selected: {selected || 'None'}</p>
        <DropdownPopUp
          {...args}
          selectedValue={selected}
          onSelect={(val) => {
            setSelected(val);
          }}
        />
      </div>
    );
  },
  args: {
    options,
  },
};
