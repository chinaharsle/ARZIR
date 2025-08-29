import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, Scissors, Factory } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single-Shaft vs Double-Shaft Shredders: Which One to Choose? | ARZIR Blog",
  description: "Comprehensive comparison of single-shaft and double-shaft shredder technologies for waste processing. Features, applications, and selection guide for recycling operations.",
  keywords: [
    "single shaft vs double shaft shredder",
    "shredder comparison guide",
    "waste processing equipment selection",
    "industrial shredder technology",
    "recycling equipment comparison",
    "single vs double shaft shredders",
    "shredder selection guide",
    "waste shredding machine comparison"
  ],
  openGraph: {
    title: "Single-Shaft vs Double-Shaft Shredders: Which One to Choose?",
    description: "Expert comparison guide to help you choose between single-shaft and double-shaft shredder technologies for your waste processing operation.",
    images: [
      {
        url: "/images/blog/Single-Shaft vs Double-Shaft Shredders Which One to Choose.webp",
        width: 1200,
        height: 630,
        alt: "Single-Shaft vs Double-Shaft Shredders Comparison - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "Understanding Shredder Technologies", anchor: "understanding-technologies" },
  { title: "Detailed Feature Comparison", anchor: "feature-comparison" },
  { title: "Application-Specific Analysis", anchor: "application-analysis" },
  { title: "Cost and Investment Comparison", anchor: "cost-comparison" },
  { title: "Selection Decision Framework", anchor: "selection-framework" },
  { title: "Expert Recommendations", anchor: "expert-recommendations" }
];

const keyTakeaways = [
  "Single-shaft shredders excel at uniform output (95-98%) for downstream processing applications",
  "Double-shaft shredders provide higher throughput (2-5x capacity) for primary size reduction",
  "Single-shaft systems use 30-40% less energy and have simpler maintenance requirements",
  "Double-shaft designs handle larger materials and provide more aggressive initial size reduction",
  "Selection depends on material type, output requirements, throughput needs, and downstream processes"
];

const shredderTypes = [
  {
    type: "Single-Shaft Shredder",
    description: "Precision waste processing machine with single rotating shaft and fixed counter-knives for uniform particle sizes",
    mechanism: "Single rotor + fixed knives + interchangeable screens",
    strengthAreas: ["Uniform output", "Energy efficiency", "Simple maintenance", "Precise sizing"],
    icon: Scissors,
    color: "blue"
  },
  {
    type: "Double-Shaft Shredder", 
    description: "Heavy-duty shredding system with two counter-rotating shafts for aggressive size reduction and high throughput",
    mechanism: "Dual counter-rotating shafts + cutting tools + spacer discs",
    strengthAreas: ["High throughput", "Large materials", "Aggressive cutting", "Primary reduction"],
    icon: Factory,
    color: "orange"
  }
];

const comparisonMatrix = [
  {
    feature: "Output Uniformity",
    singleShaft: "95-98% uniform particle size",
    doubleShaft: "80-90% size consistency",
    winner: "single",
    impact: "Critical for downstream processing quality"
  },
  {
    feature: "Processing Throughput",
    singleShaft: "1-12 tons/hour",
    doubleShaft: "5-50 tons/hour",
    winner: "double",
    impact: "Higher capacity for large-scale operations"
  },
  {
    feature: "Energy Consumption",
    singleShaft: "15-25 kWh/ton",
    doubleShaft: "25-35 kWh/ton",
    winner: "single",
    impact: "30-40% lower operating costs"
  },
  {
    feature: "Material Size Handling",
    singleShaft: "Pre-sized materials up to 500mm",
    doubleShaft: "Large materials up to 2000mm+",
    winner: "double",
    impact: "Handles oversized materials directly"
  },
  {
    feature: "Maintenance Complexity",
    singleShaft: "Simple single-rotor system",
    doubleShaft: "Complex dual-rotor configuration",
    winner: "single",
    impact: "Lower maintenance costs and downtime"
  },
  {
    feature: "Initial Investment",
    singleShaft: "$120K-$450K",
    doubleShaft: "$300K-$1.2M",
    winner: "single",
    impact: "Lower capital expenditure requirements"
  },
  {
    feature: "Floor Space Required",
    singleShaft: "Compact footprint design",
    doubleShaft: "Larger installation space",
    winner: "single",
    impact: "Better for space-constrained facilities"
  },
  {
    feature: "Output Size Control",
    singleShaft: "Precise screen-controlled sizing",
    doubleShaft: "Limited size control options",
    winner: "single",
    impact: "Better control for specific applications"
  }
];

const applicationAnalysis = [
  {
    application: "Plastic Recycling Operations",
    materials: ["PET bottles", "Plastic films", "PP containers", "ABS parts"],
    singleShaftSuitability: "Excellent - uniform output essential for pelletizing",
    doubleShaftSuitability: "Good - for primary size reduction of large bales",
    recommendation: "Single-shaft preferred for final processing; double-shaft for pre-processing",
    reasoning: "Plastic recycling requires uniform particle sizes for effective melting and pelletizing processes"
  },
  {
    application: "Wood Waste Processing",
    materials: ["Wood chips", "Pallets", "Lumber waste", "Biomass"],
    singleShaftSuitability: "Good - consistent sizing for biomass applications",
    doubleShaftSuitability: "Excellent - handles large wood pieces effectively",
    recommendation: "Double-shaft for primary reduction; single-shaft for final sizing",
    reasoning: "Wood waste often comes in large pieces requiring aggressive initial size reduction"
  },
  {
    application: "Municipal Solid Waste (MSW)",
    materials: ["Mixed waste", "Packaging", "Paper", "Light metals"],
    singleShaftSuitability: "Good - uniform output aids downstream sorting",
    doubleShaftSuitability: "Excellent - handles diverse mixed materials",
    recommendation: "Double-shaft typically preferred for mixed waste streams",
    reasoning: "MSW contains diverse materials and sizes requiring aggressive initial processing"
  },
  {
    application: "Electronic Waste (E-Waste)",
    materials: ["Circuit boards", "Cables", "Plastic housings", "Metal components"],
    singleShaftSuitability: "Excellent - precise sizing for material recovery",
    doubleShaftSuitability: "Limited - may damage valuable components",
    recommendation: "Single-shaft strongly preferred for e-waste processing",
    reasoning: "E-waste requires careful processing to preserve material recovery value"
  },
  {
    application: "Textile Waste Processing",
    materials: ["Fabric waste", "Clothing", "Carpets", "Fiber materials"],
    singleShaftSuitability: "Excellent - uniform fiber length for recycling",
    doubleShaftSuitability: "Poor - excessive fiber damage and tangling",
    recommendation: "Single-shaft exclusively recommended",
    reasoning: "Textile materials require gentle, controlled processing to maintain fiber integrity"
  }
];

const costAnalysis = [
  {
    costFactor: "Equipment Purchase",
    singleShaft: "$120K-$450K",
    doubleShaft: "$300K-$1.2M",
    advantage: "Single-shaft 50-70% lower cost",
    notes: "Significant capital savings with single-shaft systems"
  },
  {
    costFactor: "Installation & Setup",
    singleShaft: "$15K-$45K",
    doubleShaft: "$35K-$120K",
    advantage: "Single-shaft lower complexity",
    notes: "Simpler installation requirements reduce setup costs"
  },
  {
    costFactor: "Annual Energy Costs",
    singleShaft: "$25K-$85K",
    doubleShaft: "$45K-$180K",
    advantage: "Single-shaft 30-40% savings",
    notes: "Based on 8000 operating hours at $0.12/kWh"
  },
  {
    costFactor: "Maintenance & Parts",
    singleShaft: "$18K-$65K",
    doubleShaft: "$35K-$140K",
    advantage: "Single-shaft simpler maintenance",
    notes: "Fewer wear parts and simpler servicing requirements"
  },
  {
    costFactor: "Total 5-Year TCO",
    singleShaft: "$250K-$850K",
    doubleShaft: "$550K-$2.1M",
    advantage: "Single-shaft 40-60% lower TCO",
    notes: "Total cost of ownership including all operational expenses"
  }
];

const selectionFramework = [
  {
    criteria: "Primary Use Case",
    chooseSingle: "Uniform output for downstream processing",
    chooseDouble: "Primary size reduction of large materials",
    considerations: "Consider the main purpose and downstream requirements"
  },
  {
    criteria: "Material Characteristics",
    chooseSingle: "Pre-sized materials, valuable components",
    chooseDouble: "Large, bulky, mixed materials",
    considerations: "Evaluate typical input material sizes and types"
  },
  {
    criteria: "Throughput Requirements",
    chooseSingle: "Low to medium volumes (1-12 t/h)",
    chooseDouble: "High volumes requiring maximum throughput",
    considerations: "Match capacity to current and projected volume needs"
  },
  {
    criteria: "Output Specifications",
    chooseSingle: "Precise particle size requirements",
    chooseDouble: "General size reduction sufficient",
    considerations: "Determine downstream process requirements"
  },
  {
    criteria: "Budget Constraints",
    chooseSingle: "Limited capital budget ($120K-$450K)",
    chooseDouble: "Larger budget available ($300K-$1.2M)",
    considerations: "Include total cost of ownership, not just purchase price"
  },
  {
    criteria: "Operational Complexity",
    chooseSingle: "Simple operation and maintenance preferred",
    chooseDouble: "Can handle complex operational requirements",
    considerations: "Assess available technical expertise and resources"
  }
];

const performanceScenarios = [
  {
    scenario: "Small Recycling Facility Processing Mixed Plastics",
    requirement: "2-5 tons/hour, uniform 20-50mm output for pelletizing",
    singleShaftPerformance: "Excellent - SS-1000 delivers precise sizing",
    doubleShaftPerformance: "Overkill - unnecessary complexity and cost",
    recommendation: "Single-shaft is optimal choice",
    reasoning: "Uniform output critical for pelletizing quality"
  },
  {
    scenario: "Large MSW Processing Plant",
    requirement: "25+ tons/hour mixed waste, general size reduction",
    singleShaftPerformance: "Insufficient - would need multiple units",
    doubleShaftPerformance: "Excellent - DS-2000 handles capacity easily",
    recommendation: "Double-shaft clearly preferred",
    reasoning: "High throughput requirements favor double-shaft design"
  },
  {
    scenario: "Wood Waste Processing for Biomass",
    requirement: "8-15 tons/hour, 25-100mm chips from pallets",
    singleShaftPerformance: "Good - after pre-processing to manageable sizes",
    doubleShaftPerformance: "Excellent - processes whole pallets directly",
    recommendation: "Double-shaft for efficiency",
    reasoning: "Large input materials favor aggressive double-shaft processing"
  },
  {
    scenario: "Electronics Recycling for Material Recovery",
    requirement: "1-3 tons/hour, precise sizing to preserve value",
    singleShaftPerformance: "Excellent - controlled processing preserves materials",
    doubleShaftPerformance: "Poor - aggressive action damages valuable components",
    recommendation: "Single-shaft exclusively",
    reasoning: "Material preservation critical for value recovery"
  }
];

const expertRecommendations = [
  {
    recommendation: "Start with Your Output Requirements",
    explanation: "If downstream processes require uniform particle sizes (pelletizing, fiber recovery, material separation), single-shaft is typically superior. For general volume reduction, double-shaft may suffice.",
    priority: "High"
  },
  {
    recommendation: "Consider Material Preparation Requirements",
    explanation: "Double-shaft shredders can handle larger input materials directly, while single-shaft systems may require pre-processing. Factor in total system costs including material handling.",
    priority: "High" 
  },
  {
    recommendation: "Evaluate Long-term Operating Costs",
    explanation: "Single-shaft systems typically offer 30-50% lower total cost of ownership through reduced energy consumption, simpler maintenance, and longer component life.",
    priority: "Medium"
  },
  {
    recommendation: "Plan for Future Growth and Flexibility",
    explanation: "Consider whether throughput requirements may increase significantly. Double-shaft systems offer more capacity headroom, while single-shaft systems can be expanded modularly.",
    priority: "Medium"
  },
  {
    recommendation: "Don't Overlook Hybrid Approaches",
    explanation: "Some operations benefit from both technologies: double-shaft for primary reduction followed by single-shaft for final sizing. This maximizes both throughput and output quality.",
    priority: "Low"
  }
];

const faqs = [
  {
    question: "Can single-shaft shredders handle the same materials as double-shaft shredders?",
    answer: "Single-shaft shredders can process many of the same materials but typically require pre-sizing for materials larger than 500mm. They excel with pre-processed materials where uniform output is critical, while double-shaft systems handle oversized materials directly."
  },
  {
    question: "Which shredder type offers better return on investment (ROI)?",
    answer: "Single-shaft shredders typically offer better ROI for applications requiring uniform output due to lower capital costs, reduced energy consumption, and simpler maintenance. Double-shaft systems provide better ROI for high-volume primary reduction applications."
  },
  {
    question: "How do maintenance requirements compare between the two types?",
    answer: "Single-shaft shredders have simpler maintenance with fewer wear parts and easier access. Double-shaft systems require more complex maintenance due to dual rotors, multiple cutting tools, and more sophisticated drive systems. Single-shaft maintenance costs are typically 40-60% lower."
  },
  {
    question: "Can I upgrade from single-shaft to double-shaft later?",
    answer: "These are fundamentally different technologies requiring separate installations. However, you can add a double-shaft system for pre-processing while keeping single-shaft for final sizing, creating a complementary two-stage system."
  },
  {
    question: "Which type is better for processing contaminated waste streams?",
    answer: "Double-shaft shredders typically handle contaminated or mixed waste streams better due to their aggressive cutting action and ability to process foreign objects. Single-shaft systems require cleaner input materials to maintain precision and prevent damage."
  }
];

export default function SingleShaftVsDoubleShaftShreddersPage() {
  return (
    <>
      {/* Breadcrumb */}
      <Section size="sm" className="!py-4 border-b border-arzir-gray-200">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-arzir-gray-500 hover:text-arzir-primary">Home</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li><Link href="/blog" className="text-arzir-gray-500 hover:text-arzir-primary">Blog</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li><Link href="/blog?category=Equipment+Comparison" className="text-arzir-gray-500 hover:text-arzir-primary">Equipment Comparison</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li className="text-arzir-gray-900">Single-Shaft vs Double-Shaft Shredders: Which One to Choose?</li>
          </ol>
        </nav>
      </Section>

      {/* Article Header */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-arzir-gray-500">
              <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full font-medium">
                Equipment Comparison
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Published August 20, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Single-Shaft vs Double-Shaft Shredders: Which One to Choose?
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Equipment Specialists</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/blog/Single-Shaft vs Double-Shaft Shredders Which One to Choose.webp" 
              alt="Single-Shaft vs Double-Shaft Shredders Comparison"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Key Takeaways */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <div className="bg-arzir-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-heading font-bold text-black mb-4">Key Takeaways</h2>
            <ul className="space-y-2">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-arzir-gray-700">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Table of Contents */}
      <Section background="gray" size="md">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
            <h2 className="text-xl font-heading font-bold text-black mb-4">Table of Contents</h2>
            <nav>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.anchor}`}
                      className="text-arzir-primary hover:text-primary-600 transition-colors duration-200 text-sm"
                    >
                      {index + 1}. {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section background="white" size="xl">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-black prose-p:text-arzir-gray-700 prose-p:leading-relaxed">
          
          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Selecting between single-shaft and double-shaft shredder technology is one of the most critical 
              decisions in waste processing system design. Each technology offers distinct advantages and 
              serves different applications, making the choice dependent on specific operational requirements, 
              material characteristics, and output specifications.
            </p>
          </div>

          {/* Understanding Shredder Technologies */}
          <section id="understanding-technologies" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Understanding Shredder Technologies
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {shredderTypes.map((shredder, index) => (
                <div key={index} className={`bg-${shredder.color}-50 p-6 rounded-xl border border-${shredder.color}-200`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <shredder.icon className={`h-8 w-8 text-${shredder.color}-600`} />
                      <h3 className="text-xl font-heading font-semibold text-black">{shredder.type}</h3>
                    </div>
                    <p className="text-sm text-arzir-gray-600">{shredder.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-black text-sm">Operating Mechanism:</span>
                        <p className={`text-${shredder.color}-700 text-sm`}>{shredder.mechanism}</p>
                      </div>
                      
                      <div>
                        <span className="font-medium text-black text-sm">Key Strengths:</span>
                        <ul className="mt-1 space-y-1">
                          {shredder.strengthAreas.map((strength, i) => (
                            <li key={i} className="flex items-center gap-1 text-xs">
                              <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                              <span className="text-arzir-gray-600">{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Feature Comparison */}
          <section id="feature-comparison" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Detailed Feature Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-3 text-left font-semibold text-sm">Feature</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold text-blue-700 text-sm">Single-Shaft</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold text-orange-700 text-sm">Double-Shaft</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold text-sm">Winner</th>
                    <th className="border border-arzir-gray-200 p-3 text-left font-semibold text-sm">Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonMatrix.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-3 font-medium text-black text-sm">{item.feature}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-blue-700 text-sm">{item.singleShaft}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-orange-700 text-sm">{item.doubleShaft}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-sm">
                        <span className={`font-bold ${item.winner === 'single' ? 'text-blue-700' : 'text-orange-700'}`}>
                          {item.winner === 'single' ? 'Single-Shaft' : 'Double-Shaft'}
                        </span>
                      </td>
                      <td className="border border-arzir-gray-200 p-3 text-sm text-arzir-gray-600">{item.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Application-Specific Analysis */}
          <section id="application-analysis" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Application-Specific Analysis
            </h2>
            
            <div className="space-y-6">
              {applicationAnalysis.map((app, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-black mb-4">{app.application}</h4>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-blue-700 mb-1">Single-Shaft Suitability:</p>
                      <p className="text-sm text-arzir-gray-600">{app.singleShaftSuitability}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700 mb-1">Double-Shaft Suitability:</p>
                      <p className="text-sm text-arzir-gray-600">{app.doubleShaftSuitability}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm font-medium text-arzir-gray-700 mb-1">Typical Materials:</p>
                    <div className="flex flex-wrap gap-2">
                      {app.materials.map((material, i) => (
                        <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-xs">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-green-100 p-3 rounded border-l-4 border-green-400">
                    <p className="text-sm font-medium text-green-800">Recommendation:</p>
                    <p className="text-sm text-green-700 mb-1">{app.recommendation}</p>
                    <p className="text-xs text-green-600 italic">{app.reasoning}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost and Investment Comparison */}
          <section id="cost-comparison" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Cost and Investment Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Cost Factor</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Single-Shaft</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Double-Shaft</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Advantage</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costAnalysis.map((cost, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{cost.costFactor}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-blue-700">{cost.singleShaft}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-orange-700">{cost.doubleShaft}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center font-medium text-green-600">{cost.advantage}</td>
                      <td className="border border-arzir-gray-200 p-4 text-sm text-arzir-gray-600">{cost.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Selection Decision Framework */}
          <section id="selection-framework" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Selection Decision Framework
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 via-white to-orange-50 p-6 rounded-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-bold text-black">Selection Criteria</th>
                      <th className="p-4 text-center font-bold text-blue-700">Choose Single-Shaft When...</th>
                      <th className="p-4 text-center font-bold text-orange-700">Choose Double-Shaft When...</th>
                      <th className="p-4 text-left font-bold text-arzir-gray-700">Key Considerations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectionFramework.map((criteria, index) => (
                      <tr key={index}>
                        <td className="p-4 font-semibold text-black">{criteria.criteria}</td>
                        <td className="p-4 text-center text-blue-700 text-sm">{criteria.chooseSingle}</td>
                        <td className="p-4 text-center text-orange-700 text-sm">{criteria.chooseDouble}</td>
                        <td className="p-4 text-sm text-arzir-gray-600">{criteria.considerations}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Performance Scenarios */}
          <section className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-black">
              Real-World Performance Scenarios
            </h3>
            
            <div className="space-y-6">
              {performanceScenarios.map((scenario, index) => (
                <div key={index} className="border border-arzir-gray-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-black mb-3">{scenario.scenario}</h4>
                  <p className="text-sm text-arzir-gray-600 mb-4"><strong>Requirement:</strong> {scenario.requirement}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-700 mb-2">Single-Shaft Performance:</h5>
                      <p className="text-sm text-blue-600">{scenario.singleShaftPerformance}</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-medium text-orange-700 mb-2">Double-Shaft Performance:</h5>
                      <p className="text-sm text-orange-600">{scenario.doubleShaftPerformance}</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <h5 className="font-medium text-green-800 mb-1">Recommendation: {scenario.recommendation}</h5>
                    <p className="text-sm text-green-700">{scenario.reasoning}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Expert Recommendations */}
          <section id="expert-recommendations" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Expert Recommendations
            </h2>
            
            <div className="space-y-4">
              {expertRecommendations.map((rec, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  rec.priority === 'High' ? 'bg-red-50 border-red-400' :
                  rec.priority === 'Medium' ? 'bg-yellow-50 border-yellow-400' :
                  'bg-blue-50 border-blue-400'
                }`}>
                  <div className="flex items-start gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      rec.priority === 'High' ? 'bg-red-200 text-red-800' :
                      rec.priority === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-blue-200 text-blue-800'
                    }`}>
                      {rec.priority}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black mb-2">{rec.recommendation}</h4>
                      <p className="text-sm text-arzir-gray-600">{rec.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-heading font-bold text-black text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-arzir-gray-200">
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

      {/* CTA Section */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-heading font-bold text-black">
            Choose the Right Shredder Technology
          </h2>
          <p className="text-xl text-arzir-gray-600">
            Get expert guidance on selecting the optimal shredder technology for your specific waste processing requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="shredder_comparison_blog">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Technology Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products/single-shaft-shredder">
                View Shredder Solutions
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section background="gray" size="md">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between py-6 border-t border-arzir-gray-200">
            <Link 
              href="/blog/waste-processing-equipment-selection"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Equipment Selection Guide</div>
              </div>
            </Link>
            <Link 
              href="/blog/single-shaft-shredders-improve-recycling-efficiency"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Single-Shaft Efficiency Benefits</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}