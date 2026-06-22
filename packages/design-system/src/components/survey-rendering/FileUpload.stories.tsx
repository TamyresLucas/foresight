import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload, type FileUploadFile } from './FileUpload';

const meta = {
  title: 'Survey Rendering/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-screen max-w-[390px] md:max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty state — drag-and-drop prompt and browse button. */
export const Default: Story = {
  args: {},
};

const uploadedFiles: FileUploadFile[] = [
  { id: 'f1', name: 'Astyanax (1).png', size: 120 * 1024, progress: 0 },
];

/** A file has been added and is shown in the upload list with a remove (X) control. */
export const WithUploadedFile: Story = {
  args: {
    files: uploadedFiles,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'Please upload a file',
  },
};
