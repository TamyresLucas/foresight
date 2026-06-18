import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { SurveySlider } from './Slider';

const meta = {
  title: 'Survey Rendering/Slider',
  component: SurveySlider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[28rem] max-w-full p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
  argTypes: {
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number', min: 1 } },
    range: { control: 'boolean' },
    showValue: { control: 'boolean' },
    minLabel: { control: 'text' },
    maxLabel: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Slider question type for survey rendering. Built on the Radix Slider primitive and styled exclusively with survey color tokens: the unfilled track uses survey-border-muted, the selected range and thumb border use the brand selected token (survey-border-selected). Supports a single value or a two-thumb range. Compose with QuestionText (and optionally QuestionField) for the question label and error message.',
      },
    },
  },
} satisfies Meta<typeof SurveySlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [70],
  },
};

export const Range: Story = {
  args: {
    range: true,
    defaultValue: [30, 60],
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: [42],
    showValue: true,
  },
};

export const WithLabels: Story = {
  args: {
    defaultValue: [50],
    minLabel: 'Not at all',
    maxLabel: 'Extremely',
  },
};

export const CustomRangeAndStep: Story = {
  args: {
    min: 0,
    max: 10,
    step: 0.5,
    defaultValue: [7.5],
    showValue: true,
  },
};

export const WithError: Story = {
  args: {
    // Mandatory question that has not been answered yet: picker sits at the
    // start with no value chosen, and only the picker shows the error color.
    // Dragging the picker to choose a value clears the error (the parent
    // controls the `error` prop, as with the other question types).
    defaultValue: [0],
    error: 'This question is required',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [40],
    disabled: true,
  },
};

export const Focused: Story = {
  args: {
    defaultValue: [50],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Keyboard-focused picker. The focused state is intentionally identical to the selected state: the picker keeps the brand selected border with no extra focus ring. (Focus is keyboard-only — view this in the Canvas tab to see the picker focused via Tab.)',
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Ensure the picker is present, then move keyboard focus to it via Tab so
    // the :focus-visible state engages (focus is keyboard-only).
    await within(canvasElement).findByRole('slider');
    await userEvent.tab();
  },
};
