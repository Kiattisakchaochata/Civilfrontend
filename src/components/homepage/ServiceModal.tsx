'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

type ServiceItem = {
  title: string
  image: string
  fullText: string
}

type ServiceModalProps = {
  service: ServiceItem
  onClose: () => void
}

/** แปลงข้อความเป็นพารากราฟ + บูลเล็ต */
function RichText({ text }: { text: string }) {
  const lines = text.split('\n').map((l) => l.trim())
  const blocks: React.ReactNode[] = []
  let bullets: string[] = []

  const flushBullets = () => {
    if (bullets.length) {
      blocks.push(
        <ul
          className="list-disc pl-6 space-y-1 text-slate-700 marker:text-amber-500"
          key={`ul-${blocks.length}`}
        >
          {bullets.map((b, i) => (
            <li key={`li-${i}`}>{b.replace(/^-\s*/, '')}</li>
          ))}
        </ul>
      )
      bullets = []
    }
  }

  lines.forEach((l) => {
    if (!l) return
    if (/^-\s+/.test(l)) {
      bullets.push(l)
    } else {
      flushBullets()
      blocks.push(
        <p
          className="leading-8 text-slate-700 text-[15px] md:text-base"
          key={`p-${blocks.length}`}
        >
          {l}
        </p>
      )
    }
  })
  flushBullets()
  return <div className="space-y-3">{blocks}</div>
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  // ปิดด้วยปุ่ม Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // คลิกนอกกล่องเพื่อปิด
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={panelRef}
        className="
          relative w-full max-w-5xl   /* ✅ ปรับขนาดกว้างขึ้น */
          overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5
        "
      >
        {/* รูป: สูงขึ้นเล็กน้อย */}
        <div className="relative h-72 md:h-80 w-full"> {/* ✅ ปรับความสูงรูป */}
          <Image
            src={service.image || '/images/fallback.png'}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 70vw"
            priority
          />
        </div>

        {/* เนื้อหา: พื้นที่เลื่อน ถ้าข้อความยาว */}
        <div className="max-h-[65vh] overflow-y-auto p-8"> {/* ✅ ปรับ max-h ให้สูงขึ้น */}
          <h3 className="mb-4 text-2xl md:text-3xl font-extrabold tracking-tight text-amber-500">
            {service.title}
          </h3>

          <RichText text={service.fullText} />
        </div>

        {/* ปุ่มปิดด้านล่าง */}
        <div className="flex justify-end gap-3 border-t bg-white/60 p-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  )
}