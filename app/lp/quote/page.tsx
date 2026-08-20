import type { Metadata } from 'next'
import LandingPage, { OfferConfig } from '@/components/landing/LandingPage'

export const metadata: Metadata = {
  title: 'Request a Free Quote | Wave Window Cleaning — St. George, UT',
  description:
    'Request a fast, free window cleaning quote. Trusted, locally owned, 5.0 on Google, 100% satisfaction guarantee. St. George, Utah.',
  robots: { index: false, follow: false },
}

// No promotional offer — just a clean "request a free quote" landing page.
const config: OfferConfig = {
  variant: 'A',
  eyebrow: '',
  offerHeadline: '',
  offerSub: '',
  offerShort: '',
  offerExplainer: '',
}

export default function QuoteLanding() {
  return <LandingPage offer={config} />
}
