'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

const sponsors = [
  { name: 'CNBC', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cnbc-logo.png' },
  { name: 'Economic Times', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/et-logo.png' },
  { name: 'CNBC', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cnbc-logo.png' },
  { name: 'Economic Times', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/et-logo.png' },
  { name: 'CNBC', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cnbc-logo.png' },
  { name: 'Economic Times', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/et-logo.png' },
  { name: 'CNBC', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cnbc-logo.png' },
  { name: 'Economic Times', logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/et-logo.png' },
]

export function SponsorsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    // Double the sponsors for seamless loop
    const contentWidth = scroller.scrollWidth / 2

    const animate = () => {
      if (scroller.scrollLeft >= contentWidth) {
        scroller.scrollLeft = 0
      } else {
        scroller.scrollLeft += 1
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="w-full py-16 bg-black">
      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px bg-white/40 flex-1 max-w-xs"></div>
        <h2 className="text-2xl font-mono font-bold text-white tracking-widest whitespace-nowrap">
          OUR SPONSORS
        </h2>
        <div className="h-px bg-white/40 flex-1 max-w-xs"></div>
      </div>

      {/* Scrolling Sponsors Marquee */}
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Scrolling container */}
        <div
          ref={scrollerRef}
          className="flex overflow-x-hidden py-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Double the sponsors array for seamless looping */}
          {[...sponsors, ...sponsors].map((sponsor, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 mx-4 w-48 h-24 flex items-center justify-center p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5 group"
            >
              <div className="w-full h-full relative bg-white/5 rounded flex items-center justify-center">
                <span className="text-white/60 font-mono text-sm text-center group-hover:text-white/80 transition-colors duration-300">
                  {sponsor.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alternative CSS-only approach (uncomment if preferred) */}
      {/* <div className="relative overflow-hidden py-4">
        <div className="flex animate-scroll">
          {[...sponsors, ...sponsors].map((sponsor, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 mx-4 w-48 h-24 flex items-center justify-center p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5 group"
            >
              <div className="w-full h-full relative bg-white/5 rounded flex items-center justify-center">
                <span className="text-white/60 font-mono text-sm text-center group-hover:text-white/80 transition-colors duration-300">
                  {sponsor.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}