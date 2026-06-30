'use client';

import * as React from 'react';
import { Signature as SignatureIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SignatureProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Controlled signature value as a PNG data URL. Omit to use internal state. */
  value?: string | null;
  /** Called with the signature PNG data URL while drawing, or `null` when cleared. */
  onChange?: (dataUrl: string | null) => void;
  /** Called when the clear (X) control is pressed. */
  onClear?: () => void;
  /** Hint shown above the baseline while the pad is empty. */
  label?: React.ReactNode;
  /** Height of the drawing surface in pixels. Defaults to 200. */
  height?: number;
}

/**
 * Resolve an `hsl(var(--token) ...)` color string against the DOM so it can be
 * painted onto the canvas. Canvas needs a concrete color, but we still source
 * it from the survey design token rather than hard-coding a hex value.
 */
function resolveStrokeColor(el: HTMLElement | null): string {
  if (!el || typeof window === 'undefined') return '#000';
  const channels = getComputedStyle(el)
    .getPropertyValue('--survey-foreground')
    .trim();
  return channels ? `hsl(${channels})` : '#000';
}

const Signature = React.forwardRef<HTMLDivElement, SignatureProps>(
  (
    {
      value,
      onChange,
      onClear,
      label = 'Sign here',
      height = 200,
      className,
      ...props
    },
    ref,
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const drawing = React.useRef(false);
    const lastPoint = React.useRef<{ x: number; y: number } | null>(null);

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<string | null>(null);
    const currentValue = isControlled ? value : internalValue;
    const hasSignature = Boolean(currentValue);

    // Size the backing store to the device pixel ratio so strokes stay crisp,
    // then repaint any existing value after a resize.
    const setupCanvas = React.useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.scale(ratio, ratio);
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = resolveStrokeColor(canvas);

      if (currentValue) {
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
        img.src = currentValue;
      }
    }, [currentValue]);

    React.useEffect(() => {
      setupCanvas();
      window.addEventListener('resize', setupCanvas);
      return () => window.removeEventListener('resize', setupCanvas);
      // setupCanvas intentionally rebinds when the value changes so a repaint occurs.
    }, [setupCanvas]);

    const getPoint = (e: React.PointerEvent<HTMLCanvasElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const emit = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const data = canvas.toDataURL('image/png');
      if (!isControlled) setInternalValue(data);
      onChange?.(data);
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      drawing.current = true;
      lastPoint.current = getPoint(e);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!drawing.current) return;
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx || !lastPoint.current) return;
      const point = getPoint(e);
      ctx.beginPath();
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
      lastPoint.current = point;
    };

    const stopDrawing = () => {
      if (!drawing.current) return;
      drawing.current = false;
      lastPoint.current = null;
      emit();
    };

    const handleClear = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      if (!isControlled) setInternalValue(null);
      onChange?.(null);
      onClear?.();
    };

    return (
      <div
        ref={ref}
        className={cn('flex flex-col w-full font-survey', className)}
        style={{ gap: 'var(--survey-margin, 8px)' }}
        {...props}
      >
        <div
          className={cn(
            'relative w-full border bg-transparent transition-colors',
            'border-survey-border-interactive',
          )}
          style={{ borderRadius: 'var(--survey-radius)' }}
        >
          {/* Clear control — mirrors FileUpload's remove button. */}
          {hasSignature && (
            <button
              type="button"
              aria-label="Clear signature"
              onClick={handleClear}
              className={cn(
                'absolute right-2 top-2 z-10 inline-flex items-center justify-center rounded-full p-1',
                'text-survey-foreground transition-colors',
                'hover:bg-survey-muted-background focus-visible:outline-none',
                'focus-visible:ring-2 focus-visible:ring-survey-border-selected',
              )}
            >
              <X className="h-4 w-4" />
            </button>
          )}

          <canvas
            ref={canvasRef}
            className="block w-full touch-none cursor-crosshair"
            style={{ height }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDrawing}
            onPointerLeave={stopDrawing}
            onPointerCancel={stopDrawing}
          />

          {/* Empty-state hint and baseline, painted over the canvas. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col"
            style={{ padding: '0 16px 16px' }}
          >
            {!hasSignature && (
              <div className="flex items-center gap-2 text-survey-muted-foreground">
                <SignatureIcon className="h-5 w-5" />
                <span className="text-survey-body font-survey-regular">
                  {label}
                </span>
              </div>
            )}
            <div
              className="mt-2 h-px w-full"
              style={{ backgroundColor: 'hsl(var(--survey-border-muted))' }}
            />
          </div>
        </div>
      </div>
    );
  },
);

Signature.displayName = 'Signature';

export { Signature };
