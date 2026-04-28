'use client';

import * as React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export interface Language {
  code: string;
  label: string;
}

export interface LanguageSelectorProps {
  languages?: Language[];
  selectedLanguage?: string;
  onLanguageChange?: (code: string) => void;
  className?: string;
  focused?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

const LanguageSelector = React.forwardRef<HTMLButtonElement, LanguageSelectorProps>(
  (
    {
      languages = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'es', label: 'Español' },
      ],
      selectedLanguage = 'en',
      onLanguageChange,
      className,
      focused = false,
      selected = false,
      disabled = false,
    },
    ref,
  ) => {
    const currentLanguage = languages.find((lang) => lang.code === selectedLanguage) || languages[0];

    // Utility for the 10% black hover overlay (matching SurveyNavigation)
    const hoverOverlayClass = "relative overflow-hidden after:absolute after:inset-0 after:bg-transparent hover:after:bg-survey-rendering-overlay after:transition-colors after:pointer-events-none";

    const isInteractive = !disabled;
    const isSelectedAndFocused = selected && focused && isInteractive;
    const isSelectedAndNotFocused = selected && !focused && isInteractive;

    const renderFocusedWrapper = (children: React.ReactNode) => {
      if ((!focused && !disabled) && !isSelectedAndFocused) {
         // Auto-focus logic
         return (
           <div 
             className={cn(
               "rounded-[calc(var(--radius)+2px)] p-[2px] border-2 w-fit transition-all group/survey-lang bg-transparent border-transparent",
               "group-has-[:focus-visible]/survey-lang:border-survey-border-interactive",
               selected && "group-has-[:focus-visible]/survey-lang:border-survey-border-selected",
             )}
           >
             {children}
           </div>
         );
      }

      if (disabled) return children;

      return (
        <div 
          className={cn(
            "rounded-[calc(var(--radius)+2px)] p-[2px] border-2 w-fit transition-all",
            focused ? "border-survey-border-interactive" : "border-transparent",
            isSelectedAndFocused && "border-survey-border-selected"
          )}
        >
          {children}
        </div>
      );
    };

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild disabled={disabled}>
          {renderFocusedWrapper(
            <Button
              ref={ref}
              variant="outline"
              disabled={disabled}
              style={{ borderRadius: 'var(--component-button-radius)' }}
              className={cn(
                "text-survey-foreground bg-transparent h-10 px-4 flex items-center gap-3 font-survey font-survey-regular text-survey-body w-fit justify-between hover:bg-transparent hover:text-survey-foreground transition-all",
                // Focused state: 1px inner, 2px outer (handled by wrapper)
                focused
                  ? (isSelectedAndFocused ? "border border-survey-border-selected" : "border border-survey-border-interactive")
                  : (isSelectedAndNotFocused ? "border-2 border-survey-border-selected" : "border border-survey-border-interactive"),
                // Auto-focus override
                !focused && !selected && "group-has-[:focus-visible]/survey-lang:border",
                !focused && selected && "group-has-[:focus-visible]/survey-lang:border",
                disabled && "border border-survey-border-muted pointer-events-none !opacity-100 !text-survey-foreground",
                isInteractive && hoverOverlayClass,
                className
              )}
            >
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-survey-foreground" />
                <span>{currentLanguage.label}</span>
              </div>
              {!disabled && <ChevronDown size={16} className="text-survey-foreground" />}
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[var(--radix-dropdown-menu-trigger-width)] bg-survey-background border border-survey-border-muted font-survey shadow-sm">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => onLanguageChange?.(lang.code)}
              className={cn(
                "cursor-pointer focus:bg-survey-rendering-overlay focus:text-survey-foreground transition-colors",
                selectedLanguage === lang.code && "font-bold text-survey-primary"
              )}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
);

LanguageSelector.displayName = 'LanguageSelector';

export { LanguageSelector };
