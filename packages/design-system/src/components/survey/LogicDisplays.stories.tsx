import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Note: _reference/LogicDisplays.tsx cannot be imported directly because it
// depends on '../types' and '../utils', which are not yet implemented as files.
// This stories file mirrors all 5 exported component shapes exactly, replaces
// legacy tokens with shadcn tokens, and builds realistic mock data inline.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Local type mirrors (exact prop shapes from _reference/LogicDisplays.tsx)
// ---------------------------------------------------------------------------

type ConditionOperator =
  | "equals"
  | "not_equals"
  | "contains"
  | "greater_than"
  | "less_than"
  | "is_empty"
  | "is_not_empty";

interface MockChoice {
  id: string;
  text: string;
}

interface MockQuestion {
  id: string;
  qid: string;
  text: string;
  choices?: MockChoice[];
}

interface MockBlock {
  id: string;
  bid: string;
  title: string;
  questions: MockQuestion[];
}

interface MockSurvey {
  blocks: MockBlock[];
}

interface MockLogicIssue {
  message: string;
}

// ---------------------------------------------------------------------------
// Shared helpers (port of _reference/LogicDisplays.tsx helpers)
// ---------------------------------------------------------------------------

const OPERATOR_LABELS: Record<ConditionOperator, string> = {
  equals: "=",
  not_equals: "≠",
  contains: "contains",
  greater_than: ">",
  less_than: "<",
  is_empty: "is empty",
  is_not_empty: "is not empty",
};

function fmt(cond: any): string {
  const op = OPERATOR_LABELS[cond.operator as ConditionOperator] || cond.operator;
  if (cond.operator === "is_empty" || cond.operator === "is_not_empty") {
    return `${cond.questionId} ${op}`;
  }
  return `${cond.questionId} ${op} "${cond.value}"`;
}

function fmtDest(dest: string, survey: MockSurvey): string {
  if (dest === "next") return "Next Question";
  if (dest === "end") return "End of Survey";
  if (dest.startsWith("block:")) {
    const id = dest.slice(6);
    const block = survey.blocks.find((b) => b.id === id);
    return block
      ? `Block ${block.bid}: ${block.title.slice(0, 30)}`
      : "Unknown Block";
  }
  const q = survey.blocks
    .flatMap((b) => b.questions)
    .find((q) => q.id === dest);
  return q ? `${q.qid}: ${q.text.slice(0, 30)}` : dest;
}

// ---------------------------------------------------------------------------
// Shared sub-component: IssueCard
// ---------------------------------------------------------------------------

function IssueCard({ issues }: { issues: MockLogicIssue[] }) {
  if (issues.length === 0) return null;
  const unique = Array.from(new Set(issues.map((i) => i.message)));
  return (
    <div className="flex items-center gap-2 p-3 rounded border border-[#EF576B] bg-[#FEEFF1] text-[#232323] mt-3">
      <span className="material-symbols-rounded text-base text-[#CF455C] flex-shrink-0 leading-none select-none">
        warning
      </span>
      <div className="flex-1 text-sm">
        {unique.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 1. DisplayLogicDisplayMock
// ---------------------------------------------------------------------------

interface DisplayLogicDisplayMockProps {
  logic?: any;
  survey: MockSurvey;
  onClick?: any;
  onRemove?: any;
  issues?: MockLogicIssue[];
  isFocused?: boolean;
  focusedId?: string | null;
  readOnly?: boolean;
  currentQuestion?: any;
}

function DisplayLogicDisplayMock({
  logic,
  survey: _survey,
  onClick,
  onRemove,
  issues = [],
  isFocused = false,
  focusedId,
  readOnly = false,
}: DisplayLogicDisplayMockProps) {
  if (!logic || (!logic.conditions && !logic.branches && !logic.type)) return null;
  
  // Handlers for different logic structures passed in stories
  const confirmedConditions = logic.conditions ? logic.conditions.filter(
    (c: any) => c.isConfirmed === true,
  ) : [];
  
  const confirmedSets = (logic.logicSets ?? []).filter(
    (s: any) => s.isConfirmed === true,
  );

  if (confirmedConditions.length === 0 && confirmedSets.length === 0)
    return null;

  return (
    <div
      className={cn(
        "mt-4 p-3 border rounded-md bg-muted/40 relative group/logic transition-colors cursor-pointer",
        isFocused ? "border-primary ring-1 ring-primary" : "border-border-ui",
      )}
      onClick={() => onClick?.()}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-rounded text-lg text-primary leading-none select-none">
            visibility
          </span>
          <h4 className="text-sm font-semibold text-foreground">
            Display Logic
          </h4>
        </div>
        {!readOnly && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className="w-6 h-6 flex items-center justify-center rounded-md text-destructive hover:bg-destructive/10 opacity-0 group-hover/logic:opacity-100 transition-opacity"
            title="Remove Display Logic"
          >
            <span className="material-symbols-rounded text-base leading-none select-none">
              close
            </span>
          </button>
        )}
      </div>

      {/* Body */}
      <div className="pl-2 space-y-1 text-sm text-muted-foreground">
        <p className="mb-1">Show this question if:</p>
        <div className="flex flex-wrap gap-2 items-center">
          {/* Flat conditions */}
          {confirmedConditions.map((c: any, i: number) => (
            <React.Fragment key={c.id}>
              {i > 0 && (
                <span className="font-semibold text-foreground">
                  {logic.operator}
                </span>
              )}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.(c.id);
                }}
                className={cn(
                  "font-semibold text-foreground cursor-pointer hover:text-primary hover:underline bg-card px-1.5 py-0.5 rounded border transition-colors",
                  focusedId === c.id
                    ? "border-primary ring-1 ring-primary"
                    : "border-transparent hover:border-border-ui",
                )}
              >
                {fmt(c)}
              </span>
            </React.Fragment>
          ))}

          {/* Logic Sets (nested/grouped conditions) */}
          {confirmedSets.map((s: any, i: number) => (
            <React.Fragment key={s.id}>
              {(confirmedConditions.length > 0 || i > 0) && (
                <span className="font-semibold text-foreground">
                  {logic.operator}
                </span>
              )}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.(s.id);
                }}
                className={cn(
                  "font-semibold text-foreground cursor-pointer hover:text-primary hover:underline bg-card px-1.5 py-0.5 rounded border transition-colors",
                  focusedId === s.id
                    ? "border-primary ring-1 ring-primary"
                    : "border-transparent hover:border-border-ui",
                )}
              >
                (
                {s.conditions.map((c: any, ci: number) => (
                  <React.Fragment key={c.id}>
                    {ci > 0 && (
                      <span className="font-bold text-foreground">
                        {" "}
                        {s.operator}{" "}
                      </span>
                    )}
                    {fmt(c)}
                  </React.Fragment>
                ))}
                )
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <IssueCard issues={issues} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. SkipLogicDisplayMock
// ---------------------------------------------------------------------------

function SkipLogicDisplayMock({
  logic,
  currentQuestion,
  survey,
  onClick,
  onRemove,
  issues = [],
  isFocused = false,
  readOnly = false,
}: any) {
  if (logic.type === "simple" && !logic.isConfirmed) return null;

  const confirmedRules =
    logic.type === "per_choice" ? logic.rules.filter((r: any) => r.isConfirmed) : [];
  if (logic.type === "per_choice" && confirmedRules.length === 0) return null;

  return (
    <div
      onClick={onClick}
      className={cn(
        "mt-4 p-3 border rounded-md bg-muted/40 cursor-pointer group/skiplogic transition-colors",
        isFocused ? "border-primary ring-1 ring-primary" : "border-border-ui",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-rounded text-lg text-primary leading-none select-none">
            double_arrow
          </span>
          <h4 className="text-sm font-semibold text-foreground">Skip Logic</h4>
        </div>
        {!readOnly && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className="w-6 h-6 flex items-center justify-center rounded-md text-destructive hover:bg-destructive/10 opacity-0 group-hover/skiplogic:opacity-100 transition-opacity"
            title="Remove Skip Logic"
          >
            <span className="material-symbols-rounded text-base leading-none select-none">
              close
            </span>
          </button>
        )}
      </div>

      {/* Body */}
      <div className="pl-2 space-y-1 text-sm text-muted-foreground">
        {logic.type === "simple" && logic.isConfirmed && (
          <p>
            If answered → skip to{" "}
            <span className="font-semibold text-foreground">
              {fmtDest(logic.skipTo, survey)}
            </span>
            .
          </p>
        )}
        {logic.type === "per_choice" &&
          currentQuestion?.choices?.map((choice: any) => {
            const rule = confirmedRules.find((r: any) => r.choiceId === choice.id);
            if (!rule) return null;
            return (
              <p key={choice.id}>
                If &ldquo;
                <span className="font-semibold text-foreground">
                  {choice.text.slice(0, 20)}
                </span>
                &rdquo; is selected → skip to{" "}
                <span className="font-semibold text-foreground">
                  {fmtDest(rule.skipTo, survey)}
                </span>
                .
              </p>
            );
          })}
      </div>

      <IssueCard issues={issues} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. IncomingLogicDisplayMock
// ---------------------------------------------------------------------------

function IncomingLogicDisplayMock({
  branchName,
  sourceQuestionId,
  targetBlockId,
  survey,
  onClick,
}: any) {
  const destination = fmtDest(`block:${targetBlockId}`, survey);

  return (
    <div
      onClick={(e) => {
        if (onClick) {
          e.stopPropagation();
          onClick();
        }
      }}
      className="p-3 border border-border-ui rounded-md bg-muted/40 cursor-pointer hover:border-primary mb-4 transition-colors"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-rounded text-lg text-primary leading-none select-none">
          call_split
        </span>
        <h4 className="text-sm font-medium text-foreground">{branchName}</h4>
      </div>
      <div className="pl-2 text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
        <span className="text-foreground">{sourceQuestionId}</span>
        <span className="material-symbols-rounded text-base text-muted-foreground leading-none select-none">
          arrow_right_alt
        </span>
        <span className="text-foreground">{destination}</span>
        <span>.</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. BranchingLogicDisplayMock
// ---------------------------------------------------------------------------

function BranchingLogicDisplayMock({
  logic,
  survey,
  onClick,
  question,
  issues = [],
  isFocused = false,
  focusedId,
}: any) {
  // Mirror: compute whether "Otherwise" row should show
  const usedChoiceTexts = new Set<string>();
  for (const branch of logic.branches ?? []) {
    if (branch.thenSkipToIsConfirmed) {
      for (const cond of branch.conditions) {
        if (
          cond.questionId === question?.qid &&
          cond.isConfirmed &&
          cond.value
        ) {
          usedChoiceTexts.add(cond.value);
        }
      }
    }
  }
  const showOtherwise =
    !question?.choices || question.choices.length === 0
      ? true
      : usedChoiceTexts.size < question.choices.length;

  const hasAnyConfirmed = (logic.branches ?? []).some(
    (b: any) =>
      b.thenSkipToIsConfirmed &&
      b.conditions.some((c: any) => c.isConfirmed === true),
  );

  if (!hasAnyConfirmed) return null;

  return (
    <div
      className={cn(
        "mt-4 p-3 border rounded-md group/branching transition-colors cursor-pointer",
        isFocused ? "border-primary ring-1 ring-primary" : "border-border-ui",
      )}
      onClick={() => onClick?.()}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-rounded text-lg text-primary leading-none select-none">
            call_split
          </span>
          <h4 className="text-sm font-medium text-foreground">
            Branching Logic
          </h4>
        </div>
      </div>

      {/* Branches */}
      <div className="space-y-2 text-sm">
        {logic.branches.map((branch: any) => {
          const confirmed = branch.conditions.filter(
            (c: any) => c.isConfirmed === true,
          );
          if (confirmed.length === 0 || !branch.thenSkipToIsConfirmed)
            return null;
          return (
            <div
              key={branch.id}
              onClick={(e) => {
                e.stopPropagation();
                onClick?.(branch.id);
              }}
              className={cn(
                "p-2 bg-card rounded-md cursor-pointer border transition-colors",
                focusedId === branch.id
                  ? "border-primary ring-1 ring-primary"
                  : "border-transparent hover:border-border-ui",
              )}
            >
              {branch.pathName && (
                <div className="font-medium text-foreground mb-1">
                  {branch.pathName}
                </div>
              )}
              <div className="text-foreground">
                <span>IF </span>
                {confirmed.length > 1 ? (
                  <div className="ml-4 flex flex-col gap-1 my-1">
                    {confirmed.map((c: any, ci: number) => (
                      <div key={c.id}>
                        {ci > 0 && (
                          <span className="font-semibold">
                            {branch.operator}{" "}
                          </span>
                        )}
                        <span className="hover:text-primary hover:underline cursor-pointer">
                          {fmt(c)}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span>
                    {confirmed.map((c: any, ci: number) => (
                      <React.Fragment key={c.id}>
                        {ci > 0 && <span> {branch.operator} </span>}
                        <span className="hover:text-primary hover:underline cursor-pointer">
                          {fmt(c)}
                        </span>
                      </React.Fragment>
                    ))}
                  </span>
                )}
                <span className={confirmed.length > 1 ? "mt-1 block" : ""}>
                  {" "}
                  THEN{" "}
                </span>
                <span>
                  skip to{" "}
                  <span className="font-semibold">
                    {fmtDest(branch.thenSkipTo, survey)}
                  </span>
                  .
                </span>
              </div>
            </div>
          );
        })}

        {/*
                  NOTE: In the real component, `showOtherwise && logic.otherwiseIsConfirmed`
                  renders null ("User requested to hide the 'Otherwise' card for now").
                  The mock below surfaces the otherwise design for documentation purposes.
                */}
        {showOtherwise &&
          logic.otherwiseIsConfirmed &&
          logic.otherwiseSkipTo && (
            <div className="p-2 bg-card rounded-md border border-dashed border-border-ui text-sm text-muted-foreground">
              <span className="text-foreground">Otherwise </span>
              skip to{" "}
              <span className="font-semibold text-foreground">
                {fmtDest(logic.otherwiseSkipTo, survey)}
              </span>
              .
              <span className="ml-2 text-xs text-muted-foreground/60 italic">
                (fallback)
              </span>
            </div>
          )}
      </div>

      <IssueCard issues={issues} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. SurveyFlowDisplayMock
// ---------------------------------------------------------------------------

function SurveyFlowDisplayMock({
  logic,
  survey,
  onClick,
  sourceQuestion,
  allBranchingLogics = [],
}: any) {
  const hasBranching = allBranchingLogics.length > 0;

  return (
    <div
      onClick={onClick}
      className="p-3 border border-border-ui rounded-md bg-muted/40 cursor-pointer hover:border-primary transition-colors"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-rounded text-lg text-primary leading-none select-none">
          arrow_right_alt
        </span>
        <h4 className="text-sm font-medium text-foreground">Default path</h4>
      </div>

      {/* Content */}
      <div className="space-y-2 text-sm">
        {hasBranching &&
          allBranchingLogics.map(({ question, logic: brLogic }: any) => (
            <React.Fragment key={question.id}>
              {brLogic.branches.map((branch: any) => {
                const confirmed = branch.conditions.filter(
                  (c: any) => c.isConfirmed === true,
                );
                if (confirmed.length === 0 || !branch.thenSkipToIsConfirmed)
                  return null;
                return (
                  <div key={branch.id} className="text-foreground">
                    <span>IF </span>
                    {confirmed.map((c: any, ci: number) => (
                      <React.Fragment key={c.id}>
                        {ci > 0 && <span> {branch.operator} </span>}
                        <span className="font-semibold">{fmt(c)}</span>
                      </React.Fragment>
                    ))}
                    <span className="material-symbols-rounded text-lg text-primary leading-none align-bottom mx-1.5 select-none inline-block">
                      call_split
                    </span>
                    <span>{fmtDest(branch.thenSkipTo, survey)}</span>.
                  </div>
                );
              })}
            </React.Fragment>
          ))}

        {/* Default/fallback arrow */}
        <div className="text-foreground">
          {hasBranching ? (
            <>
              <span>Otherwise </span>
              <span className="material-symbols-rounded text-lg text-primary leading-none align-bottom mx-1.5 select-none inline-block">
                arrow_right_alt
              </span>
              <span>{fmtDest(logic.skipTo, survey)}</span>.
            </>
          ) : (
            <>
              <span>{sourceQuestion?.qid ?? "Default path"} </span>
              <span className="material-symbols-rounded text-lg text-primary leading-none align-bottom mx-1.5 select-none inline-block">
                arrow_right_alt
              </span>
              <span>{fmtDest(logic.skipTo, survey)}</span>.
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mock survey — shared across all stories
// ---------------------------------------------------------------------------

const mockSurvey: MockSurvey = {
  blocks: [
    {
      id: "block-intro",
      bid: "BL1",
      title: "Introduction",
      questions: [
        {
          id: "q-satisfaction",
          qid: "Q1",
          text: "How satisfied are you with our service?",
          choices: [
            { id: "c-very-satisfied", text: "Very satisfied" },
            { id: "c-satisfied", text: "Satisfied" },
            { id: "c-neutral", text: "Neutral" },
            { id: "c-dissatisfied", text: "Dissatisfied" },
          ],
        },
        {
          id: "q-recommend",
          qid: "Q2",
          text: "Would you recommend us to a friend?",
          choices: [
            { id: "c-yes", text: "Yes" },
            { id: "c-no", text: "No" },
          ],
        },
        {
          id: "q-reason",
          qid: "Q3",
          text: "What is the main reason for your rating?",
        },
        {
          id: "q-followup",
          qid: "Q4",
          text: "Any additional comments for our team?",
        },
      ],
    },
    {
      id: "block-demographics",
      bid: "BL2",
      title: "Demographics",
      questions: [
        {
          id: "q-age",
          qid: "Q5",
          text: "What is your age group?",
          choices: [
            { id: "c-under25", text: "Under 25" },
            { id: "c-2544", text: "25–44" },
            { id: "c-45plus", text: "45+" },
          ],
        },
        {
          id: "q-country",
          qid: "Q6",
          text: "What country do you live in?",
        },
      ],
    },
    {
      id: "block-feedback",
      bid: "BL3",
      title: "Detailed Feedback",
      questions: [
        {
          id: "q-product",
          qid: "Q7",
          text: "Please rate our product quality.",
        },
      ],
    },
    {
      id: "block-end",
      bid: "BL4",
      title: "Thank You",
      questions: [],
    },
  ],
};

// Convenience: commonly used question references
const Q1 = mockSurvey.blocks[0].questions[0]; // Q1 satisfaction (has choices)
const Q2 = mockSurvey.blocks[0].questions[1]; // Q2 recommend (Yes/No)

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: "Survey Builder/Logic/LogicDisplays",
  component: DisplayLogicDisplayMock,
  parameters: {
    docs: {
      description: {
        component: `
**LogicDisplays** contains the 5 read-only display cards that summarise configured logic rules on question and block cards. They are not editors — they render a compact, clickable summary that opens the corresponding logic editor when clicked.

> **Note:** \`_reference/LogicDisplays.tsx\` imports from \`../types\` and \`../utils\`, which are not yet implemented. This stories file provides visual mock components with identical prop shapes, rendering logic, and shadcn/ui tokens.

### Components

| Component | Icon | Purpose |
|-----------|------|---------|
| **DisplayLogicDisplay** | \`visibility\` | Show/hide conditions for a question |
| **SkipLogicDisplay** | \`double_arrow\` | Skip-to rules (simple or per choice) |
| **IncomingLogicDisplay** | \`call_split\` | Incoming branch from another question |
| **BranchingLogicDisplay** | \`call_split\` | Outgoing branch conditions |
| **SurveyFlowDisplay** | \`arrow_right_alt\` | Default survey path with optional branching summary |
                `,
      },
    },
  },
  tags: ["autodocs"],
  args: {
    logic: { operator: "AND", conditions: [] },
    survey: mockSurvey,
    onClick: fn(),
    onRemove: fn(),
    issues: [],
    isFocused: false,
    readOnly: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ===========================================================================
// DisplayLogicDisplay stories
// ===========================================================================

/**
 * Default — one confirmed condition: Q1 = "Very satisfied" → show.
 * The card displays the Eye icon, "Display Logic" heading, and the condition chip.
 * The remove button (✕) is invisible until hover.
 */
export const DisplayLogic_Default: Story = {
  name: "DisplayLogic / Default",
  args: {
    logic: {
      operator: "AND",
      conditions: [
        {
          id: "cond-1",
          questionId: "Q1",
          operator: "equals",
          value: "Very satisfied",
          isConfirmed: true,
        },
      ],
    },
  },
};

/**
 * Multiple Rules — three confirmed conditions joined by OR.
 * The operator badge appears between each chip.
 */
export const DisplayLogic_MultipleRules: Story = {
  name: "DisplayLogic / Multiple Rules",
  args: {
    logic: {
      operator: "OR",
      conditions: [
        {
          id: "cond-a",
          questionId: "Q1",
          operator: "equals",
          value: "Very satisfied",
          isConfirmed: true,
        },
        {
          id: "cond-b",
          questionId: "Q2",
          operator: "equals",
          value: "Yes",
          isConfirmed: true,
        },
        {
          id: "cond-c",
          questionId: "Q5",
          operator: "equals",
          value: "25–44",
          isConfirmed: true,
        },
      ],
    },
  },
};

/**
 * All Operators — one condition per each operator in the operator map.
 * Demonstrates how `is_empty` / `is_not_empty` omit the value.
 */
export const DisplayLogic_AllOperators: Story = {
  name: "DisplayLogic / All Operators",
  args: {
    logic: {
      operator: "OR",
      conditions: [
        {
          id: "op-eq",
          questionId: "Q1",
          operator: "equals",
          value: "Very satisfied",
          isConfirmed: true,
        },
        {
          id: "op-neq",
          questionId: "Q1",
          operator: "not_equals",
          value: "Neutral",
          isConfirmed: true,
        },
        {
          id: "op-con",
          questionId: "Q3",
          operator: "contains",
          value: "support",
          isConfirmed: true,
        },
        {
          id: "op-gt",
          questionId: "Q3",
          operator: "greater_than",
          value: "5",
          isConfirmed: true,
        },
        {
          id: "op-lt",
          questionId: "Q3",
          operator: "less_than",
          value: "3",
          isConfirmed: true,
        },
        {
          id: "op-emp",
          questionId: "Q4",
          operator: "is_empty",
          isConfirmed: true,
        },
        {
          id: "op-nem",
          questionId: "Q4",
          operator: "is_not_empty",
          isConfirmed: true,
        },
      ],
    },
  },
};

/**
 * Nested — one flat condition + one logic set (grouped conditions).
 * Logic sets are rendered as a bracketed expression: `(Q2 = "Yes" AND Q5 = "25–44")`.
 */
export const DisplayLogic_Nested: Story = {
  name: "DisplayLogic / Nested (Logic Set)",
  args: {
    logic: {
      operator: "AND",
      conditions: [
        {
          id: "flat-1",
          questionId: "Q1",
          operator: "equals",
          value: "Very satisfied",
          isConfirmed: true,
        },
      ],
      logicSets: [
        {
          id: "set-1",
          operator: "AND",
          conditions: [
            {
              id: "nested-a",
              questionId: "Q2",
              operator: "equals",
              value: "Yes",
              isConfirmed: true,
            },
            {
              id: "nested-b",
              questionId: "Q5",
              operator: "equals",
              value: "25–44",
              isConfirmed: true,
            },
          ],
          isConfirmed: true,
        },
      ],
    },
  },
};

// ===========================================================================
// SkipLogicDisplay stories
// ===========================================================================

/**
 * Default — simple skip: "If answered → skip to Q5: What is your age group?"
 */
export const SkipLogic_Default: Story = {
  name: "SkipLogic / Default",
  args: {
    logic: { type: "simple", isConfirmed: true, skipTo: "q-age" },
    survey: mockSurvey,
    onClick: fn(),
    onRemove: fn(),
    issues: [],
  },
  render: (args) => (
    <SkipLogicDisplayMock
      logic={args.logic}
      currentQuestion={Q1}
      survey={args.survey}
      onClick={args.onClick}
      onRemove={args.onRemove}
      issues={args.issues}
    />
  ),
};

/**
 * Skip To End — simple skip to the end of the survey.
 */
export const SkipLogic_SkipToEnd: Story = {
  name: "SkipLogic / Skip To End",
  args: {
    logic: { type: "simple", isConfirmed: true, skipTo: "end" },
    survey: mockSurvey,
    onClick: fn(),
    onRemove: fn(),
    issues: [],
  },
  render: (args) => (
    <SkipLogicDisplayMock
      logic={args.logic}
      currentQuestion={Q2}
      survey={args.survey}
      onClick={args.onClick}
      onRemove={args.onRemove}
      issues={args.issues}
    />
  ),
};

/**
 * Multiple Rules — per-choice skip, 3 confirmed rules mapping each answer to a different destination.
 */
export const SkipLogic_MultipleRules: Story = {
  name: "SkipLogic / Multiple Rules (Per Choice)",
  args: {
    logic: {
      type: "per_choice",
      rules: [
        {
          choiceId: "c-very-satisfied",
          skipTo: "block:block-feedback",
          isConfirmed: true,
        },
        {
          choiceId: "c-satisfied",
          skipTo: "block:block-demographics",
          isConfirmed: true,
        },
        { choiceId: "c-neutral", skipTo: "end", isConfirmed: true },
        { choiceId: "c-dissatisfied", skipTo: "end", isConfirmed: true },
      ],
    },
    survey: mockSurvey,
    onClick: fn(),
    onRemove: fn(),
    issues: [],
  },
  render: (args) => (
    <SkipLogicDisplayMock
      logic={args.logic}
      currentQuestion={Q1}
      survey={args.survey}
      onClick={args.onClick}
      onRemove={args.onRemove}
      issues={args.issues}
    />
  ),
};

// ===========================================================================
// IncomingLogicDisplay stories
// ===========================================================================

/**
 * Default — single incoming branch from Q1 ("Positive Feedback Branch") targeting the Detailed Feedback block.
 */
export const IncomingLogic_Default: Story = {
  name: "IncomingLogic / Default",
  args: { survey: mockSurvey, onClick: fn() },
  render: (args) => (
    <IncomingLogicDisplayMock
      branchName="Positive Feedback Branch"
      sourceQuestionId="Q1"
      targetBlockId="block-feedback"
      survey={args.survey}
      onClick={args.onClick}
    />
  ),
};

/**
 * Multiple Sources — two incoming branches from different questions arriving at the same block.
 * Rendered as stacked cards, as they would appear in the canvas.
 */
export const IncomingLogic_MultipleSources: Story = {
  name: "IncomingLogic / Multiple Sources",
  args: { survey: mockSurvey, onClick: fn() },
  render: (args) => (
    <div className="space-y-0">
      <IncomingLogicDisplayMock
        branchName="Positive Response Branch"
        sourceQuestionId="Q1"
        targetBlockId="block-feedback"
        survey={args.survey}
        onClick={args.onClick}
      />
      <IncomingLogicDisplayMock
        branchName="Recommender Branch"
        sourceQuestionId="Q2"
        targetBlockId="block-feedback"
        survey={args.survey}
        onClick={args.onClick}
      />
    </div>
  ),
};

// ===========================================================================
// BranchingLogicDisplay stories
// ===========================================================================

const Q1_SATISFACTION_QUESTION: MockQuestion = Q1;

/**
 * Default — one simple branch: IF Q1 = "Very satisfied" THEN skip to Detailed Feedback block.
 */
export const BranchingLogic_Default: Story = {
  name: "BranchingLogic / Default",
  args: {
    logic: {
      branches: [
        {
          id: "branch-happy",
          pathName: "Happy Path",
          operator: "AND",
          conditions: [
            {
              id: "bc-1",
              questionId: "Q1",
              operator: "equals",
              value: "Very satisfied",
              isConfirmed: true,
            },
          ],
          thenSkipTo: "block:block-feedback",
          thenSkipToIsConfirmed: true,
        },
      ],
    },
    survey: mockSurvey,
    onClick: fn(),
    onRemove: fn(),
    issues: [],
    isFocused: false,
    focusedId: null,
    readOnly: false,
  },
  render: (args) => (
    <BranchingLogicDisplayMock
      logic={args.logic}
      question={Q1_SATISFACTION_QUESTION}
      survey={args.survey}
      onClick={args.onClick}
      onRemove={args.onRemove}
      issues={args.issues}
    />
  ),
};

/**
 * Multi Branch — three branches with different conditions and destinations.
 */
export const BranchingLogic_MultiBranch: Story = {
  name: "BranchingLogic / Multi Branch",
  args: {
    logic: {
      branches: [
        {
          id: "branch-promoter",
          pathName: "Promoter Path",
          operator: "AND",
          conditions: [
            {
              id: "bc-p1",
              questionId: "Q1",
              operator: "equals",
              value: "Very satisfied",
              isConfirmed: true,
            },
          ],
          thenSkipTo: "block:block-feedback",
          thenSkipToIsConfirmed: true,
        },
        {
          id: "branch-passive",
          pathName: "Passive Path",
          operator: "AND",
          conditions: [
            {
              id: "bc-p2",
              questionId: "Q1",
              operator: "equals",
              value: "Neutral",
              isConfirmed: true,
            },
          ],
          thenSkipTo: "block:block-demographics",
          thenSkipToIsConfirmed: true,
        },
        {
          id: "branch-detractor",
          pathName: "Detractor Path",
          operator: "AND",
          conditions: [
            {
              id: "bc-p3a",
              questionId: "Q1",
              operator: "equals",
              value: "Dissatisfied",
              isConfirmed: true,
            },
            {
              id: "bc-p3b",
              questionId: "Q2",
              operator: "equals",
              value: "No",
              isConfirmed: true,
            },
          ],
          thenSkipTo: "end",
          thenSkipToIsConfirmed: true,
        },
      ],
    },
    survey: mockSurvey,
    onClick: fn(),
    onRemove: fn(),
    issues: [],
    isFocused: false,
    focusedId: null,
    readOnly: false,
  },
  render: (args) => (
    <BranchingLogicDisplayMock
      logic={args.logic}
      question={Q1_SATISFACTION_QUESTION}
      survey={args.survey}
      onClick={args.onClick}
      onRemove={args.onRemove}
      issues={args.issues}
    />
  ),
};

/**
 * Default Branch — two branches that don't cover all choices, exposing the "Otherwise" fallback.
 *
 * > **Note:** In the current real component, the "otherwise" card is explicitly rendered as `null`
 * > ("User requested to hide the 'Otherwise' card for now"). The mock surfaces it as a dashed
 * > card for documentation purposes, so the design can be agreed before re-enabling.
 */
export const BranchingLogic_DefaultBranch: Story = {
  name: "BranchingLogic / Default Branch (Otherwise)",
  args: {
    logic: {
      branches: [
        {
          id: "branch-vsat",
          pathName: "Very Satisfied",
          operator: "AND",
          conditions: [
            {
              id: "bc-vs",
              questionId: "Q1",
              operator: "equals",
              value: "Very satisfied",
              isConfirmed: true,
            },
          ],
          thenSkipTo: "block:block-feedback",
          thenSkipToIsConfirmed: true,
        },
      ],
      // Only 1 of 4 choices covered → showOtherwise = true
      otherwiseIsConfirmed: true,
      otherwiseSkipTo: "block:block-demographics",
    },
    survey: mockSurvey,
    onClick: fn(),
    onRemove: fn(),
    issues: [],
    isFocused: false,
    focusedId: null,
    readOnly: false,
  },
  render: (args) => (
    <BranchingLogicDisplayMock
      logic={args.logic}
      question={Q1_SATISFACTION_QUESTION}
      survey={args.survey}
      onClick={args.onClick}
      onRemove={args.onRemove}
      issues={args.issues}
    />
  ),
};

// ===========================================================================
// SurveyFlowDisplay stories
// ===========================================================================

/**
 * Default — simple linear flow: Q1 → Demographics block. No branching.
 */
export const SurveyFlow_Default: Story = {
  name: "SurveyFlow / Default",
  args: {
    logic: {
      type: "simple",
      isConfirmed: true,
      skipTo: "block:block-demographics",
    },
    survey: mockSurvey,
    onClick: fn(),
  },
  render: (args) => (
    <SurveyFlowDisplayMock
      logic={args.logic}
      survey={args.survey}
      sourceQuestion={Q1}
      onClick={args.onClick}
    />
  ),
};

/**
 * Complex Flow — Q1 has 3 branching conditions routing to different blocks,
 * with a default "Otherwise → End of Survey" fallback path.
 */
export const SurveyFlow_ComplexFlow: Story = {
  name: "SurveyFlow / Complex Flow",
  args: {
    logic: { type: "simple", isConfirmed: true, skipTo: "end" },
    survey: mockSurvey,
    onClick: fn(),
  },
  render: (args) => (
    <SurveyFlowDisplayMock
      logic={args.logic}
      survey={args.survey}
      sourceQuestion={Q1}
      allBranchingLogics={[
        {
          question: Q1,
          logic: {
            branches: [
              {
                id: "sf-b1",
                operator: "AND",
                conditions: [
                  {
                    id: "sf-c1",
                    questionId: "Q1",
                    operator: "equals",
                    value: "Very satisfied",
                    isConfirmed: true,
                  },
                ],
                thenSkipTo: "block:block-feedback",
                thenSkipToIsConfirmed: true,
              },
              {
                id: "sf-b2",
                operator: "AND",
                conditions: [
                  {
                    id: "sf-c2",
                    questionId: "Q1",
                    operator: "equals",
                    value: "Neutral",
                    isConfirmed: true,
                  },
                ],
                thenSkipTo: "block:block-demographics",
                thenSkipToIsConfirmed: true,
              },
              {
                id: "sf-b3",
                operator: "AND",
                conditions: [
                  {
                    id: "sf-c3",
                    questionId: "Q2",
                    operator: "equals",
                    value: "No",
                    isConfirmed: true,
                  },
                ],
                thenSkipTo: "block:block-end",
                thenSkipToIsConfirmed: true,
              },
            ],
          },
        },
      ]}
      onClick={args.onClick}
    />
  ),
};

// ===========================================================================
// Overview — all 5 components together
// ===========================================================================

/**
 * Overview — all 5 LogicDisplay components rendered in sequence as they would
 * appear stacked within a question card panel.
 */
export const Overview: Story = {
  name: "Overview — All 5 Components",
  args: {
    survey: mockSurvey,
    onClick: fn(),
    onRemove: fn(),
    issues: [],
    logic: { operator: "AND", conditions: [] },
  },
  render: (args) => (
    <div className="w-[480px] space-y-8">
      {/* DisplayLogicDisplay */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          DisplayLogicDisplay
        </p>
        <DisplayLogicDisplayMock
          logic={{
            operator: "AND",
            conditions: [
              {
                id: "ov-c1",
                questionId: "Q2",
                operator: "equals",
                value: "Yes",
                isConfirmed: true,
              },
            ],
          }}
          survey={args.survey}
          onClick={args.onClick}
          onRemove={args.onRemove}
        />
      </div>
      {/* SkipLogicDisplay */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          SkipLogicDisplay
        </p>
        <SkipLogicDisplayMock
          logic={{
            type: "simple",
            isConfirmed: true,
            skipTo: "block:block-demographics",
          }}
          currentQuestion={Q1}
          survey={args.survey}
          onClick={args.onClick}
          onRemove={args.onRemove}
        />
      </div>
      {/* IncomingLogicDisplay */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          IncomingLogicDisplay
        </p>
        <IncomingLogicDisplayMock
          branchName="High Satisfaction Branch"
          sourceQuestionId="Q1"
          targetBlockId="block-feedback"
          survey={args.survey}
          onClick={args.onClick}
        />
      </div>
      {/* BranchingLogicDisplay */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          BranchingLogicDisplay
        </p>
        <BranchingLogicDisplayMock
          logic={{
            branches: [
              {
                id: "ov-branch",
                pathName: "Promoter Path",
                operator: "AND",
                conditions: [
                  {
                    id: "ov-bc",
                    questionId: "Q1",
                    operator: "equals",
                    value: "Very satisfied",
                    isConfirmed: true,
                  },
                ],
                thenSkipTo: "block:block-feedback",
                thenSkipToIsConfirmed: true,
              },
            ],
          }}
          question={Q1}
          survey={args.survey}
          onClick={args.onClick}
          onRemove={args.onRemove}
        />
      </div>
      {/* SurveyFlowDisplay */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          SurveyFlowDisplay
        </p>
        <SurveyFlowDisplayMock
          logic={{
            type: "simple",
            isConfirmed: true,
            skipTo: "block:block-demographics",
          }}
          survey={args.survey}
          sourceQuestion={Q1}
          onClick={args.onClick}
        />
      </div>
    </div>
  ),
};
