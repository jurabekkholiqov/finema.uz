import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../config';

import uz from '../locales/uz.json';
import ru from '../locales/ru.json';
import en from '../locales/en.json';

type Translations = typeof uz;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  translations: Translations;
}

const translationsMap: Record<Language, Translations> = {
  uz,
  ru,
  en,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'finema_preferred_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language;
    if (saved && (saved === 'uz' || saved === 'ru' || saved === 'en')) {
      return saved;
    }
    return 'uz';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;

    // Update document title and SEO meta description per language
    const seoMap: Record<Language, { title: string; desc: string }> = {
      uz: {
        title: "Finema — Tozalik va Sifat Kafolati | Maishiy Kimyo Mahsulotlari",
        desc: "Finema — oila uchun sifatli va hamyonbop tozalash vositalari (idish yuvish geli, kir yuvish vositalari, oyna tozalagich, 72% suyuq xo'jalik sovuni). O'zbekistonda tayyorlanadi.",
      },
      ru: {
        title: "Finema — Гарантия Чистоты и Качества | Бытовая Химия в Узбекистане",
        desc: "Finema — качественные и доступные чистящие средства для семьи (гель для посуды, средства для стирки, спрей для стекол, жидкое хозяйственное мыло 72%). Производится в Узбекистане.",
      },
      en: {
        title: "Finema — Cleanliness & Quality Guaranteed | Household Cleaning Products",
        desc: "Finema — high-quality and affordable household cleaning products for family (dish gel, laundry detergent, glass cleaner, liquid 72% soap). Made in Uzbekistan.",
      },
    };

    const currentSeo = seoMap[language];
    if (currentSeo) {
      document.title = currentSeo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', currentSeo.desc);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', currentSeo.title);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', currentSeo.desc);
      }
    }
  }, [language]);

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translationsMap[language] || translationsMap.uz;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to UZ
        let fallback: any = translationsMap.uz;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return path;
          }
        }
        return typeof fallback === 'string' ? fallback : path;
      }
    }
    return typeof current === 'string' ? current : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations: translationsMap[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
