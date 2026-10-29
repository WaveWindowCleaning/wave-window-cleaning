'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react'
import FormConsent from '@/components/FormConsent'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function HeroQuoteForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [service, setService] = useState('Window Cleaning')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || phone.replace(/\D/g, '').length < 10) return
    setStatus('loading')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, address, service, source: 'Homepage Hero Form' }),
      })
      const data = await res.json()
      setStatus(data.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
        <CheckCircle className="mx-auto text-green-500" size={44} />
        <h3 className="mt-4 text-xl font-black text-charcoal">Got it. Thank you!</h3>
        <p className="mt-2 text-muted text-sm leading-relaxed">
          We&apos;ll call or text you as soon as we can with your free quote. Need us sooner? Call or text{' '}
          <a href="tel:+14355009720" className="font-bold text-brand-navy">(435) 500-9720</a>.
        </p>
      </div>
    )
  }

  const input =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-charcoal placeholder-gray-500 outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15 transition'

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-black text-charcoal tracking-tight">Get Your Free Quote</h2>
      <p className="mt-1 text-sm text-muted">Takes 30 seconds. No obligation.</p>

      <div className="mt-5 space-y-3">
        <input className={input} type="text" placeholder="Your name" aria-label="Your name" autoComplete="name"
          value={name} onChange={e => setName(e.target.value)} required />
        <input className={input} type="tel" placeholder="Phone number" aria-label="Phone number" autoComplete="tel"
          value={phone} onChange={e => setPhone(e.target.value)} required />
        <input className={input} type="text" placeholder="Home address (optional)" aria-label="Home address (optional)" autoComplete="street-address"
          value={address} onChange={e => setAddress(e.target.value)} />
        <select className={input} value={service} onChange={e => setService(e.target.value)} aria-label="Service">
          <option>Window Cleaning</option>
          <option>Window + Screen Cleaning</option>
          <option>Solar Panel Cleaning</option>
          <option>Hard Water Stain Removal</option>
          <option>Commercial Windows</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-black text-base py-4 rounded-full shadow-lg hover:bg-brand-navy-mid active:scale-[0.99] transition disabled:opacity-60"
      >
        {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <>Get My Free Quote <ArrowRight size={16} /></>}
      </button>

      {status === 'error' && (
        <p role="alert" className="mt-3 text-sm text-red-700 text-center">
          Something went wrong. Please call or text (435) 500-9720.
        </p>
      )}
      <FormConsent />
      <p className="mt-3 text-center text-xs text-muted">
        Prefer to talk? <a href="tel:+14355009720" className="font-semibold text-brand-navy">Call</a> or{' '}
        <a href="sms:+14355009720?&body=Hi%20Wave%20Window%20Cleaning%2C%20I%27d%20like%20a%20free%20quote." className="font-semibold text-brand-navy">text us</a>.
      </p>
    </form>
  )
}
