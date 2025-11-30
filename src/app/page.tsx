import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <div className="text-center py-8 border-b">
        <h2 className="text-2xl tracking-[0.4em] text-gray-400 font-light">GLEAMGENIE</h2>
        <p className="text-sm tracking-widest text-gray-500 mt-2">THE GOLD STANDARD OF LUXURY CLEANING</p>
      </div>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
