import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Knowledge articles about industrial flooring, epoxy, PU flooring, waterproofing, and concrete repair.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  return <BlogClient />
}