import Image from "next/image"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Main Content */}
        <div className="max-w-6xl w-full">
          {/* Heading Section */}
          <div className="text-center mb-16">
            <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-wider mb-6">OUR VISION</h1>
            <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="font-mono text-lg md:text-xl text-gray-300 tracking-wide">
              TO SPOTLIGHT THE UNTOLD STORIES
            </p>
          </div>

          {/* Main Message Section with Yellow Gradient */}
          <div className="relative mb-16">
            {/* Yellow Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-400/50 to-transparent rounded-2xl transform -skew-x-6" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
              {/* Left Side - Main Text */}
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-5xl md:text-7xl font-black text-black tracking-tight mb-4">
                  THEIR
                </h2>
              </div>

              {/* Right Side - List Items */}
              <div className="flex-1 flex flex-col items-start md:items-end space-y-3 md:space-y-4">
                <span className="text-2xl md:text-3xl font-bold text-black bg-white/90 px-4 py-2 rounded-lg transform hover:scale-105 transition-transform">
                  STRUGGLES
                </span>
                <span className="text-2xl md:text-3xl font-bold text-black bg-white/90 px-4 py-2 rounded-lg transform hover:scale-105 transition-transform">
                  DREAMS
                </span>
                <span className="text-2xl md:text-3xl font-bold text-black bg-white/90 px-4 py-2 rounded-lg transform hover:scale-105 transition-transform md:mr-8">
                  TRIUMPHS!
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative mb-12 group">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            {/* Floating Stars */}
            <div className="absolute -top-4 -right-4 z-20 animate-float">
              <Star className="w-10 h-10 md:w-14 md:h-14 text-yellow-400" />
            </div>

            <div className="absolute -bottom-4 -left-4 z-20 animate-float-delayed">
              <Star className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" />
            </div>

            <div className="absolute top-1/2 -right-8 z-20 animate-pulse">
              <Star className="w-6 h-6 text-white/60" />
            </div>

            {/* Main Image Container */}
            <div className="relative w-full h-80 md:h-[600px] rounded-2xl overflow-hidden border-2 border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500">
              <Image 
                src="/images/image.png" 
                alt="Cast and team members" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                priority 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>

            {/* Bottom Right Corner Accent */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-yellow-400 rounded-bl-2xl" />
            
            {/* Top Left Corner Accent */}
            <div className="absolute -top-2 -left-2 w-16 h-16 border-l-2 border-t-2 border-yellow-400 rounded-tr-2xl" />
          </div>

          {/* Additional Vision Statement */}
          <div className="text-center mt-16">
            <p className="font-mono text-lg md:text-xl text-gray-400 italic max-w-2xl mx-auto leading-relaxed">
              "We believe every story deserves to be told, every voice deserves to be heard, 
              and every journey deserves to be celebrated."
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

function Star({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}