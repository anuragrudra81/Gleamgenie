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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for you. No hidden fees, ever.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 pt-12 sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.isPopular ? "border-primary-foreground shadow-2xl scale-105 bg-primary text-primary-foreground" : "bg-card"}`}>
              <CardHeader className="pb-4">
                {plan.isPopular && <div className="text-sm font-semibold text-background/80 mb-2 text-center tracking-widest uppercase">Most Popular</div>}
                <CardTitle className={plan.isPopular ? "text-primary-foreground" : ""}>{plan.name}</CardTitle>
                <CardDescription className="flex items-baseline">
                  <span className={`text-4xl font-bold ${plan.isPopular ? "text-primary-foreground" : ""}`}>{plan.price}</span>
                  <span className={`ml-1 ${plan.isPopular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{plan.frequency}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 flex-grow">
                <ul className="grid gap-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center ${plan.isPopular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      <Check className={`mr-2 h-4 w-4 ${plan.isPopular ? "text-background" : "text-primary"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.isPopular ? "secondary" : "default"}>
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
