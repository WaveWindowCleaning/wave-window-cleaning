'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Residential Window Cleaning',
    img: '/photos/picture-window-view.jpg',
    alt: 'Spotless picture window with a desert view',
    desc: 'Inside and out, from single-story homes to large estates. Tracks, frames and sills are included in every exterior clean.',
    tag: 'Most popular',
  },
  {
    title: 'Solar Panel Cleaning',
    img: '/photos/solar-panels-red-rocks.jpg',
    alt: 'Clean solar panels with red rocks in the background',
    desc: 'Dust and mineral film cut panel output. We gently clean and rinse your system so it works as hard as it should.',
    tag: 'Protect your investment',
  },
  {
    title: 'Screens & Hard Water Removal',
    img: '/photos/hardwater-after.png',
    alt: 'Window after hard water stain removal',
    desc: "Southern Utah's mineral-heavy water leaves a stubborn haze. We deep-clean screens and remove hard water stains regular cleaning can't touch.",
    tag: 'Free quote',
  },
  {
    title: 'Commercial Windows',
    img: '/photos/commercial-studio.jpg',
    alt: 'Large clean windows in a commercial studio',
    desc: 'Storefronts, offices and small commercial buildings, on a schedule that fits your business.',
    tag: 'Custom quote',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">What We Do</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            Built for Southern Utah Homes
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Desert dust, hard water and intense sun are tough on glass. Our pure-water system and trained
            technicians leave it clear.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.article
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={svc.img}
                  alt={svc.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-navy shadow">
                  {svc.tag}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-black text-charcoal tracking-tight">{svc.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{svc.desc}</p>
                <Link
                  href="/quote"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:gap-2.5 transition-all"
                >
                  Get a free quote <ArrowRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
