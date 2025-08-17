import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cable Recycling Applications & Solutions | ARZIR",
  description: "Efficient wire and cable processing systems for copper recovery with automated stripping and separation technology for maximum material yield.",
};

export default function CableRecyclingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Cable Recycling Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Efficient wire and cable processing systems for copper recovery with automated stripping and separation technology.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                99.5% copper recovery
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Automated processing
              </div>
            </div>
            <QuoteDialog source="cable_recycling_hero">
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
                  <div className="text-8xl mb-4">🔌</div>
                  <p className="text-lg font-medium">Cable Processing Line</p>
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
            Cable and wire recycling represents a high-value opportunity in the scrap metal industry, with copper 
            content typically ranging from 50-90% by weight. Modern cable processing requires sophisticated 
            equipment capable of efficiently separating copper conductors from insulation materials while 
            maintaining high recovery rates and producing clean, market-ready copper products.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">99.5%</div>
              <div className="text-sm text-arzir-gray-600">Copper recovery rate</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">2000+</div>
              <div className="text-sm text-arzir-gray-600">Kg/hour capacity</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">1-50mm</div>
              <div className="text-sm text-arzir-gray-600">Cable diameter range</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">95%</div>
              <div className="text-sm text-arzir-gray-600">Copper purity achieved</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Cable Types */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Cable Types & Processing Methods
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                type: "Power Cables",
                examples: ["High voltage transmission", "Underground power cables", "Industrial power feeds"],
                copperContent: "60-85%",
                method: "Granulation + air separation",
                value: "High",
                color: "border-red-200 bg-red-50"
              },
              {
                type: "Communication Cables",
                examples: ["Telephone cables", "Data cables", "Coaxial cables"],
                copperContent: "40-70%",
                method: "Fine granulation + electrostatic",
                value: "Medium",
                color: "border-blue-200 bg-blue-50"
              },
              {
                type: "Automotive Harnesses",
                examples: ["Engine harnesses", "Body wiring", "Electronic components"],
                copperContent: "50-75%",
                method: "Pre-cutting + granulation",
                value: "High",
                color: "border-green-200 bg-green-50"
              }
            ].map((cable, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${cable.color}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {cable.type}
                    </h3>
                    <div className="px-3 py-1 bg-arzir-primary/10 rounded-full">
                      <span className="text-sm font-semibold text-arzir-primary">{cable.value}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider mb-1">
                        Common Examples
                      </div>
                      <div className="space-y-1">
                        {cable.examples.map((example, idx) => (
                          <div key={idx} className="text-xs text-arzir-gray-600">
                            • {example}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/50">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium text-arzir-gray-500">Copper Content</span>
                        <span className="text-sm font-semibold text-arzir-primary">{cable.copperContent}</span>
                      </div>
                      <div className="text-xs text-arzir-gray-600">
                        Processing: {cable.method}
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
            Cable Processing Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Pre-Sorting",
                description: "Classification of cables by type, size, and copper content for optimal processing"
              },
              {
                step: "Size Reduction",
                description: "Controlled cutting and granulation to optimize material liberation and separation"
              },
              {
                step: "Separation Process",
                description: "Advanced air classification and electrostatic separation of copper from plastics"
              },
              {
                step: "Quality Control",
                description: "Final inspection and grading of recovered copper and plastic materials"
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
                title: "Cable Granulator Line",
                description: "Complete automated processing line with pre-cutting, granulation, and separation systems for maximum copper recovery",
                href: "/products/cable-granulator",
                image: "⚙️"
              },
              {
                title: "Wire Stripping Machine",
                description: "Precision wire stripping equipment for high-value cables with minimal copper loss and clean separation",
                href: "/products/wire-stripper",
                image: "🔧"
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

      {/* Recovery Metrics */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Recovery Performance Metrics
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-black">
                Material Recovery Rates
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-arzir-gray-50 rounded-lg">
                  <span className="text-arzir-gray-700">Copper Recovery</span>
                  <span className="font-semibold text-arzir-primary">99.5%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-arzir-gray-50 rounded-lg">
                  <span className="text-arzir-gray-700">Plastic Recovery</span>
                  <span className="font-semibold text-arzir-primary">98.0%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-arzir-gray-50 rounded-lg">
                  <span className="text-arzir-gray-700">Overall Yield</span>
                  <span className="font-semibold text-arzir-primary">97.8%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-arzir-gray-50 rounded-lg">
                  <span className="text-arzir-gray-700">Copper Purity</span>
                  <span className="font-semibold text-arzir-primary">95%+</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-black">
                Processing Capabilities
              </h3>
              <div className="space-y-4">
                {[
                  "Single and multi-strand copper conductors",
                  "PVC, XLPE, and rubber insulated cables",
                  "Armored and shielded cable types",
                  "Fiber optic and hybrid cables",
                  "Automotive and aerospace harnesses",
                  "High voltage power transmission cables"
                ].map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-arzir-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ApplicationCTA 
        applicationName="cable recycling"
        formSource="cable-recycling_bottom" 
      />
    </>
  );
}
