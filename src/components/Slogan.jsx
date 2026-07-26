import { motion } from 'framer-motion'

const Slogan = () => {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-6 lg:gap-8">
        
        {/* INNOVATION row */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 lg:gap-8"
        >
          <div className="h-[2px] bg-primary flex-1 max-w-[60px] md:max-w-[100px] lg:max-w-[200px]"></div>
          <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-6xl tracking-[0.2em] md:tracking-[0.4em] lg:tracking-[0.5em] uppercase whitespace-nowrap pl-2 lg:pl-4">
            Innovation
          </h2>
          <div className="h-[2px] bg-primary flex-1 max-w-[60px] md:max-w-[100px] lg:max-w-[200px]"></div>
        </motion.div>

        {/* ENGINEERING THE FUTURE row */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 lg:gap-8"
        >
          <div className="h-[2px] bg-slate-800 flex-1 max-w-[40px] md:max-w-[80px] lg:max-w-[160px]"></div>
          <h3 className="text-slate-800 font-bold text-lg md:text-2xl lg:text-4xl tracking-[0.1em] md:tracking-[0.2em] lg:tracking-[0.4em] uppercase whitespace-nowrap pl-1 lg:pl-3">
            Electronic Solutions.
          </h3>
          <div className="h-[2px] bg-slate-800 flex-1 max-w-[40px] md:max-w-[80px] lg:max-w-[160px]"></div>
        </motion.div>

      </div>
    </section>
  )
}

export default Slogan
