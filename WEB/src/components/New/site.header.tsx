"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function PlusIcon({ className = "size-4" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 5v14M5 12h14" />
        </svg>
    )
}

function CloseIcon({ className = "size-4" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    )
}

export default function SiteHeader() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const firstLinkRef = useRef<HTMLAnchorElement | null>(null)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // lock body scroll when menu open
    useEffect(() => {
        const original = document.body.style.overflow
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = original
        }
        return () => {
            document.body.style.overflow = original
        }
    }, [open])

    // close on Escape and focus first link on open
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false)
        }
        if (open) {
            document.addEventListener("keydown", onKey)
            setTimeout(() => firstLinkRef.current?.focus(), 0)
        }
        return () => document.removeEventListener("keydown", onKey)
    }, [open])

    const menuItems = [
        { label: "Events", href: "/events" },
        { label: "Contact us", href: "/contactus" },
        { label: "About", href: "/about" },
        { label: "Our Productions", href: "/production" },
    ]

    const hotItems = [
        { title: "Summer Festival", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
        { title: "Tech Conference", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
        { title: "Music Awards", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    ]

    // Animation variants
    const overlayVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    }

    const panelVariants = {
        closed: { x: "100%" },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    }

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1 + i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        })
    }

    const hotCardVariants = {
        closed: { opacity: 0, y: 20 },
        open: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6 + i * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        })
    }

    return (
        <>
            <motion.header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? "border-b border-white/20 bg-black/80 backdrop-blur-xl"
                    : "border-b border-white/10 bg-transparent backdrop-blur-md"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="mx-auto flex h-14 sm:h-16 max-w-[min(92vw,1200px)] items-center justify-between px-4 sm:px-6">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="text-balance font-mono text-lg sm:text-xl font-extrabold tracking-wider text-[var(--brand-yellow)] hover:scale-105 transition-transform"
                        aria-label="IOHIK MEDIA Home"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        IOHIK MEDIA
                    </motion.a>

                    {/* Desktop Navigation (hidden on mobile) */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                className="font-mono text-sm text-white/80 hover:text-[var(--brand-yellow)] transition-colors relative group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                                <motion.div
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-yellow)] group-hover:w-full transition-all duration-300"
                                    layoutId="nav-underline"
                                />
                            </motion.a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-haspopup="dialog"
                        aria-expanded={open}
                        aria-controls="site-menu"
                        className="lg:hidden inline-flex items-center justify-center rounded-full bg-[var(--brand-yellow)] p-2.5 text-[var(--on-brand)] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <PlusIcon className="size-5 sm:size-6" />
                        <span className="sr-only">Open menu</span>
                    </motion.button>

                    {/* Desktop CTA Button */}
                    <motion.button
                        className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[var(--brand-yellow)] px-6 py-2.5 font-mono text-sm font-bold text-[var(--on-brand)] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get in Touch
                        <PlusIcon className="size-4" />
                    </motion.button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="site-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Main menu"
                        className="fixed inset-0 z-50 lg:hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            variants={overlayVariants}
                            onClick={() => setOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Panel */}
                        <motion.div
                            className="pointer-events-auto absolute right-0 top-0 h-full w-full max-w-sm bg-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl"
                            variants={panelVariants}
                        >
                            <div className="flex flex-col h-full px-6 py-8">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <span className="font-mono text-lg font-bold text-[var(--brand-yellow)]">
                                            MENU
                                        </span>
                                    </motion.div>
                                    <motion.button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex items-center justify-center rounded-full bg-[var(--brand-yellow)] p-2.5 text-[var(--on-brand)] shadow-lg hover:scale-105 active:scale-95 transition-transform"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <CloseIcon className="size-5" />
                                        <span className="sr-only">Close menu</span>
                                    </motion.button>
                                </div>

                                {/* Navigation */}
                                <nav className="flex-1 space-y-6" aria-label="Primary">
                                    {menuItems.map((item, idx) => (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            ref={idx === 0 ? firstLinkRef : undefined}
                                            custom={idx}
                                            variants={itemVariants}
                                            initial="closed"
                                            animate="open"
                                            className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                                            onClick={() => setOpen(false)}
                                            whileHover={{ x: 8 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <motion.span
                                                className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-yellow)] p-2 text-[var(--on-brand)] shadow-sm"
                                                whileHover={{ scale: 1.1, rotate: 90 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <PlusIcon className="size-4" />
                                            </motion.span>
                                            <span className="font-mono text-lg text-white group-hover:text-[var(--brand-yellow)] transition-colors">
                                                {item.label}
                                            </span>
                                        </motion.a>
                                    ))}
                                </nav>

                                {/* What's Hot Section */}
                                <motion.div
                                    className="mt-8"
                                    initial="closed"
                                    animate="open"
                                    variants={{
                                        closed: { opacity: 0 },
                                        open: {
                                            opacity: 1,
                                            transition: { delay: 0.5 }
                                        }
                                    }}
                                >
                                    <h3 className="font-mono text-sm uppercase tracking-wide text-white/60 mb-4">
                                        What's Hot
                                    </h3>
                                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                                        {hotItems.map((item, index) => (
                                            <motion.div
                                                key={item.title}
                                                custom={index}
                                                variants={hotCardVariants}
                                                className="flex-shrink-0 w-48 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group cursor-pointer"
                                                whileHover={{ scale: 1.05, y: -4 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="relative h-28 bg-gradient-to-br from-[var(--brand-yellow)]/20 to-purple-500/20">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover mix-blend-overlay"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40" />
                                                    <div className="absolute bottom-3 left-3 right-3">
                                                        <h4 className="font-mono text-sm font-bold text-white truncate">
                                                            {item.title}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Footer */}
                                <motion.div
                                    className="mt-8 pt-6 border-t border-white/10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="w-full rounded-xl bg-[var(--brand-yellow)] px-6 py-4 font-mono font-bold text-[var(--on-brand)] shadow-lg hover:scale-105 active:scale-95 transition-transform text-center"
                                    >
                                        Close Menu
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}