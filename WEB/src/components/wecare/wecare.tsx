"use client"

import type React from "react"
import Image from "next/image"
import { useCallback, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

type TabKey = "KOTA" | "BIHAR"

const TABS: Array<{ key: TabKey; label: string; igHref: string; imgAlt: string }> = [
    {
        key: "KOTA",
        label: "KOTA",
        igHref: "https://www.instagram.com/explore/tags/kota/",
        imgAlt: "Concert crowd in Kota with confetti and lights",
    },
    {
        key: "BIHAR",
        label: "BIHAR",
        igHref: "https://www.instagram.com/explore/tags/bihar/",
        imgAlt: "Concert crowd in Bihar with stage lighting",
    },
]

export default function Ourwings() {
    const [active, setActive] = useState<TabKey>("KOTA")
    const activeTab = TABS.find((t) => t.key === active) || TABS[0]

    const onKeyTabs = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            const idx = TABS.findIndex((t) => t.key === active)
            if (e.key === "ArrowDown") {
                const next = TABS[(idx + 1) % TABS.length]
                setActive(next.key)
            } else if (e.key === "ArrowUp") {
                const prev = TABS[(idx - 1 + TABS.length) % TABS.length]
                setActive(prev.key)
            }
        },
        [active],
    )

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.6
            }
        }
    }

    return (
        <section
            aria-labelledby="we-care-heading"
            className="relative mx-auto w-full max-w-7xl py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
            <motion.header
                className="mb-12 lg:mb-16 text-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2
                    id="we-care-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight"
                >
                    Our  <span className="text-yellow-400">Wings</span>
                </h2>
                <motion.div
                    aria-hidden="true"
                    className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "6rem" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
            </motion.header>

            <motion.div
                className="rounded-3xl border border-white/20 bg-black/30 p-6 lg:p-8 backdrop-blur-sm"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Main Content - Row layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Vertical Tabs - Left Side */}
                    <motion.div
                        className="lg:w-22 flex lg:flex-col justify-center"
                        variants={itemVariants}
                    >
                        <div
                            className="flex lg:flex-col items-center gap-3 lg:gap-4 rounded-2xl lg:rounded-3xl border border-white/20 bg-black/40 p-3 lg:p-4 backdrop-blur-sm"
                            role="tablist"
                            aria-label="We Care locations"
                            onKeyDown={onKeyTabs}
                        >
                            {TABS.map((t) => {
                                const selected = t.key === active
                                return (
                                    <motion.button
                                        key={t.key}
                                        role="tab"
                                        aria-selected={selected}
                                        aria-controls={`tab-panel-${t.key}`}
                                        id={`tab-${t.key}`}
                                        onClick={() => setActive(t.key)}
                                        className={cn(
                                            "relative rounded-xl lg:rounded-2xl px-6 lg:px-4 py-3 lg:py-6 text-sm font-bold transition-all duration-300 w-full min-w-[120px] lg:min-w-0",
                                            selected
                                                ? "text-gray-100"
                                                : "text-white hover:text-white",
                                        )}
                                        whileHover={{
                                            scale: 1.05,
                                            x: selected ? 0 : -4
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {selected && (
                                            <motion.div
                                                className="absolute inset-0 rounded-xl lg:rounded-2xl bg-yellow-400"
                                                layoutId="activeTab"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                        <span className="relative z-10 mix-blend-exclusion whitespace-nowrap">
                                            {/* Rotated text for vertical tabs on desktop */}
                                            <span className="lg:hidden">{t.label}</span>
                                            <span className="hidden lg:inline-block lg:rotate-180 lg:[writing-mode:vertical-lr]">
                                                {t.label}
                                            </span>
                                        </span>
                                    </motion.button>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Content Area */}
                    <motion.div
                        role="tabpanel"
                        id={`tab-panel-${activeTab.key}`}
                        aria-labelledby={`tab-${activeTab.key}`}
                        className="lg:w-3/4 flex flex-col md:flex-row gap-12 items-center lg:items-start text-center lg:text-left"
                        variants={containerVariants}
                    >
                        {/* Image */}
                        <motion.div
                            className="relative mb-8 w-full max-w-lg overflow-hidden rounded-3xl"
                            variants={imageVariants}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab.key}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src="/placeholder.svg?height=400&width=600&text=Concert+Crowd"
                                        alt={activeTab.imgAlt}
                                        width={600}
                                        height={400}
                                        className="h-auto w-full rounded-3xl shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                                        priority={false}
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    {/* Animated border */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl border-2 border-white/10 pointer-events-none"
                                        animate={{
                                            boxShadow: [
                                                "0 0 20px rgba(255,255,255,0.1)",
                                                "0 0 30px rgba(255,255,255,0.2)",
                                                "0 0 20px rgba(255,255,255,0.1)"
                                            ]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        {/* Content below image */}
                        <div className="w-full max-w-lg">
                            {/* Modern View Page Button */}
                            <motion.a
                                href={activeTab.igHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 font-bold text-black shadow-2xl shadow-yellow-500/20 transition-all duration-300 hover:shadow-yellow-500/40 hover:gap-4 active:scale-95"
                                aria-label={`Open Instagram page for ${activeTab.label} in new tab`}
                                whileHover={{
                                    scale: 1.05,
                                    y: -2
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative">
                                    View Instagram Page
                                </span>
                                <motion.span
                                    className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/20"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M9 5l7 7-7 7"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.span>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-full bg-yellow-400 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                            </motion.a>

                            {/* Description */}
                            <motion.p
                                className="mt-8 text-lg leading-relaxed text-white/80 max-w-3xl"
                                variants={itemVariants}
                            >
                                Morbi non aliquam libero, eu aliquet erat. Nulla sed elementum nulla. Donec elit ligula.
                                Discover amazing events and experiences in {activeTab.label} that bring communities together
                                through music, culture, and shared moments.
                            </motion.p>

                            {/* Additional Info */}
                            <motion.div
                                className="mt-6 flex flex-wrap gap-4 text-sm text-white/60"
                                variants={itemVariants}
                            >
                                <span className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                                    Live Events
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                                    Community Focus
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                                    Cultural Experiences
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}