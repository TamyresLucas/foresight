import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEditor } from './ThemeEditor';
import { TextAnswer } from '../../components/survey-rendering/TextAnswer';
import { OpenEndAnswer } from '../../components/survey-rendering/OpenEndAnswer';
import { SurveyNavigation } from '../../components/survey-rendering/SurveyNavigation';
import { SurveyCompletionBar } from '../../components/survey-rendering/SurveyCompletionBar';
import { LanguageSelector } from '../../components/survey-rendering/LanguageSelector';
import { CheckboxOption } from '../../components/survey-rendering/Checkbox';
import { RadioGroup, RadioGroupOption } from '../../components/survey-rendering/RadioGroup';

const meta: Meta = {
  title: 'Survey Rendering/Theme/ThemeEditor',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const LivePreview = () => {
  const [textValue, setTextValue] = React.useState('');
  const [openValue, setOpenValue] = React.useState('');
  const [lang, setLang] = React.useState('en');
  const [checkedOptions, setCheckedOptions] = React.useState({ a: false, b: false, c: false });
  const [contactMethod, setContactMethod] = React.useState('email');

  return (
    <div className="w-full min-h-screen bg-muted/20 overflow-y-auto p-12">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Top Toolbar */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Company name</h2>
          <LanguageSelector
            selectedLanguage={lang}
            onLanguageChange={setLang}
          />
        </div>

        {/* Progress Bar */}
        <SurveyCompletionBar value={35} variant="basic" />

        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-[length:var(--brand-font-size-header)] font-[family-name:var(--brand-font-header)] font-[number:var(--brand-font-weight-header)] leading-tight text-foreground">
            Description title
          </h1>
          <p className="text-muted-foreground text-survey-body font-survey font-survey-regular">
            Rich Text placeholder for displaying information to the respondent
          </p>
        </div>

        {/* Questions */}
        <div className="flex flex-col" style={{ gap: 'var(--survey-question-spacing, 48px)' }}>
          <TextAnswer
            label="What is your primary area of focus?"
            placeholder="e.g. Design, Engineering, Product..."
            required
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />

          <div className="space-y-4">
            <label className="text-survey-body font-survey font-survey-regular text-survey-foreground">
              Select your preferred contact method:
            </label>
            <RadioGroup value={contactMethod} onValueChange={setContactMethod}>
              <RadioGroupOption value="email" label="Email" />
              <RadioGroupOption value="phone" label="Phone" />
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <label className="text-survey-body font-survey font-survey-regular text-survey-foreground">
              Which features are most important to you?
            </label>
            <div className="flex flex-col gap-2 w-full">
              <CheckboxOption
                label="Real-time collaboration"
                checked={checkedOptions.a}
                onCheckedChange={(val) => setCheckedOptions(p => ({ ...p, a: !!val }))}
              />
              <CheckboxOption
                label="Advanced analytics"
                checked={checkedOptions.b}
                onCheckedChange={(val) => setCheckedOptions(p => ({ ...p, b: !!val }))}
              />
              <CheckboxOption
                label="Custom integrations"
                checked={checkedOptions.c}
                onCheckedChange={(val) => setCheckedOptions(p => ({ ...p, c: !!val }))}
              />
            </div>
          </div>

          <OpenEndAnswer
            label="Could you provide more detail on your latest project?"
            placeholder="Tell us about the challenges and outcomes..."
            required
            value={openValue}
            onChange={(e) => setOpenValue(e.target.value)}
          />

          <div className="pt-8 border-t border-border-decorative space-y-8">
            <SurveyNavigation showPrevious showNext nextLabel="Next Page" />
            <SurveyNavigation showSeeResponses showQuit />
            <div className="w-full flex justify-center pt-4">
              <p className="text-xs font-normal text-muted-foreground tracking-tight">
                Survey software powered by{' '}
                <a
                  href="https://voxco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-survey-primary transition-colors underline underline-offset-2 decoration-survey-primary/30 hover:decoration-survey-primary font-semibold"
                >
                  Voxco
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <div className="w-[450px] shrink-0 border-r border-border overflow-y-auto p-6 scrollbar-none">
        <ThemeEditor />
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-none">
        <LivePreview />
      </div>
    </div>
  ),
};
