import Hero from '@/components/wecare/hero'
import OurImpact from '@/components/wecare/our-impact'
import WhyWeExist from '@/components/wecare/why-we-exist'
import JoinHands from '@/components/wecare/join-hands'
import TogetherWeCreate from '@/components/wecare/together-we-create'
import CollaborateForm from '@/components/wecare/collaborate-form'
import Ourwings from '@/components/wecare/wecare'
import { Featuredcollaborators } from "@/components/wecare/missout"
import GetInvolved from '@/components/wecare/Ourvision'
export default function Home() {
    return (
        <main className="bg-black">
            <Hero />
            <WhyWeExist />
            <OurImpact />
            <Ourwings />
            <CollaborateForm />
            <Featuredcollaborators />
            <GetInvolved />
            <JoinHands />
        </main>
    )
}
