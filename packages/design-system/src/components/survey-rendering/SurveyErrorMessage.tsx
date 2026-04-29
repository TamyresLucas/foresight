'use client';

import * as React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SurveyErrorMessageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
}

const SurveyErrorMessage = React.forwardRef<HTMLDivElement, SurveyErrorMessageProps>(
  ({ message = 'Please answer all required questions before proceeding', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'flex items-center gap-3 w-full p-3 border-2 border-survey-destructive',
          className,
        )}
        style={{ borderRadius: 'var(--component-button-radius)' }}
        {...props}
      >
        <AlertCircle
          size={20}
          className="text-survey-destructive flex-shrink-0"
          aria-hidden="true"
        />
        <span className="text-survey-body font-survey-regular text-survey-destructive flex-1">
          {message}
        </span>
      </div>
    );
  },
);

SurveyErrorMessage.displayName = 'SurveyErrorMessage';

export { SurveyErrorMessage };
