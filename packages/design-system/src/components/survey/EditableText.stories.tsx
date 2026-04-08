import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { cn } from '../../lib/utils';

// ---------------------------------------------------------------------------
// NOTE: EditableText.tsx does not yet exist as a standalone implemented file.
// It is referenced in SurveyBlock, QuestionCardBody, and ChoiceListRenderer
// but has not been created. This file documents the agreed API via a local
// visual mock so the design can be validated before implementation.
//
// Inferred props (from usage sites):
//   value: string                        — current text content
//   onChange: (value: string) => void    — committed on blur / Enter
//   placeholder?: string                 — shown when value is empty
//   disabled?: boolean                   — disables editing; read-only mode
//   className?: string                   — additional CSS classes
// ---------------------------------------------------------------------------

interface EditableTextMockProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    /** Story-only: force the editing state on canvas load */
    _forceEditing?: boolean;
}

function EditableTextMock({
    value: initialValue,
    onChange,
    placeholder = 'Click to edit…',
    disabled = false,
    className,
    _forceEditing = false,
}: EditableTextMockProps) {
    const [isEditing, setIsEditing] = useState(_forceEditing);
    const [value, setValue] = useState(initialValue);

    const activate = () => {
        if (!disabled) setIsEditing(true);
    };

    const commit = () => {
        setIsEditing(false);
        onChange(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') commit();
        if (e.key === 'Escape') {
            setValue(initialValue);
            setIsEditing(false);
        }
    };

    if (isEditing) {
        return (
            <input
                autoFocus
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                onBlur={commit}
                onKeyDown={handleKeyDown}
                className={cn(
                    'outline-none bg-transparent w-full border-b-2 border-primary',
                    'placeholder:text-muted-foreground/60',
                    className,
                )}
            />
        );
    }

    return (
        <div
            role="textbox"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
            aria-placeholder={placeholder}
            onClick={activate}
            onFocus={activate}
            className={cn(
                'outline-none break-words min-h-[1.25em]',
                !disabled && 'hover:border-b hover:border-primary/30 cursor-text',
                disabled && 'cursor-default select-text opacity-50',
                !value && 'text-muted-foreground italic',
                className,
            )}
        >
            {value || <span className="italic text-muted-foreground">{placeholder}</span>}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
    title: 'Survey Builder/Survey Canvas/EditableText',
    component: EditableTextMock,
    parameters: {
        docs: {
            description: {
                component: `
**EditableText** is an inline click-to-edit text field used throughout the Survey Canvas for question titles, block headings, and choice labels. It renders as styled text at rest and switches to a native \`<input>\` on click or keyboard focus.

> **Note:** \`EditableText.tsx\` has not been implemented yet — this stories file documents the agreed API and all visual states prior to implementation.

### Behaviour

| State | Trigger | Visual |
|-------|---------|--------|
| **Default** | — | Plain text; subtle underline appears on hover |
| **Editing** | click / Tab | Native input with solid \`border-primary\` underline; commits on blur or Enter; cancels on Escape |
| **Empty** | \`value=""\` | Italic muted placeholder text |
| **Disabled** | \`disabled={true}\` | 50% opacity, \`cursor-default\`, no hover affordance |

### Props

| Prop | Type | Default |
|------|------|---------|
| \`value\` | \`string\` | required |
| \`onChange\` | \`(value: string) => void\` | required |
| \`placeholder\` | \`string\` | \`"Click to edit…"\` |
| \`disabled\` | \`boolean\` | \`false\` |
| \`className\` | \`string\` | — |
                `,
            },
        },
    },
    tags: ['autodocs'],
    args: {
        onChange: fn(),
    },
    argTypes: {
        _forceEditing: { table: { disable: true } },
    },
    decorators: [
        (Story) => (
            <div className="w-[420px] p-6 border border-border-ui rounded-lg bg-card">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof EditableTextMock>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Default — text at rest. Hover to see the underline affordance; click to enter editing mode. */
export const Default: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Default',
    args: {
        value: 'How satisfied are you with our service?',
        className: 'font-semibold text-base text-foreground',
    },
};

/** Editing — the inline input is active with the text selected, ready for the user to type. */
export const Editing: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Editing',
    args: {
        value: 'How satisfied are you with our service?',
        className: 'font-semibold text-base text-foreground',
        _forceEditing: true,
    },
};

/** Empty — no value set. The placeholder text is visible until the user types. */
export const Empty: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Empty',
    args: {
        value: '',
        placeholder: 'Enter question text…',
        className: 'font-semibold text-base text-foreground',
    },
};

/** Long Text — verifies multi-line wrapping within a constrained container. */
export const LongText: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Long Text',
    args: {
        value:
            'On a scale from 1 to 10, how likely are you to recommend our product or service to a friend, colleague, or family member based on your most recent interaction with our support team?',
        className: 'text-base text-foreground',
    },
};

/** Disabled — read-only state used in print mode or locked surveys. No interaction affordances are shown. */
export const Disabled: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Disabled',
    args: {
        value: 'How satisfied are you with our service?',
        disabled: true,
        className: 'font-semibold text-base text-foreground',
    },
};
