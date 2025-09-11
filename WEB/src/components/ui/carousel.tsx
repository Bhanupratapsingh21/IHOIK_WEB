"use client";
import { useState } from "react";

// Mock arrow icon
const ArrowIcon = ({ direction, className }: { direction: 'left' | 'right', className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

interface VideoItem {
  youtubeId: string;
  title: string;
}

const VIDEOS: VideoItem[] = [
  {
    youtubeId: "nTFZ4qIwEUQ",
    title: "CS Explained Video 2"
  },
  {
    youtubeId: "ysf0iEP36n8",
    title: "CS Explained Video 1"
  },
  {
    youtubeId: "_ArG-YSfjU8",
    title: "CS Explained Video 3"
  },
  {
    youtubeId: "aWd0tGh4Q3k",
    title: "CS Explained Video 4"
  },
  {
    youtubeId: "i1km7gB_zcg",
    title: "CS Explained Video 4"
  },
  {
    youtubeId: "Eb-knD5JNLM",
    title: "CS Explained Video 5"
  }
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? VIDEOS.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => prev === VIDEOS.length - 1 ? 0 : prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Main carousel container */}
      <div className="relative">
        {/* Video container with aspect ratio */}

        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${VIDEOS[currentIndex].youtubeId}?modestbranding=1&rel=0`}
            title={VIDEOS[currentIndex].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
          aria-label="Previous video"
        >
          <ArrowIcon direction="left" className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
          aria-label="Next video"
        >
          <ArrowIcon direction="right" className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {VIDEOS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentIndex === index
              ? 'bg-red-600'
              : 'bg-gray-300 hover:bg-gray-400'
              }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

export default function VideoSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Videos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Watch our latest educational content and tutorials
          </p>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}