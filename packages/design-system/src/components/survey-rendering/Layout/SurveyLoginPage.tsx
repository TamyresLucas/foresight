'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { SurveyPageShell, SurveyPrimaryButton, type SurveyPageShellProps } from './SurveyPageShell';
import { QuestionText } from '../QuestionText';
import { TextAnswer } from '../TextAnswer';
import { Description } from '../Description';

export interface SurveyLoginPageProps extends Omit<SurveyPageShellProps, 'children' | 'contentClassName'> {
  /** Heading shown above the PIN field. */
  title?: string;
  /** Supporting copy below the heading. */
  description?: string;
  /** Label for the PIN field. */
  pinLabel?: string;
  /** Placeholder for the PIN field. */
  pinPlaceholder?: string;
  /** Controlled PIN value. */
  pin?: string;
  /** Called as the respondent types the PIN. */
  onPinChange?: (value: string) => void;
  /** Called when the respondent clicks "Take survey". */
  onSubmit?: () => void;
  /** CTA label. */
  submitLabel?: string;
  /** Validation error shown above the field. */
  error?: string;
}

/**
 * Login page for invitation-only surveys. The respondent enters the PIN they
 * were given, can switch language via the header selector, and clicks
 * "Take survey" to begin. Presentational / controlled.
 */
const SurveyLoginPage = React.forwardRef<HTMLDivElement, SurveyLoginPageProps>(
  (
    {
      title = 'Welcome',
      description = 'Enter the PIN from your invitation to begin the survey.',
      pinLabel = 'PIN',
      pinPlaceholder = 'Enter your PIN',
      pin,
      onPinChange,
      onSubmit,
      submitLabel = 'Take survey',
      error,
      ...shellProps
    },
    ref,
  ) => {
    const isMobile = shellProps.viewport === 'mobile';
    return (
      <SurveyPageShell
        {...shellProps}
        ref={ref}
        contentClassName={cn('flex items-center', isMobile ? 'justify-center' : 'justify-start')}
      >
        <form
          className={cn('w-full flex flex-col gap-6 py-8', isMobile ? 'max-w-sm' : 'max-w-md')}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
          }}
        >
          <Description title={title} description={description} className={isMobile ? 'text-center' : undefined} />

          <div className="flex flex-col">
            <QuestionText htmlFor="survey-login-pin" label={pinLabel} required error={error} />
            <TextAnswer
              id="survey-login-pin"
              placeholder={pinPlaceholder}
              value={pin}
              onChange={(e) => onPinChange?.(e.target.value)}
            />
          </div>

          {isMobile ? (
            <SurveyPrimaryButton type="submit" className="w-full">
              {submitLabel}
            </SurveyPrimaryButton>
          ) : (
            <div className="flex justify-end">
              <SurveyPrimaryButton type="submit">{submitLabel}</SurveyPrimaryButton>
            </div>
          )}
        </form>
      </SurveyPageShell>
    );
  },
);

SurveyLoginPage.displayName = 'SurveyLoginPage';

export { SurveyLoginPage };
