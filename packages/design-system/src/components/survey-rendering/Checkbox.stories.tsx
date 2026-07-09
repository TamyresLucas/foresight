import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxOption, CheckboxGroup } from './Checkbox';

const meta = {
  title: 'Survey Rendering/Checkbox',
  component: CheckboxOption,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Multi-select CheckboxOption, styled with survey design tokens (`border-survey-border-interactive`/`-selected`, `text-survey-foreground`) so it inherits the live survey theme.\n\n' +
          '**Attached open end:** flag an option `openEnd` (conventionally labeled "Other") to reveal an OpenEndInput directly beneath it once checked — the same attached-open-end pattern as RadioGroup, ChoiceGrid, ImageChoiceGrid, and HybridGrid. See the **OpenEndChecked** story here, and the **OpenEndInput** story for its own states.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CheckboxOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Option' },
};

export const Checked: Story = {
  args: { label: 'Option', checked: true },
};

export const Focused: Story = {
  args: { label: 'Option', focused: true },
};

export const FocusedAndSelected: Story = {
  args: { label: 'Option', focused: true, checked: true },
};

export const GroupDefault: Story = {
  args: { label: 'Option' },
  render: () => (
    <CheckboxGroup>
      <CheckboxOption label="Option" />
      <CheckboxOption label="Option" />
      <CheckboxOption label="Option" />
    </CheckboxGroup>
  ),
};

export const OpenEndChecked: Story = {
  args: { label: 'Other' },
  parameters: {
    docs: {
      description: {
        story:
          'Checking an option flagged `openEnd` reveals a text input inside its own card, below the label, without disturbing the other options\' layout.',
      },
    },
  },
  render: () => {
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(true);
    const [text, setText] = React.useState('');
    return (
      <CheckboxGroup>
        <CheckboxOption label="Option A" />
        <CheckboxOption label="Option B" />
        <CheckboxOption
          label="Other"
          checked={checked}
          onCheckedChange={setChecked}
          openEnd
          openEndValue={text}
          onOpenEndChange={setText}
        />
      </CheckboxGroup>
    );
  },
};

