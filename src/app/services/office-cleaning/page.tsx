
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-office-cleaning');

export default function OfficeCleaningPage() {
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Office Cleaning</h1>
          <p className="text-muted-foreground font-light max-w-lg">
            A clean and organized office environment is crucial for productivity and employee well-being. Our professional office cleaning service ensures your workspace is always immaculate. We cover everything from individual workstations and common areas to restrooms and kitchens, using eco-friendly products to create a healthy and inviting atmosphere.
          </p>
          <div className="pt-4">
            <Button asChild className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                <Link href="/#contact">Get a Quote for Your Office</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
