import th from './th'
import en from './en'
import zh from './zh'

export const dictionaries = {
  th,
  en,
  zh,
}

export type Locale = keyof typeof dictionaries

export const defaultLocale: Locale = 'th'

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale] || dictionaries.th
}