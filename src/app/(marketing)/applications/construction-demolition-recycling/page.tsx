import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Demolition Recycling Solutions | ARZIR",
  description: "Efficient processing of construction debris and demolition materials with advanced sorting and recovery systems for sustainable building practices.",
};

export default function ConstructionDemolitionRecyclingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Construction & Demolition Recycling
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Efficient processing of construction debris and demolition materials with advanced sorting and recovery systems.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                85% recovery rate
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                LEED certified
              </div>
            </div>
            <QuoteDialog source="construction_demolition_hero">
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
                  <div className="text-8xl mb-4">🏗️</div>
                  <p className="text-lg font-medium">C&D Recycling Facility</p>
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
            Construction and demolition waste represents one of the largest waste streams, requiring specialized 
            processing equipment to efficiently separate and recover valuable materials including metals, concrete, 
            wood, and aggregates. Modern C&D recycling facilities need versatile systems capable of handling mixed 
            debris while maximizing material recovery rates and maintaining environmental compliance.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">85%</div>
              <div className="text-sm text-arzir-gray-600">Material recovery</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">500</div>
              <div className="text-sm text-arzir-gray-600">Tons/day capacity</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">12</div>
              <div className="text-sm text-arzir-gray-600">Material streams</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">60%</div>
              <div className="text-sm text-arzir-gray-600">Cost reduction</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Workflow */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            C&D Processing Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Debris Reception",
                description: "Intake and initial sorting of mixed construction and demolition materials"
              },
              {
                step: "Primary Processing",
                description: "Size reduction and initial separation of major material categories"
              },
              {
                step: "Material Sorting",
                description: "Advanced separation of metals, concrete, wood, and recyclable materials"
              },
              {
                step: "Final Preparation",
                description: "Quality control and preparation of materials for end markets"
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
                title: "Mobile Crusher & Screener",
                description: "Versatile crushing and screening systems for processing concrete, asphalt, and mixed debris on construction sites",
                href: "/products/crusher",
                image: "🔨"
              },
              {
                title: "Magnetic Separator",
                description: "High-efficiency magnetic separation systems for recovering ferrous metals from construction and demolition debris",
                href: "/products/magnetic-separator",
                image: "🧲"
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
            Material Recovery Streams
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Metals Recovery",
                description: "Ferrous and non-ferrous metal separation from structural components, rebar, and fixtures",
                materials: ["Steel rebar", "Copper piping", "Aluminum fixtures", "Mixed metals"],
                recovery: "95%"
              },
              {
                title: "Aggregate Production",
                description: "Processing concrete and masonry into high-quality recycled aggregates for new construction",
                materials: ["Recycled concrete", "Crushed brick", "Road base", "Fill material"],
                recovery: "90%"
              },
              {
                title: "Wood Processing",
                description: "Recovery and processing of dimensional lumber and engineered wood products",
                materials: ["Dimensional lumber", "Engineered wood", "Biomass fuel", "Mulch products"],
                recovery: "75%"
              }
            ].map((stream, index) => (
              <div key={index} className="bg-white p-6 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-heading font-semibold text-black">
                    {stream.title}
                  </h3>
                  <div className="px-3 py-1 bg-arzir-primary/10 rounded-full">
                    <span className="text-sm font-semibold text-arzir-primary">{stream.recovery}</span>
                  </div>
                </div>
                <p className="text-sm text-arzir-gray-600">
                  {stream.description}
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                    Recovered Materials
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {stream.materials.map((material, idx) => (
                      <span key={idx} className="px-2 py-1 bg-arzir-gray-100 text-xs text-arzir-gray-700 rounded">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ApplicationCTA 
        
        formSource="construction-demolition-recycling_bottom" 
      />
    </>
  );
}
