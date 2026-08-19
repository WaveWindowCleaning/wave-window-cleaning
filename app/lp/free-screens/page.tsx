import type { Metadata } from 'next'
import LandingPage, { OfferConfig } from '@/components/landing/LandingPage'

export const metadata: Metadata = {
  title: 'Free Screen Cleaning Offer | Wave Window Cleaning — St. George, UT',
  description:
    'Book exterior window cleaning and get FREE screen cleaning. Trusted, locally owned, 5.0 on Google, 100% satisfaction guarantee. St. George, Utah.',
  robots: { index: false, follow: false },
}

const offer: OfferConfig = {
  variant: 'A',
  eyebrow: 'Exclusive Neighborhood Offer',
  offerHeadline: 'FREE Screen Cleaning',
  offerSub: 'with any exterior window cleaning',
  offerShort: 'FREE Screen Cleaning',
  offerExplainer:
    'Book your exterior window cleaning and I\u2019ll deep-clean every screen at no extra charge \u2014 removing months of Southern Utah dust and pollen so your whole home looks and breathes better. A genuine added value, no strings attached.',
}

export default function FreeScreensLanding() {
  return <LandingPage offer={offer} />
}
