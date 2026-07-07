'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import ServiceModal from '@/components/homepage/ServiceModal'

type ServiceItem = {
  id: number
  category: 'install' | 'repair'
  title: string
  image: string
  description: string
  fullText?: string
}

export default function ServicesClient() {
  const { dict } = useLanguage()
  const services = dict.services.items as ServiceItem[]

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)

  const openModal = (service: ServiceItem) => setSelectedService(service)
  const closeModal = () => setSelectedService(null)

  const renderSection = (category: 'install' | 'repair', id: string) => (
    <section className="mb-16" id={id} key={`section-${id}`}>
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-800">
        {category === 'install'
          ? dict.services.installTitle
          : dict.services.repairTitle}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services
          .filter((s) => s.category === category)
          .map((s) => (
            <article
              key={`card-${s.id}`}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              onClick={() => openModal(s)}
            >
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

                <p className="mt-3 text-base leading-7 text-slate-600 line-clamp-3">
                  {s.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    {dict.services.viewDetail}
                  </span>

                  <button
                    className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-300"
                    onClick={(event) => {
                      event.stopPropagation()
                      openModal(s)
                    }}
                  >
                    {dict.services.viewMore}
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
        {renderSection('install', 'install')}
        {renderSection('repair', 'repair')}

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