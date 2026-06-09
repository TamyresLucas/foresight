import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { SurveyFilterTabs, type FilterTabItem } from './FilterTabs';

const selectionTabs: FilterTabItem[] = [
  { id: 'all', label: 'All' },
  { id: 'selected', label: 'Selected' },
  { id: 'not-selected', label: 'Not selected' },
];

const meta = {
  title: 'Survey Rendering/Filter Tabs',
  component: SurveyFilterTabs,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    tabs: selectionTabs,
    'aria-label': 'Filter rows by selection',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    defaultValue: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Underlined tab control for switching between mutually-exclusive views or filters. Tabs sit over a horizontal rule and the active tab is marked by an underline. This is the "All / Selected / Not selected" style used in the Lookup Table. Styled entirely with survey design tokens (rule = survey-border-muted, the same outer border token as the multiple-choice options; active underline + text = survey-foreground; inactive text = survey-muted-foreground). Add w-full to stretch the rule across the container. Supports controlled and uncontrolled usage.',
      },
    },
  },
} satisfies Meta<typeof SurveyFilterTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'all',
  },
};

export const SelectedTab: Story = {
  args: {
    defaultValue: 'selected',
  },
};

export const TwoSegments: Story = {
  args: {
    tabs: [
      { id: 'list', label: 'List' },
      { id: 'grid', label: 'Grid' },
    ],
    defaultValue: 'list',
    'aria-label': 'View mode',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'all',
    disabled: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('all');
    return (
      <div className="flex flex-col gap-3">
        <SurveyFilterTabs {...args} value={value} onValueChange={setValue} />
        <span className="text-survey-muted-foreground text-survey-body font-survey">
          Selected: {value}
        </span>
      </div>
    );
  },
};
