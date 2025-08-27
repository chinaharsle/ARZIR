import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Waste Recycling Applications & Solutions",
  description: "Advanced electronic waste processing systems for safe recovery of precious metals and components from computers, phones, and electronic devices.",
};

export default function EwasteRecyclingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              E-Waste Recycling Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Advanced electronic waste processing systems for safe recovery of precious metals and components.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                99% precious metal recovery
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                WEEE compliant
              </div>
            </div>
            <QuoteDialog source="ewaste_recycling_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/E-Waste Recycling Solutions.jpg"
                alt="E-Waste Recycling Facility with ARZIR Processing Equipment"
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
            Electronic waste recycling requires specialized processing systems capable of safely handling complex 
            electronic devices while maximizing recovery of valuable materials including gold, silver, copper, and 
            rare earth elements. Modern e-waste facilities must balance efficient material recovery with strict 
            environmental and data security protocols to meet international WEEE and R2 certification standards.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">99%</div>
              <div className="text-sm text-arzir-gray-600">Precious metal recovery</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">50M</div>
              <div className="text-sm text-arzir-gray-600">Tons global e-waste</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">100%</div>
              <div className="text-sm text-arzir-gray-600">Data destruction</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">R2</div>
              <div className="text-sm text-arzir-gray-600">Certified processes</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Workflow */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            E-Waste Processing Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Device Collection",
                description: "Secure intake and sorting of electronic devices by type and complexity"
              },
              {
                step: "Data Destruction",
                description: "Complete data wiping and physical destruction of storage devices"
              },
              {
                step: "Component Separation",
                description: "Systematic dismantling and separation of circuit boards, metals, and plastics"
              },
              {
                step: "Material Recovery",
                description: "Advanced processing for precious metal extraction and material purification"
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
                title: "Circuit Board Processor",
                description: "Specialized systems for dismantling and processing printed circuit boards to recover precious metals and components",
                href: "/products/circuit-board-processor",
                image: "🔌"
              },
              {
                title: "Data Destruction Unit",
                description: "Secure hard drive and storage device destruction equipment ensuring complete data sanitization and material recovery",
                href: "/products/data-destroyer",
                image: "💽"
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
            Valuable Material Recovery
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Precious Metals",
                materials: ["Gold", "Silver", "Platinum", "Palladium"],
                value: "High",
                description: "Circuit boards and connectors contain significant amounts of precious metals",
                color: "border-yellow-200 bg-yellow-50"
              },
              {
                title: "Base Metals",
                materials: ["Copper", "Aluminum", "Steel", "Tin"],
                value: "Medium",
                description: "Wiring, heat sinks, and structural components provide substantial metal recovery",
                color: "border-blue-200 bg-blue-50"
              },
              {
                title: "Rare Earth Elements",
                materials: ["Neodymium", "Dysprosium", "Terbium", "Europium"],
                value: "Very High",
                description: "Speakers, motors, and displays contain valuable rare earth elements",
                color: "border-purple-200 bg-purple-50"
              }
            ].map((category, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${category.color}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {category.title}
                    </h3>
                    <div className="px-3 py-1 bg-arzir-primary/10 rounded-full">
                      <span className="text-sm font-semibold text-arzir-primary">{category.value}</span>
                    </div>
                  </div>
                  <p className="text-sm text-arzir-gray-600">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                      Key Materials
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {category.materials.map((material, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white text-xs text-arzir-gray-700 rounded border">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Security & Compliance */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Security & Compliance Standards
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-black">
                Data Security
              </h3>
              <div className="space-y-4">
                {[
                  "DOD 5220.22-M data wiping standards",
                  "Physical destruction of storage devices",
                  "Chain of custody documentation",
                  "Secure transportation protocols"
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
                Environmental Compliance
              </h3>
              <div className="space-y-4">
                {[
                  "WEEE Directive compliance",
                  "R2 (Responsible Recycling) certified",
                  "Basel Convention requirements",
                  "Zero landfill policies"
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
        
        formSource="ewaste-recycling_bottom" 
      />
    </>
  );
}
