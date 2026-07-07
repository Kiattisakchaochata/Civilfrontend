export default function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Civil Products Thailand provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide epoxy flooring, PU flooring, waterproofing, floor hardener, cement self-leveling, and concrete repair services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide services nationwide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide industrial flooring and concrete repair services throughout Thailand.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I request a quotation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Contact us by phone, Line, or Facebook Messenger for a free consultation and quotation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve factories, warehouses, commercial buildings, hospitals, offices, and residential projects.',
        },
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