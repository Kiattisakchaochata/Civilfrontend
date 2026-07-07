import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blogPosts'
import BlogDetailClient from './BlogDetailClient'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: post.title.en,
    description: post.excerpt.en,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      url: `/blog/${post.slug}`,
      type: 'article',
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.en,
      description: post.excerpt.en,
      images: [post.image],
    },
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  return <BlogDetailClient slug={slug} />
}