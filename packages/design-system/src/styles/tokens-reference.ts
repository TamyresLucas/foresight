export interface StaticTokenValue {
  variable: string;
  light: string;
  dark: string;
  originalFormula?: string;
}

// Static token representations — SYNCED FROM NOTION 2026-03-09
// Source: Default (Template) — Light — https://www.notion.so/29e0a268c6384d43a73b8a9b675253d2
export const STATIC_TOKENS: Record<string, StaticTokenValue> = {
  secondary: {
    variable: "--secondary",
    light: "220 5% 97.5%",
    dark: "222 8% 9.5%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 5%, hsl(var(--background)))",
  },
  "secondary-hover": {
    variable: "--secondary-hover",
    light: "220 15% 92.5%",
    dark: "222 12% 19%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 15%, hsl(var(--background)))",
  },
  muted: {
    variable: "--muted",
    light: "220 5% 97.5%",
    dark: "222 8% 9.5%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 5%, hsl(var(--background)))",
  },
  "muted-foreground": {
    variable: "--muted-foreground",
    light: "222.2 47.4% 11.2%",
    dark: "210 40% 98%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 30%, hsl(var(--foreground)))",
  },
  "disabled-foreground": {
    variable: "--disabled-foreground",
    light: "220 40% 70%",
    dark: "210 40% 98%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 40%, hsl(var(--background)))",
  },
  accent: {
    variable: "--accent",
    light: "220 10% 95%",
    dark: "222 10% 14%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)))",
  },
  "background-destructive": {
    variable: "--background-destructive",
    light: "349 8% 96%",
    dark: "0 6% 14%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--destructive)) 10%, hsl(var(--background)))",
  },
  "border-destructive": {
    variable: "--border-destructive",
    light: "349 42% 80%",
    dark: "0 31% 35%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--destructive)) 50%, hsl(var(--background)))",
  },
  "background-success": {
    variable: "--background-success",
    light: "161 8% 96%",
    dark: "142 7% 14%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--success)) 10%, hsl(var(--background)))",
  },
  "border-success": {
    variable: "--border-success",
    light: "161 38% 68%",
    dark: "142 36% 35%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--success)) 50%, hsl(var(--background)))",
  },
  "background-warning": {
    variable: "--background-warning",
    light: "38 9% 95%",
    dark: "38 9% 14%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--warning)) 10%, hsl(var(--background)))",
  },
  "border-warning": {
    variable: "--border-warning",
    light: "38 46% 75%",
    dark: "38 46% 35%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--warning)) 50%, hsl(var(--background)))",
  },
  info: {
    variable: "--info",
    light: "217 91% 60%",
    dark: "239 84% 67%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--info)) 10%, hsl(var(--background)))",
  },
  "border-info": {
    variable: "--border-info",
    light: "217 35% 75%",
    dark: "217 35% 35%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--info)) 50%, hsl(var(--background)))",
  },
  border: {
    variable: "--border",
    light: "220 13% 85%",
    dark: "220 13% 18%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))",
  },
  input: {
    variable: "--input",
    light: "220 13% 85%",
    dark: "220 13% 18%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))",
  },
  "lng1771-row-selected": {
    variable: "--lng1771-row-selected",
    light: "220 40% 90%",
    dark: "220 70% 23%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))",
  },
  "lng1771-gray-20": {
    variable: "--lng1771-gray-20",
    light: "220 40% 90%",
    dark: "220 70% 23%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))",
  },
  "lng1771-row-bg": {
    variable: "--lng1771-row-bg",
    light: "220 20% 95%",
    dark: "220 45% 14%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)))",
  },
};
