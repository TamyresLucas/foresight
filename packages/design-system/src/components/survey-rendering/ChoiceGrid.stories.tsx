import type { Meta, StoryObj } from '@storybook/react';
import { ChoiceGrid } from './ChoiceGrid';

const meta = {
  title: 'Survey Rendering/ChoiceGrid',
  component: ChoiceGrid,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl mx-auto p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChoiceGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const desktopRows = [
  { id: 'option-1', label: 'Option' },
  { id: 'option-2', label: 'Option' },
  { id: 'option-3', label: 'Option' },
];

const desktopColumns = [
  { value: 'very_satisfied', label: 'Very satisfied' },
  { value: 'somewhat_satisfied', label: 'Somewhat satisfied' },
  { value: 'neither', label: 'Neither satisfied or dissatisfied' },
  { value: 'somewhat_dissatisfied', label: 'Somewhat dissatisfied' },
  { value: 'very_dissatisfied', label: 'Very dissatisfied' },
];

// --- Desktop Stories ---

export const DesktopDefault: Story = {
  name: 'Desktop / Default',
  args: {
    rows: desktopRows,
    columns: desktopColumns,
  },
};

export const DesktopSelected: Story = {
  name: 'Desktop / Selected',
  args: {
    rows: desktopRows,
    columns: desktopColumns,
    defaultValue: { 'option-1': 'very_satisfied' },
  },
};

export const DesktopWithError: Story = {
  name: 'Desktop / WithError',
  args: {
    rows: desktopRows,
    columns: desktopColumns,
    error: 'Please answer all rows',
  },
};

export const DesktopDisabled: Story = {
  name: 'Desktop / Disabled',
  args: {
    rows: desktopRows,
    columns: desktopColumns,
    disabled: true,
  },
};

export const DesktopRowDisabled: Story = {
  name: 'Desktop / RowDisabled',
  args: {
    rows: [
      { id: 'option-1', label: 'Option' },
      { id: 'option-2', label: 'Option', disabled: true },
      { id: 'option-3', label: 'Option' },
    ],
    columns: desktopColumns,
  },
};

export const DesktopCellStates: Story = {
  name: 'Desktop / CellStates',
  render: (args) => (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-survey-muted-foreground uppercase tracking-wider">Default</span>
        <ChoiceGrid {...args} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-survey-muted-foreground uppercase tracking-wider">Hover</span>
        {/* @ts-expect-error - internal simulation prop */}
        <ChoiceGrid {...args} forceHover />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-survey-muted-foreground uppercase tracking-wider">Selected</span>
        <ChoiceGrid {...args} value={{ 'row-1': 'col-1' }} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-survey-muted-foreground uppercase tracking-wider">Selected + Hover</span>
        {/* @ts-expect-error - internal simulation prop */}
        <ChoiceGrid {...args} value={{ 'row-1': 'col-1' }} forceHover />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-survey-muted-foreground uppercase tracking-wider">Selected + Focused</span>
        {/* @ts-expect-error - internal simulation prop */}
        <ChoiceGrid {...args} value={{ 'row-1': 'col-1' }} focusedRow="row-1" focusedColumn="col-1" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-survey-muted-foreground uppercase tracking-wider">Focused</span>
        {/* @ts-expect-error - internal simulation prop */}
        <ChoiceGrid {...args} focusedRow="row-1" focusedColumn="col-1" />
      </div>
    </div>
  ),
  args: {
    rows: [{ id: 'row-1', label: 'Row Label' }],
    columns: [{ value: 'col-1', label: 'Column' }],
  }
};
