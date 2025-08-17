import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Shredders - Single, Double & Four-Shaft Metal Processing",
  description: "High-performance industrial shredders for metal and waste processing. Single-shaft, double-shaft, four-shaft, and hammer shredders with superior throughput capacity.",
};

const products = [
  {
    title: "Single-Shaft Shredder",
    description: "Versatile single-shaft design for mixed material processing applications.",
    href: "/products/single-shaft-shredder",
    image: "🔧",
    alt: "Single-Shaft Shredder for versatile processing"
  },
  {
    title: "Double-Shaft Shredder",
    description: "Dual-shaft configuration for enhanced processing capacity and efficiency.",
    href: "/products/double-shaft-shredder",
    image: "🔧",
    alt: "Double-Shaft Shredder for high capacity"
  },
  {
    title: "Four-Shaft Shredder",
    description: "Multi-shaft design for fine size reduction and uniform output.",
    href: "/products/four-shaft-shredder",
    image: "🔧",
    alt: "Four-Shaft Shredder for fine processing"
  },
  {
    title: "Hammer Shredder",
    description: "High-impact hammer design for brittle materials and rapid processing.",
    href: "/products/hammer-shredder",
    image: "🔧",
    alt: "Hammer Shredder for impact processing"
  }
];

const comparisonData = [
  {
    model: "Single-Shaft",
    power: "200-800 kW",
    throughput: "1-15 t/h",
    outputSize: "50-300mm",
    application: "Mixed materials",
    maintenance: "Low"
  },
  {
    model: "Double-Shaft", 
    power: "300-1500 kW",
    throughput: "3-30 t/h",
    outputSize: "30-200mm",
    application: "High volume",
    maintenance: "Medium"
  },
  {
    model: "Four-Shaft",
    power: "400-2000 kW",
    throughput: "5-50 t/h",
    outputSize: "10-100mm",
    application: "Fine sizing",
    maintenance: "Medium"
  },
  {
    model: "Hammer",
    power: "150-600 kW",
    throughput: "2-20 t/h",
    outputSize: "20-150mm",
    application: "Brittle materials",
    maintenance: "High"
  }
];

const applications = [
  {
    title: "E-Waste Processing",
    description: "Electronic waste size reduction and material liberation",
    href: "/applications/ewaste-recycling"
  },
  {
    title: "Automotive Shredding",
    description: "Vehicle body processing and material separation",
    href: "/applications/automotive-dismantling"
  },
  {
    title: "Mixed Metal Processing",
    description: "Preparation of mixed scrap for downstream separation",
    href: "/applications/scrap-recycling"
  },
  {
    title: "Non-Ferrous Recovery",
    description: "Size reduction for magnetic and density separation",
    href: "/applications/non-ferrous-recycling"
  }
];

const faqs = [
  {
    question: "How do I choose between single and double-shaft shredders?",
    answer: "Single-shaft shredders offer versatility and lower maintenance for mixed materials. Double-shaft provides higher throughput and better control for consistent output size."
  },
  {
    question: "What power requirements should I expect?",
    answer: "Power consumption depends on material type and throughput. Typical range is 15-40 kWh per ton processed. Harder materials and finer output require more power."
  },
  {
    question: "How often do cutting tools need replacement?",
    answer: "Cutting tool life varies by material: 500-2000 tons for abrasive materials, 1000-5000 tons for clean metals. Regular maintenance extends tool life significantly."
  },
  {
    question: "Can shredders handle contaminated materials?",
    answer: "Yes, shredders can process contaminated scrap, but excessive dirt, concrete, or non-metallic materials will increase wear and reduce efficiency."
  },
  {
    question: "What size reduction ratios are achievable?",
    answer: "Typical reduction ratios range from 5:1 to 20:1 depending on input material and shredder configuration. Multiple-pass processing can achieve higher ratios."
  }
];

export default function ShredderPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Industrial Shredders
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Powerful shredders designed to handle various scrap materials with precision size reduction and high throughput.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                1-50 tons/hour
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                200-2000 kW
              </div>
            </div>
            <QuoteDialog source="shredder_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/products/shredder.png"
                alt="ARZIR Industrial Shredders - Advanced Size Reduction Equipment"
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
            ARZIR industrial shredders provide efficient size reduction for metals, e-waste, and mixed materials 
            with throughput from 1-50 tons per hour. Our shredder range includes single-shaft for versatility, 
            double-shaft for high capacity, four-shaft for fine sizing, and hammer mills for brittle materials. 
            Each design is optimized for specific material types and processing requirements.
          </p>
        </div>
      </Section>

      {/* Product Grid */}
      <Section background="gray" size="xl">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Shredder Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={product.title} className="group h-full">
                <Link href={product.href}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-arzir-gray-100 overflow-hidden h-full flex flex-col">
                    {/* Product Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-50 to-arzir-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-6xl filter drop-shadow-lg">{product.image}</span>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 space-y-3 flex-1 flex flex-col">
                      <h3 className="text-lg font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-sm text-arzir-gray-600 leading-relaxed flex-1">
                        {product.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full mt-auto">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Compare Models */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Compare Models
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">Comparison of ARZIR shredder models</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Power Range</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Throughput</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Output Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Best Application</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{row.model}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.power}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.throughput}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.outputSize}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.application}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            {applications.map((app, index) => (
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
        productName="shredder"
        formSource="shredder_bottom" 
      />
    </>
  );
}