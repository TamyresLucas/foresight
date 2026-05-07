import { parse, formatHsl } from 'culori';
import { type Theme } from './schema';
import { getForegroundForBackground, getContrastRatio } from './contrast';
import { getDarkVariant, getLightSurface, getLightBorder } from './derivation';

const SAFE_DEFAULTS = {
  primary: '#5568F2',
  primaryDark: '#8B9AFF',
  secondary: '#008563',
  secondaryDark: '#00B386',
  destructive: '#CF455C',
  destructiveDark: '#EF576B',
};

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
  const channels = match[1].split(',').map((c: string) => c.trim());
  
  // Round and join the first 3 channels (h, s, l) with spaces
  const h = Math.round(parseFloat(channels[0]));
  const s = Math.round(parseFloat(channels[1]));
  const l = Math.round(parseFloat(channels[2]));
  
  return `${h} ${s}% ${l}%`;
}

/**
 * Validates contrast for a color pair and warns if it fails WCAG AA.
 * Returns true if contrast is acceptable, false otherwise.
 */
function validateContrast(background: string, foreground: string, label: string): boolean {
  const ratio = getContrastRatio(background, foreground);
  if (ratio < 4.5) {
    console.warn(
      `[Theme] Low contrast detected for ${label}: ${ratio.toFixed(2)}:1. ` +
      `WCAG AA requires 4.5:1 for normal text. Falling back to safe default.`
    );
    return false;
  }
  return true;
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
  loadFont(theme.header.fontFamily);
  loadFont(theme.body.fontFamily);
  loadFont(theme.navigation.fontFamily);
  
  // 2. Derive variants
  const primaryDark = getDarkVariant(theme.primary);
  const secondaryDark = getDarkVariant(theme.secondary);
  const destructiveDark = getDarkVariant(theme.destructive);

  const primaryFg = theme.primaryForeground || getForegroundForBackground(theme.primary);
  const secondaryFg = theme.secondaryForeground || getForegroundForBackground(theme.secondary);
  const destructiveFg = theme.destructiveForeground || getForegroundForBackground(theme.destructive);
  
  const primaryDarkFg = getForegroundForBackground(primaryDark);
  const secondaryDarkFg = getForegroundForBackground(secondaryDark);
  const destructiveDarkFg = getForegroundForBackground(destructiveDark);

  // 3. Validate Contrast & Fallback
  const primaryOk = validateContrast(theme.primary, primaryFg, 'Primary');
  const finalPrimary = primaryOk ? theme.primary : SAFE_DEFAULTS.primary;
  const finalPrimaryFg = primaryOk ? primaryFg : getForegroundForBackground(SAFE_DEFAULTS.primary);

  const secondaryOk = validateContrast(theme.secondary, secondaryFg, 'Secondary');
  const finalSecondary = secondaryOk ? theme.secondary : SAFE_DEFAULTS.secondary;
  const finalSecondaryFg = secondaryOk ? secondaryFg : getForegroundForBackground(SAFE_DEFAULTS.secondary);

  const destructiveOk = validateContrast(theme.destructive, destructiveFg, 'Destructive');
  const finalDestructive = destructiveOk ? theme.destructive : SAFE_DEFAULTS.destructive;
  const finalDestructiveFg = destructiveOk ? destructiveFg : getForegroundForBackground(SAFE_DEFAULTS.destructive);

  const primaryDarkOk = validateContrast(primaryDark, primaryDarkFg, 'Primary (Dark Mode)');
  const finalPrimaryDark = primaryDarkOk ? primaryDark : SAFE_DEFAULTS.primaryDark;
  const finalPrimaryDarkFg = primaryDarkOk ? primaryDarkFg : getForegroundForBackground(SAFE_DEFAULTS.primaryDark);

  const secondaryDarkOk = validateContrast(secondaryDark, secondaryDarkFg, 'Secondary (Dark Mode)');
  const finalSecondaryDark = secondaryDarkOk ? secondaryDark : SAFE_DEFAULTS.secondaryDark;
  const finalSecondaryDarkFg = secondaryDarkOk ? secondaryDarkFg : getForegroundForBackground(SAFE_DEFAULTS.secondaryDark);

  const destructiveDarkOk = validateContrast(destructiveDark, destructiveDarkFg, 'Destructive (Dark Mode)');
  const finalDestructiveDark = destructiveDarkOk ? destructiveDark : SAFE_DEFAULTS.destructiveDark;
  const finalDestructiveDarkFg = destructiveDarkOk ? destructiveDarkFg : getForegroundForBackground(SAFE_DEFAULTS.destructiveDark);
  
  // 4. Map theme to CSS variables
  const variables: Record<string, string> = {
    // Light Mode Brand
    '--brand-primary': toHslChannels(finalPrimary),
    '--brand-primary-foreground': toHslChannels(finalPrimaryFg),
    
    '--brand-secondary': toHslChannels(finalSecondary),
    '--brand-secondary-foreground': toHslChannels(finalSecondaryFg),
    
    '--brand-destructive': toHslChannels(finalDestructive),
    '--brand-destructive-foreground': toHslChannels(finalDestructiveFg),
    
    // Dark Mode Brand
    '--brand-primary-dark': toHslChannels(finalPrimaryDark),
    '--brand-primary-dark-foreground': toHslChannels(finalPrimaryDarkFg),
    
    '--brand-secondary-dark': toHslChannels(finalSecondaryDark),
    '--brand-secondary-dark-foreground': toHslChannels(finalSecondaryDarkFg),
    
    '--brand-destructive-dark': toHslChannels(finalDestructiveDark),
    '--brand-destructive-dark-foreground': toHslChannels(finalDestructiveDarkFg),
    
    // Surfaces & Borders (Light Mode)
    '--brand-background-destructive': toHslChannels(getLightSurface(finalDestructive)),
    '--brand-border-destructive': toHslChannels(getLightBorder(finalDestructive)),
    
    // Config
    '--brand-radius': theme.radius || '0.5rem',
    '--brand-margin': theme.margin || '8px',
    '--brand-question-spacing': `calc(${theme.margin || '8px'} * 3)`,

    // Component-specific radius (fully rounded for "Round" theme, otherwise matches theme radius)
    '--component-button-radius': theme.radius === '1rem' ? '9999px' : (theme.radius || '0.5rem'),
    
    // Header Font
    '--brand-font-header': `"${theme.header.fontFamily}", system-ui, sans-serif`,
    '--brand-font-size-header': theme.header.fontSize,
    '--brand-font-weight-header': theme.header.fontWeight,
    
    // Body Font
    '--brand-font-body': `"${theme.body.fontFamily}", system-ui, sans-serif`,
    '--brand-font-size-body': theme.body.fontSize,
    '--brand-font-weight-body': theme.body.fontWeight,
    
    // Navigation Font
    '--brand-font-navigation': `"${theme.navigation.fontFamily}", system-ui, sans-serif`,
    '--brand-font-size-navigation': theme.navigation.fontSize,
    '--brand-font-weight-navigation': theme.navigation.fontWeight,

    // Backward compatibility for existing references
    '--brand-font-heading': `"${theme.header.fontFamily}", system-ui, sans-serif`,
    '--brand-font-survey': `"${theme.navigation.fontFamily}", system-ui, sans-serif`,
    '--brand-font-sans': `"${theme.body.fontFamily}", system-ui, sans-serif`,
    '--brand-font-size': theme.body.fontSize,
    '--brand-font-weight': theme.body.fontWeight,

    // Survey Rendering Tokens (Reactive)
    '--survey-primary': toHslChannels(finalPrimary),
    '--survey-primary-foreground': toHslChannels(finalPrimaryFg),
    '--survey-destructive': toHslChannels(finalDestructive),
    '--survey-destructive-foreground': toHslChannels(finalDestructiveFg),
    '--survey-border-selected': toHslChannels(finalPrimary),
    '--survey-border-accent': toHslChannels(finalSecondary),
    '--survey-font-family': `"${theme.body.fontFamily}", sans-serif`,
    '--survey-font-size-body': theme.body.fontSize,
    '--survey-font-weight-regular': theme.body.fontWeight,
    '--survey-radius-md': theme.radius || '0.5rem',
    '--survey-radius-sm': `calc(${theme.radius || '0.5rem'} - 2px)`,
    // When the user picks the "Round" preset (1rem), the day cell becomes a
    // perfect circle. Otherwise it follows the chosen radius.
    '--survey-day-radius': theme.radius === '1rem' ? '9999px' : (theme.radius || '0.5rem'),
    '--survey-margin': theme.margin || '8px',
    '--survey-question-spacing': `calc(${theme.margin || '8px'} * 3)`,
  };
  
  // 4. Apply variables to the scope
  Object.entries(variables).forEach(([key, value]) => {
    scope.style.setProperty(key, value);
  });
}
