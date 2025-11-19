'use client'

import { useState } from 'react'

export default function CollaborateForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <section className="bg-black px-4 py-20 md:py-32">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-2 uppercase tracking-widest">
          COLLABORATE WITH US
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mb-12"></div>

        {/* Form Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <img
            src="/office-collaboration.png"
            alt="Collaboration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="text-white text-xs uppercase tracking-wider font-semibold block mb-3">
              NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
              placeholder=""
            />
          </div>

          {/* Designation */}
          <div>
            <label className="text-white text-xs uppercase tracking-wider font-semibold block mb-3">
              DESIGNATION
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
              placeholder=""
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-white text-xs uppercase tracking-wider font-semibold block mb-3">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
              placeholder=""
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="text-white text-xs uppercase tracking-wider font-semibold block mb-3">
              CONTACT NO
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
              placeholder=""
            />
          </div>

          {/* Category Selection */}
          <div className="grid grid-cols-2 gap-4">
            {['GOVERNMENT', 'ACADEMIC', 'CORPORATE', 'CREATOR'].map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, category: cat }))}
                className={`py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
                  formData.category === cat
                    ? 'bg-yellow-400 text-black'
                    : 'border-2 border-white text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Message */}
          <div>
            <label className="text-white text-xs uppercase tracking-wider font-semibold block mb-3">
              YOUR MESSAGE
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              placeholder=""
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-all uppercase tracking-wider"
          >
            BECOME A COLLABORATOR
          </button>
        </form>
      </div>
    </section>
  )
}
