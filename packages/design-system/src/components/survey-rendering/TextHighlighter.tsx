'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { DropdownAnswer } from './DropdownAnswer';
import { TextAnswer } from './TextAnswer';
import { Icon } from '../ui/icon';
import { AlertCircle, Check, X } from '../ui/icons';

export interface TextHighlightCategory {
  id: string;
  label: string;
  /**
   * Optional color override (any CSS color). When omitted the category falls
   * back to a rotating, token-based palette so authors don't have to pick
   * colors themselves.
   */
  color?: string;
  /**
   * Optional override for the low-opacity resting fill only. When set, the
   * resting highlight is filled with this color while `color` still drives the
   * underline and the full-opacity (editing) state — e.g. a yellow `fillColor`
   * paired with a brown `color`. When omitted the fill is derived from `color`.
   */
  fillColor?: string;
  /**
   * Open-end prompt shown above the text-answer field (the `withTextAnswer`
   * variation) once this category is selected, e.g. "What do you like about this
   * statement?" for a "Like" category.
   */
  question?: string;
}

/**
 * A passage is an ordered list of parts (segments variant only). Plain strings
 * render as static, non-selectable text; objects are predefined selectable
 * segments the respondent can tag with a category.
 */
export type TextHighlightPart = string | { id: string; text: string };

/** Answer: maps a highlighted unit id to the category id assigned to it.
 *  - freeform variant: the unit id is a word index, e.g. `"w12"`.
 *  - segments variant: the unit id is the author-supplied segment id. */
export type TextHighlightValue = Record<string, string>;

/** Optional per-highlight free-text answers (the `withTextAnswer` variation),
 *  keyed by the same unit ids as {@link TextHighlightValue}. The note is stored
 *  on every unit of a highlight run, mirroring how its category is stored. */
export type TextHighlightNotes = Record<string, string>;

interface TextHighlighterBaseProps {
  /** Required unless `withoutCategory` is set, where it is ignored. */
  categories?: TextHighlightCategory[];
  value?: TextHighlightValue;
  defaultValue?: TextHighlightValue;
  onChange?: (value: TextHighlightValue) => void;
  /** Toolbar labels (also used as aria-labels). */
  highlightLabel?: string;
  eraseLabel?: string;
  className?: string;
  /**
   * When true, there are no categories: highlighting applies immediately and the
   * edit-mode panel (category dropdown + Cancel/Confirm) is never shown. The
   * Highlight / Erase toolbar still applies. `categories` and `withTextAnswer`
   * are ignored in this variant.
   */
  withoutCategory?: boolean;
  /**
   * When true, the edit-mode panel shows a free-text field below the category
   * dropdown so the respondent can attach a written answer to each highlight.
   */
  withTextAnswer?: boolean;
  /** Placeholder for the text-answer field (also its aria-label). */
  textAnswerLabel?: string;
  /** Controlled per-highlight text answers (see {@link TextHighlightNotes}). */
  notes?: TextHighlightNotes;
  defaultNotes?: TextHighlightNotes;
  onNotesChange?: (notes: TextHighlightNotes) => void;
}

/**
 * Freeform variant (default): the author supplies a plain prose `text`. It is
 * tokenized into words and the respondent can highlight any word(s) by dragging
 * (or long-pressing on touch) across them — the selection snaps to whole words.
 */
export interface TextHighlighterFreeformProps extends TextHighlighterBaseProps {
  variant?: 'freeform';
  text: string;
}

/**
 * Segments variant: the author defines exactly which spans are highlightable via
 * `parts` (plain strings are static text, objects are selectable segments).
 * Respondents tap a segment to highlight it.
 */
export interface TextHighlighterSegmentsProps extends TextHighlighterBaseProps {
  variant: 'segments';
  parts: TextHighlightPart[];
}

/**
 * Props for {@link TextHighlighter}. Supply `text` for the freeform variant
 * (default) or `variant="segments"` with `parts` for the segments variant — see
 * {@link TextHighlighterFreeformProps} and {@link TextHighlighterSegmentsProps}
 * for the per-variant required fields.
 */
export interface TextHighlighterProps extends TextHighlighterBaseProps {
  variant?: 'freeform' | 'segments';
  text?: string;
  parts?: TextHighlightPart[];
}

// Survey-token default palette, used in order for categories that don't set
// their own `color`. The first two slots map to the secondary and error tokens
// the theme editor establishes (e.g. Like / Dislike): the brand secondary lives
// in `--survey-border-accent` (apply-theme sets it from the secondary swatch),
// and the error color in `--survey-destructive`. The rest cycle through the
// remaining semantic survey tokens.
const DEFAULT_PALETTE = [
  'hsl(var(--survey-border-accent))',
  'hsl(var(--survey-destructive))',
  'hsl(var(--survey-warning))',
  'hsl(var(--survey-info))',
  'hsl(var(--survey-success))',
];

// In the `withoutCategory` variant there are no categories to assign, so every
// highlight is stored under this single sentinel id (colored by the primary
// token). It reuses the same Record<unitId, id> value model as the categorized
// variants, so run-merging, erasing and re-rendering all work unchanged.
const CATEGORYLESS_ID = '__highlight__';

type Token =
  | { kind: 'static'; text: string }
  | { kind: 'unit'; id: string; text: string };

type Tool = 'highlight' | 'erase';

// Highlight fill: a borderless, lower-opacity fill of the category color PLUS a
// colored underline. The underline keeps the highlight perceivable for people who
// can't distinguish the subtle color (WCAG 1.4.1).
// `lineColor` drives the full-opacity underline; `fillColor` (defaulting to
// `lineColor`) the low-opacity fill, so a category can pair, say, a yellow fill
// with a brown underline.
const fillStyle = (
  lineColor: string,
  fillColor: string = lineColor,
): React.CSSProperties => ({
  backgroundColor: `color-mix(in srgb, ${fillColor} 22%, transparent)`,
  textDecorationLine: 'underline',
  textDecorationColor: lineColor,
  textDecorationThickness: '2px',
  textUnderlineOffset: '3px',
});

// Resolve a CSS color string (incl. `hsl(var(--token))`) to [r,g,b] by painting
// it on a detached probe inside the themed scope, then pick black/white text for
// legible contrast (relative luminance, WCAG threshold ~0.4). Used to flip the
// text color when an existing highlight is lifted to full opacity during editing.
const readableForeground = (color: string, scope: HTMLElement): string => {
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none';
  probe.style.color = color;
  scope.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  scope.removeChild(probe);
  const channels = resolved.match(/\d+(\.\d+)?/g)?.slice(0, 3).map(Number);
  if (!channels) return '#ffffff';
  const [r, g, b] = channels.map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.4 ? '#1a1a1a' : '#ffffff';
};

const TextHighlighter = React.forwardRef<HTMLDivElement, TextHighlighterProps>(
  (props, ref) => {
    const {
      categories = [],
      value,
      defaultValue,
      onChange,
      className,
      highlightLabel = 'Highlight',
      eraseLabel = 'Erase',
      withoutCategory = false,
      withTextAnswer = false,
      textAnswerLabel = 'Add a note',
      notes,
      defaultNotes,
      onNotesChange,
    } = props;
    const variant = props.variant ?? 'freeform';

    const [internalValue, setInternalValue] = React.useState<TextHighlightValue>(
      defaultValue ?? {},
    );
    const currentValue = value ?? internalValue;

    const [internalNotes, setInternalNotes] = React.useState<TextHighlightNotes>(
      defaultNotes ?? {},
    );
    const currentNotes = notes ?? internalNotes;

    // `null` means neither tool is active (selections/clicks do nothing).
    const [activeTool, setActiveTool] = React.useState<Tool | null>('highlight');
    // `pending` holds the unit ids currently being tagged. While set, the
    // component is in "edit mode": the toolbar is replaced by a category picker.
    const [pending, setPending] = React.useState<string[] | null>(null);
    const [draftCategory, setDraftCategory] = React.useState<string>('');
    // Draft free-text answer for the pending highlight (withTextAnswer only).
    const [draftNote, setDraftNote] = React.useState<string>('');
    // Transient state after Confirm is pressed: the button shows a "confirmed"
    // success style for 0.5s before the highlight is actually committed.
    const [confirming, setConfirming] = React.useState(false);
    const confirmTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    // Set when Confirm is pressed with no category chosen.
    const [categoryError, setCategoryError] = React.useState(false);
    // Per-category legible text colors, used to flip the text when an existing
    // highlight is lifted to full opacity while it is being re-edited.
    const [foregroundById, setForegroundById] = React.useState<
      Record<string, string>
    >({});

    const containerRef = React.useRef<HTMLDivElement>(null);
    // True when the last interaction was a drag-selection, so the click that
    // follows mouseup doesn't double-handle it.
    const draggedRef = React.useRef(false);

    // Resolve each category's effective color once (override or palette slot).
    // The categoryless variant gets a single primary-colored highlight.
    const colorById = React.useMemo(() => {
      const map: Record<string, string> = {};
      categories.forEach((category, index) => {
        map[category.id] =
          category.color ?? DEFAULT_PALETTE[index % DEFAULT_PALETTE.length];
      });
      if (withoutCategory) map[CATEGORYLESS_ID] = 'hsl(var(--survey-primary))';
      return map;
    }, [categories, withoutCategory]);

    // Resting-fill color per category. Falls back to the category color (so the
    // fill is just a low-opacity tint of it) unless a separate `fillColor` is set.
    const fillById = React.useMemo(() => {
      const map: Record<string, string> = {};
      categories.forEach((category) => {
        if (category.fillColor) map[category.id] = category.fillColor;
      });
      return map;
    }, [categories]);

    // Resolve a legible flipped text color for each highlight color (used when an
    // existing highlight is lifted to full opacity while being re-edited). Keyed on
    // a primitive color signature (not the `colorById` reference) so it runs only
    // when the colors actually change.
    const colorSignature = Object.entries(colorById)
      .map(([id, color]) => `${id}:${color}`)
      .join('|');
    React.useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      setForegroundById(
        Object.fromEntries(
          Object.entries(colorById).map(([id, color]) => [
            id,
            readableForeground(color, el),
          ]),
        ),
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colorSignature]);

    // Clear pending timers on unmount.
    React.useEffect(
      () => () => {
        if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current);
      },
      [],
    );

    // Tokenize the passage. Freeform splits prose into words (selectable units)
    // and whitespace (static); segments map parts directly.
    const tokens = React.useMemo<Token[]>(() => {
      if (variant === 'segments') {
        return (props.parts ?? []).map((part) =>
          typeof part === 'string'
            ? { kind: 'static', text: part }
            : { kind: 'unit', id: part.id, text: part.text },
        );
      }
      const raw = (props.text ?? '').split(/(\s+)/).filter((t) => t.length > 0);
      let wordIndex = 0;
      return raw.map((t) =>
        /^\s+$/.test(t)
          ? { kind: 'static', text: t }
          : { kind: 'unit', id: `w${wordIndex++}`, text: t },
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variant, props.parts, props.text]);

    const wordCount = React.useMemo(
      () => tokens.reduce((n, t) => (t.kind === 'unit' ? n + 1 : n), 0),
      [tokens],
    );

    const hasHighlights = Object.keys(currentValue).length > 0;

    // When the last highlight is erased the Erase tool has nothing left to act on
    // — and in segments its toggle disappears, leaving no way back to highlighting
    // — so fall back to the always-available Highlight tool.
    React.useEffect(() => {
      if (!hasHighlights && activeTool === 'erase') setActiveTool('highlight');
    }, [hasHighlights, activeTool]);

    const commit = (next: TextHighlightValue) => {
      if (value === undefined) setInternalValue(next);
      onChange?.(next);
    };

    const commitNotes = (next: TextHighlightNotes) => {
      if (notes === undefined) setInternalNotes(next);
      onNotesChange?.(next);
    };

    // Categoryless variant: highlight the units immediately under the sentinel id,
    // with no edit-mode panel.
    const applyHighlight = (ids: string[]) => {
      const next = { ...currentValue };
      ids.forEach((id) => {
        next[id] = CATEGORYLESS_ID;
      });
      commit(next);
    };

    // A "run" is the set of units edited together. In freeform it's the maximal
    // span of consecutive same-category words around `id`; in segments it's just
    // the segment itself.
    const getRun = (id: string): string[] => {
      const cat = currentValue[id];
      if (variant === 'segments' || !cat) return [id];
      const n = Number(id.slice(1));
      const ids = [id];
      for (let i = n - 1; i >= 0 && currentValue[`w${i}`] === cat; i--) {
        ids.unshift(`w${i}`);
      }
      for (let i = n + 1; i < wordCount && currentValue[`w${i}`] === cat; i++) {
        ids.push(`w${i}`);
      }
      return ids;
    };

    const removeUnits = (ids: string[]) => {
      const next = { ...currentValue };
      ids.forEach((id) => delete next[id]);
      commit(next);
      if (withTextAnswer) {
        const nextNotes = { ...currentNotes };
        ids.forEach((id) => delete nextNotes[id]);
        commitNotes(nextNotes);
      }
    };

    const clearConfirmTimer = () => {
      if (confirmTimerRef.current) {
        clearTimeout(confirmTimerRef.current);
        confirmTimerRef.current = null;
      }
    };

    // Reset all edit-mode state (exits the panel).
    const resetEdit = () => {
      clearConfirmTimer();
      setPending(null);
      setDraftCategory('');
      setDraftNote('');
      setConfirming(false);
      setCategoryError(false);
    };

    // Enter edit mode for `ids`: seed the picker with their existing category
    // (and note, when withTextAnswer) when they all share one so re-editing a
    // highlight pre-fills it.
    const openPending = (ids: string[]) => {
      const first = currentValue[ids[0]];
      const uniform = first && ids.every((id) => currentValue[id] === first);
      setPending(ids);
      setDraftCategory(uniform ? first : '');
      setDraftNote(withTextAnswer ? currentNotes[ids[0]] ?? '' : '');
      setCategoryError(false);
    };

    const confirmCategory = () => {
      if (!pending || confirming) return;
      // No category chosen -> surface the inline error instead of applying.
      if (!draftCategory) {
        setCategoryError(true);
        return;
      }
      // Capture the draft so the deferred commit isn't affected by later edits.
      const ids = pending;
      const category = draftCategory;
      const note = draftNote;
      // Show the "confirmed" success style for 0.5s, then actually apply.
      setConfirming(true);
      clearConfirmTimer();
      confirmTimerRef.current = setTimeout(() => {
        const next = { ...currentValue };
        ids.forEach((id) => {
          next[id] = category;
        });
        commit(next);
        if (withTextAnswer) {
          // Store the note on every unit of the run (or clear it when empty).
          const trimmed = note.trim();
          const nextNotes = { ...currentNotes };
          ids.forEach((id) => {
            if (trimmed) nextNotes[id] = trimmed;
            else delete nextNotes[id];
          });
          commitNotes(nextNotes);
        }
        resetEdit();
      }, 500);
    };

    const chooseCategory = (categoryId: string) => {
      setDraftCategory(categoryId);
      setCategoryError(false);
    };

    const cancelEdit = () => {
      resetEdit();
    };

    // Clicking the active tool deactivates it (both tools off); clicking the
    // other tool switches to it. In the segments variant the Highlight tool is
    // always on and its toggle is hidden, so deactivating Erase falls back to
    // Highlight rather than to no tool.
    const selectTool = (tool: Tool) => {
      setActiveTool((prev) =>
        prev === tool ? (variant === 'segments' ? 'highlight' : null) : tool,
      );
      resetEdit();
    };

    // Collect the word units intersecting the current native text selection
    // (freeform only), or null if there is no usable selection in the passage.
    const getSelectionIds = (): string[] | null => {
      if (variant !== 'freeform') return null;
      const sel = window.getSelection();
      const el = containerRef.current;
      if (!sel || sel.isCollapsed || sel.rangeCount === 0 || !el) return null;
      const range = sel.getRangeAt(0);
      if (!el.contains(range.commonAncestorContainer)) return null;
      const ids: string[] = [];
      el.querySelectorAll('[data-unit-id]').forEach((node) => {
        if (range.intersectsNode(node)) {
          ids.push(node.getAttribute('data-unit-id')!);
        }
      });
      return ids.length ? ids : null;
    };

    // Drag-select handler (freeform): with the highlight tool active a selection
    // enters edit mode; with the erase tool it removes the words.
    const handlePointerUp = () => {
      // No tool active -> leave the native selection alone, apply nothing.
      if (variant !== 'freeform' || !activeTool) return;
      const ids = getSelectionIds();
      if (!ids) {
        draggedRef.current = false;
        return;
      }
      window.getSelection()?.removeAllRanges();
      draggedRef.current = true;
      // Categoryless: apply the highlight immediately; otherwise open edit mode.
      if (activeTool === 'erase') removeUnits(ids);
      else if (withoutCategory) applyHighlight(ids);
      else openPending(ids);
    };

    // Clicking the Highlight toggle: if there's a live text selection, apply it
    // (enter edit mode, or highlight immediately when categoryless) — the "select
    // words first, then Highlight" path. Otherwise toggle the tool on/off.
    const handleHighlightToggle = () => {
      const ids = getSelectionIds();
      if (ids) {
        window.getSelection()?.removeAllRanges();
        if (activeTool !== 'highlight') setActiveTool('highlight');
        if (withoutCategory) applyHighlight(ids);
        else openPending(ids);
        return;
      }
      selectTool('highlight');
    };

    const handleUnitClick = (id: string) => {
      // A drag-selection already handled this interaction.
      if (draggedRef.current) {
        draggedRef.current = false;
        return;
      }
      const assigned = currentValue[id];
      if (activeTool === 'erase') {
        if (assigned) removeUnits(getRun(id));
        return;
      }
      if (activeTool !== 'highlight') return; // no tool active
      // Categoryless: highlight the word (no edit mode); already-highlighted words
      // are left to the Erase tool. Otherwise re-enter edit mode or start anew.
      if (withoutCategory) {
        if (!assigned) applyHighlight([id]);
        return;
      }
      openPending(assigned ? getRun(id) : [id]);
    };

    const renderUnit = (token: Extract<Token, { kind: 'unit' }>) => {
      const assigned = currentValue[token.id];
      const color = assigned ? colorById[assigned] : undefined;
      const isPending = pending?.includes(token.id);
      const label = categories.find((c) => c.id === assigned)?.label;

      // A confirmed highlight is a subtle fill + colored underline. The whitespace
      // between same-category words is styled to match so a multi-word run reads as
      // one continuous block (incl. a continuous underline).
      const assignedStyle = color
        ? fillStyle(color, assigned ? fillById[assigned] : undefined)
        : undefined;

      // While a selection is pending (words picked, category not yet confirmed):
      //  - re-editing an existing highlight (the pending words already have a
      //    category): lift it from low to full opacity, flipping the text color to
      //    keep contrast.
      //  - new selection (no category yet): the same grey background as the hover
      //    state (applied via the `bg-survey-muted-background` class below) PLUS a
      //    neutral underline in the regular text color.
      const isPendingNew = isPending && !assigned;
      const style: React.CSSProperties | undefined = isPending
        ? assigned
          ? {
              backgroundColor: colorById[assigned],
              color: foregroundById[assigned],
            }
          : {
              textDecorationLine: 'underline',
              textDecorationColor: 'hsl(var(--survey-foreground))',
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
            }
        : assignedStyle;

      return (
        <span
          key={token.id}
          data-unit-id={token.id}
          role="button"
          tabIndex={0}
          aria-pressed={!!assigned}
          aria-label={label ? `${token.text}: ${label}` : token.text}
          onClick={() => handleUnitClick(token.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleUnitClick(token.id);
            }
          }}
          className={cn(
            'px-0.5 transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-survey-border-selected',
            activeTool ? 'cursor-pointer' : 'cursor-default',
            // Pending new selection: reuse the hover grey background.
            isPendingNew && 'bg-survey-muted-background',
            activeTool &&
              !assigned &&
              !isPending &&
              (variant === 'segments'
                ? 'underline decoration-dotted decoration-survey-foreground underline-offset-4 hover:bg-survey-muted-background'
                : 'hover:bg-survey-muted-background'),
          )}
          style={style}
        >
          {token.text}
        </span>
      );
    };

    // Whitespace between two same-category words (freeform only) is tinted so a
    // multi-word highlight reads as one continuous block.
    const renderStatic = (token: Extract<Token, { kind: 'static' }>, i: number) => {
      let style: React.CSSProperties | undefined;
      if (variant === 'freeform' && /^\s+$/.test(token.text)) {
        const prev = tokens[i - 1];
        const next = tokens[i + 1];
        if (prev?.kind === 'unit' && next?.kind === 'unit') {
          const pc = currentValue[prev.id];
          if (pc && pc === currentValue[next.id]) {
            // When the run is being re-edited it is lifted to full opacity, so the
            // joining whitespace matches with a solid fill too.
            const runPending =
              !!pending?.includes(prev.id) &&
              !!pending?.includes(next.id);
            style = runPending
              ? { backgroundColor: colorById[pc] }
              : fillStyle(colorById[pc], fillById[pc]);
          }
        }
      }
      return (
        <span
          key={`static-${i}`}
          // In segments, the static (non-highlightable) text is muted to match the
          // LookupTable "X of Y selected" caption color.
          className={variant === 'segments' ? 'text-survey-muted-foreground' : undefined}
          style={style}
        >
          {token.text}
        </span>
      );
    };

    // Cancel / Confirm icon buttons for the edit-mode panel. They sit next to the
    // category dropdown normally, or next to the text-answer field when one is
    // shown (withTextAnswer).
    const cancelButton = (
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Cancel"
        onClick={cancelEdit}
        className="shrink-0 rounded-[var(--component-button-radius)] border-survey-border-interactive text-survey-foreground hover:bg-survey-muted-background"
      >
        <X aria-hidden="true" />
      </Button>
    );
    const confirmButton = (
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Confirm"
        onClick={confirmCategory}
        className={cn(
          'shrink-0 rounded-[var(--component-button-radius)]',
          // For 1s after pressing Confirm, show the "confirmed" success style
          // (solid brand-secondary fill + white check), matching LookupTable.
          // Brand token is used directly so it stays teal inside the survey scope.
          confirming
            ? 'border-[hsl(var(--brand-secondary))] bg-[hsl(var(--brand-secondary))] text-[hsl(var(--brand-secondary-foreground))]'
            : // Resting style mirrors the LookupTable mobile (icon-only) Confirm
              // button: neutral interactive border + foreground check.
              'border-survey-border-interactive text-survey-foreground hover:bg-survey-muted-background',
        )}
      >
        <Check aria-hidden="true" />
      </Button>
    );
    const editActions = (
      <>
        {cancelButton}
        {confirmButton}
      </>
    );

    return (
      <div ref={ref} className={cn('flex flex-col w-full max-h-full min-h-0', className)}>
        {/* Toolbar. Freeform shows the Highlight tool (from the start) and Erase
            (once a highlight exists). Segments hides the Highlight toggle (the
            Highlight tool is always on) and shows only Erase, so the bar is
            omitted entirely until the first segment is highlighted. While editing
            a selection it is replaced by a category picker + Confirm.
            The controls sit above the scrollable passage box, so a long passage
            scrolls within its own borders while the controls stay in view. */}
        {(!!pending || variant !== 'segments' || hasHighlights) && (
          <div
            className="shrink-0 bg-survey-background"
            // 8px gap between the toggles and the text box's top border.
            // (--survey-margin is unset outside an applied theme, so fall back to 8px.)
            style={{ paddingBottom: 'var(--survey-margin, 8px)' }}
          >
            {pending ? (
            <div className="flex flex-col" style={{ gap: 'var(--survey-margin)' }}>
              {categoryError && (
                <p
                  role="alert"
                  className="flex items-center gap-1 pb-1 text-survey-support font-survey font-survey-regular text-survey-destructive w-full"
                >
                  <AlertCircle className="flex-shrink-0 w-4 h-4" aria-hidden="true" />
                  Please select a category
                </p>
              )}
              {/* Category dropdown. Without a text answer it shares its row with
                  Cancel/Confirm; with a text answer the actions move down beside
                  the text-answer field, which is rendered below the passage. */}
              <div className="flex items-center gap-2">
                {/* DropdownAnswer sizes itself to `w-fit`; the wrapper + child
                    overrides stretch it (and its inner wrappers) to fill the row. */}
                <div className="flex-1 min-w-0 [&>div]:w-full [&>div>div]:w-full">
                  <DropdownAnswer
                    aria-label="Select category"
                    options={categories.map((category) => ({
                      value: category.id,
                      label: category.label,
                      color: colorById[category.id],
                    }))}
                    placeholder="Select category"
                    value={draftCategory || undefined}
                    onValueChange={chooseCategory}
                    className="w-full min-w-0"
                  />
                </div>
                {!withTextAnswer && editActions}
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              {variant !== 'segments' && (
                <Button
                  type="button"
                  variant="outline"
                  aria-label={highlightLabel}
                  aria-pressed={activeTool === 'highlight'}
                  onClick={handleHighlightToggle}
                  className={cn(
                    'text-survey-body rounded-[var(--component-button-radius)] font-survey-regular font-survey text-survey-foreground hover:bg-survey-muted-background',
                    activeTool === 'highlight'
                      ? 'border-2 border-survey-primary'
                      : 'border-survey-border-interactive',
                  )}
                >
                  <Icon name="ink_highlighter" aria-hidden="true" />
                  {highlightLabel}
                </Button>
              )}
              {hasHighlights && (
                <Button
                  type="button"
                  variant="outline"
                  aria-label={eraseLabel}
                  aria-pressed={activeTool === 'erase'}
                  onClick={() => selectTool('erase')}
                  className={cn(
                    'text-survey-body rounded-[var(--component-button-radius)] font-survey-regular font-survey text-survey-foreground hover:bg-survey-muted-background',
                    activeTool === 'erase'
                      ? 'border-2 border-survey-primary'
                      : 'border-survey-border-interactive',
                  )}
                >
                  <Icon name="ink_eraser" aria-hidden="true" />
                  {eraseLabel}
                </Button>
              )}
            </div>
            )}
          </div>
        )}

        {/* The passage. Drag (or long-press) to select words in freeform; tap a
            segment in the segments variant. */}
        <div
          ref={containerRef}
          role="group"
          aria-label="Highlightable text"
          onMouseDown={() => {
            // Each new interaction starts fresh; only the synthetic click that
            // immediately follows a drag's mouseup is suppressed.
            draggedRef.current = false;
          }}
          onTouchStart={() => {
            draggedRef.current = false;
          }}
          onMouseUp={handlePointerUp}
          onTouchEnd={handlePointerUp}
          className={cn(
            // The passage is its own scroll area: when the component is height-
            // constrained it fills the space below the controls and scrolls
            // within its borders (so the scrollbar matches the text box, not the
            // whole component). Border uses the same token as the TextAnswer field.
            'relative flex-1 min-h-0 overflow-y-auto border border-survey-border-interactive rounded-lg px-2 py-2',
            'text-survey-body font-survey-regular font-survey leading-relaxed',
            'text-survey-foreground',
          )}
        >
          {tokens.map((token, i) =>
            token.kind === 'unit' ? renderUnit(token) : renderStatic(token, i),
          )}
        </div>

        {/* withTextAnswer: the open-end question for the selected category (when it
            has one) + the text-answer field sit below the passage, with the
            category dropdown kept above it in the controls. Cancel/Confirm sit on
            the right of the text field. */}
        {pending && withTextAnswer && (
          <div
            className="shrink-0 flex flex-col gap-1"
            style={{ paddingTop: 'var(--survey-margin, 8px)' }}
          >
            {categories.find((c) => c.id === draftCategory)?.question && (
              <p className="text-survey-body font-survey-regular font-survey text-survey-foreground">
                {categories.find((c) => c.id === draftCategory)?.question}
              </p>
            )}
            <div className="flex items-center gap-2">
              <div className="flex-1 min-w-0">
                <TextAnswer
                  aria-label={textAnswerLabel}
                  placeholder={textAnswerLabel}
                  value={draftNote}
                  onChange={(e) => setDraftNote(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      confirmCategory();
                    }
                  }}
                />
              </div>
              {editActions}
            </div>
          </div>
        )}
      </div>
    );
  },
);

TextHighlighter.displayName = 'TextHighlighter';

export { TextHighlighter };
