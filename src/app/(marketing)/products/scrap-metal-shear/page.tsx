import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrap Metal Shears - Container, Gantry & Alligator Cutting Equipment",
  description: "Heavy-duty scrap metal shears for industrial recycling. Container shears, gantry shears, and alligator shears with superior cutting force and precision.",
};

const products = [
  {
    title: "Container Shear",
    description: "Mobile shearing solution for on-site processing with excellent mobility.",
    href: "/products/container-shear",
    image: "✂️",
    alt: "Container Shear for mobile processing"
  },
  {
    title: "Gantry Shear",
    description: "High-capacity stationary shear for heavy-duty industrial applications.",
    href: "/products/gantry-shear", 
    image: "✂️",
    alt: "Gantry Shear for stationary operations"
  },
  {
    title: "Alligator Shear",
    description: "Fast-cycling shear for cutting structural steel and plate materials.",
    href: "/products/alligator-shear",
    image: "✂️",
    alt: "Alligator Shear for structural steel"
  }
];

const comparisonData = [
  {
    model: "Container Shear",
    cuttingForce: "400-800T",
    bladeLength: "1.2-2.0m",
    cutThickness: "50-150mm",
    cycleTime: "30-60s",
    mobility: "Mobile"
  },
  {
    model: "Gantry Shear", 
    cuttingForce: "800-2000T",
    bladeLength: "2.0-3.5m",
    cutThickness: "100-300mm",
    cycleTime: "45-90s",
    mobility: "Stationary"
  },
  {
    model: "Alligator Shear",
    cuttingForce: "300-600T",
    bladeLength: "1.0-1.8m",
    cutThickness: "40-120mm",
    cycleTime: "20-40s",
    mobility: "Semi-mobile"
  }
];

const applications = [
  {
    title: "Scrap Yards",
    description: "High-volume cutting of mixed scrap materials",
    href: "/applications/scrap-recycling"
  },
  {
    title: "Demolition Sites",
    description: "On-site processing of structural steel and debris",
    href: "/applications/construction-demolition-recycling"
  },
  {
    title: "Ship Breaking",
    description: "Heavy-duty cutting of maritime steel structures",
    href: "/applications/shipbreaking"
  },
  {
    title: "Railway Scrapping",
    description: "Processing of rail cars and locomotive components",
    href: "/applications/railway-scrapping"
  }
];

const faqs = [
  {
    question: "What cutting force do I need for structural steel?",
    answer: "For typical structural steel (I-beams, channels, angles), 500-1000 tons cutting force is recommended. Heavier sections may require up to 2000 tons for clean cuts."
  },
  {
    question: "How do I choose between mobile and stationary shears?",
    answer: "Mobile container shears offer flexibility for multiple sites but lower capacity. Stationary gantry shears provide maximum cutting force and efficiency for high-volume operations."
  },
  {
    question: "What maintenance is required for shear blades?",
    answer: "Blade maintenance includes regular inspection for wear, proper lubrication, and replacement when cutting quality degrades. Typical blade life is 5000-15000 cuts depending on material."
  },
  {
    question: "Can shears handle contaminated materials?",
    answer: "Yes, ARZIR shears can handle lightly contaminated scrap. However, excessive concrete, dirt, or non-metallic materials should be removed to prevent premature blade wear."
  },
  {
    question: "What safety features are included?",
    answer: "All shears include safety barriers, emergency stops, blade guards, hydraulic pressure relief, and operator protection systems meeting international safety standards."
  }
];

export default function ScrapMetalShearPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Scrap Metal Shears
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Heavy-duty shearing solutions for scrap yards, demolition, and recycling facilities with superior cutting performance.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                300-2000T force
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Up to 300mm cut
              </div>
            </div>
            <QuoteDialog source="scrap_metal_shear_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/products/scrap-metal-shear.png"
                alt="ARZIR Scrap Metal Shears - Heavy-Duty Cutting Equipment"
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
            ARZIR scrap metal shears deliver precise cutting performance for structural steel, plate materials, 
            and mixed scrap up to 300mm thickness. Our shear range includes mobile container units for 
            flexibility, stationary gantry systems for maximum capacity, and alligator shears for fast cycling. 
            Each model is engineered for specific cutting requirements and operating environments.
          </p>
        </div>
      </Section>

      {/* Product Grid */}
      <Section background="gray" size="xl">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Shear Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <caption className="sr-only">Comparison of ARZIR scrap metal shear models</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cutting Force</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Blade Length</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cut Thickness</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cycle Time</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Mobility</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{row.model}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.cuttingForce}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.bladeLength}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.cutThickness}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.cycleTime}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{row.mobility}</td>
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
        productName="scrap-metal-shear"
        formSource="scrap-metal-shear_bottom" 
      />
    </>
  );
}