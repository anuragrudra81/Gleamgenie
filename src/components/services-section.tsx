import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, Sparkles, Truck } from "lucide-react";

const services = [
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "home cleaning",
    description: "regular cleaning to keep your home fresh and tidy. customizable schedules available.",
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "office cleaning",
    description: "professional cleaning services for a productive and healthy workspace.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "deep cleaning",
    description: "a thorough, top-to-bottom clean for when your space needs extra attention.",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "move-in/out",
    description: "stress-free cleaning for empty homes to ensure a smooth transition.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-extralight tracking-tighter sm:text-5xl text-primary">our cleaning services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              we offer a range of services to meet your specific cleaning needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 pt-12 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="text-center bg-transparent border-0 shadow-none">
              <CardHeader className="items-center">
                <div className="bg-transparent p-0 mb-4">{service.icon}</div>
                <CardTitle className="font-light text-primary tracking-wider">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-light text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
