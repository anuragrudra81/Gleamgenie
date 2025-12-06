import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image-1');

export function HeroSection() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="flex flex-col items-start text-left space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              your space, spotlessly clean.
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              gleam genie provides premium residential and commercial cleaning services in bayside melbourne. experience the gold standard of luxury cleaning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                get a free quote
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[550px] w-full rounded-md overflow-hidden">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
