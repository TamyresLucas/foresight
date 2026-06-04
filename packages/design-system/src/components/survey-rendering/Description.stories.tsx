import type { Meta, StoryObj } from '@storybook/react';
import { Description } from './Description';

const meta = {
  title: 'Survey Rendering/Description',
  component: Description,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Description displays an introductory block — a header title plus an optional rich-text paragraph — used to present information to the respondent within a survey page.',
      },
    },
  },
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Description title',
    description: 'Rich Text placeholder for displaying information to the respondent',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Description title',
  },
};
