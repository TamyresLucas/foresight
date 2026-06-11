'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

/** A single segment in a {@link SurveyFilterTabs} control. */
export interface FilterTabItem {
  /** Stable id reported through `onValueChange`. */
  id: string;
  /** Visible label. */
  label: string;
}

export interface FilterTabsProps {
  /** The segments to render, left to right. */
  tabs: FilterTabItem[];
  /** Controlled selected tab id. */
  value?: string;
  /** Uncontrolled initial tab id (defaults to the first tab). */
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  /** Accessible label for the underlying tablist. */
  'aria-label'?: string;
  className?: string;
}

/**
 * Underlined tab control used to switch between mutually-exclusive views or
 * filters (e.g. "All / Selected / Not selected" in the Lookup Table). Tabs are
 * laid out over a horizontal rule; the active tab is marked by an underline.
 *
 * Styled exclusively with survey design tokens, so it inherits the live theme:
 * the horizontal rule uses `survey-border-muted` (the same outer border token
 * as the multiple-choice options), the active tab uses a `survey-foreground`
 * underline with semibold `survey-foreground` text, and inactive tabs use
 * `survey-muted-foreground`. Add `w-full` to stretch the rule across the
 * container.
 */
const SurveyFilterTabs = React.forwardRef<HTMLDivElement, FilterTabsProps>(
  (
    {
      tabs,
      value,
      defaultValue,
      onValueChange,
      disabled = false,
      'aria-label': ariaLabel,
      className,
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState<string>(
      defaultValue ?? tabs[0]?.id,
    );
    const current = value ?? internalValue;

    const handleSelect = (id: string) => {
      if (disabled) return;
      if (value === undefined) setInternalValue(id);
      onValueChange?.(id);
    };

    return (
      <div
        ref={ref}
        role="tablist"
        aria-label={ariaLabel}
        className={cn(
          // Match the height of the survey search bar (h-10).
          'inline-flex h-10 items-stretch gap-5 border-b border-survey-border-muted font-survey',
          disabled && 'opacity-50',
          className,
        )}
      >
        {tabs.map((tab) => {
          const active = current === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              disabled={disabled}
              onClick={() => handleSelect(tab.id)}
              className={cn(
                // Fill the control height and center the label; pull each tab's
                // underline down 1px so its 2px border sits over the
                // container's horizontal rule.
                'flex items-center -mb-px border-b-2 border-transparent px-0.5 font-survey text-survey-body transition-colors disabled:cursor-not-allowed',
                // Outer focus border shown on keyboard (tab) navigation.
                'rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background',
                active
                  ? 'border-survey-foreground font-survey-semibold text-survey-foreground'
                  : 'font-survey-regular text-survey-muted-foreground hover:text-survey-foreground',
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    );
  },
);

SurveyFilterTabs.displayName = 'SurveyFilterTabs';

export { SurveyFilterTabs };
