"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Instagram, Youtube, Heart, Users, BookOpen, MessageCircle } from "lucide-react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [])

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-b from-[#FEF6E6] to-[#F7C948]/20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">

        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#7A1C1C] mb-6">
            About <span className="text-[#F7C948]">IHOIK Media</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#1B1B1B]/80 max-w-3xl mx-auto leading-relaxed">
            Real Stories of Students, by Students, for Students
          </p>
        </section>

        {/* Mission Statement */}
        <section ref={sectionRef} className="mb-20">
          <div className="relative rounded-3xl bg-white p-8 md:p-12 shadow-lg border border-[#F7C948]/30">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F7C948] to-[#7A1C1C] rounded-3xl opacity-20 blur"></div>
            <div className="relative z-10">
              <p className={`text-lg md:text-xl text-[#1B1B1B]/90 text-center italic transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                "IHOIK Media tells the real stories of Kota students — the pressures, friendships, failures, and triumphs. Our mission is to create a safe and inspiring space where students can share, learn, and grow together through relatable videos and community initiatives."
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#1B1B1B]/80">
                <p>Kota, Rajasthan, is the coaching capital of India. Hundreds of thousands of students come here every year chasing dreams of JEE, NEET, and other competitive exams.</p>
                <p>Amid rigorous academics and intense competition, many students struggle with pressure, loneliness, and emotional challenges.</p>
                <p>IHOIK Media was started to capture these real stories — the hardships, friendships, small victories, and self-discoveries. Managed by students themselves, our platform ensures every voice is heard and no journey is solitary.</p>
              </div>
            </div>
            <div className={`transition-all duration-700 ease-out delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-[#F7C948]/30 rounded-2xl transform rotate-3"></div>
                <div className="absolute -inset-4 border-2 border-[#7A1C1C]/30 rounded-2xl transform -rotate-3"></div>
                <div className="relative bg-gradient-to-br from-[#F7C948] to-[#7A1C1C] rounded-2xl h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-70"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <Users className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-xl font-semibold">Stories That Connect Students Beyond Classrooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values / Beliefs */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-4 text-center">What We Believe In</h2>
          <p className="text-[#1B1B1B]/80 text-center mb-12 max-w-3xl mx-auto">
            Our core values guide everything we do at IHOIK Media
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Heart className="h-8 w-8" />, title: "Student Wellbeing", description: "Promoting mental health awareness and emotional support for students." },
              { icon: <BookOpen className="h-8 w-8" />, title: "Sharing Knowledge", description: "Study tips, exam strategies, and practical advice from peers who understand Kota life." },
              { icon: <MessageCircle className="h-8 w-8" />, title: "Honest Conversations", description: "Open discussions about struggles, dreams, and personal growth beyond exams." },
              { icon: <Users className="h-8 w-8" />, title: "Inclusivity", description: "Every student’s story is valued, whether a topper or a struggler." }
            ].map((value, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-md border border-[#F7C948]/20 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${300 + index * 100}ms` }}>
                <div className="text-[#7A1C1C] mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#7A1C1C] mb-3">{value.title}</h3>
                <p className="text-[#1B1B1B]/80">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why IHOIK Matters */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#7A1C1C] to-[#F7C948] rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-6">Why Students Need IHOIK</h2>
              <div className="text-[#1B1B1B]/80 space-y-6">
                <p>Intense coaching pressure, emotional struggles, and isolation are realities for many students in Kota. IHOIK Media exists to offer support, community, and awareness beyond academics.</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#F7C948]/20 rounded-full p-2 mr-4 mt-1"><Heart className="h-5 w-5 text-[#7A1C1C]" /></div>
                    <span>Providing emotional support and relatable content for mental well-being.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#F7C948]/20 rounded-full p-2 mr-4 mt-1"><Users className="h-5 w-5 text-[#7A1C1C]" /></div>
                    <span>Connecting students virtually and offline to break isolation and foster friendships.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#F7C948]/20 rounded-full p-2 mr-4 mt-1"><MessageCircle className="h-5 w-5 text-[#7A1C1C]" /></div>
                    <span>Collaborating with organizations to promote mental health awareness and safer environments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: Join Us */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-[#F7C948] to-[#F7C948]/70 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-6">Join Our Community</h2>
            <p className="text-xl text-[#1B1B1B]/90 mb-8 max-w-3xl mx-auto">
              Whether new to Kota or a seasoned aspirant, IHOIK Media welcomes you. Share experiences, gain insights, and connect with peers who understand your journey.
            </p>
            <p className="text-lg font-semibold text-[#7A1C1C] mb-10">
              Together, we make Kota more than just a coaching hub — a nurturing home for students.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="https://www.instagram.com/ihoikmedia/" className="inline-flex items-center gap-2 bg-[#7A1C1C] text-white px-6 py-3 rounded-full hover:bg-[#5e1515] transition-colors duration-300 shadow-md hover:shadow-lg">
                <Instagram className="h-5 w-5" /> Follow on Instagram
              </Link>
              <Link href="https://www.youtube.com/@ihoikmedia" className="inline-flex items-center gap-2 bg-white text-[#7A1C1C] border border-[#7A1C1C] px-6 py-3 rounded-full hover:bg-[#7A1C1C] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg">
                <Youtube className="h-5 w-5" /> Subscribe on YouTube
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
