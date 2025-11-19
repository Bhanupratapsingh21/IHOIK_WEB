export default function JoinHands() {
  const actions = [
    { icon: '🤝', label: 'VOLUNTEER' },
    { icon: '📢', label: 'ADVOCATE' },
    { icon: '💳', label: 'DONATE', highlighted: true },
    { icon: '🤝', label: 'PARTNER' },
  ]

  return (
    <section className="bg-black px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
     

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`py-8 px-4 rounded-2xl font-bold text-sm md:text-base uppercase tracking-wider transition-all ${
                action.highlighted
                  ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                  : 'border-2 border-white text-white hover:bg-white/10'
              }`}
            >
              <div className="text-3xl mb-3 text-center">{action.icon}</div>
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
