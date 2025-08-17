import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, CheckCircle, RotateCcw, Wrench } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single-Shaft Shredder | Versatile Material Processing | ARZIR",
  description: "Versatile single-shaft shredders for mixed material processing with flexible cutting systems and reliable operation.",
};

const specifications = [
  {
    parameter: "Power Range",
    value: "200-800 kW",
    description: "Electric motor power options"
  },
  {
    parameter: "Throughput",
    value: "1-15 t/h",
    description: "Processing capacity range"
  },
  {
    parameter: "Output Size",
    value: "50-300mm",
    description: "Adjustable output particle size"
  },
  {
    parameter: "Rotor Speed",
    value: "50-150 rpm",
    description: "Variable speed control"
  },
  {
    parameter: "Cutting Chamber",
    value: "1.0-2.5m width",
    description: "Chamber width options"
  },
  {
    parameter: "Screen Size",
    value: "20-400mm",
    description: "Interchangeable screen sizes"
  }
];

const features = [
  {
    title: "Versatile Cutting System",
    description: "Adjustable cutting tools and screen configurations handle diverse material types and output requirements",
    icon: "🔧"
  },
  {
    title: "Low Maintenance",
    description: "Simple single-rotor design minimizes wear points and reduces maintenance complexity",
    icon: "🛠️"
  },
  {
    title: "Material Flexibility",
    description: "Processes mixed materials including metals, plastics, e-waste, and composite materials",
    icon: "♻️"
  },
  {
    title: "Easy Screen Change",
    description: "Quick-change screen system allows rapid output size adjustment without major downtime",
    icon: "⚡"
  }
];

const materialProcessing = [
  {
    material: "Mixed Scrap Metal",
    throughput: "3-12 t/h",
    outputSize: "50-200mm",
    applications: "General scrap processing"
  },
  {
    material: "E-Waste",
    throughput: "1-6 t/h", 
    outputSize: "20-100mm",
    applications: "Electronic component recovery"
  },
  {
    material: "Aluminum Profiles",
    throughput: "2-10 t/h",
    outputSize: "30-150mm",
    applications: "Construction waste processing"
  },
  {
    material: "Steel Turnings",
    throughput: "4-15 t/h",
    outputSize: "25-100mm",
    applications: "Machining waste processing"
  },
  {
    material: "Copper Wire",
    throughput: "1-8 t/h",
    outputSize: "15-80mm",
    applications: "Wire liberation and size reduction"
  }
];

const advantages = [
  {
    title: "Lower Initial Cost",
    description: "Single-rotor design requires less complex machinery and lower investment",
    metric: "30% lower cost"
  },
  {
    title: "Energy Efficient",
    description: "Optimized cutting action reduces power consumption per ton processed",
    metric: "15-25 kWh/t"
  },
  {
    title: "Simple Operation",
    description: "Straightforward controls and operation require minimal operator training",
    metric: "2-day training"
  },
  {
    title: "Flexible Output",
    description: "Wide range of screen sizes accommodate different downstream processes",
    metric: "20-400mm range"
  }
];

const applications = [
  {
    title: "Scrap Yards",
    description: "Mixed material processing for volume reduction and preparation",
    capacity: "3-12 t/h"
  },
  {
    title: "E-Waste Centers",
    description: "Electronic waste size reduction for material recovery",
    capacity: "1-6 t/h"
  },
  {
    title: "Metal Fabrication",
    description: "Processing manufacturing waste and offcuts",
    capacity: "2-10 t/h"
  },
  {
    title: "Demolition Waste",
    description: "Construction material size reduction and separation",
    capacity: "4-15 t/h"
  }
];

const faqs = [
  {
    question: "What makes single-shaft shredders suitable for mixed materials?",
    answer: "Single-shaft design provides controlled cutting action that can handle different material densities and hardness levels in a single feed stream without jamming or excessive wear."
  },
  {
    question: "How often do cutting tools need replacement?",
    answer: "Cutting tool life varies by material: 800-3000 tons for mixed scrap, 1500-5000 tons for clean metals. Regular maintenance and proper feeding extend tool life significantly."
  },
  {
    question: "Can output size be adjusted during operation?",
    answer: "Screen changes require stopping the machine for safety, but the process takes 30-60 minutes. Multiple screens can be kept on-site for quick changeover between different output requirements."
  },
  {
    question: "What power supply is required?",
    answer: "Standard 400V 3-phase electrical supply. Power requirements range from 200-800 kW depending on throughput and material type. Soft-start systems reduce peak demand."
  },
  {
    question: "How does throughput compare to double-shaft shredders?",
    answer: "Single-shaft typically processes 30-50% of double-shaft capacity but offers greater material flexibility and lower operating costs for smaller operations."
  }
];

export default function SingleShaftShredderPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Single-Shaft Shredder
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Versatile single-shaft shredder for mixed material processing with flexible cutting systems and reliable operation.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                1-15 t/h capacity
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                50-300mm output
              </div>
            </div>
            <QuoteDialog source="single_shaft_shredder_hero">
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
                  <div className="text-8xl mb-4">🔧</div>
                  <p className="text-lg font-medium">Single-Shaft Shredder</p>
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
            {specifications.map((spec, index) => (
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
            {features.map((feature, index) => (
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

      {/* Material Processing */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Material Processing Capabilities
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg bg-white">
              <caption className="sr-only">Material processing capabilities and throughput rates</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Material Type</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Throughput</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Output Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Applications</th>
                </tr>
              </thead>
              <tbody>
                {materialProcessing.map((material, index) => (
                  <tr key={material.material} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{material.material}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.throughput}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.outputSize}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Advantages */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Key Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={advantage.title} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100 text-center space-y-4">
                <div className="text-2xl font-bold text-arzir-primary">
                  {advantage.metric}
                </div>
                <h3 className="text-lg font-heading font-semibold text-black">
                  {advantage.title}
                </h3>
                <p className="text-sm text-arzir-gray-600">
                  {advantage.description}
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
            {applications.map((app, index) => (
              <div key={app.title} className="bg-arzir-gray-50 p-6 rounded-xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {app.title}
                    </h3>
                    <div className="px-3 py-1 bg-arzir-primary/10 rounded-full">
                      <span className="text-sm font-semibold text-arzir-primary">{app.capacity}</span>
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
      <Section background="white" size="lg">
        <div className="bg-arzir-gray-50 rounded-3xl p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black">
            Need versatile material processing?
          </h2>
          <p className="text-arzir-gray-600 max-w-2xl mx-auto">
            Our engineers can help you configure the optimal single-shaft shredder for your mixed material processing requirements and output specifications.
          </p>
          <QuoteDialog source="single_shaft_shredder_bottom">
            <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
              Get Versatile Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </QuoteDialog>
        </div>
      </Section>
    </>
  );
}