"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { GleamGenieLogo } from "./icons";

const navLinks = [
  { href: "/#services", label: "services" },
  { href: "/#pricing", label: "pricing" },
  { href: "/#about", label: "about us" },
  { href: "/#contact", label: "contact" },
];

export function SiteHeader() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" prefetch={false}>
          <GleamGenieLogo className="h-7 w-7 text-primary" />
          <span className="font-semibold text-lg tracking-wide inline-block">gleam genie</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="w-px h-6 bg-border mx-4"></div>
          <Button variant="ghost" size="sm" className="transform transition-transform duration-300 hover:-translate-y-1">get a free quote</Button>
        </div>


        <div className="flex items-center justify-end space-x-2 md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <GleamGenieLogo className="h-7 w-7 text-primary" />
                <span className="font-bold text-xl tracking-wider">gleam genie</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg transition-colors hover:text-primary tracking-widest animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSheetOpen(false)}
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
