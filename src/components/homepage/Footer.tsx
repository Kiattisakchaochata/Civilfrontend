'use client'

import { useState } from 'react'
import { FaFacebookF, FaLine, FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  const [showModal, setShowModal] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const handlePhoneClick = (number: string) => {
    setSelectedNumber(number)
    setShowModal(true)
  }

  return (
    <>
      <footer className="bg-[#00007F] text-white text-sm py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-6">
          <div className="text-center md:text-left">© 2025 Civil Products</div>

          <div className="text-center font-medium">ช่องทางติดต่อ</div>

          {/* ✅ Contact buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 text-base">
            <a
              href="https://www.facebook.com/profile.php?id=61577460965495"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaFacebookF />
              Facebook
            </a>

            <a
              href="https://line.me/ti/p/4UQxyD8RTt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaLine />
              Line
            </a>

            <button
              onClick={() => handlePhoneClick('0845552781')}
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaPhoneAlt />
              084-555-2781
            </button>

            <button
              onClick={() => handlePhoneClick('0982546476')}
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaPhoneAlt />
              098-254-6476
            </button>
          </div>
        </div>
      </footer>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl w-[90%] max-w-sm p-6 shadow-2xl animate-fade-in text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-3">ต้องการโทรออก?</h2>
            <p className="text-gray-600 text-base mb-6">เบอร์: {selectedNumber}</p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 w-1/2"
              >
                ยกเลิก
              </button>

              <a href={`tel:${selectedNumber}`} className="w-1/2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
                >
                  โทรออก
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}