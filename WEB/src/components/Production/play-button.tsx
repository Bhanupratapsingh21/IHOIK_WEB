"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export function PlayButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-20 flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black font-bold text-lg rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 active:scale-95"
    >
      <Play size={20} fill="currentColor" className="mr-1" />
      PLAY NOW
    </button>
  )
}
