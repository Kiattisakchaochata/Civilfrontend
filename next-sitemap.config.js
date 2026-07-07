/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.civilproductsthailand.com',  // ✅ ใช้ www เป็นหลัก
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
    additionalSitemaps: [
      'https://www.civilproductsthailand.com/sitemap-0.xml',
    ],
  },
}