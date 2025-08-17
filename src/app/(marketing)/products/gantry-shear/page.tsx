import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, CheckCircle, Zap, Shield } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gantry Shear | High-Capacity Stationary Cutting | ARZIR",
  description: "Heavy-duty gantry shears for high-capacity stationary operations with maximum cutting force and industrial performance.",
};

const specifications = [
  {
    parameter: "Cutting Force",
    value: "800-2000T",
    description: "Maximum hydraulic force"
  },
  {
    parameter: "Blade Length",
    value: "2.0-3.5m",
    description: "Cutting blade width"
  },
  {
    parameter: "Cut Thickness",
    value: "100-300mm",
    description: "Maximum material thickness"
  },
  {
    parameter: "Cycle Time",
    value: "45-90 seconds",
    description: "Complete cutting cycle"
  },
  {
    parameter: "Feed Opening",
    value: "3.5 x 2.5m",
    description: "Material loading area"
  },
  {
    parameter: "Power Requirement",
    value: "200-500 kW",
    description: "Electric motor power"
  }
];

const features = [
  {
    title: "Maximum Cutting Force",
    description: "Up to 2000 tons cutting force handles the heaviest structural steel and thick plate materials",
    icon: "💪"
  },
  {
    title: "Precision Control",
    description: "Advanced hydraulic systems provide precise blade positioning and consistent cutting quality",
    icon: "🎯"
  },
  {
    title: "Heavy-Duty Construction",
    description: "Robust gantry frame design withstands continuous high-force operation in demanding environments",
    icon: "🏗️"
  },
  {
    title: "Safety Systems",
    description: "Comprehensive safety features including light curtains, emergency stops, and operator protection",
    icon: "🛡️"
  }
];

const benefits = [
  {
    title: "High Throughput",
    description: "Process 100-200+ tons per day with consistent cutting performance",
    metric: "100-200+ t/day"
  },
  {
    title: "Material Versatility",
    description: "Handles structural steel, heavy plate, and industrial waste up to 300mm",
    metric: "Up to 300mm"
  },
  {
    title: "Operational Efficiency",
    description: "Continuous duty cycle with minimal downtime for maintenance",
    metric: "95% uptime"
  },
  {
    title: "Precise Cuts",
    description: "Clean, accurate cuts reduce secondary processing requirements",
    metric: "±2mm accuracy"
  }
];

const applications = [
  {
    title: "Large Scrap Yards",
    description: "High-volume processing of mixed heavy scrap materials and structural steel",
    throughput: "100-200 t/day"
  },
  {
    title: "Steel Mills",
    description: "Processing mill scale, heavy returns, and production waste for remelting",
    throughput: "80-150 t/day"
  },
  {
    title: "Ship Breaking",
    description: "Cutting heavy maritime steel structures and ship hull sections",
    throughput: "60-120 t/day"
  },
  {
    title: "Heavy Industry",
    description: "Processing large industrial components and heavy machinery dismantling",
    throughput: "40-100 t/day"
  }
];

const safetyFeatures = [
  {
    feature: "Light Curtain System",
    description: "Perimeter protection automatically stops operation when breached"
  },
  {
    feature: "Emergency Stop Network",
    description: "Multiple e-stop buttons accessible from all operator positions"
  },
  {
    feature: "Blade Guards",
    description: "Physical barriers protect operators from cutting blade exposure"
  },
  {
    feature: "Hydraulic Safety",
    description: "Pressure relief systems prevent dangerous over-pressurization"
  },
  {
    feature: "Access Control",
    description: "Lockout/tagout systems ensure safe maintenance procedures"
  },
  {
    feature: "Warning Systems",
    description: "Audio and visual alarms alert operators to operational status"
  }
];

const faqs = [
  {
    question: "What is the thickest material a gantry shear can cut?",
    answer: "ARZIR gantry shears can cut materials up to 300mm thick with proper blade configuration. For extremely thick sections, multiple cuts or specialized blade geometry may be required."
  },
  {
    question: "How does throughput compare to other cutting methods?",
    answer: "Gantry shears typically process 100-200+ tons per day, significantly faster than torch cutting or demolition shears while providing cleaner cuts and better material preparation."
  },
  {
    question: "What foundation requirements are needed?",
    answer: "Gantry shears require substantial concrete foundations typically 3-4 meters deep with reinforcement. Foundation design depends on soil conditions and shear size."
  },
  {
    question: "Can the shear handle contaminated materials?",
    answer: "Yes, but contamination should be minimized. Light concrete, paint, or dirt is acceptable, but excessive non-metallic material reduces blade life and cutting efficiency."
  },
  {
    question: "What maintenance schedule is recommended?",
    answer: "Daily inspections, weekly lubrication, monthly hydraulic checks, and quarterly blade inspection. Major maintenance typically required every 2000-3000 operating hours."
  }
];

export default function GantryShearPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Gantry Shear
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Heavy-duty stationary shear for maximum cutting capacity and industrial-scale scrap processing operations.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                800-2000T force
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                100-200+ t/day
              </div>
            </div>
            <QuoteDialog source="gantry_shear_hero">
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
                  <p className="text-lg font-medium">Gantry Shear</p>
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

      {/* Performance Benefits */}
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

      {/* Safety Features */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Safety Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((safety, index) => (
              <div key={safety.feature} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-arzir-primary" />
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {safety.feature}
                    </h3>
                  </div>
                  <p className="text-sm text-arzir-gray-600">
                    {safety.description}
                  </p>
                </div>
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
      <Section background="white" size="lg">
        <div className="bg-arzir-gray-50 rounded-3xl p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black">
            Need maximum cutting capacity?
          </h2>
          <p className="text-arzir-gray-600 max-w-2xl mx-auto">
            Our engineers can help you design the optimal gantry shear configuration for your heavy-duty cutting requirements and facility layout.
          </p>
          <QuoteDialog source="gantry_shear_bottom">
            <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
              Get Heavy-Duty Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </QuoteDialog>
        </div>
      </Section>
    </>
  );
}