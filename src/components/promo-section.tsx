import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GleamGenieLogo } from "./icons";

export function PromoSection() {
  return (
    <section className="bg-background py-3 border-b border-t">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
           <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <GleamGenieLogo className="h-8 w-8 text-primary" />
            <span className="font-headline font-bold text-xl">Gleam Genie</span>
          </Link>
          <Button variant="gold">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
