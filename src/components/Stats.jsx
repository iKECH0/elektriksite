import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

// Custom lightweight counter hook
const useCountUp = (end, duration, inView, delay = 0) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime
    let animationFrame
    
    const timeout = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const easeOutQuad = progress * (2 - progress)
        setCount(Math.floor(easeOutQuad * end))
        
        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step)
        }
      }
      animationFrame = window.requestAnimationFrame(step)
    }, delay * 1000)

    return () => {
      clearTimeout(timeout)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, inView, delay])

  return count
}

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger earlier on mobile
  })

  // Using our custom hook for the counters
  const deployments = useCountUp(10, 2.5, inView)
  const countries = useCountUp(50, 2.5, inView)
  const uptimeBase = useCountUp(99, 2.5, inView)
  const uptimeDecimal = useCountUp(9, 2.5, inView, 1)
  const eco = useCountUp(100, 2.5, inView)

  return (
    <section id="impact" ref={ref} className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-[pulse_4s_infinite]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
          
          <div className="flex flex-col gap-1 lg:gap-2 transform hover:-translate-y-2 transition-transform duration-300 cursor-default">
            <span className="text-4xl lg:text-6xl font-light">{deployments}k+</span>
            <span className="text-[10px] lg:text-base font-semibold uppercase tracking-widest text-primary-dark">Deployments</span>
          </div>
          
          <div className="flex flex-col gap-1 lg:gap-2 transform hover:-translate-y-2 transition-transform duration-300 cursor-default">
            <span className="text-4xl lg:text-6xl font-light">{countries}+</span>
            <span className="text-[10px] lg:text-base font-semibold uppercase tracking-widest text-primary-dark">Countries</span>
          </div>

          <div className="flex flex-col gap-1 lg:gap-2 transform hover:-translate-y-2 transition-transform duration-300 cursor-default">
            <span className="text-4xl lg:text-6xl font-light flex items-center justify-center">
              {uptimeBase}.<span className="text-2xl lg:text-5xl mt-1">{uptimeDecimal}</span>%
            </span>
            <span className="text-[10px] lg:text-base font-semibold uppercase tracking-widest text-primary-dark">Uptime</span>
          </div>

          <div className="flex flex-col gap-1 lg:gap-2 transform hover:-translate-y-2 transition-transform duration-300 cursor-default">
            <span className="text-4xl lg:text-6xl font-light">{eco}%</span>
            <span className="text-[10px] lg:text-base font-semibold uppercase tracking-widest text-primary-dark">Eco-Friendly</span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats
