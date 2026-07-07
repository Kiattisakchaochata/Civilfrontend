export default function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Civil Products Thailand',
    url: 'https://www.civilproductsthailand.com',
    inLanguage: ['th', 'en', 'zh'],
    publisher: {
      '@type': 'Organization',
      name: 'Civil Products Thailand',
      url: 'https://www.civilproductsthailand.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}