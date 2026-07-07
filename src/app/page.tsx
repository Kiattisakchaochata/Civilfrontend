import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Industrial Flooring & Concrete Repair',
  description:
    'Civil Products Thailand provides industrial flooring installation, epoxy flooring, PU flooring, floor hardener, waterproofing, and concrete repair services.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Civil Products Thailand | Industrial Flooring & Concrete Repair',
    description:
      'Industrial flooring installation, epoxy, PU, floor hardener, waterproofing, and concrete repair services in Thailand.',
    url: '/',
    type: 'website',
    images: ['/images/civil-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Civil Products Thailand | Industrial Flooring & Concrete Repair',
    description:
      'Industrial flooring installation, epoxy, PU, floor hardener, waterproofing, and concrete repair services in Thailand.',
    images: ['/images/civil-logo.jpg'],
  },
}

export default function HomePage() {
  return <HomeClient />
}