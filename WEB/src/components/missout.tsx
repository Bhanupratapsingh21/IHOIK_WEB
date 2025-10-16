"use client";
import { motion } from "framer-motion";

// YouTube video data
const VIDEOS = [
  { youtubeId: "nTFZ4qIwEUQ", title: "Kota's Success Story" },
  { youtubeId: "ysf0iEP36n8", title: "Coaching Methodology" },
  { youtubeId: "_ArG-YSfjU8", title: "Client Transformation" },
  { youtubeId: "aWd0tGh4Q3k", title: "Mindset Mastery" },
  { youtubeId: "i1km7gB_zcg", title: "Goal Setting Strategies" },
  { youtubeId: "Eb-knD5JNLM", title: "Overcoming Challenges" },
  { youtubeId: "c2oybPgLH9Y", title: "Kota's Success Story" },
  { youtubeId: "XbkW5lHIhHA", title: "Coaching Methodology" },
  { youtubeId: "8ev1cFD66Mw", title: "Client Transformation" },
  { youtubeId: "2XvvWYN63kM", title: "Mindset Mastery" },
];

export const AutoScrollYouTube = () => {
  // Duplicate videos for seamless loop
  const duplicatedVideos = [...VIDEOS, ...VIDEOS, ...VIDEOS];

  return (
    <div className="w-full py-20 bg-black overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FEATURED <span className="text-yellow-400">VIDEOS</span>
        </motion.h2>
        <motion.div
          className="mx-auto h-1 w-24 rounded-full bg-yellow-400"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </div>

      {/* First Line - Auto Scroll Left */}
      <div className="mb-8 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -3840], // Increased distance for smoother loop
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60, // Slower duration for better visibility
              ease: "linear",
            },
          }}
        >
          {duplicatedVideos.map((video, idx) => (
            <motion.div
              key={`first-${video.youtubeId}-${idx}`}
              className="flex-shrink-0 w-80 md:w-96 group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                {/* YouTube Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt=""
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-yellow-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Line - Auto Scroll Right */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [-3840, 0], // Reverse direction
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
        >
          {duplicatedVideos.map((video, idx) => (
            <motion.div
              key={`second-${video.youtubeId}-${idx}`}
              className="flex-shrink-0 w-80 md:w-96 group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                {/* YouTube Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt=""
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
          Visit Our YouTube Channel
        </motion.a>
      </motion.div>
    </div>
  );
};

// Alternative: Simple Horizontal Scroll (No Auto-scroll)
export const HorizontalYouTube = () => {
  return (
    <div className="w-full py-20 bg-black overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FEATURED <span className="text-yellow-400">VIDEOS</span>
        </motion.h2>
        <motion.div
          className="mx-auto h-1 w-24 rounded-full bg-yellow-400"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-8 gap-6 px-4 hide-scrollbar">
        {VIDEOS.map((video, idx) => (
          <motion.div
            key={`scroll-${video.youtubeId}-${idx}`}
            className="flex-shrink-0 w-80 md:w-96 group cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-900">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt=""
                className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-yellow-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// Usage:
/*
import { AutoScrollYouTube, HorizontalYouTube } from '@/components/YouTubeScroll';

export default function VideosPage() {
  return (
    <div>
      <AutoScrollYouTube /> {/* Working auto-scroll version * /}
      {/* or * /}
      <HorizontalYouTube /> {/* Manual horizontal scroll version * /}
    </div>
  );
}
*/