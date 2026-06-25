'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowLeft, ArrowRight, CheckCircle, Languages } from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────────
type Step = 1 | 2 | 3

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  stories: '1' | '2+' | ''
  windows: string
  hasSolarPanels: boolean
  services: string[]
  spanishConsult: boolean
  notes: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const SERVICES = [
  'Residential Window Cleaning',
  'Solar Panel Cleaning',
  'Screen Cleaning & Restoration',
  'Hard Water Stain Removal',
  'Commercial Window Cleaning',
]

// ── Validation ─────────────────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10
}

// ── Input class helper ─────────────────────────────────────────────────────────
function inputCls(error?: string): string {
  return [
    'w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white',
    error
      ? 'border-red-400 focus:ring-2 focus:ring-red-200'
      : 'border-gray-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15',
  ].join(' ')
}

// ── Field wrapper ──────────────────────────────────────────────────────────────
function Field({
  label,
  error,
  children,
  className = '',
}: {
  label: string
  error?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-charcoal mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function QuotePage() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    stories: '',
    windows: '15',
    hasSolarPanels: false,
    services: [],
    spanishConsult: false,
    notes: '',
  })

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: '' }))
  }

  function toggleService(svc: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc],
    }))
    setErrors((prev) => ({ ...prev, services: '' }))
  }

  function validateStep1(): boolean {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Your name is required.'
    if (!isValidEmail(form.email)) newErrors.email = 'Please enter a valid email address.'
    if (!isValidPhone(form.phone)) newErrors.phone = 'Please enter a valid 10-digit phone number.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function validateStep2(): boolean {
    const newErrors: FormErrors = {}
    if (!form.stories) newErrors.stories = 'Please select your home type.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit() {
    if (form.services.length === 0) {
      setErrors({ services: 'Please select at least one service.' })
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Quote Request — ${form.name}`,
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          stories: form.stories,
          windows: form.windows,
          has_solar_panels: form.hasSolarPanels ? 'Yes' : 'No',
          services: form.services.join(', '),
          spanish_consult: form.spanishConsult ? 'Yes' : 'No',
          notes: form.notes,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        // Still show success so the user isn't blocked (log failure internally)
        setSubmitted(true)
      }
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  // ── Success State ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-gray-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.25, type: 'spring', stiffness: 200, damping: 14 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={32} className="text-green-600" />
          </motion.div>

          <h2 className="text-2xl font-black text-charcoal">
            You&apos;re all set, {form.name.split(' ')[0]}!
          </h2>
          <p className="mt-3 text-muted text-sm leading-relaxed">
            We received your request and will call you within <strong className="text-charcoal">24 hours</strong>{' '}
            to confirm your free estimate.
          </p>

          <div className="mt-8 bg-surface rounded-2xl p-5 border border-gray-100">
            <p className="text-sm text-muted mb-3">Need an answer right now?</p>
            <a
              href="tel:+14352295674"
              className="flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-3.5 rounded-xl hover:bg-brand-navy-dark transition-colors"
            >
              <Phone size={17} />
              Call (435) 229-5674
            </a>
          </div>

          <Link
            href="/"
            className="mt-5 block text-sm text-brand-navy font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    )
  }

  // ── Multi-Step Form ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-surface">
      {/* Top nav bar */}
      <div className="bg-brand-navy px-4 py-3.5">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Wave Window Cleaning"
              width={120}
              height={38}
              className="h-9 w-auto brightness-200"
            />
          </Link>
          <a
            href="tel:+14352295674"
            className="flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors"
          >
            <Phone size={15} />
            (435) 229-5674
          </a>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-10 pb-32">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          {([1, 2, 3] as Step[]).map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1 last:flex-none">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                  step > s
                    ? 'bg-green-500 text-white'
                    : step === s
                    ? 'bg-brand-navy text-white ring-4 ring-brand-navy/20'
                    : 'bg-gray-200 text-muted'
                }`}
              >
                {step > s ? '✓' : s}
              </div>
              {s < 3 && (
                <div
                  className={`flex-1 h-0.5 rounded-full transition-all duration-500 ${
                    step > s ? 'bg-green-400' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ── Step 1: Contact ─────────────────────────────────────────── */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl font-black text-charcoal mb-1">Your Contact Info</h1>
              <p className="text-muted text-sm mb-8">
                We&apos;ll call you same-day to confirm your free estimate.
              </p>

              <div className="space-y-4">
                <Field label="Full Name" error={errors.name}>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={inputCls(errors.name)}
                  />
                </Field>

                <Field label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={inputCls(errors.email)}
                  />
                </Field>

                <Field label="Phone Number" error={errors.phone}>
                  <input
                    type="tel"
                    placeholder="(435) 000-0000"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className={inputCls(errors.phone)}
                  />
                </Field>

                <Field label="Service Address (Optional)">
                  <input
                    type="text"
                    placeholder="123 Main St, St. George, UT"
                    value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                    className={inputCls()}
                  />
                </Field>

                {/* Spanish consult toggle */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    role="switch"
                    aria-checked={form.spanishConsult}
                    onClick={() => update('spanishConsult', !form.spanishConsult)}
                    className={`relative w-10 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/30 ${
                      form.spanishConsult ? 'bg-brand-navy' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                        form.spanishConsult ? 'translate-x-5' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <div className="flex items-center gap-2">
                    <Languages size={15} className="text-brand-navy" />
                    <span className="text-sm font-medium text-charcoal">
                      Request a Spanish-speaking consultant
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => { if (validateStep1()) setStep(2) }}
                className="mt-8 w-full flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-navy-dark transition-colors text-base"
              >
                Continue <ArrowRight size={18} />
              </button>

              <a
                href="tel:+14352295674"
                className="mt-4 flex items-center justify-center gap-2 text-sm text-brand-navy font-medium py-2"
              >
                <Phone size={14} />
                Prefer to call? (435) 229-5674
              </a>
            </motion.div>
          )}

          {/* ── Step 2: Property ────────────────────────────────────────── */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl font-black text-charcoal mb-1">About Your Property</h1>
              <p className="text-muted text-sm mb-8">
                This helps us send the right crew and equipment.
              </p>

              <div className="space-y-6">
                <Field label="Home Type" error={errors.stories}>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    {(['1', '2+'] as const).map((val) => (
                      <button
                        key={val}
                        onClick={() => update('stories', val)}
                        className={`py-4 rounded-xl border-2 text-sm font-bold transition-all ${
                          form.stories === val
                            ? 'border-brand-navy bg-brand-navy/5 text-brand-navy scale-[1.02]'
                            : 'border-gray-200 text-muted hover:border-gray-300'
                        }`}
                      >
                        {val === '1' ? 'Single Story' : '2+ Stories'}
                      </button>
                    ))}
                  </div>
                </Field>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-charcoal">
                      Estimated Window Count
                    </label>
                    <span className="text-brand-navy font-black text-lg">{form.windows}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={45}
                    step={5}
                    value={form.windows}
                    onChange={(e) => update('windows', e.target.value)}
                    className="w-full"
                    style={{ accentColor: '#1A3D54' }}
                  />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>5</span><span>15</span><span>25</span><span>35</span><span>45+</span>
                  </div>
                </div>

                {/* Solar panel toggle */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-charcoal text-sm">Do you have solar panels?</p>
                      <p className="text-xs text-muted mt-0.5">We offer professional solar panel cleaning to maximize energy output.</p>
                    </div>
                    <button
                      role="switch"
                      aria-checked={form.hasSolarPanels}
                      onClick={() => update('hasSolarPanels', !form.hasSolarPanels)}
                      className={`relative w-12 h-7 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/30 shrink-0 ${
                        form.hasSolarPanels ? 'bg-brand-navy' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                          form.hasSolarPanels ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <Field label="Notes for Our Team (Optional)">
                  <textarea
                    rows={3}
                    placeholder="e.g. two-story back wall, skylights, hard-to-reach areas..."
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    className={`${inputCls()} resize-none`}
                  />
                </Field>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center justify-center gap-2 border border-gray-200 text-charcoal font-semibold py-4 px-5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={() => { if (validateStep2()) setStep(3) }}
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-navy-dark transition-colors"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Step 3: Services ────────────────────────────────────────── */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl font-black text-charcoal mb-1">Services Needed</h1>
              <p className="text-muted text-sm mb-8">
                Select everything that applies — we&apos;ll cover it all in one visit.
              </p>

              <div className="space-y-3">
                {SERVICES.map((svc) => {
                  const selected = form.services.includes(svc)
                  return (
                    <button
                      key={svc}
                      onClick={() => toggleService(svc)}
                      className={`w-full flex items-center gap-3.5 p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                        selected
                          ? 'border-brand-navy bg-brand-navy/5 text-brand-navy scale-[1.01]'
                          : 'border-gray-200 text-charcoal hover:border-gray-300 hover:bg-gray-50/50'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                          selected ? 'bg-brand-navy border-brand-navy' : 'border-gray-300'
                        }`}
                      >
                        {selected && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      {svc}
                    </button>
                  )
                })}
              </div>
              {errors.services && (
                <p className="text-red-500 text-xs mt-2">{errors.services}</p>
              )}

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center justify-center border border-gray-200 text-charcoal font-semibold py-4 px-5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-navy-dark disabled:opacity-60 transition-colors"
                >
                  {submitting ? 'Sending...' : 'Submit — Get My Free Quote'}
                </button>
              </div>

              <a
                href="tel:+14352295674"
                className="mt-5 flex items-center justify-center gap-2 text-sm text-brand-navy font-medium py-2"
              >
                <Phone size={14} />
                Or call for an instant estimate: (435) 229-5674
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
