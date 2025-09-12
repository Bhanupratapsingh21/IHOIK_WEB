"use client";
import { useState, useEffect, useRef } from "react";

interface VideoItem {
  youtubeId: string;
  title: string;
}

const VIDEOS: VideoItem[] = [
  { youtubeId: "nTFZ4qIwEUQ", title: "CS Explained Video 2" },
  { youtubeId: "ysf0iEP36n8", title: "CS Explained Video 1" },
  { youtubeId: "_ArG-YSfjU8", title: "CS Explained Video 3" },
  { youtubeId: "aWd0tGh4Q3k", title: "CS Explained Video 4" },
  { youtubeId: "i1km7gB_zcg", title: "CS Explained Video 4" },
  { youtubeId: "Eb-knD5JNLM", title: "CS Explained Video 5" }
];

export function VideoCarousel() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const duplicatedVideos = [...VIDEOS, ...VIDEOS];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let speed = 3.0;

    const animate = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += speed;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleVideoClick = (youtubeId: string) => {
    setActiveVideo(activeVideo === youtubeId ? null : youtubeId);
  };

  return (
    <div className="w-full max-w-7xl mx-auto rounded-xl px-4 py-8">
      {/* Continuous scrolling carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-hidden pt-6 rounded-xl space-x-6 scrollbar-hide"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedVideos.map((video, index) => (
          <div
            key={`${video.youtubeId}-${index}`}
            className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[40rem] lg:w-[50rem] transform transition-all duration-300 hover:scale-105"
          >
            <div
              className={`relative bg-black rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 ${activeVideo === video.youtubeId
                ? "ring-4 ring-red-500"
                : "hover:shadow-2xl"
                }`}
              onClick={() => handleVideoClick(video.youtubeId)}
            >
              {/* Video thumbnail with play button */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-purple-900 to-blue-800">
                {activeVideo === video.youtubeId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-90"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                        <svg
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Featured Videos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Watch our latest educational content and tutorials. Click on any
            video to play it.
          </p>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}
