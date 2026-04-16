import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './ui/button';
import { Toaster } from './ui/toaster';
import { useToast } from '@/hooks/use-toast';

// Demo wrapper — shows how to use Toaster at root + useToast in components
const ToasterDemo = ({ variant }: { variant?: 'default' | 'success' | 'warning' | 'destructive' | 'info' }) => {
    const { toast } = useToast();
    return (
        <>
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: variant ? `${variant.charAt(0).toUpperCase() + variant.slice(1)} notification` : 'Notification',
                        description: 'This is an example toast message.',
                        variant: variant,
                    });
                }}
            >
                Show {variant ?? 'default'} toast
            </Button>
            <Toaster />
        </>
    );
};

const meta = {
    title: 'ShadCn/Feedback/Toaster',
    component: ToasterDemo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'success', 'warning', 'destructive', 'info'],
            description: 'Toast variant to display when the button is clicked.',
        },
    },
} satisfies Meta<typeof ToasterDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
    },
};
