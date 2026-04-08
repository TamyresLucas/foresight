import type { Meta, StoryObj } from '@storybook/react';
import { TableRowActions } from './ui/table-row-actions';

const meta = {
    title: 'ShadCn/Data Display/TableRowActions',
    component: TableRowActions,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TableRowActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleAction: Story = {
    args: {
        actions: [
            {
                label: 'Open',
                icon: 'open_in_new',
                onClick: () => alert('Open clicked'),
            },
        ],
    },
};

export const MultipleActions: Story = {
    args: {
        actions: [
            {
                label: 'Edit',
                icon: 'edit',
                onClick: () => alert('Edit clicked'),
            },
            {
                label: 'Duplicate',
                icon: 'content_copy',
                onClick: () => alert('Duplicate clicked'),
            },
            {
                label: 'Archive',
                icon: 'archive',
                onClick: () => alert('Archive clicked'),
            },
        ],
    },
};

export const WithDestructiveAction: Story = {
    args: {
        actions: [
            {
                label: 'Edit',
                icon: 'edit',
                onClick: () => alert('Edit clicked'),
            },
            {
                label: 'Duplicate',
                icon: 'content_copy',
                onClick: () => alert('Duplicate clicked'),
            },
            {
                label: 'Delete',
                icon: 'delete',
                variant: 'destructive',
                separatorBefore: true,
                onClick: () => alert('Delete clicked'),
            },
        ],
    },
};

export const WithDisabledAction: Story = {
    args: {
        actions: [
            {
                label: 'Edit',
                icon: 'edit',
                onClick: () => alert('Edit clicked'),
            },
            {
                label: 'Publish',
                icon: 'publish',
                disabled: true,
                onClick: () => alert('Publish clicked'),
            },
            {
                label: 'Delete',
                icon: 'delete',
                variant: 'destructive',
                separatorBefore: true,
                onClick: () => alert('Delete clicked'),
            },
        ],
    },
};
