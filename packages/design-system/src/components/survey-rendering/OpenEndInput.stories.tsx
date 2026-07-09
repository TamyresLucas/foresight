import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { OpenEndInput } from './OpenEndInput';

const meta = {
  title: 'Survey Rendering/OpenEndInput',
  component: OpenEndInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-md p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    selected: { control: 'boolean' },
    focused: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The **attached open end**, conventionally labeled "Other": a single-line text input revealed beneath a choice flagged `openEnd` once it\'s selected, in RadioGroup, Checkbox, ChoiceGrid, ImageChoiceGrid, and HybridGrid. It mirrors the standalone Open End question type\'s textarea (OpenEndAnswer) — same hover/selected/focused states, same design tokens (`border-survey-border-interactive`/`border-survey-border-selected`, `text-survey-foreground`, `text-survey-body`, `font-survey-regular`, `placeholder:text-survey-muted-foreground`) — but keeps its own bottom-border-only underline instead of OpenEndAnswer\'s rounded box.\n\n' +
          '**States:** hovering washes the background with `survey-muted-background`; being actively edited ("selected") thickens the underline to `border-survey-border-selected`; keyboard focus adds a `survey-border-interactive` ring (or `survey-border-selected` when also selected) instead of OpenEndAnswer\'s offset halo, since there\'s no box to halo around here.',
      },
    },
  },
} satisfies Meta<typeof OpenEndInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Please specify…' },
};

export const Filled: Story = {
  args: { defaultValue: 'A custom answer typed by the respondent', placeholder: 'Please specify…' },
};

export const CustomPlaceholder: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Each grid/choice column can override the placeholder via `openEndPlaceholder` — ChoiceGrid, ImageChoiceGrid, and RadioGroup/Checkbox all default to "Please specify…" when it\'s omitted.',
      },
    },
  },
  args: { placeholder: 'Tell us more…' },
};

export const Hover: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Hovering washes the background with `survey-muted-background`, the same token every other survey-rendering hover state (RadioGroupOption, CheckboxOption, TextAnswer, DropdownAnswer) uses. Tracked via `onMouseEnter`/`onMouseLeave` rather than a CSS `:hover` class so it previews reliably here. (View in the Canvas tab.)',
      },
    },
  },
  args: { placeholder: 'Please specify…', defaultValue: 'A custom answer typed by the respondent' },
  play: async ({ canvasElement }) => {
    const input = await within(canvasElement).findByRole('textbox');
    await userEvent.hover(input);
  },
};

export const Selected: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Clicking into the field (or passing `selected`) thickens the underline to 2px and switches it to `survey-border-selected` — the bottom-border equivalent of OpenEndAnswer\'s thicker, selected-colored box border.',
      },
    },
  },
  args: { selected: true, defaultValue: 'A custom answer typed by the respondent', placeholder: 'Please specify…' },
};

export const Focused: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Keyboard focus adds a `survey-border-interactive` ring around the field — the same halo color OpenEndAnswer uses, adapted to a ring since there\'s no box to outline.',
      },
    },
  },
  args: { focused: true, placeholder: 'Please specify…' },
};

export const SelectedAndFocused: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Selected and focused at once: the underline is `survey-border-selected` (from being selected) and the focus ring matches it — same pairing as OpenEndAnswer\'s selected + focused state.',
      },
    },
  },
  args: {
    selected: true,
    focused: true,
    defaultValue: 'A custom answer typed by the respondent',
    placeholder: 'Please specify…',
  },
};
