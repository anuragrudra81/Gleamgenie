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
            <h1 className="text-4xl font-extralight tracking-tight text-primary sm:text-5xl md:text-6xl uppercase">
              Your Space, Spotlessly Clean.
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Gleam Genie provides premium residential and commercial cleaning services in Bayside Melbourne. Experience the gold standard of luxury cleaning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto uppercase tracking-widest">
                Get a Free Quote
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
