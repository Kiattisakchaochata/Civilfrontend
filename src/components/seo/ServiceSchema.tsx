export default function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industrial Flooring and Concrete Repair Services',
    provider: {
      '@type': 'Organization',
      name: 'Civil Products Thailand',
      url: 'https://www.civilproductsthailand.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Thailand',
    },
    serviceType: [
      'Epoxy Flooring',
      'PU Flooring',
      'Floor Hardener',
      'Liquid Hardener',
      'Waterproofing',
      'Concrete Floor Repair',
      'Cement Self Leveling',
    ],
    url: 'https://www.civilproductsthailand.com/services',
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