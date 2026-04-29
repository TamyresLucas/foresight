import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxOption, CheckboxGroup } from './Checkbox';

const meta = {
  title: 'Survey Rendering/Checkbox',
  component: CheckboxOption,
  tags: ['autodocs'],
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

export const WithError: Story = {
  args: { label: 'Option', error: true },
};

export const GroupWithError: Story = {
  render: () => (
    <CheckboxGroup error="This question is required">
      <CheckboxOption label="Option" />
      <CheckboxOption label="Option" />
      <CheckboxOption label="Option" />
    </CheckboxGroup>
  ),
};
