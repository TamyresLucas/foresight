import { z } from 'zod';

const hexColor = z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Invalid hex color');

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
  fontSize: z.string().optional().default('16px'),
  fontWeight: z.string().optional().default('400'),
  fonts: z.object({
    body: z.string().default('Inter'),
    heading: z.string().default('Inter'),
    survey: z.string().default('Outfit'),
  }).default({
    body: 'Inter',
    heading: 'Inter',
    survey: 'Outfit',
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
