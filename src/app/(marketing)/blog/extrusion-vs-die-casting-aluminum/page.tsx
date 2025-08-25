import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronRight, CheckCircle, Factory, Settings, Target, Star } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluminium Extrusion Press vs Die Casting: Which to Choose? | ARZIR Blog",
  description: "Detailed comparison of aluminum extrusion and die casting processes. Technical analysis, cost comparison, and selection guide for aluminum component manufacturing.",
  keywords: [
    "aluminum extrusion vs die casting",
    "extrusion press vs die casting comparison",
    "aluminum manufacturing processes",
    "aluminum component production",
    "extrusion vs casting selection guide",
    "aluminum processing comparison",
    "die casting vs extrusion advantages",
    "aluminum manufacturing equipment"
  ],
  openGraph: {
    title: "Aluminium Extrusion Press vs Die Casting: Which to Choose?",
    description: "Expert comparison of aluminum extrusion and die casting processes to help you choose the optimal manufacturing method for your aluminum components.",
    images: [
      {
        url: "/images/blog/Aluminium Extrusion Press vs Die Casting Which to Choose.png",
        width: 1200,
        height: 630,
        alt: "Aluminum Extrusion vs Die Casting Comparison - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "Process Overview & Fundamentals", anchor: "process-overview" },
  { title: "Technical Capabilities Comparison", anchor: "technical-comparison" },
  { title: "Cost Analysis & Economics", anchor: "cost-analysis" },
  { title: "Application Suitability Guide", anchor: "application-guide" },
  { title: "Quality & Performance Factors", anchor: "quality-performance" },
  { title: "Selection Decision Matrix", anchor: "selection-matrix" }
];

const keyTakeaways = [
  "Extrusion excels for continuous profiles and structural shapes with consistent cross-sections",
  "Die casting is optimal for complex 3D shapes, thin walls, and high-volume production",
  "Extrusion offers lower tooling costs ($5K-50K) vs die casting ($50K-500K)",
  "Die casting achieves superior surface finish and dimensional accuracy",
  "Extrusion provides unlimited length capability with standard cross-sections"
];

const processOverview = [
  {
    process: "Aluminum Extrusion",
    description: "Heated aluminum billets are forced through shaped dies under high hydraulic pressure to create continuous profiles",
    mechanism: "High-pressure hydraulic ram + precision die + heated billet (450-500°C)",
    strengths: ["Continuous profiles", "Lower tooling costs", "Material efficiency", "Structural capability"],
    limitations: ["Fixed cross-section", "Limited 3D complexity", "Setup time", "Volume constraints"],
    icon: Factory,
    color: "blue"
  },
  {
    process: "Die Casting",
    description: "Molten aluminum is injected into precision molds under high pressure to create complex 3D components",
    mechanism: "High-pressure injection + precision mold + molten aluminum (660-720°C)",
    strengths: ["Complex geometries", "Excellent surface finish", "High volume", "Tight tolerances"],
    limitations: ["High tooling costs", "Size limitations", "Wall thickness constraints", "Material waste"],
    icon: Settings,
    color: "orange"
  }
];

const technicalComparison = [
  {
    parameter: "Dimensional Accuracy",
    extrusion: "±0.1-0.3mm typical",
    dieCasting: "±0.05-0.1mm typical",
    advantage: "die-casting",
    notes: "Die casting provides superior dimensional accuracy due to precision mold control"
  },
  {
    parameter: "Surface Finish",
    extrusion: "Ra 1.6-6.3 μm (post-processing)",
    dieCasting: "Ra 0.4-1.6 μm (as-cast)",
    advantage: "die-casting",
    notes: "Die casting delivers superior surface finish directly from the mold"
  },
  {
    parameter: "Wall Thickness",
    extrusion: "2-50mm typical range",
    dieCasting: "0.5-5mm optimal range",
    advantage: "extrusion",
    notes: "Extrusion handles thicker walls better, die casting excels at thin walls"
  },
  {
    parameter: "Production Volume",
    extrusion: "Low to medium (100-10,000 parts)",
    dieCasting: "Medium to high (1,000-1M+ parts)",
    advantage: "die-casting",
    notes: "Die casting economies of scale favor higher volumes"
  },
  {
    parameter: "Geometric Complexity",
    extrusion: "Constant cross-section only",
    dieCasting: "Complex 3D geometries",
    advantage: "die-casting",
    notes: "Die casting enables undercuts, ribs, bosses, and complex internal features"
  },
  {
    parameter: "Material Utilization",
    extrusion: "95-98% efficiency",
    dieCasting: "75-85% efficiency",
    advantage: "extrusion",
    notes: "Extrusion minimizes waste through continuous process and recycling"
  },
  {
    parameter: "Length Capability",
    extrusion: "Up to 40+ meters",
    dieCasting: "Limited by machine size",
    advantage: "extrusion",
    notes: "Extrusion creates unlimited length profiles within practical limits"
  },
  {
    parameter: "Setup Time",
    extrusion: "2-4 hours die change",
    dieCasting: "30-60 minutes mold change",
    advantage: "die-casting",
    notes: "Die casting offers faster changeover for different parts"
  }
];

const costAnalysis = {
  toolingCosts: {
    extrusion: {
      simple: "$5,000 - $15,000",
      complex: "$15,000 - $50,000",
      description: "Single die design and manufacturing"
    },
    dieCasting: {
      simple: "$50,000 - $150,000",
      complex: "$150,000 - $500,000+",
      description: "Multi-cavity precision molds with cooling systems"
    }
  },
  unitCosts: {
    extrusion: {
      lowVolume: "$3-12 per kg",
      mediumVolume: "$2-8 per kg",
      highVolume: "$1.5-6 per kg"
    },
    dieCasting: {
      lowVolume: "$8-25 per kg",
      mediumVolume: "$4-15 per kg", 
      highVolume: "$2-8 per kg"
    }
  },
  breakEvenVolume: {
    simple: "5,000 - 15,000 parts",
    complex: "15,000 - 50,000 parts",
    description: "Volume where die casting becomes cost-competitive with extrusion"
  }
};

const applicationGuide = [
  {
    category: "Structural Components",
    description: "Building, automotive, and industrial framework applications",
    recommendation: "Aluminum Extrusion",
    reasoning: "Continuous profiles provide structural integrity with optimized material distribution",
    examples: ["Window frames", "Automotive space frames", "Industrial machine bases", "Conveyor structures"],
    keyBenefits: ["High strength-to-weight", "Material efficiency", "Standard sections", "Custom profiles"],
    considerations: "Limited to constant cross-sections, requires joining for complex assemblies"
  },
  {
    category: "Engine Components",
    description: "Automotive and industrial engine housings and components",
    recommendation: "Die Casting",
    reasoning: "Complex internal passages, tight tolerances, and integrated features favor die casting",
    examples: ["Engine blocks", "Transmission cases", "Pump housings", "Heat exchangers"],
    keyBenefits: ["Complex internal geometry", "Integrated features", "Excellent surface finish", "High precision"],
    considerations: "Higher tooling investment, minimum volume requirements for viability"
  },
  {
    category: "Heat Sinks & Cooling",
    description: "Electronic thermal management and HVAC applications",
    recommendation: "Both (Application Dependent)",
    reasoning: "Choice depends on fin complexity, volume requirements, and heat dissipation needs",
    examples: ["LED heat sinks", "Power electronics cooling", "HVAC components", "Server cooling"],
    keyBenefits: ["Extrusion: Custom fin profiles", "Die casting: Complex cooling channels"],
    considerations: "Extrusion for standard profiles, die casting for complex internal cooling"
  },
  {
    category: "Decorative & Architectural",
    description: "Building facade, interior design, and aesthetic applications",
    recommendation: "Aluminum Extrusion",
    reasoning: "Continuous profiles enable seamless appearance with efficient material usage",
    examples: ["Curtain walls", "Handrails", "Trim profiles", "Decorative elements"],
    keyBenefits: ["Consistent appearance", "Custom profiles", "Anodizing compatibility", "Length flexibility"],
    considerations: "Limited to linear profiles, joining required for complex shapes"
  },
  {
    category: "Electronic Housings",
    description: "Consumer electronics, telecommunications, and industrial enclosures",
    recommendation: "Die Casting",
    reasoning: "Complex geometries, EMI shielding, and integration of multiple features",
    examples: ["Smartphone cases", "Router housings", "Industrial controllers", "Power supplies"],
    keyBenefits: ["EMI shielding", "Integrated mounting", "Thin walls", "Complex shapes"],
    considerations: "Volume requirements for cost effectiveness, design for manufacturing"
  },
  {
    category: "Transportation Components", 
    description: "Automotive, aerospace, and marine structural elements",
    recommendation: "Both (Component Specific)",
    reasoning: "Structural elements favor extrusion, complex housings favor die casting",
    examples: ["Body frames (extrusion)", "Engine mounts (casting)", "Rails (extrusion)", "Brackets (casting)"],
    keyBenefits: ["Optimized for specific component requirements"],
    considerations: "Consider assembly methods, joining requirements, and production volumes"
  }
];

const qualityFactors = [
  {
    factor: "Mechanical Properties",
    extrusion: {
      strengths: ["Uniform grain structure", "Excellent fatigue resistance", "High structural integrity"],
      limitations: ["Directional properties", "Welding line effects"],
      typical: "Tensile: 200-350 MPa, Yield: 150-300 MPa"
    },
    dieCasting: {
      strengths: ["Isotropic properties", "Good compressive strength", "Consistent properties"],
      limitations: ["Porosity concerns", "Limited ductility", "Heat treatment constraints"],
      typical: "Tensile: 240-320 MPa, Yield: 160-280 MPa"
    }
  },
  {
    factor: "Surface Quality",
    extrusion: {
      strengths: ["Smooth surface achievable", "Anodizing compatible", "Post-processing options"],
      limitations: ["Die marks possible", "Surface preparation needed"],
      typical: "Ra 1.6-6.3 μm (machined), Ra 0.8-3.2 μm (precision)"
    },
    dieCasting: {
      strengths: ["Excellent as-cast finish", "Minimal post-processing", "Consistent texture"],
      limitations: ["Flash removal needed", "Gate marks", "Porosity risk"],
      typical: "Ra 0.4-1.6 μm (as-cast), Ra 0.2-0.8 μm (machined)"
    }
  },
  {
    factor: "Dimensional Stability",
    extrusion: {
      strengths: ["Excellent length stability", "Predictable behavior", "Stress relief possible"],
      limitations: ["Cross-section variation", "Twist/bow potential"],
      typical: "±0.1-0.3mm typical tolerance"
    },
    dieCasting: {
      strengths: ["Superior dimensional accuracy", "Complex tolerance control", "Stable geometry"],
      limitations: ["Shrinkage compensation", "Thermal effects", "Flash control"],
      typical: "±0.05-0.15mm typical tolerance"
    }
  }
];

const selectionMatrix = [
  {
    criteria: "Part Geometry",
    extrusionScore: 3,
    dieCastingScore: 5,
    weight: 0.25,
    description: "Complexity of shape and features required"
  },
  {
    criteria: "Production Volume",
    extrusionScore: 4,
    dieCastingScore: 4,
    weight: 0.20,
    description: "Annual quantity requirements and production run sizes"
  },
  {
    criteria: "Tooling Investment",
    extrusionScore: 5,
    dieCastingScore: 2,
    weight: 0.15,
    description: "Initial tooling costs and development timeline"
  },
  {
    criteria: "Material Efficiency",
    extrusionScore: 5,
    dieCastingScore: 3,
    weight: 0.15,
    description: "Material utilization and waste minimization"
  },
  {
    criteria: "Surface Finish Requirements",
    extrusionScore: 3,
    dieCastingScore: 5,
    weight: 0.10,
    description: "As-manufactured surface quality requirements"
  },
  {
    criteria: "Dimensional Precision",
    extrusionScore: 3,
    dieCastingScore: 5,
    weight: 0.10,
    description: "Tolerance requirements and dimensional stability"
  },
  {
    criteria: "Lead Time",
    extrusionScore: 4,
    dieCastingScore: 3,
    weight: 0.05,
    description: "Time to market and production setup requirements"
  }
];

const decisionTree = [
  {
    question: "Is the component a continuous profile with constant cross-section?",
    yesAnswer: "Extrusion is likely optimal",
    noAnswer: "Consider die casting for complex shapes"
  },
  {
    question: "Do you need complex 3D geometry with undercuts or internal features?", 
    yesAnswer: "Die casting required",
    noAnswer: "Extrusion may be suitable"
  },
  {
    question: "Is production volume above 10,000 parts annually?",
    yesAnswer: "Die casting economics improve",
    noAnswer: "Extrusion may be more cost-effective"
  },
  {
    question: "Are tight tolerances (±0.1mm) critical?",
    yesAnswer: "Die casting provides better accuracy", 
    noAnswer: "Extrusion tolerances may be sufficient"
  },
  {
    question: "Is tooling budget limited (<$50K)?",
    yesAnswer: "Extrusion tooling more affordable",
    noAnswer: "Both processes viable"
  }
];

const hybridSolutions = [
  {
    application: "Automotive Body Components",
    approach: "Extruded rails + die cast joints",
    description: "Use extrusion for long structural members and die casting for complex connection nodes",
    benefits: ["Optimized material usage", "Cost-effective hybrid", "Enhanced performance"],
    example: "Space frame construction with extruded side rails and die cast corner joints"
  },
  {
    application: "Electronic Enclosures",
    approach: "Die cast housing + extruded heat sink",
    description: "Die cast main enclosure for complex features, extruded heat sink profiles for cooling",
    benefits: ["Integrated functionality", "Thermal optimization", "Manufacturing efficiency"],
    example: "Power supply enclosure with die cast housing and extruded cooling fins"
  },
  {
    application: "Industrial Equipment",
    approach: "Extruded frame + die cast components",
    description: "Extruded structural framework with die cast brackets and mounting components",
    benefits: ["Modular design", "Cost optimization", "Assembly efficiency"],
    example: "Conveyor systems with extruded rails and die cast drive components"
  }
];

const relatedArticles = [
  {
    title: "How Aluminium Extrusion Presses Work: A Complete Guide",
    href: "/blog/aluminium-extrusion-process-guide",
    description: "Comprehensive guide to aluminum extrusion process, equipment, and best practices"
  },
  {
    title: "Aluminum Alloy Selection for Manufacturing Applications",
    href: "/blog/aluminum-alloy-selection-guide",
    description: "Technical guide to choosing the right aluminum alloy for your application"
  },
  {
    title: "Cost Optimization in Aluminum Component Manufacturing",
    href: "/blog/aluminum-manufacturing-cost-optimization",
    description: "Strategies for reducing costs in aluminum component production"
  }
];

export default function ExtrusionVsDieCastingBlog() {
  return (
    <>
      {/* Hero Section */}
      <Section size="lg" className="!pt-16 sm:!pt-20 md:!pt-24">
        <div className="space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-arzir-gray-600">
            <Link href="/" className="hover:text-arzir-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-arzir-primary">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Extrusion vs Die Casting</span>
          </div>

          {/* Article Header */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
                  Manufacturing Guide
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  Process Comparison
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-heading font-bold text-black leading-tight">
                Aluminium Extrusion Press vs Die Casting: Which to Choose?
              </h1>
              
              <p className="text-xl text-arzir-gray-600 leading-relaxed max-w-4xl">
                Expert comparison of aluminum extrusion and die casting processes to help you select 
                the optimal manufacturing method for your specific component requirements and production goals.
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-arzir-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>ARZIR Technical Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>14 min read</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table of Contents - Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-arzir-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-heading font-bold text-black mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.anchor}`}
                      className="text-sm text-arzir-gray-600 hover:text-arzir-primary transition-colors block py-1"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Takeaways */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-arzir-primary">
              <h3 className="text-lg font-heading font-bold text-black mb-4">Key Takeaways</h3>
              <ul className="space-y-2">
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-arzir-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-arzir-gray-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Process Overview */}
          <section id="process-overview">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Process Overview & Fundamentals
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Understanding the fundamental differences between aluminum extrusion and die casting 
                is crucial for making informed manufacturing decisions. Each process offers distinct 
                advantages suited to specific applications and production requirements.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {processOverview.map((process, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-arzir-gray-200 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-${process.color}-100 rounded-lg flex items-center justify-center`}>
                          <process.icon className={`h-6 w-6 text-${process.color}-600`} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-black">{process.process}</h3>
                      </div>
                      
                      <p className="text-arzir-gray-600 leading-relaxed">{process.description}</p>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-black">Process Mechanism:</div>
                        <div className="text-sm text-arzir-gray-600">{process.mechanism}</div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-green-600">Key Strengths:</div>
                          <div className="space-y-1">
                            {process.strengths.map((strength, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-1" />
                                <span className="text-xs text-arzir-gray-600">{strength}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-orange-600">Limitations:</div>
                          <div className="space-y-1">
                            {process.limitations.map((limitation, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className="w-3 h-3 bg-orange-200 rounded-full flex-shrink-0 mt-1" />
                                <span className="text-xs text-arzir-gray-600">{limitation}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Comparison */}
          <section id="technical-comparison">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Technical Capabilities Comparison
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                A comprehensive technical analysis reveals distinct performance characteristics 
                for each manufacturing process across critical parameters affecting part quality and production efficiency.
              </p>

              <div className="bg-white rounded-xl border border-arzir-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-arzir-gray-50 border-b border-arzir-gray-200">
                        <th className="p-4 text-left font-bold text-black">Technical Parameter</th>
                        <th className="p-4 text-center font-bold text-blue-600">Aluminum Extrusion</th>
                        <th className="p-4 text-center font-bold text-orange-600">Die Casting</th>
                        <th className="p-4 text-center font-bold text-green-600">Advantage</th>
                        <th className="p-4 text-left font-bold text-black">Technical Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {technicalComparison.map((comparison, index) => (
                        <tr key={index} className={`border-b border-arzir-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}`}>
                          <td className="p-4 font-semibold text-black">{comparison.parameter}</td>
                          <td className="p-4 text-center text-sm">{comparison.extrusion}</td>
                          <td className="p-4 text-center text-sm">{comparison.dieCasting}</td>
                          <td className="p-4 text-center">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              comparison.advantage === 'extrusion' 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-orange-100 text-orange-700'
                            }`}>
                              {comparison.advantage === 'extrusion' ? 'Extrusion' : 'Die Casting'}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-arzir-gray-600">{comparison.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 text-center">
                  <h3 className="text-lg font-heading font-bold text-blue-800 mb-2">Extrusion Advantages</h3>
                  <ul className="space-y-1 text-sm text-blue-700 text-left">
                    <li>• Material efficiency (95-98%)</li>
                    <li>• Unlimited length capability</li>
                    <li>• Lower tooling investment</li>
                    <li>• Structural integrity</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 text-center">
                  <h3 className="text-lg font-heading font-bold text-orange-800 mb-2">Die Casting Advantages</h3>
                  <ul className="space-y-1 text-sm text-orange-700 text-left">
                    <li>• Complex 3D geometries</li>
                    <li>• Superior surface finish</li>
                    <li>• Tight dimensional tolerances</li>
                    <li>• High-volume efficiency</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 text-center">
                  <h3 className="text-lg font-heading font-bold text-green-800 mb-2">Selection Key</h3>
                  <p className="text-sm text-green-700">
                    Choose extrusion for continuous profiles and structural applications. 
                    Select die casting for complex shapes and high-volume production.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Analysis */}
          <section id="cost-analysis">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Cost Analysis & Economics
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Understanding the total cost implications of each manufacturing process is essential 
                for making economically sound decisions that align with your production requirements and budget constraints.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Tooling Costs */}
                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                  <h3 className="text-lg font-heading font-bold text-black mb-4">Tooling Investment</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                        <Factory className="h-4 w-4" />
                        Aluminum Extrusion Dies
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span>Simple profiles:</span><span>{costAnalysis.toolingCosts.extrusion.simple}</span></div>
                        <div className="flex justify-between"><span>Complex profiles:</span><span>{costAnalysis.toolingCosts.extrusion.complex}</span></div>
                        <div className="text-xs text-arzir-gray-600 mt-1">{costAnalysis.toolingCosts.extrusion.description}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                        <Settings className="h-4 w-4" />
                        Die Casting Molds
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span>Simple parts:</span><span>{costAnalysis.toolingCosts.dieCasting.simple}</span></div>
                        <div className="flex justify-between"><span>Complex parts:</span><span>{costAnalysis.toolingCosts.dieCasting.complex}</span></div>
                        <div className="text-xs text-arzir-gray-600 mt-1">{costAnalysis.toolingCosts.dieCasting.description}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Unit Costs */}
                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                  <h3 className="text-lg font-heading font-bold text-black mb-4">Unit Production Costs</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                        <Factory className="h-4 w-4" />
                        Extrusion Unit Costs
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span>Low volume:</span><span>{costAnalysis.unitCosts.extrusion.lowVolume}</span></div>
                        <div className="flex justify-between"><span>Medium volume:</span><span>{costAnalysis.unitCosts.extrusion.mediumVolume}</span></div>
                        <div className="flex justify-between"><span>High volume:</span><span>{costAnalysis.unitCosts.extrusion.highVolume}</span></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                        <Settings className="h-4 w-4" />
                        Die Casting Unit Costs
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span>Low volume:</span><span>{costAnalysis.unitCosts.dieCasting.lowVolume}</span></div>
                        <div className="flex justify-between"><span>Medium volume:</span><span>{costAnalysis.unitCosts.dieCasting.mediumVolume}</span></div>
                        <div className="flex justify-between"><span>High volume:</span><span>{costAnalysis.unitCosts.dieCasting.highVolume}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="text-lg font-heading font-bold text-green-800 mb-3">Break-Even Analysis</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-semibold text-green-700 mb-1">Simple Components:</div>
                    <div className="text-sm text-green-600">{costAnalysis.breakEvenVolume.simple}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-700 mb-1">Complex Components:</div>
                    <div className="text-sm text-green-600">{costAnalysis.breakEvenVolume.complex}</div>
                  </div>
                </div>
                <p className="text-sm text-green-700 mt-3">{costAnalysis.breakEvenVolume.description}</p>
              </div>

              <div className="bg-arzir-primary/10 p-6 rounded-xl border-l-4 border-arzir-primary">
                <h4 className="text-lg font-heading font-bold text-black mb-3">Total Cost of Ownership Factors</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-arzir-primary">Initial Investment:</strong>
                    <p className="text-arzir-gray-700 mt-1">Tooling, setup, and qualification costs</p>
                  </div>
                  <div>
                    <strong className="text-arzir-primary">Production Costs:</strong>
                    <p className="text-arzir-gray-700 mt-1">Material, labor, energy, and overhead</p>
                  </div>
                  <div>
                    <strong className="text-arzir-primary">Lifecycle Costs:</strong>
                    <p className="text-arzir-gray-700 mt-1">Maintenance, rework, and quality costs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Application Guide */}
          <section id="application-guide">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Application Suitability Guide
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Selecting the optimal manufacturing process requires careful consideration of your specific 
                application requirements, geometric constraints, and production parameters.
              </p>

              <div className="space-y-6">
                {applicationGuide.map((application, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-arzir-gray-200 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <h3 className="text-lg font-heading font-bold text-black mb-2">{application.category}</h3>
                          <p className="text-sm text-arzir-gray-600">{application.description}</p>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-black mb-1">Recommended Process:</div>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                            application.recommendation === 'Aluminum Extrusion' 
                              ? 'bg-blue-100 text-blue-700' 
                              : application.recommendation === 'Die Casting'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {application.recommendation === 'Aluminum Extrusion' ? (
                              <Factory className="h-4 w-4" />
                            ) : application.recommendation === 'Die Casting' ? (
                              <Settings className="h-4 w-4" />
                            ) : (
                              <Target className="h-4 w-4" />
                            )}
                            {application.recommendation}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-black mb-1">Selection Reasoning:</div>
                          <p className="text-sm text-arzir-gray-600">{application.reasoning}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <div className="text-sm font-semibold text-black mb-2">Typical Examples:</div>
                          <div className="flex flex-wrap gap-1">
                            {application.examples.map((example, i) => (
                              <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-xs">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-black mb-2">Key Benefits:</div>
                          <div className="flex flex-wrap gap-1">
                            {application.keyBenefits.map((benefit, i) => (
                              <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-black mb-2">Considerations:</div>
                          <p className="text-xs text-arzir-gray-600">{application.considerations}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quality & Performance */}
          <section id="quality-performance">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Quality & Performance Factors
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Understanding quality and performance characteristics helps ensure your chosen 
                manufacturing process meets your product requirements and performance specifications.
              </p>

              <div className="space-y-6">
                {qualityFactors.map((factor, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                    <h3 className="text-xl font-heading font-bold text-black mb-4">{factor.factor}</h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Factory className="h-5 w-5 text-blue-600" />
                          <span className="font-semibold text-blue-600">Aluminum Extrusion</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-green-600">Strengths:</div>
                          <ul className="space-y-1">
                            {factor.extrusion.strengths.map((strength, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-1" />
                                <span className="text-sm text-arzir-gray-600">{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-orange-600">Limitations:</div>
                          <ul className="space-y-1">
                            {factor.extrusion.limitations.map((limitation, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-3 h-3 bg-orange-200 rounded-full flex-shrink-0 mt-1" />
                                <span className="text-sm text-arzir-gray-600">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="text-sm font-semibold text-blue-700 mb-1">Typical Performance:</div>
                          <div className="text-sm text-blue-600">{factor.extrusion.typical}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Settings className="h-5 w-5 text-orange-600" />
                          <span className="font-semibold text-orange-600">Die Casting</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-green-600">Strengths:</div>
                          <ul className="space-y-1">
                            {factor.dieCasting.strengths.map((strength, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-1" />
                                <span className="text-sm text-arzir-gray-600">{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-orange-600">Limitations:</div>
                          <ul className="space-y-1">
                            {factor.dieCasting.limitations.map((limitation, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-3 h-3 bg-orange-200 rounded-full flex-shrink-0 mt-1" />
                                <span className="text-sm text-arzir-gray-600">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <div className="text-sm font-semibold text-orange-700 mb-1">Typical Performance:</div>
                          <div className="text-sm text-orange-600">{factor.dieCasting.typical}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Selection Matrix */}
          <section id="selection-matrix">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Selection Decision Matrix
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Use this systematic evaluation framework to objectively compare extrusion and die casting 
                options based on your specific project requirements and constraints.
              </p>

              <div className="bg-white rounded-xl border border-arzir-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-arzir-gray-50 border-b border-arzir-gray-200">
                        <th className="p-4 text-left font-bold text-black">Selection Criteria</th>
                        <th className="p-4 text-center font-bold text-blue-600">Extrusion Score</th>
                        <th className="p-4 text-center font-bold text-orange-600">Die Casting Score</th>
                        <th className="p-4 text-center font-bold text-black">Weight</th>
                        <th className="p-4 text-left font-bold text-black">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectionMatrix.map((criteria, index) => (
                        <tr key={index} className={`border-b border-arzir-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}`}>
                          <td className="p-4 font-semibold text-black">{criteria.criteria}</td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center">
                              {Array.from({length: 5}, (_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < criteria.extrusionScore ? 'text-blue-500 fill-current' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center">
                              {Array.from({length: 5}, (_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < criteria.dieCastingScore ? 'text-orange-500 fill-current' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </td>
                          <td className="p-4 text-center font-medium">{(criteria.weight * 100).toFixed(0)}%</td>
                          <td className="p-4 text-sm text-arzir-gray-600">{criteria.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                  <h3 className="text-lg font-heading font-bold text-black mb-4">Decision Tree Questions</h3>
                  <div className="space-y-3">
                    {decisionTree.map((question, index) => (
                      <div key={index} className="space-y-2">
                        <div className="text-sm font-semibold text-black">{question.question}</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-arzir-gray-600">Yes: {question.yesAnswer}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-3 h-3 bg-orange-200 rounded-full flex-shrink-0 mt-0.5" />
                            <span className="text-arzir-gray-600">No: {question.noAnswer}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-lg font-heading font-bold text-green-800 mb-4">Quick Selection Guide</h3>
                  <div className="space-y-3 text-sm text-green-700">
                    <div className="flex items-start gap-2">
                      <Factory className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Choose Extrusion:</strong> Structural profiles, lower volumes, budget constraints, material efficiency priority</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Settings className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Choose Die Casting:</strong> Complex shapes, high volumes, tight tolerances, superior finish requirements</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Consider Hybrid:</strong> Complex assemblies may benefit from combining both processes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hybrid Solutions */}
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-bold text-black">Hybrid Manufacturing Solutions</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {hybridSolutions.map((solution, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                      <h4 className="font-semibold text-black mb-2">{solution.application}</h4>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-arzir-primary">{solution.approach}</div>
                        <div className="text-sm text-arzir-gray-600">{solution.description}</div>
                        <div className="space-y-1">
                          <div className="text-xs font-semibold text-green-600">Benefits:</div>
                          <div className="flex flex-wrap gap-1">
                            {solution.benefits.map((benefit, i) => (
                              <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-xs text-arzir-gray-500 italic">{solution.example}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-arzir-primary/5 via-blue-50 to-arzir-primary/5 p-8 rounded-2xl">
            <div className="text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black">
                Need Expert Manufacturing Guidance?
              </h2>
              <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our manufacturing specialists can help you evaluate your specific requirements and 
                recommend the optimal process for your aluminum component production needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <QuoteDialog source="extrusion_vs_die_casting_blog">
                  <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                    Get Manufacturing Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </QuoteDialog>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/products/aluminium-extrusion-press">View Extrusion Presses</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <Link key={index} href={article.href} className="group">
                  <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="space-y-3">
                      <h3 className="text-lg font-heading font-bold text-black group-hover:text-arzir-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-arzir-gray-600 leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center text-arzir-primary font-medium">
                        <span>Read More</span>
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}