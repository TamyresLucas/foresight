import type { Meta, StoryObj } from '@storybook/react';
import { QuestionText } from './QuestionText';
import { ImageSelector } from './ImageSelector';

const rainbow =
  'https://images.unsplash.com/photo-1507783548227-544c3b8fc065?w=300&h=160&fit=crop';
const sunflower =
  'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=160&fit=crop';

const options = [
  { id: 'c1', label: 'Choice 1', src: rainbow, alt: 'Rainbow over a field' },
  { id: 'c2', label: 'Choice 2', src: sunflower, alt: 'Sunflower' },
  { id: 'c3', label: 'Choice 3', src: rainbow, alt: 'Rainbow over a field' },
  { id: 'c4', label: 'Choice 4', src: sunflower, alt: 'Sunflower' },
  { id: 'c5', label: 'Choice 5', src: rainbow, alt: 'Rainbow over a field' },
  { id: 'c6', label: 'Choice 6', src: sunflower, alt: 'Sunflower' },
];

const meta = {
  title: 'Survey Rendering/ImageSelector',
  component: ImageSelector,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div data-survey-theme className="w-full max-w-2xl p-4 md:p-8 mx-auto">
        <Story />
      </div>
    ),
  ],
  args: {
    options,
  },
  argTypes: {
    selectionMode: { control: 'inline-radio', options: ['single', 'multiple'] },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'ImageSelector: a single- or multiple-answer question where the respondent selects whole images. It works like ImageAreaSelector, but each option is an entire image (with an optional caption) rather than a region within one image. A selected image is tinted with the brand primary at low opacity and outlined with the primary color at full opacity; its caption is highlighted in the primary color. Compose with QuestionText for the question label and error message.\n\n' +
          '**Selection modes:** `multiple` (default) lets any number of images be selected; `single` keeps at most one selected, so picking another replaces the previous selection. Clicking a selected image deselects it in both modes.',
      },
    },
  },
} satisfies Meta<typeof ImageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <QuestionText label="Single or Multiple answers question using Images" />
      <ImageSelector {...args} />
    </div>
  ),
  args: {
    defaultValue: ['c1'],
  },
};

export const Multiple: Story = {
  args: {
    selectionMode: 'multiple',
    defaultValue: ['c1', 'c2'],
  },
};

export const Single: Story = {
  args: {
    selectionMode: 'single',
    defaultValue: ['c1'],
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: ['c1'],
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'This question is required',
  },
};
