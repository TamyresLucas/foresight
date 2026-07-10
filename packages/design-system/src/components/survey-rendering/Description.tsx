'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface DescriptionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The heading shown above the paragraph. */
  title: React.ReactNode;
  /** Rich text / paragraph content displayed to the respondent. */
  description?: React.ReactNode;
}

const Description = React.forwardRef<HTMLDivElement, DescriptionProps>(
  ({ title, description, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-2 w-full', className)} {...props}>
        <h1 className="text-survey-heading font-[family-name:var(--brand-font-header)] font-[number:var(--brand-font-weight-header)] leading-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground text-survey-body font-survey font-survey-regular">
            {description}
          </p>
        )}
      </div>
    );
  },
);

Description.displayName = 'Description';

export { Description };
