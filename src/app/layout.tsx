// ✅ app/layout.tsx
import '../styles/globals.css'
import NewNavbar from '@/components/homepage/NewNavbar'
import ContactFloatingButton from '@/components/shared/ContactFloatingButton'
import UtilityFloatingButtons from '@/components/shared/UtilityFloatingButtons'
import Footer from '@/components/homepage/Footer'
import AnalyticsHead from '@/components/analytics/AnalyticsHead'

export const metadata = {
  title: 'Civil Products',
  description: 'บริษัทรับเหมาติดตั้งและซ่อมแซมพื้นผิว',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        {/* ✅ Favicon และ OG */}
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/images/og-cover.jpg" />

        {/* ✅ Scripts (GTM, GA4, Ads, FB Pixel) */}
        <AnalyticsHead />
      </head>

      <body>
        {/* ✅ GTM fallback for noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KW8DCSP3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* ✅ Main Layout */}
        <NewNavbar />
        {children}
        <ContactFloatingButton />
        <UtilityFloatingButtons />
        <Footer />
      </body>
    </html>
  )
}