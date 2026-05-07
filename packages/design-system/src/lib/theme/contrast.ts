import { wcagContrast, parse } from 'culori';

/**
 * Calculates contrast between two colors.
 */
export function getContrastRatio(color1: string, color2: string): number {
  const c1 = parse(color1);
  const c2 = parse(color2);
  
  if (!c1 || !c2) return 0;
  
  return wcagContrast(c1, c2);
}

/**
 * Verifies if the contrast ratio meets WCAG AA (4.5 for normal text, 3.0 for large text).
 */
export function meetsWcagAA(color1: string, color2: string, largeText = false): boolean {
  const ratio = getContrastRatio(color1, color2);
  return largeText ? ratio >= 3 : ratio >= 4.5;
}

/**
 * Returns the best foreground color (black or white) for a given background color.
 *
 * Prefers white whenever it meets WCAG AA (≥ 4.5:1) so that primary surfaces
 * stay consistent across the system (buttons, badges, calendar selection, etc.).
 * Falls back to black only when white fails — typical for very light backgrounds
 * like yellow or pastel tones.
 */
export function getForegroundForBackground(background: string): '#000000' | '#ffffff' {
  const whiteContrast = getContrastRatio(background, '#ffffff');
  if (whiteContrast >= 4.5) return '#ffffff';

  const blackContrast = getContrastRatio(background, '#000000');
  return blackContrast > whiteContrast ? '#000000' : '#ffffff';
}
