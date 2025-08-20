import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Scissors, TrendingUp, Package, Recycle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Textile Recycling & Fabric Waste Management Solutions | ARZIR",
  description: "Efficient textile waste management solutions for fabric manufacturers and textile recycling facilities. Vertical balers for fabric scraps, textile waste compaction.",
};

const challenges = [
  {
    pain: "Bulk fabric scraps and textile waste taking up production space",
    outcome: "Compact baling reduces textile waste volume by 85%"
  },
  {
    pain: "Mixed textile materials difficult to handle efficiently", 
    outcome: "Versatile baling handles various textile types and densities"
  },
  {
    pain: "High disposal costs for textile manufacturing waste",
    outcome: "Dense bales enable better recycling rates and cost recovery"
  },
  {
    pain: "Safety hazards from loose textile materials in workspace",
    outcome: "Organized baling improves workplace safety and cleanliness"
  }
];

const processSteps = [
  {
    step: "Textile Waste Collection & Sorting",
    description: "Collect and sort fabric scraps, textile off-cuts, and production waste by material type and quality"
  },
  {
    step: "Material Preparation & Cleaning", 
    description: "Remove contaminants, buttons, zippers, and other non-textile elements for clean material processing"
  },
  {
    step: "High-Density Textile Baling",
    description: "Compress sorted textiles using specialized vertical baler designed for fabric compression"
  },
  {
    step: "Bale Storage & Recycling Coordination",
    description: "Store compact textile bales and coordinate with recycling facilities or textile reprocessors"
  }
];

const equipment = [
  {
    title: "Textile Vertical Baler VB-30",
    description: "Specialized for fabric scraps and light textile waste with fabric-friendly compression",
    href: "/products/vertical-baler",
    image: "🧵"
  },
  {
    title: "Heavy-Duty Textile Baler VB-50",
    description: "Designed for denim, canvas, and heavy textile materials requiring higher compression force",
    href: "/products/vertical-baler", 
    image: "👖"
  },
  {
    title: "Multi-Material Textile Unit",
    description: "Versatile solution for mixed textile operations processing various fabric types",
    href: "/products/vertical-baler",
    image: "🧶"
  }
];

const caseStudies = [
  {
    title: "Garment Manufacturing - Bangladesh",
    equipment: "ARZIR VB-50 Textile Baler",
    results: "85% space reduction, $4,200/month savings",
    metrics: "2 tons fabric waste/day processing",
    country: "Bangladesh"
  },
  {
    title: "Textile Recycling Facility - Italy",
    equipment: "Dual VB-30 Textile Balers",
    results: "Improved workplace safety, 70% cost reduction", 
    metrics: "500kg mixed textiles/hour capacity",
    country: "Italy"
  }
];

const kpis = [
  "Volume Reduction: 80-85%",
  "Material Recovery: 90%+ rate", 
  "Processing Speed: 2-5 tons/day",
  "Workplace Safety: 60% improvement"
];

const benefits = [
  {
    icon: Scissors,
    title: "Production Floor Optimization",
    description: "Remove textile waste quickly from production areas to maintain efficient manufacturing workflow"
  },
  {
    icon: TrendingUp,
    title: "Value Recovery from Waste", 
    description: "Transform textile waste into revenue through improved recycling rates and material sales"
  },
  {
    icon: Package,
    title: "Organized Waste Management",
    description: "Systematic approach to textile waste creates cleaner, safer, and more organized facilities"
  },
  {
    icon: Recycle,
    title: "Sustainable Textile Processing",
    description: "Support circular economy initiatives through efficient textile waste processing and recycling"
  }
];

const textileTypes = [
  {
    type: "Clothing Manufacturing",
    wasteTypes: ["Cotton fabric scraps", "Synthetic off-cuts", "Thread waste", "Pattern remnants"],
    volume: "1-5 tons/day",
    model: "VB-30 or VB-50"
  },
  {
    type: "Textile Recycling Facilities",
    wasteTypes: ["Post-consumer textiles", "Mixed fabric waste", "Damaged clothing", "Fabric samples"],
    volume: "2-10 tons/day", 
    model: "Multiple VB-50 units"
  },
  {
    type: "Upholstery Manufacturers",
    wasteTypes: ["Furniture fabric scraps", "Foam backing", "Leather off-cuts", "Vinyl materials"],
    volume: "0.5-3 tons/day",
    model: "VB-30 recommended"
  },
  {
    type: "Carpet & Rug Production",
    wasteTypes: ["Carpet backing", "Yarn waste", "Tufted materials", "Binding strips"],
    volume: "1-4 tons/day",
    model: "VB-50 heavy-duty"
  }
];

const materialHandling = [
  {
    material: "Natural Fibers",
    characteristics: "Cotton, wool, linen - good compression, biodegradable",
    handling: "Standard compression settings, moisture content monitoring",
    benefits: ["High recycling value", "Biodegradable options", "Good bale density"]
  },
  {
    material: "Synthetic Fabrics", 
    characteristics: "Polyester, nylon, acrylic - resilient, consistent compression",
    handling: "Higher compression force, temperature considerations",
    benefits: ["Consistent bale quality", "Chemical recycling potential", "Durability"]
  },
  {
    material: "Mixed Textiles",
    characteristics: "Blended fabrics, various compositions and densities",
    handling: "Adaptive compression, sorting recommendations",
    benefits: ["Flexible processing", "Volume efficiency", "Broad applicability"]
  }
];

const sustainabilityImpact = [
  {
    metric: "Landfill Diversion",
    impact: "85% of textile waste diverted from landfills",
    description: "Significant reduction in textile waste going to landfills"
  },
  {
    metric: "Carbon Footprint", 
    impact: "60% reduction in transportation emissions",
    description: "Dense bales reduce transportation frequency and fuel consumption"
  },
  {
    metric: "Circular Economy",
    impact: "90% material recovery rate achieved",
    description: "Higher recycling rates support circular textile economy"
  }
];

export default function TextileRecyclingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Textile Recycling Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Specialized vertical baling solutions for fabric manufacturers and textile recycling facilities.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                85% volume reduction
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                90% material recovery
              </div>
            </div>
            <QuoteDialog source="textile_recycling_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/textile-recycling.png"
                alt="Textile Recycling & Fabric Waste Management Solutions"
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
              Textile Waste Challenges & Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Transform textile waste management with specialized fabric processing solutions
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
              Textile Waste Management Benefits
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive advantages for textile manufacturing and recycling operations
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
              Textile Waste Processing Workflow
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Systematic process for efficient textile waste handling and recycling
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

      {/* Textile Types & Requirements */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Textile Operation Requirements
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different textile manufacturing and processing operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {textileTypes.map((textile, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-bold text-black">
                      {textile.type}
                    </h3>
                    <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
                      {textile.model}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Typical Materials:</p>
                      <ul className="text-sm text-arzir-gray-600">
                        {textile.wasteTypes.map((waste, i) => (
                          <li key={i}>• {waste}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Daily Volume:</p>
                      <p className="text-arzir-gray-600">{textile.volume}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Material Handling Specifications */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Material Handling Specifications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Specialized handling requirements for different textile material types
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {materialHandling.map((material, index) => (
              <div key={index} className="bg-arzir-gray-50 p-8 rounded-2xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-black">
                    {material.material}
                  </h3>
                  <p className="text-sm text-arzir-gray-600 leading-relaxed">
                    {material.characteristics}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Handling Requirements:</p>
                      <p className="text-sm text-arzir-gray-600">{material.handling}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Key Benefits:</p>
                      <ul className="space-y-1">
                        {material.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                            <span className="text-sm text-arzir-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sustainability Impact */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Sustainability Impact
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Environmental benefits of efficient textile waste management
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sustainabilityImpact.map((impact, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-black">
                    {impact.metric}
                  </h3>
                  <div className="text-3xl font-bold text-arzir-primary">
                    {impact.impact}
                  </div>
                  <p className="text-sm text-arzir-gray-600 leading-relaxed">
                    {impact.description}
                  </p>
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
              Specialized vertical balers designed for textile processing operations
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
              Textile Processing Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real results from textile manufacturing and recycling implementations
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
        formSource="textile_recycling_application"
      />
    </>
  );
}