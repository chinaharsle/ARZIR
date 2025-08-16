"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { MainMenu } from "@/components/nav/MainMenu";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SiteHeaderProps {
  className?: string;
}

export function SiteHeader({ className }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-arzir-gray-200 shadow-sm"
          : "bg-white",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/ARZIR-Original-LOGO.png"
              alt="ARZIR - Industrial Recycling & Metal Processing Machinery"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <MainMenu />
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center">
            <QuoteDialog source="header">
              <Button size="sm" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
              </Button>
            </QuoteDialog>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    {siteConfig.name}
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <MainMenu 
                    isMobile={true} 
                    onItemClick={() => setIsMobileMenuOpen(false)} 
                  />
                  <div className="mt-6">
                    <QuoteDialog source="mobile_header">
                      <Button className="w-full bg-arzir-primary hover:bg-primary-600">
                        Get a Quote
                      </Button>
                    </QuoteDialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}