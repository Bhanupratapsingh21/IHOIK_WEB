import Hero from "@/components/New/hero"
import FooterNav from "@/components/New/footer-nav"
import WhatsHot from "@/components/New/Hot"
import WeCare from "@/components/New/wecare"
import AdvertiseWithUs from "@/components/banifitCard"
import KindWords from "@/components/Kind-words"
import OurStory from "@/components/New/Ourstory"
import Missout from "@/components/missout"
import Achievements from "@/components/New/achievements"
import ContactUs from "@/components/contectus"
import MediaPresence from "@/components/New/Media"

export default function Page() {
  return (
    <>
      <div className="bg-black">
        <main className="relative min-h-dvh flex flex-col">
          <div className="pointer-events-none absolute inset-0 radial-hero" aria-hidden="true" />

          {/* content */}
          <div className="">
            <Hero />
            <FooterNav />
          </div>
        </main>
        <WhatsHot />
        <WeCare />
        <AdvertiseWithUs />
        <KindWords />
        <MediaPresence/>
        <OurStory />
        <Achievements />
        <Missout />
        <ContactUs />

      </div>
    </>
  )
}