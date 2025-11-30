import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Leaf, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Trusted & Trained",
    description: "Our cleaners are vetted, trained, and insured for your peace of mind.",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Affordable Pricing",
    description: "Transparent, competitive pricing with no hidden fees. Quality service that fits your budget.",
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Eco-Friendly Products",
    description: "We use safe, sustainable, and effective cleaning products for a healthy home.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Fast & Reliable",
    description: "Punctual, efficient, and reliable service that respects your time and schedule.",
  },
];

export function WhyUsSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl font-headline text-primary">Why Choose Gleam Genie?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              We're committed to providing a cleaning service you can trust.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 pt-12 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="grid gap-1 text-center">
              <div className="flex justify-center items-center mb-4">
                  <div className="p-4 rounded-full bg-background text-primary">
                    {reason.icon}
                  </div>
              </div>
              <h3 className="text-lg font-bold font-headline">{reason.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
