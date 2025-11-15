"use client"

import Herosection from "@/components/Aboutus/herosection"
import Knowourteam from "@/components/Aboutus/knowourteam"
import Ourvision from "@/components/Aboutus/Ourvision"
import AdvertiseWithUs from "@/components/banifitCard"
import FooterNav from "@/components/New/footer-nav"
import Hero from "@/components/New/hero"

export default function AboutPage() {


  return (
    <>
      <main className="relative min-h-dvh flex flex-col">
              <div className="pointer-events-none absolute inset-0 radial-hero" aria-hidden="true" />
    
              {/* content */}
              <div className="">
                <Hero />
                <FooterNav />
              </div>
            </main>
      <Herosection />
      <Ourvision />
      <Knowourteam />
      <AdvertiseWithUs />
    </>
  )
}
