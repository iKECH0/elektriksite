import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      title: "Sustainable Technology",
      desc: "Our solutions are engineered with the environment in mind, minimizing carbon footprints while maximizing output.",
      icon: "fa-leaf"
    },
    {
      title: "Global Reliability",
      desc: "Trusted by thousands of enterprises across 50+ countries, delivering uninterrupted performance anywhere.",
      icon: "fa-globe"
    },
    {
      title: "Seamless Integration",
      desc: "Plug-and-play architectures that effortlessly merge with your existing industrial and commercial systems.",
      icon: "fa-layer-group"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="about" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-light text-gray-900 mb-10 lg:mb-16"
        >
          Why Choose <strong className="font-bold">Alpha Innovation</strong>?
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map(f => (
            <motion.div key={f.title} variants={itemVariants} className="flex flex-col items-center group cursor-default">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/30">
                <i className={`fa-solid ${f.icon} text-3xl lg:text-4xl text-primary group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 lg:mb-4">{f.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
