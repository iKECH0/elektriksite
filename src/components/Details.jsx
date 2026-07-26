import { motion } from 'framer-motion'
import { categories } from './CategoryMenu'

const Details = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">
      {categories.map((cat, index) => (
        <section 
          id={cat.id} 
          key={cat.id} 
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}
        >
          <div className={`max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-8 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            
            {/* Image Placeholder with Parallax-like slide in */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 !== 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 w-full relative group"
            >
              <div className="aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg lg:shadow-xl group-hover:shadow-2xl transition-shadow duration-500 relative">
                <img 
                  src={`https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                  alt={cat.name} 
                  className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`fa-solid ${cat.icon} text-6xl lg:text-8xl text-white/50 group-hover:scale-110 group-hover:text-white/80 transition-all duration-500`}></i>
                </div>
              </div>
            </motion.div>

            {/* Text Content with Slide in */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-bold rounded-full mb-4 lg:mb-6 tracking-widest text-xs lg:text-sm uppercase">
                {cat.name}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">{cat.name} Solutions</h2>
              <p className="text-base lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                {cat.desc} Alpha Innovation leads the market in providing top-tier solutions in this sector, ensuring our clients achieve maximum efficiency and long-term sustainability.
              </p>
              <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8 text-left max-w-sm mx-auto lg:mx-0">
                <li className="flex items-center gap-3 text-sm lg:text-base text-gray-700 font-medium hover:text-primary transition-colors cursor-default"><i className="fa-solid fa-check text-primary"></i> High Performance Guarantee</li>
                <li className="flex items-center gap-3 text-sm lg:text-base text-gray-700 font-medium hover:text-primary transition-colors cursor-default"><i className="fa-solid fa-check text-primary"></i> 24/7 Monitoring & Support</li>
                <li className="flex items-center gap-3 text-sm lg:text-base text-gray-700 font-medium hover:text-primary transition-colors cursor-default"><i className="fa-solid fa-check text-primary"></i> Environmentally Certified</li>
              </ul>
              <button className="bg-gray-900 text-white px-6 py-3 lg:px-8 lg:py-4 rounded font-semibold hover:bg-primary transition-all shadow-md flex items-center gap-2 group mx-auto lg:mx-0">
                Learn More
                <i className="fa-solid fa-arrow-right lg:opacity-0 lg:-ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"></i>
              </button>
            </motion.div>

          </div>
        </section>
      ))}
    </div>
  )
}

export default Details
