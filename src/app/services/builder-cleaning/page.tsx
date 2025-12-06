
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-builder-cleaning');

export default function BuilderCleaningPage() {
  return (
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Builder Cleaning</h1>
          <p className="text-muted-foreground font-light max-w-lg">
            Post-construction cleanup requires a special level of attention. Our builder cleaning service is designed to handle the dust, debris, and residue left behind after a renovation or new build. We provide a thorough, top-to-bottom clean that makes the property shine and ready for its new occupants. From detailed vacuuming to polishing surfaces, we ensure every corner is spotless.
          </p>
          <div className="pt-4">
            <Button asChild className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                <Link href="/#contact">Schedule a Builder Clean</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
