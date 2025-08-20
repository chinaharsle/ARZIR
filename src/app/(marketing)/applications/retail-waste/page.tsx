import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Store, TrendingUp, Package, Recycle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Waste Management Solutions | Cardboard & Plastic Baler | ARZIR",
  description: "Efficient waste management solutions for retail stores and supermarkets. Vertical balers for cardboard, plastic packaging. Reduce waste volume by 80%.",
};

const challenges = [
  {
    pain: "Large cardboard boxes taking up valuable storage space",
    outcome: "80% volume reduction through vertical baling"
  },
  {
    pain: "High waste disposal costs affecting profit margins", 
    outcome: "50% reduction in waste management expenses"
  },
  {
    pain: "Staff time wasted on manual waste handling",
    outcome: "Single-person operation saves labor costs"
  },
  {
    pain: "Inconsistent recycling pickup schedules",
    outcome: "Standardized bales enable better logistics"
  }
];

const processSteps = [
  {
    step: "Waste Collection & Sorting",
    description: "Collect cardboard boxes, plastic packaging, and other recyclable materials from sales floor and storage areas"
  },
  {
    step: "Material Preparation", 
    description: "Remove tape, labels, and contaminants to ensure clean material feed into the vertical baler"
  },
  {
    step: "Vertical Baling Process",
    description: "Load materials into top-loading baler chamber and activate automated compression cycle"
  },
  {
    step: "Bale Storage & Collection",
    description: "Store compact bales in minimal space until recycling pickup or direct sale to recyclers"
  }
];

const equipment = [
  {
    title: "Vertical Baler VB-20",
    description: "Perfect for small retail stores processing 50-100 cardboard boxes daily",
    href: "/products/vertical-baler",
    image: "📦"
  },
  {
    title: "Vertical Baler VB-30",
    description: "Ideal for medium supermarkets handling mixed cardboard and plastic packaging",
    href: "/products/vertical-baler", 
    image: "🏪"
  },
  {
    title: "Vertical Baler VB-50",
    description: "Suitable for large retail chains with high-volume waste generation",
    href: "/products/vertical-baler",
    image: "🏬"
  }
];

const caseStudies = [
  {
    title: "UK Supermarket Chain",
    equipment: "ARZIR VB-30 Vertical Baler",
    results: "80% space reduction, £2,000/month savings",
    metrics: "200 cardboard boxes/day processing",
    country: "United Kingdom"
  },
  {
    title: "US Retail Store",
    equipment: "ARZIR VB-20 Vertical Baler",
    results: "Single operator handles all waste, ROI in 6 months", 
    metrics: "50-80 boxes/day capacity",
    country: "United States"
  }
];

const kpis = [
  "Volume Reduction: 80-90%",
  "Labor Savings: 50%+ reduction",
  "Waste Costs: 40-60% lower",
  "Processing Speed: 3-8 bales/hour"
];

const benefits = [
  {
    icon: Store,
    title: "Optimized Back-of-House Space",
    description: "Compact vertical design fits perfectly in retail storage areas without disrupting operations"
  },
  {
    icon: TrendingUp,
    title: "Improved Profit Margins", 
    description: "Reduced waste disposal costs and potential revenue from selling high-quality recycled bales"
  },
  {
    icon: Package,
    title: "Streamlined Operations",
    description: "Single-person operation with automated cycles reduces staff workload and training requirements"
  },
  {
    icon: Recycle,
    title: "Enhanced Sustainability",
    description: "Better recycling rates and cleaner bales improve environmental compliance and brand image"
  }
];

const retailTypes = [
  {
    type: "Grocery Stores",
    wasteTypes: ["Cardboard boxes", "Plastic produce bags", "Shrink wrap"],
    volume: "100-300 boxes/day",
    model: "VB-30 recommended"
  },
  {
    type: "Department Stores",
    wasteTypes: ["Shipping boxes", "Garment bags", "Display materials"],
    volume: "50-150 boxes/day", 
    model: "VB-20 recommended"
  },
  {
    type: "Electronics Retailers",
    wasteTypes: ["Product packaging", "Protective foam", "Plastic wrapping"],
    volume: "80-200 boxes/day",
    model: "VB-30 recommended"
  },
  {
    type: "Clothing Stores",
    wasteTypes: ["Garment boxes", "Poly mailers", "Shopping bags"],
    volume: "30-100 boxes/day",
    model: "VB-20 recommended"
  }
];

export default function RetailWastePage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Retail Waste Management Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Efficient vertical baling for cardboard and plastic packaging waste in retail operations.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                80% volume reduction
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Single operator
              </div>
            </div>
            <QuoteDialog source="retail_waste_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/retail-waste.png"
                alt="Retail Waste Management - Vertical Baler for Cardboard and Packaging"
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
              Retail Waste Challenges & Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Transform retail waste management with efficient vertical baling solutions
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
              Retail Waste Management Benefits
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive advantages for retail operations
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
              Retail Waste Processing Workflow
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Streamlined process from collection to baling
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

      {/* Retail Types & Requirements */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Retail Type Requirements
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different retail formats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {retailTypes.map((retail, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-bold text-black">
                      {retail.type}
                    </h3>
                    <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
                      {retail.model}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Typical Waste:</p>
                      <ul className="text-sm text-arzir-gray-600">
                        {retail.wasteTypes.map((waste, i) => (
                          <li key={i}>• {waste}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Daily Volume:</p>
                      <p className="text-arzir-gray-600">{retail.volume}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Equipment Solutions */}
      <Section id="equipment" background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Recommended Equipment
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Vertical balers designed specifically for retail waste management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div key={index} className="group">
                <Link href={item.href}>
                  <div className="bg-arzir-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center space-y-4 h-full">
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
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Retail Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real results from retail waste management implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
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
      <Section background="white" size="lg">
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
        title="Transform Your Retail Waste Management"
        description="Reduce waste volume by 80% with ARZIR vertical balers designed for retail operations. Optimize back-of-house space while reducing disposal costs and improving sustainability."
        formSource="retail_waste_application"
      />
    </>
  );
}