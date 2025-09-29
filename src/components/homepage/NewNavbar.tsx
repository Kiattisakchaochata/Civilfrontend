'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#00007F] text-white w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Company Name */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/civil-logo.jpg"
              alt="Civil Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-base sm:text-lg font-semibold">
              บริษัท ซีวิล คอนสตรัคชั่น โปรดักส์ จำกัด | บริษัท ซีวิล แอพพลิเคเตอร์ จำกัด
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="hover:underline">หน้าหลัก</Link>
            <Link href="/services" className="hover:underline">บริการ</Link>
            <Link href="/projects" className="hover:underline">ผลงาน</Link>
            <Link href="/about" className="hover:underline">เกี่ยวกับเรา</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 transition-all duration-300 ease-in-out">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-1 hover:underline">
            หน้าหลัก
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="block py-1 hover:underline">
            บริการ
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block py-1 hover:underline">
            ผลงาน
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-1 hover:underline">
            เกี่ยวกับเรา
          </Link>
        </div>
      )}
    </nav>
  )
}