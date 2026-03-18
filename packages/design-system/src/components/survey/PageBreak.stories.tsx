import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '../../lib/utils';

// ---------------------------------------------------------------------------
// PageBreak component
// ---------------------------------------------------------------------------

interface PageBreakProps {
    pageNumber: number;
    pageName?: string;
    isSelected?: boolean;
    isDragging?: boolean;
}

const PageBreak = ({ pageNumber, pageName, isSelected, isDragging }: PageBreakProps) => {
    const label = pageName || `Page ${pageNumber}`;

    return (
        <div
            className={cn(
                'relative py-4 group cursor-grab',
                isDragging && 'opacity-50',
                isSelected && 'rounded-md ring-2 ring-primary ring-offset-2',
            )}
        >
            {/* Drag handle — left, visible on hover */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-rounded text-xl text-muted-foreground select-none">drag_indicator</span>
            </div>

            {/* Rule + pill */}
            <div className="flex items-center gap-4 text-muted-foreground w-full">
                <div className="flex-grow h-px bg-border" />

                <div className="flex-shrink-0 flex items-stretch border border-border rounded-full overflow-hidden hover:border-primary/50 transition-colors">
                    {/* Page number badge */}
                    <span className="bg-muted px-3 py-1.5 text-xs font-bold text-foreground border-r border-border">
                        P{pageNumber}
                    </span>
                    {/* Page name */}
                    <span className="text-xs font-semibold text-foreground bg-card hover:bg-muted/50 px-3 py-1.5 transition-colors cursor-text">
                        {label}
                    </span>
                </div>

                <div className="flex-grow h-px bg-border" />
            </div>

            {/* Overflow actions — right, visible on hover */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 rounded hover:bg-muted text-muted-foreground">
                    <span className="material-symbols-rounded text-base leading-none">more_horiz</span>
                </button>
            </div>
        </div>
    );
};

// ---------------------------------------------------------------------------
// Surrounding question cards (for context)
// ---------------------------------------------------------------------------

const ContextCard = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
    <div className="p-4 rounded-lg border border-border bg-card grid items-start gap-x-4 grid-cols-[auto_1fr]">
        <div className="flex items-center justify-center w-5 text-muted-foreground">
            <span className="material-symbols-rounded text-base select-none">drag_indicator</span>
        </div>
        <div>
            <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wide">{id}</span>
                <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">{label}</span>
            </div>
            {children}
        </div>
    </div>
);

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta = {
    title: 'Survey Builder/Survey Canvas/PageBreak',
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
**PageBreak** is a separator element rendered between question cards to divide a block into multiple pages.

When a respondent fills out the survey, each page break creates a new "next" button — questions before the break appear on one screen, questions after it on the next.

### Anatomy

\`\`\`
  ── [drag handle]  ─────────── P2  Page Name ─────────── [⋯ actions]
\`\`\`

- **Left rule**: thin \`bg-border\` line
- **Pill**: rounded container with a \`P{n}\` number badge + editable page name
- **Right rule**: same thin line
- **Drag handle**: visible on hover (left side)
- **Actions menu**: visible on hover (right side) — options include Move to new block, Delete

### States

| State | Visual |
|-------|--------|
| Default | Subdued horizontal rule + pill |
| Hovered | Pill border shifts to \`border-primary/50\`, handles appear |
| Selected | \`ring-2 ring-primary ring-offset-2\` around the row |
| Dragging | \`opacity-50\` |
| Named page | Custom label shown instead of "Page N" |
`,
            },
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="max-w-2xl py-4">
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Default — page break between two question cards
// ---------------------------------------------------------------------------

export const Default: Story = {
    name: 'Default',
    render: () => (
        <div className="space-y-1">
            <ContextCard id="Q1" label="Multiple Choice">
                <p className="text-sm text-foreground">How satisfied are you with our service?</p>
            </ContextCard>
            <PageBreak pageNumber={2} />
            <ContextCard id="Q2" label="Text Entry">
                <p className="text-sm text-foreground">Please describe your experience in detail.</p>
            </ContextCard>
        </div>
    ),
};

// ---------------------------------------------------------------------------
// Named page break
// ---------------------------------------------------------------------------

export const Named: Story = {
    name: 'Named Page Break',
    render: () => (
        <div className="space-y-1">
            <ContextCard id="Q3" label="Multiple Choice">
                <p className="text-sm text-foreground">Which industry do you work in?</p>
            </ContextCard>
            <PageBreak pageNumber={2} pageName="Product Feedback" />
            <ContextCard id="Q4" label="Checkbox">
                <p className="text-sm text-foreground">Which features do you use most?</p>
            </ContextCard>
        </div>
    ),
};

// ---------------------------------------------------------------------------
// Selected
// ---------------------------------------------------------------------------

export const Selected: Story = {
    name: 'Selected',
    render: () => (
        <div className="space-y-1">
            <ContextCard id="Q1" label="Multiple Choice">
                <p className="text-sm text-foreground">How satisfied are you with our service?</p>
            </ContextCard>
            <PageBreak pageNumber={2} pageName="Follow-up" isSelected />
            <ContextCard id="Q2" label="Text Entry">
                <p className="text-sm text-foreground">Please describe your experience in detail.</p>
            </ContextCard>
        </div>
    ),
};

// ---------------------------------------------------------------------------
// Dragging
// ---------------------------------------------------------------------------

export const Dragging: Story = {
    name: 'Dragging',
    render: () => (
        <div className="space-y-1">
            <ContextCard id="Q1" label="Multiple Choice">
                <p className="text-sm text-foreground">How satisfied are you with our service?</p>
            </ContextCard>
            <PageBreak pageNumber={2} isDragging />
            <ContextCard id="Q2" label="Text Entry">
                <p className="text-sm text-foreground">Please describe your experience in detail.</p>
            </ContextCard>
        </div>
    ),
};

// ---------------------------------------------------------------------------
// Multiple page breaks — three-page survey
// ---------------------------------------------------------------------------

export const MultiplePageBreaks: Story = {
    name: 'Multiple Page Breaks',
    render: () => (
        <div className="space-y-1">
            <ContextCard id="Q1" label="Description">
                <p className="text-sm text-foreground leading-relaxed">
                    Welcome to our annual satisfaction survey. This will take about 3 minutes.
                </p>
            </ContextCard>
            <ContextCard id="Q2" label="Multiple Choice">
                <p className="text-sm text-foreground">How satisfied are you with our service?</p>
            </ContextCard>
            <PageBreak pageNumber={2} pageName="Product Usage" />
            <ContextCard id="Q3" label="Checkbox">
                <p className="text-sm text-foreground">Which features do you use most often?</p>
            </ContextCard>
            <ContextCard id="Q4" label="Multiple Choice">
                <p className="text-sm text-foreground">How often do you use the product?</p>
            </ContextCard>
            <PageBreak pageNumber={3} pageName="Demographics" />
            <ContextCard id="Q5" label="Multiple Choice">
                <p className="text-sm text-foreground">What is your role?</p>
            </ContextCard>
            <ContextCard id="Q6" label="Text Entry">
                <p className="text-sm text-foreground">Any final comments?</p>
            </ContextCard>
        </div>
    ),
};
