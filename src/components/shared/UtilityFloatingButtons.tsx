'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaHome, FaArrowUp } from 'react-icons/fa'

export default function UtilityFloatingButtons() {
  const router = useRouter()
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
      behavior: 'smooth', // ✅ Smooth scroll
    })
  }

  return (
    <div className="fixed bottom-6 left-6 flex flex-col items-start space-y-3 z-[999]">
      <button
        onClick={goHome}
        className="bg-[#F9C525] hover:bg-yellow-400 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl"
        title="กลับหน้าแรก"
      >
        <FaHome />
      </button>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-[#1F2560] hover:bg-[#333d85] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl"
          title="ขึ้นด้านบน"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}