'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

export type SliderValue = number[];

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  /** Render two thumbs for selecting a range instead of a single value. */
  range?: boolean;
  value?: SliderValue;
  defaultValue?: SliderValue;
  onChange?: (value: SliderValue) => void;
  /** Show the current numeric value(s) above the track. */
  showValue?: boolean;
  /** Optional label rendered beneath the left (min) end of the track. */
  minLabel?: string;
  /** Optional label rendered beneath the right (max) end of the track. */
  maxLabel?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const SurveySlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      range = false,
      value,
      defaultValue,
      onChange,
      showValue = false,
      minLabel,
      maxLabel,
      error,
      disabled = false,
      className,
    },
    ref,
  ) => {
    const resolvedDefault = defaultValue ?? (range ? [min, max] : [min]);

    const [internalValue, setInternalValue] =
      React.useState<SliderValue>(resolvedDefault);
    const currentValue = value ?? internalValue;

    const handleChange = (next: SliderValue) => {
      if (disabled) return;
      if (value === undefined) {
        setInternalValue(next);
      }
      onChange?.(next);
    };

    const thumbCount = range ? 2 : 1;

    return (
      <div className={cn('flex w-full flex-col', className)} style={{ gap: 'var(--survey-margin)' }}>
        <SliderPrimitive.Root
          ref={ref}
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onValueChange={handleChange}
          disabled={disabled}
          aria-invalid={!!error || undefined}
          className={cn(
            'relative flex w-full touch-none select-none items-center',
            showValue && 'mt-7',
            disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
          )}
        >
          <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-survey-md bg-survey-border-muted">
            <SliderPrimitive.Range className="absolute h-full rounded-survey-sm bg-survey-border-selected" />
          </SliderPrimitive.Track>

          {Array.from({ length: thumbCount }, (_, i) => (
            <SliderPrimitive.Thumb
              key={i}
              aria-label={
                range ? (i === 0 ? 'Minimum value' : 'Maximum value') : 'Value'
              }
              className={cn(
                'relative block h-4 w-4 rounded-full border-2 bg-survey-background outline-none transition-[box-shadow,border-color] focus:outline-none',
                error ? 'border-survey-destructive' : 'border-survey-border-selected',
                disabled
                  ? 'cursor-not-allowed'
                  : cn(
                      'cursor-pointer',
                      // Hover, focused, and selected (clicked) states show a soft
                      // outer halo at 30% of the survey primary token around the
                      // picker. Using :focus (not :focus-visible) means a mouse
                      // click also shows it and it persists until blur. The
                      // default state (idle) shows only the inner border.
                      'hover:ring-8 hover:ring-[hsl(var(--survey-primary)_/_0.3)]',
                      'focus:border-survey-border-selected focus:ring-8 focus:ring-[hsl(var(--survey-primary)_/_0.3)]',
                    ),
              )}
            >
              {showValue && (
                <span
                  className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 text-survey-foreground text-survey-body font-survey-semibold font-survey leading-none"
                  aria-hidden="true"
                >
                  {currentValue[i]}
                </span>
              )}
            </SliderPrimitive.Thumb>
          ))}
        </SliderPrimitive.Root>

        {(minLabel || maxLabel) && (
          <div className="flex items-center justify-between text-survey-muted-foreground text-survey-body font-survey-regular font-survey leading-none">
            <span>{minLabel}</span>
            <span>{maxLabel}</span>
          </div>
        )}
      </div>
    );
  },
);

SurveySlider.displayName = 'SurveySlider';

export { SurveySlider };
