'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, CheckCircle, Loader2, ChevronDown } from 'lucide-react'

const SERVICES = [
  'Residential Window Cleaning',
  'Solar Panel Cleaning',
  'Screen Cleaning',
  'Hard Water Stain Removal',
  'Commercial Window Cleaning',
]

function inputCls(error?: string) {
  return [
    'w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all bg-white',
    error
      ? 'border-red-400 focus:ring-2 focus:ring-red-200'
      : 'border-gray-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15',
  ].join(' ')
}

export default function QuotePage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    notes: '',
  })
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function update(key: keyof typeof form, value: string) {
    setForm(prev => ({ ...prev, [key]: value }))
    setErrors(prev => ({ ...prev, [key]: '' }))
  }

  function validate() {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a valid 10-digit number'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Quote Request — ${form.name}`,
          from_name: form.name,
          phone: form.phone,
          email: form.email || '(not provided)',
          address: form.address || '(not provided)',
          service: form.service || '(not specified)',
          notes: form.notes || '(none)',
          from_page: '/quote',
          botcheck: '',
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#f7f8fa] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-charcoal">
            Thanks, {form.name.split(' ')[0]}!
          </h2>
          <p className="text-muted text-sm mt-3 leading-relaxed">
            We&apos;ll call you at <strong className="text-charcoal">{form.phone}</strong> to
            confirm your free estimate — usually within the hour.
          </p>
          <a
            href="tel:+14352295674"
            className="mt-8 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all"
          >
            <Phone size={17} />
            Call Now: (435) 229-5674
          </a>
          <Link href="/" className="mt-4 block text-sm text-brand-navy font-medium hover:underline">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      {/* Nav */}
      <div className="bg-brand-navy px-4 py-3.5">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="Wave Window Cleaning" width={120} height={38} className="h-9 w-auto brightness-200" />
          </Link>
          <a href="tel:+14352295674" className="flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white">
            <Phone size={15} />
            (435) 229-5674
          </a>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-black text-charcoal">Get Your Free Quote</h1>
          <p className="text-muted text-sm mt-2 mb-8">
            Fill in your info and we&apos;ll call you — usually within the hour.
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">

            {/* Name + Phone — the only required fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  className={inputCls(errors.name)}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1.5">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(435) 000-0000"
                  value={form.phone}
                  onChange={e => update('phone', e.target.value)}
                  className={inputCls(errors.phone)}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Service dropdown */}
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">
                What do you need? <span className="text-muted font-normal">(optional)</span>
              </label>
              <div className="relative">
                <select
                  value={form.service}
                  onChange={e => update('service', e.target.value)}
                  className={`${inputCls()} appearance-none pr-10 text-${form.service ? 'charcoal' : 'muted'}`}
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">
                Property Address <span className="text-muted font-normal">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="123 Main St, St. George, UT"
                value={form.address}
                onChange={e => update('address', e.target.value)}
                className={inputCls()}
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-charcoal mb-1.5">
                Anything else we should know? <span className="text-muted font-normal">(optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Hard water stains, solar panels, 2-story, etc."
                value={form.notes}
                onChange={e => update('notes', e.target.value)}
                className={`${inputCls()} resize-none`}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Please call us at{' '}
                <a href="tel:+14352295674" className="underline">(435) 229-5674</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-brand-navy text-white font-black text-base py-4 rounded-xl hover:bg-opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 mt-2"
            >
              {status === 'loading' ? (
                <><Loader2 size={18} className="animate-spin" /> Sending…</>
              ) : (
                'Request My Free Quote →'
              )}
            </button>

            <p className="text-xs text-center text-muted">
              No spam. We&apos;ll only contact you about your estimate.
            </p>
          </form>

          {/* Call alternative */}
          <div className="mt-5 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-muted">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <a
            href="tel:+14352295674"
            className="mt-4 flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy font-bold py-4 rounded-xl hover:bg-brand-navy hover:text-white transition-all"
          >
            <Phone size={18} />
            Call for an Instant Estimate
          </a>
        </motion.div>
      </div>
    </div>
  )
}
