'use client'

import Image from 'next/image'

export function PastEvents() {
  const events = [
    { id: 1, image: '/concert-event.jpg' },
    { id: 2, image: '/music-festival.jpg' },
    { id: 3, image: '/stage-lights.jpg' },
    { id: 4, image: '/crowd-performance.jpg' },
    { id: 5, image: '/live-music.jpg' },
    { id: 6, image: '/concert-event.jpg' },
    { id: 7, image: '/music-festival.jpg' },
    { id: 8, image: '/stage-lights.jpg' },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-black">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-mono font-bold text-white uppercase tracking-widest mb-4">
          Our Past Events
        </h2>
        <div className="w-32 h-px bg-yellow-400/50 mx-auto"></div>
      </div>

      {/* CSS Auto-scrolling Container */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

        <div className="flex animate-scroll hover:pause">
          {[...events, ...events].map((event, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 mx-3 w-40 aspect-square rounded-2xl border-3 border-yellow-400 overflow-hidden relative group hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105"
            >
              {/* Social Icons */}
              <div className="absolute top-3 left-3 z-20 flex gap-2">
                <div className="bg-yellow-400 text-black p-1.5 rounded text-xs font-bold">
                  f
                </div>
                <div className="bg-yellow-400 text-black p-1.5 rounded text-xs font-bold">
                  in
                </div>
                <div className="bg-yellow-400 text-black p-1.5 rounded text-xs font-bold">
                  Y
                </div>
              </div>

              {/* Event Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 to-black/80 flex items-center justify-center">
                <span className="text-white/80 font-mono text-sm text-center">
                  Event {event.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}