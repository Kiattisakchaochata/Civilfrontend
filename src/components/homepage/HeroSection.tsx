'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { dict } = useLanguage();

  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      {/* วิดีโอแทนรูป */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/civil.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="px-2 py-2 text-center">
          <h1 className="mb-6 text-center text-3xl font-bold text-white drop-shadow md:text-5xl">
            {dict.hero.titleLines.map((line, index) =>
              line ? (
                <div
                  key={index}
                  className={`leading-relaxed ${
                    index !== dict.hero.titleLines.length - 1 ? 'mb-1' : ''
                  }`}
                >
                  {line}
                </div>
              ) : (
                <div key={index} className="h-5" />
              )
            )}
          </h1>

          <Link
            href="https://m.me/715352691654101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-[#F9C525] px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition duration-300"
          >
            {dict.hero.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}