'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  SurveyPageShell,
  SurveyPrimaryButton,
  SurveySecondaryButton,
  type SurveyPageShellProps,
} from './SurveyPageShell';
import { QuestionText } from '../QuestionText';
import { TextAnswer } from '../TextAnswer';
import { Description } from '../Description';

export interface SurveyAuthenticationPageProps
  extends Omit<SurveyPageShellProps, 'children' | 'contentClassName'> {
  /** Heading shown above the code field. */
  title?: string;
  /** Supporting copy. `{email}` is replaced with `maskedEmail` when present. */
  description?: string;
  /** Masked address the code was sent to, e.g. "j***@example.com". */
  maskedEmail?: string;
  /** Label for the code field. */
  codeLabel?: string;
  /** Placeholder for the code field. */
  codePlaceholder?: string;
  /** Controlled code value. */
  code?: string;
  /** Called as the respondent types the code. */
  onCodeChange?: (value: string) => void;
  /** Called when the respondent submits the code (app forwards to last page). */
  onSubmit?: () => void;
  /** CTA label. */
  submitLabel?: string;
  /** Called when the respondent requests a new code. Hidden when omitted. */
  onResend?: () => void;
  /** Resend link label. */
  resendLabel?: string;
  /** Validation error shown above the field. */
  error?: string;
}

/**
 * Authentication page for respondents returning after a dropped session. We
 * sent a code to their already-configured email; once entered, the app forwards
 * them to the last accessed survey page (handled via `onSubmit`).
 * Presentational / controlled.
 */
const SurveyAuthenticationPage = React.forwardRef<HTMLDivElement, SurveyAuthenticationPageProps>(
  (
    {
      title = 'Verify it’s you',
      description = 'We sent a verification code to {email}. Enter it below to continue where you left off.',
      maskedEmail = 'your registered email',
      codeLabel = 'Verification code',
      codePlaceholder = 'Enter your code',
      code,
      onCodeChange,
      onSubmit,
      submitLabel = 'Continue',
      onResend,
      resendLabel = 'Resend code',
      error,
      ...shellProps
    },
    ref,
  ) => {
    const resolvedDescription = description.replace('{email}', maskedEmail);
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
          <Description
            title={title}
            description={resolvedDescription}
            className={isMobile ? 'text-center' : undefined}
          />

          <div className="flex flex-col">
            <QuestionText htmlFor="survey-auth-code" label={codeLabel} required error={error} />
            <TextAnswer
              id="survey-auth-code"
              placeholder={codePlaceholder}
              value={code}
              onChange={(e) => onCodeChange?.(e.target.value)}
            />
          </div>

          {isMobile ? (
            <>
              <SurveyPrimaryButton type="submit" className="w-full">
                {submitLabel}
              </SurveyPrimaryButton>
              {onResend && (
                <button
                  type="button"
                  onClick={onResend}
                  className="text-survey-body font-survey font-survey-regular text-survey-primary hover:underline underline-offset-2 focus-visible:outline-none"
                >
                  {resendLabel}
                </button>
              )}
            </>
          ) : (
            <div className="flex justify-end gap-4">
              {onResend && (
                <SurveySecondaryButton type="button" onClick={onResend}>
                  {resendLabel}
                </SurveySecondaryButton>
              )}
              <SurveyPrimaryButton type="submit">{submitLabel}</SurveyPrimaryButton>
            </div>
          )}
        </form>
      </SurveyPageShell>
    );
  },
);

SurveyAuthenticationPage.displayName = 'SurveyAuthenticationPage';

export { SurveyAuthenticationPage };
