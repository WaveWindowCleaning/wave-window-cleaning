'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">Hard Water Removal</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            See the Difference
          </h2>
          <p className="mt-4 text-muted text-lg">
            Utah&apos;s hard water leaves stubborn mineral buildup that regular cleaning can&apos;t touch.
            Our professional treatment restores glass to like-new clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200">
              <Image
                src="/hardwater-before.png"
                alt="Before: Severe hard water mineral staining on window glass"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <span className="bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                  Before
                </span>
                <span className="text-white/85 text-xs font-medium">Hard water mineral buildup</span>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200">
              <Image
                src="/hardwater-after.png"
                alt="After: Crystal-clear glass after Wave Window Cleaning hard water removal treatment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <span className="bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase">
                  After
                </span>
                <span className="text-white/85 text-xs font-medium">Professional mineral removal</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted text-sm mt-8 max-w-lg mx-auto"
        >
          These are real results from a St. George home. Hard water stains that had built up
          over years — fully removed in a single treatment.
        </motion.p>
      </div>
    </section>
  )
}
