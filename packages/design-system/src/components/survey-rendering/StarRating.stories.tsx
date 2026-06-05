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
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'StarRating component for survey rendering. Displays a list of items, each rated on a row of stars (default 5). Empty stars use the same border token as the text-answer input (survey-border-interactive); filled stars use the brand selected token (survey-border-selected). Compose with QuestionText (and optionally QuestionField) for the question label and error message.',
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

export const WithError: Story = {
  args: {
    error: 'Please rate all items',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: { r1: 4, r2: 2, r3: 5 },
  },
};

export const CustomMax: Story = {
  args: {
    max: 10,
    defaultValue: { r1: 7, r2: 4, r3: 9 },
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
