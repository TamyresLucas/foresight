import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './ui/icon';

const meta = {
    title: 'ShadCn/Data Display/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'Material Symbols icon name (e.g. "check", "close", "search").',
        },
        size: {
            control: 'number',
            description: 'Icon size in pixels. Defaults to 24.',
        },
        fill: {
            control: 'boolean',
            description: 'When true, renders the filled variant of the icon.',
        },
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'check_circle',
        size: 24,
        fill: false,
    },
};

export const Filled: Story = {
    args: {
        name: 'check_circle',
        size: 24,
        fill: true,
    },
};

export const Large: Story = {
    args: {
        name: 'star',
        size: 48,
        fill: false,
    },
};

export const Small: Story = {
    args: {
        name: 'info',
        size: 16,
        fill: false,
    },
};

export const Destructive: Story = {
    args: {
        name: 'delete',
        size: 24,
        fill: false,
        className: 'text-destructive',
    },
};
