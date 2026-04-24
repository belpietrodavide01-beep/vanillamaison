import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IntroductionSection from './components/IntroductionSection'
import TreatmentsSection from './components/TreatmentsSection'
import AboutSection from './components/AboutSection'
import BentoGridSection from './components/BentoGridSection'
import MedicalSection from './components/MedicalSection'
import TestimonialSection from './components/TestimonialSection'
import FaqSection from './components/FaqSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import HairSpaPage from './components/HairSpaPage'
import LuminaPeelPage from './components/LuminaPeelPage'

gsap.registerPlugin(ScrollTrigger)

// Global GSAP Configuration for Performance
gsap.config({
  force3D: true,
  nullTargetWarn: false,
})

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home') // 'home', 'hair-spa', 'lumina-peel'

  // Funzione di navigazione custom
  const navigate = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0, 
      touchMultiplier: 2.0,
      lerp: 0.15,
      prevent: (node) => node.nodeName === 'IFRAME', 
    })

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(500, 33)

    ScrollTrigger.defaults({
      markers: false,
      fastScrollEnd: true,
      onRefreshInit: () => {
        gsap.set(".gpu-layer", { translateZ: 0 });
      }
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [currentPage]) // Refresh lenis on page change

  return (
    <div className="min-h-screen overflow-x-hidden w-full" style={{ backgroundColor: '#faf9f6' }}>
      <Navbar 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        currentPage={currentPage}
        onNavigate={navigate}
      />

      {currentPage === 'home' ? (
        <>
          <Hero isMenuOpen={menuOpen} onNavigate={navigate} />
          <IntroductionSection />
          <TreatmentsSection onNavigate={navigate} />
          <AboutSection />
          <BentoGridSection />
          <MedicalSection onNavigate={navigate} />
          <TestimonialSection />
          <FaqSection />
        </>
      ) : currentPage === 'hair-spa' ? (
        <HairSpaPage onNavigate={navigate} />
      ) : (
        <LuminaPeelPage onNavigate={navigate} />
      )}

      <ContactSection />
      <Footer onNavigate={navigate} />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
