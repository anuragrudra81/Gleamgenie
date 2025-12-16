
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { PricingSection } from "@/components/pricing-section";

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-airbnb-cleaning');

export default function AirbnbCleaningPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-16 pt-32 sm:pt-48">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[300px] md:h-[450px] w-full rounded-md overflow-hidden animate-fade-in">
            {serviceImage && (
              <Image
                src={serviceImage.imageUrl}
                alt={serviceImage.description}
                fill
                className="object-cover"
                data-ai-hint={serviceImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Airbnb Cleaning</h1>
            <p className="text-muted-foreground font-light max-w-lg">
              Impress your guests with a spotless and welcoming space. Our Airbnb cleaning service is designed to provide a consistently high-quality clean between stays, ensuring 5-star reviews every time. We handle everything from fresh linens to sparkling surfaces, so you can focus on being a superhost.
            </p>
            <div className="pt-4">
              <Button asChild className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                  <Link href="https://calendly.com/gleamgenie" target="_blank" rel="noopener noreferrer">Book an Airbnb Clean</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PricingSection />
    </>
  );
}
