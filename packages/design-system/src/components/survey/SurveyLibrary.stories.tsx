import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { cn } from "../../lib/utils";
import { ChevronRight } from "../ui/icons";

// ---------------------------------------------------------------------------
// Visual mock — matches SidebarLibrarySurvey (_reference/SidebarLibrarySurvey.tsx)
//
// Props:
//   id: string
//   title: string
//   isDragged?: boolean     (default: false)  — opacity-30 when dragging
//   isExpanded?: boolean    (default: false)  — chevron rotates 90°
//   onDragStart?: (e) => void
//   onDragEnd?: (e) => void
//   onClick?: () => void                      — fires when chevron button is clicked
// ---------------------------------------------------------------------------

interface SidebarLibrarySurveyMockProps {
  id: string;
  title: string;
  isDragged?: boolean;
  isExpanded?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  onClick?: () => void;
}

function SidebarLibrarySurveyMock({
  title,
  isDragged = false,
  isExpanded = false,
  onDragStart,
  onDragEnd,
  onClick,
}: SidebarLibrarySurveyMockProps) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={cn(
        "flex items-center justify-between px-4 h-[40px] border-b border-border-ui transition-all bg-card group cursor-grab hover:bg-muted",
        isDragged && "opacity-30",
      )}
    >
      {/* Icon + label */}
      <div className="flex items-center flex-grow truncate">
        {/* Icon slot — swaps to drag_indicator on hover */}
        <div className="relative w-5 h-5 mr-3 flex-shrink-0 flex items-center justify-center">
          <span
            className={cn(
              "material-symbols-rounded text-base leading-none select-none text-primary",
              "transition-opacity duration-200 group-hover:opacity-0",
            )}
          >
            content_paste
          </span>
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100 text-muted-foreground">
            <span className="material-symbols-rounded text-base leading-none select-none">
              drag_indicator
            </span>
          </div>
        </div>

        <span className="text-sm text-foreground truncate">{title}</span>
      </div>

      {/* End action — chevron button, always visible (not hover-gated) */}
      <div className="flex-shrink-0 ml-2">
        <button
          className="p-1 rounded hover:bg-primary/10 text-muted-foreground transition-colors"
          aria-label={isExpanded ? "Collapse survey" : "Expand survey"}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          <ChevronRight
            className={cn(
              "text-base leading-none transition-transform duration-200",
              isExpanded && "rotate-90",
            )}
          />
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta = {
  title: "Survey Builder/Build/SurveyLibrary",
  component: SidebarLibrarySurveyMock,
  parameters: {
    docs: {
      description: {
        component: `
**SurveyLibrary** is a draggable row in the survey library sidebar. Each row represents a saved survey that can be dragged into the canvas or expanded to reveal its contents. It extends the \`ToolboxItem\` shape — the question-type icon is replaced by a \`content_paste\` (clipboard) icon, and a \`ChevronRight\` button is always visible as the trailing action.

### Anatomy

- **Icon** — \`content_paste\` (clipboard) symbol; swaps to \`drag_indicator\` on hover to signal drag capability
- **Label** — survey title, truncated if long
- **Chevron button** — trailing action that expands/collapses the survey; rotates 90° when \`isExpanded\` is true

### States

| State | Visual |
|-------|--------|
| Default | Card background, clipboard icon, title, chevron pointing right |
| Expanded (\`isExpanded=true\`) | Chevron rotated 90° (pointing down) |
| Dragging (\`isDragged=true\`) | \`opacity-30\` — row fades to indicate it is being moved |
| Long title | Title text truncates with ellipsis at the container boundary |
                `,
      },
    },
  },
  tags: ["autodocs"],
  args: {
    id: "survey-1",
    title: "Customer Satisfaction Survey",
    isDragged: false,
    isExpanded: false,
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
} satisfies Meta<typeof SidebarLibrarySurveyMock>;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** Default — a survey row in its resting state. The chevron points right indicating it is collapsed. */
export const Default: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Default",
  args: {
    title: "Customer Satisfaction Survey",
  },
};

/** Expanded — the chevron rotates 90° to point downward, indicating the survey tree is open. */
export const Expanded: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Expanded",
  args: {
    title: "Customer Satisfaction Survey",
    isExpanded: true,
  },
};

/** Long Title — a survey title that exceeds the available width and is truncated with an ellipsis. */
export const LongTitle: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Long Title",
  args: {
    title:
      "Q4 2024 Annual Employee Engagement & Wellbeing Survey — Extended Edition",
  },
};

/** Dragged — the row is currently being dragged. Opacity drops to 30% to leave a ghost placeholder in the sidebar. */
export const Dragged: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "Dragged",
  args: {
    title: "Customer Satisfaction Survey",
    isDragged: true,
  },
};

// ---------------------------------------------------------------------------
// Overview — all states stacked
// ---------------------------------------------------------------------------

/** All states — all four states rendered together as they might appear in the sidebar. */
export const AllStates: Story = {
  // eslint-disable-next-line storybook/no-redundant-story-name
  name: "All States",
  render: () => (
    <div className="w-64 border border-border-ui rounded-lg overflow-hidden">
      <SidebarLibrarySurveyMock
        id="survey-1"
        title="Customer Satisfaction Survey"
        onDragStart={fn()}
        onDragEnd={fn()}
        onClick={fn()}
      />
      <SidebarLibrarySurveyMock
        id="survey-2"
        title="Employee Engagement Survey"
        isExpanded
        onDragStart={fn()}
        onDragEnd={fn()}
        onClick={fn()}
      />
      <SidebarLibrarySurveyMock
        id="survey-3"
        title="Q4 2024 Annual Wellbeing & Culture Pulse Survey — Extended Edition"
        onDragStart={fn()}
        onDragEnd={fn()}
        onClick={fn()}
      />
      <SidebarLibrarySurveyMock
        id="survey-4"
        title="NPS Survey"
        isDragged
        onDragStart={fn()}
        onDragEnd={fn()}
        onClick={fn()}
      />
    </div>
  ),
};
