import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import Portfolio from '../components/Portfolio'
import BeforeAfterShowcase from '../components/BeforeAfterShowcase'
import PlantCollections from '../components/PlantCollections'
import ProcessSteps from '../components/ProcessSteps'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Stories from '../components/Stories'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <WhyChoose />
      <BeforeAfterShowcase />
      <Portfolio limit={6} showSeeMore />
      <PlantCollections />
      <ProcessSteps />
      <Testimonials />
      <Stories />
      <About />
      <ContactForm />
      <Footer />
    </>
  )
}
