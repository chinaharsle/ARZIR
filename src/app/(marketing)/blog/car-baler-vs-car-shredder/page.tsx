import { Section } from "@/components/common/Section";
import { Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, Zap, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Baler vs Car Shredder: Which to Choose? | ARZIR Blog",
  description: "Complete comparison of car balers vs car shredders. Material quality, costs, applications, and ROI analysis to help you choose the right equipment for your operation.",
  keywords: [
    "car baler vs car shredder",
    "vehicle recycling equipment comparison",
    "car baler or shredder choice",
    "automotive recycling equipment",
    "ELV processing comparison",
    "recycling equipment selection"
  ],
  openGraph: {
    title: "Car Baler vs Car Shredder: Which to Choose?",
    description: "Complete comparison guide to help you choose between car balers and car shredders for your recycling operation.",
    images: [
      {
        url: "/images/blog/car-baler-vs-car-shredder.jpg",
        width: 1200,
        height: 630,
        alt: "Car Baler vs Car Shredder Comparison - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "Overview of Technologies", anchor: "overview" },
  { title: "Detailed Comparison", anchor: "comparison" },
  { title: "Application Scenarios", anchor: "applications" },
  { title: "Cost Analysis", anchor: "cost-analysis" },
  { title: "Decision Framework", anchor: "decision-framework" },
  { title: "Expert Recommendations", anchor: "recommendations" }
];

const keyTakeaways = [
  "Car balers excel in export trading and high-density applications",
  "Car shredders provide faster processing for mixed material recovery",
  "Material end-use determines optimal equipment choice",
  "Initial investment varies significantly between technologies",
  "Operational costs depend on throughput and material mix"
];

const comparisonData = [
  {
    aspect: "Processing Method",
    carBaler: "High-pressure compression into dense bales",
    carShredder: "Mechanical shredding into smaller fragments",
    advantage: "baler"
  },
  {
    aspect: "Output Density",
    carBaler: "2.0-2.8 t/m³",
    carShredder: "0.8-1.2 t/m³",
    advantage: "baler"
  },
  {
    aspect: "Processing Speed",
    carBaler: "20-40 vehicles/day",
    carShredder: "50-100 vehicles/day",
    advantage: "shredder"
  },
  {
    aspect: "Material Quality",
    carBaler: "Intact structure, clean bales",
    carShredder: "Mixed fragments, requires sorting",
    advantage: "baler"
  },
  {
    aspect: "Energy Consumption",
    carBaler: "90-200 kW",
    carShredder: "200-500 kW",
    advantage: "baler"
  },
  {
    aspect: "Initial Investment",
    carBaler: "$180,000-$450,000",
    carShredder: "$300,000-$800,000",
    advantage: "baler"
  },
  {
    aspect: "Maintenance Costs",
    carBaler: "Low - fewer moving parts",
    carShredder: "High - wear parts replacement",
    advantage: "baler"
  },
  {
    aspect: "Material Recovery",
    carBaler: "80-85%",
    carShredder: "90-95%",
    advantage: "shredder"
  }
];

const applicationScenarios = [
  {
    scenario: "Export Trading Operations",
    recommended: "Car Baler",
    reasons: [
      "Maximum container utilization (95%+)",
      "Standardized bale dimensions",
      "International quality acceptance",
      "80% shipping cost reduction"
    ],
    icon: Package
  },
  {
    scenario: "High-Volume Processing",
    recommended: "Car Shredder", 
    reasons: [
      "Process 50-100 vehicles daily",
      "Multiple material stream recovery",
      "Continuous operation capability",
      "Automated sorting integration"
    ],
    icon: Zap
  },
  {
    scenario: "Premium Market Supply",
    recommended: "Car Baler",
    reasons: [
      "Clean, uncontaminated material",
      "Premium pricing for quality bales",
      "Direct steel mill supply",
      "Consistent specifications"
    ],
    icon: CheckCircle
  },
  {
    scenario: "Mixed Material Recovery",
    recommended: "Car Shredder",
    reasons: [
      "Separate ferrous/non-ferrous metals",
      "Recover plastics and glass",
      "Maximize material value",
      "Complete material utilization"
    ],
    icon: Package
  }
];

const costAnalysis = [
  {
    factor: "Equipment Cost",
    carBaler: "$180K-$450K",
    carShredder: "$300K-$800K",
    notes: "Balers have lower initial investment"
  },
  {
    factor: "Installation",
    carBaler: "$50K-$100K",
    carShredder: "$100K-$200K",
    notes: "Shredders require more complex infrastructure"
  },
  {
    factor: "Annual Maintenance",
    carBaler: "$15K-$35K",
    carShredder: "$40K-$80K",
    notes: "Shredders have higher wear part costs"
  },
  {
    factor: "Energy Costs/Year",
    carBaler: "$25K-$60K",
    carShredder: "$60K-$150K",
    notes: "Based on 2000 operating hours annually"
  },
  {
    factor: "Labor Requirements",
    carBaler: "1-2 operators",
    carShredder: "2-4 operators",
    notes: "Shredders need more operational oversight"
  }
];

const decisionCriteria = [
  {
    criteria: "Primary Goal",
    balerChoice: "Export trading, premium pricing",
    shredderChoice: "Maximum material recovery, high volume"
  },
  {
    criteria: "Daily Volume",
    balerChoice: "10-40 vehicles/day",
    shredderChoice: "40-100+ vehicles/day"
  },
  {
    criteria: "Material Destination",
    balerChoice: "Steel mills, export markets",
    shredderChoice: "Local scrap dealers, multiple buyers"
  },
  {
    criteria: "Space Constraints",
    balerChoice: "Limited space, need density",
    shredderChoice: "Large facility, processing focus"
  },
  {
    criteria: "Investment Budget",
    balerChoice: "Lower initial investment",
    shredderChoice: "Higher investment acceptable"
  }
];

const faqs = [
  {
    question: "Can I use both car balers and shredders in one facility?",
    answer: "Yes, many large facilities use both technologies. Car balers for clean, whole vehicles destined for export, and shredders for damaged vehicles or when maximum material recovery is needed. This hybrid approach maximizes flexibility and revenue."
  },
  {
    question: "Which technology provides better ROI?",
    answer: "ROI depends on your specific operation. Car balers typically show faster ROI (18-36 months) for export-focused operations due to lower operating costs. Shredders may provide better long-term returns for high-volume operations with diverse material streams."
  },
  {
    question: "How do I determine the right capacity for my operation?",
    answer: "Assess your current and projected vehicle volumes, available space, labor capacity, and target markets. Car balers are sized for consistent daily processing, while shredders are designed for peak capacity handling with continuous operation."
  },
  {
    question: "What about environmental considerations?",
    answer: "Car balers are more environmentally friendly due to lower energy consumption and cleaner processing. Shredders generate more dust and noise but enable higher material recovery rates. Both contribute to sustainable recycling when properly operated."
  }
];

export default function CarBalerVsCarShredderPage() {
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
            <li><Link href="/blog?category=Equipment+Guides" className="text-arzir-gray-500 hover:text-arzir-primary">Equipment Guides</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li className="text-arzir-gray-900">Car Baler vs Car Shredder: Which to Choose?</li>
          </ol>
        </nav>
      </Section>

      {/* Article Header */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-arzir-gray-500">
              <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full font-medium">
                Equipment Guides
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Published August 19, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Car Baler vs Car Shredder: Which to Choose?
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Technical Team</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/products/recycling-baler.png" 
              alt="Car Baler vs Car Shredder Comparison"
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
              Choosing between a car baler and car shredder is one of the most critical decisions for vehicle 
              recycling operations. Each technology offers distinct advantages, and the right choice depends on 
              your specific operational goals, market focus, and processing requirements.
            </p>
          </div>

          {/* Overview of Technologies */}
          <section id="overview" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Overview of Technologies
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-heading font-semibold text-black mb-4 flex items-center gap-2">
                  <Package className="h-6 w-6 text-blue-600" />
                  Car Balers
                </h3>
                <p className="mb-4">
                  Car balers use powerful hydraulic systems (600-1500 tons) to compress complete vehicles 
                  into dense, standardized bales. This technology focuses on maximizing material density 
                  for efficient transportation and export.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• High-density compression (2.0-2.8 t/m³)</li>
                  <li>• Standardized bale dimensions</li>
                  <li>• Export-optimized format</li>
                  <li>• Lower energy consumption</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-heading font-semibold text-black mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-orange-600" />
                  Car Shredders
                </h3>
                <p className="mb-4">
                  Car shredders use rotating hammers and shearing forces to break down vehicles into 
                  smaller fragments. This technology maximizes material recovery by separating different 
                  material types for individual processing.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• High processing speed (50-100 vehicles/day)</li>
                  <li>• Material separation capability</li>
                  <li>• Maximum recovery rates (90-95%)</li>
                  <li>• Multiple output streams</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Detailed Comparison */}
          <section id="comparison" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Detailed Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Aspect</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-blue-700">Car Baler</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-orange-700">Car Shredder</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.aspect}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-blue-700">{item.carBaler}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-orange-700">{item.carShredder}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">
                        {item.advantage === 'baler' ? (
                          <span className="text-blue-700 font-bold">Car Baler</span>
                        ) : (
                          <span className="text-orange-700 font-bold">Car Shredder</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Application Scenarios */}
          <section id="applications" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Application Scenarios
            </h2>
            <p>
              Different operational scenarios favor different technologies:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {applicationScenarios.map((scenario, index) => (
                <div key={index} className="border border-arzir-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-arzir-gray-50 p-4">
                    <div className="flex items-center gap-3">
                      <scenario.icon className="h-6 w-6 text-arzir-primary" />
                      <div>
                        <h4 className="font-bold text-black">{scenario.scenario}</h4>
                        <p className="text-sm text-arzir-primary font-medium">
                          Recommended: {scenario.recommended}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {scenario.reasons.map((reason, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Analysis */}
          <section id="cost-analysis" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Cost Analysis
            </h2>
            <p>
              Understanding the total cost of ownership is crucial for making the right decision:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Cost Factor</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Car Baler</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Car Shredder</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costAnalysis.map((cost, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{cost.factor}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.carBaler}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.carShredder}</td>
                      <td className="border border-arzir-gray-200 p-4 text-sm text-arzir-gray-600">{cost.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Decision Framework */}
          <section id="decision-framework" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Decision Framework
            </h2>
            <p>
              Use this framework to determine which technology best fits your operation:
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 via-white to-orange-50 p-6 rounded-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-bold text-black">Decision Criteria</th>
                      <th className="p-4 text-center font-bold text-blue-700">Choose Car Baler If...</th>
                      <th className="p-4 text-center font-bold text-orange-700">Choose Car Shredder If...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionCriteria.map((criteria, index) => (
                      <tr key={index}>
                        <td className="p-4 font-semibold text-black">{criteria.criteria}</td>
                        <td className="p-4 text-center text-blue-700">{criteria.balerChoice}</td>
                        <td className="p-4 text-center text-orange-700">{criteria.shredderChoice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Expert Recommendations */}
          <section id="recommendations" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Expert Recommendations
            </h2>
            
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3">ARZIR Expert Advice:</h4>
              <ul className="space-y-2 text-green-700">
                <li><strong>Start with your end market:</strong> Export-focused operations benefit more from car balers</li>
                <li><strong>Consider hybrid approaches:</strong> Large facilities can benefit from both technologies</li>
                <li><strong>Factor in growth plans:</strong> Choose equipment that scales with your business</li>
                <li><strong>Evaluate local regulations:</strong> Some regions favor specific processing methods</li>
                <li><strong>Plan for operator training:</strong> Both technologies require skilled operators</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl">
              <h4 className="font-semibold text-yellow-800 mb-3">Common Decision Mistakes to Avoid:</h4>
              <ul className="space-y-2 text-yellow-700">
                <li>• Choosing based solely on initial cost without considering operational expenses</li>
                <li>• Underestimating space requirements for ancillary equipment</li>
                <li>• Ignoring local market preferences for material formats</li>
                <li>• Failing to plan for maintenance and spare parts availability</li>
                <li>• Not considering environmental regulations and permitting</li>
              </ul>
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

      {/* Navigation */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between py-6 border-t border-arzir-gray-200">
            <Link 
              href="/blog/car-body-balers-transform-recycling"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Car Balers Transform Recycling</div>
              </div>
            </Link>
            <Link 
              href="/blog/preventive-maintenance-guide-recycling-equipment"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Preventive Maintenance Guide</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}