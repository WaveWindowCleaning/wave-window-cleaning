'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const photos = [
  { src: '/photos/two-story-waterfed-pole.jpg', alt: 'Technician cleaning second-story windows with a waterfed pole', span: 'row-span-2' },
  { src: '/photos/technician-squeegee.jpg', alt: 'Wave technician squeegeeing a large window', span: 'row-span-2' },
  { src: '/photos/solar-roof-valley.jpg', alt: 'Cleaned solar panels on a tile roof overlooking St. George', span: 'col-span-2' },
  { src: '/photos/clean-window-stucco.jpg', alt: 'Streak-free window reflecting blue sky', span: 'row-span-2' },
  { src: '/photos/porch-waterfed-pole.jpg', alt: 'Waterfed pole reaching a covered front porch', span: 'row-span-2' },
  { src: '/photos/shuttered-windows.jpg', alt: 'Clean windows with plantation shutters', span: 'row-span-2' },
  { src: '/photos/tall-windows-sun.jpg', alt: 'Tall windows glinting in the Utah sun', span: 'row-span-2' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">Our Work</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            Real Jobs. Real St. George Homes.
          </h2>
          <p className="mt-4 text-muted text-lg">A look at recent work around Southern Utah.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className={`relative overflow-hidden rounded-2xl bg-surface ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover hover:scale-[1.04] transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
