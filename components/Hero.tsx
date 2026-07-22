'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Star, ShieldCheck, BadgeCheck } from 'lucide-react'

const badges = [
  { icon: Star,        label: '5-Star Rated on Google' },
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: BadgeCheck,  label: '100% Satisfaction Guarantee' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">

      {/* ── Left: Copy panel ──────────────────────────────────────────── */}
      <div className="relative z-10 flex items-center w-full lg:w-[48%] bg-navy-gradient px-6 sm:px-10 lg:px-14 xl:px-20 pt-32 pb-28 lg:py-0">

        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-xl w-full mx-auto lg:mx-0"
        >

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 text-xs font-semibold tracking-wide">5-Star Rated on Google</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-black text-white leading-[1.06] tracking-tight">
            Spotless Windows That{' '}
            <span className="text-brand-accent">Transform</span>{' '}
            Your Home
          </h1>

          {/* Supporting copy */}
          <p className="mt-7 text-[1.05rem] text-white/70 leading-relaxed max-w-md">
            More natural light. Better curb appeal. A crystal-clear view you&apos;ll
            enjoy every single day.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-2 bg-white text-brand-navy font-black text-base px-8 py-4 rounded-full shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get My Free Quote
            </Link>
            <a
              href="tel:+14352295674"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white font-semibold text-base px-7 py-4 rounded-full hover:bg-white/15 transition-all duration-200"
            >
              <Phone size={16} />
              Call (435) 229-5674
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mt-10">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 text-white/75 text-xs font-medium px-3.5 py-1.5 rounded-full"
              >
                <Icon size={11} className="text-brand-accent" />
                {label}
              </span>
            ))}
          </div>

        </motion.div>
      </div>

      {/* ── Right: Owner photo panel ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="hidden lg:flex lg:w-[52%] relative overflow-hidden bg-[#1A3D54]"
      >
        <div
          className="absolute inset-0"
          style={{ clipPath: 'inset(5% 0 6% 0)' }}
        >
          <Image
            src="/teancum.jpg"
            alt="Teancum, owner of Wave Window Cleaning — St. George, Utah"
            fill
            quality={100}
            className="object-contain"
            style={{
              objectPosition: 'center top',
              filter: 'contrast(1.08) saturate(1.06) brightness(1.03)',
            }}
            priority
            sizes="52vw"
          />
        </div>
        {/* Left-edge fade into navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3D54]/90 via-[#1A3D54]/20 to-transparent pointer-events-none z-10" />
        {/* Owner name tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="absolute bottom-16 right-8 z-20 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3.5 shadow-xl"
        >
          <p className="text-charcoal font-black text-sm">Teancum</p>
          <p className="text-muted text-xs mt-0.5">Wave Window Cleaning · St. George, UT</p>
        </motion.div>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 60L1440 60L1440 22C1200 56 900 0 720 14C540 28 240 56 0 22L0 60Z" fill="white" />
        </svg>
      </div>

    </section>
  )
}
