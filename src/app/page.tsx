
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <JourneySection />
      <WhyUsSection />
      <ContactSection />
    </>
  );
}
