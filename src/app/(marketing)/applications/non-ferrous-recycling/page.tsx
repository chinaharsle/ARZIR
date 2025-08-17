import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Ferrous Recycling Applications & Solutions | ARZIR",
  description: "Specialized processing systems for aluminum, copper, brass, and other non-ferrous metals with advanced separation and recovery technology.",
};

export default function NonFerrousRecyclingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Non-Ferrous Recycling Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Specialized processing systems for aluminum, copper, brass, and other non-ferrous metals with advanced separation technology.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                98% purity levels
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                High value recovery
              </div>
            </div>
            <QuoteDialog source="non_ferrous_recycling_hero">
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
                  <div className="text-8xl mb-4">🟡</div>
                  <p className="text-lg font-medium">Non-Ferrous Processing</p>
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
            Non-ferrous metal recycling requires sophisticated separation and processing technologies to achieve 
            the high purity levels demanded by end markets. These valuable materials including aluminum, copper, 
            brass, and specialty alloys command premium prices but require precise handling to maintain material 
            integrity and maximize recovery rates while meeting strict quality specifications.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">98%</div>
              <div className="text-sm text-arzir-gray-600">Purity levels achieved</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">300+</div>
              <div className="text-sm text-arzir-gray-600">Tons/day capacity</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">15+</div>
              <div className="text-sm text-arzir-gray-600">Metal grades processed</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">3x</div>
              <div className="text-sm text-arzir-gray-600">Value vs. ferrous</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Material Types */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Non-Ferrous Metal Categories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Light Metals",
                metals: ["Aluminum", "Magnesium", "Titanium"],
                applications: ["Automotive parts", "Aerospace components", "Construction materials"],
                price: "High",
                color: "border-blue-200 bg-blue-50"
              },
              {
                category: "Heavy Metals",
                metals: ["Copper", "Lead", "Zinc"],
                applications: ["Electrical wiring", "Plumbing", "Industrial equipment"],
                price: "Very High",
                color: "border-orange-200 bg-orange-50"
              },
              {
                category: "Precious & Specialty",
                metals: ["Brass", "Bronze", "Stainless Steel"],
                applications: ["Fixtures", "Marine hardware", "Specialty alloys"],
                price: "Premium",
                color: "border-purple-200 bg-purple-50"
              }
            ].map((category, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${category.color}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {category.category}
                    </h3>
                    <div className="px-3 py-1 bg-arzir-primary/10 rounded-full">
                      <span className="text-sm font-semibold text-arzir-primary">{category.price}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider mb-1">
                        Key Metals
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {category.metals.map((metal, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white text-xs text-arzir-gray-700 rounded border">
                            {metal}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider mb-1">
                        Common Sources
                      </div>
                      <div className="space-y-1">
                        {category.applications.map((app, idx) => (
                          <div key={idx} className="text-xs text-arzir-gray-600">
                            • {app}
                          </div>
                        ))}
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
            Processing Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Material Sorting",
                description: "Visual and analytical identification of non-ferrous metal types and grades"
              },
              {
                step: "Preparation",
                description: "Cleaning, size reduction, and removal of contaminants and attachments"
              },
              {
                step: "Advanced Separation",
                description: "Eddy current, density, and optical sorting for precise material separation"
              },
              {
                step: "Quality Control",
                description: "Final inspection, testing, and preparation for market specifications"
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
                title: "Eddy Current Separator",
                description: "High-performance separation systems for removing non-ferrous metals from mixed material streams with precision sorting",
                href: "/products/eddy-current-separator",
                image: "⚡"
              },
              {
                title: "Optical Sorting System",
                description: "Advanced optical recognition technology for identifying and separating different non-ferrous metal grades and alloys",
                href: "/products/optical-sorter",
                image: "👁️"
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

      {/* Quality Standards */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Quality Standards & Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-semibold text-black">
                Industry Standards
              </h3>
              <div className="space-y-4">
                {[
                  "ISRI scrap specifications compliance",
                  "LME (London Metal Exchange) grade requirements",
                  "ISO 9001 quality management systems",
                  "ASTM material testing standards"
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
                Quality Metrics
              </h3>
              <div className="space-y-4">
                {[
                  "98%+ material purity levels",
                  "±0.5% compositional accuracy",
                  "Contamination levels <0.1%",
                  "Full traceability documentation"
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
        applicationName="non ferrous recycling"
        formSource="non-ferrous-recycling_bottom" 
      />
    </>
  );
}
