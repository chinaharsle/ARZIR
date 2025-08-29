import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, Truck, Factory, Zap, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gantry Shear vs Container Shear: Which One to Choose for Heavy Scrap? | ARZIR Blog",
  description: "Comprehensive comparison of gantry shears vs container shears for heavy scrap processing. Cutting force, mobility, costs, and application scenarios to help you choose the right heavy-duty shear.",
  keywords: [
    "gantry shear vs container shear",
    "heavy scrap cutting machine",
    "gantry shear advantages",
    "container shear mobility",
    "heavy-duty scrap shear",
    "scrap metal cutting equipment",
    "hydraulic gantry shear",
    "large scrap processing"
  ],
  openGraph: {
    title: "Gantry Shear vs Container Shear: Which One to Choose for Heavy Scrap?",
    description: "Expert comparison guide to help you choose between gantry and container shears for heavy scrap metal processing operations.",
    images: [
      {
        url: "/images/blog/Gantry Shear vs Container Shear Which One to Choose for Heavy Scrap.webp",
        width: 1200,
        height: 630,
        alt: "Gantry Shear vs Container Shear Comparison - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "Understanding Heavy-Duty Shear Technologies", anchor: "understanding-technologies" },
  { title: "Detailed Comparison Matrix", anchor: "comparison-matrix" },
  { title: "Heavy Scrap Application Analysis", anchor: "application-analysis" },
  { title: "Cost & ROI Analysis", anchor: "cost-analysis" },
  { title: "Decision Framework for Heavy Scrap", anchor: "decision-framework" },
  { title: "Expert Recommendations", anchor: "expert-recommendations" }
];

const keyTakeaways = [
  "Gantry shears provide 800-2000T cutting force vs container shears' 400-800T for heavy materials",
  "Container shears offer complete mobility while gantry shears excel at permanent installations",
  "Gantry shears process 150-220 tons/hour vs container shears' 15-45 tons/hour capacity",
  "Setup time: 30 minutes for container vs 2-4 weeks for gantry shear installation",
  "Material thickness capability: Gantry shears handle up to 300mm vs container shears' 150mm"
];

const comparisonData = [
  {
    aspect: "Cutting Force",
    gantry: "800-2000 tons",
    container: "400-800 tons",
    advantage: "gantry"
  },
  {
    aspect: "Maximum Thickness",
    gantry: "300mm steel plate",
    container: "150mm steel plate",
    advantage: "gantry"
  },
  {
    aspect: "Processing Capacity",
    gantry: "150-220 tons/hour",
    container: "15-45 tons/hour",
    advantage: "gantry"
  },
  {
    aspect: "Mobility",
    gantry: "Fixed installation",
    container: "Full containerized transport",
    advantage: "container"
  },
  {
    aspect: "Setup Time",
    gantry: "2-4 weeks installation",
    container: "30 minutes",
    advantage: "container"
  },
  {
    aspect: "Multi-Site Operation",
    gantry: "Single location only",
    container: "Flexible multi-site use",
    advantage: "container"
  },
  {
    aspect: "Foundation Requirements",
    gantry: "Heavy concrete foundation",
    container: "Minimal/temporary",
    advantage: "container"
  },
  {
    aspect: "Heavy Material Handling",
    gantry: "Excellent for thick steel",
    container: "Good for standard materials",
    advantage: "gantry"
  },
  {
    aspect: "Initial Investment",
    gantry: "$450,000-$1,200,000",
    container: "$280,000-$650,000",
    advantage: "container"
  },
  {
    aspect: "Total Installation Cost",
    gantry: "$500,000-$1,350,000",
    container: "$285,000-$665,000",
    advantage: "container"
  }
];

const applicationScenarios = [
  {
    scenario: "Steel Mills & Smelting Plants",
    recommended: "Gantry Shear",
    reasons: [
      "Process heavy mill scale and thick steel returns efficiently",
      "Handle production waste up to 300mm thickness",
      "Continuous high-volume operation capability",
      "Maximum cutting force for heavy industrial materials"
    ],
    icon: Factory,
    materials: "Mill scale, heavy returns, thick steel sections"
  },
  {
    scenario: "Shipyards & Marine Dismantling",
    recommended: "Gantry Shear",
    reasons: [
      "Cut heavy maritime steel structures and ship hulls",
      "Process large marine components efficiently",
      "Handle thick ship hull sections requiring maximum force",
      "Permanent installation for continuous shipbreaking"
    ],
    icon: Settings,
    materials: "Ship hulls, maritime structures, heavy marine steel"
  },
  {
    scenario: "Mobile Scrap Operations",
    recommended: "Container Shear",
    reasons: [
      "Rapid deployment to different collection sites",
      "Process scrap at source to reduce transport costs",
      "Flexible operations without permanent infrastructure",
      "Quick setup for temporary or emergency projects"
    ],
    icon: Truck,
    materials: "Mixed ferrous scrap, structural steel, auto bodies"
  },
  {
    scenario: "Construction & Demolition Sites",
    recommended: "Depends on Project Scale",
    reasons: [
      "Container shear for temporary/small projects",
      "Gantry shear for major demolition operations",
      "Consider material thickness and volume",
      "Evaluate project duration and infrastructure"
    ],
    icon: Zap,
    materials: "Building steel, demolition debris, structural components"
  }
];

const heavyMaterialAnalysis = [
  {
    material: "Thick Steel Plates (200-300mm)",
    gantry: "Excellent - designed for maximum thickness cutting",
    container: "Limited - typically handles up to 150mm effectively",
    recommendation: "Gantry shear required for materials over 200mm thickness"
  },
  {
    material: "Ship Hull Sections",
    gantry: "Excellent - handles heavy maritime steel structures",
    container: "Good - suitable for lighter vessel components",
    recommendation: "Gantry preferred for major shipbreaking operations"
  },
  {
    material: "Heavy Structural Beams",
    gantry: "Excellent - maximum force for large I-beams and H-beams",
    container: "Good - handles standard structural sizes",
    recommendation: "Gantry for heavy industrial beams, container for building structures"
  },
  {
    material: "Mill Scale & Returns",
    gantry: "Excellent - designed for steel mill heavy waste",
    container: "Limited - insufficient force for thick mill materials",
    recommendation: "Gantry shear essential for steel mill applications"
  },
  {
    material: "Mixed Heavy Scrap",
    gantry: "Excellent - versatile handling of varied heavy materials",
    container: "Good - adequate for standard mixed scrap",
    recommendation: "Choose based on material thickness and processing volume"
  }
];

const costAnalysis = [
  {
    factor: "Equipment Purchase",
    gantry: "$450K-$1,200K",
    container: "$280K-$650K",
    notes: "Gantry shears cost 60-85% more due to higher cutting force capability"
  },
  {
    factor: "Foundation & Installation",
    gantry: "$50K-$150K",
    container: "$5K-$15K",
    notes: "Gantry requires substantial concrete foundations and professional installation"
  },
  {
    factor: "Setup & Commissioning",
    gantry: "$15K-$50K",
    container: "$3K-$8K",
    notes: "Gantry installation requires 2-4 weeks vs 30 minutes for container"
  },
  {
    factor: "Annual Operating Costs",
    gantry: "$45K-$85K",
    container: "$25K-$45K",
    notes: "Higher energy consumption and maintenance for gantry systems"
  },
  {
    factor: "Relocation Costs",
    gantry: "$200K-$500K",
    container: "$8K-$15K",
    notes: "Gantry relocation requires complete disassembly and reinstallation"
  }
];

const decisionCriteria = [
  {
    criteria: "Material Thickness",
    gantryChoice: "Materials over 150mm thickness",
    containerChoice: "Materials up to 150mm thickness"
  },
  {
    criteria: "Processing Volume",
    gantryChoice: "100+ tons/hour continuous processing",
    containerChoice: "Up to 45 tons/hour processing"
  },
  {
    criteria: "Operation Type",
    gantryChoice: "Permanent single-site operation",
    containerChoice: "Multi-site or temporary operations"
  },
  {
    criteria: "Setup Timeline",
    gantryChoice: "Long-term planning and permanent installation",
    containerChoice: "Immediate operation required"
  },
  {
    criteria: "Infrastructure",
    gantryChoice: "Substantial foundation and utilities available",
    containerChoice: "Minimal infrastructure or temporary setup"
  },
  {
    criteria: "Budget Constraints",
    gantryChoice: "Maximum performance prioritized",
    containerChoice: "Lower total investment preferred"
  }
];

const faqs = [
  {
    question: "Can container shears handle the same materials as gantry shears?",
    answer: "Container shears are excellent for most scrap materials up to 150mm thickness with 400-800T cutting force. However, gantry shears with 800-2000T force are specifically designed for thicker materials (up to 300mm) and heavier industrial scrap that container shears cannot effectively process."
  },
  {
    question: "Which offers better value for money - gantry or container shears?",
    answer: "Container shears typically offer better value for operations requiring flexibility and mobility, with 40-60% lower total costs including installation. Gantry shears provide superior value for high-volume, permanent operations processing heavy materials where their higher cutting force and capacity justify the increased investment."
  },
  {
    question: "How do processing speeds compare between the two technologies?",
    answer: "Gantry shears significantly outperform container shears in processing capacity, handling 150-220 tons/hour vs 15-45 tons/hour. This 3-5x capacity difference makes gantry shears ideal for high-volume operations, while container shears excel in flexibility and rapid deployment."
  },
  {
    question: "Can I upgrade from container to gantry shear as my operation grows?",
    answer: "Yes, many operations start with container shears for their flexibility and lower investment, then add gantry shears as volumes and material requirements increase. The container shear can be relocated or used for mobile operations while the gantry handles high-volume processing at the main facility."
  },
  {
    question: "Which is better for steel mill and shipyard applications?",
    answer: "Gantry shears are typically preferred for steel mills and shipyards due to their ability to handle thick steel plates, heavy mill scale, and massive ship hull sections. The 800-2000T cutting force and 300mm thickness capability make them essential for these heavy industrial applications."
  }
];

export default function GantryShearVsContainerShearPage() {
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
            <li className="text-arzir-gray-900">Gantry Shear vs Container Shear: Which One to Choose for Heavy Scrap?</li>
          </ol>
        </nav>
      </Section>

      {/* Article Header */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-arzir-gray-500">
              <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full font-medium">
                Heavy Scrap Processing
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Published August 20, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>16 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Gantry Shear vs Container Shear: Which One to Choose for Heavy Scrap?
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Heavy Scrap Specialists</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/blog/Gantry Shear vs Container Shear Which One to Choose for Heavy Scrap.webp" 
              alt="Gantry Shear vs Container Shear Comparison for Heavy Scrap"
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
              When processing heavy scrap metal, choosing between a gantry shear and container shear is a critical 
              decision that impacts your operation&apos;s efficiency, costs, and material handling capabilities. Each 
              technology serves distinct purposes in heavy scrap processing, with significant differences in cutting 
              force, mobility, and application suitability.
            </p>
          </div>

          {/* Understanding Heavy-Duty Shear Technologies */}
          <section id="understanding-technologies" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Understanding Heavy-Duty Shear Technologies
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-2xl font-heading font-semibold text-black mb-4 flex items-center gap-2">
                  <Factory className="h-6 w-6 text-orange-600" />
                  Gantry Shears
                </h3>
                <p className="mb-4">
                  Gantry shears are large, stationary hydraulic cutting machines designed specifically for processing 
                  thick steel plates, heavy structural materials, and industrial-grade scrap. They feature massive 
                  cutting forces up to 2000 tons and can handle materials up to 300mm thickness.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• 800-2000T cutting force capability</li>
                  <li>• Handles up to 300mm steel thickness</li>
                  <li>• 150-220 tons/hour processing capacity</li>
                  <li>• Permanent installation required</li>
                  <li>• Ideal for steel mills and shipyards</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-2xl font-heading font-semibold text-black mb-4 flex items-center gap-2">
                  <Truck className="h-6 w-6 text-blue-600" />
                  Container Shears
                </h3>
                <p className="mb-4">
                  Container shears are mobile hydraulic cutting systems housed in shipping containers for complete 
                  portability. They offer 400-800 tons cutting force and excel in multi-site operations where 
                  mobility and rapid deployment are essential.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• 400-800T cutting force</li>
                  <li>• Handles up to 150mm steel thickness</li>
                  <li>• 15-45 tons/hour processing capacity</li>
                  <li>• Complete containerized mobility</li>
                  <li>• 30-minute setup capability</li>
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
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-orange-700">Gantry Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-blue-700">Container Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.aspect}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-orange-700">{item.gantry}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-blue-700">{item.container}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">
                        {item.advantage === 'gantry' ? (
                          <span className="text-orange-700 font-bold">Gantry</span>
                        ) : (
                          <span className="text-blue-700 font-bold">Container</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Heavy Scrap Application Analysis */}
          <section id="application-analysis" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Heavy Scrap Application Analysis
            </h2>
            <p>
              Different heavy scrap processing scenarios require specific shear technologies based on material 
              characteristics, volume requirements, and operational constraints:
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
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-1">Typical Materials:</p>
                      <p className="text-sm text-arzir-gray-600">{scenario.materials}</p>
                    </div>
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

          {/* Heavy Material Suitability */}
          <section className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-black">
              Heavy Material Processing Capability
            </h3>
            
            <div className="space-y-4">
              {heavyMaterialAnalysis.map((material, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-black mb-3">{material.material}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-orange-700 mb-1">Gantry Shear:</p>
                      <p className="text-sm text-arzir-gray-600">{material.gantry}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-700 mb-1">Container Shear:</p>
                      <p className="text-sm text-arzir-gray-600">{material.container}</p>
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

          {/* Cost & ROI Analysis */}
          <section id="cost-analysis" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Cost & ROI Analysis
            </h2>
            <p>
              Understanding the total cost of ownership is crucial for heavy scrap processing equipment selection:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Cost Factor</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Gantry Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Container Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costAnalysis.map((cost, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{cost.factor}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.gantry}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.container}</td>
                      <td className="border border-arzir-gray-200 p-4 text-sm text-arzir-gray-600">{cost.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-3">ROI Considerations:</h4>
              <ul className="space-y-2 text-green-700">
                <li><strong>Gantry Shears:</strong> Higher upfront investment but superior throughput for high-volume operations</li>
                <li><strong>Container Shears:</strong> Lower total investment with flexibility premium for multi-site operations</li>
                <li><strong>Payback Period:</strong> Gantry: 18-36 months for high-volume, Container: 12-24 months for multi-site</li>
                <li><strong>Long-term Value:</strong> Consider material requirements, volume growth, and operational flexibility</li>
              </ul>
            </div>
          </section>

          {/* Decision Framework for Heavy Scrap */}
          <section id="decision-framework" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Decision Framework for Heavy Scrap Processing
            </h2>
            <p>
              Use this framework to determine which shear technology best fits your heavy scrap processing requirements:
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 via-white to-blue-50 p-6 rounded-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-bold text-black">Decision Criteria</th>
                      <th className="p-4 text-center font-bold text-orange-700">Choose Gantry If...</th>
                      <th className="p-4 text-center font-bold text-blue-700">Choose Container If...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionCriteria.map((criteria, index) => (
                      <tr key={index}>
                        <td className="p-4 font-semibold text-black">{criteria.criteria}</td>
                        <td className="p-4 text-center text-orange-700">{criteria.gantryChoice}</td>
                        <td className="p-4 text-center text-blue-700">{criteria.containerChoice}</td>
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
              <h4 className="font-semibold text-green-800 mb-3">ARZIR Heavy Scrap Processing Guidelines:</h4>
              <ul className="space-y-2 text-green-700">
                <li><strong>Assess material thickness first:</strong> Materials over 200mm require gantry shear cutting force</li>
                <li><strong>Evaluate processing volume:</strong> Operations over 100 tons/hour benefit from gantry capacity</li>
                <li><strong>Consider site requirements:</strong> Multi-site operations strongly favor container mobility</li>
                <li><strong>Plan for material growth:</strong> Heavy industrial growth may require gantry capabilities</li>
                <li><strong>Hybrid approach:</strong> Large operations often use both types strategically</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-3">Quick Selection Guide:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-orange-700 mb-2">Choose Gantry Shear When:</h5>
                  <ul className="space-y-1 text-sm text-orange-600">
                    <li>• Processing thick steel plates (200mm+)</li>
                    <li>• Steel mill or shipyard operations</li>
                    <li>• High-volume continuous processing</li>
                    <li>• Permanent facility with infrastructure</li>
                    <li>• Maximum cutting force required</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-blue-700 mb-2">Choose Container Shear When:</h5>
                  <ul className="space-y-1 text-sm text-blue-600">
                    <li>• Multi-site operations required</li>
                    <li>• Standard thickness materials (≤150mm)</li>
                    <li>• Rapid deployment needed</li>
                    <li>• Temporary or project-based work</li>
                    <li>• Lower total investment preferred</li>
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
            Choose the Right Heavy Scrap Processing Solution
          </h2>
          <p className="text-xl text-arzir-gray-600">
            Get expert guidance on selecting the optimal heavy-duty cutting solution for your specific material requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="gantry_shear_vs_container_blog">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Heavy Scrap Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products/gantry-shear">
                View Gantry Shears
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
              href="/blog/container-shear-vs-guillotine-shear"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Container vs Guillotine Shears</div>
              </div>
            </Link>
            <Link 
              href="/blog/gantry-shears-improve-recycling-efficiency"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Gantry Shears Improve Efficiency</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}