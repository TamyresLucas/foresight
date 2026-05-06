'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface QuestionFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const QuestionField = React.forwardRef<HTMLDivElement, QuestionFieldProps>(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col w-full', className)}
        style={{
          marginBottom: 'var(--survey-margin)',
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

QuestionField.displayName = 'QuestionField';

export { QuestionField };
