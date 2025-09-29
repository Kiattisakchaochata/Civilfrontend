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