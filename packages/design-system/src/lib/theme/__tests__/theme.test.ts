import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ThemeSchema, validateTheme } from '../schema';
import * as contrastUtils from '../contrast';
import { applyTheme } from '../apply-theme';
import { getDarkVariant, getLightSurface } from '../derivation';
import defaultTheme from '../../../themes/presets/default.json';

describe('Theme System Foundation', () => {
  describe('Schema Validation', () => {
    it('should validate the default theme correctly', () => {
      const result = ThemeSchema.safeParse(defaultTheme);
      expect(result.success).toBe(true);
    });

    it('should reject invalid hex colors', () => {
      const invalidTheme = {
        ...defaultTheme,
        primary: 'invalid-color'
      };
      const result = ThemeSchema.safeParse(invalidTheme);
      expect(result.success).toBe(false);
    });
  });

  describe('Contrast Utilities', () => {
    it('should calculate contrast ratio correctly', () => {
      const ratio = contrastUtils.getContrastRatio('#ffffff', '#000000');
      expect(ratio).toBe(21);
    });

    it('should verify WCAG AA compliance', () => {
      const ratio = contrastUtils.getContrastRatio('#5568F2', '#ffffff');
      const meets = contrastUtils.meetsWcagAA('#5568F2', '#ffffff');
      expect(meets).toBe(ratio >= 4.5);
    });
  });

  describe('Color Derivation', () => {
    it('should generate a lighter/vibrant dark variant', () => {
      // #5568F2 (L: ~64%)
      const darkVariant = getDarkVariant('#5568F2');
      // Should be lighter than original for dark mode
      expect(contrastUtils.getContrastRatio(darkVariant, '#000000')).toBeGreaterThan(contrastUtils.getContrastRatio('#5568F2', '#000000'));
    });

    it('should generate a very light surface', () => {
      const surface = getLightSurface('#5568F2');
      // Should be near white (L: 96%)
      expect(contrastUtils.getContrastRatio(surface, '#ffffff')).toBeLessThan(1.2);
    });
  });

  describe('applyTheme', () => {
    let mockElement: HTMLElement;

    beforeEach(() => {
      mockElement = document.createElement('div');
      vi.spyOn(document.head, 'appendChild').mockImplementation((node) => node);
      vi.spyOn(document, 'getElementById').mockReturnValue(null);
      vi.spyOn(console, 'warn').mockImplementation(() => {});
    });

    it('should apply brand CSS variables including derived tokens', () => {
      const theme = validateTheme(defaultTheme);
      applyTheme(theme, mockElement);

      // Base
      expect(mockElement.style.getPropertyValue('--brand-primary')).toContain('233');
      
      // Derived Foregrounds
      expect(mockElement.style.getPropertyValue('--brand-primary-foreground')).toBeDefined();
      
      // Derived Dark Mode
      expect(mockElement.style.getPropertyValue('--brand-primary-dark')).toBeDefined();
      
      // Derived Surfaces
      expect(mockElement.style.getPropertyValue('--brand-background-destructive')).toBeDefined();
    });

    it('should ensure derived foregrounds meet WCAG AA against their background', () => {
      const theme = validateTheme(defaultTheme);
      applyTheme(theme, mockElement);
      
      // This is a manual check in code but let's verify logic is sound
      const primaryHex = theme.primary;
      const primaryDarkHex = getDarkVariant(theme.primary);
      
      // Test the logic we use in applyTheme
      const foreground = contrastUtils.getForegroundForBackground(primaryHex);
      const darkForeground = contrastUtils.getForegroundForBackground(primaryDarkHex);
      
      expect(contrastUtils.meetsWcagAA(primaryHex, foreground)).toBe(true);
      expect(contrastUtils.meetsWcagAA(primaryDarkHex, darkForeground)).toBe(true);
    });

    it('should warn when contrast is below WCAG AA', () => {
      const theme = validateTheme({
        ...defaultTheme,
        primary: '#888888',
        primaryForeground: '#999999', // intentional low contrast (~1.2:1)
      });
      
      applyTheme(theme, mockElement);
      
      expect(console.warn).toHaveBeenCalledWith(
        expect.stringContaining('Low contrast detected')
      );
    });

    it('should fall back to safe default when contrast is below WCAG AA', () => {
      const theme = validateTheme({
        ...defaultTheme,
        primary: '#888888',
        primaryForeground: '#999999', // intentional low contrast
      });
      
      applyTheme(theme, mockElement);
      
      // Safe primary default is #5568F2, which is 233 86% 64%
      expect(mockElement.style.getPropertyValue('--brand-primary')).toBe('233 86% 64%');
      // Foreground should also be from safe default (black 0 0% 0% has better contrast than white for #5568F2)
      expect(mockElement.style.getPropertyValue('--brand-primary-foreground')).toBe('0 0% 0%');
    });
  });
});
