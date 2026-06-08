import Link from "next/link";
import { GleamGenieLogo } from "./icons";

const contactDetails = [
    { label: "Office Hour(s)", value: "Monday to Saturday (8AM to 5PM)" },
    { label: "Email", value: "gleamgenie9@gmail.com", href: "mailto:gleamgenie9@gmail.com" },
    { label: "Phone", value: "+61 472 526 148", href: "tel:+61472526148" },
    { label: "ABN", value: "41600925978" },
];

const socialLinks = [
  { href: "https://www.instagram.com/gleamgenie.cs", label: "Instagram" },
  { href: "https://www.facebook.com/gleam.genie/", label: "Facebook" },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container flex flex-col items-center gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <GleamGenieLogo className="h-48 md:h-64 w-auto" />
              <span className="font-semibold text-xl tracking-wide sr-only">gleam genie</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm w-full md:w-auto">
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

        <div className="w-full border-t border-border pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground font-light">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
                © {new Date().getFullYear()} gleam genie. All rights reserved.
            </div>
            <div className="flex gap-4">
                <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                 {socialLinks.map((social) => (
                    <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    >
                    {social.label}
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
