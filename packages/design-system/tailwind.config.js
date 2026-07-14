/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-family-sans)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-family-heading)", "Outfit", "sans-serif"],
        survey: ["var(--survey-font-family)", "Outfit", "sans-serif"],
      },
      fontSize: {
        "survey-heading": "var(--survey-font-size-heading)",
        "survey-body": "var(--survey-font-size-body)",
        "survey-support": "var(--survey-font-size-support)",
      },
      fontWeight: {
        "survey-regular": "var(--survey-font-weight-regular)",
        "survey-semibold": "var(--survey-font-weight-semibold)",
      },
      colors: {
        border: "hsl(var(--border))",
        /* Named scale — prefer these */
        "border-decorative":
          "hsl(var(--border-decorative))" /* ~1.3:1  non-interactive only */,
        "border-ui":
          "hsl(var(--border-ui))" /* ~4.97:1 interactive elements  */,
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        disabled: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--disabled-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        survey: {
          primary: "hsl(var(--survey-primary))",
          "primary-foreground": "hsl(var(--survey-primary-foreground))",
          foreground: "hsl(var(--survey-foreground))",
          "muted-foreground": "hsl(var(--survey-muted-foreground))",
          background: "hsl(var(--survey-background))",
          "rendering-overlay": "hsl(0 0% 0% / 0.1)",
          "muted-background": "hsl(var(--survey-border-interactive) / 0.2)",
          "border-interactive": "hsl(var(--survey-border-interactive))",
          "border-selected": "hsl(var(--survey-border-selected))",
          "border-accent": "hsl(var(--survey-border-accent))",
          destructive: "hsl(var(--survey-destructive))",
          "border-muted": "hsl(var(--survey-border-muted))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 1px)",
        "survey-sm": "var(--survey-radius-sm)",
        "survey-md": "var(--survey-radius-md)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
};
