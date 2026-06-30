import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SurveyTakingPage } from './SurveyTakingPage';
import { QuestionField } from '../QuestionField';
import { QuestionText } from '../QuestionText';
import { TextAnswer } from '../TextAnswer';
import { RadioGroup, RadioGroupOption } from '../RadioGroup';
import { applyTheme, FORESIGHT_DEFAULT } from '../../../lib/theme';

const meta: Meta<typeof SurveyTakingPage> = {
  title: 'Survey Rendering/Layout/SurveyTakingPage',
  component: SurveyTakingPage,
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
          'Canonical survey-taking page chrome (header, progress bar, error banner, questions slot, navigation, footer) on the shared SurveyPageShell. Apps supply rendered questions as children.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SurveyTakingPage>;

const SampleQuestions = () => {
  const [text, setText] = React.useState('');
  const [contact, setContact] = React.useState('');
  return (
    <>
      <QuestionField>
        <QuestionText label="What is your primary area of focus?" required />
        <TextAnswer
          placeholder="e.g. Design, Engineering, Product..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </QuestionField>
      <QuestionField>
        <QuestionText label="Select your preferred contact method:" />
        <RadioGroup value={contact} onValueChange={setContact}>
          <RadioGroupOption value="email" label="Email" />
          <RadioGroupOption value="phone" label="Phone" />
          <RadioGroupOption value="sms" label="SMS" />
        </RadioGroup>
      </QuestionField>
    </>
  );
};

const Template = (args: React.ComponentProps<typeof SurveyTakingPage>) => {
  const [lang, setLang] = React.useState('en');
  return (
    <SurveyTakingPage
      {...args}
      selectedLanguage={lang}
      onLanguageChange={setLang}
      progress={35}
      navigation={{ showPrevious: true, showNext: true, nextLabel: 'Next Page' }}
    >
      <SampleQuestions />
    </SurveyTakingPage>
  );
};

export const Desktop: Story = {
  render: (args) => <Template {...args} />,
};

export const Mobile: Story = {
  render: (args) => <Template {...args} />,
  args: {
    viewport: 'mobile',
  },
};
