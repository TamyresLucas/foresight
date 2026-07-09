import type { Meta, StoryObj } from '@storybook/react';
import { OpenEndAnswer } from './OpenEndAnswer';

const meta = {
  title: 'Survey Rendering/OpenEndAnswer',
  component: OpenEndAnswer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-md p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    focused: { control: 'boolean' },
    selected: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The **Open End** question type: a standalone multi-line text answer (textarea), with focused and selected states. Compose with QuestionText (and optionally QuestionField) for the question label and error message.\n\n' +
          '**Attached open end ("Other"):** the same free-text capture also appears *attached* to a choice in another question type — a `radio`/`checkbox` option, or a column in ChoiceGrid/ImageChoiceGrid/HybridGrid, flagged `openEnd` (conventionally labeled "Other"). Selecting that choice reveals an OpenEndInput — a single-line input rather than this component\'s textarea, but built from the same design tokens (`border-survey-border-interactive`/`border-survey-border-selected`, `text-survey-foreground`, `text-survey-body`, `font-survey-regular`, `placeholder:text-survey-muted-foreground`), so both variants inherit the live survey theme identically. See the **OpenEndInput** story for its own states.',
      },
    },
  },
} satisfies Meta<typeof OpenEndAnswer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Type your answer here...' },
};

export const Focused: Story = {
  args: { focused: true, placeholder: 'Type your answer here...' },
};

export const Selected: Story = {
  args: { selected: true, placeholder: 'Type your answer here...' },
};

export const SelectedAndFocused: Story = {
  args: { selected: true, focused: true, placeholder: 'Type your answer here...' },
};

export const WithValue: Story = {
  args: { defaultValue: 'Sample multi-line response\nSecond line', focused: true },
};

export const Interactive: Story = {
  args: { placeholder: 'Click me for blue border, Tab for gray...' },
};
