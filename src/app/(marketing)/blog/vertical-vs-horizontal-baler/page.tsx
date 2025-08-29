import { Section } from "@/components/common/Section";
import { Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, TrendingUp, Package, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertical vs Horizontal Baler: Which One to Choose? | ARZIR Blog",
  description: "Complete comparison of vertical vs horizontal balers. Space requirements, costs, throughput, and application scenarios to help you choose the right baler type.",
  keywords: [
    "vertical vs horizontal baler",
    "baler comparison guide",
    "which baler to choose",
    "vertical baler advantages",
    "horizontal baler benefits",
    "baler selection guide"
  ],
  openGraph: {
    title: "Vertical vs Horizontal Baler: Which One to Choose?",
    description: "Complete comparison guide to help you choose between vertical and horizontal balers for your operation.",
    images: [
      {
        url: "/images/blog/Vertical vs Horizontal Baler Which One to Choose.webp",
        width: 1200,
        height: 630,
        alt: "Vertical vs Horizontal Baler Comparison - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "Understanding the Technologies", anchor: "understanding-technologies" },
  { title: "Detailed Comparison Matrix", anchor: "comparison-matrix" },
  { title: "Application Scenarios", anchor: "application-scenarios" },
  { title: "Cost Analysis", anchor: "cost-analysis" },
  { title: "Decision Framework", anchor: "decision-framework" },
  { title: "Expert Recommendations", anchor: "expert-recommendations" }
];

const keyTakeaways = [
  "Vertical balers require 70% less floor space than horizontal balers",
  "Horizontal balers offer 3-5x higher throughput for large operations",
  "Initial investment for vertical balers is 40-60% lower",
  "Space constraints are the primary factor in baler selection",
  "Material type significantly impacts optimal baler choice"
];

const comparisonData = [
  {
    aspect: "Floor Space Required",
    vertical: "6-15 m²",
    horizontal: "40-100 m²",
    advantage: "vertical"
  },
  {
    aspect: "Initial Investment",
    vertical: "$15,000-$45,000",
    horizontal: "$35,000-$150,000",
    advantage: "vertical"
  },
  {
    aspect: "Daily Throughput",
    vertical: "1-10 tons/day",
    horizontal: "10-100 tons/day",
    advantage: "horizontal"
  },
  {
    aspect: "Automation Level",
    vertical: "Basic to Semi-Auto",
    horizontal: "Semi to Fully Auto",
    advantage: "horizontal"
  },
  {
    aspect: "Operating Complexity",
    vertical: "Simple",
    horizontal: "Moderate to Complex",
    advantage: "vertical"
  },
  {
    aspect: "Maintenance Requirements",
    vertical: "Low",
    horizontal: "Moderate to High",
    advantage: "vertical"
  },
  {
    aspect: "Bale Density",
    vertical: "300-600 kg/m³",
    horizontal: "400-800 kg/m³",
    advantage: "horizontal"
  },
  {
    aspect: "Power Consumption",
    vertical: "5.5-15 kW",
    horizontal: "15-75 kW",
    advantage: "vertical"
  }
];

const applicationScenarios = [
  {
    scenario: "Small Retail Stores",
    recommended: "Vertical Baler",
    reasons: [
      "Limited back-of-house space",
      "Moderate cardboard volume (50-200 boxes/day)",
      "Single-person operation preferred",
      "Budget constraints typical"
    ],
    icon: TrendingUp
  },
  {
    scenario: "Large Distribution Centers",
    recommended: "Horizontal Baler", 
    reasons: [
      "High-volume operations (1000+ packages/day)",
      "Available floor space for equipment",
      "Continuous operation requirements",
      "ROI justifies higher investment"
    ],
    icon: Package
  },
  {
    scenario: "Manufacturing Facilities",
    recommended: "Depends on Volume",
    reasons: [
      "Vertical for <5 tons/day production waste",
      "Horizontal for >10 tons/day industrial waste",
      "Consider integration with production flow",
      "Evaluate space availability"
    ],
    icon: Zap
  },
  {
    scenario: "Recycling Centers",
    recommended: "Horizontal Baler",
    reasons: [
      "High throughput processing needs",
      "Mixed material handling capability",
      "Integration with sorting systems",
      "Commercial operation efficiency"
    ],
    icon: Package
  }
];

const costAnalysis = [
  {
    factor: "Equipment Purchase",
    vertical: "$15K-$45K",
    horizontal: "$35K-$150K",
    notes: "Vertical balers have significantly lower upfront costs"
  },
  {
    factor: "Installation Costs",
    vertical: "$2K-$8K",
    horizontal: "$8K-$25K",
    notes: "Horizontal balers require more complex installation"
  },
  {
    factor: "Annual Energy Costs",
    vertical: "$1.5K-$4K",
    horizontal: "$4K-$20K",
    notes: "Based on 2000 operating hours annually"
  },
  {
    factor: "Maintenance Costs/Year",
    vertical: "$800-$2.5K",
    horizontal: "$2K-$8K",
    notes: "Vertical balers have simpler mechanical systems"
  },
  {
    factor: "Labor Requirements",
    vertical: "0.5-1 FTE",
    horizontal: "1-3 FTE",
    notes: "Horizontal systems often require dedicated operators"
  }
];

const decisionCriteria = [
  {
    criteria: "Available Floor Space",
    verticalChoice: "Less than 20 m² available",
    horizontalChoice: "More than 50 m² available"
  },
  {
    criteria: "Daily Material Volume",
    verticalChoice: "1-10 tons per day",
    horizontalChoice: "10+ tons per day"
  },
  {
    criteria: "Budget Constraints",
    verticalChoice: "Under $50,000 total investment",
    horizontalChoice: "Over $50,000 budget available"
  },
  {
    criteria: "Staffing Level",
    verticalChoice: "Single operator preferred",
    horizontalChoice: "Dedicated staff available"
  },
  {
    criteria: "Operation Type",
    verticalChoice: "Batch processing acceptable",
    horizontalChoice: "Continuous operation required"
  }
];

const materialSuitability = [
  {
    material: "Cardboard & Paper",
    vertical: "Excellent - Easy handling, good compression",
    horizontal: "Good - Higher density achievable",
    recommendation: "Vertical for <5 tons/day, Horizontal for >10 tons/day"
  },
  {
    material: "Plastic Films",
    vertical: "Good - Requires careful loading",
    horizontal: "Excellent - Automated feeding possible",
    recommendation: "Horizontal preferred for high volumes"
  },
  {
    material: "Mixed Recyclables",
    vertical: "Limited - Manual sorting needed",
    horizontal: "Excellent - Can handle mixed streams",
    recommendation: "Horizontal strongly preferred"
  },
  {
    material: "Textiles",
    vertical: "Excellent - Ideal for fabric waste",
    horizontal: "Good - Better for heavy textiles",
    recommendation: "Vertical for light fabrics, Horizontal for heavy materials"
  }
];

const faqs = [
  {
    question: "Can I upgrade from a vertical to horizontal baler later?",
    answer: "While balers themselves aren't upgradeable, you can replace a vertical baler with a horizontal one if your volume increases. However, this requires significant additional floor space and infrastructure changes."
  },
  {
    question: "Which baler type has better resale value?",
    answer: "Horizontal balers typically have better resale value due to their higher initial cost and broader commercial applications. However, well-maintained vertical balers also retain good value in the small-to-medium volume market."
  },
  {
    question: "How do I calculate the ROI for each baler type?",
    answer: "Calculate total ownership costs (purchase, installation, energy, maintenance, labor) versus waste savings (disposal cost reduction, material sales revenue). Vertical balers often have faster payback for smaller operations, while horizontal balers provide better long-term ROI for high-volume facilities."
  },
  {
    question: "What about safety differences between vertical and horizontal balers?",
    answer: "Both baler types are safe when properly operated. Vertical balers have simpler operation with top-loading design, while horizontal balers have more safety systems but also more complexity. Training requirements are generally lower for vertical balers."
  }
];

export default function VerticalVsHorizontalBalerPage() {
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
            <li className="text-arzir-gray-900">Vertical vs Horizontal Baler: Which One to Choose?</li>
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
                <span>10 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Vertical vs Horizontal Baler: Which One to Choose?
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Equipment Specialists</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/blog/Vertical vs Horizontal Baler Which One to Choose.webp" 
              alt="Vertical vs Horizontal Baler Comparison"
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
              Choosing between a vertical and horizontal baler is one of the most important decisions for any 
              waste management operation. Each technology offers distinct advantages, and the right choice depends on 
              your specific space constraints, volume requirements, and operational goals.
            </p>
          </div>

          {/* Understanding the Technologies */}
          <section id="understanding-technologies" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Understanding the Technologies
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-heading font-semibold text-black mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Vertical Balers
                </h3>
                <p className="mb-4">
                  Vertical balers feature an upright design with top-loading operation. Materials are loaded 
                  from above and compressed downward using hydraulic force. This space-efficient design is 
                  perfect for facilities with limited floor space.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Compact footprint (6-15 m²)</li>
                  <li>• Top-loading operation</li>
                  <li>• Single-person operation</li>
                  <li>• Lower initial investment</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-heading font-semibold text-black mb-4 flex items-center gap-2">
                  <Package className="h-6 w-6 text-orange-600" />
                  Horizontal Balers
                </h3>
                <p className="mb-4">
                  Horizontal balers process materials through a horizontal chamber using powerful hydraulic 
                  rams. They offer higher throughput and can handle continuous feeding systems, making them 
                  ideal for high-volume operations.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• High throughput capacity (10-100 tons/day)</li>
                  <li>• Continuous operation capability</li>
                  <li>• Higher bale density achievable</li>
                  <li>• Advanced automation options</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Detailed Comparison Matrix */}
          <section id="comparison-matrix" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Detailed Comparison Matrix
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Aspect</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-blue-700">Vertical Baler</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-orange-700">Horizontal Baler</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.aspect}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-blue-700">{item.vertical}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-orange-700">{item.horizontal}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">
                        {item.advantage === 'vertical' ? (
                          <span className="text-blue-700 font-bold">Vertical</span>
                        ) : (
                          <span className="text-orange-700 font-bold">Horizontal</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Application Scenarios */}
          <section id="application-scenarios" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Application Scenarios
            </h2>
            <p>
              Different operational scenarios strongly favor different baler technologies:
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
              Understanding the total cost of ownership is crucial for making an informed decision:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Cost Factor</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Vertical Baler</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Horizontal Baler</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costAnalysis.map((cost, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{cost.factor}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.vertical}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.horizontal}</td>
                      <td className="border border-arzir-gray-200 p-4 text-sm text-arzir-gray-600">{cost.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Material Suitability */}
          <section className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-black">
              Material Suitability Analysis
            </h3>
            
            <div className="space-y-4">
              {materialSuitability.map((material, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-black mb-3">{material.material}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-blue-700 mb-1">Vertical Baler:</p>
                      <p className="text-sm text-arzir-gray-600">{material.vertical}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700 mb-1">Horizontal Baler:</p>
                      <p className="text-sm text-arzir-gray-600">{material.horizontal}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-700 mb-1">Recommendation:</p>
                      <p className="text-sm text-arzir-gray-600">{material.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Decision Framework */}
          <section id="decision-framework" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Decision Framework
            </h2>
            <p>
              Use this framework to determine which baler technology best fits your specific requirements:
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 via-white to-orange-50 p-6 rounded-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-bold text-black">Decision Criteria</th>
                      <th className="p-4 text-center font-bold text-blue-700">Choose Vertical If...</th>
                      <th className="p-4 text-center font-bold text-orange-700">Choose Horizontal If...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionCriteria.map((criteria, index) => (
                      <tr key={index}>
                        <td className="p-4 font-semibold text-black">{criteria.criteria}</td>
                        <td className="p-4 text-center text-blue-700">{criteria.verticalChoice}</td>
                        <td className="p-4 text-center text-orange-700">{criteria.horizontalChoice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Expert Recommendations */}
          <section id="expert-recommendations" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Expert Recommendations
            </h2>
            
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3">ARZIR Expert Guidelines:</h4>
              <ul className="space-y-2 text-green-700">
                <li><strong>Start with space assessment:</strong> Measure available floor space before considering other factors</li>
                <li><strong>Project future growth:</strong> Consider volume increases over the next 3-5 years</li>
                <li><strong>Evaluate total cost:</strong> Include installation, energy, maintenance, and labor costs</li>
                <li><strong>Consider material types:</strong> Some materials work better with specific baler designs</li>
                <li><strong>Visit operating installations:</strong> See both baler types in action before deciding</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-3">Quick Decision Guide:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-700 mb-2">Choose Vertical Baler When:</h5>
                  <ul className="space-y-1 text-sm text-blue-600">
                    <li>• Floor space is limited (&lt;20 m²)</li>
                    <li>• Processing &lt;10 tons/day</li>
                    <li>• Budget is under $50,000</li>
                    <li>• Single-person operation preferred</li>
                    <li>• Batch processing is acceptable</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-orange-700 mb-2">Choose Horizontal Baler When:</h5>
                  <ul className="space-y-1 text-sm text-orange-600">
                    <li>• Ample floor space available (&gt;50 m²)</li>
                    <li>• Processing &gt;10 tons/day</li>
                    <li>• Higher budget available (&gt;$50,000)</li>
                    <li>• Dedicated operators available</li>
                    <li>• Continuous operation required</li>
                  </ul>
                </div>
              </div>
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
              href="/blog/small-business-vertical-balers"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Small Business Benefits</div>
              </div>
            </Link>
            <Link 
              href="/blog/baler-maintenance-best-practices"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Maintenance Best Practices</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}