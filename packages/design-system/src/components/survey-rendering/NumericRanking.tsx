'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface NumericRankingItem {
  value: string;
  label: string;
}

export interface NumericRankingValue {
  [itemValue: string]: string;
}

export interface NumericRankingProps {
  items: NumericRankingItem[];
  value?: NumericRankingValue;
  defaultValue?: NumericRankingValue;
  onChange?: (value: NumericRankingValue) => void;
  className?: string;
}

const NumericRankingInput = React.forwardRef<
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
            'flex w-[72px] h-10 px-2 py-1.5 items-center justify-center rounded-lg border bg-transparent transition-all',
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
              'w-full bg-transparent text-left text-survey-body font-survey-regular focus-visible:outline-none text-survey-foreground font-survey',
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
NumericRankingInput.displayName = 'NumericRankingInput';

const NumericRanking = React.forwardRef<HTMLDivElement, NumericRankingProps>(
  ({ items, value, defaultValue, onChange, className }, ref) => {
    const [internalValue, setInternalValue] = React.useState<NumericRankingValue>(
      defaultValue ?? {},
    );
    const currentValue = value ?? internalValue;

    const handleItemChange = (itemValue: string, inputValue: string) => {
      const next = { ...currentValue, [itemValue]: inputValue };
      if (value === undefined) {
        setInternalValue(next);
      }
      onChange?.(next);
    };

    return (
      <div
        ref={ref}
        className={cn('flex flex-col w-full', className)}
        style={{ gap: 'var(--survey-margin)' }}
      >
        {items.map((item) => (
          <div key={item.value} className="flex items-center gap-3">
            <NumericRankingInput
              value={currentValue[item.value] ?? ''}
              onChange={(e) => handleItemChange(item.value, e.target.value)}
              aria-label={`Rank for ${item.label}`}
            />
            <span
              className={cn(
                'text-survey-foreground text-survey-body font-survey-regular font-survey leading-none',
              )}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  },
);

NumericRanking.displayName = 'NumericRanking';

export { NumericRanking, NumericRankingInput };
