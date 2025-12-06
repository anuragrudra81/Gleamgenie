
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { GleamGenieLogo } from "./icons";

const serviceLinks = [
  { href: "/services/home-cleaning", label: "home cleaning" },
  { href: "/services/office-cleaning", label: "office cleaning" },
  { href: "/services/builder-cleaning", label: "builder cleaning" },
  { href: "/services/move-in-out", label: "move-in/out" },
];

const mainNavLinks = [
  { href: "/#about", label: "about us" },
  { href: "/gallery", label: "gallery" },
  { href: "/career", label: "careers" },
  { href: "/#contact", label: "contact" },
];

export function SiteHeader() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClassName = `transition-colors ${
    isScrolled
      ? "text-muted-foreground hover:text-primary"
      : "text-white/80 hover:text-white"
  }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 mr-auto md:mr-0"
          prefetch={false}
        >
          <GleamGenieLogo
            className={`h-7 w-7 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          />
          <span
            className={`font-semibold text-lg tracking-wide inline-block ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            gleam genie
          </span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <DropdownMenu open={isServicesMenuOpen} onOpenChange={setIsServicesMenuOpen}>
                <div onMouseEnter={() => setIsServicesMenuOpen(true)} onMouseLeave={() => setIsServicesMenuOpen(false)}>
                    <DropdownMenuTrigger className={`flex items-center gap-1 ${linkClassName}`} onMouseEnter={() => setIsServicesMenuOpen(true)}>
                        all services <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        {serviceLinks.map((link) => (
                        <DropdownMenuItem key={link.href} asChild>
                            <Link href={link.href} prefetch={false}>
                            {link.label}
                            </Link>
                        </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </div>
            </DropdownMenu>

            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClassName}
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center justify-end space-x-2 ml-auto">
            <Button
                variant="ghost"
                size="sm"
                asChild
                className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                isScrolled
                    ? "text-primary hover:text-primary"
                    : "text-white hover:text-white"
                }`}
            >
                <Link href="https://calendly.com/gleamgenie" target="_blank" rel="noopener noreferrer">
                    INSTANT QUOTE
                </Link>
            </Button>
        </div>

        <div className="flex items-center justify-end space-x-2 md:hidden ml-auto">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`${isScrolled ? "text-primary" : "text-white"}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <GleamGenieLogo className="h-7 w-7 text-primary" />
                <span className="font-bold text-xl tracking-wider">
                  gleam genie
                </span>
              </Link>
              <div className="flex flex-col space-y-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-b-0">
                    <AccordionTrigger className="text-lg transition-colors hover:text-primary tracking-widest py-2 hover:no-underline">
                      all services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        {serviceLinks.map((link) => (
                          <SheetClose key={link.href} asChild>
                            <Link
                              href={link.href}
                              className="text-base text-muted-foreground transition-colors hover:text-primary tracking-widest"
                              prefetch={false}
                            >
                              {link.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {mainNavLinks.map((link, index) => (
                   <SheetClose key={link.href} asChild>
                    <Link
                        href={link.href}
                        className="text-lg transition-colors hover:text-primary tracking-widest py-2"
                        prefetch={false}
                    >
                        {link.label}
                    </Link>
                   </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
