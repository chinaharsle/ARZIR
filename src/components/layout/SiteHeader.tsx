"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { MainMenu } from "@/components/nav/MainMenu";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
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

  // Handle scroll effect with useEffect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo/ARZIR-Original-LOGO.png"
              alt="ARZIR - Industrial Recycling & Metal Processing Machinery"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto"
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
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-2 hover:bg-arzir-gray-100 transition-colors"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-arzir-gray-700" />
                  ) : (
                    <Menu className="h-6 w-6 text-arzir-gray-700" />
                  )}
                  <span className="sr-only">
                    {isMobileMenuOpen ? "Close menu" : "Open menu"}
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-white p-0">
                <div className="p-4 border-b border-arzir-gray-200">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo/ARZIR-Original-LOGO.png"
                      alt="ARZIR"
                      width={100}
                      height={28}
                      className="h-7 w-auto"
                    />
                  </div>
                </div>
                <div className="p-4 pt-2">
                  <MainMenu 
                    isMobile={true} 
                    onItemClick={() => setIsMobileMenuOpen(false)} 
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}