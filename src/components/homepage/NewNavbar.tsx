'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const pathname = usePathname()

  const { dict, locale, setLocale } = useLanguage()

  const menuItems = [
    { href: '/', label: dict.navbar.home },
    { href: '/services', label: dict.navbar.services },
    { href: '/projects', label: dict.navbar.projects },
    { href: '/blog', label: dict.navbar.blog },
    { href: '/about', label: dict.navbar.about },
  ]

  const languages = [
    { code: 'th', label: 'ไทย', short: 'TH', flag: '🇹🇭' },
    { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
    { code: 'zh', label: '中文', short: '中文', flag: '🇨🇳' },
  ]

  const currentLanguage =
    languages.find((item) => item.code === locale) ?? languages[0]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const changeLanguage = (code: string) => {
    setLocale(code as typeof locale)
    setLangOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#00007F]/95 text-white shadow-lg backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/civil-logo.jpg"
              alt="Civil Logo"
              width={56}
              height={56}
              priority
              className="h-14 w-14 shrink-0 object-contain"
            />

            <span className="line-clamp-2 max-w-[440px] text-sm font-semibold leading-snug tracking-wide lg:max-w-[520px] lg:text-base xl:max-w-[600px]">
              บริษัท ซีวิล คอนสตรัคชั่น โปรดักส์ จำกัด |
              บริษัท ซีวิล แอพพลิเคเตอร์ จำกัด
            </span>
          </Link>

          <div className="hidden shrink-0 items-center gap-1 text-sm font-medium md:flex">
            {menuItems.map((item) => {
              const active = isActive(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    'group relative rounded-full px-3 py-2 font-semibold transition-all duration-300 xl:px-4',
                    active
                      ? 'bg-[#F9C525] text-[#1F2560] shadow-md shadow-black/20 ring-1 ring-white/30'
                      : 'text-white/90 hover:bg-white/10 hover:text-white',
                  ].join(' ')}
                >
                  {item.label}

                  <span
                    className={[
                      'absolute -bottom-2 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#F9C525] transition-all duration-300',
                      active
                        ? 'w-8 opacity-100'
                        : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-100',
                    ].join(' ')}
                  />
                </Link>
              )
            })}

            <div className="mx-2 h-7 w-px bg-white/25 xl:mx-3" />

            <div className="relative">
              <button
                onClick={() => setLangOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                <span>{currentLanguage.flag}</span>
                <span>{currentLanguage.short}</span>
                <ChevronDown
                  size={16}
                  className={langOpen ? 'rotate-180 transition' : 'transition'}
                />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-2xl border border-white/10 bg-white text-[#1F2560] shadow-2xl">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => changeLanguage(item.code)}
                      className={[
                        'flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-bold transition',
                        locale === item.code
                          ? 'bg-[#F9C525] text-[#1F2560]'
                          : 'hover:bg-slate-100',
                      ].join(' ')}
                    >
                      <span>{item.flag}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition hover:bg-white/20"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#00007F]/95 px-4 pb-5 pt-3 backdrop-blur-xl md:hidden">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const active = isActive(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={[
                    'block rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300',
                    active
                      ? 'bg-[#F9C525] text-[#1F2560] shadow ring-1 ring-white/30'
                      : 'bg-white/5 text-white hover:bg-white/10',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/20 pt-4">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => changeLanguage(item.code)}
                className={[
                  'rounded-xl px-3 py-2 text-sm font-bold transition-all duration-300',
                  locale === item.code
                    ? 'bg-[#F9C525] text-[#1F2560] shadow'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-[#F9C525]',
                ].join(' ')}
              >
                <span className="mr-1">{item.flag}</span>
                {item.short}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}