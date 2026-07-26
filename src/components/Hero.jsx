import { motion } from 'framer-motion'
import CategoryMenu from './CategoryMenu'

const Hero = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="h-screen pt-[90px] bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center relative flex flex-col justify-between before:absolute before:inset-0 before:bg-white/85">
      
      {/* Top Main Content Area (Split Left/Right) */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-start px-6 lg:px-24 py-8 lg:py-12 gap-8 lg:gap-24">
        
        {/* Left Side: Headline */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:flex-1 border-l-4 lg:border-l-8 border-primary pl-4 lg:pl-12"
        >
          <h1 className="text-4xl lg:text-[5rem] leading-[1.1] font-light text-gray-800 tracking-tight">
            <strong className="font-bold text-gray-900">Alpha Innovation</strong><br/>
            Engineering The Future.
          </h1>
        </motion.div>

        {/* Right Side: Paragraph */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:flex-1 lg:max-w-xl bg-white/60 lg:bg-white/40 p-5 lg:p-6 rounded-lg backdrop-blur-md shadow-sm"
        >
          <p className="text-base lg:text-xl leading-relaxed text-gray-900 font-medium">
            Researching and developing of environmentally friendly innovative products.
          </p>
        </motion.div>

      </div>

      {/* Bottom Horizontal Menu */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative z-10"
      >
        <CategoryMenu activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </motion.div>

    </div>
  )
}

export default Hero
