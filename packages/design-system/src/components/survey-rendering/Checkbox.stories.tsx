import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxOption } from './Checkbox';

const meta: Meta<typeof CheckboxOption> = {
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
};

export default meta;
type Story = StoryObj<typeof CheckboxOption>;

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
