'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {
  type ColumnDef,
  type ColumnFiltersState,
  type RowSelectionState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Check, ChevronLeft, ChevronRight, Search } from '../ui/icons';
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
  error?: string;
  disabled?: boolean;
  className?: string;
}

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
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--survey-primary)_/_0.3)]',
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
      pageSize = 5,
      rowActions,
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

    const table = useReactTable({
      data: rows,
      columns: tableColumns,
      state: { rowSelection, sorting, columnFilters },
      getRowId: (row) => row.id,
      enableRowSelection: !disabled,
      onRowSelectionChange: (updater) => {
        const next =
          typeof updater === 'function' ? updater(rowSelection) : updater;
        emitSelection(next);
      },
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: { pagination: { pageSize } },
    });

    // Apply the selection-state tab filter on top of the (sorted, text-filtered)
    // row model. This is presentation-only and does not affect the answer.
    const pageRows = table.getRowModel().rows.filter((row) => {
      if (selectionFilter === 'selected') return row.getIsSelected();
      if (selectionFilter === 'not-selected') return !row.getIsSelected();
      return true;
    });

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
                      className="h-11 px-4 align-middle text-survey-muted-foreground font-survey-semibold text-survey-body [&:has([role=checkbox])]:pr-0"
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
                pageRows.map((row, i) => (
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
                ))
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

        {/* Footer: selection count + pagination */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-survey-muted-foreground font-survey-regular text-survey-body">
            {selectedCount} of {rows.length} row(s) selected.
          </span>
          {/* Pagination is only shown when there is more than one page. Each
              chevron only appears when there is a page to move to in that
              direction. */}
          {pageCount > 1 && (
            <div className="flex items-center gap-2">
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
                  )}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  },
);

SurveyLookupTable.displayName = 'SurveyLookupTable';

export { SurveyLookupTable };
