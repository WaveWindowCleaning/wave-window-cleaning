import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { SITE, BUSINESS } from '@/lib/site'
import Footer from '@/components/Footer'

export default function LegalPage({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <>
      <header className="bg-brand-navy px-4 py-3.5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Wave Window Cleaning home">
            <Image
              src="/logo.png"
              alt="Wave Window Cleaning"
              width={120}
              height={38}
              className="h-9 w-auto brightness-200"
            />
          </Link>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-2 text-white text-sm font-medium hover:underline"
          >
            <Phone size={15} aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </header>
      <main id="main" className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-charcoal">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-muted">Last updated: {BUSINESS.lastUpdated}</p>
          <div className="mt-8 space-y-6 text-[15px] leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-brand-navy [&_a]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
