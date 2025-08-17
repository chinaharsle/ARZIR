import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipbreaking Applications & Solutions | ARZIR",
  description: "Safe and efficient vessel dismantling solutions with specialized equipment for maritime recycling operations and environmental compliance.",
};

export default function ShipbreakingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Shipbreaking Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Safe and efficient vessel dismantling solutions with specialized equipment for maritime recycling operations.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                Environmental compliance
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Maritime certified
              </div>
            </div>
            <QuoteDialog source="shipbreaking_hero">
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
                  <div className="text-8xl mb-4">🚢</div>
                  <p className="text-lg font-medium">Shipbreaking Operation</p>
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
            Ship recycling operations require specialized equipment capable of safely dismantling large maritime 
            vessels while maintaining environmental compliance and worker safety standards. Modern shipbreaking 
            facilities must efficiently process steel, non-ferrous metals, and hazardous materials according to 
            international maritime regulations and environmental protocols.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">50,000+</div>
              <div className="text-sm text-arzir-gray-600">Tons vessel capacity</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">98%</div>
              <div className="text-sm text-arzir-gray-600">Material recovery</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">180</div>
              <div className="text-sm text-arzir-gray-600">Days avg. processing</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">Zero</div>
              <div className="text-sm text-arzir-gray-600">Environmental incidents</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Workflow */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Shipbreaking Process
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Vessel Preparation",
                description: "Environmental assessment and hazardous material removal"
              },
              {
                step: "Primary Cutting",
                description: "Heavy-duty shearing of hull sections and superstructure"
              },
              {
                step: "Material Separation",
                description: "Sorting of steel, non-ferrous metals, and recyclable components"
              },
              {
                step: "Final Processing",
                description: "Size reduction and preparation for market delivery"
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
                title: "Heavy-Duty Maritime Shear",
                description: "Specialized cutting equipment designed for thick steel plates and maritime-grade materials with environmental containment",
                href: "/products/gantry-shear",
                image: "⚡"
              },
              {
                title: "Vessel Preparation Tools",
                description: "Complete toolkit for safe vessel preparation including gas cutting systems and material handling equipment",
                href: "/products/cutting-tools",
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

      {/* Safety & Compliance */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Safety & Environmental Compliance
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "IMO Compliance",
                description: "Full compliance with International Maritime Organization guidelines for ship recycling",
                icon: <Shield className="h-8 w-8 text-arzir-primary" />
              },
              {
                title: "Environmental Protection",
                description: "Advanced containment systems for hazardous materials and environmental monitoring",
                icon: <CheckCircle className="h-8 w-8 text-success" />
              },
              {
                title: "Worker Safety",
                description: "Comprehensive safety protocols and equipment for maritime dismantling operations",
                icon: <Shield className="h-8 w-8 text-arzir-primary" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center space-y-4">
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-sm text-arzir-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ApplicationCTA 
        applicationName="shipbreaking"
        formSource="shipbreaking_bottom" 
      />
    </>
  );
}
