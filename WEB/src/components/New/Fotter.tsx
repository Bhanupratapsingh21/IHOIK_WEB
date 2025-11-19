"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { TextHoverEffect } from "../ui/text-hover-effect"

export default function SiteFooter() {
  const [email, setEmail] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log("[v0] Newsletter subscribe email:", email)
    setEmail("")
  }

  return (
    <footer className="w-full rounded-2xl border-t-4 bg-white mx-auto pt-5 pb-5 px-4">
      <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.45)] ring-1 ring-border bg-[oklch(0.16_0_0)]">
        {/* Newsletter band */}
        <div className="footer-newsletter-gradient p-5 sm:p-6 md:p-7 border-b border-border">
          <p className="text-xs tracking-widest uppercase text-white/90 mb-2">Join our</p>
          <h3 className="text-sm font-semibold tracking-widest text-white uppercase">Newsletter</h3>
          <form onSubmit={onSubmit} className="mt-3 flex items-center gap-3">
            <label htmlFor="footer-email" className="sr-only">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 rounded-md bg-transparent/10 border border-border/70 px-3 py-2 text-sm placeholder:text-white/55 focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]"
            />
            <button
              type="submit"
              className="rounded-md bg-[var(--brand-yellow)] text-[var(--on-brand)] px-4 py-2 text-xs font-semibold hover:brightness-95 active:translate-y-[1px] transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Content block */}
        <div className="p-5 sm:p-6 md:p-7">
          {/* Brand + Socials */}
          <div>
            <h4 className="text-lg sm:text-xl font-black text-white tracking-wide">IOHIK MEDIA</h4>
            <p className="mt-2 text-sm leading-relaxed text-white/85 max-w-prose">
              Morbi non aliquam libero, eu aliquet erat. Nulla sed elementum nulla. Donec elit ligula.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <YouTubeIcon />
              </SocialIcon>
              <SocialIcon href="https://facebook.com" label="Facebook">
                <FacebookIcon />
              </SocialIcon>
            </div>
          </div>

          <hr className="my-5 border-border/80" />

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <FooterCol title="Services" links={["Media", "Advertisements", "Events"]} />
            <FooterCol title="Our Roles" links={["About Us", "We Care", "Partners"]} />
            <FooterCol title="Resources" links={["Blogs", "Documentaries", "Podcasts", "Webseries", "Support"]} />
          </div>

          <hr className="my-5 border-border/80" />

          {/* Legal */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <nav className="flex flex-wrap gap-4 text-xs text-white/80">
              <Link href="#" className="hover:underline underline-offset-4">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline underline-offset-4">
                Cookies Settings
              </Link>
            </nav>
            <p className="text-xs text-white/70">© 2025 IOHIK, All rights reserved</p>
          </div>
        </div>

        {/* Floating to top button */}
        <div className="p-5 pt-0">
          <div className="flex justify-end">
            <a
              href="#top"
              aria-label="Scroll to top"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--brand-yellow)] text-[var(--on-brand)] shadow hover:brightness-95 active:translate-y-[1px] transition"
            >
              <ArrowUpIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="h-[10rem] -mb-10 flex items-center justify-center">
      <TextHoverEffect text="IHOIK MEDIA" />
    </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="mb-2 text-xs uppercase tracking-widest text-white/95">{title}</h5>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l}>
            <Link href="#" className="text-white/90 hover:text-white underline-offset-4 hover:underline">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[var(--surface)] text-[var(--icon-on-surface)] ring-1 ring-border hover:brightness-95 transition"
    >
      {children}
    </Link>
  )
}

/* Icons (inline, no extra deps) */
function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 4l-6 6h4v6h4v-6h4z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM18 6.5a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  )
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.2-.4-4.6a3 3 0 00-2.1-2.1C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.5.5a3 3 0 00-2.1 2.1C1 8.8 1 12 1 12s0 3.2.4 4.6a3 3 0 002.1 2.1c1.6.5 8.5.5 8.5.5s6.9 0 8.5-.5a3 3 0 002.1-2.1c.4-1.4.4-4.6.4-4.6zM10 9.8l5.6 2.2L10 14.2V9.8z" />
    </svg>
  )
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M13 22v-9h3l1-4h-4V7.5A1.5 1.5 0 0114.5 6H17V2h-3.5A4.5 4.5 0 009 6.5V9H6v4h3v9h4z" />
    </svg>
  )
}
