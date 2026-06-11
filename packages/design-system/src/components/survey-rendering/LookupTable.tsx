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
import { Check, ChevronDown, ChevronLeft, ChevronRight, Plus, Search } from '../ui/icons';
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
  /** Label for the cancel button shown while adding a choice. */
  cancelLabel?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * Outer focus border shown on keyboard (tab) navigation — a 2px
 * `survey-border-interactive` ring offset 2px from the control, sitting over
 * the survey background. Shared by the footer's pagination and action buttons.
 */
const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-interactive focus-visible:ring-offset-2 focus-visible:ring-offset-survey-background';

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
      'aria-[invalid=true]:border-survey-destructive',
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
    disabled?: boolean;
    className?: string;
  }
>(({ value, onChange, placeholder, disabled, className }, ref) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <div
      className={cn('flex flex-col w-full max-w-[16rem] group/survey-input', className)}
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
            disabled={disabled}
            onBlur={() => setSelected(false)}
            className="w-full bg-transparent text-survey-body font-survey-regular focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-survey-foreground font-survey placeholder:text-survey-muted-foreground"
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
  disabled?: boolean;
  error?: boolean;
}> = ({ value, onChange, placeholder, align, disabled, error }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    disabled={disabled}
    aria-invalid={error || undefined}
    className={cn(
      'flex h-9 w-full min-w-0 rounded-survey-md border border-survey-border-interactive bg-transparent px-2',
      'text-survey-body font-survey-regular text-survey-foreground transition-colors',
      'placeholder:text-survey-muted-foreground',
      'focus-visible:outline-none focus-visible:border-survey-border-selected',
      'disabled:cursor-not-allowed disabled:opacity-50',
      error && 'border-2 border-survey-destructive placeholder:text-survey-destructive',
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
  disabled?: boolean;
  error?: boolean;
}> = ({ value, onChange, options, placeholder = 'Select…', align, disabled, error }) => (
  <SelectPrimitive.Root value={value || undefined} onValueChange={onChange} disabled={disabled}>
    <SelectPrimitive.Trigger
      aria-invalid={error || undefined}
      className={cn(
        'flex h-9 w-full min-w-0 items-center justify-between gap-2 rounded-survey-md border border-survey-border-interactive bg-transparent px-2',
        'text-survey-body font-survey-regular text-survey-foreground transition-colors outline-none',
        'focus-visible:border-survey-border-selected',
        'disabled:cursor-not-allowed disabled:opacity-50',
        '[&>span]:truncate data-[placeholder]:[&>span]:text-survey-muted-foreground',
        error && 'border-2 border-survey-destructive data-[placeholder]:[&>span]:text-survey-destructive',
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
      cancelLabel = 'Cancel',
      error,
      disabled = false,
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
      setDraft({});
      setDraftErrors({});
      setEditing(true);
    };
    const cancelEditing = () => {
      setEditing(false);
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
        onAddRow({
          id: `lookup-new-${Date.now()}-${newRowSeq.current}`,
          data: { ...draft },
        });
      } else {
        // No row sink provided — just notify that a choice was confirmed.
        onAddChoice?.();
      }
      setEditing(false);
      setDraft({});
      setDraftErrors({});
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
            disabled={disabled}
            aria-label="Select all rows"
            aria-invalid={!!error || undefined}
          />
        ),
        cell: ({ row }) => (
          <SurveyCheckbox
            checked={row.getIsSelected()}
            onCheckedChange={(checked) => row.toggleSelected(!!checked)}
            disabled={disabled}
            aria-label="Select row"
            aria-invalid={!!error || undefined}
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
                disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:text-survey-foreground',
              )}
              onClick={() =>
                !disabled && column.toggleSorting(column.getIsSorted() === 'asc')
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
    }, [columns, rowActions, disabled, error]);

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
      // The draft row is never part of the answer, so it can't be selected.
      enableRowSelection: disabled ? false : (row) => row.id !== DRAFT_ROW_ID,
      enableSortingRemoval: true,
      onRowSelectionChange: (updater) => {
        const next =
          typeof updater === 'function' ? updater(rowSelection) : updater;
        emitSelection(next);
      },
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onPaginationChange: setPagination,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });

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
          'flex w-full flex-col font-survey text-survey-body',
          disabled && 'opacity-60',
          className,
        )}
        style={{ gap: 'var(--survey-margin)' }}
        aria-invalid={!!error || undefined}
      >
        {/* Toolbar: text filter + selection-state tabs. The rule runs the full
            table width. Items align to the bottom so the active tab's underline
            overlaps the divider, while the search bar keeps a 4px gap above it. */}
        <div className="flex flex-wrap items-end justify-between gap-2 border-b border-survey-border-muted">
          {filterColumnId ? (
            <SearchInput
              value={(table.getColumn(filterColumnId)?.getFilterValue() as string) ?? ''}
              onChange={(next) =>
                table.getColumn(filterColumnId)?.setFilterValue(next)
              }
              placeholder={filterPlaceholder}
              disabled={disabled}
              className="mb-1"
            />
          ) : (
            <span />
          )}

          <SurveyFilterTabs
            tabs={FILTER_TABS}
            value={selectionFilter}
            onValueChange={(next) => setSelectionFilter(next as SelectionFilter)}
            disabled={disabled}
            aria-label="Filter rows by selection"
            className="border-b-0"
          />
        </div>

        {/* Table surface */}
        <div
          className={cn(
            'overflow-hidden rounded-survey-md border border-survey-border-muted',
          )}
        >
          <Table className="bg-survey-background">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="border-b border-survey-border-muted hover:bg-transparent"
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="h-11 px-4 align-middle font-survey text-survey-body font-survey-semibold text-survey-foreground [&:has([role=checkbox])]:pr-0"
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
                            className="px-4 py-2 align-middle text-survey-foreground font-survey-regular text-survey-body [&:has([role=checkbox])]:pr-0"
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
                        'border-b border-survey-border-muted transition-colors',
                        // Zebra striping: alternate rows use the hover token
                        // (survey-muted-background = border-interactive / 0.2) at
                        // 30% of its opacity (0.06).
                        i % 2 === 1 && 'bg-[hsl(var(--survey-border-interactive)_/_0.06)]',
                        !disabled && 'hover:bg-survey-muted-background',
                      )}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          className="px-4 py-3 align-middle text-survey-foreground font-survey-regular text-survey-body [&:has([role=checkbox])]:pr-0"
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

        {error && (
          <span className="text-survey-destructive font-survey-regular text-survey-body">
            {error}
          </span>
        )}

        {/* Footer: selection count (left) · pagination (center) · add choice
            (right). A 3-column grid keeps the pagination truly centered
            regardless of the side content widths. */}
        <div className="grid grid-cols-3 items-center gap-2">
          <span className="justify-self-start text-survey-muted-foreground font-survey-regular text-survey-body">
            {selectedCount} of {rows.length} row(s) selected.
          </span>
          {/* Pagination is only shown when there is more than one page. Each
              chevron only appears when there is a page to move to in that
              direction. */}
          {pageCount > 1 ? (
            <div className="flex items-center justify-self-center gap-2">
              {canPreviousPage && (
                <button
                  type="button"
                  onClick={() => table.previousPage()}
                  disabled={disabled}
                  aria-label="Previous page"
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-survey-md border border-survey-border-interactive bg-survey-background',
                    'text-survey-foreground transition-colors',
                    'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                    FOCUS_RING,
                  )}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <span className="px-1 text-survey-foreground font-survey-regular text-survey-body tabular-nums">
                {pageIndex + 1}/{pageCount}
              </span>
              {canNextPage && (
                <button
                  type="button"
                  onClick={() => table.nextPage()}
                  disabled={disabled}
                  aria-label="Next page"
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-survey-md border border-survey-border-interactive bg-survey-background',
                    'text-survey-foreground transition-colors',
                    'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                    FOCUS_RING,
                  )}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
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
                disabled={disabled}
                className={cn(
                  'flex h-9 items-center gap-2 rounded-survey-md bg-transparent px-3',
                  'text-survey-body font-medium text-survey-foreground transition-colors',
                  'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                  FOCUS_RING,
                )}
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                onClick={confirmEditing}
                disabled={disabled}
                // Same visual style as the "Add choice" button.
                className={cn(
                  'flex h-9 items-center gap-2 rounded-survey-md border border-survey-border-interactive bg-survey-background px-3',
                  'text-survey-body font-medium text-survey-foreground transition-colors',
                  'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                  FOCUS_RING,
                )}
              >
                {confirmLabel}
              </button>
            </div>
          ) : canEdit ? (
            <button
              type="button"
              onClick={startEditing}
              disabled={disabled}
              className={cn(
                'flex h-9 items-center justify-self-end gap-2 rounded-survey-md border border-survey-border-interactive bg-survey-background px-3',
                // Size tracks the survey theme (text-survey-body); weight stays
                // medium to match the other survey action buttons.
                'text-survey-body font-medium text-survey-foreground transition-colors',
                'hover:bg-survey-muted-background disabled:cursor-not-allowed disabled:opacity-50',
                FOCUS_RING,
              )}
            >
              <Plus className="h-4 w-4" />
              {addChoiceLabel}
            </button>
          ) : (
            <span />
          )}
        </div>
      </div>
    );
  },
);

SurveyLookupTable.displayName = 'SurveyLookupTable';

export { SurveyLookupTable };
