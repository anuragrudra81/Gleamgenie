import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { WhatsAppIcon } from "./icons";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image-1');

export function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
          Professional Cleaning Services for Homes & Offices
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
          Your space, spotlessly clean. We bring the sparkle back to your life.
        </p>
        <Button size="lg" className="mt-8" asChild>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="mr-2 h-6 w-6" />
            Contact via WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
