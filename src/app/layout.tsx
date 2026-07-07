// ✅ app/layout.tsx
import '../styles/globals.css'
import NewNavbar from '@/components/homepage/NewNavbar'
import ContactFloatingButton from '@/components/shared/ContactFloatingButton'
import UtilityFloatingButtons from '@/components/shared/UtilityFloatingButtons'
import Footer from '@/components/homepage/Footer'
import AnalyticsHead from '@/components/analytics/AnalyticsHead'
import { LanguageProvider } from '@/contexts/LanguageContext'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import WebSiteSchema from '@/components/seo/WebSiteSchema'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import FaqSchema from '@/components/seo/FaqSchema'

export const metadata = {
  metadataBase: new URL('https://www.civilproductsthailand.com'),
  title: {
    default: 'Civil Products Thailand | Industrial Flooring & Concrete Repair',
    template: '%s | Civil Products Thailand',
  },
  description:
    'Civil Products Thailand provides industrial flooring installation, epoxy, PU, floor hardener, waterproofing, and concrete surface repair services.',
  alternates: {
  canonical: '/',
  languages: {
    th: '/',
    en: '/?lang=en',
    zh: '/?lang=zh',
    'x-default': '/',
  },
},
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://www.civilproductsthailand.com',
    siteName: 'Civil Products Thailand',
    title: 'Civil Products Thailand | Industrial Flooring & Concrete Repair',
    description:
      'Industrial flooring installation, epoxy, PU, waterproofing, and concrete surface repair services in Thailand.',
    images: [
      {
        url: '/images/civil-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Civil Products Thailand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Civil Products Thailand | Industrial Flooring & Concrete Repair',
    description:
      'Industrial flooring installation, epoxy, PU, waterproofing, and concrete surface repair services in Thailand.',
    images: ['/images/civil-logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        {/* ✅ Favicon และ OG */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#1F2560" />
        <meta property="og:image" content="/images/og-cover.jpg" />

        {/* ✅ Scripts (GTM, GA4, Ads, FB Pixel) */}
        <AnalyticsHead />
      </head>

      <body>
        <LanguageProvider>
          <OrganizationSchema />
          <ServiceSchema />
          <WebSiteSchema />
          <LocalBusinessSchema />
          <FaqSchema />

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KW8DCSP3"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>

          <NewNavbar />
          {children}
          <ContactFloatingButton />
          <UtilityFloatingButtons />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}