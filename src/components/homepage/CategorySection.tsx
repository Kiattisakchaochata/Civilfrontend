'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CategorySection() {
  const router = useRouter()

  const goToSection = (sectionId: string) => {
    router.push(`/services#${sectionId}`)
  }

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">บริการของเรา</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* งานติดตั้ง */}
        <div className="relative w-full h-[300px] rounded overflow-hidden shadow-md">
          <Image
            src="/images/install-new.png"
            alt="ติดตั้งพื้น"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
            <h3 className="text-2xl font-bold mb-3">งานติดตั้ง</h3>
            <button
              onClick={() => goToSection('install')}
              className="bg-black bg-opacity-60 px-6 py-2 rounded-full hover:bg-opacity-80 transition"
            >
              คลิกดูเพิ่มเติม
            </button>
          </div>
        </div>

        {/* งานซ่อมแซม */}
        <div className="relative w-full h-[300px] rounded overflow-hidden shadow-md">
          <Image
            src="/images/repair-new.png"
            alt="ซ่อมแซม"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
            <h3 className="text-2xl font-bold mb-3">งานซ่อมแซม</h3>
            <button
              onClick={() => goToSection('repair')}
              className="bg-black bg-opacity-60 px-6 py-2 rounded-full hover:bg-opacity-80 transition"
            >
              คลิกดูเพิ่มเติม
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}