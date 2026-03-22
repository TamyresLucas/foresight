import { GripVertical } from './icons';
import { cn } from '@/lib/utils';
import React from 'react';

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
    className = ''
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
                if ((e.key === 'Enter' || e.key === ' ') && isEnabled && onClick) {
                    e.preventDefault();
                    onClick();
                }
            }}
            className={cn(
                'flex items-center justify-between px-4 h-8 border-b transition-all group',
                // Border color based on state
                isEnabled ? 'border-primary/20' : 'border-primary/10',
                // Background: card normally, primary when dragging
                isDragged ? 'bg-primary' : 'bg-card',
                // Hover state (only when enabled and not dragging)
                isEnabled && !isDragged && 'hover:bg-muted',
                // Cursor based on state
                !isEnabled && 'cursor-not-allowed',
                isEnabled && isDraggable && !isDragged && 'cursor-grab',
                isEnabled && isDraggable && isDragged && 'cursor-grabbing',
                isEnabled && !isDraggable && 'cursor-pointer',
                // Dragging effect
                isDragged && 'shadow-md',
                className
            )}
        >
            <div className="flex items-center flex-grow truncate">
                <div className="relative w-5 h-5 mr-3 flex-shrink-0 flex items-center justify-center">
                    {/* Original icon - hidden on hover OR when dragging */}
                    <Icon
                        className={cn(
                            'text-lg leading-none transition-opacity duration-200',
                            // Hide when dragging or on hover (only when enabled)
                            isDragged && 'opacity-0',
                            isEnabled && !isDragged && 'group-hover:opacity-0',
                            // Color
                            isEnabled ? 'text-primary' : 'text-primary/40',
                            isDragged ? 'text-primary-foreground' : ''
                        )}
                    />
                    {/* Drag indicator - show on hover OR when dragging */}
                    {isEnabled && (
                        <div
                            className={cn(
                                'absolute inset-0 flex items-center justify-center transition-opacity duration-200',
                                isDragged ? 'text-primary-foreground' : 'text-muted-foreground',
                                // Show when dragging, or on hover
                                isDragged ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            )}
                        >
                            <GripVertical className="text-lg leading-none" />
                        </div>
                    )}
                </div>
                <span
                    className={cn(
                        'text-sm truncate',
                        isEnabled ? 'text-foreground' : 'text-primary/40',
                        isDragged ? 'text-primary-foreground' : ''
                    )}
                >
                    {label}
                </span>
            </div>
            {endAction && (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
                    {endAction}
                </div>
            )}
        </div>
    );
};