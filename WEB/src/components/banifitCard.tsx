"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface BenefitCard {
    title: string
    description: string
    icon: string
}

const BENEFITS: BenefitCard[] = [
    {
        title: "Proven Recognition",
        description: "Build trust and credibility with our established platform and audience engagement.",
        icon: "🏆"
    },
    {
        title: "Massive Reach",
        description: "Access thousands of potential customers through our extensive network and platforms.",
        icon: "🌐"
    },
    {
        title: "Better Performance",
        description: "Optimized campaigns that deliver measurable results and higher conversion rates.",
        icon: "📈"
    },
    {
        title: "Assured Growth",
        description: "Strategic partnerships that guarantee business expansion and market penetration.",
        icon: "🚀"
    },
    {
        title: "Huge Boost",
        description: "Instant visibility and engagement spikes that propel your brand forward.",
        icon: "⚡"
    },
    {
        title: "Expert Support",
        description: "Dedicated team to help you maximize your advertising potential and ROI.",
        icon: "👥"
    }
]

export default function AdvertiseWithUs() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    }

    const bannerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
            }
        }
    }

    return (
        <section
            ref={ref}
            aria-labelledby="advertise-heading"
            className="relative mx-auto w-full max-w-[min(92vw,1200px)] px-4 py-16"
        >
            {/* Header */}
            <motion.header
                className="mb-12 text-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2
                    id="advertise-heading"
                    className="text-pretty font-mono text-2xl font-extrabold tracking-widest text-white md:text-3xl lg:text-4xl"
                >
                    ADVERTISE WITH US
                </h2>
                <motion.div
                    aria-hidden="true"
                    className="mx-auto mt-4 h-1 w-32 rounded-full bg-[var(--brand-yellow)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: 128 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
            </motion.header>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Banner Image - 16:9 Aspect Ratio */}
                <motion.div
                    className="mb-16 overflow-hidden rounded-2xl shadow-2xl shadow-black/50"
                    variants={bannerVariants}
                >
                    <div className="relative aspect-video w-full">
                        <img
                            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            alt="Modern advertising platform showing analytics and digital marketing"
                            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

                        {/* Banner text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="text-center text-white"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">
                                    Amplify Your Brand
                                </h3>
                                <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                                    Reach millions of engaged users with our premium advertising
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    className="mb-16"
                    variants={containerVariants}
                >
                    <motion.h3
                        className="text-center text-2xl font-bold text-white mb-12 md:text-3xl"
                        variants={itemVariants}
                    >
                        Why Advertise With Us?
                    </motion.h3>

                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-2 max-w-3xl justify-center items-center align-middle md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {BENEFITS.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    className={cn(
                                        "group relative overflow-hidden rounded-2xl w-full text-center border border-white/10 bg-black/30 p-2 backdrop-blur-sm",
                                        "hover:border-white/20 hover:bg-white text-white hover:text-black transition-all duration-300"
                                    )}
                                    variants={cardVariants}
                                    whileHover="hover"
                                >
                                    {/* Background gradient on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-yellow)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Content */}
                                    <h4 className="text-md font-bold  relative z-10">
                                        {benefit.title}
                                    </h4>
                                    {/* Hover border effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl border-2 border-[var(--brand-yellow)] opacity-0 group-hover:opacity-30"
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center"
                    variants={itemVariants}
                >
                    <motion.div
                        className="inline-flex flex-col  sm:flex-row gap-6 items-center justify-center rounded-2xl border border-white/20 bg-black/40 p-8 backdrop-blur-sm"
                        whileHover={{
                            boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
                            borderColor: "rgba(255,255,255,0.3)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Ready to Get Started?
                            </h3>
                            <p className="text-white/80 max-w-md">
                                Join hundreds of successful brands already growing with US
                            </p>
                        </div>

                        <motion.button
                            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--brand-yellow)] to-yellow-500 px-8 py-4 font-bold text-black shadow-2xl shadow-yellow-500/20 min-w-[200px] justify-center"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 25px 50px rgba(255,193,7,0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="font-bold">Get In Touch</span>
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>

                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-full bg-[var(--brand-yellow)] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}