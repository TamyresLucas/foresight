import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ToolboxItem } from "../ui/toolbox-item";
import {
  RadioButtonIcon,
  CheckboxIcon,
  TextAnswerIcon,
  DescriptionIcon,
  PageBreakIcon,
} from "../ui/toolbox-icons";
import { Plus } from "../ui/icons";
import { iconMap, questionGroups } from "../../data/toolbox-items";

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
  title: "Survey Builder/Build/ToolboxItem",
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
  tags: ["autodocs"],
  args: {
    label: "Multiple Choice",
    icon: RadioButtonIcon,
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
// Stories — Core Types
// ---------------------------------------------------------------------------

/** Multiple Choice — the primary question type. */
export const MultipleChoice: Story = {
  args: {
    label: "Multiple Choice",
    icon: RadioButtonIcon,
  },
};

/** Boolean — Yes/No or True/False toggle. */
export const Boolean: Story = {
  args: {
    label: "Boolean (Yes/No)",
    icon: CheckboxIcon,
  },
};

/** Open Text — multi-line or single-line text input. */
export const OpenText: Story = {
  args: {
    label: "Open Text",
    icon: TextAnswerIcon,
  },
};

/** Description — read-only content block (no question). */
export const Description: Story = {
  args: {
    label: "Description",
    icon: DescriptionIcon,
  },
};

/** Page Break — visual separator for survey pagination. */
export const PageBreak: Story = {
  args: {
    label: "Page Break",
    icon: PageBreakIcon,
  },
};

// ---------------------------------------------------------------------------
// Stories — Interactive States
// ---------------------------------------------------------------------------

/** Dragging — the item is currently being moved. Opacity drops and background switches to primary. */
export const Dragging: Story = {
  args: {
    label: "Multiple Choice",
    icon: RadioButtonIcon,
    isDragged: true,
  },
};

/** Disabled — the item cannot be interacted with (e.g. if a limit is reached). */
export const Disabled: Story = {
  args: {
    label: "Multiple Choice",
    icon: RadioButtonIcon,
    isEnabled: false,
  },
};

// ---------------------------------------------------------------------------
// Overview — all states stacked
// ---------------------------------------------------------------------------

/** All States — an overview of the core 5 types stacked together. */
export const AllStates: Story = {
  args: {
    label: "Multiple Choice",
    icon: RadioButtonIcon,
  },
  render: () => (
    <div className="flex flex-col">
      <ToolboxItem
        label="Multiple Choice"
        icon={RadioButtonIcon}
        onDragStart={fn()}
        onDragEnd={fn()}
        onClick={fn()}
      />
      <ToolboxItem
        label="Boolean"
        icon={CheckboxIcon}
        onDragStart={fn()}
        onDragEnd={fn()}
        onClick={fn()}
      />
      <ToolboxItem
        label="Open Text"
        icon={TextAnswerIcon}
        onDragStart={fn()}
        onDragEnd={fn()}
        onClick={fn()}
      />
      <ToolboxItem
        label="Description"
        icon={DescriptionIcon}
        onDragStart={fn()}
        onDragEnd={fn()}
        onClick={fn()}
      />
      <ToolboxItem
        label="Page Break"
        icon={PageBreakIcon}
        onDragStart={fn()}
        onDragEnd={fn()}
        onClick={fn()}
      />
    </div>
  ),
};

/** Full Library — rendering every available item grouped by category. */
export const FullLibrary: Story = {
  args: {
    label: "Multiple Choice",
    icon: RadioButtonIcon,
  },
  render: () => (
    <div className="flex flex-col max-h-[600px] overflow-y-auto">
      {(questionGroups as any).map((group: any) => (
        <div key={group.category}>
          <div className="px-4 py-2 bg-muted/50 border-y border-border-ui">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              {group.category}
            </span>
          </div>
          {group.items.map((type: string) => {
            const Icon = (iconMap as any)[type];
            return (
              <ToolboxItem
                key={type}
                label={type}
                icon={Icon || RadioButtonIcon}
                onDragStart={fn()}
                onDragEnd={fn()}
                onClick={fn()}
                endAction={
                  <button className="p-1 rounded hover:bg-primary/10 text-primary transition-colors">
                    <Plus className="h-4 w-4" />
                  </button>
                }
              />
            );
          })}
        </div>
      ))}
    </div>
  ),
};
