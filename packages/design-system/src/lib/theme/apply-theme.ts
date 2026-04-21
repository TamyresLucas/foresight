import { parse, formatHsl } from 'culori';
import { type Theme } from './schema';
import { getForegroundForBackground } from './contrast';
import { getDarkVariant, getLightSurface, getLightBorder, getDarkSurface } from './derivation';

/**
 * Converts a hex color to an HSL string format suitable for the CSS variables (e.g., "233 86% 64%").
 */
function toHslChannels(color: string): string {
  const parsed = parse(color);
  if (!parsed) return '0 0% 0%';
  
  // culori formatHsl returns "hsl(h, s, l)"
  const hslString = formatHsl(parsed);
  if (!hslString) return '0 0% 0%';
  
  // Extract values from "hsl(h, s, l)" or "hsla(h, s, l, a)"
  const match = hslString.match(/hsla?\(([^)]+)\)/);
  if (!match) return '0 0% 0%';
  
  // Split by comma and clean up whitespace
  const channels = match[1].split(',').map(c => c.trim());
  
  // Round and join the first 3 channels (h, s, l) with spaces
  const h = Math.round(parseFloat(channels[0]));
  const s = Math.round(parseFloat(channels[1]));
  const l = Math.round(parseFloat(channels[2]));
  
  return `${h} ${s}% ${l}%`;
}

/**
 * Dynamically loads a font from Google Fonts if needed.
 */
function loadFont(fontName: string) {
  if (!fontName || fontName === 'system-ui' || fontName === 'sans-serif') return;
  
  const fontId = `font-theme-${fontName.toLowerCase().replace(/\s+/g, '-')}`;
  if (document.getElementById(fontId)) return;
  
  const link = document.createElement('link');
  link.id = fontId;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, '+')}:wght@400;500;600;700;800&display=swap`;
  document.head.appendChild(link);
}

/**
 * Applies the given theme to the target scope.
 * Defaults to document.documentElement for global application.
 */
export function applyTheme(theme: Theme, scope: HTMLElement = document.documentElement) {
  // 1. Load fonts
  if (theme.fonts.sans) loadFont(theme.fonts.sans);
  if (theme.fonts.heading) loadFont(theme.fonts.heading);
  
  // 2. Derive variants
  const primaryDark = getDarkVariant(theme.primary);
  const secondaryDark = getDarkVariant(theme.secondary);
  const destructiveDark = getDarkVariant(theme.destructive);
  
  // 3. Map theme to CSS variables
  const variables: Record<string, string> = {
    // Light Mode Brand
    '--brand-primary': toHslChannels(theme.primary),
    '--brand-primary-foreground': toHslChannels(getForegroundForBackground(theme.primary)),
    
    '--brand-secondary': toHslChannels(theme.secondary),
    '--brand-secondary-foreground': toHslChannels(getForegroundForBackground(theme.secondary)),
    
    '--brand-destructive': toHslChannels(theme.destructive),
    '--brand-destructive-foreground': toHslChannels(getForegroundForBackground(theme.destructive)),
    
    // Dark Mode Brand
    '--brand-primary-dark': toHslChannels(primaryDark),
    '--brand-primary-dark-foreground': toHslChannels(getForegroundForBackground(primaryDark)),
    
    '--brand-secondary-dark': toHslChannels(secondaryDark),
    '--brand-secondary-dark-foreground': toHslChannels(getForegroundForBackground(secondaryDark)),
    
    '--brand-destructive-dark': toHslChannels(destructiveDark),
    '--brand-destructive-dark-foreground': toHslChannels(getForegroundForBackground(destructiveDark)),
    
    // Surfaces & Borders (Light Mode)
    '--brand-background-destructive': toHslChannels(getLightSurface(theme.destructive)),
    '--brand-border-destructive': toHslChannels(getLightBorder(theme.destructive)),
    
    // Config
    '--brand-radius': theme.radius || '0.5rem',
    '--brand-font-size': theme.fontSize || '16px',
    '--brand-font-weight': theme.fontWeight || '400',
    '--brand-font-body': `"${theme.fonts.body}", system-ui, sans-serif`,
    '--brand-font-heading': `"${theme.fonts.heading}", system-ui, sans-serif`,
    '--brand-font-survey': `"${theme.fonts.survey}", system-ui, sans-serif`,
    // Backward compatibility for existing references to --brand-font-sans
    '--brand-font-sans': `"${theme.fonts.body}", system-ui, sans-serif`,
  };
  
  // 4. Apply variables to the scope
  Object.entries(variables).forEach(([key, value]) => {
    scope.style.setProperty(key, value);
  });
}
