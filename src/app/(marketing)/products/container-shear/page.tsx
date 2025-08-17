import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, CheckCircle, Truck, Wrench } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Container Shear | Mobile Scrap Processing | ARZIR",
  description: "Mobile container shears for on-site scrap processing with excellent mobility and efficient cutting performance.",
};

const specifications = [
  {
    parameter: "Cutting Force",
    value: "400-800T",
    description: "Hydraulic cutting force range"
  },
  {
    parameter: "Blade Length",
    value: "1.2-2.0m",
    description: "Shear blade cutting width"
  },
  {
    parameter: "Cut Thickness",
    value: "50-150mm",
    description: "Maximum material thickness"
  },
  {
    parameter: "Cycle Time",
    value: "30-60 seconds",
    description: "Complete cutting cycle"
  },
  {
    parameter: "Transport Size",
    value: "12m container",
    description: "Standard shipping container"
  },
  {
    parameter: "Power Supply",
    value: "Diesel/Electric",
    description: "Flexible power options"
  }
];

const features = [
  {
    title: "Complete Mobility",
    description: "Self-contained unit fits in standard shipping container for easy transport between sites",
    icon: "🚚"
  },
  {
    title: "Quick Setup",
    description: "Hydraulic outriggers and setup systems enable operation within 30 minutes of arrival",
    icon: "⚡"
  },
  {
    title: "Flexible Power",
    description: "Diesel engine or electric motor options adapt to any site power availability",
    icon: "🔌"
  },
  {
    title: "Remote Operation",
    description: "Safe remote control operation keeps operators away from cutting zone",
    icon: "📱"
  }
];

const advantages = [
  {
    title: "Site Flexibility",
    description: "Process materials on-site eliminating transport costs for oversized items",
    metric: "60% cost reduction"
  },
  {
    title: "Quick Deployment",
    description: "Rapid setup and teardown for temporary or emergency processing needs",
    metric: "30-min setup"
  },
  {
    title: "Lower Investment",
    description: "Significantly lower cost compared to permanent installations",
    metric: "40% less CAPEX"
  },
  {
    title: "Multi-Site Use",
    description: "Single unit serves multiple locations maximizing equipment utilization",
    metric: "3x utilization"
  }
];

const applications = [
  {
    title: "Demolition Sites",
    description: "On-site processing of structural steel beams and building components",
    capacity: "20-50 t/day"
  },
  {
    title: "Remote Scrap Yards",
    description: "Mobile processing for sites without permanent shear equipment",
    capacity: "15-40 t/day"
  },
  {
    title: "Emergency Response",
    description: "Rapid deployment for disaster cleanup and infrastructure removal",
    capacity: "10-30 t/day"
  },
  {
    title: "Project-Based Work",
    description: "Temporary installations for large construction or demolition projects",
    capacity: "25-60 t/day"
  }
];

const faqs = [
  {
    question: "How long does it take to set up the container shear?",
    answer: "Setup typically takes 20-30 minutes including positioning, outrigger deployment, and hydraulic connections. Experienced operators can complete setup in 15 minutes."
  },
  {
    question: "What power supply is required for operation?",
    answer: "Container shears offer flexible power options including onboard diesel engine, 3-phase electric motor (400V), or hydraulic power pack connection depending on site requirements."
  },
  {
    question: "Can it handle contaminated scrap materials?",
    answer: "Yes, container shears handle lightly contaminated materials effectively. However, excessive concrete, dirt, or non-metallic attachments should be removed to prevent blade damage."
  },
  {
    question: "What are the transport requirements?",
    answer: "The unit fits in a standard 40-foot container and requires standard heavy equipment transport. Total weight is typically 25-35 tons requiring appropriate truck capacity."
  },
  {
    question: "How does cutting performance compare to stationary shears?",
    answer: "Container shears provide 70-80% of stationary shear cutting force while offering complete mobility. Ideal for materials up to 150mm thickness with excellent cycle times."
  }
];

export default function ContainerShearPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Container Shear
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Mobile scrap processing solution with complete portability and efficient cutting performance for on-site operations.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                400-800T force
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                30-min setup
              </div>
            </div>
            <QuoteDialog source="container_shear_hero">
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
                  <p className="text-lg font-medium">Container Shear</p>
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

      {/* Advantages */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Mobile Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={advantage.title} className="bg-arzir-gray-50 p-6 rounded-xl text-center space-y-4">
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
      <Section background="gray" size="lg">
        <div className="bg-white rounded-3xl p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black">
            Need mobile scrap processing?
          </h2>
          <p className="text-arzir-gray-600 max-w-2xl mx-auto">
            Our engineers can help you evaluate the benefits of mobile container shears for your specific applications and site requirements.
          </p>
          <QuoteDialog source="container_shear_bottom">
            <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
              Get Mobile Solution Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </QuoteDialog>
        </div>
      </Section>
    </>
  );
}