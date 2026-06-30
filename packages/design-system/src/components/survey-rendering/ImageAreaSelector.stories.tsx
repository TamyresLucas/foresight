import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
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
    error: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'ImageAreaSelector: a single- or multiple-answer question where the respondent selects parts of an image. Unlike ImageAreaEvaluator there are no choices or categories — clicking an area simply toggles it selected. A selected area is marked with the brand primary color at a low opacity, the same overlay treatment used by ImageAreaEvaluator. Compose with QuestionText for the question label and error message.\n\n' +
          '**Selection modes:** `multiple` (default) lets any number of areas be selected at once; `single` keeps at most one selected, so picking another replaces the previous selection. Clicking a selected area deselects it in both modes.\n\n' +
          '**Hover:** pointing at an area previews it without committing a selection. It gets a faint white fill and a ring that straddles the boundary — a white line just inside the edge and a darker line just outside — so the outline stays legible over both light and dark parts of the image (independent of the brand primary used for the selected state). Where an area meets the image frame, the darker outer line is drawn on top of the frame border and the area corner follows the frame\'s rounded preset, so the highlight reads as part of the frame rather than a floating box. See the **Hover** story (open the Canvas tab to interact).\n\n' +
          '**Focus:** keyboard focus (Tab) is shown with the exact same treatment as hover — the boundary ring plus faint fill — so the active area is obvious without a pointer, and an assigned/selected area\'s color border is temporarily replaced while focused, just as on hover. Focus is keyboard-only (`:focus-visible`): clicking an area selects it without leaving a focus ring behind. See the **Focused** story (open the Canvas tab; focus engages via Tab).',
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

export const Hover: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Hovering the top-left area. The hover ring straddles the area boundary (white inside, dark outside) so it stays visible on any image region; against the image frame the dark outer line sits on top of the frame border and the corner follows the frame radius. Hover is a transient preview only — it does not change the selection. (View in the Canvas tab; the highlight is driven by a pointer hover.)',
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Hover a corner area so the ring's overlap with the frame border and the
    // frame-matching corner radius are both visible.
    const area = await within(canvasElement).findByRole('button', {
      name: 'Top left',
    });
    await userEvent.hover(area);
  },
};

export const Focused: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Keyboard focus is intentionally identical to hover: tabbing to the top-left area marks it with the same boundary ring (white inside, dark outside) and faint fill, with the dark outer line over the frame border and the corner following the frame radius. Focus is keyboard-only — clicking selects without leaving a focus ring. (View in the Canvas tab; focus is moved with Tab.)',
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Move keyboard focus to the first area via Tab so the :focus-visible state
    // engages and renders the hover-style ring (focus is keyboard-only).
    await within(canvasElement).findByRole('button', { name: 'Top left' });
    await userEvent.tab();
  },
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

export const WithError: Story = {
  args: {
    error: 'This question is required',
  },
};
