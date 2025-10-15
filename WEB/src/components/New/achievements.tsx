"use client"

import { Instagram, Youtube } from "lucide-react"
import { BsYoutube } from "react-icons/bs"

export default function Achievements() {
    return (
        <section aria-labelledby="achievements-heading" className="w-full bg-background text-white py-16 md:py-24">
            <div className="mx-auto max-w-screen-sm px-6 text-center">
                {/* Title */}
                <header className="mb-8 md:mb-10">
                    <h2
                        id="achievements-heading"
                        className="font-sans font-extrabold tracking-wider text-2xl md:text-3xl text-pretty"
                    >
                        OUR ACHIEVEMENTS
                    </h2>
                    <div
                        aria-hidden="true"
                        className="mx-auto mt-3 h-0.5 w-24 md:w-28"
                        style={{ background: "var(--brand-yellow)" }}
                    />
                </header>

                {/* Emblem (handshake award) */}
                <div className="mx-auto grid place-items-center">
                    <svg
                        role="img"
                        aria-label="Handshake award emblem"
                        width="180"
                        height="180"
                        viewBox="0 0 180 180"
                        className="drop-shadow-[0_0_20px_rgba(255,212,0,0.12)]"
                    >
                        <defs>
                            <style>{`.y{stroke:var(--brand-yellow);} .w{stroke:currentColor;}`}</style>
                        </defs>
                        <g fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            {/* Rays */}
                            <g className="y" opacity="0.9">
                                <path d="M90 16 v12" />
                                <path d="M120 22 l-6 10" />
                                <path d="M60 22 l6 10" />
                                <path d="M142 40 l-10 6" />
                                <path d="M38 40 l10 6" />
                            </g>
                            {/* Laurels */}
                            <g className="y">
                                <path d="M54 100c-10-8-16-20-16-33 0-4 0-8 1-11" />
                                <path d="M126 100c10-8 16-20 16-33 0-4 0-8-1-11" />
                                <path d="M46 74 c-8-2 -12-7 -14-12" />
                                <path d="M48 61 c-8-2 -12-7 -14-12" />
                                <path d="M51 49 c-8-2 -12-7 -14-12" />
                                <path d="M134 74 c8-2 12-7 14-12" />
                                <path d="M132 61 c8-2 12-7 14-12" />
                                <path d="M129 49 c8-2 12-7 14-12" />
                            </g>
                            {/* Pedestal */}
                            <g className="y">
                                <rect x="68" y="122" width="44" height="6" rx="3" />
                                <rect x="60" y="132" width="60" height="6" rx="3" />
                                <rect x="52" y="142" width="76" height="6" rx="3" />
                            </g>
                            {/* Hands */}
                            <g className="w">
                                <path d="M70 100 l15 -12 c6-5 13-5 18 0 l7 6" />
                                <path d="M110 98 l-8 7 c-6 5 -13 5 -18 0 l-6 -5" />
                                <path d="M72 96 l-8 -12 c-3 -4 -2 -9 2 -12 l8 -6 c4 -3 9 -2 12 2 l7 10" />
                                <path d="M108 96 l8 -12 c3 -4 2 -9 -2 -12 l-8 -6 c-4 -3 -9 -2 -12 2 l-7 10" />
                            </g>
                        </g>
                    </svg>

                    <div className="mt-4 text-center">
                        <p className="text-xs md:text-sm uppercase tracking-widest opacity-90">MOST PROMISING CONSUMER STARTUP</p>
                        <p className="text-[11px] md:text-xs tracking-[0.2em] opacity-70">BY AMAZON</p>
                    </div>
                </div>

                {/* Find us on */}
                <div className="mt-14 md:mt-16">
                    <h3 className="font-sans font-extrabold tracking-wider text-xl md:text-2xl">FIND US ON</h3>
                    <div
                        aria-hidden="true"
                        className="mx-auto mt-3 h-0.5 w-20 md:w-24"
                        style={{ background: "var(--brand-yellow)" }}
                    />
                    <div className="mt-7 md:mt-9 flex items-center justify-center gap-4 md:gap-6">
                        <SocialButton kind="instagram" href="https://instagram.com/" />
                        <SocialButton kind="youtube" href="https://youtube.com/" />
                        <SocialButton kind="instagram" href="https://instagram.com/" />
                        <SocialButton kind="youtube" href="https://youtube.com/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function SocialButton({
    kind,
    href,
    ariaLabel,
}: {
    kind: "instagram" | "youtube"
    href: string
    ariaLabel?: string
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel ?? kind}
            className="grid h-12 w-12 place-items-center rounded-xl transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2"
            style={{
                background: "var(--surface)",
                color: "var(--icon-on-surface)",
                outlineColor: "var(--brand-yellow)",
            }}
        >
            {kind === "instagram" ? <Instagram /> : <Youtube />}
        </a>
    )
}

function InstagramIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" />
            <circle cx="12" cy="12" r="4.5" fill="var(--surface)" />
            <circle cx="17.2" cy="6.8" r="1.2" fill="var(--surface)" />
            <circle cx="12" cy="12" r="2.8" fill="var(--icon-on-surface)" />
        </svg>
    )
}

function YouTubeIcon() {
    return (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="22" height="16" rx="4" fill="currentColor" />
            <polygon points="10,6 16,9 10,12" fill="var(--surface)" />
        </svg>
    )
}
