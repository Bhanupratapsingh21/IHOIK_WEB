"use client"

import { Instagram, Youtube, Award, Trophy, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function Achievements() {
    return (
        <section 
            aria-labelledby="achievements-heading" 
            className="w-full bg-black text-white py-16 md:py-24 lg:py-32 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-400/10 rounded-full blur-2xl" />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <motion.header 
                    className="mb-12 md:mb-16 lg:mb-20 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2
                        id="achievements-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        OUR <span className="text-yellow-400">ACHIEVEMENTS</span>
                    </h2>
                    <motion.div
                        aria-hidden="true"
                        className="mx-auto h-1 w-24 rounded-full bg-yellow-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                </motion.header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Side - Emblem & Award */}
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Enhanced Emblem */}
                        <div className="relative inline-block">
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <svg
                                    role="img"
                                    aria-label="Handshake award emblem"
                                    width="200"
                                    height="200"
                                    viewBox="0 0 200 200"
                                    className="drop-shadow-[0_0_30px_rgba(255,212,0,0.3)]"
                                >
                                    <defs>
                                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#FFD700" />
                                            <stop offset="50%" stopColor="#FFA500" />
                                            <stop offset="100%" stopColor="#FF8C00" />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    
                                    <g fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        {/* Animated Rays */}
                                        <g stroke="url(#goldGradient)" filter="url(#glow)">
                                            <motion.path 
                                                d="M100 20 v15"
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <motion.path 
                                                d="M130 28 l-7 12"
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                                            />
                                            <motion.path 
                                                d="M70 28 l7 12"
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                                            />
                                            <motion.path 
                                                d="M152 50 l-12 7"
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                                            />
                                            <motion.path 
                                                d="M48 50 l12 7"
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
                                            />
                                        </g>
                                        
                                        {/* Laurels */}
                                        <g stroke="url(#goldGradient)">
                                            <path d="M60 110c-12-9-18-22-18-36 0-5 0-9 1-12" />
                                            <path d="M140 110c12-9 18-22 18-36 0-5 0-9-1-12" />
                                        </g>
                                        
                                        {/* Pedestal */}
                                        <g stroke="url(#goldGradient)">
                                            <rect x="75" y="135" width="50" height="8" rx="4" />
                                            <rect x="65" y="147" width="70" height="8" rx="4" />
                                            <rect x="55" y="159" width="90" height="8" rx="4" />
                                        </g>
                                        
                                        {/* Hands */}
                                        <g stroke="#ffffff" strokeWidth="2.5">
                                            <path d="M75 110 l18 -14 c7-6 15-6 20 0 l8 7" />
                                            <path d="M125 108 l-9 8 c-7 6 -15 6 -21 0 l-7 -6" />
                                            <path d="M77 106 l-9 -14 c-4 -5 -2 -11 2 -14 l9 -7 c5 -4 11 -2 14 2 l8 12" />
                                            <path d="M123 106 l9 -14 c4 -5 2 -11 -2 -14 l-9 -7 c-5 -4 -11 -2 -14 2 l-8 12" />
                                        </g>
                                    </g>
                                </svg>
                            </motion.div>

                            {/* Floating Stars */}
                            <motion.div
                                className="absolute -top-2 -right-2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-2 -left-2"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            >
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            </motion.div>
                        </div>

                        {/* Award Text with Trophy on Top */}
                        <motion.div 
                            className="mt-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {/* Trophy Icon - Positioned above the text */}
                            <motion.div
                                className="flex justify-center mb-4"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Trophy className="w-12 h-12 text-yellow-400" />
                            </motion.div>
                            
                            {/* Award Text */}
                            <p className="text-lg font-semibold text-yellow-400 mb-2">AWARD WINNING</p>
                            <p className="text-xl md:text-2xl font-bold text-white mb-2">
                                MOST PROMISING CONSUMER STARTUP
                            </p>
                            <p className="text-gray-300 text-sm md:text-base tracking-wider">
                                BY AMAZON • 2024
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Stats & Social */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-12">
                            {[
                                { number: "50K+", label: "Happy Customers", icon: "👥" },
                                { number: "100+", label: "Projects", icon: "🚀" },
                                { number: "25+", label: "Awards Won", icon: "🏆" },
                                { number: "5★", label: "Rating", icon: "⭐" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <div className="text-2xl mb-1">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Media Section */}
                        <motion.div
                            className="text-center lg:text-left"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                JOIN OUR <span className="text-yellow-400">COMMUNITY</span>
                            </h3>
                            <motion.div
                                aria-hidden="true"
                                className="h-1 w-20 bg-yellow-400 rounded-full mb-6 mx-auto lg:mx-0"
                                initial={{ width: 0 }}
                                whileInView={{ width: "5rem" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            />
                            
                            <p className="text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
                                Follow us on social media for the latest updates, behind-the-scenes content, and exclusive announcements.
                            </p>

                            {/* Enhanced Social Buttons */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {[
                                    { platform: "Instagram", icon: Instagram, href: "https://instagram.com/", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
                                    { platform: "YouTube", icon: Youtube, href: "https://youtube.com/", color: "bg-gradient-to-r from-red-500 to-red-600" },
                                    { platform: "Instagram", icon: Instagram, href: "https://instagram.com/", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
                                    { platform: "YouTube", icon: Youtube, href: "https://youtube.com/", color: "bg-gradient-to-r from-red-500 to-red-600" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={`${social.platform}-${index}`}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl text-white font-semibold transition-all duration-300 ${social.color} shadow-lg hover:shadow-xl`}
                                        whileHover={{ 
                                            scale: 1.05,
                                            y: -2
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                        <span>{social.platform}</span>
                                        
                                        {/* Hover Shine Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}