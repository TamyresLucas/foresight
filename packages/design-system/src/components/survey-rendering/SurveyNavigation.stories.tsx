import type { Meta, StoryObj } from '@storybook/react';
import { SurveyNavigation } from './SurveyNavigation';

const meta = {
  title: 'Survey Rendering/SurveyNavigation',
  component: SurveyNavigation,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-12 bg-muted/10">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Specialized navigation buttons for survey rendering. Includes Primary actions (Next, Submit), Secondary actions (Previous), and Muted actions (Quit, See Responses). Each alternative can be focused to show the concentric focus ring.',
      },
    },
  },
} satisfies Meta<typeof SurveyNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Next: Story = {
  args: {
    showNext: true,
  },
};

export const NextFocused: Story = {
  args: {
    showNext: true,
    focused: 'next',
  },
};

export const Previous: Story = {
  args: {
    showPrevious: true,
  },
};

export const PreviousFocused: Story = {
  args: {
    showPrevious: true,
    focused: 'previous',
  },
};

export const Submit: Story = {
  args: {
    showSubmit: true,
  },
};

export const SubmitFocused: Story = {
  args: {
    showSubmit: true,
    focused: 'submit',
  },
};

export const Quit: Story = {
  args: {
    showQuit: true,
  },
};

export const QuitFocused: Story = {
  args: {
    showQuit: true,
    focused: 'quit',
  },
};

export const SeeResponses: Story = {
  args: {
    showSeeResponses: true,
  },
};

export const SeeResponsesFocused: Story = {
  args: {
    showSeeResponses: true,
    focused: 'see-responses',
  },
};

export const FullNavigation: Story = {
  args: {
    showNext: true,
    showPrevious: true,
    showQuit: true,
    showSeeResponses: true,
  },
};
