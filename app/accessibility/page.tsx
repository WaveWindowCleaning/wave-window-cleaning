import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Our commitment to making the Wave Window Cleaning website usable by everyone.',
  alternates: { canonical: '/accessibility' },
}

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility Statement">
      <p>
        We want everyone to be able to use this website. We aim to follow the Web Content Accessibility Guidelines (WCAG)
        2.1 Level AA, including readable text contrast, text alternatives for images, form labels, and keyboard
        navigation.
      </p>
      <p>
        We review the site regularly, but some content may not yet meet every standard. If you have trouble using any
        part of the site, or need information in another format, please contact us and we will help you directly or fix
        the problem:
      </p>
      <ul>
        <li>
          Phone or text: <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
        </li>
        <li>
          Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
      </ul>
      <p>You can always request a quote, book a service or ask a question by phone instead of using the website.</p>
    </LegalPage>
  )
}
