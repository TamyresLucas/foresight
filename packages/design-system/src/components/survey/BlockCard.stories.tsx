import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { cn } from '../../lib/utils';

// ---------------------------------------------------------------------------
// Shared primitives (same as QuestionCard.stories)
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
    <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">{label}</span>
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
}

const QuestionCardShell = ({ children, isSelected, hasError }: QuestionCardShellProps) => (
    <div
        className={cn(
            'p-4 rounded-lg border transition-all group relative grid items-start gap-x-4 bg-card grid-cols-[auto_1fr]',
            isSelected && hasError && 'border-destructive shadow-md',
            isSelected && !hasError && 'border-primary shadow-md',
            !isSelected && 'border-border hover:border-primary/40 hover:shadow-sm',
        )}
    >
        {children}
    </div>
);

const ChoiceRow = ({ label, type = 'radio' }: { label: string; type?: 'radio' | 'checkbox' }) => (
    <div className="flex items-center gap-2 py-1">
        <div className={cn('w-4 h-4 border border-border flex-shrink-0', type === 'radio' ? 'rounded-full' : 'rounded-sm')} />
        <span className="text-sm text-foreground">{label}</span>
    </div>
);

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
    children: React.ReactNode;
    title?: string;
    blockId?: string;
    questionCount?: number;
    isSelected?: boolean;
    isHovered?: boolean;
    isDashed?: boolean;
    isCollapsed?: boolean;
    isDragging?: boolean;
}

const BlockCard = ({
    children,
    title = 'Block 1',
    blockId = 'B1',
    questionCount,
    isSelected,
    isHovered,
    isDashed,
    isCollapsed,
    isDragging,
}: BlockCardProps) => {
    const count = questionCount ?? React.Children.count(children);
    return (
        <div
            className={cn(
                'bg-card border rounded-lg transition-all',
                isDragging && 'opacity-50',
                isSelected && 'border-2 border-primary shadow-md',
                !isSelected && isHovered && 'border-primary/50 shadow-sm',
                !isSelected && !isHovered && 'border-border',
                isDashed && 'border-dashed',
            )}
        >
            {/* Header */}
            <div className={cn('flex items-center justify-between px-4 py-3', !isCollapsed && 'border-b border-border')}>
                <div className="flex items-center gap-2 cursor-grab">
                    <span className="material-symbols-rounded text-base text-muted-foreground opacity-0 group-hover:opacity-100 select-none">
                        drag_indicator
                    </span>
                    <button className="p-0.5 rounded hover:bg-muted text-muted-foreground">
                        <span className={cn('material-symbols-rounded text-base transition-transform', isCollapsed && '-rotate-90')}>
                            expand_more
                        </span>
                    </button>
                    <span className="font-semibold text-sm text-foreground">{blockId}</span>
                    <span className="font-semibold text-sm text-foreground">{title}</span>
                    <span className="text-xs text-muted-foreground font-normal">
                        ({count} question{count !== 1 ? 's' : ''})
                    </span>
                </div>
                <button className="opacity-0 hover:opacity-100 p-1 rounded hover:bg-muted text-muted-foreground">
                    <span className="material-symbols-rounded text-base leading-none">more_horiz</span>
                </button>
            </div>
            {/* Body */}
            {!isCollapsed && (
                <div className="p-4 space-y-3">
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
    title: 'Survey Builder/Survey Canvas/BlockCard',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
**BlockCard** is the top-level container in the Survey Canvas. Each survey is made up of one or more blocks, each holding an ordered list of question cards.

### States

| State | Border | Shadow |
|-------|--------|--------|
| Default | \`border-border\` | none |
| Hovered | \`border-primary/50\` | sm |
| Selected | \`border-2 border-primary\` | md |
| Display Logic (dashed) | \`border-dashed\` | — |
| Dragging | normal border + \`opacity-50\` | — |
| Collapsed | header only, body hidden | — |

The block header shows an editable title, question count, collapse toggle, and an overflow actions menu (visible on hover).
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
// Default — one block with three question cards
// ---------------------------------------------------------------------------

export const Default: Story = {
    name: 'Default',
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
                    <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
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
        </BlockCard>
    ),
};

// ---------------------------------------------------------------------------
// Selected
// ---------------------------------------------------------------------------

export const Selected: Story = {
    name: 'Selected',
    render: () => (
        <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2} isSelected>
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
                    <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
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
    name: 'Hovered',
    render: () => (
        <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2} isHovered>
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
                    <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
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
    name: 'Collapsed',
    render: () => (
        <BlockCard title="Demographics" blockId="B2" questionCount={4} isCollapsed>
            {/* Children hidden when collapsed */}
        </BlockCard>
    ),
};

// ---------------------------------------------------------------------------
// Display Logic (dashed border)
// ---------------------------------------------------------------------------

export const DisplayLogic: Story = {
    name: 'Display Logic (dashed border)',
    render: () => (
        <BlockCard title="Follow-up Questions" blockId="B3" questionCount={2} isDashed>
            <QuestionCardShell>
                <DragHandle />
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <QuestionId id="Q5" />
                            <TypeBadge label="Multiple Choice" />
                            <span className="text-xs text-primary border border-primary/30 rounded px-1.5 py-0.5">Display Logic</span>
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
                    <p className="text-sm text-foreground mt-1">Any additional comments?</p>
                    <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                        Respondent types a free-text answer here...
                    </div>
                </div>
            </QuestionCardShell>
        </BlockCard>
    ),
};

// ---------------------------------------------------------------------------
// With logic error inside a question card
// ---------------------------------------------------------------------------

export const WithLogicError: Story = {
    name: 'With Logic Error',
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
                    <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
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
    name: 'Dragging',
    render: () => (
        <BlockCard title="Customer Satisfaction" blockId="B1" questionCount={2} isDragging>
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
                    <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
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
    name: 'Empty (Drop Zone)',
    render: () => (
        <BlockCard title="New Block" blockId="B4" questionCount={0}>
            <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-border rounded-lg text-muted-foreground gap-2">
                <span className="material-symbols-rounded text-2xl">add_circle</span>
                <span className="text-sm">Drag a question here or click to add</span>
            </div>
        </BlockCard>
    ),
};

// ---------------------------------------------------------------------------
// Multi-block canvas (overview)
// ---------------------------------------------------------------------------

export const MultipleBlocks: Story = {
    name: 'Multiple Blocks (Canvas Overview)',
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
                            Welcome! This survey will take approximately 3 minutes to complete.
                        </div>
                    </div>
                </QuestionCardShell>
            </BlockCard>
            <BlockCard title="Customer Satisfaction" blockId="B2" questionCount={2} isSelected>
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
                        <p className="text-sm text-foreground mt-1">Any additional feedback?</p>
                        <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                            Respondent types a free-text answer here...
                        </div>
                    </div>
                </QuestionCardShell>
            </BlockCard>
            <BlockCard title="Demographics" blockId="B3" questionCount={3} isCollapsed>
                {/* Collapsed — body not rendered */}
            </BlockCard>
        </div>
    ),
};
