import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Train } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Railway Scrapping Applications & Solutions | ARZIR",
  description: "Specialized equipment for railway car dismantling and locomotive recycling with heavy-duty processing capabilities for rail industry operations.",
};

export default function RailwayScrappingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Railway Scrapping Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Specialized equipment for railway car dismantling and locomotive recycling with heavy-duty processing capabilities.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                Heavy-duty capacity
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Rail certified
              </div>
            </div>
            <QuoteDialog source="railway_scrapping_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-arzir-gray-500">
                <div className="text-center">
                  <div className="text-8xl mb-4">🚂</div>
                  <p className="text-lg font-medium">Railway Scrapping Yard</p>
                </div>
              </div>
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
            Railway vehicle recycling requires specialized equipment capable of processing heavy steel structures, 
            electrical systems, and specialized components unique to locomotives and rail cars. Modern railway 
            scrapping operations must efficiently handle the substantial weight and robust construction of rail 
            equipment while recovering valuable metals, components, and materials according to industry standards.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">200+</div>
              <div className="text-sm text-arzir-gray-600">Tons per car</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">92%</div>
              <div className="text-sm text-arzir-gray-600">Material recovery</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">48hrs</div>
              <div className="text-sm text-arzir-gray-600">Processing time</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">50+</div>
              <div className="text-sm text-arzir-gray-600">Years experience</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Workflow */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Railway Dismantling Process
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Vehicle Assessment",
                description: "Inspection and evaluation of locomotives and rail cars for material content"
              },
              {
                step: "Component Removal",
                description: "Systematic removal of valuable components, engines, and electrical systems"
              },
              {
                step: "Structure Dismantling",
                description: "Heavy-duty cutting and separation of steel frames and body structures"
              },
              {
                step: "Material Processing",
                description: "Final size reduction and preparation of materials for market delivery"
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
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Recommended Equipment
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Railway Gantry Shear",
                description: "Extra heavy-duty shearing systems specifically designed for locomotive and rail car dismantling with extreme cutting force",
                href: "/products/gantry-shear",
                image: "⚡"
              },
              {
                title: "Mobile Rail Cutter",
                description: "Portable cutting equipment for on-site railway processing with specialized tooling for rail industry applications",
                href: "/products/mobile-shear",
                image: "🔧"
              }
            ].map((item, index) => (
              <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl group hover:shadow-lg transition-shadow duration-300">
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

      {/* Material Recovery */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Railway Material Recovery
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Structural Steel",
                description: "High-grade steel from frames, bodies, and undercarriages",
                percentage: "75%",
                color: "text-blue-600"
              },
              {
                title: "Non-Ferrous Metals",
                description: "Copper wiring, aluminum components, and brass fittings",
                percentage: "15%",
                color: "text-green-600"
              },
              {
                title: "Components & Parts",
                description: "Engines, electrical systems, and reusable components",
                percentage: "10%",
                color: "text-purple-600"
              }
            ].map((material, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center space-y-4">
                <div className={`text-3xl font-bold ${material.color}`}>
                  {material.percentage}
                </div>
                <h3 className="text-lg font-heading font-semibold text-black">
                  {material.title}
                </h3>
                <p className="text-sm text-arzir-gray-600">
                  {material.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Safety & Compliance */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Safety & Industry Standards
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-black">
                Safety Protocols
              </h3>
              <div className="space-y-4">
                {[
                  "Hazardous material identification and removal",
                  "Crane and heavy equipment operation safety",
                  "Personal protective equipment requirements",
                  "Environmental containment procedures"
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
                Industry Compliance
              </h3>
              <div className="space-y-4">
                {[
                  "Federal Railroad Administration guidelines",
                  "Environmental protection standards",
                  "Occupational safety requirements",
                  "Material handling certifications"
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

      {/* Bottom CTA */}
      <ApplicationCTA 
        applicationName="railway scrapping"
        formSource="railway-scrapping_bottom" 
      />
    </>
  );
}
