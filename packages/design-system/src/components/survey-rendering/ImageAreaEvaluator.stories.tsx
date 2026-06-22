import type { Meta, StoryObj } from '@storybook/react';
import { QuestionText } from './QuestionText';
import { ImageAreaEvaluator } from './ImageAreaEvaluator';

const sunflower =
  'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=160&fit=crop';

// Two choices fall back to the brand primary + secondary from the survey palette
// (shared with TextHighlighter). Additional choices continue through the
// remaining category colors.
const choices = [
  { id: 'c1', label: 'Choice 1' },
  { id: 'c2', label: 'Choice 2' },
];

// One area covering the left half of the image.
const areas = [{ id: 'left', label: 'Left half', x: 0, y: 0, width: 50, height: 100 }];

const meta = {
  title: 'Survey Rendering/ImageAreaEvaluator',
  component: ImageAreaEvaluator,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      // Seed the brand secondary (`--survey-border-accent`) and error tokens with
      // the theme editor's defaults, mirroring TextHighlighter — they have no
      // static default and are otherwise populated at runtime by the theme. This
      // lets the choice palette (which shares TextHighlighter's category colors)
      // resolve to real colors in Storybook.
      <>
        <style>{`:root { --survey-border-accent: 165 100% 26%; --survey-destructive: 349 54% 54%; --survey-warning: 38 92% 55%; --survey-info: 199 89% 48%; --survey-success: 142 76% 36%; }`}</style>
        <div data-survey-theme className="w-full max-w-2xl p-8">
          <Story />
        </div>
      </>
    ),
  ],
  args: {
    src: sunflower,
    alt: 'Sunflower',
    areas,
    choices,
  },
  argTypes: {
    showLegend: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'ImageAreaEvaluator: a single-answer question where the respondent assigns a value (choice) to an image area (variable) by clicking it. Each click on an area advances it to the next choice; clicking past the last choice clears it back to unassigned. Assigned areas get a translucent overlay in the choice color, and the legend below maps each choice color to its label. Compose with QuestionText for the question label and error message.\n\n' +
          '**Legend:** the legend is a plain row — no background, no border. The word "Legend" and each choice label use the survey body text token; each choice shows a small color swatch beside its label. Hide it with `showLegend={false}`.',
      },
    },
  },
} satisfies Meta<typeof ImageAreaEvaluator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <QuestionText label="Single answer question where the respondent assigns a value(choice) to an Image Area(variable) by using a certain number of mouse clicks" />
      <ImageAreaEvaluator {...args} />
    </div>
  ),
};

export const Choice1Assigned: Story = {
  args: {
    defaultValue: { left: 'c1' },
  },
};

export const Choice2Assigned: Story = {
  args: {
    defaultValue: { left: 'c2' },
  },
};

export const MultipleAreas: Story = {
  args: {
    areas: [
      { id: 'tl', label: 'Top left', x: 0, y: 0, width: 50, height: 50 },
      { id: 'tr', label: 'Top right', x: 50, y: 0, width: 50, height: 50 },
      { id: 'bl', label: 'Bottom left', x: 0, y: 50, width: 50, height: 50 },
      { id: 'br', label: 'Bottom right', x: 50, y: 50, width: 50, height: 50 },
    ],
    defaultValue: { tl: 'c1', br: 'c2' },
  },
};

export const ManyChoices: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'With more than two choices the palette continues past primary + secondary into the remaining TextHighlighter category colors (error, warning, info, success).',
      },
    },
  },
  args: {
    areas: [
      { id: 'tl', label: 'Top left', x: 0, y: 0, width: 50, height: 50 },
      { id: 'tr', label: 'Top right', x: 50, y: 0, width: 50, height: 50 },
      { id: 'bl', label: 'Bottom left', x: 0, y: 50, width: 50, height: 50 },
      { id: 'br', label: 'Bottom right', x: 50, y: 50, width: 50, height: 50 },
    ],
    choices: [
      { id: 'c1', label: 'Choice 1' },
      { id: 'c2', label: 'Choice 2' },
      { id: 'c3', label: 'Choice 3' },
      { id: 'c4', label: 'Choice 4' },
    ],
    defaultValue: { tl: 'c1', tr: 'c2', bl: 'c3', br: 'c4' },
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: { left: 'c1' },
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'This question is required',
  },
};
