import type { Meta, StoryObj } from '@storybook/react';
import {
  TextHighlighter,
  type TextHighlightPart,
} from './TextHighlighter';

// Default categories map to the first two palette slots: Like -> the brand
// secondary (--survey-border-accent), Dislike -> the error token
// (--survey-destructive). Both are set by the theme editor in production; the
// decorator below seeds them with the theme editor's own default secondary
// (#008563) and error (#CF455C) values so the demo shows the real token colors.
const categories = [
  { id: 'like', label: 'Like' },
  { id: 'dislike', label: 'Dislike' },
];

// A six-category set colored from the dedicated `--category-N` tokens (defined at
// `:root` in tokens-static.css), rather than the default Like/Dislike survey
// tokens. Immigration uses `--category-4` for a yellow fill paired with a brown
// (`--category-4-line`, #BD5541) underline via `fillColor`. All values come from
// tokens, so there are no hardcoded colors here.
const themeCategories = [
  { id: 'politics', label: 'Politics', color: 'hsl(var(--category-1))' },
  { id: 'economy', label: 'Economy', color: 'hsl(var(--category-2))' },
  { id: 'trade', label: 'Trade', color: 'hsl(var(--category-3))' },
  {
    id: 'immigration',
    label: 'Immigration',
    color: 'hsl(var(--category-4-line))',
    fillColor: 'hsl(var(--category-4))',
  },
  { id: 'leadership', label: 'Leadership', color: 'hsl(var(--category-5))' },
  { id: 'identity', label: 'National identity', color: 'hsl(var(--category-6))' },
];

// With `withTextAnswer`, each category can carry an open-end `question` shown
// above the text field once that category is selected.
const categoriesWithQuestions = [
  { id: 'like', label: 'Like', question: 'What do you like about this statement?' },
  { id: 'dislike', label: 'Dislike', question: 'What do you dislike about this statement?' },
];

const prose =
  'There are many stereotypes about Canada – that we are a nation of extremely ' +
  'polite people, a welcoming melting pot, and that we’re the US’s laid-back cousin ' +
  'who lives nextdoor. But right now, the Canadian prime minister, Mark Carney, is ' +
  'bucking all of that lore after pressure from the US in the form of Donald Trump’s ' +
  '“concerns” about undocumented migrants and fentanyl moving across the US-Canada ' +
  'border. In response, the recently elected Liberal PM put forward a 127-page bill.';

// A long passage used to demonstrate the sticky controls (see LongTextSticky).
const longProse =
  'When we launched the redesigned checkout flow last quarter, the goal was to ' +
  'reduce the number of steps between adding an item to the cart and completing a ' +
  'purchase. Most testers said the new layout felt cleaner and more modern, and the ' +
  'one-click reorder feature was an immediate favourite that saved returning ' +
  'customers a noticeable amount of time. The progress indicator at the top of each ' +
  'step also helped people understand how far along they were, which reduced the ' +
  'anxiety that often comes with longer forms.\n\n' +
  'That said, the feedback was not uniformly positive. Several users found the ' +
  'shipping options confusing, particularly the difference between standard and ' +
  'expedited delivery when the estimated dates overlapped. A handful of people ' +
  'abandoned their cart at the mandatory account creation step, saying they simply ' +
  'wanted to check out as a guest and come back later. Others mentioned that the ' +
  'confirmation screen loaded slowly on mobile, and that the promo-code field was ' +
  'easy to miss because it was collapsed by default behind a small link.\n\n' +
  'Looking ahead, the team is weighing a few changes: making guest checkout the ' +
  'default, surfacing the promo-code field inline, and simplifying the shipping ' +
  'selector so the cheapest and fastest options are always visible without extra ' +
  'taps. We would like to understand which parts of this summary resonate with you, ' +
  'so please highlight the sentences you agree with and the ones you disagree with.';

// Segments variant: the author defines exactly which spans are highlightable.
const segments: TextHighlightPart[] = [
  'Our new checkout flow makes it ',
  { id: 's1', text: 'faster to complete a purchase' },
  ', but some users found the ',
  { id: 's2', text: 'shipping options confusing' },
  '. The ',
  { id: 's3', text: 'one-click reorder feature' },
  ' was a clear favourite, while the ',
  { id: 's4', text: 'mandatory account creation step' },
  ' caused several people to abandon their cart.',
];

const meta = {
  title: 'Survey Rendering/TextHighlighter',
  component: TextHighlighter,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      // `data-survey-theme` scopes the survey tokens. `--survey-border-accent`
      // (the brand secondary) has no static default — the theme editor populates
      // it at runtime — so we seed it (and the error token) here with the theme
      // editor's own default values (#008563 / #CF455C) so the Like/Dislike
      // colors match the real tokens. They are defined at `:root` (not just on
      // the wrapper) because the category dropdown renders in a portal at
      // document.body, outside this wrapper — a wrapper-scoped var wouldn't reach
      // the dropdown's color swatches.
      <>
        <style>{`:root { --survey-border-accent: 165 100% 26%; --survey-destructive: 349 54% 54%; }`}</style>
        <div
          data-survey-theme
          className="w-full max-w-md p-8 bg-survey-background"
        >
          <Story />
        </div>
      </>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'TextHighlighter lets respondents highlight text and tag each highlight with a labeled category.\n\n' +
          '**Toolbar.** A **Highlight** toggle is shown from the start. An **Erase** toggle appears only once at least ' +
          'one highlight exists. The two are mutually exclusive tools.\n\n' +
          '**Making a highlight.** With the Highlight tool active, the respondent drags (or long-presses on touch) ' +
          'across the text — the selection snaps to whole words — or taps a single word/segment. As soon as a ' +
          'highlight is made, a **category dropdown** opens, anchored to the selection, to pick its category. The ' +
          'reverse order also works: make a text selection first, it is applied when the highlight completes. ' +
          'Clicking an existing highlight (Highlight tool) re-opens its dropdown so the category can be changed; ' +
          'with the **Erase** tool, clicking a highlight removes it.\n\n' +
          '**Variants.**\n' +
          '- `freeform` (default): supply a plain prose `text`; any word(s) can be highlighted. The answer stores ' +
          'word-index ids (e.g. `w12`).\n' +
          '- `segments`: supply `parts` (plain strings are static text, objects are selectable segments). Only the ' +
          'predefined segments can be highlighted; the answer stores their segment ids.\n\n' +
          'The answer is a `Record<unitId, categoryId>`. Each category may set a `color`, otherwise a token-based ' +
          'palette is used. Highlights are a subtle low-opacity fill paired with a colored underline, so they stay ' +
          'perceivable for people who cannot distinguish the color (WCAG 1.4.1). Compose with QuestionText for the ' +
          'question label and error message.\n\n' +
          '**Text answer.** Set `withTextAnswer` to show a free-text field below the category dropdown in edit ' +
          'mode, letting the respondent attach a written note to each highlight. Notes are reported via ' +
          '`onNotesChange` (controlled `notes` / uncontrolled `defaultNotes`), keyed by the same unit ids as the ' +
          'category answer. Give a category a `question` to show an open-end prompt above the field once it is ' +
          'selected (e.g. "What do you like about this statement?").\n\n' +
          '**Without category.** Set `withoutCategory` for a plain highlighter: highlighting applies immediately ' +
          'with no edit-mode panel (no dropdown / Cancel / Confirm) and a single primary-colored highlight. The ' +
          'Highlight / Erase toolbar still applies; `categories` and `withTextAnswer` are ignored.',
      },
    },
  },
} satisfies Meta<typeof TextHighlighter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Freeform: Story = {
  args: {
    text: prose,
    categories,
  },
};

export const FreeformPrefilled: Story = {
  args: {
    text: prose,
    categories,
    // "extremely polite people," (Like) + "welcoming melting pot," (Dislike).
    defaultValue: { w13: 'like', w14: 'like', w15: 'like', w17: 'dislike', w18: 'dislike', w19: 'dislike' },
  },
};

// Six categories beyond the default Like/Dislike pair, each colored from the
// chart palette tokens (--chart-2 … --chart-7). Useful for thematic coding where
// respondents tag spans by topic rather than sentiment.
export const SixChartCategories: Story = {
  args: {
    text: prose,
    categories: themeCategories,
  },
};

export const Segments: Story = {
  args: {
    variant: 'segments',
    parts: segments,
    categories,
  },
};

export const SegmentsPrefilled: Story = {
  args: {
    variant: 'segments',
    parts: segments,
    categories: [
      { id: 'positive', label: 'Positive', color: '#16a34a' },
      { id: 'negative', label: 'Negative', color: '#dc2626' },
    ],
    defaultValue: { s1: 'positive', s2: 'negative', s4: 'negative' },
  },
};

// `withTextAnswer` adds a free-text field below the category dropdown in edit
// mode, so each highlight can carry a written note. The note is stored per
// highlight (keyed by the same unit ids as the category) and surfaced via
// `onNotesChange` / `notes`. Each category here also sets an open-end `question`,
// shown above the field once that category is selected.
export const WithTextAnswer: Story = {
  args: {
    text: prose,
    categories: categoriesWithQuestions,
    withTextAnswer: true,
  },
};

export const WithTextAnswerPrefilled: Story = {
  args: {
    text: prose,
    categories: categoriesWithQuestions,
    withTextAnswer: true,
    defaultValue: { w13: 'like', w14: 'like', w15: 'like' },
    // Note stored on every unit of the run, mirroring the category.
    defaultNotes: {
      w13: 'Reinforces the friendly stereotype',
      w14: 'Reinforces the friendly stereotype',
      w15: 'Reinforces the friendly stereotype',
    },
  },
};

// `withoutCategory` removes categories entirely: highlighting applies on the
// spot (no category dropdown / Cancel / Confirm), using a single primary-colored
// highlight. The Highlight / Erase toolbar still applies. `categories` is omitted.
export const WithoutCategory: Story = {
  args: {
    text: prose,
    withoutCategory: true,
  },
};

export const WithoutCategoryPrefilled: Story = {
  args: {
    text: prose,
    withoutCategory: true,
    // Any non-empty value marks the unit as highlighted (the component stores a
    // sentinel id internally).
    defaultValue: { w13: '__highlight__', w14: '__highlight__', w15: '__highlight__' },
  },
};

// Demonstrates the sticky controls. The passage is long and the decorator caps
// the height with `overflow-y-auto`, so the Highlight/Erase toolbar — and the
// category dropdown + Cancel/Confirm once you start editing — stay pinned to the
// top of the box while you scroll the text beneath them. (In production the
// nearest scroll container is the survey page; here it is this box.)
export const LongTextSticky: Story = {
  decorators: [
    (Story) => (
      <div className="h-[320px] flex flex-col">
        <Story />
      </div>
    ),
  ],
  args: {
    text: longProse,
    categories,
  },
};

