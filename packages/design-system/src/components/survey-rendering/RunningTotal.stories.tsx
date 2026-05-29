import type { Meta, StoryObj } from '@storybook/react';
import { RunningTotal } from './RunningTotal';

const defaultRows = [
  { value: 'row1', label: 'Row 1' },
  { value: 'row2', label: 'Row 2' },
  { value: 'row3', label: 'Row 3' },
];

const defaultColumns = [
  { value: 'col1', label: 'Column 1' },
];

const meta = {
  title: 'Survey Rendering/RunningTotal',
  component: RunningTotal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    rows: defaultRows,
    columns: defaultColumns,
  },
  argTypes: {
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'RunningTotal component for survey rendering. Displays a grid of numeric inputs with a running total row. The total row uses the brand primary color with accessible foreground text. Compose with QuestionText (and optionally QuestionField) for the question label and error message.',
      },
    },
  },
} satisfies Meta<typeof RunningTotal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValues: Story = {
  args: {
    defaultValue: {
      row1: { col1: '10' },
      row2: { col1: '20' },
      row3: { col1: '30' },
    },
  },
};

export const MultipleColumns: Story = {
  args: {
    columns: [
      { value: 'col1', label: 'Column 1' },
      { value: 'col2', label: 'Column 2' },
    ],
    defaultValue: {
      row1: { col1: '5', col2: '15' },
      row2: { col1: '10', col2: '20' },
      row3: { col1: '25', col2: '5' },
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'Total must equal 100',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: {
      row1: { col1: '10' },
      row2: { col1: '20' },
      row3: { col1: '30' },
    },
  },
};

export const ManyRows: Story = {
  args: {
    rows: [
      { value: '1', label: 'Row 1' },
      { value: '2', label: 'Row 2' },
      { value: '3', label: 'Row 3' },
      { value: '4', label: 'Row 4' },
      { value: '5', label: 'Row 5' },
    ],
  },
};
