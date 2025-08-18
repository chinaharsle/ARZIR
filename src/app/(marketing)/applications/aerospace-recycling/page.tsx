import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aerospace Recycling Applications & Solutions | ARZIR",
  description: "Specialized aircraft dismantling and aerospace material recovery systems with precision processing for high-value titanium and aluminum alloys.",
};

export default function AerospaceRecyclingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Aerospace Recycling Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Specialized aircraft dismantling and aerospace material recovery systems with precision processing for high-value alloys.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                Aviation certified
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Premium materials
              </div>
            </div>
            <QuoteDialog source="aerospace_recycling_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/Aerospace Recycling Solutions.jpg"
                alt="Aerospace Material Recovery Facility with ARZIR Equipment"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiEiQVFhkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyoizDvj7V8fEK5vBa5Lxh9AVFt9Q6mF5jRAhR5EhHMKu8vqDgFPdNBOHbYRGPhLGO3iGgKDWSqz44Lp+hRRWGcqRG0E26SbLYf8sCo4Gj/2Q=="
                sizes="(max-width: 768px) 100vw, 50vw"
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
            Aerospace recycling requires ultra-precise processing capabilities to handle exotic materials including 
            titanium alloys, aerospace-grade aluminum, carbon fiber composites, and specialty steels. Modern aircraft 
            dismantling operations must maintain strict material traceability and certification requirements while 
            maximizing recovery of these high-value materials that command premium market prices.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">90%</div>
              <div className="text-sm text-arzir-gray-600">Material recovery by weight</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">12M</div>
              <div className="text-sm text-arzir-gray-600">Aircraft retired annually</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">120</div>
              <div className="text-sm text-arzir-gray-600">Days processing time</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">100%</div>
              <div className="text-sm text-arzir-gray-600">Traceability maintained</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Material Categories */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Aerospace Material Categories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Titanium Alloys",
                composition: "Ti-6Al-4V, Ti-6Al-2Sn-4Zr-2Mo",
                applications: ["Engine components", "Landing gear", "Structural frames"],
                value: "Extremely High",
                recovery: "95%",
                color: "border-purple-200 bg-purple-50"
              },
              {
                category: "Aerospace Aluminum",
                composition: "2024-T3, 7075-T6, 6061-T6",
                applications: ["Fuselage skin", "Wing structures", "Interior components"],
                value: "High",
                recovery: "98%",
                color: "border-blue-200 bg-blue-50"
              },
              {
                category: "Specialty Materials",
                composition: "Inconel, Stainless steel, Composites",
                applications: ["Engine hot sections", "Exhaust systems", "Avionics housings"],
                value: "Very High",
                recovery: "85%",
                color: "border-orange-200 bg-orange-50"
              }
            ].map((material, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${material.color}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {material.category}
                    </h3>
                    <div className="px-3 py-1 bg-arzir-primary/10 rounded-full">
                      <span className="text-sm font-semibold text-arzir-primary">{material.recovery}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider mb-1">
                        Common Alloys
                      </div>
                      <div className="text-xs text-arzir-gray-600">
                        {material.composition}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider mb-1">
                        Typical Applications
                      </div>
                      <div className="space-y-1">
                        {material.applications.map((app, idx) => (
                          <div key={idx} className="text-xs text-arzir-gray-600">
                            • {app}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/50">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-arzir-gray-500">Market Value</span>
                        <span className="text-sm font-semibold text-arzir-primary">{material.value}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Workflow */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Aircraft Dismantling Process
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Aircraft Assessment",
                description: "Complete material survey and component identification with detailed documentation"
              },
              {
                step: "Systems Removal",
                description: "Systematic removal of engines, avionics, and high-value components for resale"
              },
              {
                step: "Structure Dismantling",
                description: "Precise cutting and separation of airframe structures maintaining material integrity"
              },
              {
                step: "Material Processing",
                description: "Advanced sorting and preparation of materials for aerospace-grade end markets"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-black">
                    {step.step}
                  </h3>
                  <p className="text-sm text-arzir-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-arzir-primary -ml-3" />
                  </div>
                )}
              </div>
            ))}
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
                title: "Precision Plasma Cutter",
                description: "High-definition plasma cutting systems for aerospace-grade materials with minimal heat-affected zones and precise tolerances",
                href: "/products/plasma-cutter",
                image: "⚡"
              },
              {
                title: "Material Identification System",
                description: "Advanced XRF and spectroscopic analysis equipment for precise alloy identification and material certification",
                href: "/products/material-analyzer",
                image: "🔬"
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

      {/* Certification & Standards */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Aviation Standards & Certification
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-black">
                Regulatory Compliance
              </h3>
              <div className="space-y-4">
                {[
                  "FAA Part 145 repair station requirements",
                  "EASA Part 147 maintenance standards",
                  "ICAO environmental guidelines",
                  "IATA DGR hazardous materials handling"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-arzir-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-black">
                Material Certification
              </h3>
              <div className="space-y-4">
                {[
                  "AS9100 aerospace quality management",
                  "NADCAP special process certification",
                  "Material test certificates (MTC)",
                  "Chain of custody documentation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-arzir-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Value Recovery */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Value Recovery Opportunities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Serviceable Parts",
                value: "$2-5M",
                description: "Engines, landing gear, avionics, and other components suitable for continued service",
                percentage: "30%"
              },
              {
                category: "Raw Materials",
                value: "$500K-1M",
                description: "Titanium, aerospace aluminum, and specialty alloys for remanufacturing",
                percentage: "60%"
              },
              {
                category: "Scrap Recovery",
                value: "$50-200K",
                description: "Standard metals and materials for general industrial recycling",
                percentage: "10%"
              }
            ].map((recovery, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center space-y-4">
                <div className="text-3xl font-bold text-arzir-primary">
                  {recovery.percentage}
                </div>
                <h3 className="text-lg font-heading font-semibold text-black">
                  {recovery.category}
                </h3>
                <div className="text-2xl font-bold text-green-600">
                  {recovery.value}
                </div>
                <p className="text-sm text-arzir-gray-600">
                  {recovery.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ApplicationCTA 
        formSource="aerospace_recycling_bottom" 
      />
    </>
  );
}