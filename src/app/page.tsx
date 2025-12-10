
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ContactSection } from "@/components/contact-section";
import { PricingSection } from "@/components/pricing-section";
import { QuoteForm } from "@/components/quote-form";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuoteForm />
      <ServicesSection />
      <JourneySection />
      <WhyUsSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
