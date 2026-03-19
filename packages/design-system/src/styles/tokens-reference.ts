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

  // Chart Colors (8 colors complementing periwinkle)
  "chart-1": {
    variable: "--chart-1",
    light: "233 86% 64%",
    dark: "235 100% 86%",
    originalFormula: "blueberry (primary)",
  },
  // ─── Lightness scales — 5-step per chart color ─────────────────────────────
  // Each color has 4 extra steps: lighter (+16%), light (+8%), [main], dark (−8%), darker (−16%).
  // In JS use getChartColorShades(baseHex, count) for dynamic N-item scaling.
  // In CSS use: hsl(var(--chart-1-lighter)) etc.
  "chart-1-lighter": { variable: "--chart-1-lighter", light: "233 86% 80%", dark: "235 100% 88%", originalFormula: "blueberry +16% L" },
  "chart-1-light":   { variable: "--chart-1-light",   light: "233 86% 72%", dark: "235 100% 88%", originalFormula: "blueberry +8% L" },
  "chart-1-dark":    { variable: "--chart-1-dark",    light: "233 86% 56%", dark: "235 100% 78%", originalFormula: "blueberry −8% L" },
  "chart-1-darker":  { variable: "--chart-1-darker",  light: "233 86% 48%", dark: "235 100% 70%", originalFormula: "blueberry −16% L" },
  "chart-2": {
    variable: "--chart-2",
    light: "177 100% 38%",
    dark: "173 100% 42%",
    originalFormula: "mint",
  },
  "chart-2-lighter": { variable: "--chart-2-lighter", light: "177 100% 54%", dark: "173 100% 58%", originalFormula: "mint +16% L" },
  "chart-2-light":   { variable: "--chart-2-light",   light: "177 100% 46%", dark: "173 100% 50%", originalFormula: "mint +8% L" },
  "chart-2-dark":    { variable: "--chart-2-dark",    light: "177 100% 30%", dark: "173 100% 34%", originalFormula: "mint −8% L" },
  "chart-2-darker":  { variable: "--chart-2-darker",  light: "177 100% 22%", dark: "173 100% 26%", originalFormula: "mint −16% L" },
  "chart-3": {
    variable: "--chart-3",
    light: "4 94% 69%",
    dark: "4 94% 69%",
    originalFormula: "peach (#FA7268)",
  },
  "chart-3-lighter": { variable: "--chart-3-lighter", light: "4 94% 85%", dark: "4 94% 85%", originalFormula: "peach +16% L" },
  "chart-3-light":   { variable: "--chart-3-light",   light: "4 94% 77%", dark: "4 94% 77%", originalFormula: "peach +8% L" },
  "chart-3-dark":    { variable: "--chart-3-dark",    light: "4 94% 61%", dark: "4 94% 61%", originalFormula: "peach −8% L" },
  "chart-3-darker":  { variable: "--chart-3-darker",  light: "4 94% 53%", dark: "4 94% 53%", originalFormula: "peach −16% L" },
  "chart-4": {
    variable: "--chart-4",
    light: "283 62% 53%",
    dark: "283 65% 58%",
    originalFormula: "grape",
  },
  "chart-4-lighter": { variable: "--chart-4-lighter", light: "283 62% 69%", dark: "283 65% 74%", originalFormula: "grape +16% L" },
  "chart-4-light":   { variable: "--chart-4-light",   light: "283 62% 61%", dark: "283 65% 66%", originalFormula: "grape +8% L" },
  "chart-4-dark":    { variable: "--chart-4-dark",    light: "283 62% 45%", dark: "283 65% 50%", originalFormula: "grape −8% L" },
  "chart-4-darker":  { variable: "--chart-4-darker",  light: "283 62% 37%", dark: "283 65% 42%", originalFormula: "grape −16% L" },
  "chart-5": {
    variable: "--chart-5",
    light: "97 52% 39%",
    dark: "97 55% 49%",
    originalFormula: "lime",
  },
  "chart-6": {
    variable: "--chart-6",
    light: "331 75% 58%",
    dark: "331 75% 58%",
    originalFormula: "watermelon",
  },
  "chart-6-lighter": { variable: "--chart-6-lighter", light: "331 75% 74%", dark: "331 75% 74%", originalFormula: "watermelon +16% L" },
  "chart-6-light":   { variable: "--chart-6-light",   light: "331 75% 66%", dark: "331 75% 66%", originalFormula: "watermelon +8% L" },
  "chart-6-dark":    { variable: "--chart-6-dark",    light: "331 75% 50%", dark: "331 75% 50%", originalFormula: "watermelon −8% L" },
  "chart-6-darker":  { variable: "--chart-6-darker",  light: "331 75% 42%", dark: "331 75% 42%", originalFormula: "watermelon −16% L" },
  "chart-7": {
    variable: "--chart-7",
    light: "243 73% 51%",
    dark: "252 65% 53%",
    originalFormula: "blackberry",
  },
  "chart-8": {
    variable: "--chart-8",
    light: "214 13% 53%",
    dark: "214 13% 53%",
    originalFormula: "grey",
  },
  "chart-8-lighter": { variable: "--chart-8-lighter", light: "218 18% 67%", dark: "218 18% 67%", originalFormula: "grey +16% L" },
  "chart-8-light":   { variable: "--chart-8-light",   light: "218 18% 59%", dark: "218 18% 59%", originalFormula: "grey +8% L" },
  "chart-8-dark":    { variable: "--chart-8-dark",    light: "218 18% 43%", dark: "218 18% 43%", originalFormula: "grey −8% L" },
  "chart-8-darker":  { variable: "--chart-8-darker",  light: "218 18% 35%", dark: "218 18% 35%", originalFormula: "grey −16% L" },
  "chart-positive": {
    variable: "--chart-positive",
    light: "165 100% 31%",
    dark: "165 100% 31%",
    originalFormula: "#00A078 — success/positive, lower contrast than --success",
  },
  "chart-negative": {
    variable: "--chart-negative",
    light: "352 83% 64%",
    dark: "352 83% 64%",
    originalFormula: "#EF576B — error/negative, lower contrast than --destructive",
  },

  // ─── Sentiment scale ────────────────────────────────────────────────────────
  "chart-sentiment-1": { variable: "--chart-sentiment-1", light: "352 83% 64%", dark: "352 83% 64%", originalFormula: "#EF576B — very negative (= --chart-negative)" },
  "chart-sentiment-2": { variable: "--chart-sentiment-2", light: "22 79% 59%",  dark: "22 79% 59%",  originalFormula: "#E97E42 — negative" },
  "chart-sentiment-3": { variable: "--chart-sentiment-3", light: "38 92% 50%",  dark: "38 92% 50%",  originalFormula: "#F59F0A — neutral (= --warning)" },
  "chart-sentiment-4": { variable: "--chart-sentiment-4", light: "88 52% 47%",  dark: "88 52% 47%",  originalFormula: "#7DB83A — positive" },
  "chart-sentiment-5": { variable: "--chart-sentiment-5", light: "165 100% 31%", dark: "165 100% 31%", originalFormula: "#00A078 — very positive (= --chart-positive)" },

  // ─── NPS scale (0 = detractor/error → 10 = promoter/success) ───────────────
  "chart-nps-0":  { variable: "--chart-nps-0",  light: "352 83% 64%",  dark: "352 83% 64%",  originalFormula: "#EF576B — score 0 (= --chart-negative)" },
  "chart-nps-1":  { variable: "--chart-nps-1",  light: "7 76% 62%",    dark: "7 76% 62%",    originalFormula: "#E86555 — score 1" },
  "chart-nps-2":  { variable: "--chart-nps-2",  light: "20 72% 58%",   dark: "20 72% 58%",   originalFormula: "#E17845 — score 2" },
  "chart-nps-3":  { variable: "--chart-nps-3",  light: "32 68% 53%",   dark: "32 68% 53%",   originalFormula: "#D98C36 — score 3" },
  "chart-nps-4":  { variable: "--chart-nps-4",  light: "33 90% 52%",   dark: "33 90% 52%",   originalFormula: "#F38F16 — score 4" },
  "chart-nps-5":  { variable: "--chart-nps-5",  light: "38 92% 50%",   dark: "38 92% 50%",   originalFormula: "#F59F0A — score 5 (= --warning)" },
  "chart-nps-6":  { variable: "--chart-nps-6",  light: "55 82% 45%",   dark: "55 82% 45%",   originalFormula: "#CFBF14 — score 6" },
  "chart-nps-7":  { variable: "--chart-nps-7",  light: "76 65% 45%",   dark: "76 65% 45%",   originalFormula: "#94BB28 — score 7" },
  "chart-nps-8":  { variable: "--chart-nps-8",  light: "110 48% 47%",  dark: "110 48% 47%",  originalFormula: "#52B23E — score 8" },
  "chart-nps-9":  { variable: "--chart-nps-9",  light: "146 69% 39%",  dark: "146 69% 39%",  originalFormula: "#1FAA5C — score 9" },
  "chart-nps-10": { variable: "--chart-nps-10", light: "165 100% 31%", dark: "165 100% 31%", originalFormula: "#00A078 — score 10 (= --chart-positive)" },

  // ─── Muted variants (40% opacity) ───────────────────────────────────────────
  // Use: hsl(var(--chart-N-muted))  /  JS: CHART_COLORS_MUTED[i] (hex+66 alpha)
  // Purpose: de-emphasise non-highlighted bars while keeping the prominent one at full colour.
  "chart-1-muted": { variable: "--chart-1-muted", light: "233 86% 64% / 0.4", dark: "235 100% 86% / 0.4", originalFormula: "blueberry at 40%" },
  "chart-2-muted": { variable: "--chart-2-muted", light: "177 100% 38% / 0.4", dark: "173 100% 42% / 0.4", originalFormula: "mint at 40%" },
  "chart-3-muted": { variable: "--chart-3-muted", light: "4 94% 69% / 0.4",    dark: "4 94% 69% / 0.4",    originalFormula: "peach at 40%" },
  "chart-4-muted": { variable: "--chart-4-muted", light: "283 62% 53% / 0.4",  dark: "283 65% 58% / 0.4",  originalFormula: "grape at 40%" },
  "chart-5-muted": { variable: "--chart-5-muted", light: "97 52% 39% / 0.4",   dark: "97 55% 49% / 0.4",   originalFormula: "lime at 40%" },
  "chart-6-muted": { variable: "--chart-6-muted", light: "331 75% 58% / 0.4",  dark: "331 75% 58% / 0.4",  originalFormula: "watermelon at 40%" },
  "chart-7-muted": { variable: "--chart-7-muted", light: "243 73% 51% / 0.4",  dark: "252 65% 53% / 0.4",  originalFormula: "blackberry at 40%" },
  "chart-8-muted": { variable: "--chart-8-muted", light: "214 13% 53% / 0.4",  dark: "214 13% 53% / 0.4",  originalFormula: "grey at 40%" },
  "chart-positive-muted": { variable: "--chart-positive-muted", light: "165 100% 31% / 0.4", dark: "165 100% 31% / 0.4", originalFormula: "#00A078 at 40%" },
  "chart-negative-muted": { variable: "--chart-negative-muted", light: "352 83% 64% / 0.4",  dark: "352 83% 64% / 0.4",  originalFormula: "#EF576B at 40%" },
  "chart-sentiment-1-muted": { variable: "--chart-sentiment-1-muted", light: "352 83% 64% / 0.4", dark: "352 83% 64% / 0.4", originalFormula: "sentiment-1 at 40%" },
  "chart-sentiment-2-muted": { variable: "--chart-sentiment-2-muted", light: "22 79% 59% / 0.4",  dark: "22 79% 59% / 0.4",  originalFormula: "sentiment-2 at 40%" },
  "chart-sentiment-3-muted": { variable: "--chart-sentiment-3-muted", light: "38 92% 50% / 0.4",  dark: "38 92% 50% / 0.4",  originalFormula: "sentiment-3 at 40%" },
  "chart-sentiment-4-muted": { variable: "--chart-sentiment-4-muted", light: "88 52% 47% / 0.4",  dark: "88 52% 47% / 0.4",  originalFormula: "sentiment-4 at 40%" },
  "chart-sentiment-5-muted": { variable: "--chart-sentiment-5-muted", light: "165 100% 31% / 0.4", dark: "165 100% 31% / 0.4", originalFormula: "sentiment-5 at 40%" },
};
