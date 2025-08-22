import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, TrendingUp, Zap, Shield, Timer, Factory, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Gantry Shears Improve Scrap Metal Recycling Efficiency | ARZIR Blog",
  description: "Discover how gantry shear technology enhances processing efficiency for large-scale scrap metal recycling operations. Cutting force, throughput, and cost benefits explained.",
  keywords: [
    "gantry shears improve recycling efficiency",
    "scrap metal recycling efficiency",
    "gantry shear technology",
    "heavy scrap processing efficiency",
    "recycling operation optimization",
    "scrap metal cutting machine",
    "industrial recycling efficiency",
    "large-scale scrap processing"
  ],
  openGraph: {
    title: "How Gantry Shears Improve Scrap Metal Recycling Efficiency",
    description: "Learn how heavy-duty gantry shear technology enhances processing efficiency and profitability for large-scale scrap metal recycling operations.",
    images: [
      {
        url: "/images/blog/gantry-shears-improve-efficiency.jpg",
        width: 1200,
        height: 630,
        alt: "Gantry Shears Improve Recycling Efficiency - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "The Efficiency Challenge in Scrap Recycling", anchor: "efficiency-challenge" },
  { title: "How Gantry Shears Solve Efficiency Problems", anchor: "gantry-solutions" },
  { title: "Quantified Efficiency Improvements", anchor: "efficiency-metrics" },
  { title: "Technology Features That Drive Efficiency", anchor: "technology-features" },
  { title: "Real-World Efficiency Case Studies", anchor: "case-studies" },
  { title: "Implementation Best Practices", anchor: "best-practices" }
];

const keyTakeaways = [
  "Gantry shears increase processing capacity by 3-5x compared to traditional cutting methods",
  "Material cutting efficiency improves by 60-80% through high-tonnage hydraulic systems",
  "Labor productivity increases by 200-400% with automated gantry shear operations",
  "Processing costs reduce by 25-40% through improved throughput and reduced handling",
  "Dense cutting capability enables processing of previously unhandleable thick materials"
];

const efficiencyProblems = [
  {
    problem: "Slow Manual Cutting Methods",
    traditional: "5-15 tons/hour with flame cutting",
    gantryImpact: "150-220 tons/hour processing",
    improvement: "10-40x faster processing",
    icon: Timer
  },
  {
    problem: "Limited Material Thickness Handling",
    traditional: "Difficulty with materials over 100mm",
    gantryImpact: "Easily handles up to 300mm thickness",
    improvement: "3x thicker material capability",
    icon: Shield
  },
  {
    problem: "High Labor Requirements",
    traditional: "3-5 operators for manual operations",
    gantryImpact: "1-2 operators for automated system",
    improvement: "60-80% labor reduction",
    icon: Factory
  },
  {
    problem: "Inconsistent Cut Quality",
    traditional: "Irregular flame cutting results",
    gantryImpact: "Precise, clean hydraulic cuts",
    improvement: "Superior cut quality and consistency",
    icon: CheckCircle
  },
  {
    problem: "Safety and Risk Issues",
    traditional: "High-risk manual operations",
    gantryImpact: "Automated operation from safe distance",
    improvement: "Dramatically improved safety",
    icon: Shield
  },
  {
    problem: "Energy Inefficiency",
    traditional: "High fuel consumption for flame cutting",
    gantryImpact: "Efficient hydraulic system operation",
    improvement: "25-40% energy savings",
    icon: Zap
  }
];

const efficiencyMetrics = [
  {
    metric: "Processing Throughput",
    baseline: "5-15 tons/hour",
    withGantry: "150-220 tons/hour",
    improvement: "10-40x increase",
    impact: "Dramatic capacity expansion"
  },
  {
    metric: "Material Utilization",
    baseline: "70-80% material recovery",
    withGantry: "90-95% material recovery",
    improvement: "15-25% improvement",
    impact: "Higher material value capture"
  },
  {
    metric: "Operational Efficiency",
    baseline: "40-60% equipment utilization",
    withGantry: "80-95% equipment utilization",
    improvement: "40-55% improvement",
    impact: "Better asset utilization"
  },
  {
    metric: "Labor Productivity",
    baseline: "2-5 tons per operator/hour",
    withGantry: "75-110 tons per operator/hour",
    improvement: "15-55x improvement",
    impact: "Massive productivity gains"
  },
  {
    metric: "Processing Costs",
    baseline: "$25-45 per ton processed",
    withGantry: "$12-25 per ton processed",
    improvement: "40-50% cost reduction",
    impact: "Significant cost savings"
  },
  {
    metric: "Energy Efficiency",
    baseline: "High fuel consumption",
    withGantry: "Efficient hydraulic operation",
    improvement: "25-40% energy savings",
    impact: "Lower operational costs"
  }
];

const technologyFeatures = [
  {
    feature: "High-Tonnage Hydraulic System",
    description: "800-2000T cutting force enables processing of thick, heavy materials that traditional methods cannot handle efficiently",
    efficiencyBenefit: "Process previously unhandleable materials, eliminate pre-processing steps",
    icon: Zap
  },
  {
    feature: "Automated Control Systems",
    description: "Advanced automation reduces manual intervention, improves cutting precision, and enables continuous operation",
    efficiencyBenefit: "Reduce labor requirements, improve consistency, enable 24/7 operation",
    icon: Settings
  },
  {
    feature: "Optimized Cutting Chamber Design",
    description: "Large cutting chambers accommodate various material sizes and shapes, reducing material preparation time",
    efficiencyBenefit: "Process mixed materials efficiently, reduce handling and preparation",
    icon: Factory
  },
  {
    feature: "Rapid Cycle Times",
    description: "30-60 second cutting cycles with efficient hydraulic systems maximize hourly processing capacity",
    efficiencyBenefit: "Maximize throughput, reduce processing bottlenecks",
    icon: Timer
  },
  {
    feature: "Continuous Operation Capability",
    description: "Robust design enables continuous operation with minimal downtime for maintenance or repairs",
    efficiencyBenefit: "Maintain consistent processing flow, maximize equipment availability",
    icon: TrendingUp
  },
  {
    feature: "Precision Material Positioning",
    description: "Advanced positioning systems ensure optimal cutting alignment for maximum material utilization",
    efficiencyBenefit: "Minimize material waste, optimize cut quality and size",
    icon: CheckCircle
  }
];

const implementationSteps = [
  {
    phase: "Assessment & Planning",
    duration: "2-4 weeks",
    activities: [
      "Analyze current processing bottlenecks and inefficiencies",
      "Evaluate material types, volumes, and thickness requirements", 
      "Assess site infrastructure and foundation requirements",
      "Calculate ROI and efficiency improvement projections"
    ],
    outcome: "Clear implementation roadmap with efficiency targets"
  },
  {
    phase: "Installation & Commissioning",
    duration: "4-8 weeks",
    activities: [
      "Foundation preparation and utility connections",
      "Gantry shear installation and system integration",
      "Control system setup and safety system testing",
      "Performance testing and efficiency validation"
    ],
    outcome: "Fully operational gantry shear system"
  },
  {
    phase: "Training & Optimization",
    duration: "2-4 weeks",
    activities: [
      "Operator training on efficient operation procedures",
      "Maintenance team training for system upkeep",
      "Process optimization for maximum efficiency",
      "Performance monitoring and fine-tuning"
    ],
    outcome: "Optimized operations achieving target efficiency levels"
  },
  {
    phase: "Performance Monitoring",
    duration: "Ongoing",
    activities: [
      "Track throughput, cost per ton, and efficiency metrics",
      "Identify opportunities for further optimization",
      "Implement continuous improvement processes",
      "Regular maintenance and system upgrades"
    ],
    outcome: "Sustained efficiency improvements and performance optimization"
  }
];

const caseStudies = [
  {
    title: "European Steel Mill - Germany",
    operation: "Large steel production facility",
    challenge: "Processing 500+ tons/day of mill scale and heavy returns with traditional flame cutting",
    solution: "ARZIR GS-1600 Gantry Shear installation",
    results: [
      "Processing capacity increased from 45 to 180 tons/hour",
      "Labor requirements reduced from 6 to 2 operators per shift",
      "Processing costs decreased by 45% per ton",
      "Material recovery improved by 20% through precise cutting",
      "Energy consumption reduced by 35% vs flame cutting"
    ],
    timeframe: "18-month ROI achievement",
    quote: "The gantry shear transformed our scrap processing operation, delivering efficiency improvements we never thought possible.",
    location: "Düsseldorf, Germany"
  },
  {
    title: "Shipyard Recycling Facility - Netherlands",
    operation: "Maritime vessel dismantling and recycling",
    challenge: "Processing heavy ship hull sections and marine steel structures efficiently",
    solution: "ARZIR GS-2000 Gantry Shear for maximum cutting force",
    results: [
      "Processing thick ship hull steel up to 300mm thickness",
      "Throughput increased from 25 to 200 tons/hour",
      "Eliminated dangerous flame cutting operations",
      "Reduced processing time per vessel by 60%",
      "Improved worker safety and operational efficiency"
    ],
    timeframe: "12-month payback period",
    quote: "The ability to process thick marine steel efficiently revolutionized our shipbreaking operations.",
    location: "Rotterdam, Netherlands"
  },
  {
    title: "Scrap Processing Center - USA",
    operation: "Large-scale mixed scrap metal recycling",
    challenge: "Handling diverse heavy scrap materials with inconsistent processing efficiency",
    solution: "ARZIR GS-1200 Gantry Shear with automated controls",
    results: [
      "24/7 continuous operation processing 150 tons/hour",
      "Mixed material processing efficiency improved by 70%",
      "Operating costs reduced by 40% compared to previous methods",
      "Improved material preparation for downstream processing",
      "Enhanced overall facility throughput and profitability"
    ],
    timeframe: "15-month ROI achievement",
    quote: "The gantry shear became the cornerstone of our efficiency improvements across the entire operation.",
    location: "Detroit, USA"
  }
];

const bestPractices = [
  {
    category: "Material Flow Optimization",
    practices: [
      "Design efficient material loading and removal systems",
      "Implement sorting and pre-positioning for optimal processing",
      "Coordinate with upstream and downstream processes",
      "Maintain consistent material feed to maximize throughput"
    ]
  },
  {
    category: "Operational Excellence",
    practices: [
      "Train operators on efficiency-maximizing techniques",
      "Implement preventive maintenance schedules",
      "Monitor and track key efficiency metrics",
      "Continuously optimize cutting parameters and procedures"
    ]
  },
  {
    category: "Technology Integration",
    practices: [
      "Integrate with existing facility management systems",
      "Implement automated monitoring and reporting",
      "Use data analytics for performance optimization",
      "Plan for future technology upgrades and expansions"
    ]
  },
  {
    category: "Safety & Compliance",
    practices: [
      "Maintain rigorous safety protocols and training",
      "Ensure compliance with environmental regulations",
      "Implement quality control for processed materials",
      "Regular safety audits and system inspections"
    ]
  }
];

const faqs = [
  {
    question: "How much can gantry shears improve our recycling facility's overall efficiency?",
    answer: "Gantry shears typically improve overall facility efficiency by 40-80% through increased throughput (10-40x), reduced labor requirements (60-80%), and improved material recovery (15-25%). The exact improvement depends on your current processes, material types, and operational constraints."
  },
  {
    question: "What's the typical payback period for gantry shear efficiency improvements?",
    answer: "Most operations achieve ROI within 12-24 months through efficiency gains. High-volume operations processing thick materials often see payback in 12-18 months, while smaller operations may require 18-24 months depending on material volumes and processing requirements."
  },
  {
    question: "Can gantry shears integrate with our existing recycling processes?",
    answer: "Yes, gantry shears are designed to integrate seamlessly with existing recycling workflows. They can process materials from various upstream sources and prepare them for downstream processing like shredding, sorting, or melting operations, often improving overall facility efficiency."
  },
  {
    question: "How do gantry shears compare to other efficiency improvement options?",
    answer: "Gantry shears often provide the highest efficiency improvement per dollar invested for operations processing thick or heavy materials. While other equipment like shredders or balers may offer efficiency gains, gantry shears excel specifically in handling materials that other equipment cannot process effectively."
  },
  {
    question: "What maintenance is required to maintain peak efficiency?",
    answer: "Maintaining peak efficiency requires daily hydraulic system checks, monthly blade and seal inspections, and annual major service. Proper maintenance ensures 90-95% uptime and sustained efficiency levels throughout the equipment's 15-20 year lifespan."
  }
];

export default function GantryShearsImproveRecyclingEfficiencyPage() {
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
            <li className="text-arzir-gray-900">How Gantry Shears Improve Scrap Metal Recycling Efficiency</li>
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
                <span>15 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              How Gantry Shears Improve Scrap Metal Recycling Efficiency
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Recycling Technology Team</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/products/gantry-shear.png" 
              alt="Gantry Shears Improve Scrap Metal Recycling Efficiency"
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
              In today&apos;s competitive scrap metal recycling industry, operational efficiency directly impacts 
              profitability and sustainability. Gantry shear technology represents a transformative solution 
              that dramatically improves processing efficiency through advanced hydraulic cutting capabilities, 
              automated operations, and superior material handling for heavy scrap processing.
            </p>
          </div>

          {/* The Efficiency Challenge in Scrap Recycling */}
          <section id="efficiency-challenge" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              The Efficiency Challenge in Scrap Recycling
            </h2>
            
            <p>
              Traditional scrap metal processing methods face significant efficiency limitations that impact 
              throughput, costs, and profitability. Manual cutting methods, limited material handling capabilities, 
              and inconsistent processing quality create bottlenecks that prevent operations from reaching their 
              full potential.
            </p>

            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
              <h4 className="font-semibold text-red-800 mb-3">Common Efficiency Challenges:</h4>
              <ul className="space-y-2 text-red-700">
                <li><strong>Processing Bottlenecks:</strong> Manual cutting methods limit throughput to 5-15 tons/hour</li>
                <li><strong>Material Limitations:</strong> Traditional methods struggle with thick materials over 100mm</li>
                <li><strong>Labor Intensity:</strong> High labor requirements increase costs and reduce productivity</li>
                <li><strong>Quality Inconsistency:</strong> Variable cut quality affects downstream processing efficiency</li>
                <li><strong>Safety Concerns:</strong> Manual operations create risks that slow down processing</li>
              </ul>
            </div>
          </section>

          {/* How Gantry Shears Solve Efficiency Problems */}
          <section id="gantry-solutions" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              How Gantry Shears Solve Efficiency Problems
            </h2>
            
            <p>
              Gantry shears address each major efficiency challenge through advanced technology and engineering 
              designed specifically for heavy-duty scrap processing applications:
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
                      <p className="text-sm font-medium text-green-600 mb-1">Gantry Shear Solution:</p>
                      <p className="text-sm text-arzir-gray-600">{problem.gantryImpact}</p>
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
              The efficiency improvements from gantry shear implementation can be precisely measured across 
              multiple operational metrics:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Efficiency Metric</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Baseline</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">With Gantry Shear</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Improvement</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Business Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {efficiencyMetrics.map((metric, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{metric.metric}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-red-600">{metric.baseline}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-green-600">{metric.withGantry}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center font-bold text-blue-600">{metric.improvement}</td>
                      <td className="border border-arzir-gray-200 p-4 text-sm text-arzir-gray-600">{metric.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 mb-3">Efficiency ROI Impact:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-700">
                <div>
                  <p className="font-bold">Revenue Impact</p>
                  <p className="text-sm">40-80% increase in processing capacity drives proportional revenue growth</p>
                </div>
                <div>
                  <p className="font-bold">Cost Reduction</p>
                  <p className="text-sm">25-50% reduction in processing costs through automation and efficiency</p>
                </div>
                <div>
                  <p className="font-bold">Profit Margin</p>
                  <p className="text-sm">60-120% improvement in operational profit margins</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Features That Drive Efficiency */}
          <section id="technology-features" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Technology Features That Drive Efficiency
            </h2>
            <p>
              Specific technological innovations in gantry shear design directly contribute to efficiency improvements:
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

          {/* Real-World Efficiency Case Studies */}
          <section id="case-studies" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Real-World Efficiency Case Studies
            </h2>
            <p>
              These real-world implementations demonstrate the concrete efficiency improvements achievable with gantry shear technology:
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
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {study.timeframe}
                      </span>
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
                      <p className="text-blue-700 italic">&quot;{study.quote}&quot;</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Best Practices */}
          <section id="best-practices" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Implementation Best Practices for Maximum Efficiency
            </h2>
            <p>
              Following these best practices ensures you achieve the maximum efficiency improvements from your gantry shear investment:
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
            Transform Your Recycling Operation&apos;s Efficiency
          </h2>
          <p className="text-xl text-arzir-gray-600">
            Discover how gantry shear technology can dramatically improve your processing efficiency and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="gantry_shears_efficiency_blog">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Efficiency Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products/gantry-shear">
                View Gantry Shear Solutions
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
              href="/blog/gantry-shear-vs-container-shear"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Gantry vs Container Shears</div>
              </div>
            </Link>
            <Link 
              href="/blog/steel-mill-scrap-processing-best-practices"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Steel Mill Best Practices</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}