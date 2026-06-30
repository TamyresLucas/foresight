import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SurveyAuthenticationPage } from './SurveyAuthenticationPage';
import { applyTheme, FORESIGHT_DEFAULT } from '../../../lib/theme';

const meta: Meta<typeof SurveyAuthenticationPage> = {
  title: 'Survey Rendering/Layout/SurveyAuthenticationPage',
  component: SurveyAuthenticationPage,
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
          'Authentication page for respondents returning after a dropped session. A code was sent to their already-configured email; once entered, the app forwards them to the last accessed survey page (via onSubmit).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SurveyAuthenticationPage>;

const Controlled = (args: React.ComponentProps<typeof SurveyAuthenticationPage>) => {
  const [code, setCode] = React.useState('');
  const [lang, setLang] = React.useState('en');
  return (
    <SurveyAuthenticationPage
      {...args}
      code={code}
      onCodeChange={setCode}
      selectedLanguage={lang}
      onLanguageChange={setLang}
    />
  );
};

export const Desktop: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    maskedEmail: 'j***@example.com',
    onResend: () => {},
  },
};

export const WithError: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    maskedEmail: 'j***@example.com',
    error: 'That code is incorrect or has expired.',
    onResend: () => {},
  },
};

export const Mobile: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    viewport: 'mobile',
    maskedEmail: 'j***@example.com',
    onResend: () => {},
  },
};
