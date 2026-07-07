'use client';
import HeroSection from '@/components/homepage/HeroSection';
import CategorySection from '@/components/homepage/CategorySection';
import GallerySection from '@/components/homepage/GallerySection';
import MapSection from '@/components/homepage/MapSection';
import AboutUsSection from '@/components/homepage/AboutUsSection';

export default function HomeClient() {
  return (
    <main className="bg-white">
      <HeroSection />
      <CategorySection />
      <GallerySection />
      <AboutUsSection />
      <MapSection />
    </main>
  );
}