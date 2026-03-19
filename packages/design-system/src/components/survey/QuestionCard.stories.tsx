import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { cn } from '../../lib/utils';

// ---------------------------------------------------------------------------
// Shared primitives
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

interface CardShellProps {
    children: React.ReactNode;
    isSelected?: boolean;
    hasError?: boolean;
    isDashed?: boolean;
    className?: string;
}

const CardShell = ({ children, isSelected, hasError, isDashed, className }: CardShellProps) => (
    <div
        className={cn(
            'p-4 rounded-lg border transition-all group relative grid items-start gap-x-4 bg-card grid-cols-[auto_1fr]',
            isSelected && hasError && 'border-destructive shadow-md',
            isSelected && !hasError && 'border-primary shadow-md',
            !isSelected && isDashed && 'border-dashed border-primary/50',
            !isSelected && !isDashed && 'border-border-ui hover:shadow-md',
            className
        )}
    >
        {children}
    </div>
);

const QuestionText = ({ children }: { children: React.ReactNode }) => (
    <p className="text-sm text-foreground mt-1 leading-snug">{children}</p>
);

// ---------------------------------------------------------------------------
// Radio / Checkbox option row
// ---------------------------------------------------------------------------
const ChoiceRow = ({ label, type = 'radio' }: { label: string; type?: 'radio' | 'checkbox' }) => (
    <div className="flex items-center gap-2 py-1">
        <div className={cn('w-4 h-4 border border-foreground flex-shrink-0', type === 'radio' ? 'rounded-full' : 'rounded-sm')} />
        <span className="text-sm text-foreground">{label}</span>
    </div>
);

// ---------------------------------------------------------------------------
// Logic alerts (inside question card)
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
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
    title: 'Survey Builder/Survey Canvas/QuestionCard',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
**QuestionCard** is the primary editing unit in the Survey Canvas. Each question in a survey is represented by one card.

### Supported question types

| Type | Input preview |
|------|---------------|
| Multiple Choice (radio) | Circular radio options |
| Multiple Choice (checkbox) | Square checkbox options |
| Text Entry | Muted placeholder text area |
| Description / Info | Plain text block, no input |

### States

| State | Border | Shadow |
|-------|--------|--------|
| Default | \`border-border-ui\` | none |
| Hovered | \`border-border-ui\` | sm |
| Selected | \`border-primary\` | md |
| Selected + Logic Error | \`border-destructive\` | md |
| Display Logic (dashed) | \`border-primary/50 dashed\` | none |

### Logic alerts (inside question card)

Logic can be configured on any question (skip logic, display logic, branching). When a rule is configured, an \`Alert\` is rendered at the bottom of the card content area.

| State | Variant | Icon | When |
|-------|---------|------|------|
| Default | default (neutral) | \`account_tree\` | Rule is valid — shows the configured logic condition text |
| Error | \`destructive\` | \`error\` | Rule is broken — references a deleted question, choice, or page |

The dashed-border display logic state (\`isDashed\`) is used when the question's visibility is controlled by a logic rule — a \`Display Logic\` badge appears in the header alongside the type badge.
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
// Multiple Choice — Radio
// ---------------------------------------------------------------------------

export const MultipleChoiceRadioDefault: Story = {
    name: 'Multiple Choice / Radio — Default',
    render: () => (
        <CardShell>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q1" />
                        <TypeBadge label="Multiple Choice" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>How satisfied are you with our service?</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="Very satisfied" />
                    <ChoiceRow label="Satisfied" />
                    <ChoiceRow label="Neutral" />
                    <ChoiceRow label="Dissatisfied" />
                </div>
            </div>
        </CardShell>
    ),
};

export const MultipleChoiceRadioSelected: Story = {
    name: 'Multiple Choice / Radio — Selected',
    render: () => (
        <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q1" />
                        <TypeBadge label="Multiple Choice" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>How satisfied are you with our service?</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="Very satisfied" />
                    <ChoiceRow label="Satisfied" />
                    <ChoiceRow label="Neutral" />
                    <ChoiceRow label="Dissatisfied" />
                </div>
            </div>
        </CardShell>
    ),
};

export const MultipleChoiceRadioError: Story = {
    name: 'Multiple Choice / Radio — Logic Error',
    render: () => (
        <CardShell isSelected hasError>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q1" />
                        <TypeBadge label="Multiple Choice" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>How satisfied are you with our service?</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="Very satisfied" />
                    <ChoiceRow label="Satisfied" />
                    <ChoiceRow label="Neutral" />
                    <ChoiceRow label="Dissatisfied" />
                </div>
                <LogicErrorAlert message="Skip logic references Q4 which no longer exists. Update or remove this rule." />
            </div>
        </CardShell>
    ),
};

// ---------------------------------------------------------------------------
// Multiple Choice — Checkbox
// ---------------------------------------------------------------------------

export const MultipleChoiceCheckboxDefault: Story = {
    name: 'Multiple Choice / Checkbox — Default',
    render: () => (
        <CardShell>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q2" />
                        <TypeBadge label="Checkbox" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Which of the following apply to you? (Select all that apply)</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="I use this product daily" type="checkbox" />
                    <ChoiceRow label="I have recommended it to others" type="checkbox" />
                    <ChoiceRow label="I would pay more for premium features" type="checkbox" />
                </div>
            </div>
        </CardShell>
    ),
};

export const MultipleChoiceCheckboxSelected: Story = {
    name: 'Multiple Choice / Checkbox — Selected',
    render: () => (
        <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q2" />
                        <TypeBadge label="Checkbox" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Which of the following apply to you? (Select all that apply)</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="I use this product daily" type="checkbox" />
                    <ChoiceRow label="I have recommended it to others" type="checkbox" />
                    <ChoiceRow label="I would pay more for premium features" type="checkbox" />
                </div>
            </div>
        </CardShell>
    ),
};

export const MultipleChoiceCheckboxError: Story = {
    name: 'Multiple Choice / Checkbox — Logic Error',
    render: () => (
        <CardShell isSelected hasError>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q2" />
                        <TypeBadge label="Checkbox" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Which of the following apply to you? (Select all that apply)</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="I use this product daily" type="checkbox" />
                    <ChoiceRow label="I have recommended it to others" type="checkbox" />
                    <ChoiceRow label="I would pay more for premium features" type="checkbox" />
                </div>
                <LogicErrorAlert message="Display logic references a deleted choice. Remove or update the condition." />
            </div>
        </CardShell>
    ),
};

// ---------------------------------------------------------------------------
// Text Entry
// ---------------------------------------------------------------------------

export const TextEntryDefault: Story = {
    name: 'Text Entry — Default',
    render: () => (
        <CardShell>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q3" />
                        <TypeBadge label="Text Entry" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Please describe your experience in detail.</QuestionText>
                <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                    Respondent types a free-text answer here...
                </div>
            </div>
        </CardShell>
    ),
};

export const TextEntrySelected: Story = {
    name: 'Text Entry — Selected',
    render: () => (
        <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q3" />
                        <TypeBadge label="Text Entry" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Please describe your experience in detail.</QuestionText>
                <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                    Respondent types a free-text answer here...
                </div>
            </div>
        </CardShell>
    ),
};

export const TextEntryError: Story = {
    name: 'Text Entry — Logic Error',
    render: () => (
        <CardShell isSelected hasError>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q3" />
                        <TypeBadge label="Text Entry" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Please describe your experience in detail.</QuestionText>
                <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                    Respondent types a free-text answer here...
                </div>
                <LogicErrorAlert message="Branch logic jumps to Q7 which is on a previous page. Forward-only branching required." />
            </div>
        </CardShell>
    ),
};

// ---------------------------------------------------------------------------
// Multiple Choice — With Logic (default state)
// ---------------------------------------------------------------------------

export const MultipleChoiceRadioWithLogic: Story = {
    name: 'Multiple Choice / Radio — With Logic',
    render: () => (
        <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q1" />
                        <TypeBadge label="Multiple Choice" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>How satisfied are you with our service?</QuestionText>
                <div className="mt-3 space-y-0.5">
                    <ChoiceRow label="Very satisfied" />
                    <ChoiceRow label="Satisfied" />
                    <ChoiceRow label="Neutral" />
                    <ChoiceRow label="Dissatisfied" />
                </div>
                <LogicAlert message="Skip to Q4 if respondent selects 'Very satisfied' or 'Satisfied'" />
            </div>
        </CardShell>
    ),
};

// ---------------------------------------------------------------------------
// Text Entry — With Logic (default state)
// ---------------------------------------------------------------------------

export const TextEntryWithLogic: Story = {
    name: 'Text Entry — With Logic',
    render: () => (
        <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q3" />
                        <TypeBadge label="Text Entry" />
                    </div>
                    <ActionsMenu />
                </div>
                <QuestionText>Please describe your experience in detail.</QuestionText>
                <div className="mt-3 rounded border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground italic">
                    Respondent types a free-text answer here...
                </div>
                <LogicAlert message="Display only if Q1 = 'Dissatisfied' or 'Neutral'" />
            </div>
        </CardShell>
    ),
};

// ---------------------------------------------------------------------------
// Description / Info
// ---------------------------------------------------------------------------

export const DescriptionDefault: Story = {
    name: 'Description / Info — Default',
    render: () => (
        <CardShell>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q4" />
                        <TypeBadge label="Description" />
                    </div>
                    <ActionsMenu />
                </div>
                <div className="mt-1 text-sm text-foreground leading-relaxed">
                    Thank you for completing this section. The following questions will ask about your most recent support interaction.
                </div>
            </div>
        </CardShell>
    ),
};

export const DescriptionSelected: Story = {
    name: 'Description / Info — Selected',
    render: () => (
        <CardShell isSelected>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q4" />
                        <TypeBadge label="Description" />
                    </div>
                    <ActionsMenu />
                </div>
                <div className="mt-1 text-sm text-foreground leading-relaxed">
                    Thank you for completing this section. The following questions will ask about your most recent support interaction.
                </div>
            </div>
        </CardShell>
    ),
};

export const DescriptionWithDisplayLogic: Story = {
    name: 'Description / Info — Display Logic (dashed border)',
    render: () => (
        <CardShell isDashed>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q4" />
                        <TypeBadge label="Description" />
                        <Badge variant="secondary">Display Logic</Badge>
                    </div>
                    <ActionsMenu />
                </div>
                <div className="mt-1 text-sm text-foreground leading-relaxed">
                    Shown only to respondents who selected "Dissatisfied" in Q1.
                </div>
            </div>
        </CardShell>
    ),
};

export const DescriptionError: Story = {
    name: 'Description / Info — Logic Error',
    render: () => (
        <CardShell isSelected hasError>
            <DragHandle />
            <div>
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                        <QuestionId id="Q4" />
                        <TypeBadge label="Description" />
                    </div>
                    <ActionsMenu />
                </div>
                <div className="mt-1 text-sm text-foreground leading-relaxed">
                    Thank you for completing this section.
                </div>
                <LogicErrorAlert message="Display logic references Q1 which was deleted. This block will always be shown." />
            </div>
        </CardShell>
    ),
};
