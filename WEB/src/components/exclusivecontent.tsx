"use client"

import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useState, useEffect } from "react"

interface CarouselItem {
    id: number
    name: string
    year: string
    description: string
    image: string
}

const items: CarouselItem[] = [
    {
        id: 1,
        name: "Raja Kumari",
        year: "Allasi 2024",
        description: "Morbi non aliquam libero, eu aliquot eget. Nulla sed elementum nulla. Donec nisi blandit.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZPMp3tgjv2Su5JtmjEnAY3vDEwwLzH.png",
    },
    {
        id: 2,
        name: "Cosmic Edge",
        year: "Stellar 2025",
        description:
            "Experience the boundaries of science fiction. Explore distant galaxies and meet enigmatic characters.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6wNJ4XLgfjHXgE5h2Uz6npA2wIIIa5.png",
    },
    {
        id: 3,
        name: "Nova Horizon",
        year: "Genesis 2025",
        description: "A journey through time and space. Witness the clash between worlds and the birth of legends.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZPMp3tgjv2Su5JtmjEnAY3vDEwwLzH.png",
    },
]

export function ExclusiveCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)

    useEffect(() => {
        if (!autoPlay) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [autoPlay])

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
        setAutoPlay(false)
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
        setAutoPlay(false)
    }

    const currentItem = items[currentIndex]

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-black py-20 px-8">
            
                 {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-2 tracking-wider">EXCLUSIVE CONTENT</h2>
                    <div className="w-32 h-1 bg-yellow-400 mx-auto" />
                </div>
            {/* Background gradient accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 pt-28 max-w-6xl mx-auto">
           

                {/* Carousel Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Featured Card */}
                    <div className="relative w-full max-w-md">
                        {/* Purple glow effect - positioned absolutely */}
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-600 to-transparent rounded-full blur-3xl opacity-60" />

                        {/* Card with golden border */}
                        <div className="relative bg-gradient-to-br from-yellow-600 to-yellow-700 p-1 rounded-lg shadow-2xl">
                            <div className="bg-black rounded-lg overflow-hidden">
                                <img
                                    src={currentItem.image || "/placeholder.svg"}
                                    alt={currentItem.name}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        </div>

                        {/* Navigation Arrows and Name - Mobile Layout */}
                        <div className="flex justify-between items-center px-4 py-8">
                            <button
                                onClick={goToPrevious}
                                className="flex-shrink-0 z-20 p-3 bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg"
                                aria-label="Previous item"
                            >
                                <ChevronLeft size={28} className="text-black" />
                            </button>

                            <p className="text-center text-yellow-400 font-bold text-lg">{currentItem.name}</p>

                            <button
                                onClick={goToNext}
                                className="flex-shrink-0 z-20 p-3 bg-yellow-400 hover:bg-yellow-300 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg"
                                aria-label="Next item"
                            >
                                <ChevronRight size={28} className="text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Content Info - Moves below on mobile */}
                    <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-white mb-2">{currentItem.year}</h3>
                        <p className="text-gray-300 leading-relaxed mb-6 text-sm">{currentItem.description}</p>

                        {/* Play Button */}
                        <button className="flex items-center justify-center lg:justify-start gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105 active:scale-95 mx-auto lg:mx-0">
                            <Play size={20} fill="currentColor" />
                            PLAY NOW
                        </button>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index)
                                setAutoPlay(false)
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-yellow-400" : "w-2 bg-gray-600"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}