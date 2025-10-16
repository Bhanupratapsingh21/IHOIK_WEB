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
            boxShadow: "0 25px 50px rgba(255,193,7,0.15)",
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
            className="relative mx-auto w-full max-w-7xl py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
        >
            {/* Header */}
            <motion.header
                className="mb-16 lg:mb-20 text-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2
                    id="advertise-heading"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                    ADVERTISE <span className="text-yellow-400">WITH US</span>
                </h2>
                <motion.div
                    aria-hidden="true"
                    className="mx-auto h-1 w-32 rounded-full bg-yellow-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "8rem" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
                <motion.p
                    className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    Join the brands that trust us to deliver exceptional advertising results
                </motion.p>
            </motion.header>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Banner Image - 16:9 Aspect Ratio */}
                <motion.div
                    className="mb-16 lg:mb-20 overflow-hidden rounded-3xl shadow-2xl"
                    variants={bannerVariants}
                >
                    <div className="relative aspect-video w-full">
                        <img
                            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            alt="Modern advertising platform showing analytics and digital marketing"
                            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />

                        {/* Banner text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="text-center text-white px-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                    Amplify Your <span className="text-yellow-400">Brand</span>
                                </h3>
                                <p className="text-xl sm:text-2xl lg:text-3xl opacity-90 max-w-4xl mx-auto font-light">
                                    Reach millions of engaged users with our premium advertising solutions
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    className="mb-16 lg:mb-20"
                    variants={containerVariants}
                >
                    <motion.h3
                        className="text-center text-3xl sm:text-4xl font-bold text-white mb-16"
                        variants={itemVariants}
                    >
                        Why Choose <span className="text-yellow-400">Our Platform?</span>
                    </motion.h3>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
                            {BENEFITS.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    className={cn(
                                        "group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 p-8 backdrop-blur-sm",
                                        "hover:border-yellow-400/30 hover:bg-black/60 transition-all duration-500 cursor-pointer",
                                        "hover:transform hover:scale-105"
                                    )}
                                    variants={cardVariants}
                                    whileHover="hover"
                                >
                                    {/* Background pattern */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/5" />
                                    </div>

                                    {/* Icon */}
                                    <motion.div
                                        className="text-4xl mb-4 relative z-10"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                    >
                                        {benefit.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Hover border effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl border-2 border-yellow-400 opacity-0 group-hover:opacity-20"
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
                        className="inline-flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between rounded-3xl border border-white/20 bg-gradient-to-r from-black/40 to-black/20 p-8 lg:p-12 backdrop-blur-sm max-w-6xl w-full"
                        whileHover={{
                            boxShadow: "0 25px 50px rgba(255,193,7,0.1)",
                            borderColor: "rgba(255,193,7,0.2)",
                            scale: 1.02
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                Ready to <span className="text-yellow-400">Get Started?</span>
                            </h3>
                            <p className="text-gray-300 text-lg max-w-md">
                                Join hundreds of successful brands already growing with our advertising platform
                            </p>
                        </div>

                        <motion.button
                            className="group relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-10 py-5 font-bold text-black shadow-2xl shadow-yellow-500/30 min-w-[220px] justify-center overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 30px 60px rgba(255,193,7,0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />

                            <span className="text-lg font-bold relative z-10">Get In Touch</span>
                            <motion.span
                                className="relative z-10"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>

                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                >
                    {[
                        { number: "500+", label: "Brands Trust Us" },
                        { number: "2M+", label: "Monthly Reach" },
                        { number: "85%", label: "Success Rate" },
                        { number: "24/7", label: "Expert Support" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5"
                            variants={itemVariants}
                            whileHover={{
                                y: -5,
                                backgroundColor: "rgba(255,193,7,0.05)",
                                borderColor: "rgba(255,193,7,0.2)"
                            }}
                        >
                            <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-300 text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}