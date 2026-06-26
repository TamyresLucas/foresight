import type { Meta, StoryObj } from '@storybook/react';
import { Timer } from './Timer';

const meta = {
  title: 'Survey Rendering/Timer',
  component: Timer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-screen max-w-[390px] md:max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Countdown with a left label and the large shadcn-style readout. */
export const Default: Story = {
  args: {
    label: 'Time remaining on this page',
    mode: 'countdown',
    duration: 300,
  },
};

/** Runs automatically on mount — respondents cannot pause or reset it. */
export const Running: Story = {
  args: {
    label: 'Time remaining on this page',
    duration: 300,
    autoStart: true,
  },
};

/** Almost-ending shares the ended variant — readout turns destructive and pulses. */
export const AlmostEnding: Story = {
  args: {
    label: 'Hurry — almost up',
    duration: 8,
    warnThreshold: 10,
  },
};

/** Ended state — same variant as almost-ending. */
export const Ended: Story = {
  args: {
    label: "Time's up",
    duration: 0,
  },
};

/** Count-up mode tracks elapsed time on the page. */
export const CountUp: Story = {
  args: {
    label: 'Time spent on this page',
    mode: 'countup',
    duration: 0,
    autoStart: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Time remaining on this page',
    duration: 300,
    disabled: true,
  },
};
