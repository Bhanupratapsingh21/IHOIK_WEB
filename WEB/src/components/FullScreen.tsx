"use client";

import { useState } from "react";

interface FullScreenVideoProps {
    videoId: string;
    title?: string;
    description?: string;
    autoPlay?: boolean;
    muted?: boolean;
    controls?: boolean;
}

export const FullScreenVideo = ({
    videoId,
    autoPlay = true,
    muted = true,
    controls = true,
}: FullScreenVideoProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="w-full bg-black">
            {/* Text Section - Outside/Above Video */}
            <div className="relative py-16 px-8 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-2 tracking-wider">EXCLUSIVE CONTENT</h2>
                    <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8" />


                </div>
            </div>

            {/* Video Section - Full Screen */}
            <section className="relative w-full h-screen bg-black">
                <div className="relative w-full h-full">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&modestbranding=1&rel=0`}
                        title={videoId}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        onLoad={() => setIsLoaded(true)}
                    />

                    {!isLoaded && (
                        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                            <div className="text-white text-lg">Loading...</div>
                        </div>
                    )}
                </div>

                {/* Gradient overlays for cinematic effect */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
            </section>
        </div>
    );
};

// Alternative with text on top but within the same section
export const FullScreenVideoWithOverlayText = ({
    videoId,
    title = "Exclusive Content",
    description = "",
}: {
    videoId: string;
    title?: string;
    description?: string;
}) => {
    return (
        <div className="w-full bg-black">
            {/* Text Overlay Section - Fixed on top */}
            <div className="fixed top-0 left-0 right-0 z-50 py-8 px-8 bg-gradient-to-b from-black/90 to-transparent">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-wider">EXCLUSIVE CONTENT</h2>
                    <div className="w-32 h-1 bg-yellow-400 mx-auto mb-4" />
                    <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
                    {description && (
                        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {/* Video Section */}
            <section className="relative w-full h-screen bg-black pt-32">
                <div className="relative w-full h-full">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>
            </section>
        </div>
    );
};

// Component with text above video (most common approach)
export const VideoWithHeader = ({
    videoId,
    title = "Raja Kumari",
    year = "Allasi 2024",
    description = "Morbi non aliquam libero, eu aliquot eget. Nulla sed elementum nulla. Donec nisi blandit.",
}: {
    videoId: string;
    title?: string;
    year?: string;
    description?: string;
}) => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-black">
            {/* Header Section - Above Video */}
            <div className="relative z-10 pt-20 pb-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-2 tracking-wider">EXCLUSIVE CONTENT</h2>
                        <div className="w-32 h-1 bg-yellow-400 mx-auto" />
                    </div>

                    {/* Content Info */}
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-2">{year}</h3>
                        <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">{description}</p>

                        {/* Action Buttons */}
                        <div className="flex justify-center gap-4">
                            <button className="flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                PLAY NOW
                            </button>
                            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-all duration-300 border border-gray-600">
                                MORE INFO
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Section - Below Text */}
            <section className="relative w-full h-screen">
                <div className="relative w-full h-full">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>

                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
                </div>
            </section>
        </div>
    );
};

// Usage Examples:
export const VideoShowcase = () => {
    return (
        <div className="w-full">
            {/* Example 1: Simple text above video */}
            <FullScreenVideo
                videoId="dQw4w9WgXcQ"
                title="Raja Kumari"
                description="Experience the epic journey through ancient kingdoms and modern battles."
            />

            {/* Example 2: With full header section */}
            {/* <VideoWithHeader 
        videoId="dQw4w9WgXcQ"
        title="Raja Kumari"
        year="Allasi 2024"
        description="Morbi non aliquam libero, eu aliquot eget. Nulla sed elementum nulla. Donec nisi blandit."
      /> */}

            {/* Example 3: Fixed overlay text */}
            {/* <FullScreenVideoWithOverlayText 
        videoId="dQw4w9WgXcQ"
        title="Cosmic Edge"
        description="Explore the boundaries of space and time"
      /> */}
        </div>
    );
};