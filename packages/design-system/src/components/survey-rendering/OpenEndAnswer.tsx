'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface OpenEndAnswerProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  selected?: boolean;
  focused?: boolean;
}

const OpenEndAnswer = React.forwardRef<HTMLTextAreaElement, OpenEndAnswerProps>(
  ({ className, selected, focused = false, onBlur, ...props }, ref) => {
    const [internalSelected, setInternalSelected] = React.useState(false);
    const isSelected = selected ?? internalSelected;

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
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
              'rounded-lg border bg-transparent transition-all w-full',
              'border-survey-border-interactive',
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
            <textarea
              className={cn(
                'w-full min-h-[100px] bg-transparent px-2 py-1.5 text-survey-body font-survey-regular focus-visible:outline-none text-survey-foreground font-survey resize-none',
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

OpenEndAnswer.displayName = 'OpenEndAnswer';

export { OpenEndAnswer };
