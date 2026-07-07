'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutClient() {
  const { dict } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-[#1F2560]/5 border-b border-[#1F2560]/10">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1F2560]">
            {dict.about.title}
          </h1>
          <p className="mt-3 text-gray-600">
            {dict.about.subtitle}
          </p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <div className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1F2560]">
              {dict.about.company1}
            </p>
            <p className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1F2560] mt-1">
              {dict.about.company2}
            </p>

            <p className="mt-5 text-gray-700 leading-relaxed">
              {dict.about.achievement.prefix}{' '}
              <span className="font-semibold">{dict.about.achievement.value}</span>
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-[#1F2560] mb-6">
            {dict.about.contactTitle}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <dl className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
                <div>
                  <dt className="text-sm text-gray-500">{dict.about.headOfficeLabel}</dt>
                  <dd className="mt-1 text-gray-800">{dict.about.address}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
                <div>
                  <dt className="text-sm text-gray-500">{dict.about.phoneLabel}</dt>
                  <dd className="mt-1 text-gray-800 space-x-2">
                    <a href="tel:0845552781" className="font-medium hover:underline text-[#1F2560]">084-555-2781</a>
                    <span className="text-gray-400">/</span>
                    <a href="tel:0982512055" className="font-medium hover:underline text-[#1F2560]">098-251-2055</a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
                <div>
                  <dt className="text-sm text-gray-500">{dict.about.lineLabel}</dt>
                  <dd className="mt-1 text-gray-800">{dict.about.lineId}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#F9C525]" />
                <div>
                  <dt className="text-sm text-gray-500">{dict.about.emailLabel}</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${dict.about.email}`}
                      className="text-[#1F2560] font-medium hover:underline break-all"
                    >
                      {dict.about.email}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="rounded-xl bg-white border border-gray-200 p-5">
              <h4 className="font-semibold text-[#1F2560] mb-3">
                {dict.about.taxTitle}
              </h4>

              <ul className="space-y-3 text-gray-800">
                {dict.about.taxItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1F2560]" />
                    <div>
                      <p className="font-medium">{item.id}</p>
                      <p className="text-sm text-gray-500">{item.company}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <a
                  href="https://m.me/715352691654101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-[#1F2560] px-5 py-2.5 font-semibold text-[#1F2560] transition hover:bg-[#1F2560]"
                >
                  <span className="bg-gradient-to-r from-[#F9C525] to-amber-400 bg-clip-text text-transparent group-hover:text-white group-hover:bg-none">
                    {dict.about.cta}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}