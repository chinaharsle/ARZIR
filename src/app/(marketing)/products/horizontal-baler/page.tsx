import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horizontal Baler | Continuous High-Throughput Compaction | ARZIR",
  description: "Continuous horizontal balers for high throughput operations with consistent bale sizes and automated feeding systems.",
};

const specifications = [
  {
    parameter: "Press Force",
    value: "400-1000T",
    description: "Hydraulic compression force"
  },
  {
    parameter: "Bale Density",
    value: "1.5-2.5 t/m³",
    description: "Achieved compaction density"
  },
  {
    parameter: "Bale Dimensions",
    value: "1.1-1.3m",
    description: "Standard bale size"
  },
  {
    parameter: "Cycle Time",
    value: "40-80 seconds",
    description: "Complete compression cycle"
  },
  {
    parameter: "Throughput",
    value: "20-100 t/day",
    description: "Daily processing capacity"
  },
  {
    parameter: "Feed System",
    value: "Conveyor/Auto",
    description: "Automated material feeding"
  }
];

const features = [
  {
    title: "Continuous Operation",
    description: "Automated feeding and ejection systems enable continuous operation for maximum throughput efficiency",
    icon: "🔄"
  },
  {
    title: "Consistent Bale Size",
    description: "Precise control systems ensure uniform bale dimensions and density for optimal transport and handling",
    icon: "📏"
  },
  {
    title: "High Throughput",
    description: "Designed for processing 20-100+ tons per day with optimized cycle times and material flow",
    icon: "⚡"
  },
  {
    title: "Advanced Automation",
    description: "PLC controls with optional remote monitoring and Industry 4.0 integration capabilities",
    icon: "🤖"
  }
];

const automationLevels = [
  {
    level: "Basic Manual",
    description: "Manual feeding with hydraulic compression and manual bale ejection",
    throughput: "20-40 t/day",
    investment: "$",
    features: ["Manual controls", "Basic safety", "Simple operation"]
  },
  {
    level: "Semi-Automatic",
    description: "Conveyor feeding with automatic compression cycles and assisted ejection",
    throughput: "40-70 t/day", 
    investment: "$$",
    features: ["Conveyor feed", "Auto cycle", "Safety systems", "Basic monitoring"]
  },
  {
    level: "Fully Automatic",
    description: "Complete automation with continuous feeding, compression, tying, and ejection",
    throughput: "70-100+ t/day",
    investment: "$$$",
    features: ["Full automation", "Remote monitoring", "Predictive maintenance", "Quality control"]
  }
];

const operationalBenefits = [
  {
    title: "Labor Efficiency",
    description: "Automated operation reduces labor requirements by 60-80%",
    metric: "60-80% less labor"
  },
  {
    title: "Consistent Quality",
    description: "Uniform bale dimensions improve handling and transport efficiency",
    metric: "±2% tolerance"
  },
  {
    title: "High Utilization",
    description: "Continuous operation achieves 85-95% equipment utilization",
    metric: "85-95% uptime"
  },
  {
    title: "Volume Processing",
    description: "High throughput capability handles large material volumes efficiently",
    metric: "20-100+ t/day"
  }
];

const applications = [
  {
    title: "Large Scrap Yards",
    description: "High-volume facilities processing mixed ferrous and non-ferrous materials",
    capacity: "50-100+ t/day"
  },
  {
    title: "Steel Mills",
    description: "Processing mill scale, returns, and production scrap for remelting",
    capacity: "30-80 t/day"
  },
  {
    title: "Auto Shredder Facilities",
    description: "Processing shredded automotive scrap with consistent bale preparation",
    capacity: "40-90 t/day"
  },
  {
    title: "Metal Processing Plants",
    description: "Continuous processing of manufacturing waste and production offcuts",
    capacity: "25-70 t/day"
  }
];

const faqs = [
  {
    question: "What throughput range is optimal for horizontal balers?",
    answer: "Horizontal balers are most cost-effective for throughput above 20 tons per day. They excel in high-volume operations processing 50-100+ tons daily with continuous operation."
  },
  {
    question: "How much space is required for installation?",
    answer: "Typical horizontal balers require 8-12m length x 4-6m width (40-60 m²) including material handling areas. Additional space needed for conveyors and storage."
  },
  {
    question: "What level of automation is available?",
    answer: "Three automation levels: Basic manual, semi-automatic with conveyor feeding, and fully automatic with complete material handling and remote monitoring."
  },
  {
    question: "How consistent are the bale dimensions?",
    answer: "Advanced control systems maintain bale dimensions within ±2% tolerance, ensuring consistent size for transport optimization and downstream processing."
  },
  {
    question: "What maintenance is required?",
    answer: "Regular maintenance includes hydraulic system service, conveyor maintenance, and control system checks. Predictive maintenance options available for fully automated systems."
  }
];

export default function HorizontalBalerPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Horizontal Baler
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Continuous horizontal baler for high throughput operations with consistent bale sizes and advanced automation.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                20-100+ tons/day
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Continuous operation
              </div>
            </div>
            <QuoteDialog source="horizontal_baler_hero">
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
                  <div className="text-8xl mb-4">📦</div>
                  <p className="text-lg font-medium">Horizontal Baler</p>
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

      {/* Automation Levels */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Automation Levels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {automationLevels.map((level) => (
              <div key={level.level} className="bg-arzir-gray-50 p-6 rounded-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {level.level}
                    </h3>
                    <div className="text-arzir-primary font-bold text-xl">
                      {level.investment}
                    </div>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">
                    {level.description}
                  </p>
                  <div className="px-3 py-1 bg-arzir-primary/10 rounded-full w-fit">
                    <span className="text-sm font-semibold text-arzir-primary">{level.throughput}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                      Key Features
                    </div>
                    <div className="space-y-1">
                      {level.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-arzir-primary" />
                          <span className="text-xs text-arzir-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Operational Benefits */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Operational Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalBenefits.map((benefit) => (
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
            {faqs.map((faq) => (
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
        productName="Horizontal Baler"
        formSource="horizontal_baler_bottom"
        title="Maximize Your Production Throughput"
        description="Achieve continuous high-volume baling with our horizontal balers. Perfect for operations requiring consistent bale sizes and automated feeding systems for maximum efficiency and profitability."
      />
    </>
  );
}