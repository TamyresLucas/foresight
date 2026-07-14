'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface RunningTotalRow {
  value: string;
  label: string;
}

export interface RunningTotalColumn {
  value: string;
  label: string;
}

export interface RunningTotalValue {
  [rowValue: string]: {
    [columnValue: string]: string;
  };
}

export interface RunningTotalProps {
  rows: RunningTotalRow[];
  columns: RunningTotalColumn[];
  value?: RunningTotalValue;
  defaultValue?: RunningTotalValue;
  onChange?: (value: RunningTotalValue) => void;
  className?: string;
}

const RunningTotalInput = React.forwardRef<
  HTMLInputElement,
  {
    selected?: boolean;
    focused?: boolean;
    className?: string;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>
>(({ className, selected, focused = false, onBlur, ...props }, ref) => {
  const [internalSelected, setInternalSelected] = React.useState(false);
  const isSelected = selected ?? internalSelected;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setInternalSelected(false);
    onBlur?.(e);
  };

  return (
    <div
      className="flex flex-col group/survey-input"
      onPointerDown={() => setInternalSelected(true)}
      data-selected={isSelected}
    >
      <div className="rounded-[calc(var(--radius)+2px)] transition-all bg-transparent">
        <div
          className={cn(
            'flex h-10 px-2 py-1.5 items-center justify-center rounded-lg border bg-transparent transition-all',
            'border-survey-border-interactive',
            'hover:bg-survey-muted-background',
            'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:shadow-[inset_0_0_0_1px_hsl(var(--survey-border-selected))]',
            // Focus halo as a ring (box-shadow): paint-only, so the field keeps
            // its default-state dimensions — a border/padding halo would grow it.
            'group-has-[:focus-visible]/survey-input:border group-has-[:focus-visible]/survey-input:!shadow-none',
            'group-has-[:focus-visible]/survey-input:ring-2 group-has-[:focus-visible]/survey-input:ring-offset-2 group-has-[:focus-visible]/survey-input:ring-offset-survey-background group-has-[:focus-visible]/survey-input:ring-survey-border-interactive',
            'group-data-[selected=true]/survey-input:group-has-[:focus-visible]/survey-input:ring-survey-border-selected',
            focused && 'border !shadow-none ring-2 ring-offset-2 ring-offset-survey-background ring-survey-border-interactive',
            focused && isSelected && 'ring-survey-border-selected',
          )}
        >
          <input
            type="text"
            inputMode="numeric"
            className={cn(
              'w-full bg-transparent text-right text-survey-body font-survey-regular focus-visible:outline-none text-survey-foreground font-survey',
              className,
            )}
            ref={ref}
            onBlur={handleBlur}
            {...props}
          />
        </div>
      </div>
    </div>
  );
});
RunningTotalInput.displayName = 'RunningTotalInput';

const RunningTotal = React.forwardRef<HTMLDivElement, RunningTotalProps>(
  ({ rows, columns, value, defaultValue, onChange, className }, ref) => {
    const [internalValue, setInternalValue] = React.useState<RunningTotalValue>(
      defaultValue ?? {},
    );
    const currentValue = value ?? internalValue;

    const handleCellChange = (rowValue: string, colValue: string, inputValue: string) => {
      const next = {
        ...currentValue,
        [rowValue]: {
          ...currentValue[rowValue],
          [colValue]: inputValue,
        },
      };
      if (value === undefined) {
        setInternalValue(next);
      }
      onChange?.(next);
    };

    const getColumnTotal = (colValue: string): number => {
      return rows.reduce((sum, row) => {
        const cellValue = currentValue[row.value]?.[colValue];
        const num = Number(cellValue);
        return sum + (isNaN(num) ? 0 : num);
      }, 0);
    };

    return (
      <div
        ref={ref}
        className={cn('flex flex-col w-full', className)}
        style={{ gap: 'var(--survey-margin)' }}
      >
        {/* Column headers */}
        <div className="flex items-end" style={{ gap: 'var(--survey-margin)' }}>
          <div className="shrink-0 w-[100px]" />
          {columns.map((col) => (
            <div
              key={col.value}
              className="flex-1 min-w-[100px] max-w-[130px]"
            >
              <span className="block text-center text-survey-foreground text-survey-body font-survey-regular font-survey">
                {col.label}
              </span>
            </div>
          ))}
        </div>

        {/* Data rows */}
        {rows.map((row) => (
          <div
            key={row.value}
            className="flex items-center"
            style={{ gap: 'var(--survey-margin)' }}
          >
            <div className="shrink-0 w-[100px]">
              <span
                className={cn(
                  'text-survey-foreground text-survey-body font-survey-regular font-survey leading-none',
                )}
              >
                {row.label}
              </span>
            </div>
            {columns.map((col) => (
              <div key={col.value} className="flex-1 min-w-[100px] max-w-[130px]">
                <RunningTotalInput
                  value={currentValue[row.value]?.[col.value] ?? ''}
                  onChange={(e) => handleCellChange(row.value, col.value, e.target.value)}
                  aria-label={`${row.label} - ${col.label}`}
                />
              </div>
            ))}
          </div>
        ))}

        {/* Total row */}
        <div
          className="flex items-center"
          style={{ gap: 'var(--survey-margin)' }}
        >
          <div className="shrink-0 w-[100px]" />
          {columns.map((col) => (
            <div key={col.value} className="flex-1 min-w-[100px] max-w-[130px]">
              <div
                className="flex h-10 items-center justify-end px-2 rounded-lg bg-survey-primary transition-all"
              >
                <span className="text-survey-primary-foreground text-survey-body font-survey-semibold font-survey">
                  {getColumnTotal(col.value)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

RunningTotal.displayName = 'RunningTotal';

export { RunningTotal, RunningTotalInput };
