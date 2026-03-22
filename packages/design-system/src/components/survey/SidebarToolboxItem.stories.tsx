import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ToolboxItem } from '../ui/toolbox-item';
import {
    RadioButtonChecked,
    Square,
    EditNote,
    FormatParagraph,
    InsertPageBreak,
    Plus,
} from '../ui/icons';
import {
    iconMap,
    questionGroups,
} from '../../data/toolbox-items';

// ---------------------------------------------------------------------------
// Stories for the real ToolboxItem component (ui/toolbox-item.tsx).
//
// This file covers:
//   • The 5 core question types used in the survey builder sidebar
//   • The two interactive states: Dragging and Disabled
//   • An All Types overview using all 5 core items stacked
//   • A Full Library overview rendering every item from toolbox-items.ts,
//     grouped by questionGroups category
// ---------------------------------------------------------------------------

const meta = {
    title: 'Survey Builder/Build/SidebarToolboxItem',
    component: ToolboxItem,
    parameters: {
        docs: {
            description: {
                component: `
**ToolboxItem** (\`ui/toolbox-item.tsx\`) is the draggable row in the question-type sidebar. Each row represents one question type the author can drag into the survey canvas or click to insert.

### Anatomy

- **Icon slot** — question-type icon; swaps to \`GripVertical\` on hover (or when \`isDragged\`) to signal drag capability
- **Label** — question type name, truncated if the container is narrow
- **End action** — optional trailing slot (visible on hover only); typically a \`+\` button

### States

| State | \`isDragged\` | \`isEnabled\` | Visual |
|-------|-------------|-------------|--------|
| Default | \`false\` | \`true\` | Card bg, type icon, label |
| Hover | — | \`true\` | Muted bg, \`GripVertical\` replaces icon |
| Dragging | \`true\` | \`true\` | Primary bg, white text, \`GripVertical\` |
| Disabled | \`false\` | \`false\` | Faded icon + label, \`cursor-not-allowed\` |
                `,
            },
        },
    },
    tags: ['autodocs'],
    args: {
        isEnabled: true,
        isDragged: false,
        isDraggable: true,
        onDragStart: fn(),
        onDragEnd: fn(),
        onClick: fn(),
    },
    decorators: [
        (Story) => (
            <div className="w-64 border border-border-ui rounded-lg overflow-hidden">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ToolboxItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Core question type stories
// ---------------------------------------------------------------------------

/** Radio Button — single-select multiple choice question. */
export const Radio: Story = {
    name: 'Radio Button',
    args: {
        icon: RadioButtonChecked,
        label: 'Radio Button',
    },
};

/** Check Box — multi-select multiple choice question. */
export const Checkbox: Story = {
    name: 'Check Box',
    args: {
        icon: Square,
        label: 'Check Box',
    },
};

/** Text Input — open-ended free-text question. */
export const TextEntry: Story = {
    name: 'Text Input',
    args: {
        icon: EditNote,
        label: 'Text Input',
    },
};

/** Description — informational text block; no respondent input. */
export const Description: Story = {
    name: 'Description',
    args: {
        icon: FormatParagraph,
        label: 'Description',
    },
};

/** Page Break — structural separator that creates a new survey page. */
export const PageBreak: Story = {
    name: 'Page Break',
    args: {
        icon: InsertPageBreak,
        label: 'Page Break',
    },
};

// ---------------------------------------------------------------------------
// State stories
// ---------------------------------------------------------------------------

/** Dragging — item is being dragged. Background switches to primary with white text and icon. */
export const Dragging: Story = {
    name: 'Dragging',
    args: {
        icon: RadioButtonChecked,
        label: 'Radio Button',
        isDragged: true,
    },
};

/** Disabled — item is greyed out and cannot be interacted with. */
export const Disabled: Story = {
    name: 'Disabled',
    args: {
        icon: RadioButtonChecked,
        label: 'Radio Button',
        isEnabled: false,
    },
};

/** With End Action — trailing `+` button visible on hover (e.g. for quick-add). */
export const WithEndAction: Story = {
    name: 'With End Action',
    args: {
        icon: RadioButtonChecked,
        label: 'Radio Button',
        endAction: (
            <button
                className="p-1 rounded hover:bg-primary/10 text-primary transition-colors"
                aria-label="Add Radio Button"
                onClick={(e) => e.stopPropagation()}
            >
                <Plus className="text-base leading-none" />
            </button>
        ),
    },
};

// ---------------------------------------------------------------------------
// Overview stories
// ---------------------------------------------------------------------------

/** All Types — the 5 core question types stacked as they appear in the sidebar toolbox. */
export const AllTypes: Story = {
    name: 'All Types',
    render: (args) => (
        <div className="w-64 border border-border-ui rounded-lg overflow-hidden">
            {[
                { icon: RadioButtonChecked, label: 'Radio Button' },
                { icon: Square,             label: 'Check Box' },
                { icon: EditNote,           label: 'Text Input' },
                { icon: FormatParagraph,    label: 'Description' },
                { icon: InsertPageBreak,    label: 'Page Break' },
            ].map(({ icon, label }) => (
                <ToolboxItem
                    key={label}
                    icon={icon}
                    label={label}
                    onDragStart={args.onDragStart}
                    onDragEnd={args.onDragEnd}
                    onClick={args.onClick}
                />
            ))}
        </div>
    ),
};

/** Full Library — every question type from `toolbox-items.ts`, rendered in their category groups. */
export const FullLibrary: Story = {
    name: 'Full Library',
    render: (args) => (
        <div className="w-64 border border-border-ui rounded-lg overflow-hidden">
            {Object.entries(questionGroups).map(([group, names]) => (
                <div key={group}>
                    {/* Group heading */}
                    <div className="px-4 py-1.5 bg-muted/60 border-b border-border-ui">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            {group}
                        </span>
                    </div>
                    {/* Items in group */}
                    {names.map((name) => {
                        const icon = iconMap[name];
                        if (!icon) return null;
                        return (
                            <ToolboxItem
                                key={name}
                                icon={icon}
                                label={name}
                                onDragStart={args.onDragStart}
                                onDragEnd={args.onDragEnd}
                                onClick={args.onClick}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    ),
};
