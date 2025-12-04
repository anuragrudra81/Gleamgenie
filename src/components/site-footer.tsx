import Link from "next/link";
import { GleamGenieLogo, WhatsAppIcon } from "./icons";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <GleamGenieLogo className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl uppercase tracking-wider">Gleam Genie</span>
          </Link>
          <p className="text-sm text-muted-foreground font-light">
            Professional cleaning services for homes and offices. Your space, spotlessly clean.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Quick Links</h4>
          <Link href="/#services" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Services</Link>
          <Link href="/#pricing" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Pricing</Link>
          <Link href="/#about" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors" prefetch={false}>About Us</Link>
          <Link href="/#contact" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Contact</Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Contact Us</h4>
          <a href="mailto:contact@gleamgenie.com" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">contact@gleamgenie.com</a>
          <a href="tel:+1234567890" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
          <p className="text-sm text-muted-foreground font-light">123 Clean St, Sparkle City, 12345</p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-medium">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Facebook</Link>
            <Link href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground font-light">
          © {new Date().getFullYear()} Gleam Genie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
