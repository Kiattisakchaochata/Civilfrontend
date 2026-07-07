'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getDictionary, type Locale, defaultLocale } from '@/dictionaries'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  dict: ReturnType<typeof getDictionary>
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'civil-products-locale'

function isLocale(value: string | null): value is Locale {
  return value === 'th' || value === 'en' || value === 'zh'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const savedLocale = localStorage.getItem(STORAGE_KEY)

    if (isLocale(savedLocale)) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)
    localStorage.setItem(STORAGE_KEY, nextLocale)
  }

  const dict = useMemo(() => getDictionary(locale), [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dict }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}