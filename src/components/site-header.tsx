"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { GleamGenieLogo } from "./icons";
import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2" prefetch={false}>
          <GleamGenieLogo className="h-6 w-6 text-primary" />
          <span className="font-bold">Gleam Genie</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:inline-flex">
             <Link href="#contact" prefetch={false}>Book Cleaning Now</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <GleamGenieLogo className="h-6 w-6 text-primary" />
                <span className="font-bold">Gleam Genie</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg transition-colors hover:text-primary"
                    onClick={() => setSheetOpen(false)}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="#contact" onClick={() => setSheetOpen(false)} prefetch={false}>Book Cleaning Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
