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

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

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
