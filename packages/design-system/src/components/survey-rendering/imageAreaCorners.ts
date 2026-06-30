import type * as React from 'react';

/** Position + size of an area, in percent (0–100) of the image box. */
interface AreaRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** The image frame's corner radius (the survey preset), shared by the area
 *  overlays so a corner area follows the frame's rounded corners. */
const FRAME_RADIUS = 'var(--survey-radius-sm)';

/**
 * Round only the area corners that coincide with the image frame's corners, so a
 * corner area follows the rounded preset instead of poking a square corner into
 * it. A frame corner is matched when the area sits flush against the two edges
 * that meet there. Interior corners stay square.
 */
export const frameCornerRadius = (area: AreaRect): React.CSSProperties => {
  const atLeft = area.x <= 0;
  const atTop = area.y <= 0;
  const atRight = area.x + area.width >= 100;
  const atBottom = area.y + area.height >= 100;
  return {
    borderTopLeftRadius: atTop && atLeft ? FRAME_RADIUS : undefined,
    borderTopRightRadius: atTop && atRight ? FRAME_RADIUS : undefined,
    borderBottomLeftRadius: atBottom && atLeft ? FRAME_RADIUS : undefined,
    borderBottomRightRadius: atBottom && atRight ? FRAME_RADIUS : undefined,
  };
};
