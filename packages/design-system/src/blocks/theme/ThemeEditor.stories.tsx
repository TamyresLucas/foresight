import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEditor, QUESTION_TYPE_OPTIONS, type SurveyPreviewPage, type HeaderBrand } from './ThemeEditor';
import { SurveyLoginPage } from '../../components/survey-rendering/Layout/SurveyLoginPage';
import { SurveyAuthenticationPage } from '../../components/survey-rendering/Layout/SurveyAuthenticationPage';
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
import { HybridGrid, type HybridGridColumn, type HybridGridValue } from '../../components/survey-rendering/HybridGrid';
import { FileUpload, type FileUploadFile } from '../../components/survey-rendering/FileUpload';
import { CardSort, type CardSortValue } from '../../components/survey-rendering/CardSort';
import { NumericRanking, type NumericRankingValue } from '../../components/survey-rendering/NumericRanking';
import { StarRating, type StarRatingValue } from '../../components/survey-rendering/StarRating';
import { SurveySlider, type SliderValue as SurveySliderValue } from '../../components/survey-rendering/Slider';
import { RunningTotal, type RunningTotalValue } from '../../components/survey-rendering/RunningTotal';
import { DragAndDrop, type DragAndDropValue } from '../../components/survey-rendering/DragAndDrop';
import { CarouselQuestion, type CarouselQuestionValue } from '../../components/survey-rendering/CarouselQuestion';
import { SurveyLookupTable, type LookupTableValue, type LookupTableColumn, type LookupTableRow } from '../../components/survey-rendering/LookupTable';
import { TextHighlighter, type TextHighlightValue, type TextHighlightNotes } from '../../components/survey-rendering/TextHighlighter';
import { ImageSelector, type ImageSelectorValue } from '../../components/survey-rendering/ImageSelector';
import { ImageChoiceGrid } from '../../components/survey-rendering/ImageChoiceGrid';
import { ImageAreaSelector, type ImageAreaSelectorValue } from '../../components/survey-rendering/ImageAreaSelector';
import { ImageAreaEvaluator, type ImageAreaEvaluatorValue } from '../../components/survey-rendering/ImageAreaEvaluator';
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
  companyName = 'Company name',
  logoSrc,
}: {
  viewport?: 'desktop' | 'mobile';
  visibleQuestionTypes?: string[];
  companyName?: string;
  logoSrc?: string;
}) => {
  const show = (id: string) => visibleQuestionTypes.includes(id);
  const [textValue, setTextValue] = React.useState('');
  const [openValue, setOpenValue] = React.useState('');
  const [dateValue, setDateValue] = React.useState('');
  const [dropdownValue, setDropdownValue] = React.useState<string>('');
  const [timeValue, setTimeValue] = React.useState<TimeValue>({ hour: 2, minute: 30, period: 'PM' });
  const [lang, setLang] = React.useState('en');
  const [checkedOptions, setCheckedOptions] = React.useState({ a: false, b: false, c: false });
  const [customIntegrationsText, setCustomIntegrationsText] = React.useState('');
  const [contactMethod, setContactMethod] = React.useState<string>('');
  const [npsValue, setNpsValue] = React.useState<string>('');
  const [gridValue, setGridValue] = React.useState<Record<string, string>>({});
  const [hybridGridValue, setHybridGridValue] = React.useState<HybridGridValue>({});
  const [fileUploadFiles, setFileUploadFiles] = React.useState<FileUploadFile[]>([]);
  const [cardSortValue, setCardSortValue] = React.useState<CardSortValue>({});
  const [numericRankingValue, setNumericRankingValue] = React.useState<NumericRankingValue>({});
  const [starRatingValue, setStarRatingValue] = React.useState<StarRatingValue>({});
  // Rating 2 is optional (shows an X reset once scored); the others are
  // mandatory (marked with a red asterisk and validated per item).
  const starRatingItems = [
    { value: 'r1', label: 'Rating 1' },
    { value: 'r2', label: 'Rating 2 (optional)', optional: true },
    { value: 'r3', label: 'Rating 3' },
  ];
  const [sliderValue, setSliderValue] = React.useState<SurveySliderValue>([50]);
  const [runningTotalValue, setRunningTotalValue] = React.useState<RunningTotalValue>({});
  const [dragAndDropValue, setDragAndDropValue] = React.useState<DragAndDropValue>([]);
  const [carouselNpsValue, setCarouselNpsValue] = React.useState<CarouselQuestionValue>({});
  const [lookupTableValue, setLookupTableValue] = React.useState<LookupTableValue>([]);
  const [highlightValue, setHighlightValue] = React.useState<TextHighlightValue>({});
  const [highlightNotes, setHighlightNotes] = React.useState<TextHighlightNotes>({});
  const highlightCategories = [
    { id: 'like', label: 'Like', question: 'What do you like about this statement?' },
    { id: 'dislike', label: 'Dislike', question: 'What do you dislike about this statement?' },
  ];
  const [imageSelectorValue, setImageSelectorValue] = React.useState<ImageSelectorValue>([]);
  const imageSelectorOptions = [
    { id: 'c1', label: 'Choice 1', src: 'https://images.unsplash.com/photo-1507783548227-544c3b8fc065?w=300&h=160&fit=crop', alt: 'Rainbow over a field' },
    { id: 'c2', label: 'Choice 2', src: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=160&fit=crop', alt: 'Sunflower' },
  ];
  const [imageGridValue, setImageGridValue] = React.useState<Record<string, string>>({});
  const imageGridRows = [
    { id: 'store1', label: 'Store 1' },
    { id: 'store2', label: 'Store 2' },
    { id: 'store3', label: 'Store 3' },
  ];
  // Twemoji assets are keyed by Unicode codepoint, so the fruit is deterministic.
  const imageGridColumns = [
    { value: 'apples', label: 'Apples', src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34f.png', alt: 'Apples' },
    { value: 'pears', label: 'Pears', src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f350.png', alt: 'Pears' },
    { value: 'lemons', label: 'Lemons', src: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png', alt: 'Lemons' },
  ];
  const [imageAreaValue, setImageAreaValue] = React.useState<ImageAreaSelectorValue>([]);
  const [imageAreaEvalValue, setImageAreaEvalValue] = React.useState<ImageAreaEvaluatorValue>({});
  const sunflowerSrc = 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=300&h=160&fit=crop';
  const imageAreaQuadrants = [
    { id: 'tl', label: 'Top left', x: 0, y: 0, width: 50, height: 50 },
    { id: 'tr', label: 'Top right', x: 50, y: 0, width: 50, height: 50 },
    { id: 'bl', label: 'Bottom left', x: 0, y: 50, width: 50, height: 50 },
    { id: 'br', label: 'Bottom right', x: 50, y: 50, width: 50, height: 50 },
  ];
  const imageAreaEvalAreas = [{ id: 'left', label: 'Left half', x: 0, y: 0, width: 50, height: 100 }];
  const imageAreaEvalChoices = [
    { id: 'c1', label: 'Choice 1' },
    { id: 'c2', label: 'Choice 2' },
  ];
  const [showError, setShowError] = React.useState(false);

  // Status uses a dropdown editor in the add-choice draft row; Email and Amount
  // use text inputs (Amount right-aligned).
  const lookupTableColumns: LookupTableColumn[] = [
    {
      id: 'status',
      label: 'Status',
      format: 'dropdown',
      editPlaceholder: 'Select status',
      options: [
        { value: 'Success', label: 'Success' },
        { value: 'Processing', label: 'Processing' },
        { value: 'Failed', label: 'Failed' },
      ],
    },
    { id: 'email', label: 'Email', sortable: true, format: 'text', editPlaceholder: 'name@example.com' },
    { id: 'amount', label: 'Amount', sortable: true, align: 'right', format: 'text', editPlaceholder: '$0.00' },
  ];
  // 13 rows across 2 pages (page size is 10) to demonstrate pagination.
  const [lookupTableRows, setLookupTableRows] = React.useState<LookupTableRow[]>([
    { id: 'lt1', data: { status: 'Success', email: 'ken99@example.com', amount: '$316.00' } },
    { id: 'lt2', data: { status: 'Success', email: 'abe45@example.com', amount: '$242.00' } },
    { id: 'lt3', data: { status: 'Processing', email: 'monserrat44@example.com', amount: '$837.00' } },
    { id: 'lt4', data: { status: 'Success', email: 'silas22@example.com', amount: '$874.00' } },
    { id: 'lt5', data: { status: 'Failed', email: 'carmella@example.com', amount: '$721.00' } },
    { id: 'lt6', data: { status: 'Success', email: 'jason78@example.com', amount: '$129.00' } },
    { id: 'lt7', data: { status: 'Processing', email: 'noah12@example.com', amount: '$540.00' } },
    { id: 'lt8', data: { status: 'Success', email: 'mia34@example.com', amount: '$612.00' } },
    { id: 'lt9', data: { status: 'Failed', email: 'liam90@example.com', amount: '$058.00' } },
    { id: 'lt10', data: { status: 'Success', email: 'olivia21@example.com', amount: '$733.00' } },
    { id: 'lt11', data: { status: 'Processing', email: 'lucas55@example.com', amount: '$921.00' } },
    { id: 'lt12', data: { status: 'Success', email: 'emma47@example.com', amount: '$284.00' } },
    { id: 'lt13', data: { status: 'Failed', email: 'sophia63@example.com', amount: '$476.00' } },
  ]);

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

  const hybridGridRows = [
    { id: 'hg-row-1', label: 'Row 1' },
    { id: 'hg-row-2', label: 'Row 2' },
    { id: 'hg-row-3', label: 'Row 3' },
  ];

  const hybridGridColumns: HybridGridColumn[] = [
    { id: 'comment', type: 'text', label: 'Comment', placeholder: 'Type an answer…' },
    {
      id: 'tags',
      type: 'checkbox',
      label: 'Tags',
      choices: [
        { value: 'choice-1', label: 'Choice 1' },
        { value: 'choice-2', label: 'Choice 2' },
        { value: 'choice-3', label: 'Choice 3' },
      ],
    },
    {
      id: 'priority',
      type: 'dropdown',
      label: 'Priority',
      options: [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' },
      ],
    },
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
  const hybridGridError = showError && Object.keys(hybridGridValue).length === 0 ? 'Please answer all rows' : undefined;
  const starRatingError =
    showError && starRatingItems.some((it) => !it.optional && !starRatingValue[it.value])
      ? 'Please rate all required items'
      : undefined;

  const hasAnyError = !!(textError || radioError || checkboxError || openError || dateError || dropdownError || npsError || gridError || hybridGridError || starRatingError);

  const surveyContent = (
    <>
        {/* Top Toolbar */}
        <div className="flex justify-between items-center gap-4">
          {logoSrc ? (
            <img src={logoSrc} alt={companyName} className="max-h-12 w-auto object-contain" />
          ) : (
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{companyName}</h2>
          )}
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
              />
            </QuestionField>
          )}

          {show('radio') && (
            <QuestionField>
              <QuestionText label="Select your preferred contact method:" error={radioError} />
              <RadioGroup value={contactMethod} onValueChange={setContactMethod}>
                <RadioGroupOption value="email" label="Email" />
                <RadioGroupOption value="phone" label="Phone" />
                <RadioGroupOption value="sms" label="SMS" />
              </RadioGroup>
            </QuestionField>
          )}

          {show('nps') && (
            <QuestionField>
              <QuestionText label="How likely are you to recommend us?" error={npsError} />
              <NPS value={npsValue} onValueChange={setNpsValue} />
            </QuestionField>
          )}

          {show('checkbox') && (
            <QuestionField>
              <QuestionText label="Which features are most important to you?" error={checkboxError} />
              <CheckboxGroup>
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
                  openEnd
                  openEndValue={customIntegrationsText}
                  onOpenEndChange={setCustomIntegrationsText}
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
                variant={viewport}
              />
            </QuestionField>
          )}

          {show('hybrid-grid') && (
            <QuestionField>
              <QuestionText label="Tell us more about each area:" error={hybridGridError} />
              <HybridGrid
                rows={hybridGridRows}
                columns={hybridGridColumns}
                value={hybridGridValue}
                onValueChange={setHybridGridValue}
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
                items={starRatingItems}
                value={starRatingValue}
                onChange={setStarRatingValue}
              />
            </QuestionField>
          )}

          {show('slider') && (
            <QuestionField>
              <QuestionText label="On a scale from 0 to 100, how satisfied are you?" />
              <SurveySlider
                min={0}
                max={100}
                showValue
                minLabel="Not satisfied"
                maxLabel="Very satisfied"
                value={sliderValue}
                onChange={setSliderValue}
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

          {show('lookup-table') && (
            <QuestionField>
              <QuestionText label="Select the transactions you'd like to review:" />
              <SurveyLookupTable
                columns={lookupTableColumns}
                rows={lookupTableRows}
                filterColumnId="email"
                filterPlaceholder="Filter emails…"
                value={lookupTableValue}
                onChange={setLookupTableValue}
                onAddRow={(row) => setLookupTableRows((prev) => [...prev, row])}
              />
            </QuestionField>
          )}

          {show('text-highlighter') && (
            <QuestionField>
              <QuestionText label="Highlight the parts of this response you like or dislike:" />
              <TextHighlighter
                text="Our new checkout flow makes it faster to complete a purchase, and most testers said the redesigned cart felt clean and modern. The one-click reorder feature was a clear favourite and saved people a lot of time. That said, some users found the shipping options confusing, and the mandatory account creation step caused several people to abandon their cart before paying. A few also mentioned that the confirmation screen loaded slowly on mobile."
                categories={highlightCategories}
                withTextAnswer
                value={highlightValue}
                onChange={setHighlightValue}
                notes={highlightNotes}
                onNotesChange={setHighlightNotes}
              />
            </QuestionField>
          )}

          {show('file-upload') && (
            <QuestionField>
              <QuestionText label="Allow a respondent to upload a file to the server" />
              <FileUpload
                files={fileUploadFiles}
                onFilesAdded={(added) =>
                  setFileUploadFiles((prev) => [
                    ...prev,
                    ...added.map((f, i) => ({
                      id: `${f.name}-${Date.now()}-${i}`,
                      name: f.name,
                      size: f.size,
                      progress: 0,
                      previewUrl: f.type.startsWith('image/') ? URL.createObjectURL(f) : undefined,
                    })),
                  ])
                }
                onFileRemove={(id) =>
                  setFileUploadFiles((prev) => prev.filter((f) => f.id !== id))
                }
              />
            </QuestionField>
          )}

          {show('image-selector') && (
            <QuestionField>
              <QuestionText label="Single or Multiple answers question using Images" />
              <ImageSelector
                options={imageSelectorOptions}
                value={imageSelectorValue}
                onChange={setImageSelectorValue}
              />
            </QuestionField>
          )}

          {show('image-choice-grid') && (
            <QuestionField>
              <QuestionText label="What fruit was on display in the following stores?" />
              <ImageChoiceGrid
                rows={imageGridRows}
                columns={imageGridColumns}
                value={imageGridValue}
                onValueChange={setImageGridValue}
                variant={viewport === 'mobile' ? 'mobile' : 'auto'}
              />
            </QuestionField>
          )}

          {show('image-area-selector') && (
            <QuestionField>
              <QuestionText label="Single or Multiple answers question using Image Areas" />
              <ImageAreaSelector
                src={sunflowerSrc}
                alt="Sunflower"
                areas={imageAreaQuadrants}
                value={imageAreaValue}
                onChange={setImageAreaValue}
              />
            </QuestionField>
          )}

          {show('image-area-evaluator') && (
            <QuestionField>
              <QuestionText label="Assign a value to an image area by clicking it" />
              <ImageAreaEvaluator
                src={sunflowerSrc}
                alt="Sunflower"
                areas={imageAreaEvalAreas}
                choices={imageAreaEvalChoices}
                value={imageAreaEvalValue}
                onChange={setImageAreaEvalValue}
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
    const [page, setPage] = React.useState<SurveyPreviewPage>('survey');
    const [pageLang, setPageLang] = React.useState('en');
    const [pin, setPin] = React.useState('');
    const [code, setCode] = React.useState('');
    const [headerBrand, setHeaderBrand] = React.useState<HeaderBrand>({
      type: 'name',
      name: 'Company name',
    });

    const companyName = headerBrand.name;
    const logoSrc = headerBrand.type === 'logo' ? headerBrand.logoSrc : undefined;

    return (
      <div className="flex h-screen w-full overflow-hidden bg-background">
        <div className="w-[450px] shrink-0 border-r border-border overflow-y-auto p-6 scrollbar-none">
          <ThemeEditor
            viewport={viewport}
            onViewportChange={setViewport}
            visibleQuestionTypes={visibleQuestionTypes}
            onVisibleQuestionTypesChange={setVisibleQuestionTypes}
            page={page}
            onPageChange={setPage}
            headerBrand={headerBrand}
            onHeaderBrandChange={setHeaderBrand}
          />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-none">
          {page === 'survey' && (
            <LivePreview
              viewport={viewport}
              visibleQuestionTypes={visibleQuestionTypes}
              companyName={companyName}
              logoSrc={logoSrc}
            />
          )}
          {page === 'login' && (
            <SurveyLoginPage
              viewport={viewport}
              companyName={companyName}
              logoSrc={logoSrc}
              selectedLanguage={pageLang}
              onLanguageChange={setPageLang}
              pin={pin}
              onPinChange={setPin}
              onSubmit={() => alert(`Take survey with PIN: ${pin || '(empty)'}`)}
            />
          )}
          {page === 'authentication' && (
            <SurveyAuthenticationPage
              viewport={viewport}
              companyName={companyName}
              logoSrc={logoSrc}
              selectedLanguage={pageLang}
              onLanguageChange={setPageLang}
              maskedEmail="j***@example.com"
              code={code}
              onCodeChange={setCode}
              onSubmit={() => alert(`Continue with code: ${code || '(empty)'}`)}
              onResend={() => alert('Resent code')}
            />
          )}
        </div>
      </div>
    );
  },
};
