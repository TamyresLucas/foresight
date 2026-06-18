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
      <div className="w-screen max-w-[390px] md:max-w-2xl mx-auto">
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
    error: 'This question is required',
    variant: 'desktop',
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

// --- Mobile Stories ---

export const MobileDefault: Story = {
  name: 'Mobile / Default',
  args: {
    rows: desktopRows,
    columns: desktopColumns,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export const MobileSelected: Story = {
  name: 'Mobile / Selected',
  args: {
    rows: desktopRows,
    columns: desktopColumns,
    defaultValue: { 'option-1': 'very_satisfied' },
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export const MobileWithError: Story = {
  name: 'Mobile / WithError',
  args: {
    rows: desktopRows,
    columns: desktopColumns,
    error: 'This question is required',
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export const MobileDisabled: Story = {
  name: 'Mobile / Disabled',
  args: {
    rows: desktopRows,
    columns: desktopColumns,
    disabled: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export const MobileRowDisabled: Story = {
  name: 'Mobile / RowDisabled',
  args: {
    rows: [
      { id: 'option-1', label: 'Option' },
      { id: 'option-2', label: 'Option', disabled: true },
      { id: 'option-3', label: 'Option' },
    ],
    columns: desktopColumns,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};
