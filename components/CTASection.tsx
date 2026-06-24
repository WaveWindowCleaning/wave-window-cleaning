'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, ChevronRight, Languages } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-gradient relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready for the Cleanest <br className="hidden sm:block" />
            Windows on the Block?
          </h2>
          <p className="mt-5 text-white/65 text-lg max-w-xl mx-auto leading-relaxed">
            Join hundreds of St. George homeowners who trust Wave Window Cleaning. Your
            estimate is 100% free and takes 60 seconds.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+14352295674"
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-brand-navy font-black text-lg px-9 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
            >
              <Phone size={20} />
              (435) 229-5674
            </a>
            <Link
              href="/quote"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/25 text-white font-semibold text-base px-9 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Online Quote Form
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-white/40 text-sm">
            <span className="flex items-center gap-1.5">
              <Languages size={14} />
              Se Habla Español
            </span>
            <span>·</span>
            <span>Licensed & Insured</span>
            <span>·</span>
            <span>7-Day Weather Guarantee</span>
            <span>·</span>
            <span>St. George, UT</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
