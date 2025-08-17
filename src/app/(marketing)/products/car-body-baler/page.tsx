import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Body Baler | ELV Processing Equipment | ARZIR",
  description: "Specialized car body balers for end-of-life vehicle processing with robust compression chambers and faster cycle times.",
};

const specifications = [
  {
    parameter: "Press Force",
    value: "600-1500T",
    description: "Hydraulic compression force"
  },
  {
    parameter: "Bale Density",
    value: "1.8-2.8 t/m³",
    description: "Achieved compaction density"
  },
  {
    parameter: "Bale Dimensions",
    value: "1.2-1.4m",
    description: "Standard bale size"
  },
  {
    parameter: "Cycle Time",
    value: "60-120 seconds",
    description: "Complete compression cycle"
  },
  {
    parameter: "Feed Opening",
    value: "4.5 x 2.0m",
    description: "Material loading dimensions"
  },
  {
    parameter: "Power Requirement",
    value: "90-200 kW",
    description: "Electrical power consumption"
  }
];

const features = [
  {
    title: "Robust Compression Chamber",
    description: "Heavy-duty chamber design withstands the demanding loads of car body compression with reinforced structures",
    icon: "🔧"
  },
  {
    title: "Fast Cycle Times",
    description: "Optimized hydraulic systems enable faster processing cycles increasing daily throughput capacity",
    icon: "⚡"
  },
  {
    title: "Large Feed Opening",
    description: "Oversized feed opening accommodates complete car bodies and large automotive components efficiently",
    icon: "📏"
  },
  {
    title: "Advanced Safety Systems",
    description: "Comprehensive safety features including emergency stops, protective barriers, and operator safety protocols",
    icon: "🛡️"
  }
];

const processSteps = [
  {
    step: "Vehicle Preparation",
    description: "Remove fluids, batteries, and hazardous materials before processing",
    duration: "15-30 min"
  },
  {
    step: "Loading",
    description: "Position car body in baler using crane or loader equipment",
    duration: "5-10 min"
  },
  {
    step: "Compression",
    description: "Hydraulic compression to achieve target density and bale dimensions",
    duration: "60-120 sec"
  },
  {
    step: "Ejection & Tying",
    description: "Eject compressed bale and secure with wire ties for transport",
    duration: "10-15 min"
  }
];

const benefits = [
  {
    title: "Increased Value",
    description: "Higher bale density improves material value and reduces transport costs",
    metric: "30% higher revenue"
  },
  {
    title: "Space Efficiency",
    description: "Compact bales require 80% less storage space than loose car bodies",
    metric: "80% space reduction"
  },
  {
    title: "Transport Optimization",
    description: "Dense bales maximize payload and reduce shipping costs per ton",
    metric: "50% fewer trucks"
  },
  {
    title: "Processing Speed",
    description: "Fast cycle times enable processing 20-40 vehicles per day",
    metric: "20-40 cars/day"
  }
];

const faqs = [
  {
    question: "What types of vehicles can be processed?",
    answer: "Car body balers handle passenger cars, light trucks, SUVs, and vans. Vehicle preparation including fluid drainage and battery removal is required before processing."
  },
  {
    question: "How much preparation is required before baling?",
    answer: "Vehicles must be drained of all fluids (oil, coolant, fuel), batteries removed, and tires typically removed. Air bags should be deployed or removed for safety."
  },
  {
    question: "What bale density can be achieved?",
    answer: "Typical bale densities range from 1.8-2.8 t/m³ depending on vehicle type and condition. Higher density provides better transport efficiency and material value."
  },
  {
    question: "How many cars can be processed per day?",
    answer: "Daily throughput ranges from 20-40 vehicles depending on baler size, preparation efficiency, and operating hours. Automated systems can increase throughput."
  },
  {
    question: "What safety measures are included?",
    answer: "Safety features include emergency stops, safety barriers, hydraulic pressure relief, operator protection zones, and comprehensive safety controls meeting international standards."
  }
];

export default function CarBodyBalerPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Car Body Baler
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Specialized ELV processing equipment with robust compression chambers designed for efficient car body compaction.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                600-1500T force
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                20-40 cars/day
              </div>
            </div>
            <QuoteDialog source="car_body_baler_hero">
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
                  <div className="text-8xl mb-4">🚗</div>
                  <p className="text-lg font-medium">Car Body Baler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec) => (
              <div key={spec.parameter} className="bg-arzir-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-heading font-semibold text-black mb-2">
                  {spec.parameter}
                </h3>
                <div className="text-2xl font-bold text-arzir-primary mb-2">
                  {spec.value}
                </div>
                <p className="text-sm text-arzir-gray-600">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-arzir-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Processing Workflow */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Processing Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
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
                  <div className="px-3 py-1 bg-arzir-primary/10 rounded-full mx-auto w-fit">
                    <span className="text-xs font-medium text-arzir-primary">{step.duration}</span>
                  </div>
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

      {/* Benefits */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Economic Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100 text-center space-y-4">
                <div className="text-3xl font-bold text-arzir-primary">
                  {benefit.metric}
                </div>
                <h3 className="text-lg font-heading font-semibold text-black">
                  {benefit.title}
                </h3>
                <p className="text-sm text-arzir-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-arzir-gray-50 p-6 rounded-xl text-center space-y-3">
              <h3 className="text-lg font-heading font-semibold text-black">
                Auto Recycling Centers
              </h3>
              <p className="text-sm text-arzir-gray-600">
                Large-scale ELV processing facilities with high daily throughput requirements
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/applications/automotive-dismantling">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-arzir-gray-50 p-6 rounded-xl text-center space-y-3">
              <h3 className="text-lg font-heading font-semibold text-black">
                Scrap Metal Dealers
              </h3>
              <p className="text-sm text-arzir-gray-600">
                Automotive scrap processors requiring efficient vehicle body compaction
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/applications/scrap-recycling">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-arzir-gray-50 p-6 rounded-xl text-center space-y-3">
              <h3 className="text-lg font-heading font-semibold text-black">
                Steel Mills
              </h3>
              <p className="text-sm text-arzir-gray-600">
                Dense bale preparation for steelmaking furnace feed material
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/applications/steel-mills">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            FAQs
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-b border-arzir-gray-200 pb-6">
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

      <ProductCTA 
        productName="Car Body Baler"
        formSource="car_body_baler_bottom"
        title="Transform Your ELV Processing Operations"
        description="Maximize value from end-of-life vehicles with our specialized car body balers. Achieve higher bale densities, reduce transport costs, and process 20-40 vehicles per day with robust compression chambers designed for automotive recycling."
      />
    </>
  );
}