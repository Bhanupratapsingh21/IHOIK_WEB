import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { PikaHero } from "@/components/Home/pika-hero";
import { VideoCarousel } from "@/components/ui/carousel";
import { AppFamilySection } from "@/components/Family";

const HomePage: React.FC = () => {
  return (
    <>
      <main className="min-h-dvh pt-14 bg-[#F7C948] text-[#1B1B1B]">
        <PikaHero />
      </main>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Videos
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Watch our latest Videos
            </p>
          </div>
          <VideoCarousel />
        </div>
      </section>
      <AppFamilySection />
      <Container>
        <Section
          id="student-stories"
          title="Student Stories"
          description="Hear from Kota students about their journey and experience."
        >
          <Testimonials />
        </Section>

        <Section
          id="faq"
          title="Frequently Asked Questions"
          description="Answers to common questions from the student community."
        >
          <FAQ />
        </Section>

        <Section
          id="community-stats"
          title="Our Impact"
          description="Numbers that show how we've helped Kota students grow and thrive."
        >
          <Stats />
        </Section>

        <CTA
        />
      </Container>
    </>
  );
};

export default HomePage;
