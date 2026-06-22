'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';
import { Button } from '../ui/button';

export interface FileUploadFile {
  /** Stable id used as the React key and passed to onFileRemove. */
  id: string;
  name: string;
  /** Size in bytes. */
  size: number;
  /** Upload progress, 0–100. Defaults to 0. */
  progress?: number;
  /** Optional thumbnail/preview image URL shown on the left of the row. */
  previewUrl?: string;
}

export interface FileUploadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Controlled list of uploaded files. Omit to use internal state. */
  files?: FileUploadFile[];
  /** Called with the newly selected/dropped files. */
  onFilesAdded?: (files: File[]) => void;
  /** Called with the id of the file whose remove (X) button was pressed. */
  onFileRemove?: (id: string) => void;
  /** Drag-and-drop prompt. */
  label?: React.ReactNode;
  /** Browse button text. */
  buttonLabel?: React.ReactNode;
  /** Native accept attribute, e.g. "image/*". */
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  error?: string;
}

const KB = 1024;

function formatSize(bytes: number): string {
  if (bytes < KB) return `${bytes}B`;
  if (bytes < KB * KB) return `${Math.round(bytes / KB)}KB`;
  return `${(bytes / (KB * KB)).toFixed(1)}MB`;
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      files,
      onFilesAdded,
      onFileRemove,
      label = 'Drag and drop files here',
      buttonLabel = 'Browse files',
      accept,
      multiple = true,
      disabled = false,
      error,
      className,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    // Shared 10% black hover overlay used by SurveyNavigation's buttons.
    const hoverOverlayClass =
      'relative overflow-hidden after:absolute after:inset-0 after:bg-transparent hover:after:bg-survey-rendering-overlay after:transition-colors after:pointer-events-none';
    const [isDragging, setIsDragging] = React.useState(false);
    const [internalFiles, setInternalFiles] = React.useState<FileUploadFile[]>([]);

    const isControlled = files !== undefined;
    const renderedFiles = isControlled ? files : internalFiles;

    const handleFiles = (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      const added = Array.from(fileList);
      onFilesAdded?.(added);
      if (!isControlled) {
        setInternalFiles((prev) => [
          ...prev,
          ...added.map((f, i) => ({
            id: `${f.name}-${f.size}-${Date.now()}-${i}`,
            name: f.name,
            size: f.size,
            progress: 0,
            previewUrl: f.type.startsWith('image/')
              ? URL.createObjectURL(f)
              : undefined,
          })),
        ]);
      }
    };

    const handleRemove = (id: string) => {
      onFileRemove?.(id);
      if (!isControlled) {
        setInternalFiles((prev) => prev.filter((f) => f.id !== id));
      }
    };

    const openPicker = () => {
      if (!disabled) inputRef.current?.click();
    };

    return (
      <div
        ref={ref}
        className={cn('flex flex-col w-full font-survey', className)}
        style={{ gap: 'var(--survey-margin, 8px)' }}
        {...props}
      >
        {/* Drop zone */}
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled || undefined}
          aria-invalid={error ? true : undefined}
          onClick={openPicker}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openPicker();
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            if (!disabled) setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            if (!disabled) handleFiles(e.dataTransfer.files);
          }}
          className={cn(
            'flex flex-col items-center justify-center text-center',
            'border-2 border-dashed border-survey-border-interactive bg-transparent transition-colors',
            'focus-visible:outline-none focus-visible:border-survey-border-selected',
            isDragging && 'border-survey-border-selected bg-survey-muted-background',
            error && 'border-survey-destructive',
            disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
          )}
          style={{ padding: '32px 16px', gap: '12px', borderRadius: 'var(--component-button-radius)' }}
        >
          {/* Google Material Symbol — default text color */}
          <Icon
            name="cloud_upload"
            fill={false}
            size={32}
            className="text-survey-foreground"
            aria-hidden="true"
          />
          {/* Prompt — regular weight */}
          <span className="text-survey-body font-survey-regular text-survey-foreground">
            {label}
          </span>
          {/* Mirrors the SurveyNavigation "Next" button: theme-editor radius
              preset, primary fill, and the shared 10% hover overlay. */}
          <Button
            type="button"
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              openPicker();
            }}
            style={{ borderRadius: 'var(--component-button-radius)' }}
            className={cn(
              'bg-survey-primary text-primary-foreground text-survey-body h-10 px-8 shadow-sm hover:bg-survey-primary transition-all border-none focus-visible:outline-none',
              hoverOverlayClass,
            )}
          >
            {buttonLabel}
          </Button>

          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            className="hidden"
            onChange={(e) => {
              handleFiles(e.target.files);
              // Allow re-selecting the same file.
              e.target.value = '';
            }}
          />
        </div>

        {/* Uploaded files */}
        {renderedFiles.length > 0 && (
          <div className="flex flex-col" style={{ gap: 'var(--survey-margin, 8px)' }}>
            {renderedFiles.map((file) => (
              <div
                key={file.id}
                className={cn(
                  'flex items-center gap-3',
                  'border border-survey-border-muted bg-transparent px-3 py-2',
                )}
                style={{ borderRadius: 'var(--survey-radius)' }}
              >
                {file.previewUrl ? (
                  <img
                    src={file.previewUrl}
                    alt=""
                    className="h-8 w-8 shrink-0 rounded-survey-sm object-cover"
                  />
                ) : (
                  <Icon
                    name="description"
                    fill={false}
                    size={24}
                    className="shrink-0 text-survey-foreground"
                    aria-hidden="true"
                  />
                )}

                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-survey-body font-survey-semibold text-survey-foreground">
                    {file.name}
                  </span>
                  <span className="text-survey-body font-survey-regular text-survey-muted-foreground">
                    {formatSize(file.size)}
                  </span>
                </div>

                <span className="shrink-0 text-survey-body font-survey-semibold text-survey-foreground">
                  {Math.round(file.progress ?? 0)}%
                </span>

                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  disabled={disabled}
                  onClick={() => handleRemove(file.id)}
                  className={cn(
                    'shrink-0 inline-flex items-center justify-center rounded-full p-0.5',
                    'text-survey-foreground transition-colors',
                    'hover:bg-survey-muted-background focus-visible:outline-none',
                    'focus-visible:ring-2 focus-visible:ring-survey-border-selected',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                  )}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);

FileUpload.displayName = 'FileUpload';

export { FileUpload };
