import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slogan from './components/Slogan'
import Features from './components/Features'
import Details from './components/Details'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  const [activeCategory, setActiveCategory] = useState('Innovative Solutions')
  const [showTopBtn, setShowTopBtn] = useState(false)
  
  // Framer motion hook for the scroll progress bar
  const { scrollYProgress } = useScroll()

  // Logic for the Back to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100] shadow-[0_0_10px_rgba(106,153,78,0.8)]"
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 lg:bottom-10 lg:left-10 bg-[#25D366] text-white w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 z-50 flex items-center justify-center animate-in slide-in-from-bottom-10 fade-in duration-700"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-3xl lg:text-4xl"></i>
      </a>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-gray-900 text-white w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-2xl hover:bg-primary hover:-translate-y-2 transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <i className="fa-solid fa-arrow-up text-lg group-hover:animate-bounce"></i>
        </button>
      )}

      <Navbar />
      
      <main>
        <Hero activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <Slogan />
        <Features />
        <Stats />
        <div id="products">
          <Details />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
