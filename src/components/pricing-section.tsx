
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GenieLampIcon } from "./icons";

const packages = [
  {
    title: "bronze package",
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
            <div key={pkg.title} className="flex flex-col items-center text-center p-6 h-full">
              <GenieLampIcon className={`h-10 w-10 mb-4 ${index === 1 ? 'text-gray-400' : 'text-yellow-500'}`} />
              <h3 className="font-semibold text-xl mb-4">What's Included?</h3>
              <ul className="grid gap-3 flex-grow text-left">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-primary mt-1">&bull;</span>
                    <span className="text-muted-foreground font-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 tracking-wide transform transition-transform duration-300 hover:-translate-y-1 w-full" variant={pkg.variant}>
                <Link href={pkg.buttonLink} target="_blank" rel="noopener noreferrer">
                  {pkg.buttonLabel}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
