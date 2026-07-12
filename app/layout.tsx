import type { Metadata } from 'next'
import './globals.css'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import MobileCTABar from '@/components/MobileCTABar'

export const metadata: Metadata = {
  title: {
    default: 'Wave Window Cleaning | St. George, UT Window Cleaning Experts',
    template: '%s | Wave Window Cleaning',
  },
  description:
    'Premium window cleaning in St. George, Utah. Licensed & insured. Residential, commercial, screen cleaning, and hard water stain removal. Serving Bloomington, Little Valley, Santa Clara, Washington, Ivins & Green Springs. Free estimates. Se Habla Español.',
  keywords: [
    'St. George window cleaning',
    'window cleaning St George Utah',
    'residential window cleaning St George',
    'commercial window cleaning St George',
    'screen cleaning St George',
    'hard water stain removal Utah',
    'window washing St George',
    'Santa Clara window cleaning',
    'Washington Utah window cleaning',
    'Ivins window cleaning',
    'Bloomington Hills window cleaning',
    'Little Valley window cleaning',
  ],
  authors: [{ name: 'Wave Window Cleaning' }],
  creator: 'Wave Window Cleaning',
  metadataBase: new URL('https://cleanwavewindows.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cleanwavewindows.com',
    siteName: 'Wave Window Cleaning',
    title: 'Wave Window Cleaning | St. George, UT',
    description:
      'Premium window cleaning services in St. George, Utah and surrounding areas. Licensed, insured, 7-Day Weather Guarantee. Se Habla Español.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Wave Window Cleaning' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wave Window Cleaning | St. George, UT',
    description: 'Premium window cleaning services in St. George, Utah.',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="bg-white text-charcoal antialiased font-sans">
        {children}
        <MobileCTABar />
      </body>
    </html>
  )
}
