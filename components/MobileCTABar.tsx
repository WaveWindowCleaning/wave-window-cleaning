'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileCTABar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 350)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <a
            href="tel:+14352295674"
            className="flex items-center justify-center gap-3 bg-brand-navy text-white font-bold text-base py-4 px-6 shadow-2xl"
            style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
          >
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <Phone size={16} className="animate-pulse" />
            </div>
            Call Now for a Free Quote
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
