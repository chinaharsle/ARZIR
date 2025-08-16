export const locales = ["en", "pt-BR", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig = {
  en: {
    label: "English",
    flag: "🇺🇸",
    dir: "ltr",
  },
  "pt-BR": {
    label: "Português (Brasil)",
    flag: "🇧🇷", 
    dir: "ltr",
  },
  es: {
    label: "Español",
    flag: "🇪🇸",
    dir: "ltr",
  },
} as const;