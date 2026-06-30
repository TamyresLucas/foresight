"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Carousel, type CarouselItem, type CarouselProps } from "./Carousel";
import { RadioGroup, RadioGroupOption } from "./RadioGroup";
import { NPS } from "./NPS";

export interface CarouselQuestionOption {
  value: string;
  label: string;
}

export type CarouselQuestionItem = Omit<CarouselItem, "answered">;

/** Maps each carousel item id to its selected answer value. */
export type CarouselQuestionValue = Record<string, string>;

export interface CarouselQuestionProps
  extends Pick<
    CarouselProps,
    | "navigation"
    | "cardVariant"
    | "cardHeight"
    | "peek"
    | "gap"
    | "minSlideHeight"
    | "maxSlideHeight"
    | "previousLabel"
    | "nextLabel"
  > {
  items: CarouselQuestionItem[];
  /**
   * Which answer input each slide carries:
   * - `radio` pairs the carousel with a single-choice radio list (needs `options`).
   * - `nps` pairs it with an 0–10 NPS scale.
   */
  answerType: "radio" | "nps";
  /** Radio options shown beneath every slide. Required when `answerType` is `radio`. */
  options?: CarouselQuestionOption[];
  /** Anchor label under the low end of the NPS scale. Only used when `answerType` is `nps`. */
  npsLeftLabel?: React.ReactNode;
  /** Anchor label under the high end of the NPS scale. Only used when `answerType` is `nps`. */
  npsRightLabel?: React.ReactNode;
  /** Controlled answers, keyed by item id. */
  value?: CarouselQuestionValue;
  /** Initial answers for the uncontrolled case. */
  defaultValue?: CarouselQuestionValue;
  onValueChange?: (value: CarouselQuestionValue) => void;
  /** Controlled active slide index. */
  index?: number;
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  /**
   * Advance to the next unanswered slide automatically after a selection.
   * Defaults to true so answering feels continuous.
   */
  advanceOnAnswer?: boolean;
  /**
   * Delay (ms) before auto-advancing after a selection, so the chosen answer is
   * first shown in its selected state. Defaults to 500.
   */
  advanceDelayMs?: number;
  className?: string;
}

const CarouselQuestion = React.forwardRef<HTMLDivElement, CarouselQuestionProps>(
  (
    {
      items,
      answerType,
      options,
      npsLeftLabel,
      npsRightLabel,
      value: valueProp,
      defaultValue,
      onValueChange,
      index: indexProp,
      defaultIndex = 0,
      onIndexChange,
      advanceOnAnswer = true,
      advanceDelayMs = 500,
      className,
      navigation = "bullets",
      ...carouselProps
    },
    ref,
  ) => {
    if (answerType === "radio" && (!options || options.length === 0)) {
      throw new Error(
        'CarouselQuestion: `options` is required when `answerType` is "radio".',
      );
    }

    const isValueControlled = valueProp !== undefined;
    const [internalValue, setInternalValue] = React.useState<CarouselQuestionValue>(
      defaultValue ?? {},
    );
    const answers = isValueControlled ? valueProp : internalValue;

    const isIndexControlled = indexProp !== undefined;
    const [internalIndex, setInternalIndex] = React.useState(() =>
      clamp(defaultIndex, 0, Math.max(0, items.length - 1)),
    );
    const current = clamp(
      isIndexControlled ? (indexProp as number) : internalIndex,
      0,
      Math.max(0, items.length - 1),
    );

    // Pending auto-advance timer; lets the chosen answer stay visible in its
    // selected state for `advanceDelayMs` before moving to the next slide.
    const advanceTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const clearAdvanceTimer = React.useCallback(() => {
      if (advanceTimerRef.current !== null) {
        clearTimeout(advanceTimerRef.current);
        advanceTimerRef.current = null;
      }
    }, []);
    // Cancel a pending advance if the component unmounts.
    React.useEffect(() => clearAdvanceTimer, [clearAdvanceTimer]);

    const goTo = React.useCallback(
      (next: number) => {
        // Any navigation (manual or auto) cancels a pending auto-advance.
        clearAdvanceTimer();
        const target = clamp(next, 0, Math.max(0, items.length - 1));
        if (!isIndexControlled) setInternalIndex(target);
        onIndexChange?.(target);
      },
      [isIndexControlled, onIndexChange, items.length, clearAdvanceTimer],
    );

    const handleSelect = React.useCallback(
      (itemId: string, answer: string) => {
        const next = { ...answers, [itemId]: answer };
        if (!isValueControlled) setInternalValue(next);
        onValueChange?.(next);

        if (!advanceOnAnswer) return;

        // Re-answering resets the timer so the latest choice shows for the full
        // delay before advancing.
        clearAdvanceTimer();
        advanceTimerRef.current = setTimeout(() => {
          advanceTimerRef.current = null;
          // Jump to the next still-unanswered slide so answering flows forward.
          const nextUnanswered = items.findIndex(
            (it, i) => i > current && next[it.id] === undefined,
          );
          if (nextUnanswered !== -1) goTo(nextUnanswered);
          else if (current < items.length - 1) goTo(current + 1);
        }, advanceDelayMs);
      },
      [
        answers,
        isValueControlled,
        onValueChange,
        advanceOnAnswer,
        advanceDelayMs,
        items,
        current,
        goTo,
        clearAdvanceTimer,
      ],
    );

    const carouselItems = React.useMemo<CarouselItem[]>(
      () =>
        items.map((it) => ({
          ...it,
          answered: answers[it.id] !== undefined,
        })),
      [items, answers],
    );

    const activeItem = items[current];

    return (
      <div
        ref={ref}
        className={cn("flex w-full flex-col font-survey", className)}
      >
        <Carousel
          items={carouselItems}
          index={current}
          onIndexChange={goTo}
          navigation={navigation}
          {...carouselProps}
        />

        {activeItem && (
          <div className="mt-6 w-full">
            {answerType === "radio" ? (
              <RadioGroup
                key={activeItem.id}
                value={answers[activeItem.id] ?? ""}
                onValueChange={(v) => handleSelect(activeItem.id, v)}
                aria-label="Answer options"
              >
                {options!.map((opt) => (
                  <RadioGroupOption
                    key={opt.value}
                    value={opt.value}
                    label={opt.label}
                  />
                ))}
              </RadioGroup>
            ) : (
              <NPS
                key={activeItem.id}
                value={answers[activeItem.id] ?? undefined}
                onValueChange={(v) => handleSelect(activeItem.id, v)}
                name={activeItem.id}
                leftLabel={npsLeftLabel}
                rightLabel={npsRightLabel}
              />
            )}
          </div>
        )}
      </div>
    );
  },
);
CarouselQuestion.displayName = "CarouselQuestion";

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export { CarouselQuestion };
