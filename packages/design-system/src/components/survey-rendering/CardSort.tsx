"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./Card";
import { DropZone } from "./DropZone";

export type CardSortZone = "source" | "choice1" | "choice2";

export interface CardSortItem {
  id: string;
  label: React.ReactNode;
  group?: string;
}

export type CardSortValue = Record<string, CardSortZone>;

export interface CardSortProps {
  items: CardSortItem[];
  choiceLabels?: [string, string];
  sourceGroups?: string[];
  value?: CardSortValue;
  defaultValue?: CardSortValue;
  onChange?: (next: CardSortValue) => void;
  cardShape?: "square" | "rectangle";
  cardSize?: "sm" | "md" | "lg";
  className?: string;
}

const ZONES: CardSortZone[] = ["source", "choice1", "choice2"];

const DATA_TRANSFER_TYPE = "application/x-cardsort-item";

function buildInitial(items: CardSortItem[], seed?: CardSortValue): CardSortValue {
  const next: CardSortValue = {};
  for (const item of items) {
    next[item.id] = seed?.[item.id] ?? "source";
  }
  return next;
}

const CardSort = React.forwardRef<HTMLDivElement, CardSortProps>(
  (
    {
      items,
      choiceLabels = ["Choice 1", "Choice 2"],
      sourceGroups,
      value,
      defaultValue,
      onChange,
      cardShape = "rectangle",
      cardSize = "md",
      className,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [internal, setInternal] = React.useState<CardSortValue>(() =>
      buildInitial(items, defaultValue),
    );

    React.useEffect(() => {
      if (isControlled) return;
      setInternal((prev) => {
        let changed = false;
        const next: CardSortValue = { ...prev };
        for (const item of items) {
          if (!(item.id in next)) {
            next[item.id] = "source";
            changed = true;
          }
        }
        for (const key of Object.keys(next)) {
          if (!items.find((i) => i.id === key)) {
            delete next[key];
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    }, [items, isControlled]);

    const current: CardSortValue = isControlled
      ? buildInitial(items, value)
      : internal;

    const commit = React.useCallback(
      (next: CardSortValue) => {
        if (!isControlled) setInternal(next);
        onChange?.(next);
      },
      [isControlled, onChange],
    );

    const moveItem = React.useCallback(
      (id: string, zone: CardSortZone) => {
        if (current[id] === zone) return;
        const next = { ...current, [id]: zone };
        commit(next);
        setAnnouncement(
          `Moved "${labelOf(items, id)}" to ${labelForZone(zone, choiceLabels)}.`,
        );
      },
      [current, commit, items, choiceLabels],
    );

    const [dragOverZone, setDragOverZone] = React.useState<CardSortZone | null>(
      null,
    );
    const [announcement, setAnnouncement] = React.useState("");

    const handleDragStart = (id: string) => (e: React.DragEvent) => {
      e.dataTransfer.setData(DATA_TRANSFER_TYPE, id);
      e.dataTransfer.setData("text/plain", id);
      e.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver =
      (zone: CardSortZone) => (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (dragOverZone !== zone) setDragOverZone(zone);
      };

    const handleDragLeave =
      (zone: CardSortZone) => (e: React.DragEvent) => {
        if (e.currentTarget === e.target && dragOverZone === zone) {
          setDragOverZone(null);
        }
      };

    const handleDrop =
      (zone: CardSortZone) => (e: React.DragEvent) => {
        e.preventDefault();
        const id =
          e.dataTransfer.getData(DATA_TRANSFER_TYPE) ||
          e.dataTransfer.getData("text/plain");
        setDragOverZone(null);
        if (!id) return;
        moveItem(id, zone);
      };

    const handleCardKeyDown =
      (id: string) => (e: React.KeyboardEvent) => {
        if (e.key !== "Enter" && e.key !== " ") return;
        e.preventDefault();
        const idx = ZONES.indexOf(current[id] ?? "source");
        const nextZone = ZONES[(idx + 1) % ZONES.length];
        moveItem(id, nextZone);
      };

    const renderCard = (it: CardSortItem) => (
      <Card
        key={it.id}
        shape={cardShape}
        size={cardSize}
        draggable
        onDragStart={handleDragStart(it.id)}
        onKeyDown={handleCardKeyDown(it.id)}
        className="w-full h-auto min-h-0 p-2 justify-start text-left cursor-grab active:cursor-grabbing"
      >
        {it.label}
      </Card>
    );

    const renderChoiceZone = (zone: "choice1" | "choice2", label: string) => {
      const zoneItems = items.filter((it) => (current[it.id] ?? "source") === zone);
      const isOver = dragOverZone === zone;
      return (
        <DropZone
          label={label}
          className={cn(
            "flex-1",
            isOver && "border-survey-border-selected",
          )}
          data-drag-over={isOver ? "true" : undefined}
          onDragOver={handleDragOver(zone)}
          onDragLeave={handleDragLeave(zone)}
          onDrop={handleDrop(zone)}
        >
          {zoneItems.length === 0 ? (
            <div style={{ padding: "4px" }}>
              <span className="text-xs font-survey text-survey-foreground/60 text-left">
                Drag cards here
              </span>
            </div>
          ) : (
            zoneItems.map(renderCard)
          )}
        </DropZone>
      );
    };

    const sourceItems = items.filter(
      (it) => (current[it.id] ?? "source") === "source",
    );

    const renderSourceColumn = () => {
      const groups =
        sourceGroups && sourceGroups.length > 0 ? sourceGroups : null;

      return (
        <div
          className="flex-1 flex flex-col items-stretch min-w-28 border border-transparent"
          style={{
            borderRadius: "calc(var(--survey-radius-md, 12px) + 8px)",
            padding: "var(--survey-margin, 8px)",
            gap: "var(--survey-margin, 8px)",
          }}
          onDragOver={handleDragOver("source")}
          onDragLeave={handleDragLeave("source")}
          onDrop={handleDrop("source")}
        >
          {groups
            ? groups.map((groupLabel) => {
                const groupItems = sourceItems.filter(
                  (it) => it.group === groupLabel,
                );
                return (
                  <div
                    key={groupLabel}
                    className="flex flex-col"
                    style={{
                      gap: "var(--survey-margin, 8px)",
                      marginBottom: "var(--survey-margin, 8px)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-survey-body font-survey-semibold font-survey text-survey-foreground whitespace-nowrap">
                        {groupLabel}
                      </span>
                      <span
                        aria-hidden
                        className="flex-1 border-t border-survey-border-muted"
                      />
                    </div>
                    {groupItems.map(renderCard)}
                  </div>
                );
              })
            : sourceItems.map(renderCard)}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn("flex w-full font-survey", className)}
        style={{ gap: "var(--survey-margin, 8px)" }}
        {...props}
      >
        {renderSourceColumn()}
        {renderChoiceZone("choice1", choiceLabels[0])}
        {renderChoiceZone("choice2", choiceLabels[1])}
        <span
          aria-live="polite"
          className="sr-only"
          data-testid="cardsort-announcer"
        >
          {announcement}
        </span>
      </div>
    );
  },
);
CardSort.displayName = "CardSort";

function labelOf(items: CardSortItem[], id: string): string {
  const item = items.find((i) => i.id === id);
  if (!item) return id;
  return typeof item.label === "string" ? item.label : id;
}

function labelForZone(
  zone: CardSortZone,
  choiceLabels: [string, string],
): string {
  if (zone === "source") return "source";
  if (zone === "choice1") return choiceLabels[0];
  return choiceLabels[1];
}

export { CardSort };
