import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image-1');

export function HeroSection() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-24">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Premium Residential & Commercial Cleaning Services in Bayside Melbourne
            </h1>
            <Button size="lg" className="mt-8 rounded-none" variant="outline">
              GET A QUOTE
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[600px] w-full">
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
