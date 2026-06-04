import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEditor, QUESTION_TYPE_OPTIONS } from './ThemeEditor';
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
import { StarRating, type StarRatingValue } from '../../components/survey-rendering/StarRating';
import { RunningTotal, type RunningTotalValue } from '../../components/survey-rendering/RunningTotal';
import { DragAndDrop, type DragAndDropValue } from '../../components/survey-rendering/DragAndDrop';
import { CarouselQuestion, type CarouselQuestionValue } from '../../components/survey-rendering/CarouselQuestion';
import { SurveyErrorMessage } from '../../components/survey-rendering/SurveyErrorMessage';
import { QuestionText } from '../../components/survey-rendering/QuestionText';
import { QuestionField } from '../../components/survey-rendering/QuestionField';
import { Description } from '../../components/survey-rendering/Description';
import { DeviceFrame } from '../../components/ui/device-frame';

const meta: Meta = {
  title: 'Survey Rendering/Theme/ThemeEditor',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const ALL_IDS = QUESTION_TYPE_OPTIONS.map(q => q.id);

const LivePreview = ({
  viewport = 'desktop',
  visibleQuestionTypes = ALL_IDS,
}: {
  viewport?: 'desktop' | 'mobile';
  visibleQuestionTypes?: string[];
}) => {
  const show = (id: string) => visibleQuestionTypes.includes(id);
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
  const [starRatingValue, setStarRatingValue] = React.useState<StarRatingValue>({});
  const [runningTotalValue, setRunningTotalValue] = React.useState<RunningTotalValue>({});
  const [dragAndDropValue, setDragAndDropValue] = React.useState<DragAndDropValue>([]);
  const [carouselNpsValue, setCarouselNpsValue] = React.useState<CarouselQuestionValue>({});
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
  const starRatingError = showError && Object.keys(starRatingValue).length === 0 ? 'Please rate all items' : undefined;

  const hasAnyError = !!(textError || radioError || checkboxError || openError || dateError || dropdownError || npsError || gridError || starRatingError);

  const surveyContent = (
    <>
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

        {/* Questions */}
        <div className="flex flex-col" style={{ gap: 'var(--survey-question-spacing, 48px)' }}>
          {show('description') && (
            <Description
              title="Description title"
              description="Rich Text placeholder for displaying information to the respondent"
            />
          )}

          {show('text-input') && (
            <QuestionField>
              <QuestionText label="What is your primary area of focus?" required error={textError} />
              <TextAnswer
                placeholder="e.g. Design, Engineering, Product..."
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                error={textError}
              />
            </QuestionField>
          )}

          {show('radio') && (
            <QuestionField>
              <QuestionText label="Select your preferred contact method:" error={radioError} />
              <RadioGroup value={contactMethod} onValueChange={setContactMethod} error={radioError}>
                <RadioGroupOption value="email" label="Email" />
                <RadioGroupOption value="phone" label="Phone" />
                <RadioGroupOption value="sms" label="SMS" />
              </RadioGroup>
            </QuestionField>
          )}

          {show('nps') && (
            <QuestionField>
              <QuestionText label="How likely are you to recommend us?" error={npsError} />
              <NPS value={npsValue} onValueChange={setNpsValue} error={npsError} />
            </QuestionField>
          )}

          {show('checkbox') && (
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
          )}

          {show('open-end') && (
            <QuestionField>
              <QuestionText label="Could you provide more detail on your latest project?" required error={openError} />
              <OpenEndAnswer
                placeholder="Tell us about the challenges and outcomes..."
                value={openValue}
                onChange={(e) => setOpenValue(e.target.value)}
                error={openError}
              />
            </QuestionField>
          )}

          {show('choice-grid') && (
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
          )}

          {show('date') && (
            <QuestionField>
              <QuestionText label="When did you start your latest project?" required error={dateError} />
              <DateAnswer
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                error={dateError}
              />
            </QuestionField>
          )}

          {show('time') && (
            <QuestionField>
              <QuestionText label="What time would you prefer to be contacted?" />
              <TimePicker
                mode="single"
                value={timeValue}
                onChange={(e) => setTimeValue(e.target.value as TimeValue)}
              />
            </QuestionField>
          )}

          {show('dropdown') && (
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
          )}

          {show('card-sort') && (
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
          )}

          {show('running-total') && (
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
          )}

          {show('drag-drop') && (
            <QuestionField>
              <QuestionText label="Rank these items by dragging them into order:" />
              <DragAndDrop
                items={[
                  { id: 'design', label: 'Design' },
                  { id: 'performance', label: 'Performance' },
                  { id: 'usability', label: 'Usability' },
                  { id: 'reliability', label: 'Reliability' },
                ]}
                dropZoneLabel="Order of preference"
                value={dragAndDropValue}
                onChange={setDragAndDropValue}
              />
            </QuestionField>
          )}

          {show('numeric-ranking') && (
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
          )}

          {show('star-rating') && (
            <QuestionField>
              <QuestionText label="Numeric answers question using stars to rate items" error={starRatingError} />
              <StarRating
                items={[
                  { value: 'r1', label: 'Rating 1' },
                  { value: 'r2', label: 'Rating 2' },
                  { value: 'r3', label: 'Rating 3' },
                ]}
                value={starRatingValue}
                onChange={setStarRatingValue}
                error={starRatingError}
              />
            </QuestionField>
          )}

          {show('carousel-question') && (
            <QuestionField>
              <QuestionText label="How likely are you to recommend each of these?" />
              <CarouselQuestion
                answerType="nps"
                npsLeftLabel="Very unlikely"
                npsRightLabel="Very likely"
                items={[
                  {
                    id: 'portrait',
                    label: 'Portrait',
                    imageSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?h=450&w=338&fit=crop',
                    imageAlt: 'Portrait of a person smiling',
                    imageWidth: 338,
                    imageHeight: 450,
                  },
                  {
                    id: 'fries',
                    label: 'French Fries',
                    imageSrc: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600',
                    imageAlt: 'French fries',
                    imageWidth: 600,
                    imageHeight: 400,
                  },
                  {
                    id: 'sushi',
                    label: 'Sushi',
                    imageSrc: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600',
                    imageAlt: 'Sushi platter',
                    imageWidth: 600,
                    imageHeight: 400,
                  },
                ]}
                value={carouselNpsValue}
                onValueChange={setCarouselNpsValue}
                navigation="bullets"
              />
            </QuestionField>
          )}

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
    </>
  );

  return viewport === 'mobile' ? (
    <div className="w-full min-h-screen bg-muted/20 overflow-y-auto flex justify-center py-8">
      <DeviceFrame screenClassName="px-4 py-6">
        <div className="space-y-12">{surveyContent}</div>
      </DeviceFrame>
    </div>
  ) : (
    <div className="w-full min-h-screen bg-muted/20 overflow-y-auto p-12">
      <div className="mx-auto max-w-2xl space-y-12 transition-all duration-200">
        {surveyContent}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => {
    const [viewport, setViewport] = React.useState<'desktop' | 'mobile'>('desktop');
    const [visibleQuestionTypes, setVisibleQuestionTypes] = React.useState<string[]>(ALL_IDS);

    return (
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <div className="w-[450px] shrink-0 border-r border-border overflow-y-auto p-6 scrollbar-none">
          <ThemeEditor
            viewport={viewport}
            onViewportChange={setViewport}
            visibleQuestionTypes={visibleQuestionTypes}
            onVisibleQuestionTypesChange={setVisibleQuestionTypes}
          />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-none">
          <LivePreview viewport={viewport} visibleQuestionTypes={visibleQuestionTypes} />
        </div>
      </div>
    );
  },
};
