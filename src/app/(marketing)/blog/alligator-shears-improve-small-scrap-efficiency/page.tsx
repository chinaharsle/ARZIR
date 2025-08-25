import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, Scissors, Factory, Zap, Settings, TrendingUp, Shield, DollarSign, Timer, Truck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Alligator Shears Improve Efficiency in Small Scrap Cutting | ARZIR Blog",
  description: "Discover how alligator shear technology enhances processing efficiency for small and medium scrap materials. Compact design, powerful cutting, and cost-effective solutions.",
  keywords: [
    "alligator shears improve efficiency",
    "small scrap cutting efficiency",
    "alligator shear technology",
    "compact scrap processing",
    "small metal cutting machine",
    "scrap recycling efficiency",
    "portable metal cutting",
    "rebar cutting efficiency"
  ],
  openGraph: {
    title: "How Alligator Shears Improve Efficiency in Small Scrap Cutting",
    description: "Learn how compact alligator shear technology enhances processing efficiency for small and medium materials in recycling operations.",
    images: [
      {
        url: "/images/blog/How Alligator Shears Improve Efficiency in Small Scrap Cutting.png",
        width: 1200,
        height: 630,
        alt: "Alligator Shears Improve Small Scrap Cutting Efficiency - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "The Small Scrap Processing Challenge", anchor: "processing-challenge" },
  { title: "How Alligator Shears Enhance Efficiency", anchor: "efficiency-solutions" },
  { title: "Quantified Efficiency Improvements", anchor: "efficiency-metrics" },
  { title: "Technology Features for Small Materials", anchor: "technology-features" },
  { title: "Application-Specific Efficiency Gains", anchor: "application-efficiency" },
  { title: "Implementation and Best Practices", anchor: "best-practices" }
];

const keyTakeaways = [
  "Alligator shears increase small scrap processing speed by 20-60x compared to manual methods",
  "Compact design enables efficient processing in space-constrained recycling facilities",
  "Processing costs reduce by 60-80% through automation and reduced labor requirements",
  "Safety improvements eliminate risks associated with manual cutting operations",
  "Material handling efficiency improves through quick positioning and cutting cycles"
];

const efficiencyProblems = [
  {
    problem: "Manual Cutting Inefficiency",
    traditional: "Hand tools require 10-30 minutes per piece",
    alligatorImpact: "3-8 second hydraulic cutting cycle",
    improvement: "100-600x faster processing",
    icon: Timer
  },
  {
    problem: "Labor-Intensive Operations",
    traditional: "Multiple workers needed for cutting tasks",
    alligatorImpact: "Single operator can handle all cutting",
    improvement: "70-80% labor reduction",
    icon: Factory
  },
  {
    problem: "Safety and Risk Issues",
    traditional: "High injury risk with manual tools",
    alligatorImpact: "Safe foot pedal control from distance",
    improvement: "Virtually eliminates cutting injuries",
    icon: Shield
  },
  {
    problem: "Inconsistent Cut Quality",
    traditional: "Variable manual cutting results",
    alligatorImpact: "Precise hydraulic cuts every time",
    improvement: "Superior consistency and quality",
    icon: CheckCircle
  },
  {
    problem: "Processing Bottlenecks",
    traditional: "Cutting becomes facility bottleneck",
    alligatorImpact: "Fast cutting keeps pace with intake",
    improvement: "Eliminates processing bottlenecks",
    icon: TrendingUp
  },
  {
    problem: "High Operational Costs",
    traditional: "Labor costs dominate processing expenses",
    alligatorImpact: "Automated operation reduces costs",
    improvement: "60-80% operational cost reduction",
    icon: DollarSign
  }
];

const efficiencyMetrics = [
  {
    metric: "Processing Speed",
    baseline: "2-5 pieces/hour",
    withAlligator: "150-300 pieces/hour",
    improvement: "30-150x faster",
    impact: "Dramatic throughput increase"
  },
  {
    metric: "Labor Productivity",
    baseline: "1-3 tons per operator/day",
    withAlligator: "15-40 tons per operator/day",
    improvement: "5-40x productivity",
    impact: "Massive labor efficiency gains"
  },
  {
    metric: "Processing Costs",
    baseline: "$40-80 per ton processed",
    withAlligator: "$8-25 per ton processed",
    improvement: "50-80% cost reduction",
    impact: "Significant cost savings"
  },
  {
    metric: "Material Handling",
    baseline: "Complex setup and positioning",
    withAlligator: "Simple load and cut operation",
    improvement: "75% handling time reduction",
    impact: "Streamlined workflow"
  },
  {
    metric: "Quality Consistency",
    baseline: "60-80% acceptable cuts",
    withAlligator: "95-98% precise cuts",
    improvement: "20-40% quality improvement",
    impact: "Better downstream processing"
  },
  {
    metric: "Operational Safety",
    baseline: "High injury risk operations",
    withAlligator: "Safe automated operation",
    improvement: "90% injury risk reduction",
    impact: "Safer work environment"
  }
];

const technologyFeatures = [
  {
    feature: "Compact Hydraulic System",
    description: "100-400T cutting force in a compact footprint perfect for small facility spaces and portable applications",
    efficiencyBenefit: "Fits in constrained spaces while delivering powerful cutting performance",
    icon: Zap
  },
  {
    feature: "Quick Material Positioning",
    description: "Open jaw design allows fast material loading and positioning without complex setup procedures",
    efficiencyBenefit: "Reduces handling time and enables continuous processing workflow",
    icon: Timer
  },
  {
    feature: "Automated Cutting Cycle",
    description: "Foot pedal control activates cutting cycle with automatic blade return for next operation",
    efficiencyBenefit: "Single operator can process materials efficiently without manual blade operation",
    icon: Settings
  },
  {
    feature: "Versatile Material Handling",
    description: "Handles various small materials including rebar, pipes, angles, and mixed scrap up to 120mm",
    efficiencyBenefit: "Single machine processes diverse material types efficiently",
    icon: Scissors
  },
  {
    feature: "Portable Design Options",
    description: "Semi-mobile and portable configurations enable efficient processing at multiple locations",
    efficiencyBenefit: "Bring processing capability to material locations, reduce transport costs",
    icon: Truck
  },
  {
    feature: "Simple Operation Interface",
    description: "Intuitive controls require minimal training and enable operators to achieve efficiency quickly",
    efficiencyBenefit: "Fast operator training and immediate productivity improvements",
    icon: Factory
  }
];

const applicationEfficiency = [
  {
    application: "Scrap Steel Recycling Centers",
    materials: ["Mixed ferrous scrap", "Steel pieces", "Copper pipes", "Aluminum sections"],
    baselineEfficiency: "Manual cutting: 2-5 tons/day",
    alligatorEfficiency: "Hydraulic cutting: 20-40 tons/day",
    keyBenefits: [
      "Process varied materials without tool changes",
      "Eliminate sorting requirements for cutting",
      "Fast processing maintains material flow",
      "Reduced labor costs improve profitability"
    ],
    roiTimeframe: "6-12 months"
  },
  {
    application: "Rebar Processing Facilities", 
    materials: ["Construction rebar", "Steel rods", "Reinforcement bars", "Round steel"],
    baselineEfficiency: "Manual cutting: 50-100 pieces/day",
    alligatorEfficiency: "Hydraulic cutting: 400-800 pieces/day",
    keyBenefits: [
      "Consistent length cutting for specifications",
      "Clean cuts improve material quality",
      "Safe operation reduces worker injuries",
      "High-speed processing meets demand"
    ],
    roiTimeframe: "8-15 months"
  },
  {
    application: "Metal Fabrication Shops",
    materials: ["Steel pipes", "Metal profiles", "Small structures", "Fabricated parts"],
    baselineEfficiency: "Manual cutting: 1-3 tons/day",
    alligatorEfficiency: "Hydraulic cutting: 10-25 tons/day",
    keyBenefits: [
      "Precise cuts for fabrication quality",
      "Eliminate cutting preparation time",
      "Process various profile shapes efficiently",
      "Improve overall shop productivity"
    ],
    roiTimeframe: "10-18 months"
  },
  {
    application: "Construction Demolition Sites",
    materials: ["Building steel", "Demolished structures", "Site cleanup materials", "Construction debris"],
    baselineEfficiency: "Manual cutting: 5-15 pieces/hour",
    alligatorEfficiency: "Hydraulic cutting: 100-200 pieces/hour",
    keyBenefits: [
      "On-site processing reduces transport",
      "Portable units move between locations",
      "Fast processing accelerates site cleanup",
      "Safe operation in construction environments"
    ],
    roiTimeframe: "12-20 months"
  }
];

const implementationSteps = [
  {
    phase: "Efficiency Assessment",
    duration: "1-2 weeks",
    activities: [
      "Analyze current small scrap processing methods and bottlenecks",
      "Measure baseline processing speeds, costs, and labor requirements",
      "Identify specific material types and volume requirements",
      "Calculate potential efficiency improvements and ROI projections"
    ],
    outcome: "Clear understanding of efficiency improvement opportunities"
  },
  {
    phase: "System Selection & Installation",
    duration: "2-4 weeks",
    activities: [
      "Select appropriate alligator shear model for material requirements",
      "Prepare installation site with utilities and foundation",
      "Install and commission alligator shear system",
      "Integrate with existing material handling processes"
    ],
    outcome: "Fully operational alligator shear system ready for production"
  },
  {
    phase: "Training & Optimization",
    duration: "1-2 weeks",
    activities: [
      "Train operators on efficient operation techniques",
      "Optimize cutting procedures for maximum throughput",
      "Establish maintenance routines for sustained efficiency",
      "Monitor performance and fine-tune operations"
    ],
    outcome: "Operators achieving target efficiency levels with optimized procedures"
  },
  {
    phase: "Continuous Improvement",
    duration: "Ongoing",
    activities: [
      "Monitor efficiency metrics and identify improvement opportunities",
      "Implement process improvements and best practices",
      "Track ROI achievement and cost savings",
      "Plan for capacity expansion as volumes grow"
    ],
    outcome: "Sustained efficiency improvements and continued optimization"
  }
];

const bestPractices = [
  {
    category: "Material Preparation",
    practices: [
      "Pre-sort materials by size for optimal processing flow",
      "Remove non-metallic attachments before cutting",
      "Stage materials for easy alligator shear access",
      "Maintain clear cutting area for safety and efficiency"
    ]
  },
  {
    category: "Operational Efficiency",
    practices: [
      "Train multiple operators to prevent bottlenecks",
      "Implement preventive maintenance schedules",
      "Monitor cutting blade condition for optimal performance",
      "Track processing metrics to identify improvements"
    ]
  },
  {
    category: "Workflow Optimization",
    practices: [
      "Coordinate cutting with upstream material delivery",
      "Plan cutting sequence for maximum throughput",
      "Integrate with downstream processing equipment",
      "Minimize material handling between operations"
    ]
  },
  {
    category: "Safety & Quality",
    practices: [
      "Maintain strict safety protocols and training",
      "Inspect cut quality regularly for consistency",
      "Ensure proper hydraulic system maintenance",
      "Document procedures for operator consistency"
    ]
  }
];

const caseStudies = [
  {
    title: "Small Rebar Processing Company - Thailand",
    location: "Bangkok, Thailand",
    operation: "Construction rebar cutting and processing",
    challenge: "Manual cutting was limiting daily capacity to 50-80 pieces with high labor costs and safety risks",
    solution: "ARZIR AS-100 Alligator Shear for efficient rebar processing",
    results: [
      "Processing capacity increased from 80 to 500 pieces per day",
      "Labor requirements reduced from 3 operators to 1 operator",
      "Processing costs decreased by 70% per piece",
      "Eliminated cutting-related safety incidents",
      "Improved cut quality and consistency for customers"
    ],
    timeframe: "10-month ROI achievement",
    testimonial: "The alligator shear transformed our small operation from labor-intensive to highly efficient processing.",
    efficiency: "6x productivity improvement"
  },
  {
    title: "Mixed Scrap Recycling Center - Mexico",
    location: "Guadalajara, Mexico", 
    operation: "Small-scale mixed metal recycling operation",
    challenge: "Processing diverse small scrap materials was creating bottlenecks and limiting facility throughput",
    solution: "ARZIR AS-200 Alligator Shear for versatile material processing",
    results: [
      "Daily processing increased from 3 to 25 tons of mixed materials",
      "Processing time per ton reduced from 4 hours to 30 minutes",
      "Facility efficiency improved by 400% overall",
      "Eliminated need for multiple cutting tools and methods",
      "Reduced operational costs by 65% through automation"
    ],
    timeframe: "8-month payback period",
    testimonial: "One machine replaced our entire manual cutting operation with far superior efficiency.",
    efficiency: "8x throughput improvement"
  },
  {
    title: "Metal Fabrication Shop - Germany",
    location: "Stuttgart, Germany",
    operation: "Small metal fabrication and processing",
    challenge: "Manual pipe and profile cutting was limiting production capacity and affecting delivery schedules",
    solution: "ARZIR AS-150 Alligator Shear for precise fabrication cutting",
    results: [
      "Cutting capacity increased from 20 to 180 pieces per day",
      "Cut quality improved significantly for downstream processing",
      "Production bottlenecks eliminated in cutting operations",
      "Labor productivity increased by 500% in cutting tasks",
      "Customer satisfaction improved through faster delivery"
    ],
    timeframe: "14-month ROI achievement",
    testimonial: "The precision and speed of the alligator shear revolutionized our fabrication workflow.",
    efficiency: "9x processing speed improvement"
  }
];

const faqs = [
  {
    question: "How much can alligator shears improve our small scrap processing efficiency?",
    answer: "Alligator shears typically improve small scrap processing efficiency by 300-800% through automated cutting, reduced labor requirements, and faster processing cycles. Specific improvements depend on your current methods, material types, and processing volumes."
  },
  {
    question: "What's the typical ROI timeline for efficiency improvements from alligator shears?",
    answer: "Most small scrap operations achieve ROI within 6-18 months through efficiency gains. Processing cost reductions of 60-80% and productivity improvements of 5-40x contribute to rapid payback periods, especially for operations with high labor costs."
  },
  {
    question: "Can alligator shears handle our diverse mix of small scrap materials?",
    answer: "Yes, alligator shears excel at processing diverse small materials including rebar, pipes, angles, copper, aluminum, and mixed scrap up to 120mm diameter. This versatility eliminates the need for multiple cutting tools and improves overall facility efficiency."
  },
  {
    question: "How do alligator shears compare to other efficiency improvement options for small scrap?",
    answer: "For small scrap materials, alligator shears typically provide the highest efficiency improvement per dollar invested. While shredders may handle higher volumes, alligator shears offer superior efficiency for materials under 120mm diameter with much lower capital investment."
  },
  {
    question: "What maintenance is required to maintain peak efficiency with alligator shears?",
    answer: "Maintaining peak efficiency requires daily hydraulic checks, weekly blade condition inspection, and monthly lubrication service. Proper maintenance ensures 95%+ uptime and sustained efficiency improvements throughout the equipment's 15-20 year operational life."
  }
];

export default function AlligatorShearsImproveSmallScrapEfficiencyPage() {
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
            <li><Link href="/blog?category=Recycling+Technology" className="text-arzir-gray-500 hover:text-arzir-primary">Recycling Technology</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li className="text-arzir-gray-900">How Alligator Shears Improve Efficiency in Small Scrap Cutting</li>
          </ol>
        </nav>
      </Section>

      {/* Article Header */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-arzir-gray-500">
              <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full font-medium">
                Recycling Technology
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
              How Alligator Shears Improve Efficiency in Small Scrap Cutting
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Equipment Specialists</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/blog/How Alligator Shears Improve Efficiency in Small Scrap Cutting.png" 
              alt="Alligator Shears Improve Small Scrap Cutting Efficiency"
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
            <h2 className="text-xl font-heading font-bold text-black mb-4">Key Efficiency Improvements</h2>
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
              Small scrap material processing represents a significant challenge in recycling operations, 
              where traditional manual methods create bottlenecks and limit facility efficiency. 
              Alligator shear technology provides a transformative solution that dramatically improves 
              processing speed, reduces labor costs, and enhances safety for small and medium scrap materials.
            </p>
          </div>

          {/* The Small Scrap Processing Challenge */}
          <section id="processing-challenge" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              The Small Scrap Processing Challenge
            </h2>
            
            <p>
              Processing small scrap materials efficiently poses unique challenges that differentiate it from 
              large-scale heavy scrap operations. These materials, typically including rebar, pipes, small 
              structural elements, and mixed metals under 120mm diameter, require specialized approaches 
              to achieve optimal efficiency.
            </p>

            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
              <h4 className="font-semibold text-red-800 mb-3">Common Small Scrap Processing Challenges:</h4>
              <ul className="space-y-2 text-red-700">
                <li><strong>Labor-Intensive Methods:</strong> Manual cutting dominates small scrap processing</li>
                <li><strong>Safety Risks:</strong> Hand tools and flame cutting create injury hazards</li>
                <li><strong>Processing Bottlenecks:</strong> Cutting becomes the limiting factor in facility throughput</li>
                <li><strong>High Operational Costs:</strong> Labor costs consume 60-80% of processing expenses</li>
                <li><strong>Quality Inconsistency:</strong> Manual methods produce variable cut quality</li>
                <li><strong>Space Constraints:</strong> Large equipment unsuitable for small facility spaces</li>
              </ul>
            </div>

            <p>
              These challenges create a significant opportunity for efficiency improvements through targeted 
              technology solutions designed specifically for small scrap processing requirements.
            </p>
          </section>

          {/* How Alligator Shears Enhance Efficiency */}
          <section id="efficiency-solutions" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              How Alligator Shears Enhance Efficiency
            </h2>
            
            <p>
              Alligator shears specifically address each major small scrap processing challenge through 
              compact hydraulic technology designed for maximum efficiency in constrained spaces:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {efficiencyProblems.map((problem, index) => (
                <div key={index} className="border border-arzir-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-arzir-gray-50 p-4">
                    <div className="flex items-center gap-3">
                      <problem.icon className="h-6 w-6 text-arzir-primary" />
                      <h4 className="font-bold text-black">{problem.problem}</h4>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-sm font-medium text-red-600 mb-1">Traditional Method:</p>
                      <p className="text-sm text-arzir-gray-600">{problem.traditional}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-600 mb-1">Alligator Shear Solution:</p>
                      <p className="text-sm text-arzir-gray-600">{problem.alligatorImpact}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-bold text-green-800">Improvement: {problem.improvement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quantified Efficiency Improvements */}
          <section id="efficiency-metrics" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Quantified Efficiency Improvements
            </h2>
            <p>
              The efficiency improvements from alligator shear implementation in small scrap operations 
              can be precisely measured across multiple performance indicators:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Efficiency Metric</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Baseline</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">With Alligator Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Improvement</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {efficiencyMetrics.map((metric, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{metric.metric}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-red-600">{metric.baseline}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-green-600">{metric.withAlligator}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center font-bold text-blue-600">{metric.improvement}</td>
                      <td className="border border-arzir-gray-200 p-4 text-sm text-arzir-gray-600">{metric.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-3">Small Scrap Efficiency ROI Impact:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-700">
                <div>
                  <p className="font-bold">Throughput Increase</p>
                  <p className="text-sm">5-40x processing capacity improvement drives revenue growth</p>
                </div>
                <div>
                  <p className="font-bold">Cost Reduction</p>
                  <p className="text-sm">60-80% processing cost reduction through labor automation</p>
                </div>
                <div>
                  <p className="font-bold">Payback Period</p>
                  <p className="text-sm">6-18 month ROI through efficiency improvements</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Features for Small Materials */}
          <section id="technology-features" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Technology Features Designed for Small Materials
            </h2>
            <p>
              Alligator shear technology incorporates specific design features that optimize efficiency 
              for small and medium scrap processing:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {technologyFeatures.map((feature, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-arzir-primary" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-black">{feature.feature}</h4>
                      <p className="text-sm text-arzir-gray-600">{feature.description}</p>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-sm font-medium text-green-800">Efficiency Benefit:</p>
                        <p className="text-sm text-green-700">{feature.efficiencyBenefit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application-Specific Efficiency Gains */}
          <section id="application-efficiency" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Application-Specific Efficiency Gains
            </h2>
            <p>
              Different small scrap applications achieve specific efficiency improvements through 
              alligator shear technology implementation:
            </p>
            
            <div className="space-y-8">
              {applicationEfficiency.map((app, index) => (
                <div key={index} className="border border-arzir-gray-200 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-black">{app.application}</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {app.materials.map((material, i) => (
                            <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-sm">
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        ROI: {app.roiTimeframe}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-red-800 mb-2">Baseline Efficiency:</h5>
                          <p className="text-sm text-red-700">{app.baselineEfficiency}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-2">Alligator Shear Efficiency:</h5>
                          <p className="text-sm text-green-700">{app.alligatorEfficiency}</p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-black mb-2">Key Efficiency Benefits:</h5>
                        <ul className="space-y-1">
                          {app.keyBenefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                              <span className="text-arzir-gray-600">{benefit}</span>
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

          {/* Implementation and Best Practices */}
          <section id="best-practices" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Implementation and Best Practices for Maximum Efficiency
            </h2>
            <p>
              Achieving maximum efficiency improvements requires proper implementation planning 
              and operational best practices:
            </p>
            
            {/* Implementation Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-black">Implementation Roadmap</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="border border-arzir-gray-200 rounded-xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-black">{step.phase}</h4>
                          <p className="text-sm text-arzir-gray-600">{step.duration}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-1">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-arzir-gray-600">{activity}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-sm font-medium text-green-800">Expected Outcome:</p>
                        <p className="text-sm text-green-700">{step.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Practices by Category */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-black">Operational Best Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bestPractices.map((category, index) => (
                  <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-black mb-3">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.practices.map((practice, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-arzir-gray-600">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Real-World Case Studies */}
          <section className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Real-World Efficiency Case Studies
            </h2>
            <p>
              These real implementations demonstrate the concrete efficiency improvements achievable 
              with alligator shear technology for small scrap processing:
            </p>
            
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="border border-arzir-gray-200 rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-black">{study.title}</h4>
                        <p className="text-sm text-arzir-gray-600">{study.operation} • {study.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium block">
                          {study.timeframe}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mt-2 block">
                          {study.efficiency}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-black mb-2">Challenge:</h5>
                        <p className="text-sm text-arzir-gray-600 mb-4">{study.challenge}</p>
                        <h5 className="font-semibold text-black mb-2">Solution:</h5>
                        <p className="text-sm text-arzir-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-black mb-2">Efficiency Results:</h5>
                        <ul className="space-y-1">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                              <span className="text-arzir-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <p className="text-blue-700 italic">&quot;{study.testimonial}&quot;</p>
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
            Transform Your Small Scrap Processing Efficiency
          </h2>
          <p className="text-xl text-arzir-gray-600">
            Discover how alligator shear technology can dramatically improve your small scrap processing efficiency and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="alligator_shears_efficiency_blog">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Efficiency Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products/alligator-shear">
                View Alligator Shear Solutions
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
              href="/blog/alligator-shear-vs-other-scrap-shears"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Alligator Shear vs Other Shears</div>
              </div>
            </Link>
            <Link 
              href="/blog/small-scrap-processing-best-practices"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Small Scrap Best Practices</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}