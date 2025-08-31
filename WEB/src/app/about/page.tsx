"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Instagram, Youtube, Heart, Users, BookOpen, MessageCircle } from 'lucide-react'

export default function AboutPage() {
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
    <div className="min-h-screen pt-10 bg-gradient-to-b from-[#FEF6E6] to-[#F7C948]/20">
      {/* Header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#7A1C1C] mb-6">
              About <span className="text-[#F7C948]">It Happens In Kota</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1B1B1B]/80 max-w-3xl mx-auto leading-relaxed">
              A Community of Students, by Students, for Students
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section ref={sectionRef} className="mb-20">
          <div className="relative rounded-3xl bg-white p-8 md:p-12 shadow-lg border border-[#F7C948]/30">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F7C948] to-[#7A1C1C] rounded-3xl opacity-20 blur"></div>
            <div className="relative z-10">
              <p className={`text-lg md:text-xl text-[#1B1B1B]/90 text-center italic transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                "It Happens In Kota is a vibrant platform dedicated to supporting the thousands of students who call Kota their home-away-from-home. Our mission is simple — to create a safe, supportive, and inspiring community where students can share their academic journeys, challenges, dreams, and emotional experiences navigating one of India's most intense educational ecosystems."
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#1B1B1B]/80">
                <p>Kota, Rajasthan, has long been recognized as the coaching capital of India. It draws hundreds of thousands of bright young minds annually, all chasing dreams of cracking competitive exams like JEE and NEET.</p>
                <p>Yet, amidst the rigorous academics, fierce competition, and high expectations, many students face immense pressure, loneliness, and emotional hardships.</p>
                <p>We started It Happens In Kota to bring out the real stories — the struggles with homesickness, friendship dilemmas, moments of self-discovery, and the triumphs beyond exams. Managed by passionate students themselves, IHOIK is a space where every voice matters, and no journey is solitary.</p>
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
                      <Users className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-xl font-semibold">Creating Connections Beyond Classrooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe In */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-4 text-center">What We Believe In</h2>
          <p className="text-[#1B1B1B]/80 text-center mb-12 max-w-3xl mx-auto">Our core values guide everything we do at It Happens In Kota</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Student Wellbeing",
                description: "Balancing study and mental health is crucial. We promote initiatives that foster emotional support, stress management, and community bonding."
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Sharing Knowledge",
                description: "From study tips to exam strategies, we empower students with practical advice from peers who understand their unique challenges."
              },
              {
                icon: <MessageCircle className="h-8 w-8" />,
                title: "Honest Conversations",
                description: "Life in Kota is about more than just exams; we encourage open discussions about dreams, setbacks, and personal growth."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Inclusivity",
                description: "Whether a topper or a struggler, everyone's story is respected and valued in our community."
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

        {/* Why Kota Needs IHOIK */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#7A1C1C] to-[#F7C948] rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-6">Why Kota Needs IHOIK</h2>
              <div className="text-[#1B1B1B]/80 space-y-6">
                <p>Recent years have seen shifts in Kota's educational landscape — from fluctuating student enrollments and pandemic-induced challenges to unfortunate tragedies linked to intense pressure. These realities underscore the need for a compassionate student community that offers more than just coaching:</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#F7C948]/20 rounded-full p-2 mr-4 mt-1">
                      <Heart className="h-5 w-5 text-[#7A1C1C]" />
                    </div>
                    <span>We recognize the emotional costs many students bear and strive to provide support through counseling resources, community events, and motivational content.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#F7C948]/20 rounded-full p-2 mr-4 mt-1">
                      <Users className="h-5 w-5 text-[#7A1C1C]" />
                    </div>
                    <span>By connecting students virtually and offline, IHOIK helps break isolation and builds friendships beyond classrooms.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#F7C948]/20 rounded-full p-2 mr-4 mt-1">
                      <MessageCircle className="h-5 w-5 text-[#7A1C1C]" />
                    </div>
                    <span>We partner with local organizations and professionals to promote mental health awareness and create safer, supportive environments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-[#F7C948] to-[#F7C948]/70 rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7A1C1C] mb-6">Join Our Community</h2>
            <p className="text-xl text-[#1B1B1B]/90 mb-8 max-w-3xl mx-auto">
              Whether you are new to Kota or a seasoned aspirant, It Happens In Kota welcomes you. Become part of a growing network that celebrates resilience, shares knowledge, and lifts each other up.
            </p>
            <p className="text-lg font-semibold text-[#7A1C1C] mb-10">
              Together, we can make Kota not just an educational hub but a nurturing home for all its students.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link 
                href="https://www.instagram.com/ithappensinkota/" 
                className="inline-flex items-center gap-2 bg-[#7A1C1C] text-white px-6 py-3 rounded-full hover:bg-[#5e1515] transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow on Instagram</span>
              </Link>
              <Link 
                href="https://www.youtube.com/@ihoikmedia" 
                className="inline-flex items-center gap-2 bg-white text-[#7A1C1C] border border-[#7A1C1C] px-6 py-3 rounded-full hover:bg-[#7A1C1C] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Youtube className="h-5 w-5" />
                <span>Subscribe on YouTube</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}