export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Civil Products Thailand',
    image: 'https://www.civilproductsthailand.com/images/civil-logo.jpg',
    url: 'https://www.civilproductsthailand.com',
    email: 'Civilproduct@hotmail.co.th',
    telephone: ['084-555-2781', '098-251-2055'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '38/6 Moo 2, Na Mai, Lat Lum Kaeo',
      addressLocality: 'Pathum Thani',
      postalCode: '12140',
      addressCountry: 'TH',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Thailand',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '17:00',
      },
    ],
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