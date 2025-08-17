import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrap Metal Baler | ARZIR Recycling Baler Machine",
  description: "High-density scrap metal baler for ferrous and non-ferrous materials. Robust construction, reliable compaction, and consistent bale quality for scrap yards and recycling facilities.",
};

const keyFeatures = [
  {
    icon: Zap,
    title: "High-Density Baling",
    description: "Up to 1200 tons of pressure for maximum compaction and optimal bale density up to 2.5 t/m³"
  },
  {
    icon: Shield,
    title: "Robust Build",
    description: "Heavy-duty steel frame construction designed for continuous operation and long-term reliability"
  },
  {
    icon: Settings,
    title: "Easy Operation", 
    description: "PLC control with touchscreen interface for intuitive operation and automated tie systems"
  },
  {
    icon: CheckCircle,
    title: "Low Maintenance",
    description: "Optimized hydraulic system design reduces downtime and maintenance requirements"
  },
  {
    icon: Award,
    title: "Energy Efficiency",
    description: "Advanced hydraulic technology reduces power consumption while maintaining high output"
  }
];

const specifications = [
  {
    model: "ARZIR-300",
    pressForce: "300 tons",
    baleSize: "1.1 x 1.1 x 1.6m",
    cycleTime: "45-60s",
    motorPower: "45 kW",
    dimensions: "8.5 x 3.2 x 4.2m",
    weight: "12 tons"
  },
  {
    model: "ARZIR-500", 
    pressForce: "500 tons",
    baleSize: "1.2 x 1.2 x 1.8m",
    cycleTime: "50-70s",
    motorPower: "75 kW",
    dimensions: "10.2 x 3.5 x 4.8m",
    weight: "18 tons"
  },
  {
    model: "ARZIR-800",
    pressForce: "800 tons",
    baleSize: "1.3 x 1.3 x 2.0m", 
    cycleTime: "60-80s",
    motorPower: "110 kW",
    dimensions: "12.5 x 4.0 x 5.2m",
    weight: "28 tons"
  },
  {
    model: "ARZIR-1200",
    pressForce: "1200 tons",
    baleSize: "1.4 x 1.4 x 2.2m",
    cycleTime: "70-90s", 
    motorPower: "160 kW",
    dimensions: "15.0 x 4.5 x 5.8m",
    weight: "42 tons"
  }
];

const workflowSteps = [
  {
    step: "Loading",
    description: "Material is loaded into the compression chamber via crane, loader, or conveyor system"
  },
  {
    step: "Compressing",
    description: "Hydraulic ram applies up to 1200 tons pressure to achieve maximum bale density"
  },
  {
    step: "Tying",
    description: "Automatic wire tie system secures the bale with galvanized steel wire"
  },
  {
    step: "Discharging",
    description: "Completed bale is ejected and ready for transport to steel mills or processors"
  }
];

const applications = [
  {
    title: "Scrap Recycling",
    description: "Mixed ferrous and non-ferrous scrap processing",
    image: "♻️",
    href: "/applications/scrap-recycling"
  },
  {
    title: "Automotive Dismantling",
    description: "End-of-life vehicle body and component processing",
    image: "🚗", 
    href: "/applications/automotive-dismantling"
  },
  {
    title: "Foundries",
    description: "Foundry returns and casting scrap compaction",
    image: "🏭",
    href: "/applications/steel-mills"
  },
  {
    title: "Metal Fabrication",
    description: "Manufacturing offcuts and fabrication waste",
    image: "🔨",
    href: "/applications/metal-fabrication"
  }
];

const caseStudies = [
  {
    title: "Steel Recycling Plant - Brazil",
    location: "São Paulo, Brazil",
    results: "+45% throughput, -30% labor costs",
    metrics: "850 tons/day capacity",
    equipment: "ARZIR-800 Baler + Gantry Shear"
  },
  {
    title: "Automotive Scrap Yard - USA", 
    location: "Detroit, Michigan",
    results: "+60% processing speed, ROI in 18 months",
    metrics: "120 vehicles/day",
    equipment: "ARZIR-1200 Car Body Baler"
  }
];

const faqs = [
  {
    question: "What materials can the scrap metal baler process?",
    answer: "The baler handles ferrous metals (steel, iron), non-ferrous metals (aluminum, copper, brass), mixed scrap, automotive bodies, appliances, and light structural steel. Material should be reasonably clean and free of excessive contamination."
  },
  {
    question: "What's the typical ROI for a scrap metal baler installation?",
    answer: "Most facilities see ROI within 18-36 months through increased material density (higher transport efficiency), reduced labor costs, and premium pricing for high-quality bales. Larger operations often achieve faster payback."
  },
  {
    question: "How much space is required for installation?",
    answer: "Space requirements vary by model: ARZIR-300 needs ~100m², ARZIR-800 needs ~200m², ARZIR-1200 needs ~300m². This includes equipment, material staging, and crane/loader access areas."
  },
  {
    question: "What maintenance is required and how often?",
    answer: "Regular maintenance includes hydraulic oil changes (1000 hours), filter replacement (500 hours), lubrication (daily), and visual inspections. Major overhauls typically occur every 5000-8000 operating hours."
  },
  {
    question: "Can the baler be customized for specific requirements?",
    answer: "Yes, we offer customization options including different bale sizes, special tie systems, custom feeding arrangements, enhanced safety features, and integration with existing material handling systems."
  }
];

export default function ScrapMetalBalerPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Scrap Metal Baler
            </h1>
            <h2 className="text-xl lg:text-2xl text-arzir-primary font-semibold">
              High-Density Recycling Machine
            </h2>
            <p className="text-lg text-arzir-gray-600 leading-relaxed">
              Robust construction and reliable compaction for ferrous and non-ferrous metals. 
              Proven performance in scrap yards and recycling facilities worldwide.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                300-1200T Force
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Up to 2.5 t/m³
              </div>
              <div className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm">
                CE Certified
              </div>
            </div>
            <QuoteDialog source="scrap_metal_baler_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-arzir-gray-500">
                <div className="text-center">
                  <div className="text-8xl mb-4">📦</div>
                  <p className="text-lg font-medium">ARZIR Scrap Metal Baler</p>
                  <p className="text-sm text-arzir-gray-400">High-Density Compaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Product Overview */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Product Overview
          </h2>
          <div className="text-lg text-arzir-gray-600 leading-relaxed space-y-4">
            <p>
              The ARZIR Scrap Metal Baler is engineered for high-performance recycling operations processing 
              ferrous and non-ferrous metals. Designed for scrap yards, recycling plants, and metal processing 
              facilities requiring reliable, high-density compaction.
            </p>
            <p>
              Suitable materials include carbon steel, aluminum, copper, stainless steel, and mixed scrap streams. 
              Target users include scrap yards, automotive dismantlers, metal fabrication shops, and industrial 
              recycling facilities processing 10-200 tons per day.
            </p>
          </div>
        </div>
      </Section>

      {/* Key Features & Benefits */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Why Choose ARZIR Scrap Metal Baler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Technical Specifications
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Scrap Metal Baler technical specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Press Force</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Bale Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cycle Time</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Motor Power</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Dimensions</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Weight</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={spec.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-arzir-primary">{spec.model}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.pressForce}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.baleSize}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.cycleTime}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.motorPower}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.dimensions}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            How the Scrap Metal Baler Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
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
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-arzir-primary -ml-3" />
                  </div>
                )}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="group">
                <Link href={app.href}>
                  <div className="bg-arzir-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center space-y-4">
                    <div className="text-5xl mx-auto">{app.image}</div>
                    <h3 className="text-lg font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-sm text-arzir-gray-600">
                      {app.description}
                    </p>
                    <div className="flex items-center justify-center text-arzir-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                      <span className="text-sm">View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Customer Success Stories */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Customer Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white p-8 rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-black">
                    {study.title}
                  </h3>
                  <div className="text-sm text-arzir-gray-600">
                    📍 {study.location}
                  </div>
                  <div className="space-y-2">
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

      {/* FAQ */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Frequently Asked Questions
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

      {/* Request a Quote Form */}
      <Section background="gray" size="lg">
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black">
                Request a Quote
              </h2>
              <p className="text-arzir-gray-600 leading-relaxed">
                Our experts will respond within 24 hours with a tailored solution for your specific requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm text-arzir-gray-600">Detailed technical specifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm text-arzir-gray-600">Custom configuration options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm text-arzir-gray-600">Installation and training support</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <QuoteDialog source="scrap_metal_baler_quote">
                <Button size="lg" className="bg-arzir-primary hover:bg-primary-600 w-full lg:w-auto">
                  Get Detailed Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </QuoteDialog>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ProductCTA 
        
        formSource="scrap-metal-baler_bottom" 
      />
    </>
  );
}
