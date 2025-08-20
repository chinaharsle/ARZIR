import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Hotel, TrendingUp, Package, Utensils } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Waste Management Solutions | Hotel & Restaurant Baler | ARZIR",
  description: "Efficient waste management solutions for hotels and restaurants. Vertical balers for cardboard boxes, food packaging, dining waste compaction.",
};

const challenges = [
  {
    pain: "Daily accumulation of food service packaging waste",
    outcome: "Systematic compaction of cardboard and plastic waste"
  },
  {
    pain: "Limited back-of-house space for waste storage", 
    outcome: "Compact vertical design fits in tight service areas"
  },
  {
    pain: "Frequent waste pickup disrupting guest experience",
    outcome: "Dense bales reduce pickup frequency by 60%"
  },
  {
    pain: "High waste disposal costs impacting profitability",
    outcome: "50% reduction in waste management expenses"
  }
];

const processSteps = [
  {
    step: "Kitchen & Dining Waste Collection",
    description: "Collect cardboard boxes, food containers, and packaging from kitchen operations and dining areas"
  },
  {
    step: "Housekeeping Waste Consolidation", 
    description: "Gather packaging materials from guest room supplies, linens, and amenity deliveries"
  },
  {
    step: "Service Area Compaction",
    description: "Process collected materials through strategically placed vertical baler systems"
  },
  {
    step: "Discrete Waste Management",
    description: "Store compact bales in service areas without impacting guest areas or experience"
  }
];

const equipment = [
  {
    title: "Vertical Baler VB-20",
    description: "Perfect for boutique hotels and small restaurants with moderate waste volumes",
    href: "/products/vertical-baler",
    image: "🏨"
  },
  {
    title: "Vertical Baler VB-30",
    description: "Ideal for full-service hotels and restaurant chains with regular packaging waste",
    href: "/products/vertical-baler", 
    image: "🍽️"
  },
  {
    title: "Compact Service Unit",
    description: "Space-optimized solution for hotels with extremely limited service area space",
    href: "/products/vertical-baler",
    image: "📦"
  }
];

const caseStudies = [
  {
    title: "Luxury Hotel Chain - France",
    equipment: "ARZIR VB-30 Vertical Baler",
    results: "70% space reduction, €2,800/month savings",
    metrics: "150+ deliveries/day processing",
    country: "France"
  },
  {
    title: "Restaurant Group - Singapore",
    equipment: "Multiple VB-20 Vertical Balers",
    results: "Single staff handles waste, 55% cost reduction", 
    metrics: "300+ food containers/day",
    country: "Singapore"
  }
];

const kpis = [
  "Volume Reduction: 70-85%",
  "Pickup Frequency: 60% less", 
  "Operating Costs: 40-55% lower",
  "Staff Efficiency: 3x improvement"
];

const benefits = [
  {
    icon: Hotel,
    title: "Guest Experience Protection",
    description: "Discrete waste management maintains clean, professional appearance without impacting guest areas"
  },
  {
    icon: TrendingUp,
    title: "Operational Cost Control", 
    description: "Reduced waste disposal frequency and lower transportation costs improve profit margins"
  },
  {
    icon: Package,
    title: "Service Area Optimization",
    description: "Compact design maximizes limited back-of-house space for core hospitality operations"
  },
  {
    icon: Utensils,
    title: "Food Service Integration",
    description: "Seamless integration with kitchen and dining operations without workflow disruption"
  }
];

const hospitalityTypes = [
  {
    type: "Luxury Hotels",
    wasteTypes: ["Room service packaging", "Amenity boxes", "Linen packaging", "Guest supplies"],
    volume: "50-200 deliveries/day",
    model: "VB-20 or VB-30"
  },
  {
    type: "Restaurant Chains",
    wasteTypes: ["Food packaging", "Delivery boxes", "Ingredient containers", "Disposable items"],
    volume: "100-500 orders/day", 
    model: "VB-30 recommended"
  },
  {
    type: "Conference Hotels",
    wasteTypes: ["Event packaging", "Catering boxes", "Setup materials", "AV equipment boxes"],
    volume: "80-300 events/month",
    model: "VB-30 or VB-50"
  },
  {
    type: "Quick Service Restaurants",
    wasteTypes: ["Take-out containers", "Delivery packaging", "Supply boxes", "Paper products"],
    volume: "200-800 orders/day",
    model: "VB-20 or VB-30"
  }
];

const operationalIntegration = [
  {
    area: "Kitchen Operations",
    integration: "Install near prep areas for immediate packaging waste processing from food deliveries",
    benefits: ["Maintain kitchen efficiency", "Reduce contamination", "Improve safety"]
  },
  {
    area: "Housekeeping Services", 
    integration: "Position in service corridors for guest room supply packaging and amenity waste",
    benefits: ["Discrete operation", "Staff efficiency", "Guest privacy"]
  },
  {
    area: "Receiving Areas",
    integration: "Handle delivery packaging immediately upon goods receipt to prevent accumulation",
    benefits: ["Immediate processing", "Space management", "Workflow optimization"]
  }
];

export default function HospitalityWastePage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Hospitality Waste Management Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Discrete vertical baling solutions for hotels and restaurants to maintain guest experience while reducing waste costs.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                70% volume reduction
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Quiet operation
              </div>
            </div>
            <QuoteDialog source="hospitality_waste_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/hospitality-waste.png"
                alt="Hospitality Waste Management - Hotel & Restaurant Baler Solutions"
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
              Hospitality Waste Challenges & Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Transform hospitality waste management without compromising guest experience
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
              Hospitality Waste Management Benefits
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive advantages for hotel and restaurant operations
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
              Hospitality Waste Processing Workflow
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Integrated process for discrete waste handling in hospitality operations
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

      {/* Hospitality Types & Requirements */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Hospitality Operation Requirements
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Tailored solutions for different hospitality business types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hospitalityTypes.map((hospitality, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-heading font-bold text-black">
                      {hospitality.type}
                    </h3>
                    <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
                      {hospitality.model}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Typical Waste:</p>
                      <ul className="text-sm text-arzir-gray-600">
                        {hospitality.wasteTypes.map((waste, i) => (
                          <li key={i}>• {waste}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Daily Volume:</p>
                      <p className="text-arzir-gray-600">{hospitality.volume}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Operational Integration */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Hospitality Workflow Integration
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Strategic placement for seamless hospitality operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {operationalIntegration.map((workflow, index) => (
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
              Vertical balers designed for hospitality operations
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
              Hospitality Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real results from hotel and restaurant implementations
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
        formSource="hospitality_waste_application"
      />
    </>
  );
}