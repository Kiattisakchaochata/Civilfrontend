import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Project portfolio of Civil Products Thailand including cement self-leveling, epoxy, PU, floor hardener, and waterproofing works.',
  alternates: {
  canonical: '/projects',
  languages: {
    th: '/projects',
    en: '/projects?lang=en',
    zh: '/projects?lang=zh',
    'x-default': '/projects',
  },
},
  openGraph: {
    title: 'Projects | Civil Products Thailand',
    description:
      'View project examples of industrial flooring, epoxy, PU, floor hardener, and waterproofing works.',
    url: '/projects',
    type: 'website',
    images: ['/images/civil-logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Civil Products Thailand',
    description:
      'View project examples of industrial flooring, epoxy, PU, floor hardener, and waterproofing works.',
    images: ['/images/civil-logo.jpg'],
  },
}

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: 'https://www.civilproductsthailand.com',
          },
          {
            name: 'Projects',
            url: 'https://www.civilproductsthailand.com/projects',
          },
        ]}
      />

      <ProjectsClient />
    </>
  )
}