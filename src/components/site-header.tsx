"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { GleamGenieLogo } from "./icons";

const navLinks = [
  { href: "/#services", label: "services" },
  { href: "/#pricing", label: "pricing" },
  { href: "/#about", label: "about us" },
  { href: "/#contact", label: "contact" },
];

export function SiteHeader() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" prefetch={false}>
          <GleamGenieLogo className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl tracking-widest inline-block">gleam genie</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary/80 text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg transition-colors hover:text-primary tracking-widest"
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
