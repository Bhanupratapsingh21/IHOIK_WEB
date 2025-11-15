'use client'

import { div } from 'framer-motion/client'
import { useState, useEffect } from 'react'

export function CountdownTimer() {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        // Calculate time until a target date (e.g., 60 days from now)
        const calculateCountdown = () => {
            const targetDate = new Date()
            targetDate.setDate(targetDate.getDate() + 60)

            const now = new Date().getTime()
            const distance = targetDate.getTime() - now

            if (distance > 0) {
                setTime({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((distance / 1000 / 60) % 60),
                    seconds: Math.floor((distance / 1000) % 60),
                })
            }
        }

        calculateCountdown()
        const timer = setInterval(calculateCountdown, 1000)

        return () => clearInterval(timer)
    }, [])

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <div className="text-4xl font-mono font-bold text-white tracking-wider">
                {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs tracking-widest text-white/70 font-mono mt-2">
                {label}
            </div>
        </div>
    )

    return (
        <div className='flex justify-center w-full  my-12'>
            <div className="w-full max-w-2xl rounded-3xl border-2 border-white/30 bg-black/60 backdrop-blur-sm p-8 mt-12">
                <h3 className="text-center text-lg font-mono tracking-widest text-white mb-2">
                    THE COUNTDOWN BEGINS
                </h3>
                <p className="text-center text-sm font-mono tracking-widest text-white/50 mb-6">
                    BIGGEST EVENT OF KOTA
                </p>

                {/* Countdown display */}
                <div className="flex justify-center items-center gap-6 md:gap-8 mb-4">
                    <TimeUnit value={time.days} label="DAYS" />
                    <div className="text-3xl text-white/40 font-mono">·</div>
                    <TimeUnit value={time.hours} label="HOURS" />
                    <div className="text-3xl text-white/40 font-mono">·</div>
                    <TimeUnit value={time.minutes} label="MINS" />
                    <div className="text-3xl text-white/40 font-mono">·</div>
                    <TimeUnit value={time.seconds} label="SEC" />
                </div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    <div className="w-8 h-px bg-white/20"></div>
                    <div className="text-xs tracking-widest text-white/40 font-mono">BE READY</div>
                    <div className="w-8 h-px bg-white/20"></div>
                </div>
            </div>
        </div>
    )
}
