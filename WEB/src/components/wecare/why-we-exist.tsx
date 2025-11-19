export default function WhyWeExist() {
  return (
    <section className="bg-black px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-2 uppercase tracking-widest">
          WHY WE EXIST
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-16"></div>

        {/* Image */}
        <div className="mb-12 rounded-3xl overflow-hidden">
          <img
            src="/volunteers-in-blue-shirts-together.jpg"
            alt="Volunteers working together"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-white  font-mono text-base md:text-lg leading-relaxed text-center uppercase tracking-wide">
          WE'RE A GRASSROOTS-DRIVEN NGO FOCUSED ON EDUCATION, HEALTH, AND LIVELIHOOD. OUR MISSION IS TO BRIDGE OPPORTUNITY GAPS THROUGH SUSTAINABLE, COMMUNITY-LED INITIATIVES.
        </p>
      </div>
    </section>
  )
}
