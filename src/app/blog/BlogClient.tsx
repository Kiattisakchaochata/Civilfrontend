'use client'

import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, type Locale } from '@/data/blogPosts'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BlogClient() {
  const { locale } = useLanguage()
  const currentLocale = locale as Locale

  const pageText = {
    th: {
      title: 'ศูนย์ความรู้ Civil Products',
      description:
        'บทความความรู้เกี่ยวกับพื้นอุตสาหกรรม พื้น Epoxy พื้น PU ระบบกันซึม และงานซ่อมพื้นคอนกรีต',
      readArticle: 'อ่านบทความ →',
    },
    en: {
      title: 'Civil Knowledge Center',
      description:
        'Articles about industrial flooring, epoxy flooring, PU flooring, waterproofing and concrete repair.',
      readArticle: 'Read Article →',
    },
    zh: {
      title: 'Civil 知识中心',
      description:
        '关于工业地坪、Epoxy 地坪、PU 地坪、防水系统和混凝土修复的知识文章。',
      readArticle: '阅读文章 →',
    },
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#1F2560] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            {pageText[currentLocale].title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-white/80">
            {pageText[currentLocale].description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={post.image}
                alt={post.title[currentLocale]}
                width={800}
                height={500}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <span className="rounded-full bg-[#F9C525]/20 px-3 py-1 text-xs font-bold text-[#1F2560]">
                  {post.category[currentLocale]}
                </span>

                <h2 className="mt-4 text-2xl font-bold text-[#1F2560]">
                  {post.title[currentLocale]}
                </h2>

                <p className="mt-3 text-gray-600">
                  {post.excerpt[currentLocale]}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime[currentLocale]}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex rounded-full bg-[#1F2560] px-5 py-3 font-bold text-white transition hover:bg-[#00007F]"
                >
                  {pageText[currentLocale].readArticle}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}