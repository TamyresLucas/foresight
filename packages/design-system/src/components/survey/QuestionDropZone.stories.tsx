import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { cn } from '../../lib/utils';

// ---------------------------------------------------------------------------
// NOTE: QuestionDropZone.tsx does not yet exist as a standalone implemented file.
// It is referenced in SurveyBlock (_reference/) but has not been created.
// This file documents the agreed API via a local visual mock.
//
// Inferred props:
//   isActive?: boolean              — true when a drag is hovering over this zone
//   position?: 'before' | 'after'  — where the dropped item will be inserted
//   onDrop?: () => void             — fired when item is released on the zone
// ---------------------------------------------------------------------------

interface QuestionDropZoneMockProps {
    /** Whether a draggable item is currently hovering over this zone. */
    isActive?: boolean;
    /**
     * Positional context — `before` renders the zone above an adjacent card;
     * `after` renders it below. Mainly affects screen-reader label and the
     * decorative guide line direction shown in the overview story.
     */
    position?: 'before' | 'after';
    /** Called when the user releases a dragged item over the zone. */
    onDrop?: () => void;
}

function QuestionDropZoneMock({ isActive = false, position = 'after', onDrop }: QuestionDropZoneMockProps) {
    return (
        <div
            aria-label={`Drop zone — insert ${position === 'before' ? 'before' : 'after'} this question`}
            role="region"
            onDrop={(e) => {
                e.preventDefault();
                onDrop?.();
            }}
            onDragOver={(e) => e.preventDefault()}
            className={cn(
                'w-full flex items-center justify-center transition-all duration-150',
                // Height expands when active to give a clear target
                isActive ? 'h-10 py-1' : 'h-3 py-0.5',
            )}
        >
            <div
                className={cn(
                    'w-full rounded transition-all duration-150',
                    isActive
                        ? 'h-8 border-2 border-dashed border-primary bg-primary/5 flex items-center justify-center gap-2 text-primary'
                        : 'h-0.5 bg-border-ui/40',
                )}
            >
                {isActive && (
                    <>
                        <span className="material-symbols-rounded text-base leading-none select-none">
                            {position === 'before' ? 'move_up' : 'move_down'}
                        </span>
                        <span className="text-xs font-medium">
                            Drop {position === 'before' ? 'before' : 'after'} this question
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

// Fake question card used only in contextual overview stories
function FakeQuestionCard({ label }: { label: string }) {
    return (
        <div className="w-full px-4 py-3 rounded-lg border border-border-ui bg-card flex items-center gap-3">
            <span className="material-symbols-rounded text-base text-muted-foreground select-none">drag_indicator</span>
            <span className="text-sm text-foreground font-medium">{label}</span>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
    title: 'Survey Builder/Survey Canvas/QuestionDropZone',
    component: QuestionDropZoneMock,
    parameters: {
        docs: {
            description: {
                component: `
**QuestionDropZone** is a thin drop-target strip that appears between question cards in a **SurveyBlock** during a drag operation. At rest it is nearly invisible (a 2 px separator line). When a dragged item hovers over it, it expands to a highlighted 32 px zone that clearly communicates where the item will be inserted.

> **Note:** \`QuestionDropZone.tsx\` has not been implemented yet — this stories file documents the agreed API and visual states.

### States

| \`isActive\` | Visual |
|-------------|--------|
| \`false\` (default) | 2 px muted separator line — nearly invisible |
| \`true\` | 32 px dashed primary border + tinted background + directional icon |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`isActive\` | \`boolean\` | \`false\` | Whether a drag is hovering over this zone |
| \`position\` | \`'before' \\| 'after'\` | \`'after'\` | Where the item will be inserted relative to the adjacent card |
| \`onDrop\` | \`() => void\` | — | Fired when the user releases the dragged item |
                `,
            },
        },
    },
    tags: ['autodocs'],
    args: {
        isActive: false,
        position: 'after',
        onDrop: fn(),
    },
    decorators: [
        (Story) => (
            <div className="w-[460px] p-4">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof QuestionDropZoneMock>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Default — the zone at rest. Renders as a near-invisible 2 px separator between question cards. */
export const Default: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Default',
    args: {
        isActive: false,
        position: 'after',
    },
};

/** Active — a question or toolbox item is being dragged over this zone. The strip expands and highlights to invite a drop. */
export const Active: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Active',
    args: {
        isActive: true,
        position: 'after',
    },
};

/** Before — zone positioned above a card, indicating the dropped item will be inserted before it. */
export const Before: Story = {
    name: 'Before (position)',
    render: (args) => (
        <div className="w-[460px] p-4 space-y-0">
            <QuestionDropZoneMock {...args} position="before" />
            <FakeQuestionCard label="How satisfied are you with our service?" />
        </div>
    ),
    args: {
        isActive: true,
        position: 'before',
        onDrop: fn(),
    },
};

/** After — zone positioned below a card, indicating the dropped item will be inserted after it. */
export const After: Story = {
    name: 'After (position)',
    render: (args) => (
        <div className="w-[460px] p-4 space-y-0">
            <FakeQuestionCard label="How satisfied are you with our service?" />
            <QuestionDropZoneMock {...args} position="after" />
        </div>
    ),
    args: {
        isActive: true,
        position: 'after',
        onDrop: fn(),
    },
};

/** Overview — all states shown in context with adjacent question cards. */
export const Overview: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Overview',
    render: () => (
        <div className="w-[460px] p-4 space-y-0">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Inactive (rest)</p>
            <FakeQuestionCard label="Question 1" />
            <QuestionDropZoneMock isActive={false} position="after" onDrop={fn()} />
            <FakeQuestionCard label="Question 2" />

            <div className="mt-6 mb-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Active — insert before</p>
            </div>
            <QuestionDropZoneMock isActive position="before" onDrop={fn()} />
            <FakeQuestionCard label="Question 3" />

            <div className="mt-6 mb-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Active — insert after</p>
            </div>
            <FakeQuestionCard label="Question 4" />
            <QuestionDropZoneMock isActive position="after" onDrop={fn()} />
        </div>
    ),
};
