import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from './ui/dropzone';

const meta = {
    title: 'ShadCn/Form Elements/Dropzone',
    component: Dropzone,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['file', 'image'],
            description: 'Type of files accepted. "image" restricts to image uploads.',
        },
        dropMessage: {
            control: 'text',
            description: 'Custom message shown in the drop area.',
        },
    },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'file',
        dropMessage: 'Drop files here or click to upload',
    },
};

export const ImageUpload: Story = {
    args: {
        type: 'image',
        dropMessage: 'Drop an image here or click to upload',
    },
};

export const CustomMessage: Story = {
    args: {
        type: 'file',
        dropMessage: 'Drag & drop your CSV file here',
    },
};

export const Disabled: Story = {
    args: {
        type: 'file',
        disabled: true,
        dropMessage: 'Upload disabled',
    },
};
