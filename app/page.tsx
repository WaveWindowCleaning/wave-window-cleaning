import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import BeforeAfter from '@/components/BeforeAfter'
import Reviews from '@/components/Reviews'
import TeamStrip from '@/components/TeamStrip'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main id="main">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Gallery />
      <BeforeAfter />
      <Reviews />
      <TeamStrip />
      <Process />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
