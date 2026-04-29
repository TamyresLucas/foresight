import type { Meta, StoryObj } from '@storybook/react';
import { SurveyErrorMessage } from './SurveyErrorMessage';

const meta = {
  title: 'Survey Rendering/SurveyErrorMessage',
  component: SurveyErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SurveyErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomMessage: Story = {
  args: {
    message: 'Page has errors',
  },
};

export const Standalone: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <SurveyErrorMessage message="Page has errors" />
    </div>
  ),
};
