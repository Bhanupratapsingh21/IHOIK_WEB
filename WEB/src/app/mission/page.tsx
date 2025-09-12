"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Heart, Users, Target, Shield, Eye, Lightbulb, BookOpen, MessageCircle } from 'lucide-react'

export default function MissionPage() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <div className="min-h-screen pt-20 bg-gradient-to-b from-[#FEF6E6] to-[#F7C948]/20">
            {/* Header */}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
                {/* Hero Section */}
                <section className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#7A1C1C] mb-6">
                        Our <span className="text-[#F7C948]">Mission</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#1B1B1B]/80 max-w-3xl mx-auto leading-relaxed">
                        Empowering every student in Kota to succeed academically, personally, and emotionally
                    </p>
                </section>

                {/* Mission Statement */}
                <section ref={sectionRef} className="mb-20">
                    <div className="relative rounded-3xl bg-white p-8 md:p-12 shadow-lg border border-[#F7C948]/30">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#F7C948] to-[#7A1C1C] rounded-3xl opacity-20 blur"></div>
                        <div className="relative z-10">
                            <p className={`text-lg md:text-xl text-[#1B1B1B]/90 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                At It Happens In Kota, our mission is to empower every student in Kota to succeed not just academically, but personally and emotionally. We believe that education is more than just exam preparation — it is about nurturing confidence, resilience, and community spirit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why We Exist */}
                <section className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className={`transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-6">Why We Exist</h2>
                            <div className="space-y-4 text-[#1B1B1B]/80">
                                <p>Kota is a city of dreams and determination, home to hundreds of thousands of aspirants striving for excellence in highly competitive exams like IIT-JEE and NEET.</p>
                                <p>But along with ambition come immense pressure, isolation, and challenges that many students silently face. Our mission is to address these realities with compassion and collective strength.</p>
                            </div>
                        </div>
                        <div className={`transition-all duration-700 ease-out delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="relative">
                                <div className="absolute -inset-4 border-2 border-[#F7C948]/30 rounded-2xl transform rotate-3"></div>
                                <div className="absolute -inset-4 border-2 border-[#7A1C1C]/30 rounded-2xl transform -rotate-3"></div>
                                <div className="relative bg-gradient-to-br from-[#F7C948] to-[#7A1C1C] rounded-2xl h-80 overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-70"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-white text-center p-6">
                                            <Target className="h-12 w-12 mx-auto mb-4" />
                                            <p className="text-xl font-semibold">Addressing Real Challenges with Compassion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Strive For */}
                <section className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-4 text-center">What We Strive For</h2>
                    <p className="text-[#1B1B1B]/80 text-center mb-12 max-w-3xl mx-auto">Our four pillars of commitment to Kota's student community</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <BookOpen className="h-8 w-8" />,
                                title: "Supportive Learning",
                                description: "Providing practical study tips, peer discussions, and expert guidance to help students tackle academic challenges effectively."
                            },
                            {
                                icon: <Heart className="h-8 w-8" />,
                                title: "Emotional Well-being",
                                description: "Fostering a caring space that promotes mental health awareness, stress management resources, and social activities."
                            },
                            {
                                icon: <Users className="h-8 w-8" />,
                                title: "Community Building",
                                description: "Creating opportunities for connection where students can share journeys, motivate each other, and celebrate successes."
                            },
                            {
                                icon: <Shield className="h-8 w-8" />,
                                title: "Inclusivity and Respect",
                                description: "Embracing diversity in talent, background, and perspectives to ensure every student feels valued and heard."
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-6 shadow-md border border-[#F7C948]/20 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${300 + index * 100}ms` }}
                            >
                                <div className="text-[#7A1C1C] mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-[#7A1C1C] mb-3">{value.title}</h3>
                                <p className="text-[#1B1B1B]/80">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Vision */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-[#7A1C1C] to-[#F7C948] rounded-3xl p-1">
                        <div className="bg-white rounded-3xl p-8 md:p-12">
                            <div className="flex items-center mb-6">
                                <Eye className="h-8 w-8 text-[#7A1C1C] mr-4" />
                                <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C]">Our Vision for the Future</h2>
                            </div>
                            <div className="text-[#1B1B1B]/80 space-y-4">
                                <p>We envision Kota as a place where young minds thrive with balanced growth—where education fuels innovation and empathy alike.</p>
                                <p>By nurturing our vibrant community, we aim to shape confident leaders equipped to contribute not only in exams but in life.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Achieve This */}
                <section className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-4 text-center">How We Achieve This</h2>
                    <p className="text-[#1B1B1B]/80 text-center mb-12 max-w-3xl mx-auto">Our approach to making a difference in the Kota student community</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`bg-white rounded-2xl p-6 shadow-md border border-[#F7C948]/20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Lightbulb className="h-12 w-12 text-[#7A1C1C] mb-4" />
                            <h3 className="text-xl font-semibold text-[#7A1C1C] mb-3">Curating Authentic Content</h3>
                            <p className="text-[#1B1B1B]/80">Sharing real student stories and practical resources grounded in authentic experiences to provide genuine guidance and support.</p>
                        </div>

                        <div className={`bg-white rounded-2xl p-6 shadow-md border border-[#F7C948]/20 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Users className="h-12 w-12 text-[#7A1C1C] mb-4" />
                            <h3 className="text-xl font-semibold text-[#7A1C1C] mb-3">Organizing Events</h3>
                            <p className="text-[#1B1B1B]/80">Hosting workshops, cultural events, and wellness programs that enhance holistic development beyond academic preparation.</p>
                        </div>

                        <div className={`bg-white rounded-2xl p-6 shadow-md border border-[#F7C948]/20 transition-all duration-700 ease-out delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <MessageCircle className="h-12 w-12 text-[#7A1C1C] mb-4" />
                            <h3 className="text-xl font-semibold text-[#7A1C1C] mb-3">Collaborating with Experts</h3>
                            <p className="text-[#1B1B1B]/80">Partnering with educators, counselors, and local organizations to strengthen student support systems and resources.</p>
                        </div>

                        <div className={`bg-white rounded-2xl p-6 shadow-md border border-[#F7C948]/20 transition-all duration-700 ease-out delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="bg-[#F7C948]/20 rounded-full p-3 inline-flex mb-4">
                                <svg className="h-6 w-6 text-[#7A1C1C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#7A1C1C] mb-3">Building Digital Platforms</h3>
                            <p className="text-[#1B1B1B]/80">Creating accessible digital spaces that connect students anytime, anywhere, fostering continuous support and community building.</p>
                        </div>
                    </div>
                </section>

                {/* Final Mission Statement */}
                <section className="text-center">
                    <div className="bg-gradient-to-br from-[#F7C948] to-[#F7C948]/70 rounded-3xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-6">Our Commitment</h2>
                        <p className="text-xl text-[#1B1B1B]/90 mb-8 max-w-3xl mx-auto">
                            This mission statement reflects It Happens In Kota's role as a beacon of encouragement and practical support tailored to the unique journey of Kota students.
                        </p>
                        <div className="bg-white rounded-2xl p-6 inline-block">
                            <p className="text-lg font-semibold text-[#7A1C1C]">
                                Together, we're redefining what it means to be a student in Kota.
                            </p>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}