'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Play, Smile, ArrowDown } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false)
  const [isKnowMoreHovered, setIsKnowMoreHovered] = useState(false)

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section with 16:9 Aspect Ratio */}
      <div className="relative w-full aspect-[16/16] bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iOWz2BH0wSDd7XvnqQUY57Nrifz73C.png"
            alt="IOHIK 2025 Confetti"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          {/* Main Title */}
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              GET READY FOR
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400">
              IHOIK 2025
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
              Tickets Will Be
            </p>
          </div>

          {/* Live Soon Button at Bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFE500] text-black font-bold uppercase text-lg tracking-wider hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg"
            >
              Live Soon
              <Smile size={20} className="fill-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Know More Section */}
      <div className="bg-black py-20 flex flex-col items-center justify-center space-y-16">
        {/* Animated Know More Button */}
        <button
          className="group flex flex-col items-center space-y-4 text-gray-300 hover:text-yellow-400 transition-all duration-300"
          onMouseEnter={() => setIsKnowMoreHovered(true)}
          onMouseLeave={() => setIsKnowMoreHovered(false)}
        >
          <span className="text-xl font-medium tracking-wider">Know More</span>
          <div className={`transform transition-transform duration-300 ${isKnowMoreHovered ? 'translate-y-3' : 'translate-y-0'
            }`}>
            <ArrowDown
              size={28}
              className="animate-bounce"
            />
          </div>
        </button>

        {/* Bottom Accent */}
        <p className="text-sm uppercase tracking-widest text-gray-500 text-center mt-8">
          Coming Soon • Stay Tuned • IHOIK 2025
        </p>
      </div>
    </main>
  )
}