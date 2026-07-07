'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, type Locale } from '@/data/blogPosts'
import { useLanguage } from '@/contexts/LanguageContext'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export default function BlogDetailClient({ slug }: { slug: string }) {
  const { locale } = useLanguage()
  const currentLocale = locale as Locale

  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug)

  const pageText = {
    th: {
      home: 'หน้าหลัก',
      blog: 'บทความ',
      back: '← กลับไปหน้าบทความ',
      related: 'บทความที่เกี่ยวข้อง',
    },
    en: {
      home: 'Home',
      blog: 'Blog',
      back: '← Back to Blog',
      related: 'Related Articles',
    },
    zh: {
      home: '首页',
      blog: '文章',
      back: '← 返回文章列表',
      related: '相关文章',
    },
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: pageText[currentLocale].home,
            url: 'https://www.civilproductsthailand.com',
          },
          {
            name: pageText[currentLocale].blog,
            url: 'https://www.civilproductsthailand.com/blog',
          },
          {
            name: post.title[currentLocale],
            url: `https://www.civilproductsthailand.com/blog/${post.slug}`,
          },
        ]}
      />

      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-[#1F2560] py-20 text-white md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,197,37,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]" />

          <div className="relative mx-auto max-w-5xl px-4">
            <div className="mb-10 flex flex-wrap items-center gap-4 text-[#F9C525]">
              <Link
                href="/blog"
                className="inline-flex items-center text-base font-extrabold hover:underline"
              >
                {pageText[currentLocale].back}
              </Link>

              <span className="hidden h-6 w-px bg-[#F9C525]/60 sm:inline-block" />

              <span className="inline-flex rounded-full border border-[#F9C525]/45 bg-white/10 px-6 py-2.5 text-base font-extrabold text-[#F9C525] shadow-sm">
                {post.category[currentLocale]}
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
              {post.title[currentLocale]}
            </h1>

            <div className="mt-8 flex items-center gap-5 text-lg font-semibold text-white/65">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime[currentLocale]}</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-10">
          <Image
            src={post.image}
            alt={post.title[currentLocale]}
            width={1200}
            height={700}
            priority
            className="mb-10 h-auto w-full rounded-3xl object-cover shadow-xl"
          />

          <article className="prose prose-slate max-w-none">
            {post.content[currentLocale].map((paragraph) => (
              <p key={paragraph} className="text-lg leading-9 text-slate-700">
                {paragraph}
              </p>
            ))}
          </article>
        </section>

        <section className="bg-slate-50 px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-extrabold text-[#1F2560]">
              {pageText[currentLocale].related}
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="rounded-3xl bg-white p-5 shadow transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title[currentLocale]}
                    width={600}
                    height={400}
                    className="h-40 w-full rounded-2xl object-cover"
                  />

                  <h3 className="mt-4 text-lg font-bold text-[#1F2560]">
                    {item.title[currentLocale]}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {item.excerpt[currentLocale]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}