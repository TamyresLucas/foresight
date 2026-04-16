import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Shared primitives (same as QuestionCard.stories)
// ---------------------------------------------------------------------------

const DragHandle = () => (
  <div className="flex items-center justify-center w-5 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground">
    <span className="material-symbols-rounded text-base select-none">
      drag_indicator
    </span>
  </div>
);

const QuestionId = ({ id }: { id: string }) => (
  <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wide">
    {id}
  </span>
);

const TypeBadge = ({ label }: { label: string }) => (
  <Badge variant="outline">{label}</Badge>
);

const ActionsMenu = () => (
  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted text-muted-foreground">
    <span className="material-symbols-rounded text-base leading-none">
      more_horiz
    </span>
  </button>
);

interface QuestionCardShellProps {
  children: React.ReactNode;
  isSelected?: boolean;
  hasError?: boolean;
}

const QuestionCardShell = ({
  children,
  isSelected,
  hasError,
}: QuestionCardShellProps) => (
  <div
    className={cn(
      "p-4 rounded-lg border transition-all group relative grid items-start gap-x-4 bg-card grid-cols-[auto_1fr]",
      isSelected && hasError && "border-destructive shadow-md",
      isSelected && !hasError && "border-primary shadow-md",
      !isSelected && "border-border-ui hover:shadow-md",
    )}
  >
    {children}
  </div>
);

const ChoiceRow = ({
  label,
  type = "radio",
}: {
  label: string;
  type?: "radio" | "checkbox";
}) => (
  <div className="flex items-center gap-2 py-1">
    <div
      className={cn(
        "w-4 h-4 border border-foreground flex-shrink-0",
        type === "radio" ? "rounded-full" : "rounded-sm",
      )}
    />
    <span className="text-sm text-foreground">{label}</span>
  </div>
);

// ---------------------------------------------------------------------------
// Between-question logic alerts (outside question cards, before the target)
// ---------------------------------------------------------------------------

/** Default/info state — branching rule is valid, or default survey flow */
const FlowLogicAlert = ({ message }: { message: string }) => (
  <Alert className="py-2">
    <span className="material-symbols-rounded text-sm leading-none">
      account_tree
    </span>
    <AlertDescription className="text-xs">{message}</AlertDescription>
  </Alert>
);

/** Error state — branching rule references a deleted or invalid target */
const FlowLogicErrorAlert = ({ message }: { message: string }) => (
  <Alert variant="destructive" className="py-2">
    <span className="material-symbols-rounded text-sm leading-none">error</span>
    <AlertTitle className="text-xs font-semibold">Logic Error</AlertTitle>
    <AlertDescription className="text-xs">{message}</AlertDescription>
  </Alert>
);

// ---------------------------------------------------------------------------
// Inside-question logic alerts (used when question card itself has logic)
// ---------------------------------------------------------------------------

/** Default/info state — question has a valid logic rule configured */
const LogicAlert = ({ message }: { message: string }) => (
  <Alert className="mt-3 py-2.5">
    <span className="material-symbols-rounded text-base">account_tree</span>
    <AlertDescription className="text-xs">{message}</AlertDescription>
  </Alert>
);

/** Error state — question's logic rule is broken */
const LogicErrorAlert = ({ message }: { message: string }) => (
  <Alert variant="destructive" className="mt-3 py-2.5">
    <span className="material-symbols-rounded text-base">error</span>
    <AlertTitle className="text-xs font-semibold">Logic Error</AlertTitle>
    <AlertDescription className="text-xs">{message}</AlertDescription>
  </Alert>
);

// ---------------------------------------------------------------------------
// BlockCard shell
// ---------------------------------------------------------------------------

interface BlockCardProps {
  children?: React.ReactNode;
  title?: string;
  blockId?: string;
  questionCount?: number;
  isSelected?: boolean;
  isHovered?: boolean;
  isCollapsed?: boolean;
  isDragging?: boolean;
}

const BlockCard = ({
  children,
  title = "Block 1",
  blockId = "B1",
  questionCount,
  isSelected,
  isHovered,
  isCollapsed,
  isDragging,
}: BlockCardProps) => {
  const count = questionCount ?? React.Children.count(children);
  return (
    <div
      className={cn(
        "bg-card border rounded-lg transition-all",
        isDragging && "opacity-50",
        isSelected && "border-2 border-primary shadow-md",
        !isSelected && isHovered && "border-border-ui shadow-sm",
        !isSelected && !isHovered && "border-border-ui",
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex items-center justify-between px-4 py-3",
          !isCollapsed && "border-b border-border-ui",
        )}
      >
        <div className="flex items-center gap-2 cursor-grab">
          <span className="material-symbols-rounded text-base text-muted-foreground opacity-0 group-hover:opacity-100 select-none">
            drag_indicator
          </span>
          <button className="p-0.5 rounded hover:bg-muted text-muted-foreground">
            <span
              className={cn(
                "material-symbols-rounded text-base transition-transform",
                isCollapsed && "-rotate-90",
              )}
            >
              expand_more
            </span>
          </button>
          <span className="font-semibold text-sm text-foreground">
            {blockId}
          </span>
          <span className="font-semibold text-sm text-foreground">{title}</span>
          <span className="text-xs text-muted-foreground font-normal">
            ({count} question{count !== 1 ? "s" : ""})
          </span>
        </div>
        <button className="opacity-0 hover:opacity-100 p-1 rounded hover:bg-muted text-muted-foreground">
          <span className="material-symbols-rounded text-base leading-none">
            more_horiz
          </span>
        </button>
      </div>
      {/* Body */}
      {!isCollapsed && <div className="p-4 space-y-3">{children}</div>}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
  title: "Survey Builder/Survey Canvas/BlockCard",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
**BlockCard** is the top-level container in the Survey Canvas. Each survey is made up of one or more blocks, each holding an ordered list of question cards.

### Anatomy

- **Header**: drag handle, collapse toggle, block ID (e.g. \`B1\`), block title, question count, actions menu
- **Body**: ordered list of QuestionCard items, separated by PageBreaks when multi-page
- **Logic alerts**: rendered inside the body at the edges (before or after all questions), never between questions

### States

| State | Border | Shadow |
|-------|--------|--------|
| Default | \`border-border-ui\` | none |
| Hovered | \`border-border-ui\` | sm |
| Selected | \`border-2 border-primary\` | md |
| Dragging | normal border + \`opacity-50\` | — |
| Collapsed | header only, body hidden | — |
| Empty | body shows a dashed drop zone | — |

### Branching logic alerts (block-level)

Logic alerts appear at the **edges** of the block body — never between questions.

| Position | Alert type | When |
|----------|------------|------|
| **First child** (before questions) | Incoming | This block is the destination of a branch from a previous block |
| **Last child** (after questions) | Outgoing | This block routes respondents to another block based on answers |

Both positions support two states:

| State | Component | When |
|-------|-----------|------|
| Default | \`FlowLogicAlert\` (neutral) | Rule is valid — shows the branch condition |
| Error | \`FlowLogicErrorAlert\` (destructive) | Rule is broken — branch target or source was deleted |

### Question-level logic

Individual QuestionCards inside a block may also carry their own logic alerts (skip logic, display logic). These appear inside the card, not at the block edges.
`,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-2xl space-y-4 py-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Default — one block with three question cards
// ---------------------------------------------------------------------------

export const Default: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Default",
  render: () => (
    <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={3}>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q1" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            How satisfied are you with our service?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Very satisfied" />
            <ChoiceRow label="Satisfied" />
            <ChoiceRow label="Neutral" />
            <ChoiceRow label="Dissatisfied" />
          </div>
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q2" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Please describe your experience in detail.
          </p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q3" />
              <TypeBadge label="Checkbox" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Which of the following apply to you?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="I use this product daily" type="checkbox" />
            <ChoiceRow
              label="I have recommended it to others"
              type="checkbox"
            />
            <ChoiceRow
              label="I would pay more for premium features"
              type="checkbox"
            />
          </div>
        </div>
      </QuestionCardShell>
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Selected
// ---------------------------------------------------------------------------

export const Selected: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Selected",
  render: () => (
    <BlockCard
      title="Customer Satisfaction"
      blockId="B1"
      questionCount={2}
      isSelected
    >
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q1" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            How satisfied are you with our service?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Very satisfied" />
            <ChoiceRow label="Satisfied" />
            <ChoiceRow label="Neutral" />
            <ChoiceRow label="Dissatisfied" />
          </div>
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q2" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Please describe your experience in detail.
          </p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Hovered
// ---------------------------------------------------------------------------

export const Hovered: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Hovered",
  render: () => (
    <BlockCard
      title="Customer Satisfaction"
      blockId="B1"
      questionCount={2}
      isHovered
    >
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q1" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            How satisfied are you with our service?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Very satisfied" />
            <ChoiceRow label="Satisfied" />
          </div>
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q2" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Please describe your experience in detail.
          </p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Collapsed
// ---------------------------------------------------------------------------

export const Collapsed: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Collapsed",
  render: () => (
    <BlockCard title="Demographics" blockId="B2" questionCount={4} isCollapsed>
      {/* Children hidden when collapsed */}
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Outgoing branching logic — "para" (this block sends to another block)
// Alert appears AFTER all questions.
// ---------------------------------------------------------------------------

export const OutgoingBranchingLogic: Story = {
  name: "Outgoing Branching Logic — Default",
  render: () => (
    <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2}>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q1" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            How satisfied are you with our service?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Very satisfied" />
            <ChoiceRow label="Satisfied" />
            <ChoiceRow label="Neutral" />
            <ChoiceRow label="Dissatisfied" />
          </div>
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q2" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Any additional comments?
          </p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
      {/* Alert AFTER all questions — this block branches to another */}
      <FlowLogicAlert message="If Q1 = 'Dissatisfied' → jump to B3 (Follow-up Questions)" />
    </BlockCard>
  ),
};

export const OutgoingBranchingLogicError: Story = {
  name: "Outgoing Branching Logic — Error",
  render: () => (
    <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2}>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q1" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            How satisfied are you with our service?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Very satisfied" />
            <ChoiceRow label="Satisfied" />
            <ChoiceRow label="Neutral" />
            <ChoiceRow label="Dissatisfied" />
          </div>
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q2" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Any additional comments?
          </p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
      {/* Error alert AFTER all questions — outgoing branch target was deleted */}
      <FlowLogicErrorAlert message="Branch target 'B3 – Follow-up' was deleted. Update or remove this rule." />
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Incoming branching logic — "de" (this block is the destination of a branch)
// Alert appears BEFORE all questions.
// ---------------------------------------------------------------------------

export const IncomingBranchingLogic: Story = {
  name: "Incoming Branching Logic — Default",
  render: () => (
    <BlockCard title="Follow-up Questions" blockId="B3" questionCount={2}>
      {/* Alert BEFORE all questions — respondents arrive here via branching from B1 */}
      <FlowLogicAlert message="Reached from B1 — shown only when Q1 = 'Dissatisfied'" />
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q5" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            What could we have done better?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Faster response time" />
            <ChoiceRow label="Better communication" />
            <ChoiceRow label="Lower prices" />
          </div>
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q6" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Please describe what went wrong.
          </p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
    </BlockCard>
  ),
};

export const IncomingBranchingLogicError: Story = {
  name: "Incoming Branching Logic — Error",
  render: () => (
    <BlockCard title="Follow-up Questions" blockId="B3" questionCount={2}>
      {/* Error alert BEFORE all questions — the originating rule is broken */}
      <FlowLogicErrorAlert message="Source rule in B1 references a deleted choice. This block may never be reached." />
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q5" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            What could we have done better?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Faster response time" />
            <ChoiceRow label="Better communication" />
            <ChoiceRow label="Lower prices" />
          </div>
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q6" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Please describe what went wrong.
          </p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Question card with logic alert (inside) — default state
// ---------------------------------------------------------------------------

export const QuestionWithLogic: Story = {
  name: "Question With Logic — Default",
  render: () => (
    <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2}>
      <QuestionCardShell isSelected>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q1" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            How satisfied are you with our service?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Very satisfied" />
            <ChoiceRow label="Satisfied" />
            <ChoiceRow label="Neutral" />
            <ChoiceRow label="Dissatisfied" />
          </div>
          <LogicAlert message="Skip to Q3 if respondent selects 'Dissatisfied'" />
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q2" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">What did we do well?</p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Question card with logic alert (inside) — error state
// ---------------------------------------------------------------------------

export const QuestionWithLogicError: Story = {
  name: "Question With Logic — Error",
  render: () => (
    <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2}>
      <QuestionCardShell isSelected hasError>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q1" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            How satisfied are you with our service?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Very satisfied" />
            <ChoiceRow label="Satisfied" />
            <ChoiceRow label="Neutral" />
            <ChoiceRow label="Dissatisfied" />
          </div>
          <LogicErrorAlert message="Skip logic references Q4 which no longer exists. Update or remove this rule." />
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q2" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Please describe your experience in detail.
          </p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Dragging state
// ---------------------------------------------------------------------------

export const Dragging: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Dragging",
  render: () => (
    <BlockCard
      title="Customer Satisfaction"
      blockId="B1"
      questionCount={2}
      isDragging
    >
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q1" />
              <TypeBadge label="Multiple Choice" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            How satisfied are you with our service?
          </p>
          <div className="mt-3 space-y-0.5">
            <ChoiceRow label="Very satisfied" />
            <ChoiceRow label="Satisfied" />
          </div>
        </div>
      </QuestionCardShell>
      <QuestionCardShell>
        <DragHandle />
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <QuestionId id="Q2" />
              <TypeBadge label="Text Entry" />
            </div>
            <ActionsMenu />
          </div>
          <p className="text-sm text-foreground mt-1">
            Please describe your experience in detail.
          </p>
          <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
            Respondent types a free-text answer here...
          </div>
        </div>
      </QuestionCardShell>
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Empty block (drop zone)
// ---------------------------------------------------------------------------

export const Empty: Story = {
  name: "Empty (Drop Zone)",
  render: () => (
    <BlockCard title="New Block" blockId="B4" questionCount={0}>
      <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-border-ui rounded-lg text-muted-foreground gap-2">
        <span className="material-symbols-rounded text-2xl">add_circle</span>
        <span className="text-sm">Drag a question here or click to add</span>
      </div>
    </BlockCard>
  ),
};

// ---------------------------------------------------------------------------
// Multi-block canvas (overview) — includes a branching logic example
// ---------------------------------------------------------------------------

export const MultipleBlocks: Story = {
  name: "Multiple Blocks (Canvas Overview)",
  render: () => (
    <div className="space-y-4">
      <BlockCard title="Introduction" blockId="B1" questionCount={1}>
        <QuestionCardShell>
          <DragHandle />
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <QuestionId id="Q1" />
                <TypeBadge label="Description" />
              </div>
              <ActionsMenu />
            </div>
            <div className="mt-1 text-sm text-foreground leading-relaxed">
              Welcome! This survey will take approximately 3 minutes to
              complete.
            </div>
          </div>
        </QuestionCardShell>
      </BlockCard>

      <BlockCard
        title="Customer Satisfaction"
        blockId="B2"
        questionCount={3}
        isSelected
      >
        <QuestionCardShell isSelected>
          <DragHandle />
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <QuestionId id="Q2" />
                <TypeBadge label="Multiple Choice" />
              </div>
              <ActionsMenu />
            </div>
            <p className="text-sm text-foreground mt-1">
              How satisfied are you with our service?
            </p>
            <div className="mt-3 space-y-0.5">
              <ChoiceRow label="Very satisfied" />
              <ChoiceRow label="Satisfied" />
              <ChoiceRow label="Neutral" />
              <ChoiceRow label="Dissatisfied" />
            </div>
            <LogicAlert message="Skip to Q4 if respondent selects 'Very satisfied' or 'Satisfied'" />
          </div>
        </QuestionCardShell>
        <QuestionCardShell>
          <DragHandle />
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <QuestionId id="Q3" />
                <TypeBadge label="Text Entry" />
              </div>
              <ActionsMenu />
            </div>
            <p className="text-sm text-foreground mt-1">
              What could we have done better?
            </p>
            <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
              Respondent types a free-text answer here...
            </div>
          </div>
        </QuestionCardShell>
        <QuestionCardShell>
          <DragHandle />
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <QuestionId id="Q4" />
                <TypeBadge label="Text Entry" />
              </div>
              <ActionsMenu />
            </div>
            <p className="text-sm text-foreground mt-1">
              Any additional feedback?
            </p>
            <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
              Respondent types a free-text answer here...
            </div>
          </div>
        </QuestionCardShell>
        {/* Outgoing branch — AFTER all questions */}
        <FlowLogicAlert message="If Q2 = 'Dissatisfied' → jump to B3 (Follow-up Questions)" />
      </BlockCard>

      <BlockCard
        title="Demographics"
        blockId="B3"
        questionCount={3}
        isCollapsed
      >
        {/* Collapsed — body not rendered */}
      </BlockCard>
    </div>
  ),
};
