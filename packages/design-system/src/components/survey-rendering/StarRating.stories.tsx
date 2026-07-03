import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

const defaultItems = [
  { value: 'r1', label: 'Rating 1' },
  { value: 'r2', label: 'Rating 2' },
  { value: 'r3', label: 'Rating 3' },
];

const meta = {
  title: 'Survey Rendering/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-md p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    items: defaultItems,
  },
  argTypes: {
    max: { control: { type: 'number', min: 1, max: 10 } },
    required: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'StarRating component for survey rendering. Displays a list of items, each rated on a row of stars (default 5). Empty stars use the same border token as the text-answer input (survey-border-interactive); filled stars use the brand selected token (survey-border-selected). Compose with QuestionText (and optionally QuestionField) for the question label and error message.\n\n' +
          '**Required is question-level:** `required` is a single prop on the whole component (not per item) — it only sets `aria-required` on every row\'s star group. The visual required indicator (a red asterisk) belongs on the composing QuestionText label, not repeated on every row here.\n\n' +
          '**Resetting a score:** once any row has a selected score, a reset (X) icon button appears to its right; clicking it clears that row back to empty without affecting the other rows. This applies to every row regardless of `required`.\n\n' +
          '**Label alignment and wrapping:** every label is sized to the width of the longest one so the stars line up across all rows; shorter labels fill that shared width. When the row is too narrow to fit the label and stars side by side, the stars wrap onto their own line below the label, separated by the theme’s margin token (`--survey-margin`). Because the labels share one width, all rows wrap together, so the stars stay aligned.',
      },
    },
  },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValues: Story = {
  args: {
    defaultValue: { r1: 5, r2: 3, r3: 1 },
  },
};

export const Required: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`required` is set on the whole question, applying `aria-required` to every row — there is no per-item required flag.',
      },
    },
  },
  args: {
    required: true,
    defaultValue: { r1: 4 },
  },
};

export const CustomMax: Story = {
  args: {
    max: 10,
    defaultValue: { r1: 7, r2: 4, r3: 9 },
  },
};

export const ResetOnceRated: Story = {
  name: 'Reset once a rating is assigned',
  parameters: {
    docs: {
      description: {
        story:
          'Once a row has a score, a reset (X) button appears next to its stars so the respondent can clear it back to empty — shown here for every row, regardless of `required`.',
      },
    },
  },
  args: {
    required: true,
    defaultValue: { r1: 4, r2: 3, r3: 5 },
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { value: 'r1', label: 'Rating 1' },
      { value: 'r2', label: 'Rating 2' },
      { value: 'r3', label: 'Rating 3' },
      { value: 'r4', label: 'Rating 4' },
      { value: 'r5', label: 'Rating 5' },
    ],
  },
};
