import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertical Baler | Space-Saving Compaction Solutions | ARZIR",
  description: "Space-saving vertical balers for low-to-medium throughput operations with efficient compaction and easy operation.",
};

const specifications = [
  {
    parameter: "Press Force",
    value: "200-600T",
    description: "Hydraulic compression force"
  },
  {
    parameter: "Bale Density",
    value: "1.0-2.0 t/m³",
    description: "Achieved compaction density"
  },
  {
    parameter: "Bale Dimensions",
    value: "0.8-1.1m",
    description: "Standard bale size"
  },
  {
    parameter: "Cycle Time",
    value: "30-60 seconds",
    description: "Complete compression cycle"
  },
  {
    parameter: "Feed Opening",
    value: "1.2 x 1.2m",
    description: "Top loading dimensions"
  },
  {
    parameter: "Floor Space",
    value: "3 x 4m",
    description: "Minimal footprint required"
  }
];

const features = [
  {
    title: "Compact Design",
    description: "Minimal floor space requirement makes vertical balers ideal for facilities with limited space",
    icon: "📐"
  },
  {
    title: "Top Loading",
    description: "Convenient top loading design allows easy material feeding with forklift or conveyor systems",
    icon: "⬆️"
  },
  {
    title: "Simple Operation",
    description: "User-friendly controls and automatic cycle operation minimize operator training requirements",
    icon: "🎮"
  },
  {
    title: "Cost Effective",
    description: "Lower initial investment and operating costs compared to horizontal balers for smaller operations",
    icon: "💰"
  }
];

const comparisonData = [
  {
    parameter: "Floor Space",
    vertical: "12 m²",
    horizontal: "40 m²",
    advantage: "vertical"
  },
  {
    parameter: "Investment Cost",
    vertical: "Lower",
    horizontal: "Higher",
    advantage: "vertical"
  },
  {
    parameter: "Throughput",
    vertical: "5-20 t/day",
    horizontal: "20-100 t/day",
    advantage: "horizontal"
  },
  {
    parameter: "Automation",
    vertical: "Basic",
    horizontal: "Advanced",
    advantage: "horizontal"
  },
  {
    parameter: "Maintenance",
    vertical: "Simple",
    horizontal: "Complex",
    advantage: "vertical"
  }
];

const applications = [
  {
    title: "Small Scrap Yards",
    description: "Facilities processing 5-20 tons per day with limited floor space",
    throughput: "5-20 t/day"
  },
  {
    title: "Metal Fabrication Shops",
    description: "Processing manufacturing offcuts and trimming waste",
    throughput: "2-15 t/day"
  },
  {
    title: "Automotive Workshops",
    description: "Compacting parts and components from vehicle maintenance",
    throughput: "1-10 t/day"
  },
  {
    title: "Appliance Recycling",
    description: "Processing white goods and small appliance components",
    throughput: "3-18 t/day"
  }
];

const benefits = [
  {
    title: "Space Efficiency",
    description: "75% less floor space compared to horizontal balers",
    icon: "📏"
  },
  {
    title: "Lower Investment",
    description: "40-60% lower initial cost than horizontal systems",
    icon: "💸"
  },
  {
    title: "Easy Installation",
    description: "Simple installation with minimal foundation requirements",
    icon: "🔧"
  },
  {
    title: "Flexible Location",
    description: "Can be installed in tight spaces and existing buildings",
    icon: "🏢"
  }
];

const faqs = [
  {
    question: "What is the ideal throughput range for vertical balers?",
    answer: "Vertical balers are most efficient for throughput ranges of 1-20 tons per day. For higher volumes, horizontal balers become more cost-effective."
  },
  {
    question: "How much floor space is required?",
    answer: "Typical vertical balers require only 3x4 meters (12 m²) of floor space compared to 40+ m² for horizontal balers, making them ideal for space-constrained facilities."
  },
  {
    question: "What materials can be processed?",
    answer: "Vertical balers handle mixed ferrous and non-ferrous scrap, aluminum cans, steel turnings, copper, brass, and light automotive components effectively."
  },
  {
    question: "How does bale density compare to horizontal balers?",
    answer: "Vertical balers achieve 1.0-2.0 t/m³ density, while horizontal balers reach 1.5-2.5 t/m³. The difference is acceptable for many applications given the space and cost savings."
  },
  {
    question: "What maintenance is required?",
    answer: "Maintenance is minimal - hydraulic fluid changes every 2000 hours, seal inspection, and basic lubrication. Simple design reduces maintenance complexity and costs."
  }
];

export default function VerticalBalerPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Vertical Baler
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Space-saving vertical baler for low-to-medium throughput operations with efficient compaction and minimal footprint.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                75% less space
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                5-20 tons/day
              </div>
            </div>
            <QuoteDialog source="vertical_baler_hero">
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
                  <p className="text-lg font-medium">Vertical Baler</p>
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

      {/* Comparison Table */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Vertical vs Horizontal Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">Comparison between vertical and horizontal balers</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Parameter</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Vertical Baler</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Horizontal Baler</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.parameter} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{row.parameter}</td>
                    <td className={`border border-arzir-gray-200 p-4 ${row.advantage === 'vertical' ? 'font-semibold text-arzir-primary' : 'text-arzir-gray-700'}`}>
                      {row.vertical}
                    </td>
                    <td className={`border border-arzir-gray-200 p-4 ${row.advantage === 'horizontal' ? 'font-semibold text-arzir-primary' : 'text-arzir-gray-700'}`}>
                      {row.horizontal}
                    </td>
                    <td className="border border-arzir-gray-200 p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        row.advantage === 'vertical' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {row.advantage === 'vertical' ? 'Vertical' : 'Horizontal'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                <div className="text-4xl">{benefit.icon}</div>
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

      <ProductCTA 
        
        formSource="vertical_baler_bottom"
        title="Maximize Space Efficiency in Your Operation"
        description="Perfect for space-constrained facilities, our vertical balers deliver efficient compaction for low-to-medium throughput operations. Achieve consistent bale quality while minimizing your facility footprint."
      />
    </>
  );
}