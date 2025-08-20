import { Section } from "@/components/common/Section";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, Store, TrendingUp, Package, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Small Businesses Benefit from Vertical Balers | ARZIR Blog",
  description: "Discover how vertical balers help small businesses reduce waste costs, save space, and improve operations. ROI analysis, case studies, and implementation guide.",
  keywords: [
    "vertical baler for small business",
    "small business waste management", 
    "retail waste solutions",
    "cost savings vertical baler",
    "small business recycling",
    "compact baler benefits"
  ],
  openGraph: {
    title: "How Small Businesses Benefit from Vertical Balers",
    description: "Discover how vertical balers help small businesses reduce costs and improve waste management efficiency.",
    images: [
      {
        url: "/images/blog/small-business-vertical-balers.jpg",
        width: 1200,
        height: 630,
        alt: "Small Business Vertical Balers Benefits - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "The Small Business Challenge", anchor: "small-business-challenge" },
  { title: "Vertical Baler Advantages", anchor: "vertical-baler-advantages" },
  { title: "Cost Savings Analysis", anchor: "cost-savings-analysis" },
  { title: "Implementation Success Stories", anchor: "implementation-stories" },
  { title: "ROI Calculator", anchor: "roi-calculator" },
  { title: "Getting Started Guide", anchor: "getting-started" }
];

const keyTakeaways = [
  "Small businesses can achieve 50-70% waste cost reductions with vertical balers",
  "Vertical balers require only 6-15 m² of space, perfect for small facilities",
  "ROI typically achieved within 12-24 months for small business operations",
  "Single-person operation eliminates need for additional staff",
  "Improved workplace organization and safety for small teams"
];

const smallBusinessChallenges = [
  {
    challenge: "Limited Floor Space",
    impact: "Back-of-house areas are cramped, waste storage takes valuable space",
    solution: "Vertical balers use 70% less floor space than alternatives"
  },
  {
    challenge: "High Waste Disposal Costs",
    impact: "Frequent pickups and tipping fees eat into tight profit margins", 
    solution: "80% volume reduction means 60% fewer pickups needed"
  },
  {
    challenge: "Limited Staff Resources",
    impact: "Small teams can't dedicate staff to complex waste management",
    solution: "Single-person operation fits naturally into existing workflows"
  },
  {
    challenge: "Budget Constraints",
    impact: "Limited capital for equipment investments",
    solution: "Lower initial cost and fast ROI make investment feasible"
  }
];

const businessTypes = [
  {
    type: "Small Retail Stores",
    wasteVolume: "50-200 boxes/day",
    savings: "$200-800/month",
    roiPeriod: "12-18 months",
    icon: Store,
    benefits: [
      "Cleaner back-of-house appearance",
      "More space for inventory storage", 
      "Reduced dumpster pickup frequency",
      "Potential revenue from bale sales"
    ]
  },
  {
    type: "Restaurants & Cafes",
    wasteVolume: "30-150 containers/day",
    savings: "$150-600/month", 
    roiPeriod: "15-24 months",
    icon: Package,
    benefits: [
      "Improved kitchen workflow efficiency",
      "Better compliance with health regulations",
      "Reduced pest attraction from loose waste",
      "Professional waste management image"
    ]
  },
  {
    type: "Small Offices",
    wasteVolume: "20-100 boxes/week",
    savings: "$100-400/month",
    roiPeriod: "18-30 months", 
    icon: TrendingUp,
    benefits: [
      "Enhanced corporate sustainability image",
      "More organized document disposal",
      "Reduced facility management overhead",
      "Employee satisfaction from cleaner workplace"
    ]
  },
  {
    type: "Manufacturing Shops",
    wasteVolume: "100-500 kg/day",
    savings: "$300-1200/month",
    roiPeriod: "10-18 months",
    icon: DollarSign,
    benefits: [
      "Safer production floor environment",
      "Reduced workplace accidents",
      "Better material flow organization",
      "Compliance with safety regulations"
    ]
  }
];

const costSavingsBreakdown = [
  {
    category: "Waste Pickup Frequency",
    beforeBaler: "3-5 times/week",
    afterBaler: "1-2 times/week",
    monthlySavings: "$200-500",
    annualSavings: "$2,400-6,000"
  },
  {
    category: "Tipping Fees",
    beforeBaler: "Full volume charges",
    afterBaler: "80% volume reduction",
    monthlySavings: "$100-300",
    annualSavings: "$1,200-3,600"
  },
  {
    category: "Labor Costs",
    beforeBaler: "2-3 hours/week handling",
    afterBaler: "30 minutes/week",
    monthlySavings: "$150-400",
    annualSavings: "$1,800-4,800"
  },
  {
    category: "Storage Space",
    beforeBaler: "Space cost for waste storage",
    afterBaler: "80% less space needed",
    monthlySavings: "$50-200",
    annualSavings: "$600-2,400"
  }
];

const implementationSteps = [
  {
    step: "Assessment Phase",
    duration: "1-2 weeks",
    activities: [
      "Measure available space",
      "Track current waste volumes",
      "Calculate disposal costs",
      "Identify optimal baler location"
    ],
    cost: "$0 (self-assessment)"
  },
  {
    step: "Selection & Purchase",
    duration: "1-3 weeks",
    activities: [
      "Choose appropriate baler model",
      "Arrange financing if needed",
      "Schedule delivery",
      "Prepare installation site"
    ],
    cost: "$15,000-45,000"
  },
  {
    step: "Installation & Training",
    duration: "1-2 days",
    activities: [
      "Equipment delivery and setup",
      "Electrical connections",
      "Staff training session",
      "Safety procedure review"
    ],
    cost: "$2,000-5,000"
  },
  {
    step: "Operation & Optimization",
    duration: "Ongoing",
    activities: [
      "Daily operation integration",
      "Performance monitoring",
      "Maintenance schedule",
      "Cost tracking and ROI verification"
    ],
    cost: "$100-300/month"
  }
];

const caseStudies = [
  {
    business: "Family-Owned Grocery Store",
    location: "suburban strip mall",
    challenge: "Limited storage space, high cardboard disposal costs",
    solution: "ARZIR VB-20 Vertical Baler",
    results: [
      "65% reduction in waste pickup frequency",
      "$450/month operational savings",
      "ROI achieved in 14 months",
      "20 m² space freed up for inventory"
    ],
    quote: "The vertical baler fits perfectly in our back room and pays for itself through reduced disposal costs."
  },
  {
    business: "Local Restaurant Chain",
    location: "3 downtown locations",
    challenge: "Multiple small sites with space constraints",
    solution: "Three ARZIR VB-20 units",
    results: [
      "70% volume reduction across all sites", 
      "$1,200/month combined savings",
      "Improved health inspection scores",
      "Staff productivity improvement"
    ],
    quote: "Having consistent waste management across our locations improved both costs and operations."
  },
  {
    business: "Textile Manufacturing",
    location: "small industrial facility",
    challenge: "Fabric waste creating safety hazards",
    solution: "ARZIR VB-30 Textile Baler",
    results: [
      "85% workspace organization improvement",
      "$800/month disposal cost savings",
      "Zero workplace accidents related to waste",
      "Additional revenue from fabric bale sales"
    ],
    quote: "The baler transformed our production floor from chaotic to organized and safe."
  }
];

const roiFactors = [
  {
    factor: "Equipment Cost",
    typical: "$15,000-45,000",
    impact: "One-time investment, depreciated over 10-15 years"
  },
  {
    factor: "Installation",
    typical: "$2,000-5,000", 
    impact: "One-time setup cost, includes training"
  },
  {
    factor: "Monthly Savings",
    typical: "$300-1,500",
    impact: "Ongoing operational cost reduction"
  },
  {
    factor: "Payback Period",
    typical: "12-30 months",
    impact: "Varies by waste volume and disposal costs"
  },
  {
    factor: "Annual ROI",
    typical: "25-85%",
    impact: "Higher ROI for higher-volume operations"
  }
];

const gettingStartedChecklist = [
  {
    category: "Space Assessment",
    items: [
      "Measure available floor space (minimum 3x3 meters)",
      "Check ceiling height (minimum 4 meters)", 
      "Verify electrical access (220V, 30A)",
      "Ensure clear access for material loading"
    ]
  },
  {
    category: "Volume Analysis", 
    items: [
      "Track waste generation for 2-4 weeks",
      "Identify peak generation periods",
      "Separate different material types",
      "Calculate current disposal costs"
    ]
  },
  {
    category: "Budget Planning",
    items: [
      "Calculate total investment needs",
      "Explore financing options if needed",
      "Plan for installation and training costs",
      "Set ROI tracking metrics"
    ]
  },
  {
    category: "Operational Preparation",
    items: [
      "Designate equipment operator(s)",
      "Plan integration with current workflows",
      "Prepare staff for operational changes",
      "Establish maintenance schedule"
    ]
  }
];

const faqs = [
  {
    question: "Is a vertical baler worth it for a small business with limited waste?",
    answer: "Yes, even small volumes can justify a vertical baler. Businesses processing as little as 20-30 boxes per day often achieve ROI within 18-24 months due to reduced pickup frequency and labor savings."
  },
  {
    question: "How much space do I really need for a vertical baler?",
    answer: "Most vertical balers require only 6-15 square meters of floor space. A typical small business back room or storage area can usually accommodate a vertical baler without disrupting operations."
  },
  {
    question: "Can I finance a vertical baler for my small business?",
    answer: "Yes, many suppliers offer financing options. Equipment financing, leasing, and SBA loans are common options. Monthly payments are often less than the monthly savings achieved."
  },
  {
    question: "What kind of training is needed for my staff?",
    answer: "Vertical balers are designed for simplicity. Most staff can learn operation in 1-2 hours. Annual refresher training is recommended, and operation manuals provide ongoing reference."
  }
];

export default function SmallBusinessVerticalBalersPage() {
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
            <li><Link href="/blog?category=Business+Solutions" className="text-arzir-gray-500 hover:text-arzir-primary">Business Solutions</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li className="text-arzir-gray-900">How Small Businesses Benefit from Vertical Balers</li>
          </ol>
        </nav>
      </Section>

      {/* Article Header */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-arzir-gray-500">
              <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full font-medium">
                Business Solutions
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Published August 19, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              How Small Businesses Benefit from Vertical Balers
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Small Business Team</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/products/vertical-baler.png" 
              alt="Small Business Vertical Balers Benefits"
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
              Small businesses face unique challenges when it comes to waste management. Limited space, tight budgets, 
              and small staff means every operational decision must deliver clear value. Vertical balers are transforming 
              how small businesses handle waste, delivering significant cost savings and operational improvements.
            </p>
          </div>

          {/* The Small Business Challenge */}
          <section id="small-business-challenge" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              The Small Business Challenge
            </h2>
            <p>
              Small businesses face a perfect storm of waste management challenges that larger enterprises can more 
              easily absorb. Understanding these challenges is the first step to finding effective solutions:
            </p>
            
            <div className="space-y-6">
              {smallBusinessChallenges.map((challenge, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 via-white to-green-50 p-6 rounded-xl border border-arzir-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                    <div>
                      <h4 className="text-lg font-bold text-red-600 mb-2">{challenge.challenge}</h4>
                      <p className="text-sm text-arzir-gray-600">{challenge.impact}</p>
                    </div>
                    <div className="text-center">
                      <ArrowRight className="h-6 w-6 text-arzir-primary mx-auto" />
                    </div>
                    <div className="lg:text-right">
                      <h5 className="text-md font-semibold text-green-600 mb-2">Solution:</h5>
                      <p className="text-sm text-arzir-gray-700">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Vertical Baler Advantages */}
          <section id="vertical-baler-advantages" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Vertical Baler Advantages for Small Business
            </h2>
            <p>
              Vertical balers are specifically suited to small business operations because they address the core 
              constraints that small businesses face:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessTypes.map((business, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center">
                      <business.icon className="h-5 w-5 text-arzir-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-black">{business.type}</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="font-semibold text-arzir-gray-700">Volume:</p>
                      <p className="text-arzir-gray-600">{business.wasteVolume}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-arzir-gray-700">Savings:</p>
                      <p className="text-green-600 font-medium">{business.savings}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-arzir-gray-700 mb-1">ROI Period:</p>
                    <p className="text-arzir-primary font-medium">{business.roiPeriod}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-arzir-gray-700 mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {business.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-success flex-shrink-0 mt-1" />
                          <span className="text-xs text-arzir-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Savings Analysis */}
          <section id="cost-savings-analysis" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Cost Savings Analysis
            </h2>
            <p>
              Small businesses achieve cost savings in multiple areas when implementing vertical balers. 
              Here&apos;s a detailed breakdown of where the savings come from:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-4 text-left font-semibold">Cost Category</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Before Baler</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">After Baler</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Monthly Savings</th>
                    <th className="border border-arzir-gray-200 p-4 text-center font-semibold">Annual Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {costSavingsBreakdown.map((saving, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-4 font-medium text-black">{saving.category}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-red-600 text-sm">{saving.beforeBaler}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center text-green-600 text-sm">{saving.afterBaler}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center font-medium text-arzir-primary">{saving.monthlySavings}</td>
                      <td className="border border-arzir-gray-200 p-4 text-center font-bold text-green-600">{saving.annualSavings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2">Total Annual Savings Range:</h4>
              <p className="text-green-700 text-lg font-bold">$6,000 - $16,800 per year</p>
              <p className="text-green-600 text-sm mt-1">
                Actual savings depend on waste volume, current disposal costs, and local service pricing.
              </p>
            </div>
          </section>

          {/* Implementation Success Stories */}
          <section id="implementation-stories" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Implementation Success Stories
            </h2>
            <p>
              Real small businesses have achieved remarkable results with vertical balers. Here are their stories:
            </p>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-arzir-gray-50 p-6">
                    <h4 className="text-xl font-bold text-black mb-2">{study.business}</h4>
                    <p className="text-arzir-gray-600 mb-3">Location: {study.location}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-red-600 mb-1">Challenge:</p>
                        <p className="text-sm text-arzir-gray-700">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-600 mb-1">Solution:</p>
                        <p className="text-sm text-arzir-gray-700">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h5 className="font-semibold text-black mb-3">Results Achieved:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-arzir-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      <p className="text-blue-700 italic">&ldquo;{study.quote}&rdquo;</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ROI Calculator */}
          <section id="roi-calculator" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              ROI Calculator
            </h2>
            <p>
              Understanding return on investment is crucial for small business decisions. Here&apos;s how to calculate 
              the ROI for a vertical baler investment:
            </p>

            <div className="bg-arzir-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-black mb-4">ROI Calculation Factors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roiFactors.map((factor, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-black">{factor.factor}:</span>
                      <span className="text-arzir-primary font-medium">{factor.typical}</span>
                    </div>
                    <p className="text-sm text-arzir-gray-600">{factor.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Simple ROI Formula:</h4>
              <div className="bg-white p-4 rounded-lg font-mono text-sm border">
                <p className="mb-2"><strong>Annual Savings</strong> = Monthly savings × 12</p>
                <p className="mb-2"><strong>Total Investment</strong> = Equipment cost + Installation</p>
                <p className="mb-2"><strong>Payback Period</strong> = Total Investment ÷ Annual Savings</p>
                <p><strong>Annual ROI %</strong> = (Annual Savings ÷ Total Investment) × 100</p>
              </div>
              <div className="mt-3 p-3 bg-green-100 rounded text-green-800">
                <p className="text-sm"><strong>Example:</strong> $25,000 investment, $1,000/month savings = 25-month payback, 48% annual ROI</p>
              </div>
            </div>
          </section>

          {/* Getting Started Guide */}
          <section id="getting-started" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Getting Started Guide
            </h2>
            <p>
              Ready to explore vertical balers for your small business? Follow this step-by-step implementation guide:
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-black">Implementation Timeline</h3>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="bg-white border border-arzir-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-semibold text-black">{step.step}</h4>
                    </div>
                    
                    <p className="text-sm text-arzir-primary mb-3 font-medium">{step.duration}</p>
                    
                    <ul className="space-y-1 mb-4">
                      {step.activities.map((activity, i) => (
                        <li key={i} className="text-xs text-arzir-gray-600">• {activity}</li>
                      ))}
                    </ul>
                    
                    <div className="text-sm font-semibold text-black">
                      Cost: {step.cost}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-black">Pre-Implementation Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gettingStartedChecklist.map((category, index) => (
                  <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-black mb-3">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-arzir-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-arzir-gray-700">{item}</span>
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

      {/* Navigation */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between py-6 border-t border-arzir-gray-200">
            <Link 
              href="/blog/vertical-vs-horizontal-baler"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Vertical vs Horizontal Comparison</div>
              </div>
            </Link>
            <Link 
              href="/blog/waste-management-cost-reduction"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Cost Reduction Strategies</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}