"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./Card";
import { DropZone } from "./DropZone";

export interface DragAndDropItem {
  id: string;
  label: React.ReactNode;
  group?: string;
}

export type DragAndDropValue = string[];

export interface DragAndDropProps {
  items: DragAndDropItem[];
  dropZoneLabel?: string;
  sourceGroups?: string[];
  value?: DragAndDropValue;
  defaultValue?: DragAndDropValue;
  onChange?: (next: DragAndDropValue) => void;
  cardShape?: "square" | "rectangle";
  cardSize?: "sm" | "md" | "lg";
  className?: string;
}

const DATA_TRANSFER_TYPE = "application/x-draganddrop-item";

const DragAndDrop = React.forwardRef<HTMLDivElement, DragAndDropProps>(
  (
    {
      items,
      dropZoneLabel = "Rank",
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
    const [internal, setInternal] = React.useState<DragAndDropValue>(
      () => defaultValue ?? [],
    );

    React.useEffect(() => {
      if (isControlled) return;
      setInternal((prev) => {
        const validIds = new Set(items.map((i) => i.id));
        const filtered = prev.filter((id) => validIds.has(id));
        return filtered.length !== prev.length ? filtered : prev;
      });
    }, [items, isControlled]);

    const current: DragAndDropValue = isControlled ? (value ?? []) : internal;

    const rankedSet = React.useMemo(() => new Set(current), [current]);

    const commit = React.useCallback(
      (next: DragAndDropValue) => {
        if (!isControlled) setInternal(next);
        onChange?.(next);
      },
      [isControlled, onChange],
    );

    const addToRanked = React.useCallback(
      (id: string, insertIndex?: number) => {
        const without = current.filter((x) => x !== id);
        const idx =
          insertIndex !== undefined
            ? Math.min(insertIndex, without.length)
            : without.length;
        const next = [...without.slice(0, idx), id, ...without.slice(idx)];
        commit(next);
        setAnnouncement(
          `Moved "${labelOf(items, id)}" to rank ${idx + 1}.`,
        );
      },
      [current, commit, items],
    );

    const removeFromRanked = React.useCallback(
      (id: string) => {
        const next = current.filter((x) => x !== id);
        commit(next);
        setAnnouncement(`Moved "${labelOf(items, id)}" back to source.`);
      },
      [current, commit, items],
    );

    const [draggedId, setDraggedId] = React.useState<string | null>(null);
    const [dragOverZone, setDragOverZone] = React.useState<
      "source" | "ranked" | null
    >(null);
    const [dropInsertIndex, setDropInsertIndex] = React.useState<number | null>(
      null,
    );
    const [announcement, setAnnouncement] = React.useState("");

    const dragGhostRef = React.useRef<HTMLDivElement | null>(null);
    const rankedListRef = React.useRef<HTMLDivElement | null>(null);

    const handleDragStart = (id: string) => (e: React.DragEvent) => {
      e.dataTransfer.setData(DATA_TRANSFER_TYPE, id);
      e.dataTransfer.setData("text/plain", id);
      e.dataTransfer.effectAllowed = "move";

      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const ghost = target.cloneNode(true) as HTMLDivElement;
      ghost.style.width = `${rect.width}px`;
      ghost.style.height = `${rect.height}px`;
      ghost.style.position = "fixed";
      ghost.style.top = "-9999px";
      ghost.style.left = "-9999px";
      ghost.style.opacity = "1";
      ghost.style.pointerEvents = "none";
      ghost.style.backgroundColor = "hsl(var(--survey-primary))";
      ghost.style.color = "hsl(var(--survey-primary-foreground))";
      ghost.style.borderColor = "hsl(var(--survey-primary))";
      document.body.appendChild(ghost);
      e.dataTransfer.setDragImage(ghost, rect.width / 2, rect.height / 2);
      dragGhostRef.current = ghost;

      setDraggedId(id);
    };

    const handleDragEnd = () => {
      setDraggedId(null);
      setDragOverZone(null);
      setDropInsertIndex(null);
      if (dragGhostRef.current) {
        dragGhostRef.current.remove();
        dragGhostRef.current = null;
      }
    };

    const handleSourceDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      if (dragOverZone !== "source") setDragOverZone("source");
    };

    const handleSourceDragLeave = (e: React.DragEvent) => {
      if (e.currentTarget === e.target && dragOverZone === "source") {
        setDragOverZone(null);
      }
    };

    const handleSourceDrop = (e: React.DragEvent) => {
      e.preventDefault();
      const id =
        e.dataTransfer.getData(DATA_TRANSFER_TYPE) ||
        e.dataTransfer.getData("text/plain");
      setDragOverZone(null);
      setDraggedId(null);
      setDropInsertIndex(null);
      if (!id) return;
      removeFromRanked(id);
    };

    const computeInsertIndex = (e: React.DragEvent) => {
      const container = rankedListRef.current;
      if (!container) return current.length;
      const children = Array.from(
        container.querySelectorAll("[data-rank-item]"),
      );
      for (let i = 0; i < children.length; i++) {
        const rect = children[i].getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (e.clientY < midY) return i;
      }
      return children.length;
    };

    const handleRankedDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      if (dragOverZone !== "ranked") setDragOverZone("ranked");
      setDropInsertIndex(computeInsertIndex(e));
    };

    const handleRankedDragLeave = (e: React.DragEvent) => {
      if (e.currentTarget === e.target && dragOverZone === "ranked") {
        setDragOverZone(null);
        setDropInsertIndex(null);
      }
    };

    const handleRankedDrop = (e: React.DragEvent) => {
      e.preventDefault();
      const id =
        e.dataTransfer.getData(DATA_TRANSFER_TYPE) ||
        e.dataTransfer.getData("text/plain");
      const idx = computeInsertIndex(e);
      setDragOverZone(null);
      setDraggedId(null);
      setDropInsertIndex(null);
      if (!id) return;
      addToRanked(id, idx);
    };

    const handleCardKeyDown = (id: string) => (e: React.KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      if (rankedSet.has(id)) {
        removeFromRanked(id);
      } else {
        addToRanked(id);
      }
    };

    const showDropIndicator = draggedId !== null && dragOverZone === "ranked";

    const dropIndicator = (
      <div
        key="drop-indicator"
        className="w-full rounded-survey-md border-2 border-dashed border-survey-border-muted flex items-center justify-center p-2"
      >
        <span className="text-survey-foreground font-survey text-survey-body">
          Drop here
        </span>
      </div>
    );

    const renderCard = (it: DragAndDropItem, rankIndex?: number) => (
      <Card
        key={it.id}
        shape={cardShape}
        size={cardSize}
        draggable
        dragged={draggedId === it.id}
        onDragStart={handleDragStart(it.id)}
        onDragEnd={handleDragEnd}
        onKeyDown={handleCardKeyDown(it.id)}
        className="w-full h-auto min-h-0 p-2 justify-start text-left cursor-grab active:cursor-grabbing"
      >
        {rankIndex !== undefined ? (
          <span className="flex items-center gap-2 w-full">
            <span className="text-survey-body font-survey-semibold font-survey text-survey-foreground shrink-0">
              {rankIndex + 1}.
            </span>
            <span className="truncate">{it.label}</span>
          </span>
        ) : (
          it.label
        )}
      </Card>
    );

    const rankedItems = current
      .map((id) => items.find((it) => it.id === id))
      .filter(Boolean) as DragAndDropItem[];

    const renderRankedContent = () => {
      if (rankedItems.length === 0 && !showDropIndicator) {
        return (
          <div style={{ padding: "4px" }}>
            <span className="text-xs font-survey text-survey-foreground/60 text-left">
              Drag cards here
            </span>
          </div>
        );
      }

      const elements: React.ReactNode[] = [];
      for (let i = 0; i < rankedItems.length; i++) {
        if (showDropIndicator && dropInsertIndex === i) {
          elements.push(
            React.cloneElement(dropIndicator, { key: `indicator-${i}` }),
          );
        }
        elements.push(
          <div key={rankedItems[i].id} data-rank-item>
            {renderCard(rankedItems[i], i)}
          </div>,
        );
      }
      if (showDropIndicator && (dropInsertIndex ?? rankedItems.length) >= rankedItems.length) {
        elements.push(
          React.cloneElement(dropIndicator, { key: "indicator-end" }),
        );
      }
      return elements;
    };

    const sourceItems = items.filter((it) => !rankedSet.has(it.id));

    const renderSourceColumn = () => {
      const groups =
        sourceGroups && sourceGroups.length > 0 ? sourceGroups : null;

      return (
        <div
          className="flex-1 flex flex-col items-stretch min-w-28 border border-survey-border-muted"
          style={{
            borderRadius: "calc(var(--survey-radius-md, 12px) + 8px)",
            paddingTop: "var(--survey-margin, 8px)",
            paddingRight: "var(--survey-margin, 8px)",
            paddingBottom: "var(--survey-margin, 8px)",
            paddingLeft: "var(--survey-margin, 8px)",
            gap: "var(--survey-margin, 8px)",
          }}
          onDragOver={handleSourceDragOver}
          onDragLeave={handleSourceDragLeave}
          onDrop={handleSourceDrop}
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
                    {groupItems.map((it) => renderCard(it))}
                  </div>
                );
              })
            : sourceItems.map((it) => renderCard(it))}
        </div>
      );
    };

    const isOver = dragOverZone === "ranked";

    return (
      <div
        ref={ref}
        className={cn("flex w-full font-survey", className)}
        style={{ gap: "var(--survey-margin, 8px)" }}
        {...props}
      >
        {renderSourceColumn()}
        <DropZone
          label={dropZoneLabel}
          className={cn("flex-1", isOver && "border-survey-border-selected")}
          data-drag-over={isOver ? "true" : undefined}
          onDragOver={handleRankedDragOver}
          onDragLeave={handleRankedDragLeave}
          onDrop={handleRankedDrop}
        >
          <div
            ref={rankedListRef}
            className="flex flex-col"
            style={{ gap: "var(--survey-margin, 8px)" }}
          >
            {renderRankedContent()}
          </div>
        </DropZone>
        <span
          aria-live="polite"
          className="sr-only"
          data-testid="draganddrop-announcer"
        >
          {announcement}
        </span>
      </div>
    );
  },
);
DragAndDrop.displayName = "DragAndDrop";

function labelOf(items: DragAndDropItem[], id: string): string {
  const item = items.find((i) => i.id === id);
  if (!item) return id;
  return typeof item.label === "string" ? item.label : id;
}

export { DragAndDrop };
