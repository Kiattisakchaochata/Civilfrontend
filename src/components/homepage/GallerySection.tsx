'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

export default function GallerySection() {
  const images = [
    { src: 'gallery1.png', title: 'ติดตั้งพื้นคอนกรีต', tag: 'งานติดตั้ง', link: '/services#install' },
    { src: 'gallery2.png', title: 'ปรับระดับพื้น', tag: 'งานติดตั้ง', link: '/services#install' },
    { src: 'gallery3.png', title: 'กันซึมดาดฟ้า', tag: 'เคลือบผิว', link: '/services#waterproof' },
    { src: 'gallery4.png', title: 'ซ่อมรอยร้าวพื้น', tag: 'งานซ่อมแซม', link: '/services#repair' },
    { src: 'gallery5.png', title: 'ทากันซึมดาดฟ้า', tag: 'งานกันซึม', link: '/services#install' },
    { src: 'epoxy1.png', title: 'งานพื้น Liquidhardener', tag: 'งานติดตั้งพื้น', link: '/services#epoxy' },
    { src: 'hardener.png', title: 'เพิ่มความแข็งพื้น', tag: 'เพิ่มความแข็งแรง', link: '/services#hardener' },
    { src: 'pu1.png', title: 'งานพื้น EPOXY/PU', tag: 'งานติดตั้ง', link: '/services#pu' },
    { src: 'repair-crack.png', title: 'พื้นคอนกรีต', tag: 'งานซ่อมแซม', link: '/services#repair' },
    { src: 'pu2.png', title: 'ระบบกันซึมดาดฟ้า', tag: 'กันซึมดาดฟ้า', link: '/services#waterproof' },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">ผลงานของเรา</h2>

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
                        คลิกดูเพิ่มเติม
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