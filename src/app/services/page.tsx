import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
export const metadata: Metadata = {
  title: 'Services',
  description:
    'Industrial flooring services including epoxy flooring, PU flooring, floor hardener, waterproofing, and concrete floor repair.',
  alternates: {
  canonical: '/services',
  languages: {
    th: '/services',
    en: '/services?lang=en',
    zh: '/services?lang=zh',
    'x-default': '/services',
  },
},
  openGraph: {
    title: 'Services | Civil Products Thailand',
    description:
      'Industrial flooring, epoxy, PU, waterproofing, and concrete repair services by Civil Products Thailand.',
    url: '/services',
    type: 'website',
    images: ['/images/civil-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Civil Products Thailand',
    description:
      'Industrial flooring, epoxy, PU, waterproofing, and concrete repair services by Civil Products Thailand.',
    images: ['/images/civil-logo.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: 'https://www.civilproductsthailand.com',
          },
          {
            name: 'Services',
            url: 'https://www.civilproductsthailand.com/services',
          },
        ]}
      />

      <ServicesClient />
    </>
  )
}