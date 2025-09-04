"use client"

import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { FlipWords } from "@/components/ui/flip-words"

export function PikaHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)

  const messages = [
    "Kota",
    "Bihar",
    "Media",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [])

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 md:py-10 lg:py-16"
      aria-labelledby="pika-title"
    >
      <div className="relative rounded-2xl md:rounded-3xl border-4 border-white/90 bg-[#F7C948] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)] md:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-white/30 overflow-hidden min-h-[500px] md:min-h-[600px]">

        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-24 h-24 md:-top-20 md:-left-20 md:w-40 md:h-40 rounded-full bg-white/10 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 md:-bottom-20 md:-right-20 md:w-40 md:h-40 rounded-full bg-white/10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/5 animate-pulse delay-500"></div>
        </div>

        {/* Main content */}
        <div className="relative px-4 sm:px-6 pt-2 md:px-10 h-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 top-6 z-0 sm:inset-x-6 md:inset-x-10 md:top-12"
          >
            <p
              className={`text-balance font-sans text-[12vw] leading-none font-extrabold text-white/95 sm:text-[14vw] md:text-[16vw] lg:text-[190px] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              It Happens Only In
            </p>

            {/* FlipWords messages below the main title */}
            <div className={`mt-2 sm:mt-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <FlipWords
                words={messages}
                duration={2500}
                className="text-[#7A1C1C] font-extrabold text-[8vw] sm:text-[10vw] md:text-[8vw] lg:text-[80px]"
              />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-end gap-6 md:gap-8 lg:gap-20 md:flex-row h-full">
            {/* Left Section */}
            <div className="flex flex-col gap-4 pt-16 md:pt-16 lg:pt-64 md:pb-14 w-full md:w-1/2">
              <div
                className={`mt-4 md:mt-6 flex flex-wrap items-center gap-4 md:gap-8 text-xs sm:text-sm transition-all duration-700 ease-out delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <Link
                  href="https://www.instagram.com/ithappensinkota/"
                  className="inline-flex items-center gap-1 md:gap-2 text-[#1B1B1B]/80 hover:text-[#1B1B1B] transition-colors duration-300 hover:scale-105"
                >
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span className="font-semibold">Follow US ON IG</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@ihoikmedia"
                  className="inline-flex items-center gap-1 md:gap-2 text-[#1B1B1B]/80 hover:text-[#1B1B1B] transition-colors duration-300 hover:scale-105"
                >
                  <Youtube className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span className="font-semibold">Subscribe On YT</span>
                </Link>
              </div>
            </div>

            {/* Right Section - Phone Image */}
            {/* Right Section - Phone Image */}
            <div
              className={`relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm transition-all duration-1000 ease-out delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
              style={{
                marginLeft: 'auto',
                marginTop: 'auto',
                alignSelf: 'flex-end'
              }}
            >
              <div className="animate-float" style={{ transform: 'translateY(15px)' }}>
                <div
                  aria-hidden="true"
                  className="absolute right-3 top-12 hidden h-20 w-36 md:right-4 md:top-16 md:h-28 md:w-44 rotate-6 rounded-lg bg-white/20 md:block animate-pulse"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-4 sm:inset-x-6 bottom-0 h-4 md:h-6 rounded-full bg-black/10 blur-[2px]"
                />
                <Image
                  src={
                    "https://res.cloudinary.com/djwzwq4cu/image/upload/e_background_removal/f_png/v1756568674/White_and_Black_Minimalist_Phone_Mockup_Instagram_2332323_fcrnhq.jpg"
                  }
                  alt="Phone mockup showing social media content"
                  width={320}
                  height={420}
                  className="relative z-10 h-auto w-full drop-shadow-xl md:drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle background circles */}
        <div aria-hidden="true">
          <div className="absolute -left-6 -bottom-6 h-16 w-16 md:-left-8 md:-bottom-8 md:h-24 md:w-24 rounded-full bg-black/10" />
          <div className="absolute -right-4 -bottom-4 h-20 w-20 md:-right-6 md:-bottom-6 md:h-28 md:w-28 rounded-full bg-black/10" />
        </div>

        {/* Animated border */}
        <div
          className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-white/50 animate-ping-slow"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(1.05);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  )
}