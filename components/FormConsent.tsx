import Link from 'next/link'

/**
 * Consent notice shown under every form that collects a phone number.
 * Keep wording in sync with the Privacy Policy ("Calls and text messages").
 */
export default function FormConsent({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const text = tone === 'dark' ? 'text-white/75' : 'text-muted'
  const link = tone === 'dark' ? 'text-white underline' : 'text-brand-navy underline'
  return (
    <p className={`mt-3 text-center text-xs leading-relaxed ${text}`}>
      By submitting, you agree that Wave Window Cleaning may call or text you at this number about your quote. Msg &amp;
      data rates may apply. Reply STOP to opt out. We never sell your information. See our{' '}
      <Link href="/privacy" className={link}>
        Privacy Policy
      </Link>{' '}
      and{' '}
      <Link href="/terms" className={link}>
        Terms
      </Link>
      .
    </p>
  )
}
