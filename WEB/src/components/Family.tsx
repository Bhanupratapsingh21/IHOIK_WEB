"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface AppItem {
    id: number;
    name: string;
    imageUrl: string;
    url: string;
}

const apps: AppItem[] = [
    {
        id: 1,
        name: 'Finance Tracker',
        imageUrl: 'https://res.cloudinary.com/djwzwq4cu/image/upload/e_background_removal/f_png/v1757006312/WhatsApp_Image_2025-09-04_at_21.21.39_378767af_dwlerh.jpg',
        url: '#'
    },
    {
        id: 2,
        name: 'Health Companion',
        imageUrl: 'https://res.cloudinary.com/djwzwq4cu/image/upload/e_background_removal/f_png/v1757006312/WhatsApp_Image_2025-09-04_at_21.27.46_df522ff3_piwxmy.jpg',
        url: '#'
    },
    {
        id: 3,
        name: 'Task Manager',
        imageUrl: 'https://res.cloudinary.com/djwzwq4cu/image/upload/e_background_removal/f_png/v1757006312/WhatsApp_Image_2025-09-04_at_21.24.59_738b24ab_mnfy0r.jpg',
        url: '#'
    }
];

export function AppFamilySection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="mx-auto w-full max-w-7xl px-4 sm:px-6 pt-6 md:pt-10 lg:pt-16"
            aria-labelledby="our-family-title"
        >
            <div className="relative rounded-2xl md:rounded-3xl border-4 border-white/90 bg-[#F7C948] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)] md:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-white/30 overflow-hidden">
                {/* Animated circles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-24 h-24 md:-top-20 md:-left-20 md:w-40 md:h-40 rounded-full bg-white/10 animate-pulse"></div>
                    <div className="absolute -bottom-10 -right-10 w-24 h-24 md:-bottom-20 md:-right-20 md:w-40 md:h-40 rounded-full bg-white/10 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/5 animate-pulse delay-500"></div>
                </div>

                <div className="relative px-4 sm:px-6 pt-2 md:px-10">
                    {/* Title */}
                    <div className="relative z-10 pt-8  text-center">
                        <h2
                            id="our-family-title"
                            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7A1C1C] transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            Our Family
                        </h2>
                    </div>

                    {/* App Images */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16">
                        {apps.map((app, index) => (
                            <div
                                key={app.id}
                                className={`relative transition-all duration-1000 ease-out delay-${500 + index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            >
                                <div className="animate-float">
                                  
                                    <div className="h-full  rounded-[1.5rem] overflow-hidden flex items-center justify-center">
                                        <Image
                                            src={app.imageUrl}
                                            alt={app.name}
                                            width={200}
                                            height={380}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional decorative circles for depth */}
                <div aria-hidden="true">
                    <div className="absolute -left-6 -bottom-6 h-16 w-16 md:-left-8 md:-bottom-8 md:h-24 md:w-24 rounded-full bg-black/10" />
                    <div className="absolute -right-4 -bottom-4 h-20 w-20 md:-right-6 md:-bottom-6 md:h-28 md:w-28 rounded-full bg-black/10" />
                </div>

                <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-white/50 animate-ping-slow" style={{ animationDuration: '3s' }}></div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(1.05);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
        </section>
    );
}