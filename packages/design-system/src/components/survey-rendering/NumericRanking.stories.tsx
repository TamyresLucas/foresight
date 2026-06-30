import type { Meta, StoryObj } from '@storybook/react';
import { NumericRanking } from './NumericRanking';

const defaultItems = [
  { value: '1', label: 'Choice 1' },
  { value: '2', label: 'Choice 2' },
  { value: '3', label: 'Choice 3' },
];

const meta = {
  title: 'Survey Rendering/NumericRanking',
  component: NumericRanking,
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
  parameters: {
    docs: {
      description: {
        component:
          'NumericRanking component for survey rendering. Displays a list of choices with numeric input fields for ranking. Compose with QuestionText (and optionally QuestionField) for the question label and error message.',
      },
    },
  },
} satisfies Meta<typeof NumericRanking>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValues: Story = {
  args: {
    defaultValue: { '1': '3', '2': '1', '3': '2' },
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { value: '1', label: 'Choice 1' },
      { value: '2', label: 'Choice 2' },
      { value: '3', label: 'Choice 3' },
      { value: '4', label: 'Choice 4' },
      { value: '5', label: 'Choice 5' },
    ],
  },
};
