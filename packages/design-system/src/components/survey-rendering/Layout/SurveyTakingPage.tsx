'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { SurveyPageShell, type SurveyPageShellProps } from './SurveyPageShell';
import { SurveyCompletionBar } from '../SurveyCompletionBar';
import { SurveyNavigation, type SurveyNavigationProps } from '../SurveyNavigation';
import { SurveyErrorMessage } from '../SurveyErrorMessage';

export interface SurveyTakingPageProps extends Omit<SurveyPageShellProps, 'children'> {
  /** Question content rendered between the progress bar and the navigation. */
  children: React.ReactNode;
  /** Completion percentage (0–100). Progress bar is hidden when omitted. */
  progress?: number;
  /** Show a generic required-fields error banner above the questions. */
  showError?: boolean;
  /** Props forwarded to the bottom SurveyNavigation. Navigation hidden when omitted. */
  navigation?: SurveyNavigationProps;
  /** Applied to the questions wrapper. */
  questionsClassName?: string;
}

/**
 * Canonical survey-taking page chrome for app use: header, optional progress
 * bar, error banner, a questions slot, and the bottom navigation — all on the
 * shared `SurveyPageShell`. Apps supply their rendered questions as `children`.
 */
const SurveyTakingPage = React.forwardRef<HTMLDivElement, SurveyTakingPageProps>(
  ({ children, progress, showError = false, navigation, questionsClassName, ...shellProps }, ref) => {
    return (
      <SurveyPageShell {...shellProps} ref={ref} contentClassName="flex flex-col gap-12">
        {typeof progress === 'number' && <SurveyCompletionBar value={progress} variant="basic" />}

        {showError && <SurveyErrorMessage />}

        <div
          className={cn('flex flex-col', questionsClassName)}
          style={{ gap: 'var(--survey-question-spacing, 48px)' }}
        >
          {children}
        </div>

        {navigation && (
          <div className="pt-8 border-t border-border-decorative">
            <SurveyNavigation {...navigation} />
          </div>
        )}
      </SurveyPageShell>
    );
  },
);

SurveyTakingPage.displayName = 'SurveyTakingPage';

export { SurveyTakingPage };
