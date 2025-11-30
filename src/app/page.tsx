import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
