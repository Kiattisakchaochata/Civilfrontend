'use client'

import Link from 'next/link'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LeadMagnetSection() {
  const { dict } = useLanguage()

  return (
    <section className="bg-[#F8FAFC] px-4 py-12">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F9C525]">
              {dict.leadMagnet.badge}
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#1F2560] md:text-4xl">
              {dict.leadMagnet.title}
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              {dict.leadMagnet.description}
            </p>
          </div>

          <div className="rounded-2xl bg-[#1F2560]/5 p-5">
            <ul className="space-y-4">
              {dict.leadMagnet.points.map((point) => (
                <li key={point} className="flex gap-3 text-slate-700">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#F9C525]" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="https://m.me/715352691654101"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1F2560] px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#00007F]"
            >
              <MessageCircle size={18} />
              {dict.leadMagnet.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}