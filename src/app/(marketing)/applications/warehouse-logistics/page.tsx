import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Warehouse, TrendingUp, Package, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warehouse & Logistics Waste Management Solutions | ARZIR",
  description: "Efficient waste management solutions for warehouses and distribution centers. Vertical balers for packaging materials, plastic films, shipping waste.",
};

const challenges = [
  {
    pain: "Overwhelming packaging waste from shipping operations",
    outcome: "Systematic waste compaction and volume reduction"
  },
  {
    pain: "Limited space for waste storage in busy facilities", 
    outcome: "Compact vertical balers fit in tight warehouse spaces"
  },
  {
    pain: "High labor costs for manual waste handling",
    outcome: "Automated baling reduces handling requirements"
  },
  {
    pain: "Irregular waste pickup affecting operations",
    outcome: "Dense bales enable flexible pickup schedules"
  }
];

const processSteps = [
  {
    step: "Receiving Area Waste Collection",
    description: "Collect packaging materials, stretch wrap, and cardboard from incoming shipment processing areas"
  },
  {
    step: "Shipping Waste Consolidation", 
    description: "Gather plastic films, bubble wrap, and protective packaging from outbound shipping operations"
  },
  {
    step: "High-Density Compression",
    description: "Process mixed packaging materials through vertical baler for optimal density and standardization"
  },
  {
    step: "Logistics Optimization",
    description: "Store compact bales efficiently and coordinate pickup with recycling partners or waste management"
  }
];

const equipment = [
  {
    title: "Vertical Baler VB-30",
    description: "Ideal for medium warehouses processing mixed packaging materials daily",
    href: "/products/vertical-baler",
    image: "📦"
  },
  {
    title: "Vertical Baler VB-50",
    description: "Heavy-duty solution for large distribution centers with high waste volumes",
    href: "/products/vertical-baler", 
    image: "🏭"
  },
  {
    title: "Mobile Compaction Unit",
    description: "Flexible solution for multi-location operations with varying waste volumes",
    href: "/products/vertical-baler",
    image: "🚛"
  }
];

const caseStudies = [
  {
    title: "E-commerce Distribution Center - Germany",
    equipment: "ARZIR VB-50 Vertical Baler",
    results: "75% space reduction, €3,500/month savings",
    metrics: "500+ packages/day processing",
    country: "Germany"
  },
  {
    title: "3PL Logistics Hub - USA",
    equipment: "Dual VB-30 Vertical Balers",
    results: "Single shift operation, 60% cost reduction", 
    metrics: "1,200 packages/day capacity",
    country: "United States"
  }
];

const kpis = [
  "Volume Reduction: 75-85%",
  "Labor Efficiency: 60%+ improvement", 
  "Operating Costs: 40-50% lower",
  "Processing Speed: 5-8 bales/hour"
];

const benefits = [
  {
    icon: Warehouse,
    title: "Optimized Floor Space",
    description: "Vertical design maximizes warehouse efficiency without disrupting material flow operations"
  },
  {
    icon: TrendingUp,
    title: "Operational Cost Savings", 
    description: "Reduced waste disposal frequency and lower transportation costs improve bottom line"
  },
  {
    icon: Package,
    title: "Streamlined Waste Handling",
    description: "Automated baling process integrates seamlessly with existing warehouse workflows"
  },
  {
    icon: Truck,
    title: "Logistics Efficiency",
    description: "Standardized bales enable predictable pickup schedules and better vendor negotiations"
  }
];

const warehouseTypes = [
  {
    type: "E-commerce Fulfillment",
    wasteTypes: ["Cardboard boxes", "Plastic mailers", "Bubble wrap", "Packing paper"],
    volume: "200-800 packages/day",
    model: "VB-30 or VB-50"
  },
  {
    type: "3PL Distribution Centers",
    wasteTypes: ["Stretch wrap", "Pallets", "Shipping boxes", "Protective packaging"],
    volume: "500-1500 packages/day", 
    model: "VB-50 + additional units"
  },
  {
    type: "Cold Storage Facilities",
    wasteTypes: ["Insulated packaging", "Frozen food boxes", "Plastic films", "Temperature packs"],
    volume: "100-400 packages/day",
    model: "VB-30 recommended"
  },
  {
    type: "Automotive Parts Warehouses",
    wasteTypes: ["Parts packaging", "Protective foam", "Metal containers", "Plastic wrapping"],
    volume: "150-600 parts/day",
    model: "VB-30 or VB-50"
  }
];

const workflowIntegration = [
  {
    area: "Receiving Dock",
    integration: "Install near unloading areas for immediate packaging waste processing",
    benefits: ["Immediate waste processing", "Reduced clutter", "Improved safety"]
  },
  {
    area: "Shipping Department", 
    integration: "Position close to packing stations for continuous plastic film and void fill disposal",
    benefits: ["Continuous workflow", "Space efficiency", "Reduced handling"]
  },
  {
    area: "Returns Processing",
    integration: "Handle damaged packaging and returned item containers efficiently",
    benefits: ["Quick turnaround", "Quality control", "Cost recovery"]
  }
];

export default function WarehouseLogisticsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Warehouse & Logistics Waste Management
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Efficient vertical baling solutions for packaging materials and shipping waste in logistics operations.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                75% space reduction
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                24/7 operation ready
              </div>
            </div>
            <QuoteDialog source="warehouse_logistics_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/Warehouse & Logistics Waste Management.png"
                alt="Warehouse & Logistics Waste Management - Vertical Baler Solutions"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Challenges & Outcomes */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Warehouse Waste Challenges & Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Transform warehouse waste management with efficient vertical baling solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 via-white to-green-50 p-8 rounded-2xl border border-arzir-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-red-600 mb-2">Challenge</h3>
                    <p className="text-arzir-gray-700">{challenge.pain}</p>
                  </div>
                  <div className="text-center">
                    <ArrowRight className="h-8 w-8 text-arzir-primary mx-auto" />
                  </div>
                  <div className="text-center md:text-right">
                    <h3 className="text-lg font-bold text-green-600 mb-2">Solution</h3>
                    <p className="text-arzir-gray-700">{challenge.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Warehouse Waste Management Benefits
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive advantages for logistics operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100 text-center space-y-4">
                <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <benefit.icon className="h-6 w-6 text-arzir-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-black">
                  {benefit.title}
                </h3>
                <p className="text-sm text-arzir-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Workflow */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Warehouse Waste Processing Workflow
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Integrated process for efficient waste handling in logistics operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-black">
                    {step.step}
                  </h3>
                  <p className="text-sm text-arzir-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-arzir-primary -ml-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Warehouse Types & Requirements */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Warehouse Type Requirements
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different warehouse and logistics operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warehouseTypes.map((warehouse, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-bold text-black">
                      {warehouse.type}
                    </h3>
                    <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
                      {warehouse.model}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Typical Waste:</p>
                      <ul className="text-sm text-arzir-gray-600">
                        {warehouse.wasteTypes.map((waste, i) => (
                          <li key={i}>• {waste}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Daily Volume:</p>
                      <p className="text-arzir-gray-600">{warehouse.volume}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Workflow Integration */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Warehouse Workflow Integration
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Strategic placement for seamless operational integration
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workflowIntegration.map((workflow, index) => (
              <div key={index} className="bg-arzir-gray-50 p-8 rounded-2xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-black">
                    {workflow.area}
                  </h3>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {workflow.integration}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-arzir-gray-700">Key Benefits:</p>
                    <ul className="space-y-1">
                      {workflow.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm text-arzir-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Equipment Solutions */}
      <Section id="equipment" background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Recommended Equipment
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Vertical balers designed for warehouse and logistics operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="group">
                <Link href={item.href}>
                  <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center space-y-4 h-full">
                    <div className="text-4xl">{item.image}</div>
                    <h3 className="text-lg font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-arzir-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center text-arzir-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Warehouse Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real results from warehouse and logistics implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-arzir-gray-50 p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-black">
                      {study.title}
                    </h3>
                    <div className="text-sm text-arzir-gray-600">
                      📍 {study.country}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
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

      {/* KPIs */}
      <Section background="gray" size="lg">
        <div className="bg-gradient-to-r from-arzir-primary to-primary-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold">
              Key Performance Indicators
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {kpis.map((kpi, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold mb-2">
                    {kpi}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ApplicationCTA 
        formSource="warehouse_logistics_application"
      />
    </>
  );
}