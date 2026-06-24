'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Building2, Grid3X3, Droplets, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Window Cleaning',
    desc: 'Spotless interior and exterior windows for homes across St. George, Bloomington Hills, Little Valley, and Green Springs. Single-story to large estate properties handled with care.',
    price: 'From $120',
    detail: 'Interior & exterior · Screens included',
  },
  {
    icon: Building2,
    title: 'Commercial Window Cleaning',
    desc: 'First impressions matter. Scheduled maintenance cleaning for storefronts, offices, and multi-unit buildings throughout the greater St. George and Washington County area.',
    price: 'Custom quote',
    detail: 'Monthly & quarterly plans available',
  },
  {
    icon: Grid3X3,
    title: 'Screen Cleaning & Restoration',
    desc: "Deep-cleaned screens remove months of Southern Utah's desert dust and allergens. Torn or damaged screens repaired or replaced on-site during your appointment.",
    price: 'From $8/screen',
    detail: 'Repair & full replacement available',
  },
  {
    icon: Droplets,
    title: 'Hard Water Stain Removal',
    desc: "Utah's mineral-rich water leaves stubborn white haze on glass over time. Our professional-grade treatment removes calcium and mineral buildup that normal cleaning cannot touch.",
    price: 'From $75',
    detail: 'Professional-grade treatment',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">What We Do</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            Services Built for Southern Utah
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Every service is designed around the specific challenges of St. George&apos;s desert
            climate — high dust, hard water minerals, and intense UV exposure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="w-11 h-11 bg-brand-navy rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-navy-mid transition-colors">
                <svc.icon size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-charcoal text-[15px] leading-snug">{svc.title}</h3>
              <p className="mt-2.5 text-muted text-sm leading-relaxed flex-1">{svc.desc}</p>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-brand-navy font-black text-sm">{svc.price}</p>
                  <p className="text-xs text-muted mt-0.5">{svc.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-navy-dark transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get a Free Estimate
            <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
