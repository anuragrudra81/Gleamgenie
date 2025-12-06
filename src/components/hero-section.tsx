import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image-1');

export function HeroSection() {
  return (
    <section className="w-full bg-background pt-16 md:pt-24">
      <div className="container mx-auto text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          your space, spotlessly clean.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground font-light max-w-3xl mx-auto">
          gleam genie provides premium residential and commercial cleaning services in bayside melbourne. experience the gold standard of luxury cleaning.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="w-full sm:w-auto tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
            GET A FREE QUOTE
          </Button>
        </div>
      </div>
      <div className="mt-12 md:mt-16 w-full h-[300px] md:h-[500px] lg:h-[650px] relative animate-fade-in">
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
    </section>
  );
}
