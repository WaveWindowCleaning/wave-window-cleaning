'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function QuickLeadForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || phone.replace(/\D/g, '').length < 10) return
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: '⚡ Quick Quote Request — Wave Window Cleaning',
          name,
          phone,
          message: `Quick quote request from homepage.\n\nName: ${name}\nPhone: ${phone}`,
          from_page: 'Homepage Hero',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 mt-8"
      >
        <CheckCircle className="text-green-400 shrink-0" size={22} />
        <div>
          <p className="text-white font-semibold text-sm">Got it! We&apos;ll call you shortly.</p>
          <p className="text-white/60 text-xs mt-0.5">Usually within the hour during business hours.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onSubmit={handleSubmit}
      className="mt-8 w-full max-w-md"
    >
      <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
        Get a free quote — takes 10 seconds
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm px-4 py-3 rounded-xl outline-none focus:border-white/50 focus:bg-white/15 transition-all"
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm px-4 py-3 rounded-xl outline-none focus:border-white/50 focus:bg-white/15 transition-all"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-white text-brand-navy font-bold text-sm px-5 py-3 rounded-xl hover:bg-white/90 active:scale-95 transition-all flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-60"
        >
          {status === 'loading' ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>Call Me <ArrowRight size={14} /></>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-red-300 text-xs mt-2">Something went wrong — please call us directly at (435) 229-5674</p>
      )}
      <p className="text-white/35 text-xs mt-2">No spam. We&apos;ll call to schedule your free estimate.</p>
    </motion.form>
  )
}
