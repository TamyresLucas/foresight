'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SelectPrimitive from '@radix-ui/react-select';
import {
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Check, ChevronDown, ChevronLeft, ChevronRight, FirstPage, LastPage, Plus, Search, X } from '../ui/icons';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { TableRowActions, type TableRowAction } from '../ui/table-row-actions';
import { SurveyFilterTabs, type FilterTabItem } from './FilterTabs';
import { cn } from '@/lib/utils';

/** Option for a `dropdown`-format column's editor in the add-choice draft row. */
export interface LookupTableColumnOption {
  value: string;
  label: string;
}

/**
 * Value format of a column's editor in the add-choice draft row.
 * - `text` (default): a free-text input.
 * - `dropdown`: a select bound to the column's `options`.
 */
export type LookupTableColumnFormat = 'text' | 'dropdown';

/** A single column definition for the lookup table. */
export interface LookupTableColumn {
  /** Key into each row's `data` object. */
  id: string;
  /** Header label shown to the respondent. */
  label: string;
  /** Enable click-to-sort on this column's header (shows a ↑↓ affordance). */
  sortable?: boolean;
  /** Right-align the cell + header (e.g. for numeric/amount columns). */
  align?: 'left' | 'right';
  /** Editor format used for this column in the add-choice draft row. Defaults to `text`. */
  format?: LookupTableColumnFormat;
  /** Options for a `dropdown`-format column's editor. */
  options?: LookupTableColumnOption[];
  /** Placeholder for this column's editor in the add-choice draft row. */
  editPlaceholder?: string;
}

/** A single row. `id` must be unique — it is what `value`/`onChange` track. */
export interface LookupTableRow {
  id: string;
  data: Record<string, React.ReactNode>;
}

/** The answer: the set of selected row ids. */
export type LookupTableValue = string[];

/** Built-in filter tabs for filtering by selection state. */
type SelectionFilter = 'all' | 'selected' | 'not-selected';

export interface LookupTableProps {
  columns: LookupTableColumn[];
  rows: LookupTableRow[];
  /** Controlled selected row ids. */
  value?: LookupTableValue;
  /** Uncontrolled initial selected row ids. */
  defaultValue?: LookupTableValue;
  onChange?: (value: LookupTableValue) => void;
  /** Column id the text filter input searches. Omit to hide the filter input. */
  filterColumnId?: string;
  /** Placeholder for the text filter input. */
  filterPlaceholder?: string;
  /** Rows per page. */
  pageSize?: number;
  /** Per-row action items shown in the trailing `···` menu. Receives the row. */
  rowActions?: (row: LookupTableRow) => TableRowAction[];
  /**
   * Sink for rows added via the inline "Add choice" editor. When provided, the
   * assembled draft row is passed here on Confirm (typically appended to `rows`).
   * Takes precedence over `onAddChoice` as the Confirm handler.
   */
  onAddRow?: (row: LookupTableRow) => void;
  /**
   * Renders the "Add choice" button and enables the inline edit flow. Clicking
   * "Add choice" inserts an empty draft row on the current page (pushing that
   * page's last row to the next page) with a text input or dropdown per column,
   * and swaps the footer to Cancel / Confirm. On Confirm, this is invoked when
   * `onAddRow` is not provided. The button also appears when only `onAddRow`
   * is set.
   */
  onAddChoice?: () => void;
  /** Label for the add-choice button. */
  addChoiceLabel?: string;
  /** Label for the confirm button shown while adding a choice. */
  confirmLabel?: string;
  /** Label for the transient success state shown for 2s after a choice is confirmed. */
  confirmedLabel?: string;
  /** Label for the cancel button shown while adding a choice. */
  cancelLabel?: string;
  className?: string;
}

/**
 * Outer focus border shown on keyboard (tab) navigation — a 2px
 * `survey-border-interactive` ring offset 2px from the control, sitting over
 * the survey background. Shared by the footer's pagination and action buttons.
 */
const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background';

// Frozen row-selection column. `sticky left-0` keeps it in place while the rest
// of the table scrolls horizontally; the opaque `bg-survey-background` masks the
// cells sliding underneath. Because the row zebra (border-interactive / 0.06)
// and hover (/ 0.2) tints live on the <tr> behind the cell's own opaque
// background, they are re-applied here as gradient overlays so the frozen cell
// stays seamless with its row (whether or not the table is scrolled).
const STICKY_SELECT_BASE = 'sticky left-0 bg-survey-background';
const STICKY_SELECT_ZEBRA =
  '[background-image:linear-gradient(hsl(var(--survey-border-interactive)_/_0.06),hsl(var(--survey-border-interactive)_/_0.06))]';
const STICKY_SELECT_HOVER =
  'group-hover:[background-image:linear-gradient(hsl(var(--survey-border-interactive)_/_0.2),hsl(var(--survey-border-interactive)_/_0.2))]';

/** Checkbox styled with survey tokens (the shared ui Checkbox uses platform tokens). */
const SurveyCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'grid place-content-center peer h-4 w-4 shrink-0 rounded-[4px] border transition-colors',
      'border-survey-border-interactive ring-offset-survey-background',
      // Outer focus border shown on keyboard (tab) navigation.
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-survey-border-selected data-[state=checked]:text-survey-primary-foreground data-[state=checked]:border-survey-border-selected',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="grid place-content-center text-current">
      <Check className="h-3 w-3 stroke-[3]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
SurveyCheckbox.displayName = 'SurveyCheckbox';

/**
 * Search input copied from the TextAnswer question type (same nested
 * focus-ring border treatment and tokens), with a leading magnifying-glass
 * icon to signal it is a search field. Radii use the survey preset tokens so
 * the corners track the "Corner Ratio" preset.
 */
const SearchInput = React.forwardRef<
  HTMLInputElement,
  {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
  }
>(({ value, onChange, placeholder, className }, ref) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <div
      className={cn('flex flex-col w-full group/survey-input', className)}
      onPointerDown={() => setSelected(true)}
      data-selected={selected}
    >
      <div
        className={cn(
          'rounded-[calc(var(--survey-radius-md)+2px)] w-full transition-all bg-transparent',
          'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:p-[2px]',
          'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-2',
          'group-data-[selected=false]/survey-input:group-has-[:focus-visible]/survey-input:border-survey-border-interactive',
        )}
      >
        <div
          className={cn(
            'flex w-full h-10 px-2 py-1.5 items-center gap-[10px] rounded-survey-md border bg-transparent transition-all',
            'border-survey-border-interactive',
            'group-data-[selected=true]/survey-input:border-survey-border-selected group-data-[selected=true]/survey-input:border-2',
            'group-has-[:focus-visible]/survey-input:border',
          )}
        >
          <Search
            aria-hidden="true"
            fill={false}
            className="h-5 w-5 shrink-0 text-survey-muted-foreground"
          />
          <input
            ref={ref}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            onBlur={() => setSelected(false)}
            className="w-full bg-transparent text-survey-body font-survey-regular focus-visible:outline-none text-survey-foreground font-survey placeholder:text-survey-muted-foreground"
          />
        </div>
      </div>
    </div>
  );
});
SearchInput.displayName = 'SearchInput';

const FILTER_TABS: FilterTabItem[] = [
  { id: 'all', label: 'All' },
  { id: 'selected', label: 'Selected' },
  { id: 'not-selected', label: 'Not selected' },
];

/** Stable id for the inline draft row so the table never remounts it. */
const DRAFT_ROW_ID = '__lookup_draft__';

/** Compact text input used for `text`-format columns in the draft row. */
const DraftTextInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  align?: 'left' | 'right';
  error?: boolean;
}> = ({ value, onChange, placeholder, align, error }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    aria-invalid={error || undefined}
    className={cn(
      'flex h-9 w-full min-w-0 rounded-survey-md border border-survey-border-interactive bg-transparent px-2',
      'text-survey-body font-survey-regular text-survey-foreground transition-colors',
      'placeholder:text-survey-muted-foreground',
      'focus-visible:outline-none focus-visible:border-survey-border-selected',
      error && 'placeholder:text-survey-destructive',
      align === 'right' && 'text-right tabular-nums',
    )}
  />
);

/** Compact select used for `dropdown`-format columns in the draft row. */
const DraftSelect: React.FC<{
  value: string;
  onChange: (value: string) => void;
  options: LookupTableColumnOption[];
  placeholder?: string;
  align?: 'left' | 'right';
  error?: boolean;
}> = ({ value, onChange, options, placeholder = 'Select…', align, error }) => (
  <SelectPrimitive.Root value={value || undefined} onValueChange={onChange}>
    <SelectPrimitive.Trigger
      aria-invalid={error || undefined}
      className={cn(
        // Fixed width so the trigger (and its table column) doesn't reflow as the
        // selected option's label length changes — same width empty or filled.
        'flex h-9 w-40 shrink-0 items-center justify-between gap-2 rounded-survey-md border border-survey-border-interactive bg-transparent px-2',
        'text-survey-body font-survey-regular text-survey-foreground transition-colors outline-none',
        'focus-visible:border-survey-border-selected',
        '[&>span]:truncate data-[placeholder]:[&>span]:text-survey-muted-foreground',
        error && 'data-[placeholder]:[&>span]:text-survey-destructive',
        align === 'right' && 'text-right',
      )}
    >
      <SelectPrimitive.Value placeholder={placeholder} />
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 shrink-0 text-survey-muted-foreground" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        sideOffset={4}
        className="z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-survey-md border border-survey-border-muted bg-survey-background font-survey shadow-sm"
      >
        <SelectPrimitive.Viewport className="p-1">
          {options.map((option) => (
            <SelectPrimitive.Item
              key={option.value}
              value={option.value}
              className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 px-3 text-survey-body font-survey-regular text-survey-foreground outline-none data-[highlighted]:bg-survey-muted-background data-[state=checked]:font-bold data-[state=checked]:text-survey-primary"
            >
              <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);

const SurveyLookupTable = React.forwardRef<HTMLDivElement, LookupTableProps>(
  (
    {
      columns,
      rows,
      value,
      defaultValue,
      onChange,
      filterColumnId,
      filterPlaceholder = 'Filter…',
      pageSize = 10,
      rowActions,
      onAddRow,
      onAddChoice,
      addChoiceLabel = 'Add choice',
      confirmLabel = 'Confirm',
      confirmedLabel = 'Confirmed',
      cancelLabel = 'Cancel',
      className,
    },
    ref,
  ) => {
    // Selection state, mirrored to value/onChange as a string[] of row ids.
    const selectionFromValue = React.useCallback(
      (ids: LookupTableValue): RowSelectionState =>
        ids.reduce<RowSelectionState>((acc, id) => {
          acc[id] = true;
          return acc;
        }, {}),
      [],
    );

    const [internalSelection, setInternalSelection] = React.useState<RowSelectionState>(
      () => selectionFromValue(defaultValue ?? []),
    );
    const rowSelection = value !== undefined ? selectionFromValue(value) : internalSelection;

    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [selectionFilter, setSelectionFilter] = React.useState<SelectionFilter>('all');

    // Inline add-choice editor. Available whenever an add-choice callback is
    // provided (`onAddRow` or `onAddChoice`); clicking "Add choice" enters edit
    // mode and inserts a draft row. The draft row's id is stable so the table
    // never remounts it (preserving input focus across keystrokes) while the
    // editor binds directly to `draft` state.
    const canEdit = !!onAddRow || !!onAddChoice;
    const [editing, setEditing] = React.useState(false);
    const [draft, setDraft] = React.useState<Record<string, string>>({});
    // Column ids whose draft value failed the "required" check on Confirm.
    const [draftErrors, setDraftErrors] = React.useState<Record<string, boolean>>({});
    const newRowSeq = React.useRef(0);

    // Column widths captured from view/select mode right before editing starts,
    // so the draft row's inputs never reflow the table. Applied via a
    // `<colgroup>` while editing; cleared (back to natural auto-layout) once
    // editing ends.
    const tableRef = React.useRef<HTMLTableElement>(null);
    const [lockedColumnWidths, setLockedColumnWidths] = React.useState<number[] | null>(null);

    // Transient success state: after a successful Confirm the add-choice button is
    // replaced by a "Confirmed" badge for 2s, then reverts.
    const [justConfirmed, setJustConfirmed] = React.useState(false);
    const confirmedTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    React.useEffect(
      () => () => {
        if (confirmedTimer.current) clearTimeout(confirmedTimer.current);
      },
      [],
    );

    // Id of a newly confirmed row awaiting auto-select + page navigation. The
    // parent appends the row to `rows` on a later render, so we stash the id and
    // act once it actually lands in the data (see the effect after `table`).
    const pendingSelectId = React.useRef<string | null>(null);

    const setDraftField = (id: string, next: string) => {
      setDraft((d) => ({ ...d, [id]: next }));
      // Clear the field's error as soon as it has content again.
      if (next.trim()) setDraftErrors((e) => (e[id] ? { ...e, [id]: false } : e));
    };

    // Pagination is controlled so the draft can be inserted relative to the
    // current page before the table re-paginates.
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize,
    });
    React.useEffect(() => {
      setPagination((p) => (p.pageSize === pageSize ? p : { ...p, pageSize }));
    }, [pageSize]);

    const startEditing = () => {
      // Snapshot the current (view/select mode) column widths before the
      // draft row's inputs mount — their own natural widths (e.g. the fixed
      // `DraftSelect` trigger) can differ from the data columns' content-driven
      // widths and would otherwise reflow the whole table the instant editing
      // starts. Locking them via a `<colgroup>` keeps every column exactly as
      // wide as it was a moment ago.
      const headerCells = tableRef.current?.querySelectorAll('thead th');
      if (headerCells?.length) {
        setLockedColumnWidths(
          Array.from(headerCells).map((el) => el.getBoundingClientRect().width),
        );
      }
      setDraft({});
      setDraftErrors({});
      setEditing(true);
    };
    const cancelEditing = () => {
      setEditing(false);
      setLockedColumnWidths(null);
      setDraft({});
      setDraftErrors({});
    };
    const confirmEditing = () => {
      // Every column is required: any empty field puts that field in an error
      // state and blocks leaving edit mode.
      const errors = columns.reduce<Record<string, boolean>>((acc, col) => {
        if (!(draft[col.id] ?? '').trim()) acc[col.id] = true;
        return acc;
      }, {});
      if (Object.keys(errors).length > 0) {
        setDraftErrors(errors);
        return;
      }

      newRowSeq.current += 1;
      if (onAddRow) {
        const newId = `lookup-new-${Date.now()}-${newRowSeq.current}`;
        // Remember the id so we can auto-select the row and page to it once the
        // parent appends it to `rows`.
        pendingSelectId.current = newId;
        onAddRow({ id: newId, data: { ...draft } });
      } else {
        // No row sink provided — just notify that a choice was confirmed.
        onAddChoice?.();
      }
      setEditing(false);
      setLockedColumnWidths(null);
      setDraft({});
      setDraftErrors({});

      // Show a 2s "Confirmed" success state in place of the Add-choice button.
      setJustConfirmed(true);
      if (confirmedTimer.current) clearTimeout(confirmedTimer.current);
      confirmedTimer.current = setTimeout(() => setJustConfirmed(false), 2000);
    };

    const emitSelection = (next: RowSelectionState) => {
      if (value === undefined) setInternalSelection(next);
      onChange?.(Object.keys(next).filter((id) => next[id]));
    };

    const tableColumns = React.useMemo<ColumnDef<LookupTableRow>[]>(() => {
      const selectColumn: ColumnDef<LookupTableRow> = {
        id: '__select__',
        enableSorting: false,
        header: ({ table }) => (
          <SurveyCheckbox
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomePageRowsSelected()
                  ? 'indeterminate'
                  : false
            }
            onCheckedChange={(checked) =>
              table.toggleAllPageRowsSelected(!!checked)
            }
            aria-label="Select all rows"
          />
        ),
        cell: ({ row }) => (
          <SurveyCheckbox
            checked={row.getIsSelected()}
            onCheckedChange={(checked) => row.toggleSelected(!!checked)}
            aria-label="Select row"
          />
        ),
      };

      const dataColumns: ColumnDef<LookupTableRow>[] = columns.map((col) => ({
        id: col.id,
        accessorFn: (row) => row.data[col.id],
        enableSorting: !!col.sortable,
        filterFn: 'includesString',
        header: ({ column }) => {
          const alignClass = col.align === 'right' ? 'justify-end text-right' : '';
          if (!col.sortable) {
            return <span className={cn('block', col.align === 'right' && 'text-right')}>{col.label}</span>;
          }
          const sorted = column.getIsSorted();
          return (
            <button
              type="button"
              className={cn(
                'inline-flex items-center gap-1 select-none',
                alignClass,
                'cursor-pointer hover:text-survey-foreground',
              )}
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
              aria-label={`Sort by ${col.label}`}
            >
              {col.label}
              <span aria-hidden="true" className="text-survey-muted-foreground">
                {sorted === 'asc' ? '↑' : sorted === 'desc' ? '↓' : '↕'}
              </span>
            </button>
          );
        },
        cell: ({ getValue }) => (
          <span className={cn('block', col.align === 'right' && 'text-right tabular-nums')}>
            {getValue() as React.ReactNode}
          </span>
        ),
      }));

      const actionColumn: ColumnDef<LookupTableRow>[] = rowActions
        ? [
            {
              id: '__actions__',
              enableSorting: false,
              header: () => <span className="sr-only">Actions</span>,
              cell: ({ row }) => (
                <div className="flex justify-end">
                  <TableRowActions actions={rowActions(row.original)} />
                </div>
              ),
            },
          ]
        : [];

      return [selectColumn, ...dataColumns, ...actionColumn];
    }, [columns, rowActions]);

    // While editing, splice a stable, empty draft row into the data at the end
    // of the current page. The table then re-paginates: the draft lands on the
    // current page and that page's former last row is pushed to the next page,
    // keeping each page at no more than `pageSize` rows. The draft's `data` is
    // intentionally empty (the editor binds to `draft` state, not row data) so
    // the row object identity is stable and the inputs keep focus while typing.
    const data = React.useMemo(() => {
      if (!editing) return rows;
      const insertAt = Math.min(
        (pagination.pageIndex + 1) * pagination.pageSize - 1,
        rows.length,
      );
      const next = rows.slice();
      next.splice(insertAt, 0, { id: DRAFT_ROW_ID, data: {} });
      return next;
    }, [editing, rows, pagination.pageIndex, pagination.pageSize]);

    const table = useReactTable({
      data,
      columns: tableColumns,
      state: { rowSelection, sorting, columnFilters, pagination },
      getRowId: (row) => row.id,
      // Pagination is controlled and we navigate to a freshly added row
      // ourselves; TanStack's default auto-reset would otherwise clobber that
      // by snapping back to page 0 whenever `data` changes. Page resets we do
      // want (on text-filter changes) are handled explicitly below.
      autoResetPageIndex: false,
      // The draft row is never part of the answer, so it can't be selected.
      enableRowSelection: (row) => row.id !== DRAFT_ROW_ID,
      enableSortingRemoval: true,
      onRowSelectionChange: (updater) => {
        const next =
          typeof updater === 'function' ? updater(rowSelection) : updater;
        emitSelection(next);
      },
      onSortingChange: setSorting,
      onColumnFiltersChange: (updater) => {
        setColumnFilters(updater);
        // Auto-reset is off (see above), so reset to the first page on filter
        // changes ourselves to avoid stranding the user on a now-empty page.
        setPagination((p) => (p.pageIndex === 0 ? p : { ...p, pageIndex: 0 }));
      },
      onPaginationChange: setPagination,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });

    // After a confirmed add, once the new row lands in `rows`, select it and
    // page the table to wherever it sorts/filters to — so the respondent sees
    // their new choice checked and on-screen alongside the "Confirmed" state.
    // Ref-guarded so it only fires for a freshly added row.
    React.useEffect(() => {
      const id = pendingSelectId.current;
      if (!id || !rows.some((row) => row.id === id)) return;
      pendingSelectId.current = null;

      // A "Not selected" tab would hide the row the moment we select it.
      if (selectionFilter === 'not-selected') setSelectionFilter('all');
      // Select the new row, preserving any existing selection.
      emitSelection({ ...rowSelection, [id]: true });
      // Jump to the page the new row occupies in the sorted/filtered order.
      const ordered = table.getSortedRowModel().rows;
      const index = ordered.findIndex((row) => row.id === id);
      if (index >= 0) {
        const targetPage = Math.floor(index / pagination.pageSize);
        setPagination((p) =>
          p.pageIndex === targetPage ? p : { ...p, pageIndex: targetPage },
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rows]);

    // Apply the selection-state tab filter on top of the (sorted, text-filtered)
    // row model. This is presentation-only and does not affect the answer.
    const pageRows = table.getRowModel().rows.filter((row) => {
      // The draft row always stays visible regardless of the selection filter.
      if (row.id === DRAFT_ROW_ID) return true;
      if (selectionFilter === 'selected') return row.getIsSelected();
      if (selectionFilter === 'not-selected') return !row.getIsSelected();
      return true;
    });

    const columnsById = React.useMemo(
      () => new Map(columns.map((col) => [col.id, col])),
      [columns],
    );

    const selectedCount = Object.values(rowSelection).filter(Boolean).length;
    const colSpan = tableColumns.length;
    const pageCount = table.getPageCount();
    const pageIndex = table.getState().pagination.pageIndex;
    const canPreviousPage = table.getCanPreviousPage();
    const canNextPage = table.getCanNextPage();

    return (
      <div
        ref={ref}
        className={cn(
          '@container flex w-full flex-col font-survey text-survey-body',
          className,
        )}
        style={{ gap: 'var(--survey-margin)' }}
      >
        {/* Toolbar: text filter + selection-state tabs. The rule runs the full
            table width. Items align to the bottom so the active tab's underline
            overlaps the divider, while the search bar keeps a 4px gap above it. */}
        <div className="flex items-end gap-2 @lg:gap-4">
          {filterColumnId ? (
            <SearchInput
              value={(table.getColumn(filterColumnId)?.getFilterValue() as string) ?? ''}
              onChange={(next) =>
                table.getColumn(filterColumnId)?.setFilterValue(next)
              }
              placeholder={filterPlaceholder}
              className="flex-1"
            />
          ) : (
            <span className="flex-1" />
          )}

          {/* Mobile: compact dropdown */}
          <div className="@lg:hidden shrink-0">
            <SelectPrimitive.Root
              value={selectionFilter}
              onValueChange={(next) => setSelectionFilter(next as SelectionFilter)}
            >
              <SelectPrimitive.Trigger
                aria-label="Filter rows by selection"
                className={cn(
                  'flex h-10 shrink-0 items-center gap-2 rounded-survey-md border border-survey-border-interactive bg-survey-background px-3',
                  'text-survey-body font-survey-regular text-survey-foreground transition-colors outline-none',
                  'focus-visible:border-survey-border-selected disabled:cursor-not-allowed disabled:opacity-50',
                  FOCUS_RING,
                )}
              >
                <SelectPrimitive.Value />
                <SelectPrimitive.Icon asChild>
                  <ChevronDown className="h-4 w-4 shrink-0 text-survey-muted-foreground" />
                </SelectPrimitive.Icon>
              </SelectPrimitive.Trigger>
              <SelectPrimitive.Portal>
                <SelectPrimitive.Content
                  position="popper"
                  sideOffset={4}
                  className="z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-survey-md border border-survey-border-muted bg-survey-background font-survey shadow-sm"
                >
                  <SelectPrimitive.Viewport className="p-1">
                    {FILTER_TABS.map((tab) => (
                      <SelectPrimitive.Item
                        key={tab.id}
                        value={tab.id}
                        className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 px-3 text-survey-body font-survey-regular text-survey-foreground outline-none data-[highlighted]:bg-survey-muted-background data-[state=checked]:font-bold data-[state=checked]:text-survey-primary"
                      >
                        <SelectPrimitive.ItemText>{tab.label}</SelectPrimitive.ItemText>
                      </SelectPrimitive.Item>
                    ))}
                  </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
              </SelectPrimitive.Portal>
            </SelectPrimitive.Root>
          </div>

          {/* Desktop: underlined tabs */}
          <div className="hidden @lg:block shrink-0">
            <SurveyFilterTabs
              tabs={FILTER_TABS}
              value={selectionFilter}
              onValueChange={(next) => setSelectionFilter(next as SelectionFilter)}
              aria-label="Filter rows by selection"
              className=""
            />
          </div>
        </div>

        {/* Table surface */}
        <div
          className={cn(
            'overflow-hidden rounded-survey-md border border-survey-border-muted',
          )}
        >
          <Table
            ref={tableRef}
            className="bg-survey-background"
            style={lockedColumnWidths ? { tableLayout: 'fixed' } : undefined}
          >
            {lockedColumnWidths && (
              <colgroup>
                {lockedColumnWidths.map((width, i) => (
                  <col key={i} style={{ width }} />
                ))}
              </colgroup>
            )}
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="border-b border-survey-border-muted hover:bg-transparent"
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className={cn(
                        'h-11 px-4 align-middle font-survey text-survey-body font-survey-semibold text-survey-foreground [&:has([role=checkbox])]:pr-0',
                        header.column.id === '__select__' &&
                          cn(STICKY_SELECT_BASE, 'z-20'),
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {pageRows.length ? (
                pageRows.map((row, i) =>
                  row.id === DRAFT_ROW_ID ? (
                    <TableRow
                      key={row.id}
                      className={cn(
                        'border-b border-survey-border-muted transition-colors',
                        i % 2 === 1 && 'bg-[hsl(var(--survey-border-interactive)_/_0.06)]',
                      )}
                    >
                      {row.getVisibleCells().map((cell) => {
                        const col = columnsById.get(cell.column.id);
                        return (
                          <TableCell
                            key={cell.id}
                            className={cn(
                              'px-4 py-2 align-middle text-survey-foreground font-survey-regular text-survey-body [&:has([role=checkbox])]:pr-0',
                              cell.column.id === '__select__' &&
                                cn(
                                  STICKY_SELECT_BASE,
                                  'z-10',
                                  i % 2 === 1 && STICKY_SELECT_ZEBRA,
                                ),
                            )}
                          >
                            {col &&
                              (col.format === 'dropdown' ? (
                                <DraftSelect
                                  value={draft[col.id] ?? ''}
                                  onChange={(next) => setDraftField(col.id, next)}
                                  options={col.options ?? []}
                                  placeholder={col.editPlaceholder}
                                  align={col.align}
                                  error={!!draftErrors[col.id]}
                                />
                              ) : (
                                <DraftTextInput
                                  value={draft[col.id] ?? ''}
                                  onChange={(next) => setDraftField(col.id, next)}
                                  placeholder={col.editPlaceholder ?? col.label}
                                  align={col.align}
                                  error={!!draftErrors[col.id]}
                                />
                              ))}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ) : (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() ? 'selected' : undefined}
                      className={cn(
                        'group border-b border-survey-border-muted transition-colors',
                        // Zebra striping: alternate rows use the hover token
                        // (survey-muted-background = border-interactive / 0.2) at
                        // 30% of its opacity (0.06).
                        i % 2 === 1 && 'bg-[hsl(var(--survey-border-interactive)_/_0.06)]',
                        'hover:bg-survey-muted-background',
                      )}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className={cn(
                            'px-4 py-3 align-middle text-survey-foreground font-survey-regular text-survey-body [&:has([role=checkbox])]:pr-0',
                            // Selected row: text turns semibold so the chosen row stands out.
                            'group-data-[state=selected]:font-survey-semibold',
                            cell.column.id === '__select__' &&
                              cn(
                                STICKY_SELECT_BASE,
                                'z-10',
                                // Selected row: bold left border in the primary color. Painted as an
                                // inset shadow on the sticky cell so it sits above its own background.
                                'group-data-[state=selected]:shadow-[inset_2px_0_0_0_hsl(var(--survey-primary))]',
                                i % 2 === 1 && STICKY_SELECT_ZEBRA,
                                STICKY_SELECT_HOVER,
                              ),
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ),
                )
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={colSpan}
                    className="h-24 px-4 text-center text-survey-muted-foreground font-survey-regular text-survey-body"
                  >
                    No rows.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer. Wide container: a 3-column grid keeps the pagination truly
            centered (selection count left · pagination center · add choice
            right). Narrow container: the count stacks on its own row above a
            single row holding the pagination and add-choice button. */}
        <div className="flex flex-col gap-2 @lg:grid @lg:grid-cols-3 @lg:items-center">
          <span className="@lg:justify-self-start text-survey-muted-foreground font-survey-regular text-survey-body">
            {selectedCount} of {rows.length} selected.
          </span>
          {/* On the narrow layout this groups pagination + add-choice onto one
              row; @lg:contents dissolves it so both become direct grid cells. */}
          <div className="flex items-center justify-between gap-2 @lg:contents">
          {/* Pagination is only shown when there is more than one page. */}
          {pageCount > 1 ? (
            <div className="flex items-center justify-self-center gap-1">
              {/* First page */}
              <button
                type="button"
                onClick={() => table.firstPage()}
                disabled={!canPreviousPage}
                aria-label="First page"
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-[var(--component-button-radius)] border border-survey-border-interactive bg-survey-background',
                  'text-survey-foreground transition-colors',
                  'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                  FOCUS_RING,
                )}
              >
                <FirstPage className="h-5 w-5" />
              </button>
              {/* Previous page */}
              <button
                type="button"
                onClick={() => table.previousPage()}
                disabled={!canPreviousPage}
                aria-label="Previous page"
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-[var(--component-button-radius)] border border-survey-border-interactive bg-survey-background',
                  'text-survey-foreground transition-colors',
                  'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                  FOCUS_RING,
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              {/* Page number buttons — show up to 5 pages around the current page */}
              {(() => {
                const window = 1;
                const start = Math.max(0, Math.min(pageIndex - window, pageCount - 3));
                const end = Math.min(pageCount - 1, Math.max(pageIndex + window, 2));
                return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => table.setPageIndex(p)}
                    aria-label={`Page ${p + 1}`}
                    aria-current={p === pageIndex ? 'page' : undefined}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-[var(--component-button-radius)] border text-survey-body tabular-nums transition-colors',
                      'disabled:cursor-not-allowed',
                      p === pageIndex
                        ? 'border-2 border-survey-border-selected bg-survey-background text-survey-foreground font-survey-regular'
                        : 'border-survey-border-interactive bg-survey-background text-survey-foreground font-survey-regular hover:bg-survey-muted-background',
                      FOCUS_RING,
                    )}
                  >
                    {p + 1}
                  </button>
                ));
              })()}
              {/* Next page */}
              <button
                type="button"
                onClick={() => table.nextPage()}
                disabled={!canNextPage}
                aria-label="Next page"
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-[var(--component-button-radius)] border border-survey-border-interactive bg-survey-background',
                  'text-survey-foreground transition-colors',
                  'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                  FOCUS_RING,
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              {/* Last page */}
              <button
                type="button"
                onClick={() => table.lastPage()}
                disabled={!canNextPage}
                aria-label="Last page"
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-[var(--component-button-radius)] border border-survey-border-interactive bg-survey-background',
                  'text-survey-foreground transition-colors',
                  'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                  FOCUS_RING,
                )}
              >
                <LastPage className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <span />
          )}

          {canEdit && editing ? (
            // Edit mode: tertiary Cancel on the left, primary Confirm on the right.
            <div className="flex items-center justify-self-end gap-2">
              <button
                type="button"
                onClick={cancelEditing}
                aria-label={cancelLabel}
                className={cn(
                  // Icon-only square button in the narrow (container) layout;
                  // expands to a labelled button once the container is wide.
                  'flex h-9 w-9 @lg:w-auto items-center justify-center gap-2 rounded-[var(--component-button-radius)] bg-transparent px-0 @lg:px-3',
                  'text-survey-body font-medium text-survey-foreground transition-colors',
                  'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                  FOCUS_RING,
                )}
              >
                <X className="h-4 w-4 @lg:hidden" />
                <span className="hidden @lg:inline">{cancelLabel}</span>
              </button>
              <button
                type="button"
                onClick={confirmEditing}
                aria-label={confirmLabel}
                // Same visual style as the "Add choice" button.
                className={cn(
                  // Icon-only square button in the narrow (container) layout;
                  // expands to a labelled button once the container is wide.
                  'flex h-9 w-9 @lg:w-auto items-center justify-center gap-2 rounded-[var(--component-button-radius)] border border-survey-border-interactive bg-survey-background px-0 @lg:px-3',
                  'text-survey-body font-medium text-survey-foreground transition-colors',
                  'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                  FOCUS_RING,
                )}
              >
                <Check className="h-4 w-4 @lg:hidden" />
                <span className="hidden @lg:inline">{confirmLabel}</span>
              </button>
            </div>
          ) : canEdit && justConfirmed ? (
            // Transient success state: solid brand-secondary (teal) fill, white label +
            // check. Referenced via the brand token directly so it stays teal inside the
            // survey theme scope (where the generic --secondary token resolves to grey).
            <div
              role="status"
              aria-live="polite"
              className={cn(
                'flex h-9 items-center justify-self-end gap-2 rounded-[var(--component-button-radius)] px-3',
                'bg-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-secondary-foreground))]',
                'text-survey-body font-medium transition-colors',
              )}
            >
              <Check className="h-4 w-4" />
              {confirmedLabel}
            </div>
          ) : canEdit ? (
            <button
              type="button"
              onClick={startEditing}
              aria-label={addChoiceLabel}
              className={cn(
                // Icon-only square button in the narrow (container) layout;
                // expands to an icon + label button once the container is wide.
                'flex h-9 w-9 @lg:w-auto items-center justify-center justify-self-end gap-2 rounded-[var(--component-button-radius)] border border-survey-border-interactive bg-survey-background px-0 @lg:px-3',
                // Size tracks the survey theme (text-survey-body); weight stays
                // medium to match the other survey action buttons.
                'text-survey-body font-medium text-survey-foreground transition-colors',
                'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                FOCUS_RING,
              )}
            >
              <Plus className="h-4 w-4" />
              <span className="hidden @lg:inline">{addChoiceLabel}</span>
            </button>
          ) : (
            <span />
          )}
          </div>
        </div>
      </div>
    );
  },
);

SurveyLookupTable.displayName = 'SurveyLookupTable';

export { SurveyLookupTable };
