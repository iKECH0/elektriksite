import { useRef, useEffect } from 'react'

export const categories = [
  { id: 'innovation', name: 'INNOVATION', icon: 'fa-lightbulb', desc: 'Driving the future with cutting-edge ideas and breakthrough technological advancements.' },
  { id: 'research-development', name: 'RESEARCH & DEVELOPMENT', icon: 'fa-magnifying-glass-chart', desc: 'Dedicated to discovering new methods and optimizing existing processes for maximum efficiency.' },
  { id: 'green-energy', name: 'GREEN ENERGY', icon: 'fa-leaf', desc: 'Sustainable and eco-friendly energy solutions designed to protect our planet.' },
  { id: 'design', name: 'DESIGN', icon: 'fa-compass-drafting', desc: 'Precision engineering and thoughtful design applied to every project we undertake.' },
  { id: 'innovative-products', name: 'INNOVATIVE PRODUCTS', icon: 'fa-cube', desc: 'Creating tangible, high-quality products that solve real-world industrial challenges.' },
  { id: 'electronics', name: 'ELECTRONICS', icon: 'fa-microchip', desc: 'Advanced electronic systems providing the brainpower behind modern automation.' },
  { id: 'software', name: 'SOFTWARE', icon: 'fa-code', desc: 'Robust software architectures tailored to control, monitor, and scale complex systems.' },
  { id: 'electrical', name: 'ELECTRICAL', icon: 'fa-bolt', desc: 'High-voltage and low-voltage electrical solutions ensuring safe and reliable power distribution.' }
]

const CategoryMenu = ({ activeCategory, setActiveCategory }) => {
  const scrollRef = useRef(null)

  // Auto-scroll logic for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        
        if (scrollWidth > clientWidth) {
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
          } else {
            scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' })
          }
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleClick = (cat) => {
    setActiveCategory(cat.name)
    const element = document.getElementById(cat.id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:shadow-none">
      <div 
        ref={scrollRef}
        className="flex flex-row overflow-x-auto lg:overflow-visible snap-x snap-mandatory hide-scrollbar scroll-smooth"
      >
        {categories.map((cat, index) => (
          <button
            key={cat.name}
            className={`flex-none w-[130px] lg:flex-1 flex flex-col items-center justify-center py-5 lg:py-8 px-2 lg:px-4 transition-all duration-300 cursor-pointer snap-center
              ${index !== categories.length - 1 ? 'border-r border-gray-200' : ''}
              ${activeCategory === cat.name 
                ? 'bg-gray-50' 
                : 'bg-white hover:bg-gray-50'
              }`}
            onClick={() => handleClick(cat)}
          >
            {/* Using a dark slate color to match the navy/dark blue look from the image, with primary (green) hover */}
            <i className={`fa-solid ${cat.icon} text-3xl lg:text-[40px] mb-3 lg:mb-4 transition-colors duration-300
              ${activeCategory === cat.name ? 'text-primary' : 'text-slate-800 group-hover:text-primary'}
            `}></i>
            <span className={`text-[10px] lg:text-[12px] uppercase tracking-wider text-center font-bold leading-tight px-1 lg:px-2 transition-colors duration-300
              ${activeCategory === cat.name ? 'text-primary' : 'text-slate-800'}
            `}>
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryMenu
