'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GallerySection() {
  const { dict } = useLanguage()
  const images = dict.gallery.items

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        {dict.gallery.title}
      </h2>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          speed={4000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.link}>
                <div className="relative w-full h-[180px] md:h-[200px] lg:h-[220px] rounded overflow-hidden shadow group cursor-pointer">
                  <Image
                    src={`/images/${item.src}`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-3">
                    <div>
                      <div className="w-8 h-8 bg-white rounded-full shadow-md"></div>
                    </div>

                    <div className="text-white">
                      <div className="bg-white text-black text-xs px-3 py-1 rounded font-semibold mb-2 inline-block">
                        {dict.gallery.viewMore}
                      </div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-gray-300">{item.tag}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}