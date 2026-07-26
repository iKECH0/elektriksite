import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: "Why Us", href: "#about" },
    { name: "Solutions", href: "#products" },
    { name: "Products", href: "#innovative-products" },
    { name: "R & D", href: "#research-development" },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 lg:px-16 h-[70px] lg:h-[90px] bg-white/95 backdrop-blur-md z-50 transition-all duration-300 ${scrolled ? 'shadow-md border-b-transparent' : 'border-b border-gray-100 shadow-none'}`}>
      
      {/* Brand Logo */}
      <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
        <img src="/logo.png" alt="Alpha Innovation" className="h-16 lg:h-20 w-auto object-contain" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center text-base font-medium text-gray-700 gap-2">
        {navLinks.map((link, index) => (
          <a 
            key={link.name}
            href={link.href} 
            className={`px-5 py-2.5 rounded transition-all duration-300 ${link.name === 'Solutions' ? 'bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary-dark hover:-translate-y-0.5' : 'hover:text-primary hover:bg-primary/5'}`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center gap-6">
        <a href="mailto:info@alphainnovation.net" className="bg-gray-900 text-white px-6 py-3 text-sm font-semibold flex items-center gap-2 hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/30" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)' }}>
          <i className="fa-solid fa-paper-plane"></i> Contact Us
        </a>
        <a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-1 text-sm font-semibold">
          <i className="fa-solid fa-globe text-xl"></i> EN
        </a>
      </div>

      {/* Mobile Actions (Globe + Hamburger) */}
      <div className="flex lg:hidden items-center gap-4">
        <a href="#" className="text-gray-500 hover:text-primary transition-colors">
          <i className="fa-solid fa-globe text-lg"></i>
        </a>
        <button 
          className="text-dark text-2xl p-1 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-2xl lg:hidden flex flex-col px-6 py-4 animate-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-lg font-medium text-gray-700 py-4 border-b border-gray-100 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:info@alphainnovation.net" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-lg font-medium text-primary py-4 hover:text-primary-dark transition-colors"
          >
            <i className="fa-solid fa-paper-plane mr-2"></i> Contact Us
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
