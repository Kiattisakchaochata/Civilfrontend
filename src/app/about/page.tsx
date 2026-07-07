import type { Metadata } from 'next'
import AboutClient from './AboutClient'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Civil Products Thailand, industrial flooring installation, epoxy, PU, waterproofing, and concrete repair specialists.',

  alternates: {
  canonical: '/about',
  languages: {
    th: '/about',
    en: '/about?lang=en',
    zh: '/about?lang=zh',
    'x-default': '/about',
  },
},

  openGraph: {
    title: 'About Us | Civil Products Thailand',
    description:
      'Learn about Civil Products Thailand and our industrial flooring solutions.',
    url: '/about',
    type: 'website',
    images: ['/images/civil-logo.jpg'],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Civil Products Thailand',
    description:
      'Learn about Civil Products Thailand and our industrial flooring solutions.',
    images: ['/images/civil-logo.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: 'https://www.civilproductsthailand.com',
          },
          {
            name: 'About',
            url: 'https://www.civilproductsthailand.com/about',
          },
        ]}
      />

      <AboutClient />
    </>
  )
}