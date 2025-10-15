"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const LOGOS = [
  {
    name: "CNN",
    url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "BBC",
    url: "https://images.unsplash.com/photo-1616469832301-ffaeadc67e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Forbes",
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "TechCrunch",
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "The Verge",
    url: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Wired",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Bloomberg",
    url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Business Insider",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  }
]

// Duplicate the logos for seamless infinite scroll
const DUPLICATED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS]

export default function MediaPresence() {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative mx-auto w-full max-w-[min(92vw,1200px)] px-4 py-16 overflow-hidden">
      {/* Header */}
      <motion.header 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-pretty text-2xl font-bold tracking-wide text-white md:text-3xl">
          MEDIA PRESENCE
        </h2>
        <motion.div 
          className="mx-auto mt-3 h-1 w-24 rounded-full bg-[var(--brand-yellow)]"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.header>

      {/* Sliding Logos Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        
        {/* Sliding Logos */}
        <motion.div
          ref={containerRef}
          className="flex gap-8 py-4"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {DUPLICATED_LOGOS.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 group"
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <div className="relative">
                {/* Logo Container */}
                <div className="w-32 h-20  rounded-xl  flex items-center justify-center p-4  transition-all duration-300">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Description */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
          Featured and recognized by leading media outlets worldwide for our innovative approach and outstanding results.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6, staggerChildren: 0.1 }}
      >
        {[
          { number: "50+", label: "Media Features" },
          { number: "1M+", label: "Impressions" },
          { number: "20+", label: "Countries" },
          { number: "95%", label: "Positive Coverage" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <div className="text-2xl font-bold text-[var(--brand-yellow)] mb-2">
              {stat.number}
            </div>
            <div className="text-white/70 text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}