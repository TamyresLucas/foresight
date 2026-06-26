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
  /** Called with the id of the file whose remove/cancel button was pressed. */
  onFileRemove?: (id: string) => void;
  /** Drag-and-drop prompt shown above the inline browse link. */
  label?: React.ReactNode;
  /** Text of the inline "browse" link within the drop zone. */
  buttonLabel?: React.ReactNode;
  /** Native accept attribute, e.g. "image/*". */
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  error?: string;
  /** When false, hides the file size and shows only the percentage/Completed label in the same muted style. Defaults to true. */
  showFileSize?: boolean;
}

const KB = 1024;

function formatSize(bytes: number): string {
  if (bytes < KB) return `${bytes}B`;
  if (bytes < KB * KB) return `${Math.round(bytes / KB)}KB`;
  return `${(bytes / (KB * KB)).toFixed(1)}MB`;
}

function fileState(progress: number | undefined): 'empty' | 'uploading' | 'completed' {
  const p = progress ?? 0;
  if (p >= 100) return 'completed';
  if (p > 0) return 'uploading';
  return 'empty';
}

// ─── Individual file row ──────────────────────────────────────────────────────

interface FileRowProps {
  file: FileUploadFile;
  disabled?: boolean;
  onRemove: (id: string) => void;
  showFileSize?: boolean;
}

const FileRow = ({ file, disabled, onRemove, showFileSize = true }: FileRowProps) => {
  const progress = file.progress ?? 0;
  const state = fileState(progress);
  const isImage = Boolean(file.previewUrl);

  const iconName = isImage ? 'image' : state === 'uploading' ? 'upload_file' : 'description';

  // Derive "XMB of YMB" for uploading state from progress + total size.
  const uploadedBytes = Math.round((progress / 100) * file.size);
  const progressText = `${formatSize(uploadedBytes)} of ${formatSize(file.size)}`;

  const needsBar = state === 'uploading' || state === 'empty';

  return (
    <div
      className={cn(
        'relative flex items-center gap-3 bg-transparent overflow-hidden',
        state === 'completed'
          ? 'border border-survey-border-interactive'
          : 'border border-survey-border-muted',
        needsBar ? 'px-3 pt-3 pb-4' : 'px-3 py-3',
      )}
      style={{ borderRadius: 'var(--component-button-radius)' }}
    >
      {/* Icon */}
      <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-survey-sm bg-survey-muted-background">
        {file.previewUrl ? (
          <img
            src={file.previewUrl}
            alt=""
            className="h-10 w-10 rounded-survey-sm object-cover"
          />
        ) : (
          <Icon
            name={iconName}
            fill={false}
            size={22}
            className="text-survey-foreground"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Text */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="truncate text-survey-body font-survey-semibold text-survey-foreground">
          {file.name}
        </span>

        {state === 'completed' ? (
          <span className="flex items-center gap-1.5 text-survey-body font-survey-regular text-survey-muted-foreground">
            {showFileSize && <span>{formatSize(file.size)}</span>}
            <Icon
              name="check_circle"
              fill
              size={16}
              className="shrink-0 text-[hsl(var(--brand-secondary))]"
              aria-hidden="true"
            />
            <span className={cn(showFileSize ? 'font-survey-semibold' : 'font-survey-regular', 'text-[hsl(var(--brand-secondary))]')}>
              Completed
            </span>
          </span>
        ) : (
          <span className="text-survey-body font-survey-regular text-survey-muted-foreground">
            {showFileSize && (
              <>{state === 'uploading' ? progressText : formatSize(file.size)}{' • '}</>
            )}
            <span className={showFileSize ? 'font-survey-semibold text-survey-foreground' : ''}>
              {Math.round(progress)}%
            </span>
          </span>
        )}
      </div>

      {/* Action button — same bordered-square style for both states;
          delete uses destructive color, cancel uses muted */}
      <button
        type="button"
        aria-label={state === 'completed' ? `Remove ${file.name}` : `Cancel upload for ${file.name}`}
        disabled={disabled}
        onClick={() => onRemove(file.id)}
        className={cn(
          'shrink-0 inline-flex items-center justify-center rounded-survey-sm transition-colors',
          'hover:bg-survey-muted-background',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-selected',
          'disabled:cursor-not-allowed disabled:opacity-50',
          state === 'completed'
            ? 'text-survey-destructive'
            : 'text-survey-muted-foreground',
        )}
        style={{ width: 28, height: 28 }}
      >
        {state === 'completed'
          ? <Icon name="delete" fill={false} size={16} aria-hidden="true" />
          : <X className="h-3.5 w-3.5" />
        }
      </button>

      {/* Progress bar — pinned to the bottom edge of the card */}
      {needsBar && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-survey-muted-background">
          <div
            className="h-full bg-survey-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

// ─── Drop zone ────────────────────────────────────────────────────────────────

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      files,
      onFilesAdded,
      onFileRemove,
      label = 'Drag & drop your file here',
      buttonLabel = 'Browse files',
      accept,
      multiple = true,
      disabled = false,
      error,
      showFileSize = true,
      className,
      ...props
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
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
          style={{ padding: '32px 16px', gap: '10px', borderRadius: 'var(--component-button-radius)' }}
        >
          <Icon
            name="cloud_upload"
            fill={false}
            size={32}
            className="text-survey-foreground"
            aria-hidden="true"
          />

          <span className="text-survey-body font-survey-regular text-survey-foreground">
            {label} or
          </span>

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
              'relative overflow-hidden after:absolute after:inset-0 after:bg-transparent hover:after:bg-survey-rendering-overlay after:transition-colors after:pointer-events-none',
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
              e.target.value = '';
            }}
          />
        </div>

        {/* File list */}
        {renderedFiles.length > 0 && (
          <div className="flex flex-col" style={{ gap: 'var(--survey-margin, 8px)' }}>
            {renderedFiles.map((file) => (
              <FileRow
                key={file.id}
                file={file}
                disabled={disabled}
                onRemove={handleRemove}
                showFileSize={showFileSize}
              />
            ))}
          </div>
        )}

        {error && (
          <p className="text-survey-body font-survey-regular text-survey-destructive">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FileUpload.displayName = 'FileUpload';

export { FileUpload };
