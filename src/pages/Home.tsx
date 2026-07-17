import Hero from '../components/hero/Hero'
import ProductCategories from '../components/home/ProductCategories'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Gallery from '../components/home/Gallery'
import BeforeAfter from '../components/home/BeforeAfter'
import Services from '../components/home/Services'
import Branches from '../components/home/Branches'
import InstagramSection from '../components/home/InstagramSection'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import Contact from '../components/home/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <WhyChooseUs />
      <Gallery />
      <BeforeAfter />
      <Services />
      <Branches />
      <InstagramSection />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
