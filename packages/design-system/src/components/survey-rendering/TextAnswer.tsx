'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextAnswerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  selected?: boolean;
  focused?: boolean;
  /**
   * Whether the field washes its background on hover. Defaults to true; set
   * to false where a consumer already signals hover elsewhere — e.g. a grid
   * question's row, which highlights on its own.
   */
  hoverEffect?: boolean;
}

const TextAnswer = React.forwardRef<HTMLInputElement, TextAnswerProps>(
  ({ className, selected, focused = false, hoverEffect = true, onBlur, ...props }, ref) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setInternalSelected(false);
      onBlur?.(e);
    };

    return (
      <div
        className="flex flex-col w-full group/survey-input"
        onPointerDown={() => setInternalSelected(true)}
        data-selected={isSelected}
      >
        <div className="rounded-[calc(var(--radius)+2px)] w-full transition-all bg-transparent">
          <div
            className={cn(
              'flex w-full h-10 px-2 py-1.5 items-center gap-[10px] rounded-lg border bg-transparent transition-all',
              'border-survey-border-interactive',
              hoverEffect && 'hover:bg-survey-muted-background',
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
              className={cn(
                'w-full bg-transparent text-survey-body font-survey-regular focus-visible:outline-none text-survey-foreground font-survey',
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
  },
);

TextAnswer.displayName = 'TextAnswer';

export { TextAnswer };
