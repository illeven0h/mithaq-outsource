import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import { Process, Testimonials, FinalCTA, Footer } from '@/components/Sections'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
