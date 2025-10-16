"use client";
import Image from "next/image";
import Story from '@/components/story.svg';
import { motion } from "framer-motion";

export default function OurStory() {
    return (
        <section
            id="our-story"
            aria-labelledby="our-story-title"
            className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
        >
            {/* Container with max width for larger screens */}
            <div className="mx-auto w-full max-w-7xl">
                {/* Responsive grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

                    {/* Text Content - Left side on desktop, top on mobile */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <motion.h2
                            id="our-story-title"
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Our <span className="text-yellow-400">Story</span>
                        </motion.h2>

                        <motion.div
                            className="h-1 bg-yellow-400 rounded-full mb-6 lg:mb-8 mx-auto lg:mx-0"
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        />

                        <motion.p
                            className="text-lg sm:text-xl lg:text-xl text-gray-300 leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Discover the journey behind our passion and commitment to excellence.
                            From humble beginnings to becoming a trusted name in the industry.
                        </motion.p>

                        <motion.p
                            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Our story is one of innovation, dedication, and a relentless pursuit
                            of quality that drives everything we do.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-xl">
                                Learn More
                            </button>
                            <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                                Watch Video
                            </button>
                        </motion.div>
                    </div>

                    {/* SVG Image - Right side on desktop, bottom on mobile */}
                    <motion.div
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                            <Story
                                className="w-full md:h-auto  drop-shadow-2xl"
                            />

                            {/* Optional decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl" />
                        </div>
                    </motion.div>
                </div>

                {/* Additional Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-24 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, staggerChildren: 0.1 }}
                >
                    {[
                        { number: "5+", label: "Years Experience" },
                        { number: "500+", label: "Projects Completed" },
                        { number: "98%", label: "Client Satisfaction" },
                        { number: "24/7", label: "Support" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center p-4 lg:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255,255,255,0.1)",
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-white/70 text-sm lg:text-base">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}


/*

<div className="mt-8">
                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 bg-yellow-400 font-semibold text-primary-white transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            Read More
                            <span
                                aria-hidden="true"
                                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-background text-primary"
                            >
                                →
                            </span>
                        </a>
                    </div>
*/