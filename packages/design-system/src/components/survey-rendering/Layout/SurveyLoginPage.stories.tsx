import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SurveyLoginPage } from './SurveyLoginPage';
import { applyTheme, FORESIGHT_DEFAULT } from '../../../lib/theme';

const meta: Meta<typeof SurveyLoginPage> = {
  title: 'Survey Rendering/Layout/SurveyLoginPage',
  component: SurveyLoginPage,
  decorators: [
    (Story) => {
      React.useEffect(() => {
        applyTheme(FORESIGHT_DEFAULT);
      }, []);
      return <Story />;
    },
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Login page for invitation-only surveys. The respondent enters their PIN, can switch language via the header selector, and clicks "Take survey". Built only from survey-rendering components on the shared SurveyPageShell.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SurveyLoginPage>;

const Controlled = (args: React.ComponentProps<typeof SurveyLoginPage>) => {
  const [pin, setPin] = React.useState('');
  const [lang, setLang] = React.useState('en');
  return (
    <SurveyLoginPage
      {...args}
      pin={pin}
      onPinChange={setPin}
      selectedLanguage={lang}
      onLanguageChange={setLang}
    />
  );
};

export const Desktop: Story = {
  render: (args) => <Controlled {...args} />,
};

export const WithError: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    error: 'The PIN you entered is not valid.',
  },
};

export const Mobile: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    viewport: 'mobile',
  },
};
