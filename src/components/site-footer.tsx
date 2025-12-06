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
            <span className="font-semibold text-xl tracking-wide">gleam genie</span>
          </Link>
          <p className="text-sm text-muted-foreground font-light">
            professional cleaning services for homes and offices. your space, spotlessly clean.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold tracking-wide">quick links</h4>
          <Link href="/#services" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors" prefetch={false}>services</Link>
          <Link href="/#pricing" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors" prefetch={false}>pricing</Link>
          <Link href="/#about" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors" prefetch={false}>about us</Link>
          <Link href="/#contact" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors" prefetch={false}>contact</Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold tracking-wide">contact us</h4>
          <a href="mailto:contact@gleamgenie.com" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">contact@gleamgenie.com</a>
          <a href="tel:+1234567890" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
          <p className="text-sm text-muted-foreground font-light">123 clean st, sparkle city, 12345</p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-semibold tracking-wide">follow us</h4>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">facebook</Link>
            <Link href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">instagram</Link>
            <Link href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">twitter</Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground font-light">
          © {new Date().getFullYear()} gleam genie. all rights reserved.
        </p>
      </div>
    </footer>
  );
}
