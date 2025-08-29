import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Mills Applications & Solutions",
  description: "Handle mill scrap safely with industrial-grade processing equipment designed for continuous operation in demanding steel production environments.",
};

export default function SteelMillsPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Steel Mills Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Handle mill scrap safely with industrial-grade processing equipment designed for continuous operation.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                24/7 operation
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Heavy-duty design
              </div>
            </div>
            <QuoteDialog source="steel_mills_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/steel-mills-full.webp"
                alt="Steel Mill Processing"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Industry Overview */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
            Industry Overview
          </h2>
          <p className="text-lg text-arzir-gray-600 leading-relaxed max-w-4xl">
            Steel mills generate substantial volumes of processing scrap, mill scale, and production returns that require 
            efficient handling and recycling systems. Modern steel production demands equipment capable of processing 
            heavy materials continuously while maintaining safety standards and environmental compliance in demanding 
            industrial environments.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">1000+</div>
              <div className="text-sm text-arzir-gray-600">Tons/day capacity</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">99.5%</div>
              <div className="text-sm text-arzir-gray-600">Uptime reliability</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">24/7</div>
              <div className="text-sm text-arzir-gray-600">Continuous operation</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">30%</div>
              <div className="text-sm text-arzir-gray-600">Cost reduction</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Equipment */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Recommended Equipment
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Heavy-Duty Gantry Shear",
                description: "Industrial-strength shearing systems designed for continuous processing of heavy steel mill scrap and structural materials",
                href: "/products/gantry-shear",
                image: "✂️"
              },
              {
                title: "Mill Scrap Baler",
                description: "High-capacity baling systems for processing mill returns, off-cuts, and production scrap with maximum density",
                href: "/products/scrap-metal-baler",
                image: "📦"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl group hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{item.image}</div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-arzir-gray-600 text-sm">
                      {item.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={item.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ApplicationCTA 
        
        formSource="steel-mills_bottom" 
      />
    </>
  );
}
