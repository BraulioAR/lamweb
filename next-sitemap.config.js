/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.lighstandmedia.com.do',
  generateRobotsTxt: true, // Genera robots.txt además del sitemap
  sitemapSize: 5000, // Opcional: divide el sitemap si excede este número
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/private'] }
    ]
  }
}