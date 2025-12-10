
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image-1');

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white animate-fade-in">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container px-4 md:px-6 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
          your space, spotlessly clean.
        </h1>
        <p className="mt-6 text-lg font-light max-w-3xl mx-auto text-white/90">
          Premium Residential & Commercial Cleaning Services in Bayside Melbourne
        </p>
        <div className="mt-8 flex justify-center">
          <Button 
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto tracking-wide transform transition-transform duration-300 hover:-translate-y-1 bg-transparent border-white text-white hover:bg-white hover:text-primary">
            <Link href="https://calendly.com/gleamgenie" target="_blank" rel="noopener noreferrer">
                INSTANT QUOTE
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
