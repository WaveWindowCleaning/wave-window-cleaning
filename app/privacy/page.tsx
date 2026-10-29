import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { SITE, BUSINESS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Wave Window Cleaning collects, uses and protects information from this website.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This policy explains what information {BUSINESS.dba} (operated by {BUSINESS.legalName},
        &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects through {SITE.url.replace('https://', '')}, why we collect
        it, and the choices you have. We are a small local business and we keep the data we collect to a minimum.
      </p>

      <h2>What we collect</h2>
      <p>We only collect information you choose to send us through our quote forms or by contacting us:</p>
      <ul>
        <li>Your name and phone number (required to respond to a quote request)</li>
        <li>Your service address (so we can quote the job; optional on some forms)</li>
        <li>Your email address (optional)</li>
        <li>The services you are interested in and any notes you write</li>
        <li>
          If you arrive from one of our flyers, QR codes or ads, a campaign tag in the web address (for example
          &ldquo;utm_source=doorhanger&rdquo;) so we know which flyer worked
        </li>
      </ul>
      <p>
        We do not ask for payment card numbers, Social Security numbers or other sensitive information on this website.
        Please do not include them in your notes.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To call, text or email you about your quote and to schedule and perform your service</li>
        <li>To keep records of quotes and jobs, and to follow up on your service</li>
        <li>To understand which of our marketing is working</li>
      </ul>
      <p>We do not sell your personal information, and we do not share it for third-party advertising.</p>

      <h2>Calls and text messages</h2>
      <p>
        When you give us your phone number on a quote form, you agree that we may call or text you at that number about
        your quote and service. Message and data rates may apply. Message frequency varies. Reply STOP to any text to
        opt out, or tell us by phone or email and we will stop. Consent to be contacted is not a condition of buying
        anything from us.
      </p>

      <h2>Who handles your information</h2>
      <p>
        We use trusted service providers to run the business. They may process your information only to provide their
        service to us. These include our website host, an email delivery provider that sends your quote request to us,
        and the scheduling and invoicing software we use to manage jobs and messages. We may also disclose information
        if required by law or to protect our rights.
      </p>

      <h2>Cookies and tracking</h2>
      <p>
        This website does not use advertising cookies, analytics or tracking pixels, and it does not load third-party
        trackers. Because of that, we do not show a cookie banner. Our web host may keep standard server logs (such as
        IP address and browser type) for security and troubleshooting. If we add analytics or advertising tools in the
        future, we will update this page and ask for your consent where required.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep quote requests and job records for as long as needed to serve you and meet our business, tax and legal
        obligations. You can ask us to delete your information at any time (see below), unless we are required to keep it.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable measures to protect your information, including encrypted (HTTPS) connections. No method of
        transmission or storage is perfectly secure, so we cannot guarantee absolute security.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to tell you what information we have about you, correct it, or delete it. Email{' '}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
        Residents of some states have additional rights under local privacy laws; we will honor valid requests.
      </p>

      <h2>Children</h2>
      <p>This website is for adults. We do not knowingly collect information from children under 13.</p>

      <h2>Changes</h2>
      <p>If we change this policy, we will post the new version here with a new &ldquo;last updated&rdquo; date.</p>

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
