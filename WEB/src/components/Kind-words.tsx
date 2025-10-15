"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Testimonial = {
    name: string
    quote: string
    avatar: string
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Jane Doe",
        quote: "I never knew a sneaker could change my world until I slipped into my EcoFab pair. It's like walking on clouds, with every step feeling lighter and more stylish — something I proudly wear everywhere I go.",
        avatar: "/portrait-avatar-woman.jpg",
    },
    {
        name: "Rohan Khan",
        quote: "The build quality is insane. After weeks of daily use, they still look fresh. Comfort meets durability — exactly what I wanted.",
        avatar: "/portrait-avatar-man.jpg",
    },
    {
        name: "Amelia Park",
        quote: "From the moment I put them on, I forgot I was wearing shoes. Effortless comfort and clean design that goes with anything.",
        avatar: "/portrait-avatar.png",
    },
]

export default function KindWords() {
    const [index, setIndex] = useState(0)
    const timerRef = useRef<number | null>(null)
    const items = useMemo(() => TESTIMONIALS, [])

    useEffect(() => {
        // autoplay every 4 seconds
        timerRef.current = window.setInterval(() => {
            setIndex((i) => (i + 1) % items.length)
        }, 4000)
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current)
        }
    }, [items.length])

    function onManual(direction: "prev" | "next") {
        if (timerRef.current) window.clearInterval(timerRef.current)
        setIndex((i) => {
            if (direction === "next") return (i + 1) % items.length
            return (i - 1 + items.length) % items.length
        })
    }

    // Animation variants
    const cardVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6
            }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6
            }
        })
    }

    const [[page, direction], setPage] = useState([0, 0])

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
        if (newDirection > 0) {
            onManual("next")
        } else {
            onManual("prev")
        }
    }

    return (
        <section aria-label="Kind Words" className="relative mx-auto w-full max-w-[min(92vw,720px)] px-4 py-16">
            <motion.header
                className="mb-12 text-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-pretty text-2xl font-bold tracking-wide text-white md:text-3xl">KIND WORDS</h2>
                <motion.div
                    className="mx-auto mt-3 h-1 w-96 rounded-full bg-[var(--brand-yellow)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: 92 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
            </motion.header>

            {/* Enhanced layered card stack background with rounded sides */}
            <div className="pointer-events-none relative mx-auto mb-8 w-full max-w-lg">
                {/* Bottom cards with rounded side effects */}
                <motion.div
                    className="absolute left-1/2 top-1/2 -z-10 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-2xl border-2 border-white/20 bg-black/20 backdrop-blur-sm"
                    animate={{
                        y: [0, -5, 0],
                        rotate: [-8, -10, -8]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute left-1/2 top-1/2 -z-10 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[4deg] rounded-2xl border-2 border-white/15 bg-black/15 backdrop-blur-sm"
                    animate={{
                        y: [0, -3, 0],
                        rotate: [4, 6, 4]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
                <motion.div
                    className="absolute left-1/2 top-1/2 -z-10 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] rounded-2xl border-2 border-white/10 bg-black/10 backdrop-blur-sm"
                    animate={{
                        y: [0, -2, 0],
                        rotate: [12, 14, 12]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                {/* SVG background effects */}
                <svg className="absolute inset-0 -z-20 h-full w-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="var(--brand-yellow)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="var(--brand-yellow)" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <ellipse cx="50" cy="50" rx="40" ry="20" fill="url(#glow)" />
                </svg>
            </div>

            <div className="relative">
                {/* Main slider viewport */}
                <div className="relative min-h-[240px]">
                    <AnimatePresence mode="popLayout" custom={direction}>
                        <motion.article
                            key={index}
                            custom={direction}
                            variants={cardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            aria-roledescription="slide"
                            className="grid grid-cols-[auto_1fr] items-center gap-6 rounded-2xl border border-white/20 bg-black/40 p-6 shadow-2xl backdrop-blur-sm"
                        >
                            {/* Avatar with enhanced styling */}
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            >
                                <img
                                    src={items[index].avatar || "/placeholder.svg"}
                                    alt={`${items[index].name} avatar`}
                                    className="h-20 w-20 rounded-full object-cover ring-2 ring-[var(--brand-yellow)] md:h-24 md:w-24"
                                />
                                {/* Active indicator */}
                                <motion.div
                                    className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[var(--brand-yellow)]"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>

                            {/* Content */}
                            <div className="min-w-0">
                                <h3 className="text-sm font-extrabold tracking-wide text-white md:text-base">
                                    {items[index].name.toUpperCase()}
                                </h3>
                                <motion.p
                                    className="mt-3 text-sm leading-6 text-white/80 md:text-[15px]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    "{items[index].quote}"
                                </motion.p>
                            </div>

                            {/* Enhanced decorative elements */}
                            <motion.span
                                aria-hidden
                                className="absolute -left-2 -top-2 text-[var(--brand-yellow)] text-xl"
                                animate={{ rotate: [0, 180, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                {"✦"}
                            </motion.span>
                            <motion.span
                                aria-hidden
                                className="absolute -right-2 -bottom-2 text-[var(--brand-yellow)] text-xl"
                                animate={{ rotate: [360, 180, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                {"✦"}
                            </motion.span>

                            {/* Quote marks */}
                            <motion.div
                                className="absolute -left-3 -top-3 text-4xl text-[var(--brand-yellow)] opacity-50"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                "
                            </motion.div>
                        </motion.article>
                    </AnimatePresence>
                </div>

                {/* Enhanced controls */}
                <motion.div
                    className="mt-8 flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        type="button"
                        aria-label="Previous testimonial"
                        onClick={() => paginate(-1)}
                        className="rounded-full border border-white/30 bg-black/40 p-3 text-white backdrop-blur-sm transition-all hover:bg-[var(--brand-yellow)] hover:text-black hover:border-[var(--brand-yellow)]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    {/* Progress indicators */}
                    <div className="flex gap-2">
                        {items.map((_, i) => (
                            <motion.button
                                key={i}
                                onClick={() => setIndex(i)}
                                className="focus:outline-none"
                                aria-label={`Go to testimonial ${i + 1}`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.div
                                    className={`h-2 rounded-full transition-all ${i === index
                                            ? "bg-[var(--brand-yellow)] w-6"
                                            : "bg-white/30 w-2 hover:bg-white/50"
                                        }`}
                                    initial={{ width: i === index ? 24 : 8 }}
                                    animate={{ width: i === index ? 24 : 8 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                />
                            </motion.button>
                        ))}
                    </div>

                    <motion.button
                        type="button"
                        aria-label="Next testimonial"
                        onClick={() => paginate(1)}
                        className="rounded-full border border-white/30 bg-black/40 p-3 text-white backdrop-blur-sm transition-all hover:bg-[var(--brand-yellow)] hover:text-black hover:border-[var(--brand-yellow)]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}