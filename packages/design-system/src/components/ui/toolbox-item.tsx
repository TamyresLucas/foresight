import { cn } from "@/lib/utils";
import React from "react";

interface ToolboxItemProps {
  /** Icon component to display */
  icon: React.ElementType;
  /** Label text */
  label: string;
  /** Whether the item is enabled (default: true) */
  isEnabled?: boolean;
  /** When true, reduces the item's opacity to 30%, indicating it is being dragged. */
  isDragged?: boolean;
  /** Whether the item can be dragged (default: true) */
  isDraggable?: boolean;
  /** Drag start handler */
  onDragStart?: (e: React.DragEvent) => void;
  /** Drag end handler */
  onDragEnd?: (e: React.DragEvent) => void;
  /** Click handler (for non-draggable items) */
  onClick?: () => void;
  /** Optional content rendered at the trailing end of the item (e.g. a button or icon). Visible only on hover. */
  endAction?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const ToolboxItem: React.FC<ToolboxItemProps> = ({
  icon: Icon,
  label,
  isEnabled = true,
  isDragged = false,
  isDraggable = true,
  onDragStart,
  onDragEnd,
  onClick,
  endAction,
  className = "",
}) => {
  const handleClick = () => {
    if (isEnabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={isEnabled ? 0 : -1}
      aria-disabled={!isEnabled}
      aria-grabbed={isDragged}
      aria-label={`Add ${label} question`}
      draggable={isEnabled && isDraggable}
      onDragStart={isEnabled && isDraggable ? onDragStart : undefined}
      onDragEnd={isEnabled && isDraggable ? onDragEnd : undefined}
      onClick={handleClick}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && isEnabled && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "flex items-center gap-2 px-4 py-3 h-[47px]",
        "border-b border-solid border-border",
        "rounded-none",
        "transition-colors group",
        "bg-surface-container",
        isDragged ? "opacity-30" : "",
        isEnabled && !isDragged && "hover:bg-surface-container-lowest",
        !isEnabled && "cursor-not-allowed opacity-50",
        isEnabled && isDraggable && !isDragged && "cursor-grab",
        isEnabled && isDraggable && isDragged && "cursor-grabbing",
        isEnabled && !isDraggable && "cursor-pointer",
        className,
      )}
    >
      {/* Icon */}
      <div className="shrink-0 size-[22.5px] flex items-center justify-center">
        <Icon className={cn(isEnabled ? "text-primary" : "text-primary/40")} />
      </div>

      {/* Label */}
      <span
        className={cn(
          "flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap",
          "text-[14px] font-normal leading-normal",
          isEnabled ? "text-foreground" : "text-foreground/40",
        )}
      >
        {label}
      </span>

      {/* End action — hidden until hover */}
      {endAction && (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
          {endAction}
        </div>
      )}
    </div>
  );
};
