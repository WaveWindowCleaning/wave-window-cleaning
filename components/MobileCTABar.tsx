'use client'

import { useState, useEffect } from 'react'
import { Phone, FileText, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function MobileCTABar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Show immediately on mobile for Yelp/ad traffic — don't make them scroll
    const timer = setTimeout(() => setShow(true), 1500)
    const handleScroll = () => setShow(true)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="grid grid-cols-3 shadow-2xl">
            <a
              href="tel:+14355009720"
              className="flex items-center justify-center gap-2 bg-brand-navy text-white font-bold text-sm py-4 px-3 border-r border-white/10"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="sms:+14355009720?&body=Hi%20Wave%20Window%20Cleaning%2C%20I%27d%20like%20a%20free%20quote."
              className="flex items-center justify-center gap-2 bg-brand-navy-mid text-white font-bold text-sm py-4 px-3 border-r border-white/10"
            >
              <MessageSquare size={16} />
              Text
            </a>
            <Link
              href="/quote"
              className="flex items-center justify-center gap-2 bg-white text-brand-navy font-bold text-sm py-4 px-3"
            >
              <FileText size={16} />
              Quote
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
