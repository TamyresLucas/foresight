import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BuildSidebar } from './BuildSidebar';

const meta = {
    title: 'Survey Builder/Build/BuildSidebar',
    component: BuildSidebar,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
**BuildSidebar** is the left-hand panel in the survey builder. It lets authors discover and drag question types into the canvas.

### Anatomy

- **Header** — "Build" title + \`PanelLeftClose\` collapse button
- **Tab nav** — "Add question" (default active), "Outline", "Library"
- **Filters** — Search input + category Select (defaults to "Basic")
- **Toolbox list** — \`ToolboxItem\` rows filtered by category and search query

### Interactions

| Action | Result |
|--------|--------|
| Click tab | Switches active tab (underline indicator) |
| Type in search | Filters items by label |
| Change category | Switches the item set |
| Click collapse button | Fires \`onCollapse\` callback |
| Click / drag item | Fires \`onItemClick\` / \`onItemDragStart\` |
                `,
            },
        },
    },
    tags: ['autodocs'],
    args: {
        onCollapse: fn(),
        onItemClick: fn(),
        onItemDragStart: fn(),
        onItemDragEnd: fn(),
    },
    decorators: [
        (Story) => (
            <div className="h-[600px] border border-border-ui rounded-lg overflow-hidden shadow-sm">
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof BuildSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default — "Add question" tab active, "Basic" category selected. */
export const Default: Story = {};

/** No items — search query that matches nothing shows an empty state message. */
export const EmptySearch: Story = {
    render: (args) => (
        <div className="h-[600px] border border-border-ui rounded-lg overflow-hidden shadow-sm">
            <BuildSidebar {...args} />
        </div>
    ),
    play: async ({ canvasElement }) => {
        const input = canvasElement.querySelector('input[type="search"]') as HTMLInputElement;
        if (input) {
            input.value = 'zzznomatch';
            input.dispatchEvent(new Event('input', { bubbles: true }));
        }
    },
};
