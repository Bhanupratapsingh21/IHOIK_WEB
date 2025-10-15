"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "New Contact Form Submission",
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message
        })
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", mobile: "", message: "" })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  }

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  }

  return (
    <section className="relative mx-auto w-full max-w-[min(92vw,800px)] px-4 py-16">
      {/* Header */}
      <motion.header
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-pretty text-2xl font-bold tracking-wide text-white md:text-3xl">
          CONTACT US
        </h2>
        <motion.div
          className="mx-auto mt-3 h-1 w-24 rounded-full bg-[var(--brand-yellow)]"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center backdrop-blur-sm"
            >
              <motion.div
                className="text-6xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                ✅
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-white/80 mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <motion.button
                onClick={() => setIsSubmitted(false)}
                className="rounded-full bg-[var(--brand-yellow)] px-6 py-3 font-bold text-black hover:scale-105 active:scale-95 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={containerVariants}
                className="rounded-2xl border border-white/20 bg-black/30 p-8 backdrop-blur-sm shadow-2xl"
              >
                {/* Name Field */}
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-[var(--brand-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-[var(--brand-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </motion.div>

                {/* Mobile Field */}
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="mobile" className="block text-white font-semibold mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-[var(--brand-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]/20 transition-all duration-300"
                    placeholder="Enter your mobile number"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-[var(--brand-yellow)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={itemVariants}
                  className="w-full rounded-xl bg-gradient-to-r from-[var(--brand-yellow)] to-yellow-500 py-4 font-bold text-black shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </span>

                  {/* Button glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-[var(--brand-yellow)] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
                </motion.button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}