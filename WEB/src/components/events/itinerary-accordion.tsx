'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const itineraryData = [
  { day: 'DAY 1', content: 'Opening ceremony and welcome reception' },
  { day: 'DAY 2', content: 'Main event and key presentations' },
  { day: 'DAY 3', content: 'Closing ceremony and farewell' },
]

export function ItineraryAccordion() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="w-full max-w-2xl mx-auto py-16">
      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px bg-white/40 flex-1"></div>
        <h2 className="text-2xl font-mono font-bold bg-white text-black px-6 py-2 tracking-widest whitespace-nowrap">
          ITINERARY OF IOHIK
        </h2>
        <div className="h-px bg-white/40 flex-1"></div>
      </div>

      {/* Accordion items */}
      <div className="space-y-8">
        {itineraryData.map((item, idx) => (
          <div key={idx} className="relative">
            {/* Timeline line and connector */}
            {idx !== itineraryData.length - 1 && (
              <div className="absolute left-1/2 top-12 w-px h-8 bg-white/40 -translate-x-1/2"></div>
            )}

            {/* Content container */}
            <button
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="w-full flex items-center justify-between group"
            >
              <div className="text-white font-mono text-lg tracking-wide">{item.day}</div>

              {/* Timeline circle */}
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center">
                <div className="w-px h-4 bg-white/40 absolute top-0"></div>
              </div>

              {/* Dropdown button */}
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg p-2 transition-all duration-300 transform group-hover:scale-110"
              >
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${expanded === idx ? 'rotate-180' : ''}`}
                />
              </button>
            </button>

            {/* Expandable content */}
            {expanded === idx && (
              <div className="mt-4 ml-8 text-white/80 font-mono text-sm">
                {item.content}
              </div>
            )}

            {/* Bottom border line */}
            <div className="mt-4 h-px bg-white/20 w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
