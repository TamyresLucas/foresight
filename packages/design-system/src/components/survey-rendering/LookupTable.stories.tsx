import type { Meta, StoryObj } from '@storybook/react';
import { SurveyLookupTable, type LookupTableColumn, type LookupTableRow } from './LookupTable';

const columns: LookupTableColumn[] = [
  { id: 'status', label: 'Status' },
  { id: 'email', label: 'Email', sortable: true },
  { id: 'amount', label: 'Amount', sortable: true, align: 'right' },
];

const rows: LookupTableRow[] = [
  { id: 'r1', data: { status: 'Success', email: 'ken99@example.com', amount: '$316.00' } },
  { id: 'r2', data: { status: 'Success', email: 'abe45@example.com', amount: '$242.00' } },
  { id: 'r3', data: { status: 'Processing', email: 'monserrat44@example.com', amount: '$837.00' } },
  { id: 'r4', data: { status: 'Success', email: 'silas22@example.com', amount: '$874.00' } },
  { id: 'r5', data: { status: 'Failed', email: 'carmella@example.com', amount: '$721.00' } },
];

const manyRows: LookupTableRow[] = Array.from({ length: 23 }, (_, i) => ({
  id: `m${i + 1}`,
  data: {
    status: ['Success', 'Processing', 'Failed'][i % 3],
    email: `user${i + 1}@example.com`,
    amount: `$${((i + 1) * 37).toFixed(2)}`,
  },
}));

const meta = {
  title: 'Survey Rendering/Lookup Table',
  component: SurveyLookupTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[40rem] max-w-full p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    columns,
    rows,
    filterColumnId: 'email',
    filterPlaceholder: 'Filter emails…',
  },
  argTypes: {
    pageSize: { control: { type: 'number', min: 1 } },
    filterPlaceholder: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Lookup Table question type for survey rendering. Built on the shadcn DataTable pattern (@tanstack/react-table + Radix primitives) but styled exclusively with survey design tokens, so it inherits the live theme (primary color, radius, margin, fonts). The respondent answers by selecting rows — the value is the array of selected row ids. Includes a text filter, a selection-state tab filter (All / Selected / Not selected), optional per-row actions, and Previous/Next pagination.',
      },
    },
  },
} satisfies Meta<typeof SurveyLookupTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSelection: Story = {
  args: {
    defaultValue: ['r1', 'r4'],
  },
};

export const WithRowActions: Story = {
  args: {
    defaultValue: ['r2'],
    rowActions: (row) => [
      { label: 'View', icon: 'visibility', onClick: () => console.log('View', row.id) },
      { label: 'Copy email', icon: 'content_copy', onClick: () => console.log('Copy', row.id) },
      {
        label: 'Remove',
        icon: 'delete',
        variant: 'destructive',
        separatorBefore: true,
        onClick: () => console.log('Remove', row.id),
      },
    ],
  },
};

export const WithAddChoice: Story = {
  args: {
    defaultValue: ['r1'],
    pageSize: 3,
    onAddChoice: () => console.log('Add choice'),
  },
};

export const WithError: Story = {
  args: {
    error: 'Please select at least one row',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: ['r1'],
    disabled: true,
  },
};

export const ManyRows: Story = {
  args: {
    rows: manyRows,
    pageSize: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination kicks in when rows exceed the page size. Use Previous / Next to page through.',
      },
    },
  },
};
