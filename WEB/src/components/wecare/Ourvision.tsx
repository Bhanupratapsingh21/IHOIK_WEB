export default function GetInvolved() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono tracking-wider">
            GET INVOLVED
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Image Container with Decorative Stars */}
        <div className="relative mb-12">
          {/* Top Right Star */}
          <div className="absolute -top-4 -right-4 z-10">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="12,2 15.09,10.26 24,10.35 17.77,16.01 19.88,24.46 12,18.79 4.12,24.46 6.23,16.01 0,10.35 8.91,10.26" />
            </svg>
          </div>

          {/* Bottom Left Star */}
          <div className="absolute -bottom-4 -left-4 z-10">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <polygon points="12,2 15.09,10.26 24,10.35 17.77,16.01 19.88,24.46 12,18.79 4.12,24.46 6.23,16.01 0,10.35 8.91,10.26" />
            </svg>
          </div>

          {/* Image Frame */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AYqjbjNcUFswDTnz86sLOybuL5u51M.png"
            alt="Team member working on laptop"
            className="w-full rounded-3xl border-2 border-gray-600 object-cover aspect-[3/4]"
          />
        </div>

        {/* Description Text */}
        <p className="text-center font-mono text-white text-lg md:text-xl font-mono leading-relaxed max-w-xl mx-auto">
          JOIN HANDS TO UPLIFT LIVES, EMPOWER COMMUNITIES, AND BUILD LASTING CHANGE TOGETHER.
        </p>
      </div>
    </section>
  )
}
