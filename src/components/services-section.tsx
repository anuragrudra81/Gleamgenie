
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Home, Construction, Baby } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "residential cleaning",
    description: "We provide reliable home cleaning, thorough spring cleans, and detailed end of lease and vacate cleaning to make moving or refreshing your home simple and stress-free.",
    href: "/services/home-cleaning",
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "commercial office cleaning",
    description: "We deliver professional office cleaning to keep your workplace fresh, hygienic, and welcoming, creating a space where your team can be productive and clients feel confident.",
    href: "/services/office-cleaning",
  },
  {
    icon: <Construction className="h-8 w-8 text-primary" />,
    title: "construction cleaning",
    description: "Our post-construction service delivers a thorough, top-to-bottom clean, transforming your new build into a pristine, move-in ready space.",
    href: "/services/construction-cleaning",
  },
   {
    icon: <Baby className="h-8 w-8 text-primary" />,
    title: "childcare cleaning",
    description: "We provide specialized cleaning for childcare centers, ensuring a safe, hygienic, and welcoming environment for children and staff.",
    href: "/services/childcare-cleaning",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-primary">our cleaning services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              we offer a range of services to meet your specific cleaning needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 pt-12 sm:max-w-4xl grid-cols-1 sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
          {services.map((service, index) => (
            <Link href={service.href} key={service.title} className="group">
              <Card className="text-center bg-transparent border-0 shadow-none animate-fade-in-up group-hover:bg-secondary/50 transition-all duration-300 h-full group-hover:scale-105" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="items-center">
                  <div className="bg-transparent p-0 mb-4">{service.icon}</div>
                  <CardTitle className="font-semibold text-primary tracking-wide">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-light text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
