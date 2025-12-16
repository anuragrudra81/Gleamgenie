
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { Menu, ChevronDown, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { GleamGenieLogo } from "./icons";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

const serviceLinks = [
  { href: "/services/home-cleaning", label: "residential cleaning" },
  { href: "/services/office-cleaning", label: "commercial cleaning" },
  { href: "/services/construction-cleaning", label: "construction cleaning" },
  { href: "/services/childcare-cleaning", label: "childcare cleaning" },
  { href: "/services/airbnb-cleaning", label: "airbnb cleaning" },
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (!mounted) {
    return (
        <header
          className={'fixed top-0 z-50 w-full bg-transparent'}
        >
        <div className="container flex h-24 items-center">
            <Link
            href="/"
            className="flex items-center space-x-2 mr-auto"
            prefetch={false}
            >
            <GleamGenieLogo
                className="h-[20rem] w-auto"
            />
            <span className="font-semibold text-xl tracking-wide sr-only">gleam genie</span>
            </Link>
        </div>
      </header>
    );
  }

  const headerIsTransparent = isHomePage && !isScrolled;

  const linkClassName = `transition-colors ${
    headerIsTransparent
      ? "text-white/80 hover:text-white"
      : "text-muted-foreground hover:text-primary"
  }`;

  const mobileMenuClassName = `${
    headerIsTransparent ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80"
  }`;
  
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        !headerIsTransparent
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 mr-auto"
          prefetch={false}
        >
          <GleamGenieLogo
            className="h-[20rem] w-auto"
          />
           <span className="font-semibold text-xl tracking-wide sr-only">gleam genie</span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <DropdownMenu open={isServicesMenuOpen} onOpenChange={setIsServicesMenuOpen}>
                <div onMouseEnter={() => setIsServicesMenuOpen(true)} onMouseLeave={() => setIsServicesMenuOpen(false)}>
                    <DropdownMenuTrigger className={`flex items-center gap-1 ${linkClassName}`} onMouseEnter={() => setIsServicesMenuOpen(true)}>
                        all services <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {serviceLinks.map((link) => (
                        <DropdownMenuItem key={link.href} asChild>
                            <Link href={link.href} prefetch={false} className="text-muted-foreground hover:text-primary">
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
             <Link
                href="tel:0472526148"
                className={cn(buttonVariants({ variant: 'default', size: 'sm' }), "bg-primary text-primary-foreground hover:bg-primary/90 transform transition-all duration-300 hover:-translate-y-1")}
              >
                <Phone className="h-4 w-4" />
                0472 526 148
              </Link>
        </div>

        <div className="flex items-center justify-end space-x-2 md:hidden ml-auto">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={mobileMenuClassName}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <div className="flex justify-center mt-8 mb-4">
                <Link href="/" onClick={() => setSheetOpen(false)}>
                    <GleamGenieLogo className="h-64 w-auto text-primary" />
                    <span className="sr-only">Gleam Genie</span>
                </Link>
              </div>

              <div className="flex-grow flex flex-col justify-center">
                  <div className="flex flex-col space-y-2 text-center">
                      <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="services" className="border-b-0">
                          <AccordionTrigger className="justify-center text-lg transition-colors hover:text-primary tracking-widest py-3 hover:no-underline">
                          all services
                          </AccordionTrigger>
                          <AccordionContent>
                          <div className="flex flex-col space-y-3 pt-2 text-center">
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

                      {mainNavLinks.map((link) => (
                      <SheetClose key={link.href} asChild>
                          <Link
                              href={link.href}
                              className="text-lg transition-colors hover:text-primary tracking-widest py-3"
                              prefetch={false}
                          >
                              {link.label}
                          </Link>
                      </SheetClose>
                      ))}
                  </div>
              </div>

              <div className="mt-auto mb-8">
                  <SheetClose asChild>
                      <Link
                          href="tel:0472526148"
                          className={cn(buttonVariants({ variant: 'default', size: 'lg' }), "w-full")}
                      >
                          <Phone className="h-4 w-4" />
                          0472 526 148
                      </Link>
                  </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
