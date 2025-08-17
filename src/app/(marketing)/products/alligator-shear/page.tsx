import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alligator Shear | Fast-Cycling Steel Cutting | ARZIR",
  description: "Fast-cycling alligator shears for efficient cutting of structural steel and plate materials with rapid processing.",
};

const specifications = [
  {
    parameter: "Cutting Force",
    value: "300-600T",
    description: "Hydraulic cutting force"
  },
  {
    parameter: "Blade Length",
    value: "1.0-1.8m",
    description: "Shear blade width"
  },
  {
    parameter: "Cut Thickness",
    value: "40-120mm",
    description: "Maximum material thickness"
  },
  {
    parameter: "Cycle Time",
    value: "20-40 seconds",
    description: "Fast cutting cycle"
  },
  {
    parameter: "Feed Length",
    value: "6-12m",
    description: "Material feeding table"
  },
  {
    parameter: "Power Requirement",
    value: "75-150 kW",
    description: "Electric motor power"
  }
];

const features = [
  {
    title: "Fast Cycling",
    description: "Rapid 20-40 second cycle times enable high-throughput processing of structural materials",
    icon: "⚡"
  },
  {
    title: "Precise Feeding",
    description: "Long feeding tables with measurement systems ensure accurate cut lengths and minimal waste",
    icon: "📏"
  },
  {
    title: "Versatile Cutting",
    description: "Handles angles, channels, beams, plates, and pipe materials with consistent quality",
    icon: "🔧"
  },
  {
    title: "Semi-Mobile Design",
    description: "Compact footprint allows relocation within facilities while maintaining high performance",
    icon: "🚚"
  }
];

const cuttingCapabilities = [
  {
    material: "I-Beams",
    thickness: "Up to 120mm",
    examples: "W8, W10, W12 structural beams",
    cycleTime: "25-35 sec"
  },
  {
    material: "Angle Iron",
    thickness: "Up to 100mm",
    examples: "L3x3 to L8x8 structural angles",
    cycleTime: "20-30 sec"
  },
  {
    material: "Channel Steel",
    thickness: "Up to 100mm",
    examples: "C6 to C15 structural channels",
    cycleTime: "20-30 sec"
  },
  {
    material: "Plate Steel",
    thickness: "Up to 80mm",
    examples: "Flat plate and sheet materials",
    cycleTime: "15-25 sec"
  },
  {
    material: "Pipe/Tube",
    thickness: "Up to 60mm wall",
    examples: "Structural and schedule pipe",
    cycleTime: "15-20 sec"
  }
];

const benefits = [
  {
    title: "High Speed",
    description: "Fast cycle times process 80-150 pieces per hour depending on material",
    metric: "80-150 pcs/hr"
  },
  {
    title: "Accurate Lengths",
    description: "Precision feeding systems achieve ±5mm length accuracy",
    metric: "±5mm accuracy"
  },
  {
    title: "Low Operating Cost",
    description: "Efficient hydraulics and simple operation minimize energy consumption",
    metric: "30% less energy"
  },
  {
    title: "Flexible Setup",
    description: "Quick material changeover and setup for different cutting requirements",
    metric: "5-min changeover"
  }
];

const applications = [
  {
    title: "Steel Fabrication",
    description: "Cutting structural steel to length for fabrication and construction projects",
    throughput: "60-120 pcs/hr"
  },
  {
    title: "Scrap Processing",
    description: "Size reduction of structural scrap for efficient melting and transport",
    throughput: "80-150 pcs/hr"
  },
  {
    title: "Construction Waste",
    description: "Processing demolition steel and construction debris for recycling",
    throughput: "40-100 pcs/hr"
  },
  {
    title: "Material Preparation",
    description: "Preparing steel stock for downstream processing and manufacturing",
    throughput: "50-120 pcs/hr"
  }
];

const faqs = [
  {
    question: "What is the advantage of alligator shears over other cutting methods?",
    answer: "Alligator shears offer fast cycle times (20-40 seconds), precise length control, and clean cuts without heat-affected zones. They're ideal for high-volume structural steel processing."
  },
  {
    question: "How accurate are the cut lengths?",
    answer: "With proper feeding systems, alligator shears achieve ±5mm length accuracy. Digital measurement systems and programmable stops ensure consistent results."
  },
  {
    question: "Can it handle different material shapes simultaneously?",
    answer: "While designed for one material type at a time, quick changeover allows processing different shapes with minimal downtime. Feeding guides can be adjusted for various profiles."
  },
  {
    question: "What maintenance is required for the cutting blades?",
    answer: "Blade inspection every 1000 cuts, sharpening or replacement when cut quality degrades. Proper blade maintenance ensures consistent cutting performance and extends blade life."
  },
  {
    question: "How does throughput compare to torch cutting?",
    answer: "Alligator shears are 3-5 times faster than torch cutting for structural steel, with no preheating required and consistent quality regardless of operator skill level."
  }
];

export default function AlligatorShearPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Alligator Shear
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Fast-cycling shear for efficient cutting of structural steel and plate materials with rapid processing capabilities.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                300-600T force
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                20-40 sec cycle
              </div>
            </div>
            <QuoteDialog source="alligator_shear_hero">
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
                  <div className="text-8xl mb-4">✂️</div>
                  <p className="text-lg font-medium">Alligator Shear</p>
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

      {/* Cutting Capabilities */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Cutting Capabilities
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg bg-white">
              <caption className="sr-only">Material cutting capabilities and cycle times</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Material Type</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Max Thickness</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Examples</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cycle Time</th>
                </tr>
              </thead>
              <tbody>
                {cuttingCapabilities.map((capability, index) => (
                  <tr key={capability.material} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{capability.material}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{capability.thickness}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{capability.examples}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{capability.cycleTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Performance Benefits */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Performance Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100 text-center space-y-4">
                <div className="text-2xl font-bold text-arzir-primary">
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
            Ideal Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="bg-arzir-gray-50 p-6 rounded-xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {app.title}
                    </h3>
                    <div className="px-3 py-1 bg-arzir-primary/10 rounded-full">
                      <span className="text-sm font-semibold text-arzir-primary">{app.throughput}</span>
                    </div>
                  </div>
                  <p className="text-arzir-gray-600">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
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

      {/* Bottom CTA */}
      <ProductCTA 
        
        formSource="alligator-shear_bottom" 
      />
    </>
  );
}