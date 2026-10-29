import Link from 'next/link'

/**
 * Consent notice shown under every form that collects a phone number.
 * Keep wording in sync with the Privacy Policy ("Calls and text messages").
 */
export default function FormConsent({
  tone = 'light',
  lang = 'en',
}: {
  tone?: 'light' | 'dark'
  lang?: 'en' | 'es'
}) {
  const text = tone === 'dark' ? 'text-white/75' : 'text-muted'
  const link = tone === 'dark' ? 'text-white underline' : 'text-brand-navy underline'
  if (lang === 'es') {
    return (
      <p lang="es" className={`mt-3 text-center text-xs leading-relaxed ${text}`}>
        Al enviar este formulario, usted acepta que Wave Window Cleaning le llame o le envíe mensajes de texto a este
        número sobre su cotización. Pueden aplicar tarifas de mensajes y datos. Responda STOP para dejar de recibir
        mensajes. Nunca vendemos su información. Consulte nuestra{' '}
        <Link href="/privacy" className={link}>
          Política de Privacidad
        </Link>{' '}
        y los{' '}
        <Link href="/terms" className={link}>
          Términos
        </Link>{' '}
        (disponibles en inglés).
      </p>
    )
  }
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
