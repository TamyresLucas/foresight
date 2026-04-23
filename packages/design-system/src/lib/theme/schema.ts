import { z } from 'zod';

const hexColor = z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Invalid hex color');

const FontSettingsSchema = z.object({
  fontFamily: z.string().default('Inter'),
  fontSize: z.string().default('16px'),
  fontWeight: z.string().default('400'),
});

export const ThemeSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Theme name is required'),
  primary: hexColor,
  primaryForeground: hexColor.optional(),
  secondary: hexColor,
  secondaryForeground: hexColor.optional(),
  destructive: hexColor,
  destructiveForeground: hexColor.optional(),
  radius: z.string().optional().default('0.5rem'),
  margin: z.string().optional().default('8px'),
  header: FontSettingsSchema.default({
    fontFamily: 'Inter',
    fontSize: '24px',
    fontWeight: '700',
  }),
  body: FontSettingsSchema.default({
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
  }),
  navigation: FontSettingsSchema.default({
    fontFamily: 'Outfit',
    fontSize: '14px',
    fontWeight: '500',
  }),
});

export type Theme = z.infer<typeof ThemeSchema>;

/**
 * Validates a theme object and returns it, or throws an error.
 */
export function validateTheme(theme: unknown): Theme {
  return ThemeSchema.parse(theme);
}

/**
 * Checks if a theme object is valid.
 */
export function isValidTheme(theme: unknown): theme is Theme {
  return ThemeSchema.safeParse(theme).success;
}
