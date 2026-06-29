import type { Meta, StoryObj } from '@storybook/react';
import { HybridGrid, type HybridGridColumn } from './HybridGrid';

const meta = {
  title: 'Survey Rendering/HybridGrid',
  component: HybridGrid,
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
} satisfies Meta<typeof HybridGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  { id: 'row-1', label: 'Row 1' },
  { id: 'row-2', label: 'Row 2' },
  { id: 'row-3', label: 'Row 3' },
];

const columns: HybridGridColumn[] = [
  { id: 'col-1', type: 'text', label: 'Column 1', placeholder: 'Type an answer…' },
  {
    id: 'col-2',
    type: 'checkbox',
    label: 'Column 2',
    choices: [
      { value: 'choice-1', label: 'Choice 1' },
      { value: 'choice-2', label: 'Choice 2' },
      { value: 'choice-3', label: 'Choice 3' },
    ],
  },
  {
    id: 'col-3',
    type: 'dropdown',
    label: 'Column 3',
    options: [
      { value: 'low', label: 'Low' },
      { value: 'medium', label: 'Medium' },
      { value: 'high', label: 'High' },
    ],
  },
];

const seededValue = {
  'row-1': {
    'col-1': 'My answer',
    'col-2': ['choice-1', 'choice-3'],
    'col-3': 'medium',
  },
};

// --- Desktop Stories ---

export const DesktopDefault: Story = {
  name: 'Desktop / Default',
  args: { rows, columns, variant: 'desktop' },
};

export const DesktopSelected: Story = {
  name: 'Desktop / Selected',
  args: { rows, columns, defaultValue: seededValue, variant: 'desktop' },
};

export const DesktopWithError: Story = {
  name: 'Desktop / WithError',
  args: { rows, columns, error: 'This question is required', variant: 'desktop' },
};

export const DesktopDisabled: Story = {
  name: 'Desktop / Disabled',
  args: { rows, columns, disabled: true, variant: 'desktop' },
};

// --- Mobile Stories ---

export const MobileDefault: Story = {
  name: 'Mobile / Default',
  args: { rows, columns, variant: 'mobile' },
  parameters: { viewport: { defaultViewport: 'iphone12' } },
};

export const MobileSelected: Story = {
  name: 'Mobile / Selected',
  args: { rows, columns, defaultValue: seededValue, variant: 'mobile' },
  parameters: { viewport: { defaultViewport: 'iphone12' } },
};

export const MobileWithError: Story = {
  name: 'Mobile / WithError',
  args: { rows, columns, error: 'This question is required', variant: 'mobile' },
  parameters: { viewport: { defaultViewport: 'iphone12' } },
};

// --- All question types ---
// A single grid can mix any of the eight supported column types.

const imageOptions = [
  { id: 'img-a', src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200', alt: 'Paris', label: 'Paris' },
  { id: 'img-b', src: 'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=200', alt: 'Tokyo', label: 'Tokyo' },
];

const allTypeColumns: HybridGridColumn[] = [
  { id: 'c-text', type: 'text', label: 'Comment', placeholder: 'Type an answer…' },
  { id: 'c-num', type: 'numeric', label: 'Quantity', placeholder: '0', min: 0, max: 100 },
  {
    id: 'c-dropdown',
    type: 'dropdown',
    label: 'Priority',
    options: [
      { value: 'low', label: 'Low' },
      { value: 'medium', label: 'Medium' },
      { value: 'high', label: 'High' },
    ],
  },
  {
    id: 'c-radio',
    type: 'radio',
    label: 'Agreement',
    choices: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'c-checkbox',
    type: 'checkbox',
    label: 'Channels',
    choices: [
      { value: 'email', label: 'Email' },
      { value: 'sms', label: 'SMS' },
    ],
  },
  { id: 'c-slider', type: 'slider', label: 'Confidence', min: 0, max: 100, showValue: true },
  { id: 'c-star', type: 'starrating', label: 'Rating', max: 5 },
  { id: 'c-image', type: 'imageselector', label: 'Favorite', options: imageOptions, selectionMode: 'single' },
];

export const DesktopAllTypes: Story = {
  name: 'Desktop / All question types',
  args: { rows, columns: allTypeColumns, variant: 'desktop' },
};

export const MobileAllTypes: Story = {
  name: 'Mobile / All question types',
  args: { rows: [rows[0]], columns: allTypeColumns, variant: 'mobile' },
  parameters: { viewport: { defaultViewport: 'iphone12' } },
};
