import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, Scissors, Factory, Zap, Settings, TrendingUp, Shield, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alligator Shear vs Other Scrap Shears: Which to Choose? | ARZIR Blog",
  description: "Comprehensive comparison of alligator shears vs guillotine shears, container shears, and gantry shears for scrap metal processing. Features, applications, and selection guide.",
  keywords: [
    "alligator shear vs guillotine shear",
    "portable scrap shear comparison",
    "metal cutting equipment for recycling",
    "scrap shear selection guide",
    "alligator shear advantages",
    "compact vs heavy-duty scrap shears",
    "small scrap cutting machine",
    "recycling equipment comparison"
  ],
  openGraph: {
    title: "Alligator Shear vs Other Scrap Shears: Which to Choose?",
    description: "Expert comparison guide to help you choose between alligator shears and other cutting technologies for your scrap processing operation.",
    images: [
      {
        url: "/images/blog/alligator-shear-vs-other-shears.jpg",
        width: 1200,
        height: 630,
        alt: "Alligator Shear vs Other Scrap Shears Comparison - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "Understanding Different Shear Technologies", anchor: "understanding-technologies" },
  { title: "Detailed Comparison Matrix", anchor: "comparison-matrix" },
  { title: "Material Suitability Analysis", anchor: "material-analysis" },
  { title: "Cost & Investment Analysis", anchor: "cost-analysis" },
  { title: "Application-Based Selection Guide", anchor: "selection-guide" },
  { title: "Expert Recommendations", anchor: "expert-recommendations" }
];

const keyTakeaways = [
  "Alligator shears excel for small to medium materials (up to 120mm diameter) with compact portability",
  "Guillotine shears provide maximum cutting force for heavy materials but require permanent installation",
  "Container shears offer mobility for multi-site operations with moderate cutting capacity",
  "Gantry shears deliver highest capacity for thick steel plates and industrial-scale processing",
  "Selection depends on material size, mobility needs, processing volume, and investment budget"
];

const shearTypes = [
  {
    type: "Alligator Shear",
    description: "Compact hydraulic cutting machine with alligator-jaw design for small to medium materials",
    cuttingForce: "100-400 tons",
    materialSize: "Up to 120mm diameter",
    mobility: "Portable/Semi-mobile",
    applications: "Rebar, pipes, small scrap",
    advantages: ["Compact design", "Cost-effective", "Easy operation", "Portable"],
    icon: Scissors,
    color: "blue"
  },
  {
    type: "Guillotine Shear", 
    description: "Heavy-duty stationary shear with maximum cutting force for structural materials",
    cuttingForce: "600-1200 tons",
    materialSize: "Up to 200mm thickness",
    mobility: "Fixed installation",
    applications: "Structural steel, heavy beams",
    advantages: ["Maximum cutting force", "High throughput", "Precise cuts", "Heavy materials"],
    icon: Factory,
    color: "orange"
  },
  {
    type: "Container Shear",
    description: "Mobile cutting system housed in shipping container for multi-site operations",
    cuttingForce: "400-800 tons", 
    materialSize: "Up to 150mm thickness",
    mobility: "Fully mobile",
    applications: "Multi-site cutting, temporary projects",
    advantages: ["Complete mobility", "Quick setup", "Multi-site use", "Flexible deployment"],
    icon: TrendingUp,
    color: "green"
  },
  {
    type: "Gantry Shear",
    description: "Large stationary shear for maximum capacity processing of thick materials",
    cuttingForce: "800-2000 tons",
    materialSize: "Up to 300mm thickness", 
    mobility: "Fixed installation",
    applications: "Steel mills, shipyards, heavy industry",
    advantages: ["Highest capacity", "Thickest materials", "Industrial scale", "Maximum force"],
    icon: Settings,
    color: "purple"
  }
];

const comparisonMatrix = [
  {
    feature: "Cutting Force",
    alligator: "100-400T",
    guillotine: "600-1200T", 
    container: "400-800T",
    gantry: "800-2000T",
    winner: "gantry"
  },
  {
    feature: "Material Thickness",
    alligator: "Up to 120mm",
    guillotine: "Up to 200mm",
    container: "Up to 150mm", 
    gantry: "Up to 300mm",
    winner: "gantry"
  },
  {
    feature: "Portability",
    alligator: "Portable/Semi-mobile",
    guillotine: "Fixed only",
    container: "Fully mobile",
    gantry: "Fixed only",
    winner: "container"
  },
  {
    feature: "Setup Time",
    alligator: "1-2 hours",
    guillotine: "2-4 weeks",
    container: "30 minutes",
    gantry: "3-6 weeks", 
    winner: "container"
  },
  {
    feature: "Initial Cost",
    alligator: "$25K-$85K",
    guillotine: "$350K-$900K",
    container: "$280K-$650K",
    gantry: "$450K-$1.2M",
    winner: "alligator"
  },
  {
    feature: "Operating Cost",
    alligator: "Low",
    guillotine: "Medium-High",
    container: "Medium",
    gantry: "High",
    winner: "alligator"
  },
  {
    feature: "Maintenance",
    alligator: "Simple",
    guillotine: "Complex",
    container: "Moderate",
    gantry: "Complex",
    winner: "alligator"
  },
  {
    feature: "Processing Speed",
    alligator: "8-20 cuts/min",
    guillotine: "25-80 T/hr",
    container: "15-45 T/hr", 
    gantry: "150-220 T/hr",
    winner: "gantry"
  }
];

const materialSuitability = [
  {
    material: "Rebar & Steel Rods (10-120mm)",
    alligator: "Excellent - ideal for construction rebar processing",
    guillotine: "Overkill - too powerful for small materials",
    container: "Good - can handle but less cost-effective",
    gantry: "Overkill - designed for much larger materials",
    recommendation: "Alligator shear is the optimal choice for rebar processing"
  },
  {
    material: "Structural Steel Beams",
    alligator: "Limited - only smaller profiles up to 120mm",
    guillotine: "Excellent - designed for structural steel",
    container: "Good - handles most structural sizes",
    gantry: "Excellent - handles heaviest beams",
    recommendation: "Guillotine or gantry depending on beam size and volume"
  },
  {
    material: "Scrap Pipes & Tubes",
    alligator: "Excellent - perfect for small to medium pipes",
    guillotine: "Good - can handle but may be oversized",
    container: "Good - suitable for varied pipe sizes",
    gantry: "Overkill - too large for typical pipe applications",
    recommendation: "Alligator shear offers best cost-effectiveness for pipes"
  },
  {
    material: "Thick Steel Plates (200mm+)",
    alligator: "Cannot handle - insufficient cutting force",
    guillotine: "Good - can handle up to 200mm plates",
    container: "Limited - maximum 150mm thickness",
    gantry: "Excellent - handles up to 300mm plates",
    recommendation: "Gantry shear required for thick plate applications"
  },
  {
    material: "Mixed Small Scrap",
    alligator: "Excellent - versatile for varied small materials",
    guillotine: "Inefficient - oversized for small materials",
    container: "Good - mobile flexibility beneficial",
    gantry: "Inefficient - designed for larger materials",
    recommendation: "Alligator shear provides best efficiency for mixed small scrap"
  }
];

const applicationScenarios = [
  {
    scenario: "Small Scrap Recycling Centers",
    recommended: "Alligator Shear",
    reasons: [
      "Cost-effective for small to medium materials",
      "Low operating and maintenance costs",
      "Simple operation with minimal training",
      "Suitable for typical scrap yard materials"
    ],
    materials: "Rebar, pipes, small structural steel, copper, aluminum",
    icon: Factory
  },
  {
    scenario: "Large Steel Fabrication",
    recommended: "Guillotine Shear",
    reasons: [
      "High cutting force for structural steel",
      "Precise cuts for fabrication quality",
      "High throughput for production volumes",
      "Permanent installation for continuous use"
    ],
    materials: "I-beams, channels, angles, heavy structural steel",
    icon: Settings
  },
  {
    scenario: "Multi-Site Operations",
    recommended: "Container Shear",
    reasons: [
      "Complete mobility between sites",
      "Quick setup and deployment",
      "Eliminates transport costs for oversized scrap",
      "Flexible for temporary projects"
    ],
    materials: "Varied materials at different locations",
    icon: TrendingUp
  },
  {
    scenario: "Heavy Industrial Processing",
    recommended: "Gantry Shear", 
    reasons: [
      "Maximum cutting force for thick materials",
      "Highest processing capacity",
      "Handles steel mill waste and ship hulls",
      "Industrial-scale continuous operation"
    ],
    materials: "Thick plates, ship sections, mill scale, heavy returns",
    icon: Shield
  }
];

const costAnalysis = [
  {
    factor: "Equipment Purchase",
    alligator: "$25K-$85K",
    guillotine: "$350K-$900K",
    container: "$280K-$650K", 
    gantry: "$450K-$1.2M",
    notes: "Alligator shears offer lowest entry cost"
  },
  {
    factor: "Installation",
    alligator: "$2K-$8K",
    guillotine: "$25K-$75K",
    container: "$5K-$15K",
    gantry: "$50K-$150K",
    notes: "Simple installation vs complex foundation requirements"
  },
  {
    factor: "Annual Operating",
    alligator: "$8K-$25K",
    guillotine: "$35K-$65K",
    container: "$25K-$45K",
    gantry: "$45K-$85K",
    notes: "Based on energy, maintenance, and labor costs"
  },
  {
    factor: "ROI Timeline",
    alligator: "6-18 months",
    guillotine: "18-36 months",
    container: "12-24 months",
    gantry: "18-36 months",
    notes: "Payback period depends on utilization and material volumes"
  }
];

const selectionCriteria = [
  {
    criteria: "Material Size",
    alligatorChoice: "Up to 120mm diameter materials",
    guillotineChoice: "Structural steel up to 200mm",
    containerChoice: "Mixed materials up to 150mm",
    gantryChoice: "Heavy materials over 200mm"
  },
  {
    criteria: "Processing Volume",
    alligatorChoice: "Low to medium volumes",
    guillotineChoice: "Medium to high volumes",
    containerChoice: "Variable volumes at multiple sites",
    gantryChoice: "Very high continuous volumes"
  },
  {
    criteria: "Mobility Requirements",
    alligatorChoice: "Occasional relocation needs",
    guillotineChoice: "Permanent single location",
    containerChoice: "Frequent site changes required",
    gantryChoice: "Permanent industrial installation"
  },
  {
    criteria: "Budget Constraints", 
    alligatorChoice: "Limited budget ($25K-$85K)",
    guillotineChoice: "Medium budget ($350K-$900K)",
    containerChoice: "Medium budget with mobility needs",
    gantryChoice: "Large budget for maximum capacity"
  },
  {
    criteria: "Operator Skill Level",
    alligatorChoice: "Basic training sufficient",
    guillotineChoice: "Skilled operators required",
    containerChoice: "Moderate training needed",
    gantryChoice: "Highly skilled operators required"
  }
];

const faqs = [
  {
    question: "When should I choose an alligator shear over other types?",
    answer: "Choose alligator shears for small to medium materials (up to 120mm), when you need portability, have budget constraints, or process materials like rebar, pipes, and small scrap. They offer the best cost-effectiveness for these applications with simple operation and maintenance."
  },
  {
    question: "Can alligator shears handle the same materials as guillotine shears?",
    answer: "Alligator shears can handle many of the same materials but are limited to smaller sizes (up to 120mm vs 200mm+ for guillotines). They excel with rebar, pipes, and small structural steel but cannot process heavy beams or thick plates that guillotine shears handle."
  },
  {
    question: "How do operating costs compare between shear types?",
    answer: "Alligator shears have the lowest operating costs ($8K-$25K annually) due to simple design and low energy consumption. Guillotine and gantry shears cost $35K-$85K annually due to higher power requirements and complex maintenance. Container shears fall in between at $25K-$45K annually."
  },
  {
    question: "Which shear type offers the best ROI for small businesses?",
    answer: "Alligator shears typically offer the best ROI for small businesses with 6-18 month payback periods. Their low purchase price, minimal installation costs, and simple operation make them ideal for businesses processing small to medium materials without requiring large capital investment."
  },
  {
    question: "Can I upgrade from an alligator shear to larger equipment later?",
    answer: "Yes, many businesses start with alligator shears and upgrade to larger equipment as volumes grow. The alligator shear can continue serving for smaller materials while larger equipment handles heavy processing, creating a comprehensive cutting solution."
  }
];

export default function AlligatorShearVsOtherScrapShearsPage() {
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
            <li className="text-arzir-gray-900">Alligator Shear vs Other Scrap Shears: Which to Choose?</li>
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
                <span>12 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Alligator Shear vs Other Scrap Shears: Which to Choose?
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Equipment Specialists</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/products/alligator-shear.png" 
              alt="Alligator Shear vs Other Scrap Shears Comparison"
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
              Selecting the right scrap cutting equipment is crucial for operational efficiency and cost-effectiveness. 
              With various shear technologies available—alligator, guillotine, container, and gantry shears—each 
              serves specific applications and material requirements. This comprehensive comparison will help you 
              choose the optimal cutting solution for your specific needs.
            </p>
          </div>

          {/* Understanding Different Shear Technologies */}
          <section id="understanding-technologies" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Understanding Different Shear Technologies
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {shearTypes.map((shear, index) => (
                <div key={index} className={`bg-${shear.color}-50 p-6 rounded-xl border border-${shear.color}-200`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <shear.icon className={`h-8 w-8 text-${shear.color}-600`} />
                      <h3 className="text-xl font-heading font-semibold text-black">{shear.type}</h3>
                    </div>
                    <p className="text-sm text-arzir-gray-600">{shear.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="font-medium text-black">Cutting Force:</span>
                        <p className={`text-${shear.color}-700`}>{shear.cuttingForce}</p>
                      </div>
                      <div>
                        <span className="font-medium text-black">Material Size:</span>
                        <p className={`text-${shear.color}-700`}>{shear.materialSize}</p>
                      </div>
                      <div>
                        <span className="font-medium text-black">Mobility:</span>
                        <p className={`text-${shear.color}-700`}>{shear.mobility}</p>
                      </div>
                      <div>
                        <span className="font-medium text-black">Applications:</span>
                        <p className={`text-${shear.color}-700`}>{shear.applications}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="font-medium text-black text-sm">Key Advantages:</span>
                      <ul className="mt-1 space-y-1">
                        {shear.advantages.map((advantage, i) => (
                          <li key={i} className="flex items-center gap-1 text-xs">
                            <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                            <span className="text-arzir-gray-600">{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
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
                    <th className="border border-arzir-gray-200 p-3 text-left font-semibold text-sm">Feature</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold text-blue-700 text-sm">Alligator</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold text-orange-700 text-sm">Guillotine</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold text-green-700 text-sm">Container</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold text-purple-700 text-sm">Gantry</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold text-sm">Best</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonMatrix.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-3 font-medium text-black text-sm">{item.feature}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-blue-700 text-sm">{item.alligator}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-orange-700 text-sm">{item.guillotine}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-green-700 text-sm">{item.container}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-purple-700 text-sm">{item.gantry}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-sm">
                        <span className="font-bold capitalize">{item.winner}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Material Suitability Analysis */}
          <section id="material-analysis" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Material Suitability Analysis
            </h2>
            
            <div className="space-y-6">
              {materialSuitability.map((material, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-black mb-4">{material.material}</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-blue-700 mb-1">Alligator Shear:</p>
                      <p className="text-sm text-arzir-gray-600">{material.alligator}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-700 mb-1">Guillotine Shear:</p>
                      <p className="text-sm text-arzir-gray-600">{material.guillotine}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-700 mb-1">Container Shear:</p>
                      <p className="text-sm text-arzir-gray-600">{material.container}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-purple-700 mb-1">Gantry Shear:</p>
                      <p className="text-sm text-arzir-gray-600">{material.gantry}</p>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded border-l-4 border-green-400">
                    <p className="text-sm font-medium text-green-800">Recommendation:</p>
                    <p className="text-sm text-green-700">{material.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost & Investment Analysis */}
          <section id="cost-analysis" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Cost & Investment Analysis
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Cost Factor</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Alligator</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Guillotine</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Container</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Gantry</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {costAnalysis.map((cost, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{cost.factor}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.alligator}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.guillotine}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.container}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center">{cost.gantry}</td>
                      <td className="border border-arzir-gray-200 p-4 text-sm text-arzir-gray-600">{cost.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Application-Based Selection Guide */}
          <section id="selection-guide" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Application-Based Selection Guide
            </h2>
            
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

          {/* Selection Decision Framework */}
          <section className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-black">
              Selection Decision Framework
            </h3>
            
            <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 p-6 rounded-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-bold text-black">Criteria</th>
                      <th className="p-4 text-center font-bold text-blue-700">Choose Alligator If...</th>
                      <th className="p-4 text-center font-bold text-orange-700">Choose Guillotine If...</th>
                      <th className="p-4 text-center font-bold text-green-700">Choose Container If...</th>
                      <th className="p-4 text-center font-bold text-purple-700">Choose Gantry If...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectionCriteria.map((criteria, index) => (
                      <tr key={index}>
                        <td className="p-4 font-semibold text-black">{criteria.criteria}</td>
                        <td className="p-4 text-center text-blue-700 text-sm">{criteria.alligatorChoice}</td>
                        <td className="p-4 text-center text-orange-700 text-sm">{criteria.guillotineChoice}</td>
                        <td className="p-4 text-center text-green-700 text-sm">{criteria.containerChoice}</td>
                        <td className="p-4 text-center text-purple-700 text-sm">{criteria.gantryChoice}</td>
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
              <h4 className="font-semibold text-green-800 mb-3">ARZIR Selection Guidelines:</h4>
              <ul className="space-y-2 text-green-700">
                <li><strong>Start with material assessment:</strong> Material size and type are the primary determining factors</li>
                <li><strong>Consider processing volume:</strong> Match equipment capacity to your actual and projected volumes</li>
                <li><strong>Evaluate mobility needs:</strong> Fixed vs portable requirements significantly impact selection</li>
                <li><strong>Calculate total cost of ownership:</strong> Include purchase, installation, operating, and maintenance costs</li>
                <li><strong>Plan for growth:</strong> Consider future expansion and changing material requirements</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-3">Quick Selection Summary:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-700 mb-2">Choose Alligator Shear When:</h5>
                  <ul className="space-y-1 text-sm text-blue-600">
                    <li>• Processing rebar, pipes, small scrap (≤120mm)</li>
                    <li>• Limited budget ($25K-$85K range)</li>
                    <li>• Need portability or space constraints</li>
                    <li>• Simple operation preferred</li>
                    <li>• Low to medium processing volumes</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-700 mb-2">Consider Other Options When:</h5>
                  <ul className="space-y-1 text-sm text-purple-600">
                    <li>• Processing heavy structural steel (&gt;120mm)</li>
                    <li>• Very high volume continuous operation</li>
                    <li>• Need maximum cutting force</li>
                    <li>• Multi-site mobility requirements</li>
                    <li>• Industrial-scale thick plate processing</li>
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
            Choose the Right Scrap Cutting Solution
          </h2>
          <p className="text-xl text-arzir-gray-600">
            Get expert guidance on selecting the optimal cutting equipment for your specific material requirements and operational needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="alligator_shear_comparison_blog">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Equipment Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products/alligator-shear">
                View Alligator Shears
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
              href="/blog/how-to-choose-scrap-metal-baler"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">How to Choose Scrap Metal Baler</div>
              </div>
            </Link>
            <Link 
              href="/blog/alligator-shears-improve-small-scrap-efficiency"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Alligator Shears Improve Efficiency</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}