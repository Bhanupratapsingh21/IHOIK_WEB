'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const profiles = [
    {
        id: 1,
        name: 'Artist One',
        image: '/artist-profile-purple.jpg',
    },
    {
        id: 2,
        name: 'Raja Kumari',
        image: '/woman-orange-jacket-performer.jpg',
    },
    {
        id: 3,
        name: 'Artist Three',
        image: '/artist-profile-blue.jpg',
    },
];

export default function Whowillbethere() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === profiles.length - 1 ? 0 : prev + 1));
    };

    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
            {/* Title */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <span className="text-yellow-400">IOHIK</span> <span className="text-yellow-400">2025</span>
                </h1>
            </div>

            {/* Question Box */}
            <div className="mb-16">
                <div className="bg-white px-8 py-3 rounded-lg shadow-lg">
                    <p className="text-black text-lg font-semibold">Who will be there with you?</p>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="flex items-center justify-center gap-8 mb-16 w-full max-w-4xl">
                {/* Left Navigation */}
                <button
                    onClick={handlePrev}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded flex-shrink-0 transition"
                    aria-label="Previous profile"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Carousel */}
                <div className="flex items-center justify-center gap-4 flex-1">
                    {/* Left Image - Faded */}
                    <div className="hidden md:flex flex-col items-center opacity-40 scale-75">
                        <div className="w-40 h-48 rounded-2xl overflow-hidden border-4 border-yellow-400 mb-4">
                            <img
                                src={profiles[(currentIndex - 1 + profiles.length) % profiles.length].image || "/placeholder.svg"}
                                alt="Previous profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Center Image - Active */}
                    <div className="flex flex-col items-center">
                        <div className="w-56 h-64 rounded-2xl overflow-hidden border-4 border-yellow-400 mb-6 shadow-2xl">
                            <img
                                src={profiles[currentIndex].image || "/placeholder.svg"}
                                alt={profiles[currentIndex].name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-white text-2xl font-bold">{profiles[currentIndex].name}</p>
                    </div>

                    {/* Right Image - Faded */}
                    <div className="hidden md:flex flex-col items-center opacity-40 scale-75">
                        <div className="w-40 h-48 rounded-2xl overflow-hidden border-4 border-yellow-400 mb-4">
                            <img
                                src={profiles[(currentIndex + 1) % profiles.length].image || "/placeholder.svg"}
                                alt="Next profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Navigation */}
                <button
                    onClick={handleNext}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded flex-shrink-0 transition"
                    aria-label="Next profile"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Live Soon Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg flex items-center gap-3 transition">
                <span>LIVE SOON</span>
                <Play size={16} fill="currentColor" />
            </button>
        </main>
    );
}
