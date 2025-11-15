"use client"

import { PlayButton } from "./play-button"

export default function HeroSection() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-black to-black">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-transparent to-blue-950/30 opacity-80" />
            </div>

            {/* Hero image - main focal point */}
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6wNJ4XLgfjHXgE5h2Uz6npA2wIIIa5.png"
                    alt="Epic sci-fi cast"
                    className="w-full h-full object-cover opacity-90"
                />
            </div>

            {/* Vignette effect - darkens edges */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60" />

            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20">
                {/* CTA Button */}
                <PlayButton />

                {/* Animated glow effect around button */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-20 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Top accent bars */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />

            {/* Side accent lines */}
            <div className="absolute top-1/3 left-0 w-1 h-32 bg-gradient-to-b from-red-500 to-transparent opacity-60" />
            <div className="absolute top-1/2 right-0 w-1 h-40 bg-gradient-to-b from-blue-500 to-transparent opacity-60" />
        </div>
    )
}
