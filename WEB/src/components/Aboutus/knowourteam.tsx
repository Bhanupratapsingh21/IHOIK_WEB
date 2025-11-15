"use client"

import { useState } from "react"
import Image from "next/image"
import Star from "@/components/Star"
import SocialIcon from "@/components/SocialIcon"

const teamMembers = [
  {
    id: 1,
    name: "Ibrahim",
    displayName: "Ibrahim",
    role: "Founder",
    bio: "Mehdi non aliquam lithere on aliquam dolore velit aute irure donsiteur rulla dolt ligula.",
    image: "/images/image.png",
    socials: ["instagram", "twitter", "facebook", "linkedin"],
  },
  {
    id: 2,
    name: "Anshu Maharaj",
    displayName: "Anshu Maharaj",
    role: "Co-Founder",
    bio: "Passionate about innovation and creative problem-solving. Leads the strategic vision and growth initiatives.",
    image: "/images/image.png",
    socials: ["instagram", "twitter", "facebook", "linkedin"],
  },
  {
    id: 3,
    name: "Linda",
    displayName: "Linda",
    role: "Creative Director",
    bio: "Brings artistic vision and design excellence to every project. Focused on creating memorable experiences.",
    image: "/images/image.png",
    socials: ["instagram", "twitter", "facebook", "linkedin"],
  },
]

export default function TeamSelector() {
  const [selectedMemberId, setSelectedMemberId] = useState(2)
  const selectedMember = teamMembers.find((m) => m.id === selectedMemberId) || teamMembers[0]

  return (
    <div className="relative py-12 mb-16 group">
      {/* Animated Background Glow */}
      <div className="absolute  inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-500/10 to-blue-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

      {/* Floating Stars */}
      <div className="absolute -top-4 -right-4 z-20 animate-float">
        <Star className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" />
      </div>

      <div className="absolute -bottom-4 -left-4 z-20 animate-float-delayed">
        <Star className="w-6 h-6 md:w-10 md:h-10 text-yellow-400" />
      </div>

      {/* Modern Tab Selector */}
      <div className="relative z-10 mb-8">
        <div className="flex justify-center gap-2 p-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 max-w-md mx-auto">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => setSelectedMemberId(member.id)}
              className={`relative px-6 py-3 rounded-xl font-mono text-sm font-medium transition-all duration-300 ${selectedMemberId === member.id
                  ? "text-black bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-lg shadow-yellow-400/25"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
            >
              {member.displayName}
              {selectedMemberId === member.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Card Container */}
      <div className="relative  mx-12 md:mx-36 z-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-gray-700/50 backdrop-blur-sm overflow-hidden group-hover:border-yellow-400/30 transition-all duration-500">
        {/* Animated Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Profile Image with Modern Frame */}
            <div className="relative flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-purple-500 to-blue-400 rounded-2xl p-0.5">
                  <div className="w-full h-full bg-black rounded-[14px] overflow-hidden">
                    <Image
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* Role Badge */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-4 py-1 rounded-full text-xs font-bold font-mono tracking-wide shadow-lg">
                    {selectedMember.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              {/* Name and Role */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  {selectedMember.name}
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent mb-4" />
              </div>

              {/* Bio */}
              <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl font-light">
                {selectedMember.bio}
              </p>

              {/* Social Icons with Hover Effects */}
              <div className="flex gap-4">
                {selectedMember.socials.map((social) => (
                  <div
                    key={social}
                    className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 w-8 h-8 bg-gray-800 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-300 hover:text-black rounded-lg p-1.5 flex items-center justify-center"
                  >
                    <SocialIcon icon={social} />
                  </div>
                ))}
              </div>

              {/* Interactive Emoji Reactions */}
              <div className="flex gap-3 pt-4 border-t border-gray-700/50">
                {["🔥", "💫", "🚀"].map((emoji, index) => (
                  <button
                    key={index}
                    className="text-2xl transform hover:scale-125 hover:rotate-12 transition-all duration-300 bg-gray-800/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-400/30 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-yellow-400/30 rounded-bl-3xl" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-transparent to-purple-400 rounded-3xl" />
      </div>
    </div>
  )
}