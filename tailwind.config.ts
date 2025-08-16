import type { Config } from "tailwindcss";
import { themeConfig } from "./src/config/theme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: themeConfig.colors.primary.DEFAULT,
          50: themeConfig.colors.primary[50],
          100: themeConfig.colors.primary[100],
          500: themeConfig.colors.primary[500],
          600: themeConfig.colors.primary[600],
          700: themeConfig.colors.primary[700],
          800: themeConfig.colors.primary[800],
          900: themeConfig.colors.primary[900],
          foreground: "hsl(var(--primary-foreground))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // ARZIR custom colors
        "arzir-primary": themeConfig.colors.primary.DEFAULT,
        "arzir-gray": themeConfig.colors.gray,
        success: themeConfig.colors.success,
        warning: themeConfig.colors.warning,
        danger: themeConfig.colors.danger,
      },
      fontFamily: {
        heading: [...themeConfig.fonts.heading],
        body: [...themeConfig.fonts.body],
      },
      maxWidth: {
        container: themeConfig.spacing.container,
      },
      spacing: {
        section: themeConfig.spacing.section,
      },
      boxShadow: {
        card: themeConfig.shadows.card,
        "card-hover": themeConfig.shadows["card-hover"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        card: themeConfig.borderRadius.card,
        button: themeConfig.borderRadius.button,
      },
      transitionDuration: {
        fast: themeConfig.animation.duration.fast,
        normal: themeConfig.animation.duration.normal,
        slow: themeConfig.animation.duration.slow,
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
