import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluminum Processing Applications & Solutions | ARZIR",
  description: "Stable extrusion and compacting solutions for aluminum streams with optimal material recovery rates and advanced processing technology.",
};

export default function AluminumProcessingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Aluminum Processing Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Stable extrusion and compacting solutions for aluminum streams with optimal material recovery rates.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                95% material recovery
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                High precision
              </div>
            </div>
            <QuoteDialog source="aluminum_processing_hero">
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
                  <div className="text-8xl mb-4">⚙️</div>
                  <p className="text-lg font-medium">Aluminum Processing Facility</p>
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
            Aluminum processing operations require precise control systems and specialized equipment to maintain 
            material integrity throughout the extrusion and forming processes. Modern facilities must balance 
            high-quality output with efficient material utilization, minimizing waste while maximizing recovery 
            of valuable aluminum alloys.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">95%</div>
              <div className="text-sm text-arzir-gray-600">Material recovery</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">±0.1mm</div>
              <div className="text-sm text-arzir-gray-600">Precision tolerance</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">24/7</div>
              <div className="text-sm text-arzir-gray-600">Continuous operation</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">40%</div>
              <div className="text-sm text-arzir-gray-600">Energy savings</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Workflow */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Aluminum Processing Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Material Preparation",
                description: "Aluminum billet heating and quality inspection before processing"
              },
              {
                step: "Extrusion Process",
                description: "Precision pressure control through specialized dies and tooling"
              },
              {
                step: "Profile Forming",
                description: "Shape formation with dimensional accuracy and surface quality control"
              },
              {
                step: "Quality Assurance",
                description: "Final inspection, testing, and preparation for delivery"
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
                title: "Aluminum Extrusion Press",
                description: "Precision hydraulic press systems for consistent aluminum profile production with advanced temperature and pressure control",
                href: "/products/aluminum-extrusion-press",
                image: "🏭"
              },
              {
                title: "Briquetting Machine",
                description: "Compact aluminum chips and turnings into dense briquettes for optimal material recovery and transport efficiency",
                href: "/products/briquetting-machine",
                image: "🧱"
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

      {/* Bottom CTA */}
      <ApplicationCTA 
        applicationName="aluminum processing"
        formSource="aluminum-processing_bottom" 
      />
    </>
  );
}
