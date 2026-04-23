import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelector } from './LanguageSelector';

const meta: Meta<typeof LanguageSelector> = {
  title: 'Survey Rendering/LanguageSelector',
  component: LanguageSelector,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-md p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    selectedLanguage: { control: 'text' },
    focused: { control: 'boolean' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    className: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'LanguageSelector component for survey rendering. An outline-style dropdown derived from the respondent design system. Supports both a manual "focused" prop and automatic browser ":focus-visible" (Tab) navigation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LanguageSelector>;

export const Default: Story = {
  args: {
    selectedLanguage: 'en',
  },
};

export const Focused: Story = {
  args: {
    selectedLanguage: 'en',
    focused: true,
  },
};

export const Selected: Story = {
  args: {
    selectedLanguage: 'en',
    selected: true,
  },
};

export const SelectedAndFocused: Story = {
  args: {
    selectedLanguage: 'en',
    selected: true,
    focused: true,
  },
};

export const Disabled: Story = {
  args: {
    selectedLanguage: 'en',
    disabled: true,
  },
};
