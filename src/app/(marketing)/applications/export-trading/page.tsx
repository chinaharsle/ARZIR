import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Ship, Globe, TrendingUp, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Trading Solutions for Compressed Metal Bales | ARZIR",
  description: "Maximize container efficiency and reduce shipping costs with ARZIR compressed metal bales. Optimized for international export trading and logistics.",
};

const challenges = [
  {
    pain: "High shipping costs per ton",
    outcome: "80% reduction in shipping volume"
  },
  {
    pain: "Container space inefficiency", 
    outcome: "Maximum payload utilization"
  },
  {
    pain: "Complex logistics coordination",
    outcome: "Streamlined export processes"
  },
  {
    pain: "Quality consistency issues",
    outcome: "Standardized bale specifications"
  }
];

const processSteps = [
  {
    step: "Material Collection & Sorting",
    description: "Strategic collection from multiple sources with quality classification and contamination removal"
  },
  {
    step: "High-Density Compression", 
    description: "Car body balers compress vehicles into standardized bales optimized for container shipping"
  },
  {
    step: "Quality Assurance & Documentation",
    description: "Comprehensive quality control with material certificates and export documentation"
  },
  {
    step: "Container Loading & Export",
    description: "Optimized loading patterns and international shipping coordination"
  }
];

const equipment = [
  {
    title: "Car Body Baler",
    description: "Specialized compression of complete vehicles for maximum shipping density and export efficiency",
    href: "/products/car-body-baler",
    image: "🚗"
  },
  {
    title: "Scrap Metal Baler",
    description: "High-density compression of mixed metals for standardized export bales",
    href: "/products/scrap-metal-baler", 
    image: "📦"
  },
  {
    title: "Gantry Shear",
    description: "Pre-processing oversized materials for optimal baler feed and compression efficiency",
    href: "/products/gantry-shear",
    image: "✂️"
  }
];

const caseStudies = [
  {
    title: "European Export Hub - Germany",
    equipment: "Car Body Baler + Container Loading System",
    results: "65% shipping cost reduction, 40 containers/month",
    metrics: "2,000 vehicles/month processed",
    country: "Germany"
  },
  {
    title: "Asian Trading Company - Japan",
    equipment: "Mobile Car Baler Fleet",
    results: "300% export volume increase, ROI in 14 months", 
    metrics: "5,000 tons/month export capacity",
    country: "Japan"
  }
];

const benefits = [
  {
    icon: Ship,
    title: "Maximized Container Efficiency",
    description: "Compressed bales achieve 95%+ container utilization, dramatically reducing shipping costs per ton"
  },
  {
    icon: Globe,
    title: "Global Market Access", 
    description: "Standardized bale specifications meet international quality requirements for steel mills worldwide"
  },
  {
    icon: TrendingUp,
    title: "Increased Profit Margins",
    description: "Higher material density and reduced logistics costs improve overall profitability by 40-60%"
  },
  {
    icon: Package,
    title: "Streamlined Operations",
    description: "Integrated systems from collection to shipping reduce handling and improve operational efficiency"
  }
];

const exportDestinations = [
  {
    region: "Asia Pacific",
    countries: ["China", "South Korea", "Japan", "India"],
    volume: "60% of global trade",
    specifications: "High-density bales, 2.0+ t/m³"
  },
  {
    region: "Europe", 
    countries: ["Turkey", "Italy", "Spain", "Germany"],
    volume: "25% of global trade",
    specifications: "Premium quality, certified materials"
  },
  {
    region: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar"],
    volume: "10% of global trade", 
    specifications: "Container-optimized dimensions"
  },
  {
    region: "Americas",
    countries: ["Mexico", "Brazil", "Canada"],
    volume: "5% of global trade",
    specifications: "NAFTA/regional compliance"
  }
];

export default function ExportTradingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Export Trading Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Maximize container efficiency and reduce shipping costs with compressed metal bales optimized for international export trading.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                80% cost reduction
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                95% container efficiency
              </div>
            </div>
            <QuoteDialog source="export_trading_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/scrap-recycling.png"
                alt="Export Trading - Compressed Metal Bales for International Shipping"
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
              Export Trading Challenges & Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Transform export logistics with compressed metal bales designed for international shipping efficiency
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
              Export Trading Benefits
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive advantages for international metal trading operations
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
              Export Processing Workflow
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Streamlined process from collection to international shipping
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

      {/* Global Export Destinations */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Global Export Destinations
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Serving major steel mills and recycling facilities worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exportDestinations.map((destination, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-arzir-primary" />
                    <h3 className="text-xl font-heading font-bold text-black">
                      {destination.region}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Key Markets:</p>
                      <p className="text-arzir-gray-600">{destination.countries.join(", ")}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Market Share:</p>
                      <p className="text-arzir-primary font-medium">{destination.volume}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Requirements:</p>
                      <p className="text-arzir-gray-600">{destination.specifications}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Equipment Solutions */}
      <Section id="equipment" background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Export Trading Equipment
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Specialized equipment for export-optimized metal processing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="group">
                <Link href={item.href}>
                  <div className="bg-arzir-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center space-y-4 h-full">
                    <div className="text-4xl">{item.image}</div>
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
              Export Trading Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real results from international trading operations
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

      {/* Bottom CTA */}
      <ApplicationCTA 
        title="Optimize Your Export Trading Operations"
        description="Reduce shipping costs by up to 80% with ARZIR compressed metal bales. Maximize container efficiency and access global markets with standardized, high-density bales designed for international export trading."
        formSource="export_trading_application"
      />
    </>
  );
}