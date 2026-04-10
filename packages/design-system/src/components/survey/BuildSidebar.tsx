'use client';

import React, { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { ToolboxItem } from '../ui/toolbox-item';
import { Search, PanelLeftClose } from '../ui/icons';
import { Button } from '../ui/button';
import { iconMap, questionGroups } from '../../data/toolbox-items';

// ─── Types ──────────────────────────────────────────────────────────────────

type Tab = 'add-question' | 'outline' | 'library';

export interface BuildSidebarProps {
    /** Called when the collapse/panel-close button is clicked */
    onCollapse?: () => void;
    /** Called when a toolbox item is clicked */
    onItemClick?: (label: string) => void;
    /** Called when a toolbox item drag starts */
    onItemDragStart?: (label: string, e: React.DragEvent) => void;
    /** Called when a toolbox item drag ends */
    onItemDragEnd?: (label: string, e: React.DragEvent) => void;
    className?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

/** Curated "Basic" category matching the Figma design */
const BASIC_ITEMS: Array<{ label: string; iconKey: string }> = [
    { label: 'Block',        iconKey: 'Block' },
    { label: 'Checkbox',     iconKey: 'Check Box' },
    { label: 'Description',  iconKey: 'Description' },
    { label: 'Page Break',   iconKey: 'Page Break' },
    { label: 'Radio Button', iconKey: 'Radio Button' },
    { label: 'Text Input',   iconKey: 'Text Input' },
];

const CATEGORY_OPTIONS = [
    { value: 'basic', label: 'Basic' },
    ...Object.keys(questionGroups).map((group) => ({
        value: group.toLowerCase().replace(/\s+/g, '-'),
        label: group,
    })),
];

function getItemsForCategory(category: string) {
    if (category === 'basic') {
        return BASIC_ITEMS.map(({ label, iconKey }) => ({
            label,
            icon: iconMap[iconKey],
        }));
    }
    const groupLabel = CATEGORY_OPTIONS.find((o) => o.value === category)?.label ?? '';
    const names = questionGroups[groupLabel] ?? [];
    return names.map((name) => ({ label: name, icon: iconMap[name] }));
}

// ─── Component ───────────────────────────────────────────────────────────────

export const BuildSidebar = React.forwardRef<HTMLDivElement, BuildSidebarProps>(
    ({ onCollapse, onItemClick, onItemDragStart, onItemDragEnd, className }, ref) => {
        const [activeTab, setActiveTab] = useState<Tab>('add-question');
        const [search, setSearch] = useState('');
        const [category, setCategory] = useState('basic');

        const tabs: Array<{ id: Tab; label: string }> = [
            { id: 'add-question', label: 'Add question' },
            { id: 'outline',      label: 'Outline' },
            { id: 'library',      label: 'Library' },
        ];

        const items = useMemo(() => {
            const base = getItemsForCategory(category);
            if (!search.trim()) return base;
            const q = search.toLowerCase();
            return base.filter((item) => item.label.toLowerCase().includes(q));
        }, [category, search]);

        return (
            <div
                ref={ref}
                className={cn(
                    'flex flex-col bg-card border-r border-b border-t border-border-ui w-[321px] h-full',
                    className,
                )}
            >
                {/* ── Header ── */}
                <div className="flex items-center justify-between px-4 h-[66px] border-b border-border-ui shrink-0">
                    <span
                        className="text-[18px] font-medium leading-none text-foreground"
                        style={{ fontFamily: 'var(--font-survey, "Outfit", sans-serif)' }}
                    >
                        Build
                    </span>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Collapse sidebar"
                        onClick={onCollapse}
                    >
                        <PanelLeftClose />
                    </Button>
                </div>

                {/* ── Tab nav ── */}
                <div className="flex items-center gap-8 px-4 border-b border-border-ui shrink-0">
                    {tabs.map(({ id, label }) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setActiveTab(id)}
                            className={cn(
                                'h-[38px] text-sm font-semibold leading-none whitespace-nowrap transition-colors',
                                'focus-visible:outline-none',
                                activeTab === id
                                    ? 'border-b-2 border-primary text-primary'
                                    : 'text-foreground hover:text-primary',
                            )}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* ── Filters (search + category) ── */}
                <div className="flex flex-col gap-2 px-4 py-3 border-b border-border-ui shrink-0">
                    {/* Search */}
                    <div className="relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground text-base leading-none pointer-events-none flex">
                            <Search />
                        </span>
                        <Input
                            type="search"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-8 h-9 text-sm"
                        />
                    </div>

                    {/* Category select */}
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="h-9 text-sm">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {CATEGORY_OPTIONS.map(({ value, label }) => (
                                <SelectItem key={value} value={value}>
                                    {label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* ── Toolbox items list ── */}
                <div className="flex-1 overflow-y-auto">
                    {items.length === 0 ? (
                        <p className="px-4 py-6 text-sm text-muted-foreground text-center">
                            No items match your search.
                        </p>
                    ) : (
                        items.map(({ label, icon }) =>
                            icon ? (
                                <ToolboxItem
                                    key={label}
                                    icon={icon}
                                    label={label}
                                    onClick={() => onItemClick?.(label)}
                                    onDragStart={(e) => onItemDragStart?.(label, e)}
                                    onDragEnd={(e) => onItemDragEnd?.(label, e)}
                                />
                            ) : null,
                        )
                    )}
                </div>
            </div>
        );
    },
);

BuildSidebar.displayName = 'BuildSidebar';
