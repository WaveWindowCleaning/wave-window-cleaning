'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GripVertical } from 'lucide-react'

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100))
    setSliderPos(pos)
  }, [])

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-brand-navy text-xs font-bold tracking-[0.18em] uppercase">See The Difference</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-charcoal tracking-tight">
            Before & After
          </h2>
          <p className="mt-4 text-muted text-lg">
            Drag the slider to see exactly what our team delivers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          ref={containerRef}
          className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl select-none cursor-col-resize ring-1 ring-gray-200"
          onMouseMove={(e) => { if (isDragging.current) updateSlider(e.clientX) }}
          onMouseUp={() => { isDragging.current = false }}
          onMouseLeave={() => { isDragging.current = false }}
          onTouchMove={(e) => updateSlider(e.touches[0].clientX)}
        >
          {/* After — base layer */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=900&q=85"
              alt="After: Crystal-clear windows after Wave Window Cleaning service in St. George, UT"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Before — clipped reveal layer */}
          <div
            className="absolute inset-0 transition-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=900&q=85"
              alt="Before: Dirty windows with hard water stains before cleaning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            {/* Before label */}
            <div className="absolute top-4 left-4 bg-black/55 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
              BEFORE
            </div>
          </div>

          {/* After label */}
          <div className="absolute top-4 right-4 bg-black/55 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
            AFTER
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/80 shadow-[0_0_12px_rgba(0,0,0,0.4)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-col-resize ring-2 ring-brand-navy/20"
              onMouseDown={() => { isDragging.current = true }}
              onTouchStart={() => {}}
            >
              <GripVertical size={18} className="text-brand-navy" />
            </div>
          </div>

          {/* Drag hint (fades after first interaction) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full pointer-events-none">
            ← Drag to compare →
          </div>
        </motion.div>
      </div>
    </section>
  )
}
