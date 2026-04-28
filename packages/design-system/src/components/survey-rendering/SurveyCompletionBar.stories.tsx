import type { Meta, StoryObj } from '@storybook/react';
import { SurveyCompletionBar } from './SurveyCompletionBar';

const meta = {
  title: 'Survey Rendering/SurveyCompletionBar',
  component: SurveyCompletionBar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['basic', 'discrete', 'full-width', 'full-width-label'],
    },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div className="w-[260px] p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SurveyCompletionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { value: 80, variant: 'basic' },
};

export const Discrete: Story = {
  args: { value: 80, variant: 'discrete' },
};

export const FullWidth: Story = {
  args: { value: 80, variant: 'full-width' },
  decorators: [
    (Story) => (
      <div className="w-full p-8">
        <Story />
      </div>
    ),
  ],
};

export const FullWidthLabel: Story = {
  args: { value: 80, variant: 'full-width-label' },
  decorators: [
    (Story) => (
      <div className="w-full p-8">
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  args: { value: 80, variant: 'basic' },
  render: () => (
    <div className="flex flex-col gap-6 w-[260px]">
      <SurveyCompletionBar value={80} variant="basic" />
      <SurveyCompletionBar value={80} variant="discrete" />
      <SurveyCompletionBar value={80} variant="full-width" />
      <SurveyCompletionBar value={80} variant="full-width-label" />
    </div>
  ),
};

export const QuartileSnapping: Story = {
  args: { value: 80, step: 25, variant: 'basic' },
  render: () => (
    <div className="flex flex-col gap-6 w-[260px]">
      <div>
        <p className="text-sm font-medium mb-2">Snapped to quartiles (0%, 25%, 50%, 75%, 100%)</p>
      </div>
      <SurveyCompletionBar value={0} step={25} variant="basic" />
      <SurveyCompletionBar value={12} step={25} variant="basic" />
      <SurveyCompletionBar value={40} step={25} variant="basic" />
      <SurveyCompletionBar value={88} step={25} variant="basic" />
    </div>
  ),
};
