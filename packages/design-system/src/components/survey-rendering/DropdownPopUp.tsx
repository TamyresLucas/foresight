'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DropdownPopUpOption {
  value: string;
  label: string;
}

export interface DropdownPopUpProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  options: DropdownPopUpOption[];
  selectedValue?: string;
  onSelect?: (value: string) => void;
  emptyMessage?: string; // default: "No options"
  maxHeight?: number;    // default: 240
  showCheckmark?: boolean; // default: true
}

const DropdownPopUp = React.forwardRef<HTMLDivElement, DropdownPopUpProps>(
  (
    {
      options,
      selectedValue,
      onSelect,
      emptyMessage = 'No options',
      maxHeight = 240,
      showCheckmark = true,
      className,
      ...props
    },
    ref
  ) => {
    const listboxRef = React.useRef<HTMLDivElement>(null);

    // Combine refs safely
    const setRefs = React.useCallback((node: HTMLDivElement | null) => {
      // @ts-ignore
      listboxRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    }, [ref]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, value: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect?.(value);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const optionNodes = Array.from(
          listboxRef.current?.querySelectorAll('[role="option"]') || []
        ) as HTMLElement[];
        const currentIndex = optionNodes.indexOf(e.currentTarget);
        let nextIndex = currentIndex;

        if (e.key === 'ArrowDown') {
          nextIndex = (currentIndex + 1) % optionNodes.length;
        } else {
          nextIndex = (currentIndex - 1 + optionNodes.length) % optionNodes.length;
        }

        optionNodes[nextIndex]?.focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        const firstOption = listboxRef.current?.querySelector('[role="option"]') as HTMLElement;
        firstOption?.focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        const allOptions = Array.from(
          listboxRef.current?.querySelectorAll('[role="option"]') || []
        ) as HTMLElement[];
        allOptions[allOptions.length - 1]?.focus();
      }
    };

    return (
      <div
        ref={setRefs}
        role="listbox"
        className={cn(
          'z-50 min-w-[var(--radix-popper-anchor-width,240px)] overflow-hidden',
          'rounded-survey-md border border-survey-border-muted',
          'bg-survey-background font-survey shadow-sm',
          className
        )}
        {...props}
      >
        <div className="p-1 overflow-y-auto" style={{ maxHeight }}>
          {options.length === 0 ? (
            <div className="py-2 px-3 text-survey-body font-survey-regular text-survey-muted-foreground">
              {emptyMessage}
            </div>
          ) : (
            options.map((option) => {
              const isSelected = option.value === selectedValue;
              return (
                <div
                  key={option.value}
                  role="option"
                  data-selected={isSelected}
                  tabIndex={0}
                  aria-selected={isSelected}
                  onClick={() => onSelect?.(option.value)}
                  onKeyDown={(e) => handleKeyDown(e, option.value)}
                  className={cn(
                    'relative flex w-full cursor-pointer select-none items-center justify-between',
                    'rounded-sm py-2 px-3 outline-none',
                    'text-survey-body font-survey-regular text-survey-foreground',
                    'hover:bg-survey-muted-background',
                    'focus-visible:bg-survey-muted-background',
                    'data-[selected=true]:font-bold data-[selected=true]:text-survey-primary',
                  )}
                >
                  <span>{option.label}</span>
                  {showCheckmark && isSelected && <Check size={16} className="text-survey-primary" />}
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
);

DropdownPopUp.displayName = 'DropdownPopUp';

export { DropdownPopUp };
