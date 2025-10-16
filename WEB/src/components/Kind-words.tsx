"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedTestimonials } from "./ui/animated-testimonials"

type Testimonial = {
    name: string
    quote: string
    avatar: string
}

const testimonials = [
    {
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
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

            <AnimatedTestimonials testimonials={testimonials} />;
        </section>
    )
}