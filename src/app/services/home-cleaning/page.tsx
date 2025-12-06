
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-home-cleaning');

export default function HomeCleaningPage() {
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Home Cleaning</h1>
          <p className="text-muted-foreground font-light max-w-lg">
            Our standard home cleaning service is perfect for keeping your living space fresh, tidy, and comfortable. We handle all the essential tasks, from dusting and vacuuming to wiping down surfaces and cleaning bathrooms. We work with you to create a customized cleaning schedule that fits your lifestyle, whether you need weekly, bi-weekly, or monthly visits.
          </p>
          <div className="pt-4">
            <Button asChild className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                <Link href="/#contact">Book Home Cleaning</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
