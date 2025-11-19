export default function OurImpact() {
  const stats = [
    { number: '5000+', label: 'CHILDREN EDUCATED' },
    { number: '300+', label: 'WOMEN TRAINED' },
    { number: '12+', label: 'HEALTH CAMPS' },
    { number: '20+', label: 'VILLAGES SUPPORTED' },
  ]

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=800&width=1400&query=diverse community group photo)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-2 uppercase tracking-widest">
          OUR IMPACT
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-16"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <p className="text-white text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
