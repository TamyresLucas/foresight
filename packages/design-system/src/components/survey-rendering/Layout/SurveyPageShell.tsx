'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../../ui/button';
import { DeviceFrame } from '../../ui/device-frame';
import { LanguageSelector, type Language } from '../LanguageSelector';

// 10% black hover overlay — matches SurveyNavigation's CTAs.
export const surveyButtonHoverOverlay =
  'relative overflow-hidden after:absolute after:inset-0 after:bg-transparent hover:after:bg-survey-rendering-overlay after:transition-colors after:pointer-events-none';

/** Filled primary CTA matching SurveyNavigation's Next/Submit buttons. */
export const SurveyPrimaryButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, style, ...props }, ref) => (
  <Button
    ref={ref}
    style={{ borderRadius: 'var(--component-button-radius)', ...style }}
    className={cn(
      'bg-survey-primary text-primary-foreground text-survey-body h-10 px-8 shadow-sm hover:bg-survey-primary transition-all border-none focus-visible:outline-none',
      surveyButtonHoverOverlay,
      className,
    )}
    {...props}
  />
));
SurveyPrimaryButton.displayName = 'SurveyPrimaryButton';

/** Outline secondary CTA using the survey primary color token (matches the Previous button). */
export const SurveySecondaryButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, style, ...props }, ref) => (
  <Button
    ref={ref}
    variant="outline"
    style={{ borderRadius: 'var(--component-button-radius)', ...style }}
    className={cn(
      'border border-survey-primary text-survey-primary text-survey-body h-10 px-6 hover:bg-transparent transition-all focus-visible:outline-none',
      surveyButtonHoverOverlay,
      className,
    )}
    {...props}
  />
));
SurveySecondaryButton.displayName = 'SurveySecondaryButton';

export interface SurveyPageShellProps {
  /** Drives the desktop / mobile (DeviceFrame) container. */
  viewport?: 'desktop' | 'mobile';
  /** Company name shown on the left of the header. */
  companyName?: string;
  /** Logo image shown on the left of the header instead of the company name. */
  logoSrc?: string;
  /** Alt text for the logo. Falls back to the company name. */
  logoAlt?: string;
  /** Show the header row (company name / logo + language selector). Defaults to true. */
  showHeader?: boolean;
  /** Show the "powered by Voxco" footer. Defaults to true. */
  showFooter?: boolean;
  /** Languages offered in the header language selector. */
  languages?: Language[];
  /** Currently selected language code. */
  selectedLanguage?: string;
  /** Called when the respondent switches language. */
  onLanguageChange?: (code: string) => void;
  /** Applied to the outer viewport container (desktop only). */
  className?: string;
  /** Applied to the content wrapper between header and footer. */
  contentClassName?: string;
  children: React.ReactNode;
}

/** "Survey software powered by Voxco" footer block shared across respondent pages. */
export const SurveyPoweredByFooter = () => (
  <div className="w-full flex justify-center pt-4">
    <p className="text-xs font-normal text-muted-foreground tracking-tight">
      Survey software powered by{' '}
      <a
        href="https://voxco.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-survey-primary transition-colors underline underline-offset-2 decoration-survey-primary/30 hover:decoration-survey-primary font-semibold"
      >
        Voxco
      </a>
    </p>
  </div>
);

/**
 * Shared presentational chrome for respondent-facing survey pages.
 *
 * Renders the company-name + language-selector header, a content slot, and the
 * "powered by Voxco" footer inside a viewport-aware container — a centered
 * column on desktop and a `DeviceFrame` on mobile. All styling uses the survey
 * design tokens so it tracks the active theme.
 */
const SurveyPageShell = React.forwardRef<HTMLDivElement, SurveyPageShellProps>(
  (
    {
      viewport = 'desktop',
      companyName = 'Company name',
      logoSrc,
      logoAlt,
      showHeader = true,
      showFooter = true,
      languages,
      selectedLanguage,
      onLanguageChange,
      className,
      contentClassName,
      children,
    },
    ref,
  ) => {
    const body = (
      <>
        {showHeader && (
          <div className="flex justify-between items-center gap-4">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt ?? companyName}
                className="max-h-12 w-auto object-contain"
              />
            ) : (
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{companyName}</h2>
            )}
            <LanguageSelector
              languages={languages}
              selectedLanguage={selectedLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>
        )}
        <div className={cn('flex-1', contentClassName)}>{children}</div>
        {showFooter && <SurveyPoweredByFooter />}
      </>
    );

    return viewport === 'mobile' ? (
      <div
        ref={ref}
        className="w-full min-h-screen bg-muted/20 overflow-y-auto flex justify-center py-8"
      >
        <DeviceFrame screenClassName="px-4 py-6">
          <div className="flex flex-col min-h-full gap-12">{body}</div>
        </DeviceFrame>
      </div>
    ) : (
      <div ref={ref} className={cn('w-full min-h-screen bg-muted/20 overflow-y-auto p-12', className)}>
        <div className="mx-auto max-w-2xl flex flex-col gap-12 min-h-[calc(100vh-6rem)]">{body}</div>
      </div>
    );
  },
);

SurveyPageShell.displayName = 'SurveyPageShell';

export { SurveyPageShell };
