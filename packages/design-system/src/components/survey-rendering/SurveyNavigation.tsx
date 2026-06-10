'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export interface SurveyNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  onNext?: () => void;
  onPrevious?: () => void;
  onQuit?: () => void;
  onSubmit?: () => void;
  onSeeResponses?: () => void;
  showNext?: boolean;
  showPrevious?: boolean;
  showQuit?: boolean;
  showSubmit?: boolean;
  showSeeResponses?: boolean;
  nextLabel?: string;
  previousLabel?: string;
  quitLabel?: string;
  submitLabel?: string;
  seeResponsesLabel?: string;
  focused?: 'next' | 'previous' | 'quit' | 'submit' | 'see-responses' | null;
  className?: string;
}

const SurveyNavigation = React.forwardRef<HTMLDivElement, SurveyNavigationProps>(
  (
    {
      onNext,
      onPrevious,
      onQuit,
      onSubmit,
      onSeeResponses,
      showNext = false,
      showPrevious = false,
      showQuit = false,
      showSubmit = false,
      showSeeResponses = false,
      nextLabel = 'Next',
      previousLabel = 'Previous',
      quitLabel = 'Quit',
      submitLabel = 'Submit',
      seeResponsesLabel = 'See Responses',
      focused = null,
      className,
      ...props
    },
    ref,
  ) => {
    // Utility for the 10% black hover overlay
    const hoverOverlayClass = "relative overflow-hidden after:absolute after:inset-0 after:bg-transparent hover:after:bg-survey-rendering-overlay after:transition-colors after:pointer-events-none";

    const renderFocusedWrapper = (id: string, children: React.ReactNode) => {
      // Wrapper for concentric focus. Triggers on :focus-visible within its scope OR the 'focused' prop.
      const isManuallyFocused = focused === id;
      const groupId = `group/survey-nav-${id}`;
      return (
        <div 
          className={cn(
            "rounded-[calc(var(--radius)+2px)] p-[2px] border-2 w-fit transition-all bg-transparent border-transparent",
            isManuallyFocused && "border-survey-border-interactive",
            `group-has-[:focus-visible]/${groupId}:border-survey-border-interactive`,
            groupId
          )}
        >
          {children}
        </div>
      );
    };

    const hasMiddleContent = showQuit || showSeeResponses;

    return (
      <div
        ref={ref}
        className={cn('flex items-center w-full min-h-[40px]', className)}
        {...props}
      >
        {/* Left Section (1/3) */}
        <div className="flex-1 flex justify-start">
          {showPrevious && renderFocusedWrapper('previous', (
            <Button
              variant="outline"
              onClick={onPrevious}
              style={{ borderRadius: 'var(--component-button-radius)' }}
              className={cn(
                "border border-survey-primary text-survey-primary text-survey-body h-10 px-6 hover:bg-transparent flex items-center gap-2 transition-all focus-visible:outline-none",
                hoverOverlayClass
              )}
            >
              <ChevronLeft size={18} />
              {previousLabel}
            </Button>
          ))}
        </div>

        {/* Middle Section (1/3) - Always absolute center of the parent */}
        <div className="flex-[2] flex justify-center">
          {hasMiddleContent && (
            <div className="flex gap-4 items-center">
              {showSeeResponses && renderFocusedWrapper('see-responses', (
                <Button
                  variant="outline"
                  onClick={onSeeResponses}
                  style={{ borderRadius: 'var(--component-button-radius)' }}
                  className={cn(
                    "border border-survey-border-interactive text-foreground text-survey-body h-10 px-6 hover:bg-transparent transition-all focus-visible:outline-none",
                    hoverOverlayClass
                  )}
                >
                  {seeResponsesLabel}
                </Button>
              ))}

              {showQuit && renderFocusedWrapper('quit', (
                <Button
                  variant="outline"
                  onClick={onQuit}
                  style={{ borderRadius: 'var(--component-button-radius)' }}
                  className={cn(
                    "border border-survey-border-interactive text-foreground text-survey-body h-10 px-6 hover:bg-transparent flex items-center gap-2 transition-all focus-visible:outline-none",
                    hoverOverlayClass
                  )}
                >
                  <LogOut size={18} />
                  {quitLabel}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Right Section (1/3) */}
        <div className="flex-1 flex justify-end gap-4">
          {showNext && renderFocusedWrapper('next', (
            <Button
              onClick={onNext}
              style={{ borderRadius: 'var(--component-button-radius)' }}
              className={cn(
                "bg-survey-primary text-primary-foreground text-survey-body h-10 px-8 shadow-sm hover:bg-survey-primary flex items-center gap-2 transition-all border-none focus-visible:outline-none",
                hoverOverlayClass
              )}
            >
              {nextLabel}
              <ChevronRight size={18} />
            </Button>
          ))}

          {showSubmit && renderFocusedWrapper('submit', (
            <Button
              onClick={onSubmit}
              style={{ borderRadius: 'var(--component-button-radius)' }}
              className={cn(
                "bg-survey-primary text-primary-foreground text-survey-body h-10 px-8 shadow-sm hover:bg-survey-primary transition-all border-none focus-visible:outline-none",
                hoverOverlayClass
              )}
            >
              {submitLabel}
            </Button>
          ))}
        </div>
      </div>
    );
  },
);

SurveyNavigation.displayName = 'SurveyNavigation';

export { SurveyNavigation };
