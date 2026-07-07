'use client';
import HeroSection from '@/components/homepage/HeroSection';
import CategorySection from '@/components/homepage/CategorySection';
import GallerySection from '@/components/homepage/GallerySection';
import MapSection from '@/components/homepage/MapSection';
import AboutUsSection from '@/components/homepage/AboutUsSection';
import TrustBadgeSection from '@/components/homepage/TrustBadgeSection'
import ConsultationCTASection from '@/components/homepage/ConsultationCTASection'
import LeadMagnetSection from '@/components/homepage/LeadMagnetSection'
export default function HomeClient() {
  return (
    <main className="bg-white">
      <HeroSection />
      <TrustBadgeSection />
      <CategorySection />
      <GallerySection />
      <AboutUsSection />
      <LeadMagnetSection />
      <ConsultationCTASection />
      <MapSection />
    </main>
  );
}