import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { SITE, BUSINESS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service & Guarantee',
  description:
    'Terms for using the Wave Window Cleaning website and booking services, including our satisfaction guarantee, weather guarantee, and refund policy.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service, Guarantee & Refunds">
      <p>
        These terms apply to this website and to window, screen, solar panel and related cleaning services provided by{' '}
        {BUSINESS.dba}, a trade name of {BUSINESS.legalName} (&ldquo;we,&rdquo; &ldquo;us&rdquo;). By using the site or
        booking a service, you agree to them.
      </p>

      <h2>Quotes and pricing</h2>
      <p>
        Prices shown on this website, including the online estimator and the examples in our FAQ, are estimates only.
        Your final price depends on the size, condition and access of your property and is confirmed in your quote before
        we start work. A quote request is not a booking until we confirm a date with you.
      </p>

      <h2>Booking, access and rescheduling</h2>
      <ul>
        <li>Please make sure we can reach all windows (unlocked gates, pets secured, safe access to work areas).</li>
        <li>For interior cleaning, an adult 18 or older should be home.</li>
        <li>Please contact us as early as you can if you need to reschedule or cancel so we can offer the time to another customer.</li>
        <li>We may need to reschedule for safety reasons, including high wind, lightning or unsafe conditions.</li>
      </ul>

      <h2>Payment</h2>
      <p>
        Payment is due when the work is completed unless we agree otherwise in writing. We accept the payment methods we
        list when we confirm your job.
      </p>

      <h2>100% Satisfaction Guarantee</h2>
      <p>
        If you are not satisfied with the work, contact us promptly after the service, before the area is disturbed or
        further soiled, and tell us what is wrong. We will re-clean the affected areas at no charge. If we cannot make
        it right, we will discuss a fair partial or full refund for the affected service.
      </p>

      <h2>7-Day Weather Guarantee</h2>
      <p>
        If it rains within 7 days after we clean your <strong>exterior</strong> windows and the rain leaves them spotted
        or dirty, contact us and we will return and re-clean the exterior windows at no charge. This guarantee covers
        exterior glass cleaned by us, not interior windows, and does not apply to hard water staining, damage, or
        conditions unrelated to rain.
      </p>

      <h2>Refunds</h2>
      <p>
        Refunds are handled case by case under the satisfaction guarantee above. To request one, email{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{' '}
        <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> and tell us your name, service date and the issue.
        Approved refunds go back to the original payment method.
      </p>

      <h2>Limitations of what we can clean</h2>
      <p>
        Some damage and staining exist before we arrive, such as etched or scratched glass, failed seals, fogged
        double-pane windows, or severe mineral deposits. Hard water stain removal improves glass but may not remove every
        deposit. We will tell you about visible problems we notice before we start.
      </p>

      <h2>Promotional offers</h2>
      <p>
        Offers such as free screen cleaning apply only as described in the offer (for example, free screen cleaning with
        any exterior window cleaning), cannot be combined with other offers unless we say so, and may end at any time.
      </p>

      <h2>Reviews</h2>
      <p>
        The customer reviews on this site are shared with the reviewers&rsquo; public Google reviews. We do not edit
        them. Our rating claims reflect our public Google reviews at the time we last updated this site.
      </p>

      <h2>Website use and intellectual property</h2>
      <p>
        The content on this website, including our logo, text and photos, belongs to us or is used with permission.
        Please do not copy or reuse it without asking first. The site is provided &ldquo;as is.&rdquo; To the extent the
        law allows, we are not liable for indirect or consequential losses from using the website.
      </p>

      <h2>Liability for services</h2>
      <p>
        We carry liability insurance and take care with every property. If we damage your property, tell us as soon as
        possible so we can document it and resolve it. Nothing in these terms limits any rights you have under Utah or
        federal consumer-protection law.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Utah.</p>

      <h2>Changes</h2>
      <p>We may update these terms. The version posted on this page applies to services booked after the update.</p>

      <h2>Contact</h2>
      <p>
        {BUSINESS.legalName} d/b/a {BUSINESS.dba}
        <br />
        {BUSINESS.location}
        <br />
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · {SITE.phoneDisplay}
      </p>
    </LegalPage>
  )
}
