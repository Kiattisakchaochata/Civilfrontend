'use client'

import Image from 'next/image'
import { useState } from 'react'
import ServiceModal from '@/components/homepage/ServiceModal'

type ServiceItem = {
  id: number
  category: string
  title: string
  image: string
  description: string
  fullText?: string
}

const services: ServiceItem[] = [
  {
    id: 1,
    category: 'งานติดตั้ง',
    title: 'งานพื้น Liquidhardener',
    image: '/images/epoxy1.png',
    description:
      'เนื่องจากพื้นโรงงานอุตสาหกรรมทั่วไป มักมีอายุการใช้งานที่สั้นกว่าที่ควร เพราะปัญหาจากพื้นผิวคอนกรีตที่อ่อนแอ ทำให้เกิดการสึกกร่อน บริเวณบนผิวหน้าคอนกรีต เกิดฝุ่น เป็นหลุมบ่อ สาเหตุจากพื้นผิวคอนกรีตขัดมันทั่วไป จะไม่ทนการเสียดสีมากนัก เพราะผิวหน้าจะเป็นนํ้าปูนเป็นชั้นที่อ่อนแอ เกิดจากคอนกรีตที่เอ่อนํ้าขณะเทคอนกรีต (Bleeding) เมื่อแห้งจะเกิดฝุ่นและสึกกร่อนได้ง่ายระบบพื้น LIQUID HARDENER จะช่วยเพิ่มประสิทธิภาพทน  การเสียดสี ขูดลาก เงางาม ปราศจากฝุ่น ทำความสะอาดง่าย',
  },
  {
    id: 2,
    category: 'งานติดตั้ง',
    title: 'งานพื้น Floorhardener',
    image: '/images/hardener.png',
    description:
      'โดย Floorhardener เป็นวัสดุที่ทนการเสียดสี ขูดลากได้ดี  ใช้โรยลงบนผิวหน้าคอนกรีตที่ยังไม่แห้ง และขัดผิวหน้า ให้เป็นเนื้อเดียวกันทำให้พื้นผิวแน่น เรียบ ทนการเสียดสี ขูดลากได้ดียิ่งขึ้น ลดการสึกกร่อน จากการใช้งาน เหมาะสำหรับพื้นโรงงานอุตสาหกรรม  โกดัง คลังสินค้า ลานจอดรถ',
  },
  {
    id: 3,
    category: 'งานติดตั้ง',
    title: 'งานพื้น EPOXY / PU',
    image: '/images/pu1.png',
    description:
      'งานติดตั้ง พื้น EPOXY PU COATING PU SCREED เป็นพื้นที่ไร้รอยต่อ พื้นผิวมีความเงางาม เลือกสีได้ตามความต้องการ ทำความสะอาดง่าย ทนต่อสารเคมี ป้องกันฝุ่น เชื้อรา และแบคทีเรียได้ดีเหมาะสำหรับพื้นโรงงานอุตสาหกรรมทั่วไป อุตสาหกรรมอาหาร ยา ห้องแล็ป ห้องบรรจุ ศูนย์บริการรถยนต์',
  },
  {
    id: 4,
    category: 'งานติดตั้ง',
    title: 'งานกันซึม',
    image: '/images/pu2.png',
    description:
      'เนื่องจากโครงสร้างพื้นดาดฟ้าคอนกรีต สัมผัสแสงแดด อากาศร้อน เย็น อยู่ตลอดเวลา ทำให้เกิดการแตกร้าว บนผิวหน้าพื้นคอนกรีต ซึ่งเป็นจุดและสาเหตุหลักทำให้เกิดนํ้ารั่วซึม จึงต้องเลือกใช้วัสดุกันซึม ที่มีคุณสมบัติที่ยึดหยุ่นสูง ทนต่อการแตกร้าวของคอนกรีต ยึดเกาะกับพื้นผิว และป้องกันนํ้าซึมผ่านได้ดี',
  },
  {
    id: 5,
    category: 'งานซ่อมแซม',
    title: 'งานซ่อมแซม พื้นคอนกรีต',
    image: '/images/repair-crack.png',
    description:
      'ด้วยปูนปรับระดับ บาง 6-10 มม. (Cement Selfleveling) ลดปัญหางานซ่อมพื้นที่ต้องสกัดหนา เทท็อปปิ้งใหม่ สามารถเปิดใช้งานได้เร็วภายใน 6-10 ชม. เหมาะกับสำรับงานซ่อมแซมพื้นคอนกรีตในโรงงานอุตสาหกรรม คลังสินค้า ลานจอดรถ ห้างสรรพสินค้า ผิวแกร่ง ทนการเสียดสี ขูดลากได้ดี รับนํ้าหนักสูง',
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  const openModal = (service: ServiceItem) => setSelectedService(service)
  const closeModal = () => setSelectedService(null)

  const renderSection = (category: string, id: string) => (
    <section className="mb-10" id={id}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services
          .filter((s) => s.category === category)
          .map((s) => (
            <div
              key={s.id}
              className="bg-white shadow-md rounded overflow-hidden cursor-pointer hover:shadow-xl transition"
              onClick={() => openModal(s)}
            >
              <div className="relative h-48">
                <Image
  src={s.image}
  alt={s.title}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{s.description}</p>
                <button className="mt-3 text-yellow-400 font-semibold">คลิกดูเพิ่มเติม</button>
              </div>
            </div>
          ))}
      </div>
    </section>
  )

  return (
    <main className="bg-white min-h-screen">
      <div className="px-4 py-10 max-w-7xl mx-auto">
        {renderSection('งานติดตั้ง', 'install')}
        {renderSection('งานซ่อมแซม', 'repair')}

        {selectedService && (
          <ServiceModal
            service={{ ...selectedService, fullText: selectedService.description }}
            onClose={closeModal}
          />
        )}
      </div>
    </main>
  )
}