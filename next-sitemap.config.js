/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.civilproducts.co.th', // 🔁 เปลี่ยนเป็น domain จริง
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin'], // ถ้ามีหน้าแอดมิน
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
  },
}