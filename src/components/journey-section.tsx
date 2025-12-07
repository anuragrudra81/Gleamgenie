
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const journeyImage = PlaceHolderImages.find(p => p.id === 'journey-image-1');

export function JourneySection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">My Journey</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[400px] md:h-[550px] w-full rounded-md overflow-hidden animate-fade-in">
            {journeyImage && (
              <Image
                src={journeyImage.imageUrl}
                alt={journeyImage.description}
                fill
                className="object-cover"
                data-ai-hint={journeyImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up text-left">
            <p className="text-muted-foreground font-light max-w-lg">
              I'm Norah, the founder of Gleam Genie. Originally from Milan, Italy, I moved to Melbourne with a passion for luxury and a love for creating beautiful, immaculate spaces. Inspired by the elegance I grew up around, I wanted to bring that same level of care and attention to detail to the homes here in Melbourne.
            </p>
            <p className="text-muted-foreground font-light max-w-lg">
              Gleam Genie started as a vision to offer more than just cleaning—it's about creating an experience, transforming each home into a serene, luxurious sanctuary. Today, I'm proud to provide a service that delivers quality, elegance, and a touch of Italy in every home we clean.
            </p>
            <div className="pt-4">
              <Button asChild variant="outline" className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                <Link href="/#contact">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
