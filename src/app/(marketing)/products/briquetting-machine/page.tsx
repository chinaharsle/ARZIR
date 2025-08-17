import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Briquetting Machine | Metal Chip Compaction Systems | ARZIR",
  description: "High-pressure briquetting machines for metal chips and turnings with oil recovery and efficient material handling.",
};


const specifications = [
  {
    parameter: "Compaction Force",
    value: "150-500 tons",
    description: "Hydraulic press force range"
  },
  {
    parameter: "Briquette Size",
    value: "50-150mm dia",
    description: "Standard briquette dimensions"
  },
  {
    parameter: "Throughput",
    value: "0.5-5 t/h",
    description: "Processing capacity range"
  },
  {
    parameter: "Density Achieved",
    value: "4-7 g/cm³",
    description: "Briquette density range"
  },
  {
    parameter: "Oil Recovery",
    value: "95-98%",
    description: "Cutting fluid recovery rate"
  },
  {
    parameter: "Power Consumption",
    value: "15-75 kW",
    description: "Electrical power requirement"
  }
];

const features = [
  {
    title: "Oil Recovery System",
    description: "Integrated oil separation and recovery system capturing 95-98% of cutting fluids for reuse",
    icon: "💧"
  },
  {
    title: "High Compaction",
    description: "Powerful hydraulic system achieving 4-7 g/cm³ density for optimal melting efficiency",
    icon: "🔥"
  },
  {
    title: "Automated Operation",
    description: "Fully automated cycle with continuous feeding and briquette discharge systems",
    icon: "🤖"
  },
  {
    title: "Chip Handling",
    description: "Integrated conveyors and hoppers for efficient chip feeding and material handling",
    icon: "🔄"
  }
];

const materialTypes = [
  {
    material: "Aluminum Chips",
    density: "6-7 g/cm³",
    oilContent: "5-15%",
    recovery: "98%"
  },
  {
    material: "Steel Chips",
    density: "4-6 g/cm³", 
    oilContent: "3-12%",
    recovery: "96%"
  },
  {
    material: "Cast Iron",
    density: "5-6.5 g/cm³",
    oilContent: "2-8%",
    recovery: "95%"
  },
  {
    material: "Copper Chips",
    density: "6.5-7 g/cm³",
    oilContent: "4-10%",
    recovery: "97%"
  }
];

const applications = [
  {
    title: "Machining Centers",
    description: "Processing chips from CNC machining and turning operations",
    href: "/applications/metal-fabrication"
  },
  {
    title: "Foundries",
    description: "Compacting foundry returns and machining waste for remelting",
    href: "/applications/steel-mills"
  },
  {
    title: "Automotive Manufacturing",
    description: "Processing chips from engine blocks and transmission components",
    href: "/applications/automotive-dismantling"
  },
  {
    title: "Aluminum Processing",
    description: "Compacting aluminum turnings and extrusion waste",
    href: "/applications/aluminum-processing"
  }
];

const faqs = [
  {
    question: "What types of metal chips can be processed?",
    answer: "Our briquetting machines handle aluminum, steel, cast iron, copper, and brass chips from machining operations. Chip size should be 3-25mm for optimal results."
  },
  {
    question: "How much oil can be recovered from the chips?",
    answer: "Oil recovery rates typically range from 95-98% depending on chip type and oil content. Recovered oil can be filtered and reused in machining operations."
  },
  {
    question: "What density is achieved in the briquettes?",
    answer: "Briquette density ranges from 4-7 g/cm³ depending on material type. This high density significantly improves melting efficiency compared to loose chips."
  },
  {
    question: "How much space is saved by briquetting?",
    answer: "Briquetting typically reduces volume by 80-90% compared to loose chips, dramatically reducing storage space and transportation costs."
  },
  {
    question: "What maintenance is required?",
    answer: "Regular maintenance includes hydraulic fluid changes, die inspection, and lubrication. Typical service intervals are 1000-2000 operating hours."
  }
];

export default function BriquettingMachinePage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Briquetting Machine
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Efficient briquetting systems for compacting metal chips and turnings with integrated oil recovery for sustainable operations.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                95-98% oil recovery
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                4-7 g/cm³ density
              </div>
            </div>
            <QuoteDialog source="briquetting_machine_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/products/Briquetting-Machine.png"
                alt="ARZIR Briquetting Machine - Smart Waste Compacting Equipment"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Category Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-arzir-gray-600 leading-relaxed">
            ARZIR briquetting machines transform metal chips and turnings into dense, handleable briquettes 
            with throughput from 0.5-5 tons per hour. Our systems feature integrated oil recovery capturing 
            95-98% of cutting fluids, automated operation, and efficient material handling. Each machine is 
            designed for specific material types with comprehensive support for optimal configuration and process efficiency.
          </p>
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

      {/* Material Processing */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Material Processing Capabilities
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg bg-white">
              <caption className="sr-only">Material processing capabilities for different metal types</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Material Type</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Achieved Density</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Typical Oil Content</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Oil Recovery Rate</th>
                </tr>
              </thead>
              <tbody>
                {materialTypes.map((material, index) => (
                  <tr key={material.material} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{material.material}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.density}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.oilContent}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.recovery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-arzir-gray-50 p-6 rounded-xl">
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

      {/* Applications */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100 text-center space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">
                  {app.title}
                </h3>
                <p className="text-sm text-arzir-gray-600">
                  {app.description}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={app.href}>
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
      <ProductCTA 
        productName="briquetting-machine"
        formSource="briquetting-machine_bottom" 
      />
    </>
  );
}