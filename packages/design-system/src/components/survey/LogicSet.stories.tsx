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
                <span className="text-xs font-medium text-[var(--on-surface-variant)] w-4 text-center shrink-0">
                    {index + 1}.
                </span>
            )}
            {showIfLabel && (
                <span className="text-sm font-medium text-[var(--on-surface)] w-6 text-center shrink-0">
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
            ? 'border-[var(--outline-variant)] bg-transparent'
            : validationErrors.size > 0
                ? 'border-destructive bg-[var(--surface-container-high)] shadow-sm'
                : logicSet.isConfirmed
                    ? 'border-border-ui bg-[var(--surface-container)]'
                    : 'border-primary bg-[var(--surface-container-high)] shadow-sm',
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
            {/* Action bar — rendered when actionValue prop is provided */}
            {initialActionValue !== undefined && (
                <div className="flex items-center gap-2 mb-2 w-full">
                    <Select value={actionValue} onValueChange={v => setActionValue(v as 'show' | 'hide')}>
                        <SelectTrigger className="w-24 h-8 text-sm shrink-0">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="show">Show</SelectItem>
                            <SelectItem value="hide">Hide</SelectItem>
                        </SelectContent>
                    </Select>
                    {headerContent}
                </div>
            )}

            <div
                className={containerClass}
                style={transparentBackground ? { backgroundColor: 'transparent' } : undefined}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 w-full">
                        {headerContent && initialActionValue === undefined ? (
                            <div className="flex-grow">{headerContent}</div>
                        ) : (
                            <>
                                <span className="text-xs font-medium text-[var(--on-surface-variant)] uppercase tracking-wider">
                                    Logic Set
                                </span>
                                {!hasMultiple && !showRowIfLabel && (
                                    <div className="flex items-center gap-1 ml-2">
                                        <span className="text-sm font-medium text-[var(--on-surface)] shrink-0">
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
    parameters: { layout: 'padded' },
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

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Empty state — no logic set added yet. Shows only the "+ Add logic set" ghost-primary button. Clicking it transitions to Unconfirmed. */
export const Empty: Story = {
    args: { initialData: unconfirmedSeed, startEmpty: true },
};

/** Initial editing state when a new rule is created. Primary border, surface-container-high background, Cancel + Apply buttons. */
export const Unconfirmed: Story = {
    args: { initialData: unconfirmedSeed },
};

/** Saved and confirmed rule. Outline-variant border, surface-container background, Delete button only. */
export const Confirmed: Story = {
    args: { initialData: confirmedSeed },
};

/** Two or more conditions — AND/OR toggle and row numbering appear. */
export const MultipleConditions: Story = {
    args: { initialData: multiSeed },
};

/** Multiple conditions with OR operator active. */
export const MultipleConditionsOR: Story = {
    args: {
        initialData: { ...multiSeed, id: 'set-4', operator: 'OR' },
    },
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
    },
};

/** With Show/Hide action bar and custom header — pattern used by DisplayLogicSet. */
export const WithActionBar: Story = {
    args: {
        initialData: unconfirmedSeed,
        actionValue: 'show',
        headerContent: (
            <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[var(--on-surface)]">Question 3</span>
                <span className="text-sm font-bold text-primary">IF</span>
            </div>
        ),
    },
};

/** Transparent background — used when the LogicSet is nested inside another container. */
export const TransparentBackground: Story = {
    args: {
        initialData: unconfirmedSeed,
        transparentBackground: true,
    },
};

/** Inline "if" label per row — pattern used by SkipLogicSet. */
export const WithRowIfLabel: Story = {
    args: {
        initialData: {
            id: 'set-6',
            operator: 'AND',
            conditions: [{ id: 'cond-1', questionId: 'Q1', operator: 'equals', value: '18–34' }],
            isConfirmed: false,
        },
        showRowIfLabel: true,
    },
};

/** Overview of all states stacked. */
export const AllStates: Story = {
    render: () => (
        <div className="flex flex-col gap-6 w-[480px]">
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">Unconfirmed</p>
                <LogicSetDisplay initialData={unconfirmedSeed} />
            </div>
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">Confirmed</p>
                <LogicSetDisplay initialData={confirmedSeed} />
            </div>
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">Multiple Conditions (AND)</p>
                <LogicSetDisplay initialData={multiSeed} />
            </div>
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">With Error</p>
                <LogicSetDisplay
                    initialData={{ ...confirmedSeed, id: 'set-err' }}
                    issues={['Referenced question was deleted.']}
                />
            </div>
            <div>
                <p className="text-xs text-[var(--on-surface-variant)] uppercase tracking-wider mb-2">With Action Bar</p>
                <LogicSetDisplay
                    initialData={unconfirmedSeed}
                    actionValue="show"
                    headerContent={
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-[var(--on-surface)]">Question 3</span>
                            <span className="text-sm font-bold text-primary">IF</span>
                        </div>
                    }
                />
            </div>
        </div>
    ),
};
