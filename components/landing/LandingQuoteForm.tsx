'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, CheckCircle, Loader2 } from 'lucide-react'

const SERVICES = [
  'Window Cleaning',
  'Screen Cleaning',
  'Hard Water Removal',
  'Solar Panels',
  'Gutter Cleaning',
]

interface Props {
  variant: 'A' | 'B'
  offer: string
}

interface FormState {
  name: string
  phone: string
  address: string
  email: string
  services: string[]
  notes: string
}

type Errors = Partial<Record<keyof FormState, string>>

const EMPTY: FormState = {
  name: '',
  phone: '',
  address: '',
  email: '',
  services: [],
  notes: '',
}

function inputCls(error?: string): string {
  return [
    'w-full px-4 py-3.5 rounded-xl border text-base outline-none transition-all bg-white',
    error
      ? 'border-red-400 focus:ring-2 focus:ring-red-200'
      : 'border-gray-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15',
  ].join(' ')
}

export default function LandingQuoteForm({ variant, offer }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [utm, setUtm] = useState<Record<string, string>>({})

  // Capture UTM params so every lead is attributable to the door-hanger drop.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const collected: Record<string, string> = {}
    params.forEach((v, k) => {
      if (k.startsWith('utm_')) collected[k] = v
    })
    setUtm(collected)
  }, [])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }))
    setErrors((p) => ({ ...p, [key]: '' }))
  }

  function toggleService(svc: string) {
    setForm((p) => ({
      ...p,
      services: p.services.includes(svc)
        ? p.services.filter((s) => s !== svc)
        : [...p.services, svc],
    }))
  }

  function validate(): boolean {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone number'
    if (!form.address.trim()) e.address = 'Where are the windows?'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'That email doesn\u2019t look right'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    const [firstName, ...rest] = form.name.trim().split(/\s+/)
    const payload = {
      firstName,
      lastName: rest.join(' '),
      phone: form.phone,
      address: form.address,
      email: form.email,
      services: form.services,
      notes: form.notes,
      variant,
      offer,
      utm,
    }
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setSubmitted(true)
    } catch {
      // Never block the visitor — show success regardless.
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 text-center border border-gray-100"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-charcoal">
          Got it, {form.name.split(/\s+/)[0]}!
        </h3>
        <p className="mt-3 text-muted leading-relaxed">
          Teancum will personally text or call you back{' '}
          <strong className="text-charcoal">within a few hours</strong> with your free quote
          {offer ? (
            <>
              {' '}and your <strong className="text-charcoal">{offer}</strong>
            </>
          ) : null}
          .
        </p>
        <div className="mt-8 bg-surface rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-muted mb-3">Want it done sooner? Call now:</p>
          <a
            href="tel:+14352295674"
            className="flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-3.5 rounded-xl hover:bg-brand-navy-dark transition-colors"
          >
            <Phone size={17} />
            (435) 229-5674
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-6 sm:p-7 border border-gray-100"
    >
      <div className="space-y-3.5">
        <div>
          <input
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your name"
            className={inputCls(errors.name)}
            autoComplete="name"
            aria-label="Your name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="Phone number"
            className={inputCls(errors.phone)}
            autoComplete="tel"
            aria-label="Phone number"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <input
            value={form.address}
            onChange={(e) => update('address', e.target.value)}
            placeholder="Home address"
            className={inputCls(errors.address)}
            autoComplete="street-address"
            aria-label="Home address"
          />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>

        <div>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="Email (optional)"
            className={inputCls(errors.email)}
            autoComplete="email"
            aria-label="Email (optional)"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Optional, tap-to-add — keeps the form fast but helps Teancum quote */}
      <div className="mt-4">
        <p className="text-xs font-semibold text-muted mb-2">What do you need? (optional)</p>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((svc) => {
            const selected = form.services.includes(svc)
            return (
              <button
                type="button"
                key={svc}
                onClick={() => toggleService(svc)}
                className={`px-3.5 py-2 rounded-full border text-sm font-medium transition-all ${
                  selected
                    ? 'border-brand-navy bg-brand-navy text-white'
                    : 'border-gray-200 text-charcoal hover:border-gray-300'
                }`}
              >
                {svc}
              </button>
            )
          })}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full flex items-center justify-center gap-2 bg-brand-navy text-white font-bold text-base py-4 rounded-xl hover:bg-brand-navy-dark disabled:opacity-60 transition-colors"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          'Get My Fast Free Quote'
        )}
      </button>

      <p className="mt-3 text-center text-xs text-muted">
        Takes 20 seconds · No obligation · Locally owned &amp; insured
      </p>
    </form>
  )
}
