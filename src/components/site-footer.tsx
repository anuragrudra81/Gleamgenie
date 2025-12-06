import Link from "next/link";
import { GleamGenieLogo } from "./icons";

const contactDetails = [
    { label: "Office Hour(s)", value: "Monday to Saturday (8AM to 5PM)" },
    { label: "Email", value: "gleamgenie9@gmail.com", href: "mailto:gleamgenie9@gmail.com" },
    { label: "Phone", value: "+61 0472526148", href: "tel:+610472526148" },
    { label: "ABN", value: "41600925978" },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <GleamGenieLogo className="h-10 w-10 text-primary" />
            <span className="font-semibold text-xl tracking-wide sr-only">gleam genie</span>
          </Link>
          <div className="text-xs text-muted-foreground font-light text-center md:text-left">
            © {new Date().getFullYear()} gleam genie.
            <br />
            all rights reserved.
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm w-full md:w-auto">
            {contactDetails.map(detail => (
                <div key={detail.label} className="text-center md:text-left">
                    <p className="font-semibold text-primary tracking-wide">{detail.label}</p>
                    {detail.href ? (
                         <a href={detail.href} className="text-muted-foreground font-light hover:text-primary transition-colors">{detail.value}</a>
                    ): (
                        <p className="text-muted-foreground font-light">{detail.value}</p>
                    )}
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
}
