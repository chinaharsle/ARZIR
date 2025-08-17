import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Fabrication Applications & Solutions | ARZIR",
  description: "Turn offcuts into value with efficient baling & shearing systems designed for continuous operation in metal fabrication facilities.",
};

const challenges = [
  {
    pain: "Metal waste disposal costs",
    outcome: "Revenue from processed offcuts"
  },
  {
    pain: "Space constraints for waste",
    outcome: "Compact baled materials"
  },
  {
    pain: "Manual handling inefficiency",
    outcome: "Automated processing workflows"
  },
  {
    pain: "Inconsistent waste streams",
    outcome: "Standardized bale output"
  }
];

const processSteps = [
  {
    step: "Collection & Sorting",
    description: "Automated collection of offcuts with material type separation for optimal processing"
  },
  {
    step: "Size Standardization",
    description: "Shearing oversized pieces to uniform dimensions for consistent baling"
  },
  {
    step: "Compaction & Baling",
    description: "High-pressure baling with precise tie systems for transport-ready bales"
  },
  {
    step: "Quality & Logistics",
    description: "Automated weighing, labeling, and integration with shipping systems"
  }
];

const equipment = [
  {
    title: "Horizontal Baler",
    description: "Continuous operation baler ideal for high-volume fabrication facilities with consistent offcut streams",
    href: "/products/horizontal-baler",
    image: "📦"
  },
  {
    title: "Alligator Shear",
    description: "Fast-cycling shear for cutting structural steel, plate, and pipe offcuts to manageable sizes",
    href: "/products/alligator-shear",
    image: "✂️"
  },
  {
    title: "Briquetting Machine",
    description: "Transform metal chips and turnings into dense briquettes for maximum value recovery",
    href: "/products/briquetting-machine",
    image: "🧱"
  }
];

const caseStudies = [
  {
    title: "Steel Fabrication Plant - Germany",
    equipment: "Horizontal Baler + Alligator Shear",
    results: "+40% waste value recovery, -50% disposal costs",
    metrics: "300 tons/month processed",
    country: "Germany"
  },
  {
    title: "Shipbuilding Facility - South Korea",
    equipment: "Heavy-duty Baler + Gantry Shear",
    results: "+35% throughput, ROI in 24 months",
    metrics: "150 tons/day capacity",
    country: "South Korea"
  }
];

const kpis = [
  "Bale Density: 1.5-2.8 t/m³",
  "Cycle Time: 30-60 seconds",
  "Recovery Rate: >90%",
  "ROI Period: 18-30 months"
];

const faqs = [
  {
    question: "How can metal fabrication facilities maximize value from offcuts?",
    answer: "By implementing automated collection, proper sorting by material grade, and high-density baling to create market-ready products. Clean, sorted offcuts command premium prices."
  },
  {
    question: "What's the typical ROI for installing baling equipment in fabrication shops?",
    answer: "Most facilities see ROI within 18-30 months through reduced disposal costs, labor savings, and revenue from processed materials. Larger facilities often achieve faster payback."
  },
  {
    question: "Can ARZIR equipment handle different steel grades simultaneously?",
    answer: "Yes, with proper sorting systems, different grades can be processed separately to maintain material integrity and maximize market value. We recommend segregated processing lines for premium grades."
  },
  {
    question: "What space requirements are needed for metal fabrication recycling equipment?",
    answer: "Space requirements vary by throughput. Typical installations range from 200-1000 m² including equipment, material staging, and logistics areas. We provide detailed layout planning."
  }
];

export default function MetalFabricationPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Metal Fabrication Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Turn offcuts into value with efficient baling & shearing systems designed for continuous operation.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                60% waste reduction
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                90% recovery rate
              </div>
            </div>
            <QuoteDialog source="metal_fabrication_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/metal-fabrication-full.jpg"
                alt="Metal Fabrication Facility"
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
            Metal fabrication facilities generate significant volumes of high-quality offcuts, drops, and machining waste that represent 
            substantial value when properly processed. Modern fabrication operations require efficient waste management systems that 
            minimize handling costs while maximizing material recovery value. Environmental regulations and sustainability goals 
            drive the need for comprehensive recycling solutions that integrate seamlessly with production workflows.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">10-50</div>
              <div className="text-sm text-arzir-gray-600">Tons/day offcuts</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">90%</div>
              <div className="text-sm text-arzir-gray-600">Recovery rate</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">1.5-2.8</div>
              <div className="text-sm text-arzir-gray-600">Bale density t/m³</div>
            </div>
            <div className="text-center p-4 bg-arzir-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-arzir-primary">50%</div>
              <div className="text-sm text-arzir-gray-600">Cost reduction</div>
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
                    <div className="text-red-600 font-medium">Challenge</div>
                    <div className="text-lg text-arzir-gray-700">{challenge.pain}</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-arzir-primary mx-4 flex-shrink-0" />
                  <div className="space-y-2 text-right">
                    <div className="text-success font-medium">Solution</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100 group hover:shadow-lg transition-shadow duration-300">
                <div className="text-center space-y-4">
                  <div className="text-5xl mx-auto">{item.image}</div>
                  <h3 className="text-xl font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-arzir-gray-600 text-sm">
                    {item.description}
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={item.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sizing & Selection Guide */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Sizing & Selection Guide
          </h2>
          <div className="bg-arzir-gray-50 p-6 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-black">
                  Key Selection Criteria
                </h3>
                <div className="space-y-2">
                  <div><strong>Material Mix:</strong> Steel types and grades (70-90% steel, 10-30% non-ferrous)</div>
                  <div><strong>Desired Bale Density:</strong> 1.5-2.8 t/m³ depending on material type</div>
                  <div><strong>Daily Throughput:</strong> 5-50 tons/day typical range</div>
                  <div><strong>Feed Type:</strong> Conveyor, crane, or manual loading</div>
                  <div><strong>Electrical Supply:</strong> 380V/50Hz or 480V/60Hz, 3-phase</div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-black">
                  Decision Factors
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Available floor space and ceiling height</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Integration with existing production lines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Material handling and logistics requirements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Local environmental and safety regulations</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button asChild>
                <Link href="/calculator/baler-sizing">
                  Open Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
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
      <Section background="white" size="lg">
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
                  <span className="text-arzir-gray-700">CE marking and safety compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-arzir-primary flex-shrink-0" />
                  <span className="text-arzir-gray-700">Integrated safety systems and guards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-arzir-primary flex-shrink-0" />
                  <span className="text-arzir-gray-700">Workplace safety and ergonomic design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
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
        applicationName="metal fabrication"
        formSource="metal-fabrication_bottom" 
      />
    </>
  );
}
