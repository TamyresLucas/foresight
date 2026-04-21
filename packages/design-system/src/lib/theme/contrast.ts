import { wcagContrast, formatHex, parse } from 'culori';

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
 */
export function getForegroundForBackground(background: string): '#000000' | '#ffffff' {
  const whiteContrast = getContrastRatio(background, '#ffffff');
  const blackContrast = getContrastRatio(background, '#000000');
  
  return whiteContrast >= blackContrast ? '#ffffff' : '#000000';
}
