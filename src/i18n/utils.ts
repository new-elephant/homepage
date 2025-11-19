import en from "./en.json";
import zhTw from "./zh-tw.json";

export const languages = {
  en: "English",
  "zh-tw": "繁體中文",
};

export const defaultLang = "zh-tw";

export const translations = {
  en: en,
  "zh-tw": zhTw,
};

export type Language = keyof typeof languages;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string) {
    const keys = key.split(".");
    let value: any = translations[lang];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key;
      }
    }

    return value !== undefined ? value : key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  return `/${lang}${path}`;
}
