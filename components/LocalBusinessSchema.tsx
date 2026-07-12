export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Wave Window Cleaning',
    url: 'https://cleanwavewindows.com',
    telephone: '+14352295674',
    email: 'teancum@cleanwavewindows.com',
    image: 'https://cleanwavewindows.com/logo.png',
    description:
      'Premium residential and commercial window cleaning in St. George, UT. Licensed, insured, and locally owned. Serving Santa Clara, Washington, Ivins, Bloomington, Little Valley, and Green Springs. Se Habla Español.',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Zelle, Venmo',
    areaServed: [
      { '@type': 'City', name: 'St. George' },
      { '@type': 'City', name: 'Santa Clara' },
      { '@type': 'City', name: 'Washington' },
      { '@type': 'City', name: 'Ivins' },
      { '@type': 'City', name: 'Bloomington' },
      { '@type': 'City', name: 'Little Valley' },
      { '@type': 'City', name: 'Green Springs' },
      { '@type': 'City', name: 'Snow Canyon' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Window Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Window Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Window Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Screen Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hard Water Stain Removal' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '47',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
