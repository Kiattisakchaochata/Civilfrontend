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
      'เนื่องจากพื้นโรงงานอุตสาหกรรมทั่วไป มักมีอายุการใช้งานที่สั้นกว่าที่ควร เพราะปัญหาจากพื้นผิวคอนกรีตที่อ่อนแอ ทำให้เกิดการสึกกร่อน บริเวณบนผิวหน้าคอนกรีต เกิดฝุ่น เป็นหลุมบ่อ ระบบพื้น LIQUID HARDENER จะช่วยเพิ่มประสิทธิภาพ ทนการเสียดสี ขูดลาก เงางาม ปราศจากฝุ่น ทำความสะอาดง่าย',
    fullText:
      'เนื่องจากพื้นโรงงานอุตสาหกรรมทั่วไป มักมีอายุการใช้งานที่สั้นกว่าที่ควร เพราะปัญหาจากพื้นผิวคอนกรีตที่อ่อนแอ ทำให้เกิดการสึกกร่อน บริเวณบนผิวหน้าคอนกรีต เกิดฝุ่น เป็นหลุมบ่อ สาเหตุจากพื้นผิวคอนกรีตขัดมันทั่วไป จะไม่ทนการเสียดสีมากนัก เพราะผิวหน้าจะเป็นน้ำปูนเป็นชั้นที่อ่อนแอ เกิดจากคอนกรีตที่เอ่อน้ำขณะเทคอนกรีต (Bleeding) เมื่อแห้งจะเกิดฝุ่นและสึกกร่อนได้ง่าย ระบบพื้น LIQUID HARDENER จะช่วยเพิ่มประสิทธิภาพทนการเสียดสี ขูดลาก เงางาม ปราศจากฝุ่น ทำความสะอาดง่าย\n- ทนการเสียดสี ขูดลาก\n- เพิ่มความแข็งแรงของพื้นผิวหน้าคอนกรีต ด้วยกระบวนการขัดใบเรซิ่นและน้ำยาเสริมความแกร่ง\n- ป้องกันฝุ่น พื้นผิวดูสะอาด เงางาม ดูแลง่าย\n- ติดตั้งได้ทั้งพื้นเก่าและใหม่\n- หลังติดตั้งเสร็จ เปิดใช้งานได้ทันที',
  },
  {
    id: 2,
    category: 'งานติดตั้ง',
    title: 'งานพื้น Floorhardener',
    image: '/images/hardener.png',
    description:
      'วัสดุทนการเสียดสี ขูดลาก โรยบนผิวคอนกรีตที่ยังไม่แห้งแล้วขัดให้เนื้อแน่น เรียบ ทนสึกกร่อนสูง เหมาะกับพื้นโรงงาน-โกดัง-ลานจอดรถ',
    fullText:
      'โดย Floorhardener เป็นวัสดุที่ทนการเสียดสี ขูดลากได้ดี ใช้โรยลงบนผิวหน้าคอนกรีตที่ยังไม่แห้ง และขัดผิวหน้าให้เป็นเนื้อเดียวกันทำให้พื้นผิวแน่น เรียบ ทนการเสียดสี ขูดลากได้ดียิ่งขึ้น ลดการสึกกร่อนจากการใช้งาน เหมาะสำหรับพื้นโรงงานอุตสาหกรรม โกดัง คลังสินค้า ลานจอดรถ\n- ทนการเสียดสี ขูดลาก มากกว่าพื้นคอนกรีตทั่วไป\n- ทนแรงตกกระทบทั่วไป (ที่ไม่ใช่โลหะ)',
  },
  {
    id: 3,
    category: 'งานติดตั้ง',
    title: 'งานพื้น EPOXY / PU',
    image: '/images/pu1.png',
    description:
      'พื้นไร้รอยต่อ ผิวเงางาม เลือกสีได้ ทำความสะอาดง่าย ทนสารเคมี ป้องกันฝุ่น/เชื้อรา เหมาะสำหรับอุตสาหกรรมอาหาร ยา ห้องแล็บ ฯลฯ',
    fullText:
      'งานติดตั้งพื้น EPOXY / PU (Coating / Screed) เป็นพื้นที่ไร้รอยต่อ พื้นผิวเงางาม เลือกสีได้ตามต้องการ ทำความสะอาดง่าย ทนต่อสารเคมี ป้องกันฝุ่น เชื้อรา และแบคทีเรียได้ดี เหมาะสำหรับพื้นโรงงานอุตสาหกรรมทั่วไป อุตสาหกรรมอาหาร ยา ห้องแล็บ ห้องบรรจุ และศูนย์บริการรถยนต์ ฯลฯ',
  },
  {
    id: 4,
    category: 'งานติดตั้ง',
    title: 'งานกันซึม',
    image: '/images/pu2.png',
    description:
      'แก้ปัญหาน้ำรั่วซึมจากการแตกร้าวของพื้นดาดฟ้าคอนกรีต ด้วยวัสดุกันซึมยืดหยุ่นสูง ยึดเกาะดี ป้องกันน้ำผ่านได้เยี่ยม',
    fullText:
      'โครงสร้างพื้นดาดฟ้าคอนกรีตสัมผัสแสงแดดและอุณหภูมิที่เปลี่ยนแปลงตลอดเวลา ทำให้เกิดการแตกร้าวบนผิวคอนกรีต ซึ่งเป็นสาเหตุหลักของน้ำรั่วซึม จึงต้องเลือกใช้วัสดุกันซึมที่มีคุณสมบัติยืดหยุ่นสูง ทนต่อการแตกร้าว ยึดเกาะพื้นผิวดี และป้องกันน้ำซึมผ่านได้อย่างมีประสิทธิภาพ',
  },
  {
    id: 5,
    category: 'งานซ่อมแซม',
    title: 'งานซ่อมแซม พื้นคอนกรีต',
    image: '/images/repair-crack.png',
    description:
      'ซ่อมพื้นด้วยปูนปรับระดับบาง 6–10 มม. (Self-leveling) เปิดใช้งานได้เร็ว ผิวแกร่ง ทนขูดลาก รับน้ำหนักสูง เหมาะพื้นที่ใช้งานหนัก',
    fullText:
      'ซ่อมพื้นด้วยปูนปรับระดับบาง 6–10 มม. (Cement Self-leveling) ลดปัญหาต้องสกัดหนาและเทท็อปปิ้งใหม่ สามารถเปิดใช้งานได้เร็วภายใน 6–10 ชั่วโมง เหมาะกับงานซ่อมพื้นคอนกรีตในโรงงานอุตสาหกรรม คลังสินค้า ลานจอดรถ และห้างสรรพสินค้า ผิวแกร่ง ทนการเสียดสี ขูดลากได้ดี และรับน้ำหนักสูง',
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const openModal = (service: ServiceItem) => setSelectedService(service)
  const closeModal = () => setSelectedService(null)

  const renderSection = (category: string, id: string) => (
    <section className="mb-16" id={id} key={`section-${id}`}>
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-800">{category}</h2>

      {/* การ์ดใหญ่ขึ้น: 2–3 คอลัมน์, รูปสูง, เงาสวย */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services
          .filter((s) => s.category === category)
          .map((s) => (
            <article
              key={`card-${s.id}`}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              onClick={() => openModal(s)}
            >
              {/* รูปใหญ่ */}
              <div className="relative h-64">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">{s.title}</h3>
                {/* ตัด 3 บรรทัด แล้วใส่ … */}
                <p className="mt-3 text-base leading-7 text-slate-600 line-clamp-3">
                  {s.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-400">กดเพื่อดูรายละเอียด</span>
                  <button
                    className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-300"
                    onClick={() => openModal(s)}
                  >
                    คลิกดูเพิ่มเติม
                  </button>
                </div>
              </div>
            </article>
          ))}
      </div>
    </section>
  )

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {renderSection('งานติดตั้ง', 'install')}
        {renderSection('งานซ่อมแซม', 'repair')}

        {selectedService && (
          <ServiceModal
            service={{
              title: selectedService.title,
              image: selectedService.image,
              fullText: selectedService.fullText ?? selectedService.description,
            }}
            onClose={closeModal}
          />
        )}
      </div>
    </main>
  )
}