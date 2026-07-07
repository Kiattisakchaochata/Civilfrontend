'use client'

import { ShieldCheck, Ruler, Factory, ClipboardCheck } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TrustBadgeSection() {
  const { dict } = useLanguage()

  const items = [
    {
      icon: ShieldCheck,
      title: dict.trustBadge.engineerTitle,
      desc: dict.trustBadge.engineerDesc,
    },
    {
      icon: Ruler,
      title: dict.trustBadge.areaTitle,
      desc: dict.trustBadge.areaDesc,
    },
    {
      icon: ClipboardCheck,
      title: dict.trustBadge.surveyTitle,
      desc: dict.trustBadge.surveyDesc,
    },
    {
      icon: Factory,
      title: dict.trustBadge.factoryTitle,
      desc: dict.trustBadge.factoryDesc,
    },
  ]

  return (
    <section className="relative z-10 bg-white px-4 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70 md:grid-cols-4 md:p-6">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F2560] text-[#F9C525] shadow-md">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-extrabold text-[#1F2560]">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}