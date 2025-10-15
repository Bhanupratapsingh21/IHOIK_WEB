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

export default function WeCare() {
    const [active, setActive] = useState<TabKey>("KOTA")
    const activeTab = TABS.find((t) => t.key === active) || TABS[0]

    const onKeyTabs = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            const idx = TABS.findIndex((t) => t.key === active)
            if (e.key === "ArrowRight") {
                const next = TABS[(idx + 1) % TABS.length]
                setActive(next.key)
            } else if (e.key === "ArrowLeft") {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
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
            className="relative mx-auto w-full max-w-[min(92vw,720px)] px-4"
        >
            <motion.header
                className="mb-8 text-center"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2
                    id="we-care-heading"
                    className="text-pretty font-mono text-xl font-extrabold tracking-widest text-white md:text-2xl"
                >
                    WE CARE
                </h2>
                <motion.div
                    aria-hidden="true"
                    className="mx-auto mt-3 h-1 w-24 rounded-full bg-[var(--brand-yellow)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
            </motion.header>

            <motion.div
                className="rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-sm md:p-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Centered Tabs */}
                <motion.div
                    className="mb-8 flex justify-center"
                    variants={itemVariants}
                >
                    <div
                        className="flex items-center gap-3 rounded-full border border-white/20 bg-black/40 p-1 backdrop-blur-sm"
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
                                        "relative rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300",
                                        selected
                                            ? "text-gray-100"
                                            : "text-white hover:text-white",
                                    )}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {selected && (
                                        <motion.div
                                            className="absolute inset-0  rounded-full bg-[var(--brand-yellow)]"
                                            layoutId="activeTab"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10  mix-blend-exclusion">
                                        {t.label}
                                    </span>
                                </motion.button>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Card Content */}
                <motion.div
                    role="tabpanel"
                    id={`tab-panel-${activeTab.key}`}
                    aria-labelledby={`tab-${activeTab.key}`}
                    className="flex flex-col items-center text-center"
                    variants={containerVariants}
                >
                    {/* Image */}
                    <motion.div
                        className="relative mb-8 w-full max-w-md overflow-hidden rounded-2xl"
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
                                    className="h-auto w-full rounded-2xl shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-500"
                                    priority={false}
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />

                                {/* Animated border */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none"
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

                    {/* Modern View Page Button */}
                    <motion.a
                        href={activeTab.igHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--brand-yellow)] to-yellow-500 px-8 py-4 font-mono text-sm font-bold text-black shadow-2xl shadow-yellow-500/20 transition-all duration-300 hover:shadow-yellow-500/40 hover:gap-4 active:scale-95"
                        aria-label={`Open Instagram page for ${activeTab.label} in new tab`}
                        whileHover={{
                            scale: 1.05,
                            y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative">
                            View Page
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
                        <div className="absolute inset-0 rounded-full bg-[var(--brand-yellow)] blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                    </motion.a>

                    {/* Description */}
                    <motion.p
                        className="mt-8 max-w-prose text-balance font-mono text-sm leading-relaxed text-white/80"
                        variants={itemVariants}
                    >
                        Morbi non aliquam libero, eu aliquet erat. Nulla sed elementum nulla. Donec elit ligula.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    )
}