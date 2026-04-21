import { type Theme, validateTheme, isValidTheme } from './schema';
import { PRESETS, FORESIGHT_DEFAULT } from './presets';

const STORAGE_KEY = 'foresight-survey-theme';
const CUSTOM_THEMES_KEY = 'foresight-custom-themes';

/**
 * Saves the active theme to localStorage.
 */
export function saveActiveTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
  } catch (e) {
    console.error('Failed to save theme to localStorage', e);
  }
}

/**
 * Loads the active theme from localStorage.
 * Falls back to FORESIGHT_DEFAULT if not found or invalid.
 */
export function loadActiveTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return FORESIGHT_DEFAULT;
    
    const parsed = JSON.parse(stored);
    if (isValidTheme(parsed)) {
      return parsed;
    }
  } catch (e) {
    console.error('Failed to load theme from localStorage', e);
  }
  return FORESIGHT_DEFAULT;
}

/**
 * Saves a custom theme to the list of custom themes.
 */
export function saveCustomTheme(theme: Theme): void {
  try {
    const customThemes = getCustomThemes();
    const index = customThemes.findIndex(t => t.id === theme.id || t.name === theme.name);
    
    if (index >= 0) {
      customThemes[index] = theme;
    } else {
      customThemes.push({ ...theme, id: theme.id || `custom-${Date.now()}` });
    }
    
    localStorage.setItem(CUSTOM_THEMES_KEY, JSON.stringify(customThemes));
  } catch (e) {
    console.error('Failed to save custom theme', e);
  }
}

/**
 * Gets all custom themes from localStorage.
 */
export function getCustomThemes(): Theme[] {
  try {
    const stored = localStorage.getItem(CUSTOM_THEMES_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return parsed.filter(isValidTheme);
    }
  } catch (e) {
    console.error('Failed to load custom themes', e);
  }
  return [];
}

/**
 * Deletes a custom theme.
 */
export function deleteCustomTheme(themeId: string): void {
  try {
    const customThemes = getCustomThemes();
    const filtered = customThemes.filter(t => t.id !== themeId);
    localStorage.setItem(CUSTOM_THEMES_KEY, JSON.stringify(filtered));
  } catch (e) {
    console.error('Failed to delete custom theme', e);
  }
}

/**
 * Gets all available themes (presets + custom).
 */
export function getAllAvailableThemes(): Theme[] {
  return [...PRESETS, ...getCustomThemes()];
}
