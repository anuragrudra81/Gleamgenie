import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "standard",
    price: "$99",
    frequency: "per cleaning",
    features: ["1-2 bedrooms", "general dusting", "vacuuming & mopping", "kitchen & bathroom cleaning"],
    isPopular: false,
  },
  {
    name: "premium",
    price: "$149",
    frequency: "per cleaning",
    features: ["3-4 bedrooms", "all standard features", "inside cabinets & oven", "interior windows"],
    isPopular: true,
  },
  {
    name: "deep clean",
    price: "$249",
    frequency: "one-time",
    features: ["all premium features", "baseboard & wall washing", "detailed appliance cleaning", "move-in / move-out ready"],
    isPopular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-primary">simple, transparent pricing</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              choose the plan that's right for you. no hidden fees, ever.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 pt-12 sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card key={plan.name} className={`flex flex-col bg-card transform transition-transform duration-300 hover:-translate-y-2 ${plan.isPopular ? "border-primary" : "border-border"} animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-4">
                {plan.isPopular && <div className="text-xs font-semibold text-primary mb-2 text-center tracking-widest">most popular</div>}
                <CardTitle className="font-semibold tracking-wide">{plan.name}</CardTitle>
                <CardDescription className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
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
                <Button className="w-full tracking-wide transform transition-transform duration-300 hover:-translate-y-1" variant={plan.isPopular ? "default" : "outline"}>
                  book cleaning now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
