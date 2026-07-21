'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const commitments = [
  'Every window cleaned as if it were my own home',
  'Always on time, always prepared, always respectful',
  'I stay until the job meets my standard — not just yours',
  'Your home is treated with the same care I\u2019d want for mine',
]

export default function MeetOwner() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#1A3D54] shadow-2xl">
              <div style={{ clipPath: 'inset(5% 0 6% 0)', position: 'absolute', inset: 0 }}>
                <Image
                  src="/teancum.jpg"
                  alt="Teancum, owner of Wave Window Cleaning"
                  fill
                  quality={100}
                  className="object-contain"
                  style={{
                    objectPosition: 'center top',
                    filter: 'contrast(1.08) saturate(1.06) brightness(1.03)',
                  }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-brand-navy text-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-2xl font-black leading-none">5★</p>
              <p className="text-white/70 text-xs mt-1 font-medium">Google Rating</p>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">
              Meet the Owner
            </span>

            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight leading-tight">
              Hi, I&apos;m Teancum.
            </h2>

            <div className="mt-6 space-y-4 text-muted text-[1.02rem] leading-relaxed">
              <p>
                I started Wave Window Cleaning because I believe St. George homeowners deserve
                a window cleaning service they can genuinely trust — one that shows up on time,
                communicates clearly, and does the kind of work you&apos;d be proud to show your
                neighbors.
              </p>
              <p>
                When I come to your home, I&apos;m not sending a crew you&apos;ve never met. I&apos;m the
                owner and the one doing the work. That personal accountability drives everything
                I do. I take the time to do the job right because my reputation depends on it —
                and more importantly, because you&apos;re trusting me with your home.
              </p>
              <p>
                I&apos;m proud to serve the St. George community and grateful for every client who
                invites me to their home. Your windows will be spotless. That&apos;s my commitment.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {commitments.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-navy shrink-0 mt-0.5" />
                  <span className="text-charcoal text-sm font-medium">{c}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/quote"
              className="mt-10 inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get My Free Quote
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
