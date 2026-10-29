'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react'
import FormConsent from '@/components/FormConsent'

type Status = 'idle' | 'loading' | 'success' | 'error'

const input =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-charcoal placeholder-gray-500 outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 transition'

export default function EsQuoteForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [service, setService] = useState('Limpieza de ventanas')
  const [status, setStatus] = useState<Status>('idle')
  const [invalid, setInvalid] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || phone.replace(/\D/g, '').length < 10) {
      setInvalid(true)
      return
    }
    setInvalid(false)
    setStatus('loading')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          address,
          service,
          source: 'Página en español (responder en español)',
        }),
      })
      const data = await res.json()
      setStatus(data.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div lang="es" className="bg-white rounded-3xl shadow-2xl p-8 text-center" role="status">
        <CheckCircle className="mx-auto text-green-600" size={44} aria-hidden="true" />
        <h3 className="mt-4 text-xl font-black text-charcoal">¡Recibido! Gracias.</h3>
        <p className="mt-2 text-muted text-sm leading-relaxed">
          Le llamaremos o le enviaremos un mensaje lo antes posible con su cotización gratis. ¿Lo necesita más pronto?
          Llame o envíe un mensaje al{' '}
          <a href="tel:+14355009720" className="font-bold text-brand-navy underline">
            (435) 500-9720
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form lang="es" onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8" noValidate>
      <h2 className="text-xl sm:text-2xl font-black text-charcoal tracking-tight">Pida su cotización gratis</h2>
      <p className="mt-1 text-sm text-muted">Toma 30 segundos. Sin compromiso.</p>

      <div className="mt-5 space-y-3">
        <input
          className={input}
          type="text"
          placeholder="Su nombre"
          aria-label="Su nombre"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={input}
          type="tel"
          placeholder="Número de teléfono"
          aria-label="Número de teléfono"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          className={input}
          type="text"
          placeholder="Dirección de su casa (opcional)"
          aria-label="Dirección de su casa (opcional)"
          autoComplete="street-address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select className={input} value={service} onChange={(e) => setService(e.target.value)} aria-label="Servicio">
          <option>Limpieza de ventanas</option>
          <option>Ventanas y mosquiteros</option>
          <option>Limpieza de paneles solares</option>
          <option>Remoción de manchas de agua dura</option>
          <option>Ventanas comerciales</option>
          <option>No estoy seguro todavía</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-black text-base py-4 rounded-full shadow-lg hover:bg-brand-navy-mid active:scale-[0.99] transition disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Enviando…
          </>
        ) : (
          <>
            Quiero mi cotización gratis <ArrowRight size={16} aria-hidden="true" />
          </>
        )}
      </button>

      {invalid && (
        <p role="alert" className="mt-3 text-sm text-red-700 text-center">
          Por favor escriba su nombre y un número de teléfono de 10 dígitos.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="mt-3 text-sm text-red-700 text-center">
          Algo salió mal. Por favor llame o envíe un mensaje al (435) 500-9720.
        </p>
      )}

      <FormConsent lang="es" />
      <p className="mt-3 text-center text-xs text-muted">
        ¿Prefiere hablar?{' '}
        <a href="tel:+14355009720" className="font-semibold text-brand-navy underline">
          Llame
        </a>{' '}
        o{' '}
        <a
          href="sms:+14355009720?&body=Hola%2C%20quisiera%20una%20cotizaci%C3%B3n%20gratis%20de%20Wave%20Window%20Cleaning."
          className="font-semibold text-brand-navy underline"
        >
          envíenos un mensaje
        </a>
        .
      </p>
    </form>
  )
}
