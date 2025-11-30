import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Standard",
    price: "$99",
    frequency: "per cleaning",
    features: ["1-2 Bedrooms", "General Dusting", "Vacuuming & Mopping", "Kitchen & Bathroom Cleaning"],
    isPopular: false,
  },
  {
    name: "Premium",
    price: "$149",
    frequency: "per cleaning",
    features: ["3-4 Bedrooms", "All Standard Features", "Inside Cabinets & Oven", "Interior Windows"],
    isPopular: true,
  },
  {
    name: "Deep Clean",
    price: "$249",
    frequency: "one-time",
    features: ["All Premium Features", "Baseboard & Wall Washing", "Detailed Appliance Cleaning", "Move-In / Move-Out Ready"],
    isPopular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl font-headline">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              Choose the plan that's right for you. No hidden fees, ever.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 pt-12 sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.isPopular ? "border-primary shadow-2xl scale-105" : ""}`}>
              <CardHeader className="pb-4">
                {plan.isPopular && <div className="text-sm font-semibold text-primary mb-2 text-center tracking-widest uppercase">Most Popular</div>}
                <CardTitle className="font-headline font-semibold">{plan.name}</CardTitle>
                <CardDescription className="flex items-baseline">
                  <span className="text-4xl font-bold font-headline">{plan.price}</span>
                  <span className="ml-1 text-muted-foreground font-light">{plan.frequency}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 flex-grow">
                <ul className="grid gap-3 text-sm text-muted-foreground font-light">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                  Book Cleaning Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
