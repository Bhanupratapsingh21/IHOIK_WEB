'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setFormData({ name: '', email: '', mobile: '', message: '' })
        }, 1000)
    }

    return (
        <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
            <div className="absolute top-20 right-16 text-white text-4xl animate-pulse">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>

            <div className="absolute top-1/3 left-8 text-white text-3xl animate-pulse">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>

            {/* Main content container */}
            <div className="max-w-md w-full">
                <div className="text-center mb-16 pt-8">
                    <p className="text-white text-base font-light mb-2">You are just a click away to</p>
                    <p className="text-white text-base font-light mb-6">reach us !</p>
                    <div className="relative inline-block">
                        <p className="text-white text-base font-light">We will be glad to hear you!</p>
                        {/* Curved underline */}
                        <svg
                            className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48"
                            viewBox="0 0 200 40"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M 0 0 Q 100 20 200 0"
                                stroke="white"
                                strokeWidth="1.5"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Form section */}
                <div>
                    <h2 className="text-white text-3xl font-bold text-center mb-2">CONTACT US</h2>
                    <div className="h-1 bg-yellow-400 w-16 mx-auto mb-10"></div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="text-white text-sm font-medium block mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder=""
                                className="w-full bg-gray-200 text-black placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-white text-sm font-medium block mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder=""
                                className="w-full bg-gray-200 text-black placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-white text-sm font-medium block mb-2">Mobile No</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder=""
                                className="w-full bg-gray-200 text-black placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-white text-sm font-medium block mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder=""
                                rows={5}
                                className="w-full bg-gray-200 text-black placeholder-gray-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors flex items-center gap-2 disabled:opacity-50"
                            >
                                Send
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
