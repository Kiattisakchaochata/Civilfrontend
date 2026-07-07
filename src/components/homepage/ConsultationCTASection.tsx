'use client'

import Link from 'next/link'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ConsultationCTASection() {
  const { dict } = useLanguage()

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#1F2560] via-[#00007F] to-[#1F2560] p-8 shadow-2xl md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-[#F9C525]/15 px-4 py-2 text-sm font-bold text-[#F9C525] ring-1 ring-[#F9C525]/30">
              {dict.consultationCTA.badge}
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
              {dict.consultationCTA.title}
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
              {dict.consultationCTA.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <Link
              href="https://m.me/715352691654101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F9C525] px-6 py-3 font-extrabold text-[#1F2560] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {dict.consultationCTA.primaryButton}
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:0845552781"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneCall size={18} />
              084-555-2781
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}