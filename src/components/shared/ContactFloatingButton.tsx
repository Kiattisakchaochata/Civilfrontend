'use client'

import { useState } from 'react'
import { FaPhoneAlt, FaFacebookMessenger, FaLine } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactFloatingButton() {
  const { dict } = useLanguage()

  const [isOpen, setIsOpen] = useState(false)
  const [showPhoneModal, setShowPhoneModal] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleMenu}
          className="bg-[#F91E63] hover:bg-[#e91e63] text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-2xl"
        >
          {isOpen ? <IoClose /> : <FaFacebookMessenger />}
        </button>

        {isOpen && (
          <div className="flex flex-col items-end space-y-3 mt-4">
            <button
              onClick={() => setShowPhoneModal(true)}
              className="flex items-center bg-white rounded-full px-4 py-2 shadow hover:scale-105 transition"
            >
              <span className="text-gray-800 mr-2">{dict.contactFloating.callUs}</span>
              <FaPhoneAlt className="text-green-600" />
            </button>

            <a
              href="https://line.me/ti/p/4UQxyD8RTt"
              target="_blank"
              className="flex items-center bg-white rounded-full px-4 py-2 shadow hover:scale-105 transition"
              rel="noopener noreferrer"
            >
              <span className="text-gray-800 mr-2">{dict.contactFloating.chatLine}</span>
              <FaLine className="text-green-500" />
            </a>

            <a
              onClick={() => window.open('https://m.me/715352691654101', '_blank')}
              className="cursor-pointer flex items-center bg-white rounded-full px-4 py-2 shadow hover:scale-105 transition"
            >
              <span className="text-gray-800 mr-2">{dict.contactFloating.chatFacebook}</span>
              <FaFacebookMessenger className="text-blue-600" />
            </a>
          </div>
        )}
      </div>

      {showPhoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowPhoneModal(false)}
            >
              <IoClose size={24} />
            </button>

            <h2 className="text-xl font-semibold mb-2">
              {dict.contactFloating.phoneTitle}
            </h2>

            <p className="text-lg text-pink-600 font-bold mb-2">084-555-2781</p>
            <p className="text-lg text-pink-600 font-bold mb-4">098-2512055</p>

            <a
              href="tel:0845552781"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition mb-2"
            >
              {dict.contactFloating.call} 084-555-2781
            </a>

            <br />

            <a
              href="tel:0982512055"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              {dict.contactFloating.call} 098-2512055
            </a>
          </div>
        </div>
      )}
    </>
  )
}