"use client"

import AdvertiseWithUs from "@/components/banifitCard"
import { ExclusiveCarousel } from "@/components/exclusivecontent"
import { FullScreenVideo } from "@/components/FullScreen"
import MediaPresence from "@/components/New/Media"
import HeroSection from "@/components/Production/Landingpage"
import { OURPODCASTYouTube } from "@/components/Production/OurPodcast"
import { OURVIDEOYouTube } from "@/components/ui/infinite-moving-cards"


function page() {
    return (
        <>
            <HeroSection />
            <ExclusiveCarousel />
            <OURVIDEOYouTube/>
            <FullScreenVideo
                videoId="dQw4w9WgXcQ"
            />
            <OURPODCASTYouTube />

            <AdvertiseWithUs />
        </>
    )
}

export default page