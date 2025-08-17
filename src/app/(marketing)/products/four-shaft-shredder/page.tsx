import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Four-Shaft Shredder | Fine Size Reduction | ARZIR",
  description: "Multi-shaft four-shaft shredders for fine size reduction and uniform output with superior particle size control.",
};

const specifications = [
  {
    parameter: "Power Range",
    value: "400-2000 kW",
    description: "Quad motor configuration"
  },
  {
    parameter: "Throughput",
    value: "5-50 t/h",
    description: "High-volume fine processing"
  },
  {
    parameter: "Output Size",
    value: "10-100mm",
    description: "Fine particle control"
  },
  {
    parameter: "Number of Shafts",
    value: "4 synchronized",
    description: "Multi-stage cutting action"
  },
  {
    parameter: "Cutting Chamber",
    value: "2.0-4.0m width",
    description: "Large processing volume"
  },
  {
    parameter: "Screen Options",
    value: "5-80mm",
    description: "Fine screening capability"
  }
];

const features = [
  {
    title: "Multi-Stage Cutting",
    description: "Four-stage cutting process provides superior size reduction with exceptional uniformity",
    icon: "🔄"
  },
  {
    title: "Fine Output Control",
    description: "Precise particle size distribution ideal for downstream separation and processing",
    icon: "🎯"
  },
  {
    title: "Maximum Throughput",
    description: "Multiple shafts enable highest capacity processing for large-scale operations",
    icon: "📈"
  },
  {
    title: "Material Liberation",
    description: "Multiple cutting stages effectively separate bonded materials and composites",
    icon: "⚡"
  }
];

const cuttingStages = [
  {
    stage: "Primary Cutting",
    description: "Initial size reduction from large input pieces to intermediate size",
    shafts: "Shafts 1 & 2",
    outputSize: "200-400mm"
  },
  {
    stage: "Secondary Reduction",
    description: "Further size reduction and material conditioning",
    shafts: "Shafts 2 & 3", 
    outputSize: "100-200mm"
  },
  {
    stage: "Fine Cutting",
    description: "Precision cutting for target particle size achievement",
    shafts: "Shafts 3 & 4",
    outputSize: "50-100mm"
  },
  {
    stage: "Final Sizing",
    description: "Final size control through screening and circulation",
    shafts: "All 4 shafts",
    outputSize: "10-50mm"
  }
];

const materialSuitability = [
  {
    material: "Complex E-Waste",
    effectiveness: "Excellent",
    liberationRate: "95%",
    applications: "PCB processing, component separation"
  },
  {
    material: "Automotive ASR",
    effectiveness: "Very Good",
    liberationRate: "90%",
    applications: "Fluff processing, material recovery"
  },
  {
    material: "Mixed Metal Scrap",
    effectiveness: "Good",
    liberationRate: "85%",
    applications: "Fine sizing for separation"
  },
  {
    material: "Composite Materials",
    effectiveness: "Excellent",
    liberationRate: "92%",
    applications: "Fiber separation, matrix removal"
  },
  {
    material: "Appliance White Goods",
    effectiveness: "Very Good",
    liberationRate: "88%",
    applications: "Material liberation, size control"
  }
];

const benefits = [
  {
    title: "Superior Liberation",
    description: "Four-stage cutting process achieves 90-95% material liberation efficiency",
    metric: "90-95% liberation"
  },
  {
    title: "Fine Size Control",
    description: "Precise particle size distribution with minimal oversized material",
    metric: "±10% size tolerance"
  },
  {
    title: "Maximum Recovery",
    description: "Enhanced material separation increases valuable material recovery rates",
    metric: "15% more recovery"
  },
  {
    title: "Process Efficiency",
    description: "Single-pass processing eliminates need for multiple size reduction steps",
    metric: "Single-pass solution"
  }
];

const applications = [
  {
    title: "E-Waste Processing",
    description: "Complex electronic waste processing for precious metal recovery",
    capacity: "3-15 t/h"
  },
  {
    title: "Auto Shredder Residue",
    description: "Fine processing of automotive shredder fluff for material recovery",
    capacity: "10-30 t/h"
  },
  {
    title: "Appliance Recycling",
    description: "White goods processing for material separation and recovery",
    capacity: "5-20 t/h"
  },
  {
    title: "Composite Processing",
    description: "Processing of fiber-reinforced composites and multi-material products",
    capacity: "3-12 t/h"
  }
];

const faqs = [
  {
    question: "What makes four-shaft shredders ideal for fine processing?",
    answer: "The multi-stage cutting action provides progressive size reduction, allowing better control over final particle size and improved material liberation compared to single or double-shaft systems."
  },
  {
    question: "How does material liberation compare to other shredder types?",
    answer: "Four-shaft shredders achieve 90-95% material liberation efficiency, significantly higher than single-shaft (70-80%) or double-shaft (80-85%) systems for complex materials."
  },
  {
    question: "What maintenance is required for four cutting shafts?",
    answer: "While more complex than simpler systems, synchronized maintenance schedules and modular cutting tool design keep maintenance manageable. Typical intervals are 1500-3000 hours."
  },
  {
    question: "Can output size be precisely controlled?",
    answer: "Yes, the combination of multiple cutting stages and fine screening provides excellent size control with ±10% tolerance on target particle size distribution."
  },
  {
    question: "What power consumption should be expected?",
    answer: "Power consumption ranges from 20-40 kWh per ton depending on material hardness and target output size. The multi-stage process is energy efficient for fine sizing applications."
  }
];

export default function FourShaftShredderPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Four-Shaft Shredder
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Multi-shaft design for fine size reduction and uniform output with superior material liberation capabilities.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                5-50 t/h capacity
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                95% liberation
              </div>
            </div>
            <QuoteDialog source="four_shaft_shredder_hero">
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
                  <p className="text-lg font-medium">Four-Shaft Shredder</p>
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

      {/* Cutting Stages */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Multi-Stage Cutting Process
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {cuttingStages.map((stage, index) => (
              <div key={stage.stage} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-black">
                    {stage.stage}
                  </h3>
                  <p className="text-sm text-arzir-gray-600">
                    {stage.description}
                  </p>
                  <div className="space-y-2">
                    <div className="px-3 py-1 bg-arzir-primary/10 rounded-full mx-auto w-fit">
                      <span className="text-xs font-medium text-arzir-primary">{stage.shafts}</span>
                    </div>
                    <div className="px-3 py-1 bg-success/10 rounded-full mx-auto w-fit">
                      <span className="text-xs font-medium text-success">{stage.outputSize}</span>
                    </div>
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

      {/* Material Suitability */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Material Suitability
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg bg-white">
              <caption className="sr-only">Material processing effectiveness and liberation rates</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Material Type</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Effectiveness</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Liberation Rate</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Applications</th>
                </tr>
              </thead>
              <tbody>
                {materialSuitability.map((material, index) => (
                  <tr key={material.material} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{material.material}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.effectiveness}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.liberationRate}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Processing Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-arzir-gray-50 p-6 rounded-xl text-center space-y-4">
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
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Ideal Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
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
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            FAQs
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl border-b border-arzir-gray-200 pb-6">
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
        productName="four-shaft-shredder"
        formSource="four-shaft-shredder_bottom" 
      />
    </>
  );
}