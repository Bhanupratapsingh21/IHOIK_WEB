"use client"

import Image from "next/image"
import { Instagram, Youtube, Camera, Video, Users, Sparkles, ArrowRight, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Globe } from "lucide-react"


export function PikaHero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [activeService, setActiveService] = useState(0)

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

  // Service rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: "Content Creation",
      description: "Engaging video content that tells your brand story",
      icon: Video
    },
    {
      title: "Social Media Management",
      description: "Strategic content planning and execution across platforms",
      icon: Users
    },
    {
      title: "Photography & Videography",
      description: "Professional visual content that captures attention",
      icon: Camera
    }
  ]

  const clients = [
    { name: "BrandA", logo: "/placeholder.svg?height=40&width=120" },
    { name: "BrandB", logo: "/placeholder.svg?height=40&width=120" },
    { name: "BrandC", logo: "/placeholder.svg?height=40&width=120" },
    { name: "BrandD", logo: "/placeholder.svg?height=40&width=120" },
    { name: "BrandE", logo: "/placeholder.svg?height=40&width=120" }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  const socialCards = [
    {
      platform: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@ihoikmedia",

      description: "Watch our video content",
      image: "/images/yt.png"
    },
    {
      platform: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ihoikmedia/",

      description: "Follow our latest updates",
      image: "/images/ig.png"
    },
    {
      platform: "Website",
      icon: Globe,
      url: "#",

      description: "Visit our website",
      image: "/images/web.png"
    }
  ]

  // Auto-rotate the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % socialCards.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getCardPosition = (index: any) => {
    const total = socialCards.length
    const position = (index - activeIndex + total) % total

    switch (position) {
      case 0: // Center card
        return "scale-110 z-20 opacity-100"
      case 1: // Right card
        return "translate-x-24 scale-90 z-10 opacity-80"
      case 2: // Left card (for 3 items)
      default:
        return "-translate-x-24 scale-90 z-10 opacity-80"
    }
  }

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 md:py-10 lg:py-16 relative overflow-hidden"
      aria-labelledby="ihoik-title"
    >


      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFE580] rounded-full opacity-20 animate-float-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#7A1C1C] rounded-full opacity-10 animate-float-2"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#1B1B1B] rounded-full opacity-5 animate-float-3"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[length:50px_50px] bg-grid-black"></div>
      </div>

      <div className="relative z-10">
        <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white to-white/95 overflow-hidden backdrop-blur-sm">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl border border-transparent bg-clip-padding bg-origin-border animate-border-rotate">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F7C948] to-[#F7C948] bg-[length:200%_100%]"></div>
          </div>

          <div className="absolute inset-0 overflow-hidden z-50">
            <div className="absolute -top-10 -left-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-[#1B1B1B]/15 animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-[#1B1B1B]/15 animate-pulse-slow-delay-1"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#1B1B1B]/15 animate-pulse-slow-delay-2"></div>
          </div>

          <div className="relative px-6 sm:px-8 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14">
            {/* Logo and navigation */}
            <div className="flex justify-between items-center mb-12 md:mb-16">
              <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                <Image
                  src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1756566813/Ihoik_Media_logo_vdfkgo.png"
                  alt="IHOIK Media Logo"
                  height={160}
                  width={280}
                  className="object-contain"
                />
              </div>

              <div className={`flex items-center gap-4 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                <Link
                  href="https://www.instagram.com/ihoikmedia/"
                  className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors duration-300 group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5 text-[#1B1B1B] group-hover:text-[#7A1C1C] transition-colors" />
                </Link>
                <Link
                  href="https://www.youtube.com/@ihoikmedia"
                  className="p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors duration-300 group"
                  aria-label="Subscribe on YouTube"
                >
                  <Youtube className="h-5 w-5 text-[#1B1B1B] group-hover:text-[#7A1C1C] transition-colors" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-16 items-center">
              {/* Left content */}
              <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1B1B] mb-4 leading-tight">
                    Elevate Your <span className="text-[#7A1C1C]">Brand</span> With Creative Media Solutions
                  </h1>
                  <p className="text-lg md:text-xl text-[#1B1B1B]/80 max-w-lg">
                    We transform ideas into engaging visual stories that captivate audiences and drive results.
                  </p>
                </div>

                {/* Services carousel */}
                <div className="bg-gradient-to-r from-[#F7C948]/10 to-transparent p-4 rounded-xl border-l-4 border-[#F7C948]">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#F7C948] p-2 rounded-lg">
                      {(() => {
                        const Icon = services[activeService].icon;
                        return <Icon className="h-5 w-5 text-[#1B1B1B]" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B1B1B]">{services[activeService].title}</h3>
                      <p className="text-sm text-[#1B1B1B]/70">{services[activeService].description}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        className={`h-1 rounded-full transition-all duration-500 ${index === activeService ? 'w-6 bg-[#7A1C1C]' : 'w-3 bg-[#1B1B1B]/30'}`}
                        onClick={() => setActiveService(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#7A1C1C] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group">
                    <span>Start a Project</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className={`relative transition-all duration-1000 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex justify-end w-full">
                  {/* Main media card */}
                  <div className="relative h-80 flex items-center justify-end w-full max-w-lg pr-10 mr-28">
                    {/* Circular track */}
                    <div className="absolute w-72 h-72 rounded-full border-2 border-dashed border-gray-200 opacity-50 right-5"></div>

                    {socialCards.map((card, index) => {
                      const Icon = card.icon
                      const position = getCardPosition(index)

                      return (
                        <Link
                          key={index}
                          href={card.url}
                          className={`absolute transition-all duration-700 ease-in-out transform ${position} hover:scale-115 hover:z-30`}
                        >
                          <div className="w-72 h-80 bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                            {/* Card image */}
                            <div className="h-32 relative overflow-hidden">
                              <img
                                src={card.image}
                                alt={card.platform}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Icon className="h-12 w-12 text-white" />
                              </div>
                            </div>

                            {/* Card content */}
                            <div className="p-5">
                              <h3 className="text-xl font-bold text-gray-800 mb-2">{card.platform}</h3>
                              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                              <div className="flex items-center text-sm font-medium text-gray-700 group-hover:text-[#7A1C1C] transition-colors">
                                <span>Visit {card.platform}</span>
                                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
                          </div>
                        </Link>
                      )
                    })}

                    {/* Navigation dots */}
                    <div className="absolute -bottom-10 right-0 mr-28 flex space-x-2">
                      {socialCards.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-[#7A1C1C] scale-125' : 'bg-gray-300'}`}
                          aria-label={`Show ${socialCards[index].platform} card`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-3deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        @keyframes border-rotate {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes float-element-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes float-element-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        .bg-grid-black {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 12s ease-in-out infinite;
        }
        .animate-border-rotate {
          animation: border-rotate 3s linear infinite;
        }
        .animate-float-element-1 {
          animation: float-element-1 5s ease-in-out infinite;
        }
        .animate-float-element-2 {
          animation: float-element-2 6s ease-in-out infinite 1s;
        }

        @keyframes pulse-slow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-slow-delay-1 {
  animation: pulse-slow 4s ease-in-out infinite 1s;
}

.animate-pulse-slow-delay-2 {
  animation: pulse-slow 4s ease-in-out infinite 2s;
}

      `}</style>
    </section>
  )
}