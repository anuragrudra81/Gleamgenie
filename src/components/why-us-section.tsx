import Image from "next/image";
import { Check } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const reasons = [
  {
    title: "Trusted & Trained Professionals",
    description: "Our cleaners are vetted, trained, and insured for your peace of mind.",
  },
  {
    title: "Eco-Friendly Products",
    description: "We use safe, sustainable products for a healthy home and a happy planet.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We're not happy unless you are. We'll re-clean any area you're not satisfied with.",
  },
  {
    title: "Flexible & Reliable Service",
    description: "Punctual and reliable service that respects your time. We fit into your schedule.",
  },
];

const whyUsImage = PlaceHolderImages.find(p => p.id === 'why-us-image-1');

export function WhyUsSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[400px] md:h-[550px] w-full rounded-lg overflow-hidden shadow-2xl">
            {whyUsImage && (
              <Image
                src={whyUsImage.imageUrl}
                alt={whyUsImage.description}
                fill
                className="object-cover"
                data-ai-hint={whyUsImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl font-headline text-primary">
                The Gold Standard of Clean
              </h2>
              <p className="text-muted-foreground font-light max-w-lg">
                We're committed to providing a cleaning service you can trust. Our meticulous attention to detail and unwavering commitment to quality set us apart.
              </p>
            </div>
            <ul className="grid gap-4">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex items-start gap-4">
                  <div className="text-gold rounded-full p-2 mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{reason.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
