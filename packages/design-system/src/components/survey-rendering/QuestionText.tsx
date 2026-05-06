'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from '../ui/icons';

export interface QuestionTextProps {
  label: React.ReactNode;
  required?: boolean;
  error?: string;
  htmlFor?: string;
  className?: string;
}

const QuestionText = React.forwardRef<HTMLDivElement, QuestionTextProps>(
  ({ label, required = false, error, htmlFor, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col w-full', className)}
        style={{ gap: 'var(--survey-margin)', marginBottom: 'var(--survey-margin)' }}
      >
        {error && (
          <p className="flex items-center gap-1 text-xs font-survey font-survey-regular text-survey-destructive w-full">
            <AlertCircle className="flex-shrink-0 w-4 h-4" aria-hidden="true" />
            {error}
          </p>
        )}
        <label
          htmlFor={htmlFor}
          className="text-survey-body font-survey-regular font-survey w-full text-survey-foreground"
        >
          {label}
          {required && <span className="text-survey-destructive ml-0.5">*</span>}
        </label>
      </div>
    );
  },
);

QuestionText.displayName = 'QuestionText';

export { QuestionText };
