
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PricingSection } from "@/components/pricing-section";
import { QuoteForm } from "@/components/quote-form";

const serviceImage = PlaceHolderImages.find(p => p.id === 'service-home-cleaning');

export default function HomeCleaningPage() {
  const [showForm, setShowForm] = useState(false);

  const handleGetQuoteClick = () => {
    setShowForm(true);
    // Use a timeout to ensure the form is rendered before scrolling
    setTimeout(() => {
      document.getElementById("quote-form")?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
              <Button onClick={handleGetQuoteClick} className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1">
                  Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showForm && <QuoteForm />}
      <PricingSection />
    </>
  );
}
