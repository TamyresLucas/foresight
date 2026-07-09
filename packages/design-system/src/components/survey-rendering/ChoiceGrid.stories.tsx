import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChoiceGrid, type ChoiceGridColumn } from './ChoiceGrid';

const meta = {
  title: 'Survey Rendering/ChoiceGrid',
  component: ChoiceGrid,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
    docs: {
      description: {
        component:
          'Matrix of rows against a shared set of columns, one radio per row (Radix RadioGroup keeps the single-select + keyboard semantics). Styled with survey design tokens (`border-survey-border-interactive`/`-selected`, `text-survey-foreground`) so it inherits the live survey theme. Responsive: a table on wide containers, an accordion of rows on narrow ones.\n\n' +
          '**Attached open end:** flag a column `openEnd` (conventionally labeled "Other") to reveal an OpenEndInput for the row once selected — the same attached-open-end pattern as RadioGroup, Checkbox, ImageChoiceGrid, and HybridGrid. See the **With open end** stories here, and the **OpenEndInput** story for its own states.',
      },
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

// --- Open-end reveal ---
// A column flagged `openEnd` (e.g. "Other") reveals a free-text field for the
// row once selected: an extra row directly below the answered row on desktop,
// inline beneath the choice within the same accordion item on mobile.

const openEndColumns: ChoiceGridColumn[] = [
  { value: 'very_satisfied', label: 'Very satisfied' },
  { value: 'somewhat_satisfied', label: 'Somewhat satisfied' },
  { value: 'dissatisfied', label: 'Dissatisfied' },
  { value: 'other', label: 'Other', openEnd: true, openEndPlaceholder: 'Tell us more…' },
];

const WithOpenEndRender = (args: React.ComponentProps<typeof ChoiceGrid>) => {
  const [value, setValue] = React.useState<Record<string, string>>({ 'option-1': 'other' });
  const [openEndValues, setOpenEndValues] = React.useState<Record<string, string>>({});
  return (
    <ChoiceGrid
      {...args}
      value={value}
      onValueChange={setValue}
      openEndValues={openEndValues}
      onOpenEndValuesChange={setOpenEndValues}
    />
  );
};

export const DesktopWithOpenEnd: Story = {
  name: 'Desktop / With open end',
  parameters: {
    docs: {
      description: {
        story:
          'The revealed input sits in its own row directly below the answered row, but only spans the selected column\'s own width (aligned under "Other" here) rather than the full grid — empty cells before/after it keep the surrounding row structure intact.',
      },
    },
  },
  render: WithOpenEndRender,
  args: {
    rows: desktopRows,
    columns: openEndColumns,
  },
};

export const MobileWithOpenEnd: Story = {
  name: 'Mobile / With open end',
  render: WithOpenEndRender,
  args: {
    rows: desktopRows,
    columns: openEndColumns,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

