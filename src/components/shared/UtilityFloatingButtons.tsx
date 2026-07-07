'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaHome, FaArrowUp } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'

export default function UtilityFloatingButtons() {
  const router = useRouter()
  const { dict } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      setShowScrollTop(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goHome = () => {
    router.push('/')
  }

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="fixed bottom-6 left-6 flex flex-col items-start space-y-3 z-[999]">
      <button
        onClick={goHome}
        className="bg-[#F9C525] hover:bg-yellow-400 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl"
        title={dict.utilityFloating.home}
      >
        <FaHome />
      </button>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-[#1F2560] hover:bg-[#333d85] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl"
          title={dict.utilityFloating.scrollTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}