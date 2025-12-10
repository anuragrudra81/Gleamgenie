
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { SparkleIcon } from "./icons";

const packages = [
  {
    title: "bronze package",
    description: "A light refresh to keep your home tidy. Perfect for regular upkeep. The Bronze Package covers all the essential tasks to keep your space fresh, tidy, and guest ready.",
    features: [
      "Vacuuming and mopping all floors",
      "Wipe down all surfaces, countertops (including shower screens & baths)",
      "Clean Toilets & Basins",
      "Empty rubbish bins",
    ],
    buttonLabel: "Get a Quote",
    buttonLink: "https://calendly.com/gleamgenie",
    variant: 'default' as const,
  },
  {
    title: "silver package",
    description: "Upgrade anytime to the Silver Package for a more detailed clean. Perfect for homes needing that little extra attention on top of the basics.",
    features: [
      "Dust skirting boards and light fixtures",
      "Thoroughly wipe down all cupboards and appliances",
      "Rearrange/tidy any toys, cushions & throws",
      "Polish stainless steel fixtures throughout all bathrooms and kitchen areas",
    ],
    buttonLabel: "Get a Quote",
    buttonLink: "https://calendly.com/gleamgenie",
    variant: 'outline' as const,
  },
  {
    title: "gold package",
    description: "Customize your clean with our Gold add-ons options, available for both one-off services and ongoing regular cleans. Tailor the service to your specific needs, whether it’s a deep clean, appliance detailing, or extra organizing.",
    features: [
      "Linen Changing $12/bed",
      "Wash, Dry, Fold $45/load",
      "Ironing $40/30mins",
      "Wash dishes $40/30 mins",
      "Oven Clean $75",
      "Microwave clean $25",
      "Fridge Clean $35",
      "Clean Induction Fan $50-100",
      "Inside Windows $65-120",
      "Garage/Patio $30",
    ],
    buttonLabel: "Get a Quote",
    buttonLink: "https://calendly.com/gleamgenie",
    variant: 'default' as const,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-primary">Choose the Right Clean for Your Home</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
             Every home starts with our trusted Bronze Package, with the flexibility to upgrade to Silver or customize as needed with Gold. Whether you're after the essentials, a deeper clean, or specific add-ons, we've got a package that fits.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3 pt-12">
          {packages.map((pkg, index) => (
            <Card key={pkg.title} className="h-full flex flex-col bg-transparent border-0 shadow-none text-center">
              <CardHeader className="items-center">
                <SparkleIcon className={`h-10 w-10 mb-4 ${index === 1 ? 'text-gray-300' : 'text-yellow-500'}`} />
                <CardTitle className="uppercase tracking-wider">{pkg.title}</CardTitle>
                <CardDescription className="font-light text-sm">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow items-center">
                 <h4 className="font-semibold mb-4">What's Included?</h4>
                <ul className="grid gap-3 flex-grow text-left">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-1">&bull;</span>
                      <span className="text-muted-foreground font-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 tracking-wide transform transition-transform duration-300 hover:-translate-y-1 w-full" variant={pkg.variant}>
                  <Link href={pkg.buttonLink} target="_blank" rel="noopener noreferrer">
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
