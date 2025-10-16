"use client";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
    const rotation = direction === "left" ? "rotate-180" : ""
    return (
        <motion.svg
            className={`h-4 w-4 ${rotation}`}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            <path
                d="M7 12h10M13 8l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </motion.svg>
    )
}

interface HotItem {
    id: string
    imageUrl: string
    title: string
    description: string
    unsplashUrl?: string
}

interface WhatsHotProps {
    items?: HotItem[]
}

export default function WhatsHot({ items = defaultItems }: WhatsHotProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [direction, setDirection] = useState(0)

    const currentItem = items[currentIndex]

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % items.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    }

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, items.length])

    // Animation variants
    const imageVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6
            }
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4
            }
        })
    }

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2
            }
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    return (
        <section
            aria-labelledby="whats-hot-heading"
            className="w-full bg-black mx-auto py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="mx-auto w-full max-w-7xl">
                {/* Heading */}
                <motion.header
                    className="text-center mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        id="whats-hot-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight"
                    >
                        WHAT'S <span className="text-yellow-400">HOT</span>
                    </h2>
                    <motion.div
                        aria-hidden="true"
                        className="mx-auto mt-4 h-1 w-24 bg-yellow-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                </motion.header>

                {/* Main Content - Row on desktop, Column on mobile */}
                <motion.div 
                    className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Image Carousel - Left on desktop, Top on mobile */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative mx-auto w-full max-w-2xl">
                            {/* Back layers with modern animation */}
                            <motion.div
                                className="pointer-events-none absolute inset-0 -top-4 -z-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.div
                                    className="absolute left-6 right-6 top-4 h-[62%] rounded-3xl blur-lg opacity-30"
                                    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.1))" }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.div
                                    className="absolute left-3 right-3 top-2 h-[68%] rounded-3xl opacity-40"
                                    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(0,0,0,0.15))" }}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                />
                            </motion.div>

                            {/* Main image card */}
                            <div className="relative">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                    <AnimatePresence custom={direction} mode="popLayout">
                                        <motion.img
                                            key={currentIndex}
                                            custom={direction}
                                            variants={imageVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            src={currentItem.imageUrl}
                                            alt={currentItem.title}
                                            className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover rounded-3xl"
                                            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw"
                                        />
                                    </AnimatePresence>

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
                                </div>

                                {/* Progress indicators */}
                                <div className="flex justify-center mt-6 gap-2">
                                    {items.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setDirection(index > currentIndex ? 1 : -1)
                                                setCurrentIndex(index)
                                            }}
                                            className="focus:outline-none group"
                                            aria-label={`Go to slide ${index + 1}`}
                                        >
                                            <motion.div
                                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                    ? "bg-yellow-400 w-8"
                                                    : "bg-gray-600/50 hover:bg-gray-400 w-3 group-hover:w-4"
                                                    }`}
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            />
                                        </button>
                                    ))}
                                </div>

                                {/* Side arrows */}
                                <div className="absolute inset-y-0 -left-4 -right-4 flex items-center justify-between pointer-events-none">
                                    <motion.button
                                        type="button"
                                        aria-label="Previous"
                                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black shadow-2xl hover:shadow-3xl pointer-events-auto backdrop-blur-sm"
                                        whileHover={{ 
                                            scale: 1.15, 
                                            backgroundColor: "#fbbf24" 
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={prevSlide}
                                    >
                                        <ArrowIcon direction="left" />
                                    </motion.button>
                                    <motion.button
                                        type="button"
                                        aria-label="Next"
                                        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black shadow-2xl hover:shadow-3xl pointer-events-auto backdrop-blur-sm"
                                        whileHover={{ 
                                            scale: 1.15, 
                                            backgroundColor: "#fbbf24" 
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={nextSlide}
                                    >
                                        <ArrowIcon direction="right" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content - Right on desktop, Bottom on mobile */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="text-center lg:text-left"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <motion.h3 
                                    className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {currentItem.title}
                                </motion.h3>
                                <motion.p 
                                    className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {currentItem.description}
                                </motion.p>

                                {/* Modern CTA Button */}
                                <motion.div
                                    className="flex justify-center lg:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <motion.button
                                        type="button"
                                        className="group relative inline-flex items-center gap-4 rounded-full px-8 py-4 font-semibold text-lg shadow-2xl overflow-hidden"
                                        style={{ 
                                            backgroundColor: "var(--brand-yellow)", 
                                            color: "var(--on-brand)" 
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 8px 25px rgba(251, 191, 36, 0.3)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                                        
                                        Explore More
                                        <motion.span
                                            aria-hidden="true"
                                            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/20 text-white"
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <ArrowIcon />
                                        </motion.span>
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// Default Unsplash images for demo
const defaultItems: HotItem[] = [
    {
        id: "1",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Mountain Adventure 2024",
        description: "Experience the breathtaking beauty of mountain ranges with our exclusive guided tours and premium outdoor experiences."
    },
    {
        id: "2",
        imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Urban Exploration",
        description: "Discover hidden gems in the heart of the city with our curated urban experiences and cultural immersion programs."
    },
    {
        id: "3",
        imageUrl: "https://images.unsplash.com-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80",
        title: "Nature Escapes",
        description: "Immerse yourself in serene landscapes and reconnect with nature's tranquility through our eco-friendly retreats."
    },
    {
        id: "4",
        imageUrl: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Coastal Journeys",
        description: "Follow the coastline and discover stunning beaches and coastal communities with our expert-guided tours."
    }
]