import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// The survey design system adds custom font-size tokens (e.g. `text-survey-body`).
// Tailwind-merge doesn't know these are font sizes, so by default it classifies
// `text-survey-body` as a text color and lets it collide with real color tokens
// like `text-survey-foreground` — silently dropping one. Register the survey
// font-size token so size and color survive together.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["survey-body"] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
