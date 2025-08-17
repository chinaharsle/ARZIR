import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hammer Shredder | High-Impact Processing | ARZIR",
  description: "High-impact hammer shredders for brittle materials and rapid processing with powerful crushing action.",
};

const specifications = [
  {
    parameter: "Power Range",
    value: "150-600 kW",
    description: "High-speed motor options"
  },
  {
    parameter: "Throughput",
    value: "2-20 t/h",
    description: "Rapid processing capacity"
  },
  {
    parameter: "Output Size",
    value: "20-150mm",
    description: "Impact-controlled sizing"
  },
  {
    parameter: "Rotor Speed",
    value: "600-1200 rpm",
    description: "High-speed impact action"
  },
  {
    parameter: "Hammer Configuration",
    value: "Multiple rows",
    description: "Reversible hammer design"
  },
  {
    parameter: "Impact Chamber",
    value: "Reinforced",
    description: "Wear-resistant lining"
  }
];

const features = [
  {
    title: "High-Impact Crushing",
    description: "Powerful hammer action delivers rapid size reduction through impact and crushing forces",
    icon: "💥"
  },
  {
    title: "Rapid Processing",
    description: "High rotor speeds enable fast throughput ideal for brittle and friable materials",
    icon: "⚡"
  },
  {
    title: "Reversible Hammers",
    description: "Hammer tools can be reversed and repositioned extending service life and reducing costs",
    icon: "🔄"
  },
  {
    title: "Adjustable Output",
    description: "Variable screen sizes and impact settings control final particle size distribution",
    icon: "⚙️"
  }
];

const materialSuitability = [
  {
    material: "Cast Iron Scrap",
    suitability: "Excellent",
    throughput: "5-15 t/h",
    characteristics: "Brittle, impact-sensitive"
  },
  {
    material: "Aluminum Castings",
    suitability: "Very Good",
    throughput: "3-12 t/h",
    characteristics: "Brittle alloys, clean breaking"
  },
  {
    material: "Electronic Housings",
    suitability: "Good",
    throughput: "2-8 t/h",
    characteristics: "Plastic-metal composites"
  },
  {
    material: "Appliance Components",
    suitability: "Very Good",
    throughput: "4-16 t/h",
    characteristics: "Mixed brittle materials"
  },
  {
    material: "Heat Sinks",
    suitability: "Excellent",
    throughput: "3-10 t/h",
    characteristics: "Finned aluminum, complex geometry"
  }
];

const hammerConfiguration = [
  {
    configuration: "Standard Duty",
    hammerType: "Fixed hammers",
    applications: "Light materials, moderate throughput",
    maintenance: "Medium"
  },
  {
    configuration: "Heavy Duty",
    hammerType: "Reversible hammers",
    applications: "Dense materials, high throughput",
    maintenance: "Low"
  },
  {
    configuration: "Specialized",
    hammerType: "Carbide-tipped",
    applications: "Abrasive materials, long life",
    maintenance: "Very Low"
  }
];

const advantages = [
  {
    title: "Rapid Processing",
    description: "High-speed impact action processes materials 2-3x faster than cutting shredders",
    metric: "600-1200 rpm"
  },
  {
    title: "Brittle Material Expert",
    description: "Optimized for cast iron, aluminum castings, and friable materials",
    metric: "95% efficiency"
  },
  {
    title: "Lower Power per Ton",
    description: "Impact action requires less energy than cutting for suitable materials",
    metric: "10-25 kWh/t"
  },
  {
    title: "Simple Design",
    description: "Fewer complex components reduce maintenance complexity and costs",
    metric: "30% less maintenance"
  }
];

const applications = [
  {
    title: "Foundry Scrap",
    description: "Processing cast iron and aluminum foundry returns and defective castings",
    capacity: "5-20 t/h"
  },
  {
    title: "Electronics Processing",
    description: "Breaking down electronic housings and heat sinks for material recovery",
    capacity: "2-8 t/h"
  },
  {
    title: "Appliance Recycling",
    description: "Processing brittle components from white goods and appliances",
    capacity: "4-16 t/h"
  },
  {
    title: "Non-Ferrous Processing",
    description: "Size reduction of aluminum profiles and non-ferrous scrap",
    capacity: "3-12 t/h"
  }
];

const maintenanceFeatures = [
  {
    feature: "Hammer Reversibility",
    description: "Hammers can be flipped to use both edges, doubling service life"
  },
  {
    feature: "Quick Access",
    description: "Hinged housing provides rapid access to internal components"
  },
  {
    feature: "Wear Monitoring",
    description: "Visual indicators show hammer and liner wear status"
  },
  {
    feature: "Modular Design",
    description: "Individual components can be replaced without major disassembly"
  },
  {
    feature: "Spare Parts",
    description: "Comprehensive spare parts program ensures minimal downtime"
  }
];

const faqs = [
  {
    question: "What materials are best suited for hammer shredders?",
    answer: "Hammer shredders excel at processing brittle materials like cast iron, aluminum castings, electronic housings, and friable components. They're less suitable for ductile materials that bend rather than break."
  },
  {
    question: "How long do hammer tools typically last?",
    answer: "Hammer life depends on material hardness and abrasiveness. Typical life ranges from 500-3000 tons processed. Reversible hammers effectively double this lifespan."
  },
  {
    question: "How does maintenance compare to other shredder types?",
    answer: "Hammer shredders generally require more frequent maintenance due to impact wear, but the simple design makes maintenance tasks quicker and less complex than multi-shaft systems."
  },
  {
    question: "Can output size be controlled precisely?",
    answer: "Output size is controlled through screen selection and impact force. While not as precise as cutting shredders, good size control is achievable for most applications."
  },
  {
    question: "What safety considerations are important?",
    answer: "High-speed operation requires robust safety systems including emergency stops, access interlocks, and protective guarding. Proper PPE and training are essential."
  }
];

export default function HammerShredderPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Hammer Shredder
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              High-impact hammer shredder for brittle materials and rapid processing with powerful crushing action.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                2-20 t/h capacity
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                600-1200 rpm
              </div>
            </div>
            <QuoteDialog source="hammer_shredder_hero">
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
                  <p className="text-lg font-medium">Hammer Shredder</p>
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

      {/* Material Suitability */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Material Suitability
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg bg-white">
              <caption className="sr-only">Material suitability and processing characteristics</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Material Type</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Suitability</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Throughput</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Characteristics</th>
                </tr>
              </thead>
              <tbody>
                {materialSuitability.map((material, index) => (
                  <tr key={material.material} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{material.material}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.suitability}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.throughput}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{material.characteristics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Hammer Configuration */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Hammer Configurations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {hammerConfiguration.map((config) => (
              <div key={config.configuration} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <h3 className="text-lg font-heading font-semibold text-black">
                    {config.configuration}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-arzir-gray-600">Hammer Type:</span>
                      <span className="text-sm text-arzir-gray-900">{config.hammerType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-arzir-gray-600">Maintenance:</span>
                      <span className="text-sm text-arzir-gray-900">{config.maintenance}</span>
                    </div>
                  </div>
                  <p className="text-sm text-arzir-gray-600">
                    {config.applications}
                  </p>
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
            Key Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
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

      {/* Maintenance Features */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Maintenance Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceFeatures.map((feature) => (
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
      <ProductCTA 
        
        formSource="hammer-shredder_bottom" 
      />
    </>
  );
}