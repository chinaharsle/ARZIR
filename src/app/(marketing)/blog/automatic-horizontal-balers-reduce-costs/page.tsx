import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, TrendingDown, Zap, Settings, BarChart3, Timer, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Automatic Horizontal Balers Reduce Recycling Costs | ARZIR Blog",
  description: "Discover how automated horizontal baling systems can significantly reduce operational costs through labor savings, efficiency gains, and improved material handling.",
  keywords: [
    "automatic horizontal balers",
    "reduce recycling costs",
    "cost savings automation",
    "horizontal baler benefits",
    "automated waste processing",
    "recycling cost reduction"
  ],
  openGraph: {
    title: "How Automatic Horizontal Balers Reduce Recycling Costs",
    description: "Learn how automated horizontal baling systems can significantly reduce operational costs and improve profitability.",
    images: [
      {
        url: "/images/blog/How Automatic Horizontal Balers Reduce Recycling Costs.png",
        width: 1200,
        height: 630,
        alt: "How Automatic Horizontal Balers Reduce Recycling Costs - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "Cost Reduction Overview", anchor: "cost-reduction-overview" },
  { title: "Labor Cost Savings", anchor: "labor-cost-savings" },
  { title: "Operational Efficiency Gains", anchor: "operational-efficiency" },
  { title: "Material Handling Benefits", anchor: "material-handling" },
  { title: "Energy Efficiency Analysis", anchor: "energy-efficiency" },
  { title: "ROI Calculation Framework", anchor: "roi-calculation" }
];

const keyTakeaways = [
  "Automatic horizontal balers reduce labor costs by 60-80% compared to manual operations",
  "Higher throughput increases revenue potential by 200-300%",
  "Improved bale quality commands 15-25% premium pricing",
  "Reduced energy consumption per ton processed saves 20-40% on utilities",
  "Typical ROI achieved within 12-24 months of installation"
];

const costReductionAreas = [
  {
    area: "Labor Costs",
    description: "Automation reduces staffing requirements from 4-6 workers to 1-2 operators",
    savings: "60-80%",
    annualImpact: "$120,000-$240,000",
    icon: Users
  },
  {
    area: "Processing Speed",
    description: "Continuous operation processes 3-5x more material per hour",
    savings: "200-300%",
    annualImpact: "$80,000-$200,000",
    icon: Timer
  },
  {
    area: "Material Quality",
    description: "Consistent bale density and dimensions improve selling prices",
    savings: "15-25%",
    annualImpact: "$30,000-$75,000",
    icon: BarChart3
  },
  {
    area: "Energy Efficiency",
    description: "Optimized hydraulic systems reduce power consumption per ton",
    savings: "20-40%",
    annualImpact: "$15,000-$35,000",
    icon: Zap
  },
  {
    area: "Maintenance Costs",
    description: "Predictive maintenance and automation reduce unexpected repairs",
    savings: "25-45%",
    annualImpact: "$10,000-$25,000",
    icon: Settings
  },
  {
    area: "Transportation",
    description: "Higher bale density reduces shipping costs and frequency",
    savings: "30-50%",
    annualImpact: "$25,000-$60,000",
    icon: TrendingDown
  }
];

const comparisonData = [
  {
    metric: "Daily Processing Capacity",
    manual: "5-15 tons",
    automatic: "20-100 tons",
    improvement: "300-500%"
  },
  {
    metric: "Labor Requirements",
    manual: "4-6 workers",
    automatic: "1-2 operators",
    improvement: "60-80% reduction"
  },
  {
    metric: "Processing Time per Ton",
    manual: "45-90 minutes",
    automatic: "10-20 minutes",
    improvement: "70-80% faster"
  },
  {
    metric: "Bale Density Consistency",
    manual: "±15% variation",
    automatic: "±2% variation",
    improvement: "85% more consistent"
  },
  {
    metric: "Equipment Utilization",
    manual: "40-60%",
    automatic: "85-95%",
    improvement: "50-80% higher"
  },
  {
    metric: "Annual Maintenance Hours",
    manual: "200-400 hours",
    automatic: "100-200 hours",
    improvement: "50% reduction"
  }
];

const roiFactors = [
  {
    factor: "Initial Investment",
    typical: "$150,000-$500,000",
    considerations: "Equipment cost, installation, training, site preparation"
  },
  {
    factor: "Annual Labor Savings",
    typical: "$120,000-$240,000",
    considerations: "Reduced workforce, overtime elimination, benefit savings"
  },
  {
    factor: "Increased Revenue",
    typical: "$80,000-$200,000",
    considerations: "Higher throughput, premium bale pricing, reduced downtime"
  },
  {
    factor: "Operational Savings",
    typical: "$50,000-$120,000",
    considerations: "Energy, maintenance, transportation, material handling"
  },
  {
    factor: "Payback Period",
    typical: "12-24 months",
    considerations: "Total savings vs. investment, financing terms, tax benefits"
  }
];

const caseStudies = [
  {
    title: "Large Recycling Center - California",
    investment: "$350,000",
    annualSavings: "$280,000",
    paybackPeriod: "15 months",
    details: [
      "Reduced staff from 6 to 2 operators",
      "Increased processing from 25 to 85 tons/day",
      "Improved bale quality increased selling price by 20%",
      "Energy costs reduced by 35% per ton processed"
    ]
  },
  {
    title: "Manufacturing Facility - Texas", 
    investment: "$220,000",
    annualSavings: "$185,000",
    paybackPeriod: "14 months",
    details: [
      "Eliminated overtime costs for weekend processing",
      "Automated 24/7 operation improved efficiency",
      "Maintenance costs reduced by 40%",
      "Transportation frequency reduced by 60%"
    ]
  },
  {
    title: "Distribution Center - Ohio",
    investment: "$180,000",
    annualSavings: "$150,000",
    paybackPeriod: "14 months", 
    details: [
      "Single operator manages entire baling process",
      "Processing capacity increased 400%",
      "Consistent bale specifications eliminated rejections",
      "Facility space utilization improved by 50%"
    ]
  }
];

const implementationSteps = [
  {
    phase: "Assessment & Planning",
    duration: "2-4 weeks",
    activities: ["Current cost analysis", "Space requirements", "ROI projections", "Financing options"]
  },
  {
    phase: "Equipment Selection",
    duration: "2-3 weeks", 
    activities: ["Capacity sizing", "Automation level", "Integration planning", "Supplier evaluation"]
  },
  {
    phase: "Installation & Setup",
    duration: "1-2 weeks",
    activities: ["Site preparation", "Equipment installation", "System integration", "Testing & commissioning"]
  },
  {
    phase: "Training & Optimization",
    duration: "1-2 weeks",
    activities: ["Operator training", "Process optimization", "Performance monitoring", "Fine-tuning"]
  }
];

const faqs = [
  {
    question: "What's the typical payback period for automatic horizontal balers?",
    answer: "Most operations see payback within 12-24 months. High-volume facilities often achieve payback in 12-15 months due to greater labor savings and increased throughput. The exact timeframe depends on current labor costs, material volumes, and automation level selected."
  },
  {
    question: "How much can automation really reduce labor costs?",
    answer: "Automation typically reduces labor requirements by 60-80%. A manual operation requiring 4-6 workers can often be managed by 1-2 operators with an automatic horizontal baler. This translates to annual savings of $120,000-$240,000 in most markets."
  },
  {
    question: "Are there financing options available for automatic balers?",
    answer: "Yes, most manufacturers offer financing programs including equipment leasing, loans, and performance-based financing. Some programs require minimal down payment and structure payments around projected cost savings to maintain positive cash flow from day one."
  },
  {
    question: "What maintenance is required for automatic horizontal balers?",
    answer: "Modern automatic balers require 50% less maintenance than manual systems due to predictive maintenance systems and fewer wear components. Typical maintenance includes daily inspections, monthly hydraulic checks, and annual major service - totaling 100-200 hours annually."
  },
  {
    question: "Can automatic balers handle different material types?",
    answer: "Yes, automatic horizontal balers excel at processing multiple material types including cardboard, plastic films, PET bottles, aluminum cans, and mixed recyclables. Automated systems can switch between materials quickly and maintain optimal compression settings for each type."
  }
];

export default function AutomaticHorizontalBalersReduceCostsPage() {
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
            <li><Link href="/blog?category=Cost+Analysis" className="text-arzir-gray-500 hover:text-arzir-primary">Cost Analysis</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li className="text-arzir-gray-900">How Automatic Horizontal Balers Reduce Recycling Costs</li>
          </ol>
        </nav>
      </Section>

      {/* Article Header */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-arzir-gray-500">
              <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full font-medium">
                Cost Analysis
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
              How Automatic Horizontal Balers Reduce Recycling Costs
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Cost Analysis Team</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/blog/How Automatic Horizontal Balers Reduce Recycling Costs.png" 
              alt="How Automatic Horizontal Balers Reduce Recycling Costs"
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
              Automatic horizontal balers represent a transformative investment for recycling operations, 
              delivering substantial cost reductions across multiple operational areas. Through comprehensive 
              automation, these systems eliminate labor-intensive processes while dramatically improving 
              throughput and material quality.
            </p>
          </div>

          {/* Cost Reduction Overview */}
          <section id="cost-reduction-overview" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Cost Reduction Overview
            </h2>
            
            <p>
              Automatic horizontal balers reduce operational costs through six primary mechanisms, 
              each delivering measurable financial benefits:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costReductionAreas.map((area, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl border border-arzir-gray-200">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-arzir-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-black mb-2">{area.area}</h3>
                      <p className="text-sm text-arzir-gray-600 mb-3">{area.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-success">{area.savings}</span>
                        <span className="text-sm text-arzir-gray-500">{area.annualImpact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Labor Cost Savings */}
          <section id="labor-cost-savings" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Labor Cost Savings
            </h2>
            
            <p>
              The most significant cost reduction comes from dramatically reduced labor requirements. 
              Manual baling operations typically require 4-6 workers to achieve what 1-2 operators 
              can accomplish with an automatic horizontal baler.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-3">Labor Cost Analysis:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-700 mb-2">Manual Operation:</h5>
                  <ul className="space-y-1 text-sm text-blue-600">
                    <li>• 4-6 workers @ $18-25/hour</li>
                    <li>• $150,000-$260,000 annual wages</li>
                    <li>• $45,000-$80,000 benefits & taxes</li>
                    <li>• Overtime requirements during peak periods</li>
                    <li>• Higher turnover and training costs</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-700 mb-2">Automatic Operation:</h5>
                  <ul className="space-y-1 text-sm text-green-600">
                    <li>• 1-2 operators @ $22-30/hour</li>
                    <li>• $45,000-$125,000 annual wages</li>
                    <li>• $15,000-$40,000 benefits & taxes</li>
                    <li>• Minimal overtime requirements</li>
                    <li>• Lower turnover, skilled positions</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <p className="text-center text-xl font-bold text-green-700">
                  Annual Labor Savings: $120,000 - $240,000
                </p>
              </div>
            </div>
          </section>

          {/* Operational Efficiency Gains */}
          <section id="operational-efficiency" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Operational Efficiency Gains
            </h2>
            
            <p>
              Automation delivers dramatic improvements in processing speed, consistency, and equipment 
              utilization, directly translating to increased revenue potential:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Performance Metric</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-red-700">Manual Operation</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold text-green-700">Automatic Operation</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.metric}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-red-700">{item.manual}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-green-700">{item.automatic}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center font-bold text-blue-600">{item.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-3">Revenue Impact:</h4>
              <p className="text-green-700 mb-3">
                Higher throughput capacity enables processing 3-5x more material, directly increasing 
                revenue potential. Additionally, consistent bale quality commands premium pricing:
              </p>
              <ul className="space-y-1 text-sm text-green-600">
                <li>• Increased volume: $80,000-$150,000 additional annual revenue</li>
                <li>• Premium pricing: $30,000-$75,000 additional annual revenue</li>
                <li>• Reduced rejections: $10,000-$25,000 annual savings</li>
              </ul>
            </div>
          </section>

          {/* Material Handling Benefits */}
          <section id="material-handling" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Material Handling Benefits
            </h2>
            
            <p>
              Automatic horizontal balers excel at producing consistent, high-density bales that 
              optimize transportation and storage costs while commanding premium market prices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="font-semibold text-orange-800 mb-3">Transportation Savings:</h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li><strong>Higher bale density:</strong> 30-50% more material per truck load</li>
                  <li><strong>Consistent dimensions:</strong> Optimized container loading</li>
                  <li><strong>Reduced shipping frequency:</strong> Same volume in fewer trips</li>
                  <li><strong>Lower handling costs:</strong> Standardized bale handling</li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-center font-bold text-orange-700">
                    Annual Savings: $25,000 - $60,000
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-purple-800 mb-3">Quality Premiums:</h4>
                <ul className="space-y-2 text-sm text-purple-700">
                  <li><strong>Consistent density:</strong> ±2% variation vs ±15% manual</li>
                  <li><strong>Clean bales:</strong> Reduced contamination</li>
                  <li><strong>Uniform dimensions:</strong> Preferred by buyers</li>
                  <li><strong>Reliable supply:</strong> Consistent delivery schedules</li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-center font-bold text-purple-700">
                    Premium Revenue: $30,000 - $75,000
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Energy Efficiency Analysis */}
          <section id="energy-efficiency" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Energy Efficiency Analysis
            </h2>
            
            <p>
              Modern automatic horizontal balers incorporate advanced hydraulic systems and intelligent 
              controls that optimize energy consumption per ton of material processed.
            </p>

            <div className="bg-yellow-50 p-6 rounded-xl">
              <h4 className="font-semibold text-yellow-800 mb-3">Energy Efficiency Features:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Variable speed hydraulic pumps</li>
                  <li>• Energy recovery systems</li>
                  <li>• Intelligent cycle optimization</li>
                  <li>• Standby power management</li>
                </ul>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Peak demand management</li>
                  <li>• Motor efficiency optimization</li>
                  <li>• Regenerative braking systems</li>
                  <li>• Smart scheduling controls</li>
                </ul>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Energy Factor</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Manual Process</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Automatic Baler</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-arzir-gray-200 p-4 font-medium">Energy per Ton</td>
                    <td className="border border-arzir-gray-200 p-4 text-center">25-40 kWh</td>
                    <td className="border border-arzir-gray-200 p-4 text-center">15-25 kWh</td>
                    <td className="border border-arzir-gray-200 p-4 text-center font-bold text-green-600">20-40%</td>
                  </tr>
                  <tr className="bg-arzir-gray-25">
                    <td className="border border-arzir-gray-200 p-4 font-medium">Peak Demand</td>
                    <td className="border border-arzir-gray-200 p-4 text-center">Variable/High</td>
                    <td className="border border-arzir-gray-200 p-4 text-center">Managed/Low</td>
                    <td className="border border-arzir-gray-200 p-4 text-center font-bold text-green-600">30-50%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-arzir-gray-200 p-4 font-medium">Power Factor</td>
                    <td className="border border-arzir-gray-200 p-4 text-center">0.75-0.85</td>
                    <td className="border border-arzir-gray-200 p-4 text-center">0.90-0.95</td>
                    <td className="border border-arzir-gray-200 p-4 text-center font-bold text-green-600">15-25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ROI Calculation Framework */}
          <section id="roi-calculation" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              ROI Calculation Framework
            </h2>
            
            <p>
              Understanding the complete return on investment requires analysis of all cost factors 
              and savings opportunities:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">ROI Factor</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Typical Range</th>
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Key Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  {roiFactors.map((factor, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{factor.factor}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center font-semibold text-arzir-primary">{factor.typical}</td>
                      <td className="border border-arzir-gray-200 p-4 text-sm text-arzir-gray-600">{factor.considerations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
              <h4 className="font-semibold text-black mb-3">ROI Calculation Example:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-blue-700 mb-2">Investment Costs:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Equipment: $300,000</li>
                    <li>Installation: $25,000</li>
                    <li>Training: $10,000</li>
                    <li><strong>Total Investment: $335,000</strong></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-700 mb-2">Annual Savings:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>Labor savings: $180,000</li>
                    <li>Increased revenue: $120,000</li>
                    <li>Operational savings: $50,000</li>
                    <li><strong>Total Annual Savings: $350,000</strong></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg text-center">
                <p className="text-xl font-bold text-green-700">
                  ROI: 104% | Payback Period: 11.5 months
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Real-World Case Studies
            </h2>
            
            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">{study.title}</h4>
                      <div className="space-y-1 text-sm">
                        <p><strong>Investment:</strong> {study.investment}</p>
                        <p><strong>Annual Savings:</strong> {study.annualSavings}</p>
                        <p><strong>Payback:</strong> <span className="text-success font-bold">{study.paybackPeriod}</span></p>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h5 className="font-medium text-black mb-2">Key Results:</h5>
                      <ul className="space-y-1">
                        {study.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Implementation Timeline */}
          <section className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Implementation Timeline
            </h2>
            
            <p>
              A structured implementation approach ensures smooth transition and rapid realization of cost savings:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {implementationSteps.map((step, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-black mb-2">{step.phase}</h4>
                      <p className="text-sm text-arzir-gray-600 mb-3">{step.duration}</p>
                      <ul className="space-y-1">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="text-xs text-arzir-gray-500">• {activity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Conclusion
            </h2>
            
            <div className="bg-gradient-to-r from-arzir-primary to-primary-600 text-white p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Key Financial Benefits:</h4>
              <ul className="space-y-2">
                <li>• <strong>60-80% labor cost reduction</strong> through automation</li>
                <li>• <strong>200-300% throughput increase</strong> boosting revenue potential</li>
                <li>• <strong>15-25% premium pricing</strong> for consistent bale quality</li>
                <li>• <strong>20-40% energy savings</strong> through efficient systems</li>
                <li>• <strong>12-24 month payback</strong> period for most operations</li>
              </ul>
            </div>
            
            <p>
              Automatic horizontal balers represent more than equipment upgrades—they&apos;re strategic 
              investments that fundamentally transform operational economics. The combination of 
              reduced labor costs, increased throughput, improved quality, and enhanced efficiency 
              delivers compelling returns that justify investment across a wide range of recycling operations.
            </p>
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
            Calculate Your Cost Savings
          </h2>
          <p className="text-xl text-arzir-gray-600">
            Discover how much you could save with an automatic horizontal baler for your operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="automatic_horizontal_balers_blog">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Custom Cost Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/calculator/roi-payback">
                Use ROI Calculator
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
              href="/blog/vertical-vs-horizontal-baler"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Vertical vs Horizontal Baler</div>
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