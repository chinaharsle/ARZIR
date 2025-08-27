import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, Factory, TrendingUp, Package, Recycle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Large Metal Recycling Centers Solutions | Industrial Balers",
  description: "Comprehensive recycling solutions for large metal processing facilities. High-capacity balers for scrap metal, ferrous and non-ferrous materials processing.",
};

const challenges = [
  {
    pain: "Massive volumes of mixed scrap metal requiring efficient processing",
    outcome: "High-capacity baling systems handle 500+ tons/day efficiently"
  },
  {
    pain: "Complex logistics for material storage and transportation", 
    outcome: "Standardized bales optimize storage and shipping operations"
  },
  {
    pain: "Quality control and material segregation challenges",
    outcome: "Systematic processing ensures consistent bale quality"
  },
  {
    pain: "High operational costs impacting profit margins",
    outcome: "Automated systems reduce labor costs by 40-60%"
  }
];

const processSteps = [
  {
    step: "Material Receiving & Sorting",
    description: "Large-scale intake of ferrous and non-ferrous materials with automated sorting systems for efficient material classification"
  },
  {
    step: "Pre-processing & Size Reduction", 
    description: "Shredding and cutting operations to optimize material feed for downstream baling and compression processes"
  },
  {
    step: "High-Volume Baling Operations",
    description: "Multiple baler lines processing different material streams simultaneously for maximum throughput efficiency"
  },
  {
    step: "Quality Control & Logistics",
    description: "Automated quality checking and integrated logistics systems for seamless material flow and shipping coordination"
  }
];

const equipment = [
  {
    title: "Heavy-Duty Scrap Metal Baler",
    description: "High-capacity balers for processing large volumes of mixed ferrous materials",
    href: "/products/scrap-metal-baler",
    image: "/images/applications/scrap-recycling.png"
  },
  {
    title: "Car Body Baler System",
    description: "Specialized equipment for end-of-life vehicle processing and automotive scrap",
    href: "/products/car-body-baler", 
    image: "/images/applications/automotive-dismantling-full.jpg"
  },
  {
    title: "Non-Ferrous Processing Line",
    description: "Dedicated systems for aluminum, copper, and other non-ferrous metal processing",
    href: "/products/scrap-metal-baler",
    image: "/images/applications/non-ferrous-recycling-full.jpg"
  },
  {
    title: "Integrated Shredding System",
    description: "Complete shredding and baling line for maximum material recovery efficiency",
    href: "/products/scrap-metal-baler",
    image: "/images/applications/scrap-recycling.png"
  }
];

const caseStudies = [
  {
    title: "Major Recycling Facility - USA",
    equipment: "Multiple ARZIR-1200 Balers + Shredding Line",
    results: "2,000 tons/day capacity, 45% cost reduction",
    metrics: "1,500+ vehicles/month processing",
    country: "United States"
  },
  {
    title: "Metal Processing Center - Germany",
    equipment: "Integrated ARZIR Baling System",
    results: "98% material recovery, €500k annual savings", 
    metrics: "800 tons/day mixed scrap capacity",
    country: "Germany"
  }
];

const kpis = [
  "Processing Capacity: 500-2000 tons/day",
  "Material Recovery: 95%+ efficiency", 
  "Operational Uptime: 98%+ availability",
  "Cost Reduction: 40-60% savings"
];

const benefits = [
  {
    icon: Factory,
    title: "Industrial Scale Processing",
    description: "Handle massive volumes of scrap metal with integrated processing lines designed for continuous operation"
  },
  {
    icon: TrendingUp,
    title: "Maximized Material Recovery", 
    description: "Advanced sorting and processing systems achieve 95%+ material recovery rates for optimal profitability"
  },
  {
    icon: Package,
    title: "Streamlined Operations",
    description: "Automated material flow and integrated systems reduce labor requirements and operational complexity"
  },
  {
    icon: Recycle,
    title: "Environmental Compliance",
    description: "Meet strict environmental regulations with clean processing and comprehensive waste management systems"
  }
];

const facilityTypes = [
  {
    type: "Large Scrap Yards",
    materials: ["Mixed ferrous scrap", "Automotive bodies", "Structural steel", "Industrial equipment"],
    volume: "500-1500 tons/day",
    model: "Multiple ARZIR-800/1200"
  },
  {
    type: "Steel Mill Feedstock",
    materials: ["Prepared steel scrap", "Shredded materials", "Baled ferrous", "Clean steel grades"],
    volume: "1000-2000 tons/day", 
    model: "Integrated processing lines"
  },
  {
    type: "Non-Ferrous Processing",
    materials: ["Aluminum scrap", "Copper materials", "Brass components", "Mixed non-ferrous"],
    volume: "200-800 tons/day",
    model: "Specialized ARZIR systems"
  },
  {
    type: "Auto Recycling Centers",
    materials: ["End-of-life vehicles", "Auto parts", "Engine blocks", "Catalytic converters"],
    volume: "100-500 vehicles/day",
    model: "ARZIR Car Body Balers"
  }
];

export default function MetalRecyclingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Large Metal Recycling Centers
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Industrial-scale recycling solutions for high-volume metal processing facilities and scrap yards.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                2000 tons/day capacity
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                95% material recovery
              </div>
            </div>
            <QuoteDialog source="metal_recycling_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/Metal Recycling.png"
                alt="Large Metal Recycling Centers - Industrial Processing Solutions"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Challenges & Outcomes */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Large-Scale Recycling Challenges & Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Transform high-volume metal processing with industrial-scale recycling solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 via-white to-green-50 p-8 rounded-2xl border border-arzir-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-red-600 mb-2">Challenge</h3>
                    <p className="text-arzir-gray-700">{challenge.pain}</p>
                  </div>
                  <div className="text-center">
                    <ArrowRight className="h-8 w-8 text-arzir-primary mx-auto" />
                  </div>
                  <div className="text-center md:text-right">
                    <h3 className="text-lg font-bold text-green-600 mb-2">Solution</h3>
                    <p className="text-arzir-gray-700">{challenge.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Large-Scale Metal Recycling Benefits
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive advantages for industrial recycling operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100 text-center space-y-4">
                <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <benefit.icon className="h-6 w-6 text-arzir-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-black">
                  {benefit.title}
                </h3>
                <p className="text-sm text-arzir-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Workflow */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Industrial Metal Processing Workflow
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Integrated process for high-volume metal recycling operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-black">
                    {step.step}
                  </h3>
                  <p className="text-sm text-arzir-gray-600 leading-relaxed">
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

      {/* Facility Types & Requirements */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Facility Type Requirements
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different large-scale recycling operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilityTypes.map((facility, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-bold text-black">
                      {facility.type}
                    </h3>
                    <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
                      {facility.model}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Typical Materials:</p>
                      <ul className="text-sm text-arzir-gray-600">
                        {facility.materials.map((material, i) => (
                          <li key={i}>• {material}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Daily Volume:</p>
                      <p className="text-arzir-gray-600">{facility.volume}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Equipment Solutions */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Industrial Equipment Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive equipment lines for large-scale metal recycling operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="group">
                <Link href={item.href}>
                  <div className="bg-arzir-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center space-y-4 h-full">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-arzir-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center text-arzir-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Large-Scale Recycling Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real results from major metal recycling facility implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-black">
                      {study.title}
                    </h3>
                    <div className="text-sm text-arzir-gray-600">
                      📍 {study.country}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <strong className="text-black">Equipment:</strong> {study.equipment}
                    </div>
                    <div className="text-success font-medium">
                      {study.results}
                    </div>
                    <div className="text-arzir-gray-600">
                      <strong>Capacity:</strong> {study.metrics}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* KPIs */}
      <Section background="white" size="lg">
        <div className="bg-gradient-to-r from-arzir-primary to-primary-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold">
              Key Performance Indicators
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {kpis.map((kpi, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold mb-2">
                    {kpi}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ApplicationCTA 
        formSource="metal_recycling_application"
      />
    </>
  );
}