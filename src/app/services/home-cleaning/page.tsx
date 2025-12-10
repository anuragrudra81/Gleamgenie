
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { PricingSection } from "@/components/pricing-section";
import { Check } from "lucide-react";

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-home-cleaning');

const cleaningChecklist = {
  "Kitchen": [
    "Wipe down the benchtops and the front of cupboards and drawers with a disinfectant, removing any fingerprints and grime.",
    "Clean and polish the sink, making sure to remove any food debris. For the taps and spout, give them a polish to make them shine.",
    "If the sink is cluttered with dishes, load the dishwasher to clear it before cleaning.",
    "Disinfect and wipe down the entire kitchen countertop surface.",
    "Sanitize the exteriors of the stovetop, fridge, oven, kettle, toaster, dishwasher, and microwave.",
    "Wipe down the front of the range hood and remove any grease build-up."
  ],
  "Lounge": [
    "Dust the TV and remove any fingerprints.",
    "Dust the TV unit (if applicable).",
    "Dust the window sills.",
    "Clean the coffee table.",
    "Neatly arrange couch cushions and throw."
  ],
  "Bathroom": [
    "Clean and sanitise basin and drain, disinfect all benchtops and wipe the front of cupboards.",
    "Clean all mirrors.",
    "Spray and wipe the shower glass.",
    "Spot clean the hard water stains from the bottom of the glass.",
    "Wipe the niche/shelves.",
    "Sanitise the floor.",
    "Polish stainless steel fixtures.",
    "Dust the window sills."
  ],
  "Toilet": [
    "Wipe and disinfect toilets, including under the seat and around the outside of the bowl."
  ],
  "Bedroom": [
    "Dust the side tables.",
    "Tidy the bed.",
    "Remove fingerprints from the mirror wardrobe doors (if applicable)."
  ],
  "Dining": [
    "Clean the dining table and sanitise the surface.",
    "Wipe any placemats, removing food debris.",
    "Dust the window sills and remove any dead bugs."
  ],
  "Floor": [
    "Vaccuum the floors.",
    "Mop the floors."
  ]
};


export default function HomeCleaningPage() {
  return (
    <>
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
              Imagine coming home to a beautifully clean house. Our service is tailored to your home's size, so you'll never have to worry about an hourly rate or incomplete cleaning.
            </p>
             <p className="text-muted-foreground font-light max-w-lg">
              Click the "Get a Quote" button below and get an instant quote. Don't wait any longer to experience the luxury of a spotless home!
            </p>
            <div className="pt-4">
              <Button asChild className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                  <Link href="https://calendly.com/gleamgenie" target="_blank" rel="noopener noreferrer">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-center text-primary mb-12">What's Included?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(cleaningChecklist).map(([category, tasks]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">{category}</h3>
                <ul className="space-y-2">
                  {tasks.map((task, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground font-light text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PricingSection />
    </>
  );
}

