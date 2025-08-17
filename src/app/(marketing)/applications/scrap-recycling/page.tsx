import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrap Recycling Applications & Solutions | ARZIR",
  description: "Higher recovery rates with high-density compaction and safe workflows. Discover ARZIR scrap recycling solutions for maximum efficiency.",
};

const challenges = [
  {
    pain: "Mixed scrap streams",
    outcome: "Consistent bale density"
  },
  {
    pain: "Manual handling risks", 
    outcome: "Safer automated workflows"
  },
  {
    pain: "Irregular throughput",
    outcome: "Stable line capacity"
  },
  {
    pain: "High operating costs",
    outcome: "Reduced labor and energy costs"
  }
];

const processSteps = [
  {
    step: "Receiving & Sorting",
    description: "Automated sorting systems with magnetic separation and visual inspection for material classification"
  },
  {
    step: "Pre-cutting / Pre-shredding", 
    description: "Size reduction to optimize feed consistency and improve compaction efficiency"
  },
  {
    step: "Baling / Shearing / Briquetting",
    description: "High-pressure compaction with advanced hydraulic systems for maximum density"
  },
  {
    step: "Quality Check & Dispatch",
    description: "Automated quality control and logistics integration for seamless shipping"
  }
];

const equipment = [
  {
    title: "Scrap Metal Baler",
    description: "High-density compaction for mixed ferrous and non-ferrous materials with consistent bale quality",
    href: "/products/scrap-metal-baler",
    image: "📦"
  },
  {
    title: "Gantry Shear",
    description: "Heavy-duty shearing for oversized materials with precision cutting and high throughput",
    href: "/products/gantry-shear", 
    image: "✂️"
  },
  {
    title: "Double-Shaft Shredder",
    description: "Versatile size reduction for various scrap types with robust construction",
    href: "/products/double-shaft-shredder",
    image: "🔧"
  },
  {
    title: "Briquetting Machine",
    description: "Compact metal chips and turnings into dense briquettes for easy transport",
    href: "/products/briquetting-machine",
    image: "🧱"
  }
];

const caseStudies = [
  {
    title: "Metal Recycling Facility - Brazil",
    equipment: "Scrap Metal Baler + Gantry Shear",
    results: "+45% throughput, -30% labor costs",
    metrics: "850 tons/day capacity",
    country: "Brazil"
  },
  {
    title: "Scrap Yard Expansion - USA",
    equipment: "Horizontal Baler + Container Shear",
    results: "+60% processing speed, ROI in 18 months", 
    metrics: "500 tons/day output",
    country: "USA"
  }
];

const kpis = [
  "Bale Density: 1.2-2.5 t/m³",
  "Cycle Time: 45-90 seconds",
  "OEE: >85%",
  "Energy: 15-25 kWh/ton"
];

const faqs = [
  {
    question: "How do I determine the right baler size for my scrap volume?",
    answer: "Consider your daily throughput, material mix (ferrous/non-ferrous ratio), available space, and target bale density. Our sizing calculator can help determine optimal capacity."
  },
  {
    question: "What maintenance is required for scrap processing equipment?",
    answer: "Regular hydraulic fluid checks, blade inspection/replacement, electrical system maintenance, and structural integrity checks. Typical maintenance interval is 500-1000 operating hours."
  },
  {
    question: "Can ARZIR equipment handle contaminated scrap materials?",
    answer: "Yes, our equipment is designed for real-world conditions including contaminated materials. Pre-sorting and cleaning systems can be integrated for optimal results."
  },
  {
    question: "What safety features are included in ARZIR scrap processing equipment?",
    answer: "Safety barriers, emergency stops, load monitoring systems, automatic tie systems, and comprehensive safety interlocks meet international safety standards."
  }
];

export default function ScrapRecyclingPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Scrap Recycling Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Higher recovery rates with high-density compaction and safe workflows.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                85% efficiency increase
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                1.2-2.5 t/m³ density
              </div>
            </div>
            <QuoteDialog source="scrap_recycling_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/scrap-recycling.png"
                alt="Scrap Recycling Facility using ARZIR equipment"
                width={600}
                height={400}
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
            Scrap recycling operations face increasing pressure to maximize material recovery while maintaining safety and cost-effectiveness. 
            Typical facilities process 50-1000 tons per day of mixed ferrous and non-ferrous materials, requiring efficient separation, 
            size reduction, and compaction systems. Environmental regulations demand proper handling of contaminated materials and 
            waste minimization throughout the recycling process.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">50-1000</div>
              <div className="text-sm text-arzir-gray-600">Tons/day throughput</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">85%</div>
              <div className="text-sm text-arzir-gray-600">Recovery rate</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">1.2-2.5</div>
              <div className="text-sm text-arzir-gray-600">Bale density t/m³</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">30%</div>
              <div className="text-sm text-arzir-gray-600">OPEX reduction</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Challenges → Outcomes */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Challenges → Outcomes
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="text-red-600 font-medium">Pain Point</div>
                    <div className="text-lg text-arzir-gray-700">{challenge.pain}</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-arzir-primary mx-4 flex-shrink-0" />
                  <div className="space-y-2 text-right">
                    <div className="text-success font-medium">Outcome</div>
                    <div className="text-lg text-arzir-gray-700">{challenge.outcome}</div>
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
            Process Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
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
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-arzir-primary -ml-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Recommended Equipment */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Recommended Equipment
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100 group hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.image}</div>
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

      {/* Case Studies */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-black">
                    {study.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="text-sm text-arzir-gray-600">
                      <strong>Equipment:</strong> {study.equipment}
                    </div>
                    <div className="text-sm text-success font-medium">
                      {study.results}
                    </div>
                    <div className="text-sm text-arzir-gray-600">
                      {study.metrics}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* KPIs & Compliance */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            KPIs & Compliance
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-black">
                Key Performance Indicators
              </h3>
              <div className="space-y-2">
                {kpis.map((kpi, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-arzir-gray-700">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-black">
                Safety & Compliance
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-arzir-primary flex-shrink-0" />
                  <span className="text-arzir-gray-700">Safety barriers and emergency stops</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-arzir-primary flex-shrink-0" />
                  <span className="text-arzir-gray-700">Dust and noise emission controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-arzir-primary flex-shrink-0" />
                  <span className="text-arzir-gray-700">Adapted to local regulations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-arzir-gray-200 pb-6">
                <h3 className="text-lg font-heading font-semibold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-arzir-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ApplicationCTA 
        
        formSource="scrap_recycling_bottom" 
      />
    </>
  );
}