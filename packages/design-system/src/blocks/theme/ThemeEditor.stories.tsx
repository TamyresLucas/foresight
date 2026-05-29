import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEditor } from './ThemeEditor';
import { TextAnswer } from '../../components/survey-rendering/TextAnswer';
import { OpenEndAnswer } from '../../components/survey-rendering/OpenEndAnswer';
import { DateAnswer } from '../../components/survey-rendering/DateAnswer';
import { DropdownAnswer } from '../../components/survey-rendering/DropdownAnswer';
import { TimePicker, type TimeValue } from '../../components/survey-rendering/TimePicker';
import { SurveyNavigation } from '../../components/survey-rendering/SurveyNavigation';
import { SurveyCompletionBar } from '../../components/survey-rendering/SurveyCompletionBar';
import { LanguageSelector } from '../../components/survey-rendering/LanguageSelector';
import { CheckboxOption, CheckboxGroup } from '../../components/survey-rendering/Checkbox';
import { RadioGroup, RadioGroupOption } from '../../components/survey-rendering/RadioGroup';
import { NPS } from '../../components/survey-rendering/NPS';
import { ChoiceGrid } from '../../components/survey-rendering/ChoiceGrid';
import { CardSort, type CardSortValue } from '../../components/survey-rendering/CardSort';
import { NumericRanking, type NumericRankingValue } from '../../components/survey-rendering/NumericRanking';
import { RunningTotal, type RunningTotalValue } from '../../components/survey-rendering/RunningTotal';
import { SurveyErrorMessage } from '../../components/survey-rendering/SurveyErrorMessage';
import { QuestionText } from '../../components/survey-rendering/QuestionText';
import { QuestionField } from '../../components/survey-rendering/QuestionField';
import { cn } from '../../lib/utils';

const meta: Meta = {
  title: 'Survey Rendering/Theme/ThemeEditor',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const LivePreview = ({ viewport = 'desktop' }: { viewport?: 'desktop' | 'mobile' }) => {
  const [textValue, setTextValue] = React.useState('');
  const [openValue, setOpenValue] = React.useState('');
  const [dateValue, setDateValue] = React.useState('');
  const [dropdownValue, setDropdownValue] = React.useState<string>('');
  const [timeValue, setTimeValue] = React.useState<TimeValue>({ hour: 2, minute: 30, period: 'PM' });
  const [lang, setLang] = React.useState('en');
  const [checkedOptions, setCheckedOptions] = React.useState({ a: false, b: false, c: false });
  const [contactMethod, setContactMethod] = React.useState<string>('');
  const [npsValue, setNpsValue] = React.useState<string>('');
  const [gridValue, setGridValue] = React.useState<Record<string, string>>({});
  const [cardSortValue, setCardSortValue] = React.useState<CardSortValue>({});
  const [numericRankingValue, setNumericRankingValue] = React.useState<NumericRankingValue>({});
  const [runningTotalValue, setRunningTotalValue] = React.useState<RunningTotalValue>({});
  const [showError, setShowError] = React.useState(false);

  const gridRows = [
    { id: 'option-1', label: 'Speed' },
    { id: 'option-2', label: 'Patience' },
    { id: 'option-3', label: 'Accuracy' },
  ];

  const gridColumns = [
    { value: 'very_satisfied', label: 'Very satisfied' },
    { value: 'somewhat_satisfied', label: 'Somewhat satisfied' },
    { value: 'neither', label: 'Neither satisfied or dissatisfied' },
    { value: 'somewhat_dissatisfied', label: 'Somewhat dissatisfied' },
    { value: 'very_dissatisfied', label: 'Very dissatisfied' },
  ];

  const requiredErrorMsg = 'This question is required';
  const textError = showError && !textValue ? requiredErrorMsg : undefined;
  const radioError = showError && !contactMethod ? requiredErrorMsg : undefined;
  const checkboxError =
    showError && !checkedOptions.a && !checkedOptions.b && !checkedOptions.c
      ? requiredErrorMsg
      : undefined;
  const openError = showError && !openValue ? requiredErrorMsg : undefined;
  const dateError = showError && !dateValue ? requiredErrorMsg : undefined;
  const dropdownError = showError && !dropdownValue ? requiredErrorMsg : undefined;
  const npsError = showError && !npsValue ? requiredErrorMsg : undefined;
  const gridError = showError && Object.keys(gridValue).length === 0 ? 'Please answer all rows' : undefined;

  const hasAnyError = !!(textError || radioError || checkboxError || openError || dateError || dropdownError || npsError || gridError);

  return (
    <div className="w-full min-h-screen bg-muted/20 overflow-y-auto p-12">
      <div className={cn(
        "mx-auto space-y-12 transition-all duration-200",
        viewport === 'mobile' ? "max-w-[375px]" : "max-w-2xl"
      )}>
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

        {/* Error Message */}
        {hasAnyError && <SurveyErrorMessage />}

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
          <QuestionField>
            <QuestionText label="What is your primary area of focus?" required error={textError} />
            <TextAnswer
              placeholder="e.g. Design, Engineering, Product..."
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              error={textError}
            />
          </QuestionField>

          <QuestionField>
            <QuestionText label="Select your preferred contact method:" error={radioError} />
            <RadioGroup value={contactMethod} onValueChange={setContactMethod} error={radioError}>
              <RadioGroupOption value="email" label="Email" />
              <RadioGroupOption value="phone" label="Phone" />
              <RadioGroupOption value="sms" label="SMS" />
            </RadioGroup>
          </QuestionField>

          <QuestionField>
            <QuestionText label="How likely are you to recommend us?" error={npsError} />
            <NPS value={npsValue} onValueChange={setNpsValue} error={npsError} />
          </QuestionField>

          <QuestionField>
            <QuestionText label="Which features are most important to you?" error={checkboxError} />
            <CheckboxGroup error={checkboxError}>
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
            </CheckboxGroup>
          </QuestionField>

          <QuestionField>
            <QuestionText label="Could you provide more detail on your latest project?" required error={openError} />
            <OpenEndAnswer
              placeholder="Tell us about the challenges and outcomes..."
              value={openValue}
              onChange={(e) => setOpenValue(e.target.value)}
              error={openError}
            />
          </QuestionField>

          <QuestionField>
            <QuestionText label="Please rate your experience with our services:" error={gridError} />
            <ChoiceGrid
              rows={gridRows}
              columns={gridColumns}
              value={gridValue}
              onValueChange={setGridValue}
              error={gridError}
              variant={viewport}
            />
          </QuestionField>

          <QuestionField>
            <QuestionText label="When did you start your latest project?" required error={dateError} />
            <DateAnswer
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
              error={dateError}
            />
          </QuestionField>

          <QuestionField>
            <QuestionText label="What time would you prefer to be contacted?" />
            <TimePicker
              mode="single"
              value={timeValue}
              onChange={(e) => setTimeValue(e.target.value as TimeValue)}
            />
          </QuestionField>

          <QuestionField>
            <QuestionText label="What is your preferred contact method?" required error={dropdownError} />
            <DropdownAnswer
              placeholder="Select answer"
              options={[
                { value: 'email', label: 'Email' },
                { value: 'phone', label: 'Phone' },
                { value: 'sms', label: 'SMS' },
                { value: 'mail', label: 'Mail' },
              ]}
              value={dropdownValue}
              onValueChange={setDropdownValue}
              error={dropdownError}
            />
          </QuestionField>

          <QuestionField>
            <QuestionText label="How would you categorize these products?" />
            <CardSort
              items={[
                { id: 'apple', label: 'Apple' },
                { id: 'banana', label: 'Banana' },
                { id: 'cherry', label: 'Cherry' },
                { id: 'date', label: 'Date' },
              ]}
              choiceLabels={['Like', 'Dislike']}
              value={cardSortValue}
              onChange={setCardSortValue}
            />
          </QuestionField>

          <QuestionField>
            <QuestionText label="Allocation or constant-sum question using numeric values" />
            <RunningTotal
              rows={[
                { value: 'row1', label: 'Row 1' },
                { value: 'row2', label: 'Row 2' },
                { value: 'row3', label: 'Row 3' },
              ]}
              columns={[{ value: 'col1', label: 'Column 1' }]}
              value={runningTotalValue}
              onChange={setRunningTotalValue}
            />
          </QuestionField>

          <QuestionField>
            <QuestionText label="Rank the following in order of importance:" />
            <NumericRanking
              items={[
                { value: 'speed', label: 'Speed' },
                { value: 'quality', label: 'Quality' },
                { value: 'cost', label: 'Cost' },
              ]}
              value={numericRankingValue}
              onChange={setNumericRankingValue}
            />
          </QuestionField>

          <div className="pt-8 border-t border-border-decorative space-y-8">
            <SurveyNavigation
              showPrevious
              showNext
              nextLabel="Next Page"
              onNext={() => setShowError(true)}
            />
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
  render: () => {
    const [viewport, setViewport] = React.useState<'desktop' | 'mobile'>('desktop');
    
    return (
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <div className="w-[450px] shrink-0 border-r border-border overflow-y-auto p-6 scrollbar-none">
          <ThemeEditor viewport={viewport} onViewportChange={setViewport} />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-none">
          <LivePreview viewport={viewport} />
        </div>
      </div>
    );
  },
};
