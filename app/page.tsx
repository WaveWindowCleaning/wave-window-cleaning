import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import Process from '@/components/Process'
import Reviews from '@/components/Reviews'
import QuoteCalculator from '@/components/QuoteCalculator'
import ServiceAreaMap from '@/components/ServiceAreaMap'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <Process />
      <Reviews />
      <QuoteCalculator />
      <ServiceAreaMap />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
