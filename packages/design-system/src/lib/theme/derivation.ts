import { parse, hsl, formatHex, converter } from 'culori';

const toHsl = converter('hsl');

/**
 * Generates a dark mode variant of a color.
 * For dark mode, we generally want the color to be more vibrant and lighter
 * than its light mode counterpart to maintain readability and contrast.
 */
export function getDarkVariant(hex: string): string {
  const parsed = parse(hex);
  if (!parsed) return hex;
  
  const h = toHsl(parsed);
  
  // Hue stays same
  // Saturation: Increase to maintain vibrancy on dark backgrounds
  h.s = Math.min(1, h.s + 0.2); 
  
  // Lightness: Boost for visibility. 
  // Standard light primary is ~64%. In dark mode we often want ~86%.
  // We ensure it's at least 70% for dark mode readability.
  h.l = Math.max(0.7, Math.min(0.9, h.l + 0.2));
  
  return formatHex(h) || hex;
}

/**
 * Generates a very light, desaturated surface color (e.g. for Alert backgrounds).
 * Light mode: L: ~96%, S: low.
 */
export function getLightSurface(hex: string): string {
  const parsed = parse(hex);
  if (!parsed) return hex;
  
  const h = toHsl(parsed);
  
  h.s = Math.min(0.1, h.s); // Low saturation
  h.l = 0.96; // High lightness
  
  return formatHex(h) || hex;
}

/**
 * Generates a border-variant of a color (e.g. for Alert borders).
 * Light mode: L: ~80%, S: medium.
 */
export function getLightBorder(hex: string): string {
  const parsed = parse(hex);
  if (!parsed) return hex;
  
  const h = toHsl(parsed);
  
  h.s = Math.min(0.4, h.s); 
  h.l = 0.8; 
  
  return formatHex(h) || hex;
}

/**
 * Generates a dark mode surface/border variant.
 */
export function getDarkSurface(hex: string): string {
  const parsed = parse(hex);
  if (!parsed) return hex;
  
  const h = toHsl(parsed);
  
  h.s = Math.min(0.15, h.s); 
  h.l = 0.15; // Low lightness for dark mode containers
  
  return formatHex(h) || hex;
}
