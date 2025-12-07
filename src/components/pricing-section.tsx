
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    title: "bronze package",
    description: "a light refresh to keep your home tidy. perfect for regular upkeep. the bronze package covers all the essential tasks to keep your space fresh, tidy, and guest ready.",
    features: [
      "vacuuming and mopping all floors",
      "wipe down all surfaces, countertops (including shower screens & baths)",
      "clean toilets & basins",
      "empty rubbish bins",
    ],
    buttonLabel: "book cleaning now",
  },
  {
    title: "silver package",
    description: "a light refresh to keep your home tidy. perfect for regular upkeep. the bronze package covers all the essential tasks to keep your space fresh, tidy, and guest ready.",
    features: [
      "3-4 bedrooms",
      "all standard features",
      "inside cabinets & oven",
      "interior windows",
    ],
    buttonLabel: "book cleaning now",
  },
  {
    title: "deep clean",
    description: "customize your clean with our gold add-ons options, available for both one-off services and ongoing regular cleans.",
    features: [
      "all premium features",
      "baseboard & wall washing",
      "detailed appliance cleaning",
      "move-in / move-out ready",
    ],
    buttonLabel: "book cleaning now",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">simple, transparent pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              choose the plan that's right for you. no hidden fees, ever.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3 pt-12">
          {packages.map((pkg) => (
            <Card key={pkg.title} className="h-full flex flex-col transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="uppercase tracking-wider">{pkg.title}</CardTitle>
                <CardDescription className="font-light">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <ul className="grid gap-3 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground font-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 tracking-wide transform transition-transform duration-300 hover:-translate-y-1 w-full" variant="outline">
                  <Link href="https://calendly.com/gleamgenie" target="_blank" rel="noopener noreferrer">
                    {pkg.buttonLabel}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
