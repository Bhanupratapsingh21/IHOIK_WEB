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

    const currentItem = items[currentIndex]

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
    }

    const prevSlide = () => {
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
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
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
                damping: 30
            }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
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
                ease: "easeOut"
            }
        }
    }

    const [[page, direction], setPage] = useState([0, 0])

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
        if (newDirection > 0) {
            nextSlide()
        } else {
            prevSlide()
        }
    }

    return (
        <section
            aria-labelledby="whats-hot-heading"
            className="w-full bg-black mx-auto mt-2 mb-4 sm:mb-8 px-0"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="mx-auto w-full max-w-[min(92vw,720px)]">
                {/* Heading */}
                <motion.header
                    className="text-center mb-5 sm:mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        id="whats-hot-heading"
                        className="text-2xl sm:text-3xl text-white font-extrabold tracking-wide uppercase"
                        style={{ letterSpacing: "0.08em" }}
                    >
                        WHAT'S HOT!
                    </h2>
                    <motion.div
                        aria-hidden="true"
                        className="mx-auto mt-2 h-0.5 w-24 sm:w-full rounded-full"
                        style={{ backgroundColor: "var(--brand-yellow)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                </motion.header>

                {/* Card Stack */}
                <div className="relative mx-auto w-full max-w-[440px]">
                    {/* Back layers with animation */}
                    <motion.div
                        className="pointer-events-none absolute inset-0 -top-3 -z-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.div
                            className="absolute left-6 right-6 top-3 h-[62%] rounded-2xl blur-sm opacity-40"
                            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.1))" }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute left-3 right-3 top-1 h-[68%] rounded-2xl opacity-50"
                            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.12))" }}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />
                    </motion.div>

                    {/* Main image card */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.45)]">
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
                                    className="w-full aspect-[4/3] object-cover rounded-2xl sm:rounded-3xl"
                                    sizes="(min-width: 640px) 440px, 92vw"
                                />
                            </AnimatePresence>

                            {/* Loading shimmer */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                animate={{ x: [-400, 400] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                style={{ display: "none" }} // Remove to see loading effect
                            />
                        </div>

                        {/* Progress indicators */}
                        <div className="flex justify-center mt-4 gap-2">
                            {items.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className="focus:outline-none"
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    <motion.div
                                        className={`h-1.5 rounded-full transition-all ${index === currentIndex
                                            ? "bg-yellow-400"
                                            : "bg-gray-400/50 hover:bg-gray-400"
                                            }`}
                                        initial={{ width: 8 }}
                                        animate={{ width: index === currentIndex ? 24 : 8 }}
                                        whileHover={{ width: 16 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Side arrows */}
                        <div className="absolute inset-y-0 left-[-18px] right-[-18px] flex items-center justify-between">
                            <motion.button
                                type="button"
                                aria-label="Previous"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-black shadow-lg hover:shadow-xl backdrop-blur-sm"
                                style={{ backgroundColor: "var(--brand-yellow)" }}
                                whileHover={{ scale: 1.1, backgroundColor: "var(--brand-yellow)" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => paginate(-1)}
                            >
                                <ArrowIcon direction="left" />
                            </motion.button>
                            <motion.button
                                type="button"
                                aria-label="Next"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-black shadow-lg hover:shadow-xl backdrop-blur-sm"
                                style={{ backgroundColor: "var(--brand-yellow)" }}
                                whileHover={{ scale: 1.1, backgroundColor: "var(--brand-yellow)" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => paginate(1)}
                            >
                                <ArrowIcon direction="right" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Text content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="mt-5 sm:mt-6 text-center"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <h3 className="text-lg sm:text-xl text-white font-semibold">{currentItem.title}</h3>
                        <p className="mt-2 text-sm sm:text-base text-white text-muted-foreground leading-relaxed max-w-[36ch] mx-auto">
                            {currentItem.description}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* CTA */}
                <motion.div
                    className="mt-5 sm:mt-6 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <motion.button
                        type="button"
                        className="inline-flex items-center gap-3 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 font-semibold text-sm sm:text-base shadow-[0_2px_0_rgba(0,0,0,0.25)]"
                        style={{ backgroundColor: "var(--brand-yellow)", color: "var(--on-brand)" }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                            transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore More
                        <motion.span
                            aria-hidden="true"
                            className="inline-flex h-5 w-5 items-center justify-center rounded-full text-white"
                            style={{ backgroundColor: "oklch(0.145 0 0)" }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <ArrowIcon />
                        </motion.span>
                    </motion.button>
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
        description: "Experience the breathtaking beauty of mountain ranges with our exclusive guided tours."
    },
    {
        id: "2",
        imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Urban Exploration",
        description: "Discover hidden gems in the heart of the city with our curated urban experiences."
    },
    {
        id: "3",
        imageUrl: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80",
        title: "Nature Escapes",
        description: "Immerse yourself in serene landscapes and reconnect with nature's tranquility."
    },
    {
        id: "4",
        imageUrl: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        title: "Coastal Journeys",
        description: "Follow the coastline and discover stunning beaches and coastal communities."
    }
]