import type { Meta, StoryObj } from '@storybook/react';
import { QuestionText } from './QuestionText';
import { ImageAreaSelector } from './ImageAreaSelector';

const sunflower =
  'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=160&fit=crop';

const quadrants = [
  { id: 'tl', label: 'Top left', x: 0, y: 0, width: 50, height: 50 },
  { id: 'tr', label: 'Top right', x: 50, y: 0, width: 50, height: 50 },
  { id: 'bl', label: 'Bottom left', x: 0, y: 50, width: 50, height: 50 },
  { id: 'br', label: 'Bottom right', x: 50, y: 50, width: 50, height: 50 },
];

const meta = {
  title: 'Survey Rendering/ImageAreaSelector',
  component: ImageAreaSelector,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div data-survey-theme className="w-full max-w-2xl p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    src: sunflower,
    alt: 'Sunflower',
    areas: quadrants,
  },
  argTypes: {
    selectionMode: { control: 'inline-radio', options: ['single', 'multiple'] },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'ImageAreaSelector: a single- or multiple-answer question where the respondent selects parts of an image. Unlike ImageAreaEvaluator there are no choices or categories — clicking an area simply toggles it selected. A selected area is marked with the brand primary color at a low opacity, the same overlay treatment used by ImageAreaEvaluator. Compose with QuestionText for the question label and error message.\n\n' +
          '**Selection modes:** `multiple` (default) lets any number of areas be selected at once; `single` keeps at most one selected, so picking another replaces the previous selection. Clicking a selected area deselects it in both modes.',
      },
    },
  },
} satisfies Meta<typeof ImageAreaSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <QuestionText label="Single or Multiple answers question using Image Areas" />
      <ImageAreaSelector {...args} />
    </div>
  ),
};

export const Multiple: Story = {
  args: {
    selectionMode: 'multiple',
    defaultValue: ['tl', 'br'],
  },
};

export const Single: Story = {
  args: {
    selectionMode: 'single',
    defaultValue: ['tl'],
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: ['tl'],
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'This question is required',
  },
};
