import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Double-Shaft Shredder | High-Capacity Processing | ARZIR",
  description: "High-capacity double-shaft shredders for enhanced processing efficiency and consistent output size control.",
};

const specifications = [
  {
    parameter: "Power Range",
    value: "300-1500 kW",
    description: "Dual motor configuration"
  },
  {
    parameter: "Throughput",
    value: "3-30 t/h",
    description: "High-volume processing capacity"
  },
  {
    parameter: "Output Size",
    value: "30-200mm",
    description: "Precise size control"
  },
  {
    parameter: "Rotor Speed",
    value: "20-80 rpm",
    description: "Synchronized dual rotors"
  },
  {
    parameter: "Cutting Chamber",
    value: "1.5-3.0m width",
    description: "Large processing chamber"
  },
  {
    parameter: "Cutting Force",
    value: "High torque",
    description: "Dual-rotor cutting action"
  }
];

const features = [
  {
    title: "High Throughput",
    description: "Dual-rotor design provides superior processing capacity with consistent material flow",
    icon: "⚡"
  },
  {
    title: "Precise Size Control",
    description: "Counter-rotating shafts deliver uniform particle size and controlled output dimensions",
    icon: "🎯"
  },
  {
    title: "Robust Construction",
    description: "Heavy-duty frame and cutting chamber designed for continuous high-volume operation",
    icon: "🏗️"
  },
  {
    title: "Advanced Controls",
    description: "Automated systems monitor load, speed, and performance for optimal efficiency",
    icon: "🤖"
  }
];

const performanceData = [
  {
    material: "Automotive Scrap",
    throughput: "8-25 t/h",
    powerConsumption: "25-35 kWh/t",
    outputUniformity: "95%"
  },
  {
    material: "Mixed Metal Scrap",
    throughput: "5-20 t/h",
    powerConsumption: "20-30 kWh/t", 
    outputUniformity: "92%"
  },
  {
    material: "E-Waste Processing",
    throughput: "3-12 t/h",
    powerConsumption: "30-40 kWh/t",
    outputUniformity: "90%"
  },
  {
    material: "Steel Turnings",
    throughput: "10-30 t/h",
    powerConsumption: "15-25 kWh/t",
    outputUniformity: "95%"
  },
  {
    material: "Aluminum Waste",
    throughput: "6-18 t/h",
    powerConsumption: "18-28 kWh/t",
    outputUniformity: "93%"
  }
];

const benefits = [
  {
    title: "Superior Throughput",
    description: "Double-shaft design processes 2-3x more material than single-shaft systems",
    metric: "3-30 t/h"
  },
  {
    title: "Consistent Output",
    description: "Uniform particle size distribution improves downstream separation efficiency",
    metric: "90-95% uniformity"
  },
  {
    title: "Reduced Maintenance",
    description: "Balanced dual-rotor operation reduces vibration and component wear",
    metric: "30% less downtime"
  },
  {
    title: "Energy Efficiency",
    description: "Optimized cutting geometry reduces power consumption per ton processed",
    metric: "15-40 kWh/t"
  }
];

const applications = [
  {
    title: "Auto Shredding Facilities",
    description: "High-volume processing of end-of-life vehicles for material recovery",
    capacity: "15-30 t/h"
  },
  {
    title: "Large Scrap Yards",
    description: "Mixed scrap processing for volume reduction and material preparation",
    capacity: "10-25 t/h"
  },
  {
    title: "E-Waste Processing",
    description: "Electronic waste size reduction for precious metal recovery",
    capacity: "3-12 t/h"
  },
  {
    title: "Industrial Waste",
    description: "Manufacturing waste processing for recycling and remelting",
    capacity: "8-20 t/h"
  }
];

const operationalFeatures = [
  {
    feature: "Automatic Reverse",
    description: "Anti-jamming system automatically reverses rotors to clear blockages"
  },
  {
    feature: "Load Monitoring",
    description: "Real-time power monitoring prevents overload and optimizes throughput"
  },
  {
    feature: "Variable Speed",
    description: "Adjustable rotor speeds adapt to different material types and conditions"
  },
  {
    feature: "Safety Systems",
    description: "Emergency stops, access interlocks, and protection guards ensure operator safety"
  },
  {
    feature: "Remote Monitoring",
    description: "Optional telemetry systems provide performance data and maintenance alerts"
  },
  {
    feature: "Dust Suppression",
    description: "Integrated water spray systems control dust generation during operation"
  }
];

const faqs = [
  {
    question: "What advantages do double-shaft shredders offer over single-shaft?",
    answer: "Double-shaft shredders provide 2-3x higher throughput, more uniform output size, better material control, and can handle larger input pieces with less pre-processing."
  },
  {
    question: "How is output particle size controlled?",
    answer: "Output size is controlled by the gap between cutting tools, rotor speed, and screen size (if used). The counter-rotating design provides more precise size control than single-shaft systems."
  },
  {
    question: "What maintenance is required for dual rotors?",
    answer: "Regular inspection of cutting tools, bearings, and drive systems. Synchronized maintenance of both rotors is important. Typical maintenance intervals are 1000-2000 hours depending on material."
  },
  {
    question: "Can it handle oversized or difficult materials?",
    answer: "Yes, the dual-rotor design excels at processing large, awkward shapes like car bodies, appliances, and structural components that might jam single-shaft systems."
  },
  {
    question: "How energy efficient are double-shaft shredders?",
    answer: "Despite higher power ratings, double-shaft shredders often consume less energy per ton processed due to more efficient cutting action and higher throughput rates."
  }
];

export default function DoubleShaftShredderPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Double-Shaft Shredder
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              High-capacity dual-rotor shredder for enhanced processing efficiency and consistent output size control.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                3-30 t/h capacity
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                95% uniformity
              </div>
            </div>
            <QuoteDialog source="double_shaft_shredder_hero">
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
                  <p className="text-lg font-medium">Double-Shaft Shredder</p>
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

      {/* Performance Data */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Performance Data
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg bg-white">
              <caption className="sr-only">Performance data for different material types</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Material Type</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Throughput</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Power Consumption</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Output Uniformity</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((data, index) => (
                  <tr key={data.material} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{data.material}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{data.throughput}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{data.powerConsumption}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{data.outputUniformity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Operational Features */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Operational Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalFeatures.map((feature, index) => (
              <div key={feature.feature} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-arzir-primary" />
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {feature.feature}
                    </h3>
                  </div>
                  <p className="text-sm text-arzir-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Performance Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
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
            {applications.map((app, index) => (
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
        productName="double-shaft-shredder"
        formSource="double-shaft-shredder_bottom" 
      />
    </>
  );
}