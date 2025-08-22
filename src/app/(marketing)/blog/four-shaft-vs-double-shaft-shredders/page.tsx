import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, TrendingUp, Zap, DollarSign, Shield, Timer, Factory, Truck, Settings, Wrench, Scissors, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Four-Shaft vs Double-Shaft Shredders: Which One to Choose? | ARZIR Blog",
  description: "Complete comparison guide between four-shaft and double-shaft shredder technologies. Learn about capacity, output quality, applications, and costs to choose the right shredder for your operation.",
  keywords: [
    "four shaft vs double shaft shredder",
    "quad shaft shredder comparison",
    "multi-shaft shredder selection",
    "shredder technology comparison",
    "industrial shredder buying guide",
    "recycling equipment comparison",
    "waste processing equipment guide",
    "shredder selection criteria"
  ],
  openGraph: {
    title: "Four-Shaft vs Double-Shaft Shredders: Which One to Choose?",
    description: "Comprehensive comparison of four-shaft and double-shaft shredder technologies to help you choose the right equipment for your recycling operation.",
    images: [
      {
        url: "/images/blog/four-shaft-vs-double-shaft-comparison.jpg",
        width: 1200,
        height: 630,
        alt: "Four-Shaft vs Double-Shaft Shredders Comparison - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "Understanding the Core Differences", anchor: "core-differences" },
  { title: "Technology Comparison Overview", anchor: "technology-comparison" },
  { title: "Application-Specific Recommendations", anchor: "application-recommendations" },
  { title: "Cost and ROI Analysis", anchor: "cost-roi-analysis" },
  { title: "Decision Framework Guide", anchor: "decision-framework" },
  { title: "Implementation Considerations", anchor: "implementation-considerations" }
];

const keyTakeaways = [
  "Four-shaft shredders provide superior material liberation (90-95% vs 80-85%) but require higher investment",
  "Double-shaft systems offer higher throughput (5-50 t/h vs 3-40 t/h) for primary size reduction applications",
  "Four-shaft technology excels in fine processing and complex material separation with single-pass operation",
  "Double-shaft shredders are more cost-effective for high-volume primary shredding of bulky materials",
  "Material type, output requirements, and processing goals determine the optimal technology choice"
];

const technologyComparison = [
  {
    aspect: "Primary Function",
    fourShaft: "Precision fine size reduction with material liberation",
    doubleShaft: "High-capacity primary size reduction and volume reduction",
    recommendation: "Four-shaft for fine processing, double-shaft for primary reduction"
  },
  {
    aspect: "Output Quality",
    fourShaft: "Superior uniformity (95%+) with controlled particle size",
    doubleShaft: "Good uniformity (80-90%) suitable for further processing",
    recommendation: "Four-shaft when precise output specifications are critical"
  },
  {
    aspect: "Processing Capacity",
    fourShaft: "3-40 tons/hour with multi-stage processing",
    doubleShaft: "5-50 tons/hour with single-stage operation",
    recommendation: "Double-shaft for higher throughput requirements"
  },
  {
    aspect: "Material Liberation",
    fourShaft: "Exceptional (90-95%) - separates bonded materials effectively",
    doubleShaft: "Good (75-85%) - basic separation of different materials",
    recommendation: "Four-shaft for complex composites and bonded materials"
  },
  {
    aspect: "Investment Cost",
    fourShaft: "Higher ($400K-$1.5M) due to complexity",
    doubleShaft: "Moderate ($300K-$1.2M) with proven technology",
    recommendation: "Consider ROI based on output quality requirements"
  },
  {
    aspect: "Maintenance Complexity",
    fourShaft: "More complex with synchronized four-shaft system",
    doubleShaft: "Simpler with dual-shaft coordination",
    recommendation: "Double-shaft for facilities with limited technical expertise"
  },
  {
    aspect: "Energy Efficiency",
    fourShaft: "Higher per ton due to multi-stage processing",
    doubleShaft: "Lower per ton with efficient dual-rotor design",
    recommendation: "Double-shaft for energy-conscious operations"
  },
  {
    aspect: "Floor Space Required",
    fourShaft: "Larger footprint due to multi-stage design",
    doubleShaft: "Compact design with efficient layout",
    recommendation: "Double-shaft for space-constrained facilities"
  }
];

const applicationRecommendations = [
  {
    application: "E-Waste and Electronics Processing",
    material: "Circuit boards, computers, complex electronic components",
    fourShaftAdvantage: "Superior material liberation separates metals, plastics, and rare earth elements effectively for maximum recovery",
    doubleShaftAdvantage: "Good for primary breakdown of large appliances and electronic equipment before fine processing",
    recommendation: "Four-shaft preferred",
    reasoning: "High-value material recovery justifies investment in superior liberation technology"
  },
  {
    application: "Automotive Shredder Residue (ASR)",
    material: "Mixed automotive waste, fluff, composite materials",
    fourShaftAdvantage: "Excellent separation of mixed materials in single pass, reducing downstream processing complexity",
    doubleShaftAdvantage: "Effective for initial volume reduction and basic material separation at lower cost",
    recommendation: "Four-shaft for high-recovery operations",
    reasoning: "Complex material mix benefits from multi-stage cutting and superior separation capabilities"
  },
  {
    application: "Metal Scrap Processing",
    material: "Steel scrap, non-ferrous metals, mixed metal waste",
    fourShaftAdvantage: "Fine sizing with consistent output for downstream magnetic and eddy current separation",
    doubleShaftAdvantage: "High-capacity processing of large metal pieces with effective size reduction",
    recommendation: "Double-shaft preferred",
    reasoning: "High throughput and aggressive cutting more important than precise liberation for metal scrap"
  },
  {
    application: "Mixed Municipal Solid Waste",
    material: "Household waste, packaging, mixed recyclables",
    fourShaftAdvantage: "Better separation of mixed materials improves downstream sorting efficiency",
    doubleShaftAdvantage: "Higher throughput handles large waste volumes effectively with good size reduction",
    recommendation: "Double-shaft preferred",
    reasoning: "Volume processing needs typically outweigh fine separation requirements in MSW applications"
  },
  {
    application: "Plastic Recycling Operations",
    material: "Mixed plastics, contaminated polymers, composite plastics",
    fourShaftAdvantage: "Superior liberation separates different plastic types and removes contaminants effectively",
    doubleShaftAdvantage: "Good size reduction for single-type plastic processing with lower investment",
    recommendation: "Four-shaft for mixed/contaminated plastics",
    reasoning: "Plastic purity requirements for recycling justify investment in superior separation technology"
  },
  {
    application: "Tire and Rubber Processing",
    material: "Whole tires, rubber components, steel-belted tires",
    fourShaftAdvantage: "Excellent wire and rubber separation in single pass, producing clean rubber chips",
    doubleShaftAdvantage: "Effective tire processing with automatic reverse function, good wire liberation",
    recommendation: "Both technologies viable",
    reasoning: "Choice depends on final product requirements - four-shaft for clean rubber, double-shaft for volume"
  }
];

const costAnalysisData = [
  {
    factor: "Initial Equipment Cost",
    fourShaft: "$400,000 - $1,500,000",
    doubleShaft: "$300,000 - $1,200,000",
    differential: "20-25% higher for four-shaft",
    impact: "Higher upfront investment for four-shaft technology"
  },
  {
    factor: "Installation Complexity",
    fourShaft: "More complex multi-stage system setup",
    doubleShaft: "Standard dual-shaft installation",
    differential: "15-20% higher installation cost",
    impact: "Four-shaft requires more specialized installation expertise"
  },
  {
    factor: "Operating Energy Cost",
    fourShaft: "25-35 kWh/ton (multi-stage processing)",
    doubleShaft: "20-30 kWh/ton (single-stage)",
    differential: "10-20% higher energy usage",
    impact: "Four-shaft higher operational energy costs"
  },
  {
    factor: "Maintenance Expense",
    fourShaft: "More complex with synchronized maintenance",
    doubleShaft: "Simpler dual-shaft maintenance",
    differential: "25-30% higher maintenance costs",
    impact: "Four-shaft requires more skilled maintenance personnel"
  },
  {
    factor: "Material Recovery Value",
    fourShaft: "90-95% liberation increases recovery rates",
    doubleShaft: "75-85% liberation with good separation",
    differential: "15-25% higher material value",
    impact: "Four-shaft generates significantly higher material values"
  },
  {
    factor: "Processing Efficiency",
    fourShaft: "Single-pass complete processing",
    doubleShaft: "Primary reduction, may need secondary processing",
    differential: "Eliminates downstream processing costs",
    impact: "Four-shaft reduces overall processing complexity and costs"
  },
  {
    factor: "Typical Payback Period",
    fourShaft: "18-30 months depending on material value",
    doubleShaft: "12-24 months for high-volume operations",
    differential: "6-12 months longer for four-shaft",
    impact: "Four-shaft ROI depends heavily on material recovery premiums"
  }
];

const decisionCriteria = [
  {
    criterion: "Material Complexity Assessment",
    questions: [
      "Are you processing bonded or composite materials?",
      "Do you need to separate different material types?",
      "Is precise material liberation critical for downstream processing?",
      "Are you handling contaminated or mixed waste streams?"
    ],
    fourShaftScore: "Choose four-shaft if 3-4 questions are 'yes'",
    doubleShaftScore: "Choose double-shaft if 0-2 questions are 'yes'",
    reasoning: "Complex materials requiring separation benefit most from four-shaft technology"
  },
  {
    criterion: "Output Requirements Analysis",
    questions: [
      "Do you need uniform particle sizes <50mm?",
      "Are precise output specifications required?",
      "Is single-pass processing from coarse to fine needed?",
      "Do downstream processes require consistent material quality?"
    ],
    fourShaftScore: "Choose four-shaft if 3-4 questions are 'yes'",
    doubleShaftScore: "Choose double-shaft if 0-2 questions are 'yes'",
    reasoning: "Precision output requirements favor four-shaft multi-stage design"
  },
  {
    criterion: "Volume and Capacity Needs",
    questions: [
      "Do you need to process >40 tons/hour regularly?",
      "Is primary size reduction your main goal?",
      "Are you handling large, bulky materials?",
      "Is maximum throughput more important than output precision?"
    ],
    fourShaftScore: "Choose double-shaft if 3-4 questions are 'yes'",
    doubleShaftScore: "Choose four-shaft if 0-2 questions are 'yes'",
    reasoning: "High-volume primary processing applications favor double-shaft systems"
  },
  {
    criterion: "Economic Considerations",
    questions: [
      "Can higher material recovery values justify premium pricing?",
      "Is ROI timeline >24 months acceptable?",
      "Do you have budget for specialized maintenance training?",
      "Are energy costs a secondary concern vs. output quality?"
    ],
    fourShaftScore: "Choose four-shaft if 3-4 questions are 'yes'",
    doubleShaftScore: "Choose double-shaft if 0-2 questions are 'yes'",
    reasoning: "Economic viability of four-shaft depends on material value premiums"
  }
];

const implementationSteps = [
  {
    phase: "Material Assessment & Testing",
    duration: "2-4 weeks",
    fourShaftTasks: [
      "Conduct material liberation testing with four-shaft samples",
      "Analyze contamination levels and separation requirements",
      "Evaluate fine processing needs and output specifications",
      "Test downstream compatibility with four-shaft output"
    ],
    doubleShaftTasks: [
      "Test primary size reduction effectiveness",
      "Evaluate throughput capacity with actual materials",
      "Assess material handling and feeding requirements",
      "Verify output sizing for downstream processing"
    ],
    outcome: "Clear understanding of processing requirements and expected performance"
  },
  {
    phase: "Economic Analysis & ROI Modeling",
    duration: "1-2 weeks",
    fourShaftTasks: [
      "Calculate material recovery value improvements",
      "Model single-pass processing cost savings",
      "Analyze premium pricing for higher quality output",
      "Evaluate reduced downstream processing costs"
    ],
    doubleShaftTasks: [
      "Calculate throughput-based revenue improvements",
      "Model reduced labor and handling costs",
      "Analyze energy and maintenance cost advantages",
      "Evaluate faster payback timeline benefits"
    ],
    outcome: "Comprehensive ROI analysis supporting technology selection"
  },
  {
    phase: "Technology Selection & Specification",
    duration: "1-3 weeks",
    fourShaftTasks: [
      "Specify multi-stage cutting configuration",
      "Design integrated screening systems",
      "Plan synchronized maintenance protocols",
      "Configure automation and control systems"
    ],
    doubleShaftTasks: [
      "Specify dual-shaft cutting configuration",
      "Design material handling and feeding systems",
      "Plan standard maintenance procedures",
      "Configure automatic reverse and protection systems"
    ],
    outcome: "Detailed equipment specification aligned with processing requirements"
  },
  {
    phase: "Implementation & Commissioning",
    duration: "4-8 weeks",
    fourShaftTasks: [
      "Install complex multi-stage system with precision alignment",
      "Commission synchronized four-shaft operation",
      "Train operators on multi-stage processing protocols",
      "Optimize liberation and separation parameters"
    ],
    doubleShaftTasks: [
      "Install dual-shaft system with standard procedures",
      "Commission high-capacity processing operation",
      "Train operators on throughput optimization",
      "Optimize cutting and material flow parameters"
    ],
    outcome: "Fully operational system achieving target performance metrics"
  }
];

const caseStudyComparisons = [
  {
    title: "E-Waste Processing Facility - Europe",
    location: "Amsterdam, Netherlands",
    materialType: "Mixed electronic waste and circuit boards",
    challenge: "Maximize precious metal recovery from complex electronic components",
    fourShaftSolution: {
      equipment: "ARZIR FS-1200 Four-Shaft Shredder",
      results: [
        "Achieved 94% material liberation vs 78% with previous double-shaft system",
        "Increased precious metal recovery by 35% through superior separation",
        "Eliminated need for secondary fine processing stages",
        "ROI achieved in 22 months despite higher initial investment"
      ],
      outcome: "Four-shaft technology justified by superior material recovery values"
    },
    doubleShaftAlternative: {
      equipment: "ARZIR DS-1500 Double-Shaft Shredder",
      projectedResults: [
        "Good primary size reduction with 78% material separation",
        "Would require additional fine processing equipment",
        "Lower initial investment but higher total system cost",
        "Longer processing chain with multiple handling stages"
      ],
      outcome: "Double-shaft would have required additional downstream equipment"
    },
    recommendation: "Four-shaft was the correct choice for this high-value material application"
  },
  {
    title: "Municipal Waste Processing Center - North America",
    location: "Phoenix, USA",
    materialType: "Mixed municipal solid waste and commercial waste",
    challenge: "Process 45 tons/hour of diverse waste materials cost-effectively",
    fourShaftSolution: {
      equipment: "ARZIR FS-2000 Four-Shaft Shredder",
      results: [
        "Achieved target capacity but at 40% higher investment cost",
        "Superior material separation improved downstream sorting by 25%",
        "Higher energy consumption reduced profitability",
        "Complex maintenance requirements increased operational costs"
      ],
      outcome: "Four-shaft over-engineered for this volume-focused application"
    },
    doubleShaftAlternative: {
      equipment: "ARZIR DS-2500 Double-Shaft Shredder",
      actualResults: [
        "Achieved 50 tons/hour capacity exceeding requirements",
        "Cost-effective processing with 18-month ROI",
        "Reliable operation with simplified maintenance",
        "Good material separation adequate for MSW processing"
      ],
      outcome: "Double-shaft provided optimal cost-performance balance"
    },
    recommendation: "Double-shaft was the better choice for high-volume, cost-focused operation"
  },
  {
    title: "Automotive Recycling Facility - Asia",
    location: "Tokyo, Japan",
    materialType: "Automotive shredder residue (ASR) and complex composites",
    challenge: "Improve material recovery from mixed automotive waste streams",
    fourShaftSolution: {
      equipment: "ARZIR FS-1600 Four-Shaft Shredder",
      results: [
        "Excellent separation of plastics, metals, and fibers in single pass",
        "Increased material recovery rates by 28% vs previous system",
        "Reduced downstream processing complexity significantly",
        "Premium material grades commanded higher market prices"
      ],
      outcome: "Four-shaft technology delivered superior results for complex ASR processing"
    },
    doubleShaftComparison: {
      previousEquipment: "Previous double-shaft system",
      previousResults: [
        "Good primary reduction but required multiple processing stages",
        "Material contamination reduced recovery values",
        "Higher labor costs due to complex processing chain",
        "Limited ability to separate bonded composite materials"
      ],
      outcome: "Double-shaft system was inadequate for complex ASR material requirements"
    },
    recommendation: "Four-shaft upgrade was essential for competitive ASR processing"
  }
];

const faqs = [
  {
    question: "What's the main difference between four-shaft and double-shaft shredders?",
    answer: "Four-shaft shredders use four synchronized rotors for multi-stage processing from coarse to fine with superior material liberation (90-95%), while double-shaft shredders use two counter-rotating shafts for high-capacity primary size reduction. Four-shaft provides better output quality, while double-shaft offers higher throughput."
  },
  {
    question: "Which technology offers better ROI for recycling operations?",
    answer: "ROI depends on your materials and goals. Double-shaft typically offers faster ROI (12-24 months) for high-volume primary processing. Four-shaft offers longer-term ROI (18-30 months) justified by superior material recovery values and single-pass processing efficiency."
  },
  {
    question: "How do I determine which technology is right for my application?",
    answer: "Consider: (1) Material complexity - four-shaft for bonded/composite materials, (2) Output requirements - four-shaft for precise sizing <50mm, (3) Capacity needs - double-shaft for >40 t/h throughput, (4) Economic factors - four-shaft if material recovery premiums justify higher investment."
  },
  {
    question: "Can I upgrade from double-shaft to four-shaft technology later?",
    answer: "While technically possible, it's typically more cost-effective to choose the right technology initially. Upgrades require significant infrastructure changes and may not achieve optimal performance. Thorough initial analysis prevents costly future modifications."
  },
  {
    question: "What maintenance differences should I expect between the technologies?",
    answer: "Four-shaft systems require synchronized maintenance of four rotors with specialized expertise, increasing complexity 25-30%. Double-shaft systems have simpler dual-rotor maintenance. However, four-shaft's superior material liberation may reduce downstream equipment maintenance needs."
  }
];

export default function FourShaftVsDoubleShaftShreddersPage() {
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
            <li><Link href="/blog?category=Buying+Guide" className="text-arzir-gray-500 hover:text-arzir-primary">Buying Guide</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li className="text-arzir-gray-900">Four-Shaft vs Double-Shaft Shredders</li>
          </ol>
        </nav>
      </Section>

      {/* Article Header */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-arzir-gray-500">
              <span className="px-3 py-1 bg-purple-600/10 text-purple-600 rounded-full font-medium">
                Buying Guide
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Published August 20, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>22 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Four-Shaft vs Double-Shaft Shredders: Which One to Choose?
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Industrial Equipment Team</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/products/four-shaft-shredder.png" 
              alt="Four-Shaft vs Double-Shaft Shredders Comparison"
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
          <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
            <h2 className="text-xl font-heading font-bold text-black mb-4">Key Decision Points</h2>
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
                      className="text-purple-600 hover:text-purple-700 transition-colors duration-200 text-sm"
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
              Choosing between four-shaft and double-shaft shredder technologies is one of the most critical 
              decisions in recycling equipment selection. Both technologies offer distinct advantages, but the 
              optimal choice depends on your specific materials, output requirements, capacity needs, and 
              economic considerations.
            </p>
          </div>

          {/* Understanding the Core Differences */}
          <section id="core-differences" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Understanding the Core Differences
            </h2>
            
            <p>
              The fundamental difference lies in their design philosophy and processing approach. 
              Four-shaft shredders prioritize material liberation and output quality through multi-stage 
              processing, while double-shaft systems focus on high-capacity primary size reduction.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                  <Layers className="h-6 w-6" />
                  Four-Shaft Technology
                </h4>
                <div className="space-y-3">
                  <p className="text-sm text-purple-700">
                    <strong>Primary Focus:</strong> Precision fine processing with superior material separation
                  </p>
                  <p className="text-sm text-purple-700">
                    <strong>Design:</strong> Four synchronized rotors with multi-stage cutting action
                  </p>
                  <p className="text-sm text-purple-700">
                    <strong>Ideal For:</strong> Complex materials requiring liberation, contaminated waste streams, 
                    high-value material recovery
                  </p>
                  <p className="text-sm text-purple-700">
                    <strong>Output:</strong> Uniform fine particles with 90-95% material separation
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                  <Scissors className="h-6 w-6" />
                  Double-Shaft Technology
                </h4>
                <div className="space-y-3">
                  <p className="text-sm text-orange-700">
                    <strong>Primary Focus:</strong> High-capacity primary size reduction and volume processing
                  </p>
                  <p className="text-sm text-orange-700">
                    <strong>Design:</strong> Two counter-rotating shafts with aggressive cutting action
                  </p>
                  <p className="text-sm text-orange-700">
                    <strong>Ideal For:</strong> Large bulky materials, high throughput requirements, 
                    primary processing stages
                  </p>
                  <p className="text-sm text-orange-700">
                    <strong>Output:</strong> Good size reduction with 75-85% material separation
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Comparison Overview */}
          <section id="technology-comparison" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Technology Comparison Overview
            </h2>
            
            <p>
              This detailed comparison examines eight critical aspects of shredder performance 
              to help you understand which technology aligns with your operational requirements:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Comparison Aspect</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-purple-600">Four-Shaft Technology</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-orange-600">Double-Shaft Technology</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-green-600">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {technologyComparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.aspect}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-purple-700 text-sm">{item.fourShaft}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-orange-700 text-sm">{item.doubleShaft}</td>
                      <td className="border border-arzir-gray-200 p-4 text-green-700 text-sm">{item.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Application-Specific Recommendations */}
          <section id="application-recommendations" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Application-Specific Recommendations
            </h2>
            <p>
              Different waste streams and processing goals favor different technologies. Here's our analysis 
              of major recycling applications:
            </p>
            
            <div className="space-y-8">
              {applicationRecommendations.map((app, index) => (
                <div key={index} className="border border-arzir-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-arzir-gray-50 p-6">
                    <h4 className="text-xl font-bold text-black mb-2">{app.application}</h4>
                    <p className="text-sm text-arzir-gray-600 mb-4">{app.material}</p>
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        app.recommendation.includes('Four-shaft') 
                          ? 'bg-purple-100 text-purple-800' 
                          : app.recommendation.includes('Double-shaft')
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {app.recommendation}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-purple-800 mb-2">Four-Shaft Advantage:</h5>
                        <p className="text-sm text-arzir-gray-600 mb-3">{app.fourShaftAdvantage}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-800 mb-2">Double-Shaft Advantage:</h5>
                        <p className="text-sm text-arzir-gray-600 mb-3">{app.doubleShaftAdvantage}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-4">
                      <p className="text-sm font-medium text-green-800">Why this recommendation:</p>
                      <p className="text-sm text-green-700 mt-1">{app.reasoning}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost and ROI Analysis */}
          <section id="cost-roi-analysis" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Cost and ROI Analysis
            </h2>
            <p>
              Understanding the total cost of ownership and return on investment is crucial for making 
              the right technology choice:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Cost Factor</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-purple-600">Four-Shaft</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-orange-600">Double-Shaft</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Differential</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {costAnalysisData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.factor}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-purple-700 text-sm">{item.fourShaft}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-orange-700 text-sm">{item.doubleShaft}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-sm font-medium">{item.differential}</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-600 text-sm">{item.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Decision Framework Guide */}
          <section id="decision-framework" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Decision Framework Guide
            </h2>
            <p>
              Use this systematic approach to evaluate which technology best fits your specific requirements:
            </p>
            
            <div className="space-y-8">
              {decisionCriteria.map((criteria, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-black mb-4">{criteria.criterion}</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-arzir-gray-700 mb-2">Assessment Questions:</h5>
                    <ul className="space-y-1">
                      {criteria.questions.map((question, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-arzir-gray-400 mt-1">•</span>
                          <span className="text-arzir-gray-600">{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-purple-50 p-4 rounded">
                      <p className="text-sm font-medium text-purple-800">{criteria.fourShaftScore}</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded">
                      <p className="text-sm font-medium text-orange-800">{criteria.doubleShaftScore}</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                    <p className="text-sm text-blue-700">{criteria.reasoning}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Real-World Case Studies */}
          <section className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Real-World Technology Comparisons
            </h2>
            <p>
              These case studies demonstrate how different applications benefit from different technologies:
            </p>
            
            <div className="space-y-8">
              {caseStudyComparisons.map((study, index) => (
                <div key={index} className="border border-arzir-gray-200 rounded-xl p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-black">{study.title}</h4>
                      <p className="text-sm text-arzir-gray-600">{study.materialType} • {study.location}</p>
                      <p className="text-sm text-arzir-gray-700 mt-2">{study.challenge}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-800 mb-2">Four-Shaft Solution:</h5>
                        <p className="text-sm text-purple-700 mb-3">{study.fourShaftSolution.equipment}</p>
                        <ul className="space-y-1">
                          {study.fourShaftSolution.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                              <span className="text-purple-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-orange-800 mb-2">
                          {study.doubleShaftAlternative ? 'Double-Shaft Alternative:' : 'Previous Double-Shaft:'}
                        </h5>
                        <p className="text-sm text-orange-700 mb-3">
                          {study.doubleShaftAlternative?.equipment || study.doubleShaftComparison?.previousEquipment}
                        </p>
                        <ul className="space-y-1">
                          {(study.doubleShaftAlternative?.projectedResults || study.doubleShaftComparison?.previousResults || []).map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-orange-400 mt-1">•</span>
                              <span className="text-orange-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <p className="text-sm font-bold text-green-800">Conclusion:</p>
                      <p className="text-sm text-green-700 mt-1">{study.recommendation}</p>
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
            Need Help Choosing the Right Shredder Technology?
          </h2>
          <p className="text-xl text-arzir-gray-600">
            Our experts can analyze your specific materials and requirements to recommend the optimal shredder technology for your operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="shredder_comparison_blog">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Technology Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products/four-shaft-shredder">
                View Four-Shaft Shredders
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
              href="/blog/double-shaft-shredders-enhance-recycling-efficiency"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Double-Shaft Efficiency Benefits</div>
              </div>
            </Link>
            <Link 
              href="/blog/four-shaft-shredders-improve-ewaste-recycling-efficiency"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Four-Shaft E-Waste Processing</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}