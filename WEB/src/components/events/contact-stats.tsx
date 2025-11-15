'use client'

export function ContactStats() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      {/* Contact Button */}
      <div className="flex justify-center mb-12">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-mono font-bold px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2">
          Contact Us
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V2m-4 8l4-4m0 0l-4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </button>
      </div>

      {/* Stats Box with Glowing Yellow Border */}
      <div className="relative mb-16">
        {/* Horizontal yellow lines */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        
        <div className="relative bg-black border-2 border-yellow-400 rounded-lg px-8 py-6 shadow-[0_0_30px_rgba(250,204,21,0.5)]">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-mono font-bold text-white mb-2">200+</p>
              <p className="text-sm font-mono text-yellow-400 uppercase tracking-widest">Sponsors</p>
            </div>
            <div className="border-l border-r border-yellow-400/30">
              <p className="text-3xl font-mono font-bold text-white mb-2">100000+</p>
              <p className="text-sm font-mono text-yellow-400 uppercase tracking-widest">Attendees</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-bold text-white mb-2">150+</p>
              <p className="text-sm font-mono text-yellow-400 uppercase tracking-widest">Artists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
