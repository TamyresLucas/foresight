import type { Meta, StoryObj } from '@storybook/react';
import { Signature } from './Signature';

const meta = {
  title: 'Survey Rendering/Signature',
  component: Signature,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-screen max-w-[390px] md:max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Signature>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty state — signature hint above the baseline. Draw with mouse or touch. */
export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'A signature is required',
  },
};
