export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Civil Products Thailand',
    alternateName: [
      'Civil Construction Products Co., Ltd.',
      'Civil Applicator Co., Ltd.',
      'บริษัท ซีวิล คอนสตรัคชั่น โปรดักส์ จำกัด',
      'บริษัท ซีวิล แอพพลิเคเตอร์ จำกัด',
    ],
    url: 'https://www.civilproductsthailand.com',
    logo: 'https://www.civilproductsthailand.com/images/civil-logo.jpg',
    email: 'Civilproduct@hotmail.co.th',
    telephone: ['084-555-2781', '098-251-2055'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '38/6 Moo 2, Na Mai, Lat Lum Kaeo',
      addressLocality: 'Pathum Thani',
      postalCode: '12140',
      addressCountry: 'TH',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61577460965495',
      'https://line.me/ti/p/4UQxyD8RTt',
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