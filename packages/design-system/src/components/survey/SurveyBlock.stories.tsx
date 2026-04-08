import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { cn } from '../../lib/utils';

// ---------------------------------------------------------------------------
// Shared primitives (same visual language as QuestionCard / BlockCard stories)
// ---------------------------------------------------------------------------

const DragHandle = () => (
    <div className="flex items-center justify-center w-5 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground">
        <span className="material-symbols-rounded text-base select-none">drag_indicator</span>
    </div>
);

const QuestionId = ({ id }: { id: string }) => (
    <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wide">{id}</span>
);

const TypeBadge = ({ label }: { label: string }) => (
    <Badge variant="outline">{label}</Badge>
);

const ActionsMenu = () => (
    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted text-muted-foreground">
        <span className="material-symbols-rounded text-base leading-none">more_horiz</span>
    </button>
);

interface QuestionCardShellProps {
    children: React.ReactNode;
    isSelected?: boolean;
    hasError?: boolean;
    isDashed?: boolean;
}

const QuestionCardShell = ({ children, isSelected, hasError, isDashed }: QuestionCardShellProps) => (
    <div
        className={cn(
            'p-4 rounded-lg border transition-all group relative grid items-start gap-x-4 bg-card grid-cols-[auto_1fr]',
            isSelected && hasError && 'border-destructive shadow-md',
            isSelected && !hasError && 'border-primary shadow-md',
            !isSelected && isDashed && 'border-dashed border-primary/50',
            !isSelected && !isDashed && 'border-border-ui hover:shadow-md',
        )}
    >
        {children}
    </div>
);

const ChoiceRow = ({ label, type = 'radio' }: { label: string; type?: 'radio' | 'checkbox' }) => (
    <div className="flex items-center gap-2 py-1">
        <div className={cn('w-4 h-4 border border-foreground flex-shrink-0', type === 'radio' ? 'rounded-full' : 'rounded-sm')} />
        <span className="text-sm text-foreground">{label}</span>
    </div>
);

// ---------------------------------------------------------------------------
// Logic alert primitives
// ---------------------------------------------------------------------------

/** Inline question-level logic alert (inside the question card) */
const LogicAlert = ({ message }: { message: string }) => (
    <Alert className="mt-3 py-2.5">
        <span className="material-symbols-rounded text-base">account_tree</span>
        <AlertDescription className="text-xs">{message}</AlertDescription>
    </Alert>
);

/** Inline question-level logic error (inside the question card) */
const LogicErrorAlert = ({ message }: { message: string }) => (
    <Alert variant="destructive" className="mt-3 py-2.5">
        <span className="material-symbols-rounded text-base">error</span>
        <AlertTitle className="text-xs font-semibold">Logic Error</AlertTitle>
        <AlertDescription className="text-xs">{message}</AlertDescription>
    </Alert>
);

/** Incoming branching alert — shown BEFORE questions when another block routes into this one */
const IncomingFlowAlert = ({ branchName, sourceQid }: { branchName: string; sourceQid: string }) => (
    <Alert className="py-2">
        <span className="material-symbols-rounded text-sm leading-none">arrow_downward</span>
        <AlertDescription className="text-xs">
            Respondents arrive here via <strong>{branchName}</strong> branching from{' '}
            <span className="font-mono font-semibold">{sourceQid}</span>
        </AlertDescription>
    </Alert>
);

/** Incoming branching error — the originating branch rule is broken */
const IncomingFlowErrorAlert = ({ branchName, sourceQid }: { branchName: string; sourceQid: string }) => (
    <Alert variant="destructive" className="py-2">
        <span className="material-symbols-rounded text-sm leading-none">error</span>
        <AlertTitle className="text-xs font-semibold">Logic Error</AlertTitle>
        <AlertDescription className="text-xs">
            Branch <strong>{branchName}</strong> from <span className="font-mono font-semibold">{sourceQid}</span> references a
            deleted choice. This block may never be reached.
        </AlertDescription>
    </Alert>
);

/** Outgoing survey flow alert — shown AFTER questions when this block routes elsewhere */
const OutgoingFlowAlert = ({ destination }: { destination: string }) => (
    <Alert className="py-2">
        <span className="material-symbols-rounded text-sm leading-none">account_tree</span>
        <AlertDescription className="text-xs">
            Survey flow continues to <strong>{destination}</strong>
        </AlertDescription>
    </Alert>
);

/** Outgoing survey flow error — the branch target no longer exists */
const OutgoingFlowErrorAlert = ({ destination }: { destination: string }) => (
    <Alert variant="destructive" className="py-2">
        <span className="material-symbols-rounded text-sm leading-none">error</span>
        <AlertTitle className="text-xs font-semibold">Logic Error</AlertTitle>
        <AlertDescription className="text-xs">
            Branch target <strong>{destination}</strong> was deleted. Update or remove this rule.
        </AlertDescription>
    </Alert>
);

// ---------------------------------------------------------------------------
// SurveyBlock shell
// ---------------------------------------------------------------------------

interface SurveyBlockShellProps {
    children: React.ReactNode;
    title?: string;
    blockId?: string;
    questionCount?: number;
    isSelected?: boolean;
    isHovered?: boolean;
    isCollapsed?: boolean;
    isDragging?: boolean;
    /** Block itself has display logic conditions — renders a dashed border */
    hasDisplayLogic?: boolean;
    /** Block is a survey section — renders a bold section title inside the body */
    isSurveySection?: boolean;
    sectionName?: string;
    /** Print mode — lighter background, no drag handles, no action buttons */
    printMode?: boolean;
}

const SurveyBlock = ({
    children,
    title = 'Block 1',
    blockId = 'B1',
    questionCount,
    isSelected,
    isHovered,
    isCollapsed,
    isDragging,
    hasDisplayLogic,
    isSurveySection,
    sectionName,
    printMode,
}: SurveyBlockShellProps) => {
    const count = questionCount ?? React.Children.count(children);
    return (
        <div
            className={cn(
                'border rounded-lg transition-all',
                printMode ? 'bg-background' : 'bg-card',
                isDragging && 'opacity-50',
                isSelected && 'border-2 border-primary shadow-md',
                !isSelected && isHovered && 'border-primary/50 shadow-sm',
                !isSelected && !isHovered && 'border-border-ui',
                hasDisplayLogic && 'border-dashed',
            )}
        >
            {/* Header */}
            <div
                className={cn(
                    'flex items-center justify-between px-4 py-3',
                    !isCollapsed && 'border-b border-border-ui',
                )}
            >
                <div className="flex items-center gap-2 cursor-grab min-w-0">
                    {!printMode && (
                        <button className="p-0.5 rounded hover:bg-muted text-muted-foreground flex-shrink-0">
                            <span
                                className={cn(
                                    'material-symbols-rounded text-base transition-transform',
                                    isCollapsed && '-rotate-90',
                                )}
                            >
                                expand_more
                            </span>
                        </button>
                    )}
                    <span className="font-semibold text-sm text-foreground flex-shrink-0">{blockId}</span>
                    <span className="font-semibold text-sm text-foreground truncate">{title}</span>
                    <span className="text-xs text-muted-foreground font-normal flex-shrink-0">
                        ({count} question{count !== 1 ? 's' : ''})
                    </span>
                    {hasDisplayLogic && (
                        <Badge variant="secondary" className="flex-shrink-0">Display Logic</Badge>
                    )}
                </div>
                {!printMode && (
                    <button className="opacity-0 hover:opacity-100 p-1 rounded hover:bg-muted text-muted-foreground flex-shrink-0">
                        <span className="material-symbols-rounded text-base leading-none">more_horiz</span>
                    </button>
                )}
            </div>

            {/* Body */}
            {!isCollapsed && (
                <div className="p-4 space-y-3">
                    {isSurveySection && (
                        <div className="pb-4 border-b-2 border-primary">
                            <h3 className="text-xl font-semibold text-foreground">
                                {sectionName || title}
                            </h3>
                        </div>
                    )}
                    {children}
                </div>
            )}
        </div>
    );
};

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
    title: 'Survey Builder/Survey Canvas/SurveyBlock',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
**SurveyBlock** is the top-level container for a group of questions in the Survey Canvas. It is a fully controlled component — it owns no state and receives all data and handlers as props.

### Anatomy

- **Header**: collapse toggle, block ID (e.g. \`B1\`), editable block title, question count, actions menu (⋯)
- **Body**: ordered list of QuestionCard items; logic alerts at the edges; an optional section banner when \`isSurveySection\` is true
- **Logic alerts** appear at the edges of the body — **never** between questions

### States

| State | Border | Shadow | Notes |
|-------|--------|--------|-------|
| Default | \`border-border-ui\` (solid) | none | — |
| Hovered | \`border-primary/50\` (solid) | sm | Controlled by \`hoveredBlockId\` prop |
| Selected | \`border-2 border-primary\` (solid) | md | Controlled by \`selectedBlock\` prop |
| Dragging | default border | — | \`opacity-50\` via \`isBlockDragging\` prop |
| Display Logic | \`border-border-ui\` (**dashed**) | none | Block itself has \`displayLogic\` conditions |
| Collapsed | header only, body hidden | — | Via \`isCollapsed\` prop |
| Empty | body shows a dashed drop zone | — | When \`block.questions\` is empty |
| Print Mode | lighter bg, no drag / action UI | — | Via \`printMode\` prop |

### Branching logic alerts (block-level)

Logic alerts appear at the **edges** of the body.

| Position | Type | When |
|----------|------|------|
| **First** (before questions) | Incoming | This block is the destination of a branch from another block |
| **Last** (after questions) | Outgoing (SurveyFlowDisplay) | This block routes to another block, end of survey, or a custom \`continueTo\` target |

Both support a **default** (valid rule) and an **error** (broken rule) variant.

### Survey Section mode

When \`block.isSurveySection\` is true, a bold section title is rendered at the top of the body, separated from the questions by a \`border-primary\` divider. This is used to group related blocks under a named section.
                `,
            },
        },
    },
    tags: ['autodocs'],
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
// Default — three mixed questions, no selection, no logic
// ---------------------------------------------------------------------------

export const Default: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Default',
    render: () => (
        <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={3}>
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
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
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
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
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
                    <p className="text-sm text-foreground mt-1">Which of the following apply to you?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="I use this product daily" type="checkbox" />
                        <ChoiceRow label="I have recommended it to others" type="checkbox" />
                        <ChoiceRow label="I would pay more for premium features" type="checkbox" />
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Selected — double primary border
// ---------------------------------------------------------------------------

export const Selected: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Selected',
    render: () => (
        <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2} isSelected>
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
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
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
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Hovered — primary/50 border, sm shadow
// ---------------------------------------------------------------------------

export const Hovered: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Hovered',
    render: () => (
        <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2} isHovered>
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
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
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
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Collapsed — header only, body hidden
// ---------------------------------------------------------------------------

export const Collapsed: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Collapsed',
    render: () => (
        <SurveyBlock title="Demographics" blockId="B2" questionCount={4} isCollapsed>
            {/* Body is hidden when collapsed */}
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Dragging — opacity-50
// ---------------------------------------------------------------------------

export const Dragging: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Dragging',
    render: () => (
        <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2} isDragging>
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
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
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
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Display Logic — dashed border + Display Logic badge
// Block visibility is itself conditional on a logic rule.
// ---------------------------------------------------------------------------

export const WithDisplayLogic: Story = {
    name: 'Display Logic (dashed border)',
    render: () => (
        <SurveyBlock
            title="Follow-up Questions"
            blockId="B3"
            questionCount={2}
            hasDisplayLogic
        >
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
                    <p className="text-sm text-foreground mt-1">What could we have done better?</p>
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
                    <p className="text-sm text-foreground mt-1">Please describe what went wrong.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Empty — no questions, shows the drop zone placeholder
// ---------------------------------------------------------------------------

export const Empty: Story = {
    name: 'Empty (Drop Zone)',
    render: () => (
        <SurveyBlock title="New Block" blockId="B4" questionCount={0}>
            <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-border-ui rounded-lg text-muted-foreground gap-2">
                <span className="material-symbols-rounded text-2xl">add_circle</span>
                <span className="text-sm">Drag a question here or click to add</span>
            </div>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Incoming Branching Logic — alert BEFORE all questions
// This block is the destination of a branch from another block.
// ---------------------------------------------------------------------------

export const IncomingBranching: Story = {
    name: 'Incoming Branching — Default',
    render: () => (
        <SurveyBlock title="Follow-up Questions" blockId="B3" questionCount={2}>
            {/* Alert BEFORE questions — respondents arrive here via a branch */}
            <IncomingFlowAlert branchName="Dissatisfied path" sourceQid="Q1" />
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
                    <p className="text-sm text-foreground mt-1">What could we have done better?</p>
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
                    <p className="text-sm text-foreground mt-1">Please describe what went wrong.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

export const IncomingBranchingError: Story = {
    name: 'Incoming Branching — Error',
    render: () => (
        <SurveyBlock title="Follow-up Questions" blockId="B3" questionCount={2}>
            {/* Error alert BEFORE questions — originating rule is broken */}
            <IncomingFlowErrorAlert branchName="Dissatisfied path" sourceQid="Q1" />
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
                    <p className="text-sm text-foreground mt-1">What could we have done better?</p>
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
                    <p className="text-sm text-foreground mt-1">Please describe what went wrong.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Outgoing Survey Flow — alert AFTER all questions
// Block routes respondents to another block or to end of survey.
// ---------------------------------------------------------------------------

export const OutgoingFlow: Story = {
    name: 'Outgoing Flow — Default',
    render: () => (
        <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2}>
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
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
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
                    <p className="text-sm text-foreground mt-1">Any additional comments?</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
            {/* Alert AFTER all questions — outgoing branch or skip */}
            <OutgoingFlowAlert destination="B3 – Follow-up Questions" />
        </SurveyBlock>
    ),
};

export const OutgoingFlowError: Story = {
    name: 'Outgoing Flow — Error',
    render: () => (
        <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2}>
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
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
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
                    <p className="text-sm text-foreground mt-1">Any additional comments?</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
            {/* Error alert AFTER questions — target block was deleted */}
            <OutgoingFlowErrorAlert destination="B3 – Follow-up Questions" />
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Incoming + Outgoing — this block sits in the middle of a branching chain
// ---------------------------------------------------------------------------

export const IncomingAndOutgoing: Story = {
    name: 'Incoming + Outgoing Flow',
    render: () => (
        <SurveyBlock title="Neutral Feedback" blockId="B2" questionCount={2}>
            {/* Incoming: arrives here via branch from Q1 */}
            <IncomingFlowAlert branchName="Neutral path" sourceQid="Q1" />
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q3" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">What was the primary reason for your rating?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Product quality" />
                        <ChoiceRow label="Customer support" />
                        <ChoiceRow label="Pricing" />
                        <ChoiceRow label="Delivery speed" />
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
                    <p className="text-sm text-foreground mt-1">What would change your rating to Satisfied?</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
            {/* Outgoing: routes to end of survey */}
            <OutgoingFlowAlert destination="End of survey" />
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Question-level logic errors — error badge inside the card,
// card gets destructive border
// ---------------------------------------------------------------------------

export const WithQuestionLogicError: Story = {
    name: 'Question With Logic Error',
    render: () => (
        <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={2}>
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
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
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
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

export const WithMultipleLogicIssues: Story = {
    name: 'Multiple Logic Issues',
    render: () => (
        <SurveyBlock title="Customer Satisfaction" blockId="B1" questionCount={3}>
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
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Very satisfied" />
                        <ChoiceRow label="Satisfied" />
                        <ChoiceRow label="Neutral" />
                        <ChoiceRow label="Dissatisfied" />
                    </div>
                    <LogicErrorAlert message="Skip logic references Q4 which no longer exists." />
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
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                    <LogicAlert message="Display only if Q1 = 'Dissatisfied' or 'Neutral'" />
                </div>
            </QuestionCardShell>
            <QuestionCardShell hasError>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q3" />
                            <TypeBadge label="Checkbox" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">Which of the following apply to you?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="I use this product daily" type="checkbox" />
                        <ChoiceRow label="I have recommended it to others" type="checkbox" />
                    </div>
                    <LogicErrorAlert message="Display logic references a deleted choice. This question will always be shown." />
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Survey Section — block.isSurveySection = true
// Renders a bold section title at the top of the body.
// ---------------------------------------------------------------------------

export const SurveySection: Story = {
    name: 'Survey Section Mode',
    render: () => (
        <SurveyBlock
            title="About Your Experience"
            blockId="B2"
            questionCount={2}
            isSurveySection
            sectionName="Part 2 — Service Quality"
        >
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q4" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">How would you rate our support team?</p>
                    <div className="mt-3 space-y-0.5">
                        <ChoiceRow label="Excellent" />
                        <ChoiceRow label="Good" />
                        <ChoiceRow label="Fair" />
                        <ChoiceRow label="Poor" />
                    </div>
                </div>
            </QuestionCardShell>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q5" />
                            <TypeBadge label="Text Entry" />
                        </div>
                        <ActionsMenu />
                    </div>
                    <p className="text-sm text-foreground mt-1">What did our support team do particularly well?</p>
                    <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Print Mode — lighter background, no drag handles, no action buttons
// ---------------------------------------------------------------------------

export const PrintMode: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Print Mode',
    render: () => (
        <SurveyBlock
            title="Customer Satisfaction"
            blockId="B1"
            questionCount={3}
            printMode
        >
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q1" />
                            <TypeBadge label="Multiple Choice" />
                        </div>
                    </div>
                    <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
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
                    </div>
                    <p className="text-sm text-foreground mt-1">Please describe your experience in detail.</p>
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
                            <TypeBadge label="Description" />
                        </div>
                    </div>
                    <div className="mt-1 text-sm text-foreground leading-relaxed">
                        Thank you for completing this section. Your feedback helps us improve.
                    </div>
                </div>
            </QuestionCardShell>
        </SurveyBlock>
    ),
};

// ---------------------------------------------------------------------------
// Canvas Overview — multiple blocks in a realistic survey layout
// ---------------------------------------------------------------------------

export const CanvasOverview: Story = {
    name: 'Canvas Overview (Multiple Blocks)',
    render: () => (
        <div className="space-y-4">
            {/* B1 — Introduction, no logic */}
            <SurveyBlock title="Introduction" blockId="B1" questionCount={1}>
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
                            Welcome! This survey will take approximately 3 minutes. Your responses are anonymous.
                        </div>
                    </div>
                </QuestionCardShell>
            </SurveyBlock>

            {/* B2 — Selected, has outgoing branching */}
            <SurveyBlock title="Customer Satisfaction" blockId="B2" questionCount={2} isSelected>
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
                        <p className="text-sm text-foreground mt-1">How satisfied are you with our service?</p>
                        <div className="mt-3 space-y-0.5">
                            <ChoiceRow label="Very satisfied" />
                            <ChoiceRow label="Satisfied" />
                            <ChoiceRow label="Neutral" />
                            <ChoiceRow label="Dissatisfied" />
                        </div>
                        <LogicAlert message="If 'Dissatisfied' or 'Neutral' → branch to B3 (Follow-up)" />
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
                        <p className="text-sm text-foreground mt-1">Any additional comments?</p>
                        <div className="mt-3 rounded border border-border-ui bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                            Respondent types a free-text answer here...
                        </div>
                    </div>
                </QuestionCardShell>
                {/* Outgoing flow alert AFTER questions */}
                <OutgoingFlowAlert destination="B3 – Follow-up Questions" />
            </SurveyBlock>

            {/* B3 — Follow-up with incoming branch, collapsed */}
            <SurveyBlock title="Follow-up Questions" blockId="B3" questionCount={3} isCollapsed>
                {/* Body hidden when collapsed */}
            </SurveyBlock>

            {/* B4 — Demographics, display logic dashed border */}
            <SurveyBlock
                title="Demographics"
                blockId="B4"
                questionCount={2}
                hasDisplayLogic
            >
                <QuestionCardShell>
                    <DragHandle />
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <QuestionId id="Q7" />
                                <TypeBadge label="Multiple Choice" />
                            </div>
                            <ActionsMenu />
                        </div>
                        <p className="text-sm text-foreground mt-1">What is your age range?</p>
                        <div className="mt-3 space-y-0.5">
                            <ChoiceRow label="Under 25" />
                            <ChoiceRow label="25–44" />
                            <ChoiceRow label="45–64" />
                            <ChoiceRow label="65 or older" />
                        </div>
                    </div>
                </QuestionCardShell>
                <QuestionCardShell>
                    <DragHandle />
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <QuestionId id="Q8" />
                                <TypeBadge label="Checkbox" />
                            </div>
                            <ActionsMenu />
                        </div>
                        <p className="text-sm text-foreground mt-1">How did you hear about us?</p>
                        <div className="mt-3 space-y-0.5">
                            <ChoiceRow label="Search engine" type="checkbox" />
                            <ChoiceRow label="Social media" type="checkbox" />
                            <ChoiceRow label="Word of mouth" type="checkbox" />
                        </div>
                    </div>
                </QuestionCardShell>
            </SurveyBlock>
        </div>
    ),
};
