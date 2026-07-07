'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const {
    dict,
    locale,
    setLocale,
  } = useLanguage()

  const menuItems = [
    { href: '/', label: dict.navbar.home },
    { href: '/services', label: dict.navbar.services },
    { href: '/projects', label: dict.navbar.projects },
    { href: '/about', label: dict.navbar.about },
  ]

  return (
    <nav className="bg-[#00007F] text-white w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/civil-logo.jpg"
              alt="Civil Logo"
              width={50}
              height={50}
              className="object-contain"
            />

            <span className="text-base sm:text-lg font-semibold">
              บริษัท ซีวิล คอนสตรัคชั่น โปรดักส์ จำกัด |
              บริษัท ซีวิล แอพพลิเคเตอร์ จำกัด
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:underline"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-6 flex items-center gap-3 border-l border-white/30 pl-6">
              <button
                onClick={() => setLocale('th')}
                className={
                  locale === 'th'
                    ? 'font-bold text-yellow-300'
                    : 'hover:text-yellow-300'
                }
              >
                TH
              </button>

              <button
                onClick={() => setLocale('en')}
                className={
                  locale === 'en'
                    ? 'font-bold text-yellow-300'
                    : 'hover:text-yellow-300'
                }
              >
                EN
              </button>

              <button
                onClick={() => setLocale('zh')}
                className={
                  locale === 'zh'
                    ? 'font-bold text-yellow-300'
                    : 'hover:text-yellow-300'
                }
              >
                中文
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#00007F]">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:underline"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex gap-4 pt-4 border-t border-white/20">
            <button
              onClick={() => setLocale('th')}
              className={
                locale === 'th'
                  ? 'font-bold text-yellow-300'
                  : ''
              }
            >
              TH
            </button>

            <button
              onClick={() => setLocale('en')}
              className={
                locale === 'en'
                  ? 'font-bold text-yellow-300'
                  : ''
              }
            >
              EN
            </button>

            <button
              onClick={() => setLocale('zh')}
              className={
                locale === 'zh'
                  ? 'font-bold text-yellow-300'
                  : ''
              }
            >
              中文
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}