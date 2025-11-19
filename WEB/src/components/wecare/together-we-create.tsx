export default function TogetherWeCreate() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20">
      {/* Background with particle effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=800&width=1400&query=abstract particles and light effects)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-center">
        <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold mb-8 uppercase">
          TOGETHER, WE CREATE CHANGE.
        </h2>

        <p className="text-white text-lg md:text-xl mb-12 leading-relaxed uppercase tracking-wide">
          PARTNER WITH US TO UPLIFT COMMUNITIES, EMPOWER YOUTH, AND BUILD A MORE EQUITABLE FUTURE.
        </p>

        <button className="bg-yellow-400 text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-yellow-500 transition-all uppercase tracking-wider">
          BECOME A COLLABORATOR
        </button>
      </div>
    </section>
  )
}
