'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">
            Real Results · St. George, UT
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            The Difference Is Immediate
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            St. George&apos;s desert water is among the hardest in the nation. Mineral deposits
            build up season after season — turning clear glass into a frosted blur. Our
            specialized treatment fully restores glass clarity that ordinary cleaning can&apos;t touch.
          </p>
        </motion.div>

        {/* Side-by-side comparison */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          {/* Before */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
            <Image
              src="/hardwater-before.png"
              alt="Before: Severe hard water mineral staining on window glass"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-red-500/90 text-white text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase">
                Before
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white/90 text-sm font-medium">
                Years of mineral buildup — calcium and silica deposits from St. George&apos;s hard water
              </p>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
            <Image
              src="/hardwater-after.png"
              alt="After: Crystal-clear glass after professional hard water removal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-emerald-500/90 text-white text-xs font-black px-4 py-1.5 rounded-full tracking-widest uppercase">
                After
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white/90 text-sm font-medium">
                Fully restored glass clarity — same window, same day
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-8 py-4 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get a Free Hard Water Assessment
          </Link>
          <p className="mt-4 text-sm text-muted">
            Serving St. George, Washington, Hurricane, Ivins &amp; surrounding communities
          </p>
        </motion.div>

      </div>
    </section>
  )
}
