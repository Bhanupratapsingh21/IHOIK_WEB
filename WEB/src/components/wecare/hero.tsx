'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const colors = [
      'rgba(100, 200, 255, ',
      'rgba(150, 100, 255, ',
      'rgba(100, 255, 200, ',
      'rgba(255, 100, 200, ',
      'rgba(100, 255, 100, ',
    ]

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.opacity -= 0.002

        // Wrap around
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Regenerate if too transparent
        if (p.opacity < 0.1) {
          p.opacity = Math.random() * 0.5 + 0.3
          p.x = Math.random() * canvas.width
          p.y = Math.random() * canvas.height
        }

        ctx.fillStyle = p.color + p.opacity + ')'
        ctx.fillRect(p.x, p.y, p.size, p.size)
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ display: 'block' }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Main heading */}
        <h1 className="mb-8  font-mono text-5xl font-bold tracking-wide text-yellow-400 sm:text-6xl">
          TOGETHER, WE CREATE CHANGE.
        </h1>

        {/* Subheading */}
        <p className="mb-12 font-mono max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
          PARTNER WITH US TO UPLIFT COMMUNITIES, EMPOWER YOUTH, AND BUILD A MORE EQUITABLE FUTURE.
        </p>

        {/* CTA Button */}
        <button className="relative z-20 rounded-lg bg-yellow-400 px-8 py-4 font-bold text-black transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/50 sm:px-10 sm:py-5 sm:text-lg">
          BECOME A COLLABORATOR
        </button>

        {/* Decorative stars */}
        <div className="absolute left-12 top-1/3 text-4xl text-white opacity-60">★</div>
        <div className="absolute right-12 bottom-1/3 text-3xl text-white opacity-60">★</div>
      </div>
    </section>
  )
}
