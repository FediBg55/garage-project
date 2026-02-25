"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLang, type Lang, translations } from "../lib/i18n";

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  useEffect(() => {
    const saved = localStorage.getItem("garage_lang") as Lang | null;
    if (saved && translations[saved]) {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("garage_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo<I18nContextType>(
    () => ({
      lang,
      setLang: setLangState,
      t: (key: string) => translations[lang][key] ?? key,
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
