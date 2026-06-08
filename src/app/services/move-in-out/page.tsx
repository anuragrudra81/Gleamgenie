import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { PricingSection } from "@/components/pricing-section";

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-move-in-out');

export default function MoveInOutCleaningPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Move In, Out Cleaning</h1>
            <p className="text-muted-foreground font-light max-w-lg">
              Moving is stressful enough without having to worry about cleaning. Our move in, out cleaning service provides a deep clean for empty homes, ensuring a seamless transition for both renters and homeowners. Whether you are preparing a property for the next tenant or wanting to start fresh in your new home, we deliver a spotless space from top to bottom.
            </p>
            <div className="pt-4">
              <Button asChild className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                  <Link href="https://calendly.com/gleamgenie" target="_blank" rel="noopener noreferrer">Book a Move Out Clean</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PricingSection />
    </>
  );
}
