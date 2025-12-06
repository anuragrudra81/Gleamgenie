
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareerPage() {
  return (
    <div className="container mx-auto px-4 py-16 pt-32 sm:pt-48 text-center">
      <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">Join Our Team</h1>
        <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed font-light">
          We are growing and always looking for passionate, detail-oriented individuals to join the Gleam Genie family. If you are committed to excellence and want to be part of a team that values quality and customer satisfaction, we would love to hear from you.
        </p>
        <div className="pt-4">
          <Button asChild className="tracking-wide transform transition-transform duration-300 hover:-translate-y-1" size="lg">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
