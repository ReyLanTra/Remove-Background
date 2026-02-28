import 'server-only';

export type Locale = 'id' | 'en' | 'es' | 'fr' | 'de' | 'ja' | 'zh' | 'ar' | 'pt' | 'ru' | 'it' | 'ko' | 'tr';

const dictionaries = {
  id: () => import('../dictionaries/id.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  // For other languages, we can fallback to English or provide minimal translations
  es: () => import('../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../dictionaries/en.json').then((module) => module.default),
  de: () => import('../dictionaries/en.json').then((module) => module.default),
  ja: () => import('../dictionaries/en.json').then((module) => module.default),
  zh: () => import('../dictionaries/en.json').then((module) => module.default),
  ar: () => import('../dictionaries/en.json').then((module) => module.default),
  pt: () => import('../dictionaries/en.json').then((module) => module.default),
  ru: () => import('../dictionaries/en.json').then((module) => module.default),
  it: () => import('../dictionaries/en.json').then((module) => module.default),
  ko: () => import('../dictionaries/en.json').then((module) => module.default),
  tr: () => import('../dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.en();
};

export const locales: Locale[] = ['id', 'en', 'es', 'fr', 'de', 'ja', 'zh', 'ar', 'pt', 'ru', 'it', 'ko', 'tr'];
export const defaultLocale: Locale = 'id';
