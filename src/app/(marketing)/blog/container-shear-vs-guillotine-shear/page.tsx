import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, Container, Scissors, TrendingUp, Truck, Zap, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Container Shear vs Guillotine Shear: Which is Better for Scrap Processing? | ARZIR Blog",
  description: "Complete comparison of container shears vs guillotine shears for scrap metal processing. Mobility, capacity, costs, and application scenarios to help you choose the right shear type.",
  keywords: [
    "container shear vs guillotine shear",
    "scrap shear comparison",
    "mobile vs stationary shear",
    "container shear advantages",
    "guillotine shear benefits",
    "scrap metal cutting equipment"
  ],
  openGraph: {
    title: "Container Shear vs Guillotine Shear: Which is Better for Scrap Processing?",
    description: "Comprehensive comparison guide to help you choose between container and guillotine shears for your scrap processing operation.",
    images: [
      {
        url: "/images/blog/container-shear-vs-guillotine-shear.jpg",
        width: 1200,
        height: 630,
        alt: "Container Shear vs Guillotine Shear Comparison - ARZIR Blog"
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
  "Container shears offer complete mobility while guillotine shears provide higher cutting capacity",
  "Setup time: 30 minutes for container vs several days for guillotine installation",
  "Container shears cost 20-40% less than equivalent guillotine installations",
  "Guillotine shears offer 20-50% higher cutting force for heavy materials",
  "Mobility requirements are the primary factor in shear selection"
];

const comparisonData = [
  {
    aspect: "Mobility",
    container: "Full containerized transport",
    guillotine: "Fixed installation",
    advantage: "container"
  },
  {
    aspect: "Setup Time",
    container: "30 minutes",
    guillotine: "3-7 days installation",
    advantage: "container"
  },
  {
    aspect: "Cutting Force",
    container: "400-800 tons",
    guillotine: "600-1200 tons",
    advantage: "guillotine"
  },
  {
    aspect: "Processing Capacity",
    container: "15-45 tons/hour",
    guillotine: "25-80 tons/hour",
    advantage: "guillotine"
  },
  {
    aspect: "Initial Investment",
    container: "$280,000-$650,000",
    guillotine: "$350,000-$900,000",
    advantage: "container"
  },
  {
    aspect: "Operating Flexibility",
    container: "Multi-site operation",
    guillotine: "Single location",
    advantage: "container"
  },
  {
    aspect: "Foundation Requirements",
    container: "Minimal/temporary",
    guillotine: "Permanent concrete foundation",
    advantage: "container"
  },
  {
    aspect: "Maintenance Access",
    container: "Good accessibility",
    guillotine: "Excellent accessibility",
    advantage: "guillotine"
  }
];

const applicationScenarios = [
  {
    scenario: "Multi-Site Operations",
    recommended: "Container Shear",
    reasons: [
      "Process materials at multiple locations",
      "Reduce transport costs for oversized scrap",
      "Flexible deployment for temporary projects",
      "Lower total investment for multiple sites"
    ],
    icon: Truck
  },
  {
    scenario: "High-Volume Fixed Facilities",
    recommended: "Guillotine Shear",
    reasons: [
      "Maximum cutting force for heavy materials",
      "Highest throughput capacity available",
      "Dedicated processing line integration",
      "Long-term operational efficiency"
    ],
    icon: TrendingUp
  },
  {
    scenario: "Emergency/Project Work",
    recommended: "Container Shear",
    reasons: [
      "Rapid deployment for disaster cleanup",
      "Temporary processing for construction projects",
      "Quick setup for emergency operations",
      "No permanent infrastructure required"
    ],
    icon: Zap
  },
  {
    scenario: "Large Recycling Centers",
    recommended: "Depends on Requirements",
    reasons: [
      "Container for flexibility and multi-site use",
      "Guillotine for maximum throughput and capacity",
      "Consider hybrid approach with both types",
      "Evaluate space availability and workflow"
    ],
    icon: Settings
  }
];

const costAnalysis = [
  {
    factor: "Equipment Purchase",
    container: "$280K-$650K",
    guillotine: "$350K-$900K",
    notes: "Container shears have lower upfront equipment costs"
  },
  {
    factor: "Foundation/Installation",
    container: "$5K-$15K",
    guillotine: "$25K-$75K",
    notes: "Guillotine shears require substantial concrete foundations"
  },
  {
    factor: "Setup/Commissioning",
    container: "$3K-$8K",
    guillotine: "$15K-$40K",
    notes: "Container shears have minimal commissioning requirements"
  },
  {
    factor: "Annual Operating Costs",
    container: "$25K-$45K",
    guillotine: "$35K-$65K",
    notes: "Based on maintenance, energy, and labor costs"
  },
  {
    factor: "Relocation Costs",
    container: "$8K-$15K",
    guillotine: "$150K-$300K",
    notes: "Container shears can be easily relocated vs guillotine reinstallation"
  }
];

const decisionCriteria = [
  {
    criteria: "Site Requirements",
    containerChoice: "Multiple sites or temporary operations",
    guillotineChoice: "Single permanent facility"
  },
  {
    criteria: "Material Volume",
    containerChoice: "15-45 tons/hour processing",
    guillotineChoice: "45+ tons/hour processing"
  },
  {
    criteria: "Cutting Requirements",
    containerChoice: "Materials up to 150mm thickness",
    guillotineChoice: "Heavy materials over 150mm thickness"
  },
  {
    criteria: "Setup Timeline",
    containerChoice: "Immediate operation required",
    guillotineChoice: "Long-term planning available"
  },
  {
    criteria: "Budget Constraints",
    containerChoice: "Lower total investment preferred",
    guillotineChoice: "Maximum performance prioritized"
  }
];

const materialSuitability = [
  {
    material: "Steel Beams & Structural Steel",
    container: "Good - handles most structural materials effectively",
    guillotine: "Excellent - maximum cutting force for heavy beams",
    recommendation: "Container for lighter structures, Guillotine for heavy industrial beams"
  },
  {
    material: "Car Bodies & Automotive Scrap",
    container: "Excellent - ideal mobility for auto dismantling sites",
    guillotine: "Good - high capacity for large operations",
    recommendation: "Container preferred for automotive dismantling flexibility"
  },
  {
    material: "Mixed Ferrous Scrap",
    container: "Good - versatile cutting capability",
    guillotine: "Excellent - handles varied material sizes efficiently",
    recommendation: "Guillotine for high-volume mixed scrap processing"
  },
  {
    material: "Non-Ferrous Metals",
    container: "Good - adequate force for aluminum and copper",
    guillotine: "Excellent - precise cutting for valuable materials",
    recommendation: "Both suitable - choose based on volume and mobility needs"
  }
];

const faqs = [
  {
    question: "Can container shears match the cutting force of guillotine shears?",
    answer: "Container shears typically provide 400-800 tons of cutting force, while guillotine shears can reach 600-1200 tons. For most scrap processing applications, container shears provide sufficient force, but guillotine shears offer superior performance for extremely heavy materials."
  },
  {
    question: "Which type has better long-term reliability?",
    answer: "Both types offer excellent reliability when properly maintained. Guillotine shears may have slight advantages due to permanent installation and better maintenance access, while container shears excel in operational flexibility and reduced downtime from transportation."
  },
  {
    question: "How do operating costs compare between the two systems?",
    answer: "Container shears typically have 20-30% lower operating costs due to reduced infrastructure requirements and maintenance simplicity. However, guillotine shears may achieve better cost per ton processed in high-volume operations due to higher throughput capacity."
  },
  {
    question: "Can I upgrade from container to guillotine shear later?",
    answer: "Yes, you can upgrade to a guillotine shear as your operation grows. The container shear can be relocated to another site or kept as backup equipment. Many operations use both types strategically - guillotine for main processing and container for flexibility."
  }
];

export default function ContainerShearVsGuillotineShearPage() {
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
            <li className="text-arzir-gray-900">Container Shear vs Guillotine Shear: Which is Better for Scrap Processing?</li>
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
                <span>14 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Container Shear vs Guillotine Shear: Which is Better for Scrap Processing?
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Equipment Specialists</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/products/container-shear.png" 
              alt="Container Shear vs Guillotine Shear Comparison"
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
              Choosing between a container shear and guillotine shear is a critical decision for any scrap 
              processing operation. Each technology offers distinct advantages, and the right choice depends on 
              your specific mobility requirements, processing volume, and operational goals.
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
                  <Container className="h-6 w-6 text-blue-600" />
                  Container Shears
                </h3>
                <p className="mb-4">
                  Container shears feature a self-contained hydraulic cutting system designed to fit within 
                  standard shipping containers. This mobility-focused design enables rapid deployment and 
                  multi-site operations with minimal setup requirements.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Complete containerized mobility</li>
                  <li>• 30-minute setup capability</li>
                  <li>• 400-800T cutting force</li>
                  <li>• Minimal foundation requirements</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-heading font-semibold text-black mb-4 flex items-center gap-2">
                  <Scissors className="h-6 w-6 text-orange-600" />
                  Guillotine Shears
                </h3>
                <p className="mb-4">
                  Guillotine shears are stationary hydraulic cutting machines designed for maximum cutting 
                  force and throughput. They feature permanent installation with substantial foundations 
                  for processing the heaviest scrap materials efficiently.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Maximum cutting force (600-1200T)</li>
                  <li>• Highest throughput capacity</li>
                  <li>• Permanent installation required</li>
                  <li>• Superior heavy material handling</li>
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
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-blue-700">Container Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-orange-700">Guillotine Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.aspect}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-blue-700">{item.container}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-orange-700">{item.guillotine}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">
                        {item.advantage === 'container' ? (
                          <span className="text-blue-700 font-bold">Container</span>
                        ) : (
                          <span className="text-orange-700 font-bold">Guillotine</span>
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
              Different operational scenarios strongly favor different shear technologies:
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
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Container Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Guillotine Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costAnalysis.map((cost, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{cost.factor}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.container}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.guillotine}</td>
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
                      <p className="text-sm font-medium text-blue-700 mb-1">Container Shear:</p>
                      <p className="text-sm text-arzir-gray-600">{material.container}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700 mb-1">Guillotine Shear:</p>
                      <p className="text-sm text-arzir-gray-600">{material.guillotine}</p>
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
              Use this framework to determine which shear technology best fits your specific requirements:
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 via-white to-orange-50 p-6 rounded-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-bold text-black">Decision Criteria</th>
                      <th className="p-4 text-center font-bold text-blue-700">Choose Container If...</th>
                      <th className="p-4 text-center font-bold text-orange-700">Choose Guillotine If...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionCriteria.map((criteria, index) => (
                      <tr key={index}>
                        <td className="p-4 font-semibold text-black">{criteria.criteria}</td>
                        <td className="p-4 text-center text-blue-700">{criteria.containerChoice}</td>
                        <td className="p-4 text-center text-orange-700">{criteria.guillotineChoice}</td>
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
                <li><strong>Assess mobility needs first:</strong> Multi-site operations strongly favor container shears</li>
                <li><strong>Consider material types:</strong> Heavy structural steel may require guillotine cutting force</li>
                <li><strong>Evaluate total costs:</strong> Include foundation, installation, and operational expenses</li>
                <li><strong>Plan for growth:</strong> Consider future volume increases and site expansions</li>
                <li><strong>Visit operating installations:</strong> See both shear types in action before deciding</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-3">Quick Decision Guide:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-700 mb-2">Choose Container Shear When:</h5>
                  <ul className="space-y-1 text-sm text-blue-600">
                    <li>• Multiple processing sites required</li>
                    <li>• Rapid deployment needed (&lt;1 day)</li>
                    <li>• Lower total investment preferred</li>
                    <li>• Temporary or project-based operations</li>
                    <li>• Minimal infrastructure available</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-orange-700 mb-2">Choose Guillotine Shear When:</h5>
                  <ul className="space-y-1 text-sm text-orange-600">
                    <li>• Single permanent facility operation</li>
                    <li>• Maximum cutting force required</li>
                    <li>• Highest throughput capacity needed</li>
                    <li>• Heavy structural materials processed</li>
                    <li>• Long-term installation planned</li>
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

      {/* CTA Section */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-heading font-bold text-black">
            Choose the Right Shear for Your Operation
          </h2>
          <p className="text-xl text-arzir-gray-600">
            Get expert guidance on selecting the optimal cutting solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="container_shear_vs_guillotine_blog">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Equipment Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products/container-shear">
                View Container Shears
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
              href="/blog/automatic-horizontal-balers-reduce-costs"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Automatic Horizontal Balers</div>
              </div>
            </Link>
            <Link 
              href="/blog/preventive-maintenance-guide-recycling-equipment"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Maintenance Guide</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}