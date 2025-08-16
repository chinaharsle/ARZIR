export const themeConfig = {
  colors: {
    primary: {
      DEFAULT: "#006EB6",
      50: "#E6F3FF",
      100: "#CCE7FF",
      500: "#006EB6",
      600: "#005A96",
      700: "#004D80",
      800: "#004170",
      900: "#003660",
    },
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6", 
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    success: "#16A34A",
    warning: "#D97706", 
    danger: "#DC2626",
  },
  fonts: {
    heading: ["Roboto", "sans-serif"],
    body: ["Hind", "sans-serif"],
  },
  spacing: {
    section: "5rem", // 80px
    container: "1280px",
  },
  shadows: {
    card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "card-hover": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  borderRadius: {
    card: "0.75rem", // 12px
    button: "0.5rem", // 8px
  },
  animation: {
    duration: {
      fast: "0.15s",
      normal: "0.3s",
      slow: "0.6s",
    },
    easing: {
      ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;