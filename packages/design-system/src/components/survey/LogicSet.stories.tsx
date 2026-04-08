import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { Plus, X, AlertTriangle } from '../ui/icons';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Condition {
    id: string;
    questionId: string;
    operator: string;
    value: string;
}

interface LogicSetData {
    id: string;
    operator: 'AND' | 'OR';
    conditions: Condition[];
    isConfirmed: boolean;
}

interface MockQuestion {
    id: string;
    label: string;
    choices?: string[];
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_QUESTIONS: MockQuestion[] = [
    { id: 'Q1', label: 'Q1 – What is your age?', choices: ['Under 18', '18–34', '35–54', '55+'] },
    { id: 'Q2', label: 'Q2 – Do you own a car?', choices: ['Yes', 'No'] },
    { id: 'Q3', label: 'Q3 – Preferred contact method', choices: ['Email', 'Phone', 'SMS'] },
];

const OPERATORS: Record<string, string> = {
    equals: 'Is equal to',
    not_equals: 'Is not equal to',
    contains: 'Contains',
    is_empty: 'Is empty',
    is_not_empty: 'Is not empty',
};

// ─── Condition Row ─────────────────────────────────────────────────────────────

interface ConditionRowProps {
    condition: Condition;
    index: number;
    showIndex: boolean;
    showIfLabel: boolean;
    hasError?: boolean;
    onChange: (id: string, field: keyof Condition, value: string) => void;
    onRemove?: (id: string) => void;
    onAddBelow?: (id: string) => void;
}

function ConditionRow({
    condition,
    index,
    showIndex,
    showIfLabel,
    hasError,
    onChange,
    onRemove,
    onAddBelow,
}: ConditionRowProps) {
    const selectedQuestion = MOCK_QUESTIONS.find(q => q.id === condition.questionId);
    const requiresValue = condition.operator && !['is_empty', 'is_not_empty'].includes(condition.operator);

    return (
        <div className="flex items-center gap-2">
            {showIndex && (
                <span className="text-xs font-medium text-muted-foreground w-4 text-center shrink-0">
                    {index + 1}.
                </span>
            )}
            {showIfLabel && (
                <span className="text-sm font-medium text-foreground w-6 text-center shrink-0">
                    if
                </span>
            )}

            {/* Question */}
            <Select
                value={condition.questionId}
                onValueChange={v => onChange(condition.id, 'questionId', v)}
            >
                <SelectTrigger
                    className="flex-1 min-w-0 h-8 text-xs"
                    aria-invalid={hasError && !condition.questionId ? 'true' : undefined}
                >
                    <SelectValue placeholder="Select question" />
                </SelectTrigger>
                <SelectContent>
                    {MOCK_QUESTIONS.map(q => (
                        <SelectItem key={q.id} value={q.id}>{q.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Operator */}
            <Select
                value={condition.operator}
                onValueChange={v => onChange(condition.id, 'operator', v)}
                disabled={!condition.questionId}
            >
                <SelectTrigger
                    className={`flex-1 min-w-0 h-8 text-xs${!condition.questionId ? ' hidden' : ''}`}
                    aria-invalid={hasError && condition.questionId && !condition.operator ? 'true' : undefined}
                >
                    <SelectValue placeholder="Operator" />
                </SelectTrigger>
                <SelectContent>
                    {Object.entries(OPERATORS).map(([val, label]) => (
                        <SelectItem key={val} value={val}>{label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Value — always rendered to keep widths stable; invisible when not applicable */}
            <Select
                value={condition.value}
                onValueChange={v => onChange(condition.id, 'value', v)}
                disabled={!condition.operator || !requiresValue}
            >
                <SelectTrigger
                    className={`flex-1 min-w-0 h-8 text-xs${!requiresValue || !condition.operator ? ' hidden' : ''}`}
                    aria-invalid={hasError && condition.operator && !condition.value ? 'true' : undefined}
                >
                    <SelectValue placeholder="Value" />
                </SelectTrigger>
                <SelectContent>
                    {(selectedQuestion?.choices ?? []).map(c => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Row actions */}
            {onRemove && (
                <Button
                    variant="ghost-destructive"
                    size="icon"
                    className="h-7 w-7 shrink-0"
                    onClick={() => onRemove(condition.id)}
                    aria-label="Remove condition"
                >
                    <X />
                </Button>
            )}
            {onAddBelow && (
                <Button
                    variant="ghost-primary"
                    size="icon"
                    className="h-7 w-7 shrink-0"
                    onClick={() => onAddBelow(condition.id)}
                    aria-label="Add condition below"
                >
                    <Plus />
                </Button>
            )}
        </div>
    );
}

// ─── Operator Badge ───────────────────────────────────────────────────────────

interface OperatorBadgeProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

function OperatorBadge({ label, isSelected, onClick }: OperatorBadgeProps) {
    const [hovered, setHovered] = useState(false);

    const variant = isSelected
        ? 'default'
        : hovered
            ? 'secondary'
            : 'outline';

    return (
        <Badge
            variant={variant}
            className="cursor-pointer select-none"
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' || e.key === ' ' ? onClick() : undefined}
        >
            {label}
        </Badge>
    );
}

// ─── LogicSet Component ────────────────────────────────────────────────────────

interface LogicSetDisplayProps {
    initialData: LogicSetData;
    startEmpty?: boolean;
    actionValue?: 'show' | 'hide';
    headerContent?: React.ReactNode;
    issues?: string[];
    showRowIfLabel?: boolean;
    transparentBackground?: boolean;
    /** Story-only: pre-populate validation errors to show the error state without clicking Apply */
    initialValidationErrorIds?: string[];
}

function LogicSetDisplay({
    initialData,
    startEmpty = false,
    actionValue: initialActionValue,
    headerContent,
// eslint-disable-next-line unused-imports/no-unused-vars
    issues = [],
    showRowIfLabel = false,
    transparentBackground = false,
    initialValidationErrorIds = [],
}: LogicSetDisplayProps) {
    const [isEmpty, setIsEmpty] = useState(startEmpty);
    const [logicSet, setLogicSet] = useState<LogicSetData>(initialData);
    const [actionValue, setActionValue] = useState<'show' | 'hide'>(initialActionValue ?? 'show');
    const [validationErrors, setValidationErrors] = useState<Set<string>>(
        new Set(initialValidationErrorIds)
    );

    const hasMultiple = logicSet.conditions.length > 1;

    const containerClass = [
        'p-3 border rounded-md relative transition-colors',
        transparentBackground
            ? 'border-border-subtle bg-transparent'
            : validationErrors.size > 0
                ? 'border-destructive/40 shadow-sm'
                : logicSet.isConfirmed
                    ? 'border-border-ui bg-muted/50'
                    : 'border-primary bg-muted shadow-sm',
    ].join(' ');

    const handleChange = (id: string, field: keyof Condition, value: string) => {
        setLogicSet(prev => ({
            ...prev,
            isConfirmed: false,
            conditions: prev.conditions.map(c => {
                if (c.id !== id) return c;
                if (field === 'questionId') return { ...c, questionId: value, operator: '', value: '' };
                return { ...c, [field]: value };
            }),
        }));
        setValidationErrors(prev => { const n = new Set(prev); n.delete(id); return n; });
    };

    const handleAddBelow = (afterId: string) => {
        const idx = logicSet.conditions.findIndex(c => c.id === afterId);
        const newCond: Condition = { id: `cond-${Date.now()}`, questionId: '', operator: '', value: '' };
        const next = [...logicSet.conditions];
        next.splice(idx + 1, 0, newCond);
        setLogicSet(prev => ({ ...prev, conditions: next, isConfirmed: false }));
    };

    const handleAdd = () => {
        const newCond: Condition = { id: `cond-${Date.now()}`, questionId: '', operator: '', value: '' };
        setLogicSet(prev => ({ ...prev, conditions: [...prev.conditions, newCond], isConfirmed: false }));
    };

    const handleRemove = (id: string) => {
        setLogicSet(prev => ({ ...prev, conditions: prev.conditions.filter(c => c.id !== id) }));
    };

    const handleApply = () => {
        const invalid = new Set<string>();
        logicSet.conditions.forEach(c => {
            const requiresValue = c.operator && !['is_empty', 'is_not_empty'].includes(c.operator);
            if (!c.questionId || !c.operator || (requiresValue && !c.value)) {
                invalid.add(c.id);
            }
        });
        setValidationErrors(invalid);
        if (invalid.size === 0) {
            setLogicSet(prev => ({ ...prev, isConfirmed: true }));
        }
    };

    const freshSeed = (): LogicSetData => ({
        ...initialData,
        operator: 'AND',
        conditions: [{ id: `cond-${Date.now()}`, questionId: '', operator: '', value: '' }],
        isConfirmed: false,
    });

    const handleCancel = () => { setIsEmpty(true); setLogicSet(initialData); setValidationErrors(new Set()); };
    const handleDelete = () => { setLogicSet(initialData); setValidationErrors(new Set()); };

    if (isEmpty) {
        return (
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost-primary"
                    size="sm"
                    onClick={() => { setIsEmpty(false); setLogicSet(freshSeed()); }}
                >
                    <Plus /> Add logic set
                </Button>
                <Button variant="ghost-primary" size="sm">
                    <Plus /> Add logic expression
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div
                className={containerClass}
                style={transparentBackground ? { backgroundColor: 'transparent' } : undefined}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 w-full">
                        {initialActionValue !== undefined ? (
                            <>
                                <Select value={actionValue} onValueChange={v => setActionValue(v as 'show' | 'hide')}>
                                    <SelectTrigger className="w-24 h-8 text-sm shrink-0">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="show">Show</SelectItem>
                                        <SelectItem value="hide">Hide</SelectItem>
                                    </SelectContent>
                                </Select>
                                {headerContent && <div className="flex-grow">{headerContent}</div>}
                            </>
                        ) : headerContent ? (
                            <div className="flex-grow">{headerContent}</div>
                        ) : (
                            <>
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Logic Set
                                </span>
                                {!hasMultiple && !showRowIfLabel && (
                                    <div className="flex items-center gap-1 ml-2">
                                        <span className="text-sm font-medium text-foreground shrink-0">
                                            if
                                        </span>
                                        {validationErrors.size > 0 && (
                                            <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
                                        )}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>

                {/* AND / OR toggle — visible when there are multiple conditions */}
                {hasMultiple && (
                    <div className="flex items-center gap-2 mb-3 px-2">
                        <div className="flex gap-1">
                            {(['AND', 'OR'] as const).map(op => {
                                const isSelected = logicSet.operator === op;
                                return (
                                    <OperatorBadge
                                        key={op}
                                        label={op}
                                        isSelected={isSelected}
                                        onClick={() => setLogicSet(prev => ({ ...prev, operator: op, isConfirmed: false }))}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Conditions list */}
                <div className="space-y-2">
                    {logicSet.conditions.map((cond, idx) => (
                        <ConditionRow
                            key={cond.id}
                            condition={cond}
                            index={idx}
                            showIndex={hasMultiple}
                            showIfLabel={showRowIfLabel}
                            hasError={validationErrors.has(cond.id)}
                            onChange={handleChange}
                            onRemove={hasMultiple ? handleRemove : undefined}
                            onAddBelow={hasMultiple ? handleAddBelow : undefined}
                        />
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-3 flex items-center justify-between">
                    <Button variant="ghost-primary" size="sm" onClick={handleAdd}>
                        <Plus /> Add condition
                    </Button>
                    <div className="flex items-center gap-2">
                        <Button
                            variant={logicSet.isConfirmed ? 'ghost-destructive' : 'ghost'}
                            size="sm"
                            onClick={logicSet.isConfirmed ? handleDelete : handleCancel}
                        >
                            {logicSet.isConfirmed ? 'Delete' : 'Cancel'}
                        </Button>
                        {!logicSet.isConfirmed && (
                            <Button variant="default" size="sm" onClick={handleApply}>
                                Apply
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Storybook meta ───────────────────────────────────────────────────────────

const meta = {
    title: 'Survey Builder/Logic/LogicSet',
    component: LogicSetDisplay,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
**LogicSet** is the condition editor used throughout the Survey Builder to configure skip logic, display logic, branching rules, and choice visibility rules.

### States

| State | Border | Background | Footer |
|-------|--------|------------|--------|
| Empty | — | — | "+ Add logic set" ghost button only |
| Unconfirmed | \`border-primary\` | \`bg-muted shadow-sm\` | Cancel + Apply |
| Confirmed | \`border-border-ui\` | \`bg-muted/50\` | Delete only |
| Validation error | \`border-destructive/40\` | — | Cancel + Apply, invalid selects highlighted |

### Header patterns

The header content changes depending on the rule type:

| Rule type | Header |
|-----------|--------|
| Display question logic | Show/Hide select + question ID + "if" |
| Display choice logic | Show/Hide select + choice ID select + "if" |
| Skip logic | "Skip to" + question select + "if" |
| Branching logic | "Branch to" + block select + "if" |
| Generic | "Logic Set" label + "if" |

### Multiple conditions

When two or more conditions are added, an **AND / OR** toggle badge row appears above the conditions list and each row gets a numeric index. The toggle uses three states: \`default\` (selected), \`secondary\` (hovered), \`outline\` (inactive).

### Operators

Operators that do not require a value (\`is_empty\`, \`is_not_empty\`) hide the value select column to keep the layout clean.
                `,
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LogicSetDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Seeds ────────────────────────────────────────────────────────────────────

const unconfirmedSeed: LogicSetData = {
    id: 'set-1',
    operator: 'AND',
    conditions: [{ id: 'cond-1', questionId: '', operator: '', value: '' }],
    isConfirmed: false,
};

const confirmedSeed: LogicSetData = {
    id: 'set-2',
    operator: 'AND',
    conditions: [{ id: 'cond-1', questionId: 'Q2', operator: 'equals', value: 'Yes' }],
    isConfirmed: true,
};

const multiSeed: LogicSetData = {
    id: 'set-3',
    operator: 'AND',
    conditions: [
        { id: 'cond-1', questionId: 'Q1', operator: 'equals', value: '18–34' },
        { id: 'cond-2', questionId: 'Q2', operator: 'equals', value: 'Yes' },
    ],
    isConfirmed: false,
};

// ─── Shared header ────────────────────────────────────────────────────────────

function BranchHeaderSelect() {
    const [blockId, setBlockId] = useState('BL1');
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-foreground shrink-0">Branch to</span>
            <Select value={blockId} onValueChange={setBlockId}>
                <SelectTrigger className="w-24 h-8 text-sm shrink-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="BL1">BL1</SelectItem>
                    <SelectItem value="BL2">BL2</SelectItem>
                    <SelectItem value="BL3">BL3</SelectItem>
                </SelectContent>
            </Select>
            <span className="text-sm text-foreground shrink-0">if</span>
        </div>
    );
}

function SkipHeaderSelect() {
    const [questionId, setQuestionId] = useState('Q1');
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-foreground shrink-0">Skip to</span>
            <Select value={questionId} onValueChange={setQuestionId}>
                <SelectTrigger className="w-24 h-8 text-sm shrink-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Q1">Q1</SelectItem>
                    <SelectItem value="Q2">Q2</SelectItem>
                    <SelectItem value="Q3">Q3</SelectItem>
                    <SelectItem value="end">End of survey</SelectItem>
                </SelectContent>
            </Select>
            <span className="text-sm text-foreground shrink-0">if</span>
        </div>
    );
}

function ChoiceHeaderSelect() {
    const [choiceId, setChoiceId] = useState('Q3_1');
    return (
        <div className="flex items-center gap-2 flex-grow">
            <Select value={choiceId} onValueChange={setChoiceId}>
                <SelectTrigger className="w-24 h-8 text-sm shrink-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Q3_1">Q3_1</SelectItem>
                    <SelectItem value="Q3_2">Q3_2</SelectItem>
                    <SelectItem value="Q3_3">Q3_3</SelectItem>
                </SelectContent>
            </Select>
            <span className="text-sm text-foreground shrink-0">if</span>
        </div>
    );
}

const Q3Header = (
    <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-foreground">Q3</span>
        <span className="text-sm text-foreground">if</span>
    </div>
);

const sharedActionArgs = { actionValue: 'show' as const, headerContent: Q3Header };

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Empty state — no logic set added yet. Shows only the "+ Add logic set" ghost-primary button. Clicking it transitions to Unconfirmed. */
export const Empty: Story = {
    args: { initialData: unconfirmedSeed, startEmpty: true },
};

/** Initial editing state when a new rule is created. Primary border, surface-container-high background, Cancel + Apply buttons. */
export const Unconfirmed: Story = {
    args: { initialData: unconfirmedSeed, ...sharedActionArgs },
};

/** Saved and confirmed rule. Outline-variant border, surface-container background, Delete button only. */
export const Confirmed: Story = {
    args: { initialData: confirmedSeed, ...sharedActionArgs },
};

/** Two or more conditions — AND/OR toggle and row numbering appear. */
export const MultipleConditions: Story = {
    args: { initialData: multiSeed, ...sharedActionArgs },
};

/** Multiple conditions with OR operator active. */
export const MultipleConditionsOR: Story = {
    args: { initialData: { ...multiSeed, id: 'set-4', operator: 'OR' }, ...sharedActionArgs },
};

/** Error state — triggered when the user clicks Apply with empty selects. Unconfirmed border, destructive styling on empty selects, warning icon next to "if". */
export const WithError: Story = {
    args: {
        initialData: {
            id: 'set-5',
            operator: 'AND',
            conditions: [{ id: 'cond-err-1', questionId: '', operator: '', value: '' }],
            isConfirmed: false,
        },
        initialValidationErrorIds: ['cond-err-1'],
        ...sharedActionArgs,
    },
};

/** Show/Hide select + question ID + if in the header — pattern used by DisplayLogicSet. */
export const DisplayQuestionLogicSet: Story = {
    name: 'Display question logic set',
    args: { initialData: unconfirmedSeed, ...sharedActionArgs },
};

/** "Branch to" text + block selector + if in the header. */
export const BranchingLogicSet: Story = {
    name: 'Branching logic set',
    render: () => (
        <LogicSetDisplay
            initialData={unconfirmedSeed}
            headerContent={<BranchHeaderSelect />}
        />
    ),
};

/** "Skip to" text + question select + if in the header — pattern used by SkipLogicSet. */
export const SkipLogicSet: Story = {
    name: 'Skip logic set',
    render: () => (
        <LogicSetDisplay
            initialData={unconfirmedSeed}
            headerContent={<SkipHeaderSelect />}
        />
    ),
};

/** Show/Hide select + choice ID select + if in the header — pattern used by DisplayChoiceLogicSet. */
export const DisplayChoiceLogicSet: Story = {
    name: 'Display choice logic set',
    render: () => (
        <LogicSetDisplay
            initialData={unconfirmedSeed}
            actionValue="show"
            headerContent={<ChoiceHeaderSelect />}
        />
    ),
};


/** Overview of all states stacked. */
export const AllStates: Story = {
    render: () => (
        <div className="flex flex-col gap-6 w-[480px]">
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Unconfirmed</p>
                <LogicSetDisplay initialData={unconfirmedSeed} {...sharedActionArgs} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Confirmed</p>
                <LogicSetDisplay initialData={confirmedSeed} {...sharedActionArgs} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Multiple Conditions (AND)</p>
                <LogicSetDisplay initialData={multiSeed} {...sharedActionArgs} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">With Error</p>
                <LogicSetDisplay
                    initialData={{ ...confirmedSeed, id: 'set-err' }}
                    issues={['Referenced question was deleted.']}
                    {...sharedActionArgs}
                />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Display question logic set</p>
                <LogicSetDisplay initialData={unconfirmedSeed} {...sharedActionArgs} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Display choice logic set</p>
                <LogicSetDisplay
                    initialData={{ ...unconfirmedSeed, id: 'set-choice' }}
                    actionValue="show"
                    headerContent={<ChoiceHeaderSelect />}
                />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Skip logic set</p>
                <LogicSetDisplay
                    initialData={{ ...unconfirmedSeed, id: 'set-skip' }}
                    headerContent={<SkipHeaderSelect />}
                />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Branching logic set</p>
                <LogicSetDisplay
                    initialData={{ ...unconfirmedSeed, id: 'set-branch' }}
                    headerContent={<BranchHeaderSelect />}
                />
            </div>
        </div>
    ),
};
