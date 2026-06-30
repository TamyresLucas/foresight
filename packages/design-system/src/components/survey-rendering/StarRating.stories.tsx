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
  },
  parameters: {
    docs: {
      description: {
        component:
          'StarRating component for survey rendering. Displays a list of items, each rated on a row of stars (default 5). Empty stars use the same border token as the text-answer input (survey-border-interactive); filled stars use the brand selected token (survey-border-selected). Compose with QuestionText (and optionally QuestionField) for the question label and error message.\n\n' +
          '**Optional items and resetting a score:** mark an item with `optional: true` to let respondents clear a score they already picked. Once an optional item has a selected score, a reset (X) icon button appears to the right of its stars; clicking it removes that item’s score (back to empty) without affecting the other rows. Mandatory items (the default, `optional` omitted or false) never show the reset button — their answer cannot be removed once chosen.\n\n' +
          '**Required items:** mandatory items (anything not marked `optional`) show a red asterisk after their label.\n\n' +
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

export const RequiredAndOptional: Story = {
  name: 'Required & optional items',
  parameters: {
    docs: {
      description: {
        story:
          'Mandatory items carry a red asterisk after their label; optional ones do not.',
      },
    },
  },
  args: {
    items: [
      { value: 'r1', label: 'Rating 1' },
      { value: 'r2', label: 'Rating 2 (optional)', optional: true },
      { value: 'r3', label: 'Rating 3' },
    ],
    defaultValue: { r1: 4 },
  },
};

export const CustomMax: Story = {
  args: {
    max: 10,
    defaultValue: { r1: 7, r2: 4, r3: 9 },
  },
};

export const OptionalReset: Story = {
  name: 'Optional / Resettable items',
  parameters: {
    docs: {
      description: {
        story:
          'Rating 2 is marked `optional: true`, so once it has a score a reset (X) button appears next to its stars to clear it back to empty. Ratings 1 and 3 are mandatory, so no reset button is shown even though they have a score.',
      },
    },
  },
  args: {
    items: [
      { value: 'r1', label: 'Rating 1' },
      { value: 'r2', label: 'Rating 2 (optional)', optional: true },
      { value: 'r3', label: 'Rating 3' },
    ],
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
