import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronRight, CheckCircle, DollarSign, Calculator } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Briquetting Machines Reduce Metal Waste Storage Costs | ARZIR Blog",
  description: "Discover how briquetting machines can reduce metal waste storage costs by up to 90%. Learn about space savings, transportation efficiency, and ROI calculations for manufacturing facilities.",
  keywords: [
    "briquetting machine cost savings",
    "metal waste storage costs",
    "briquetting ROI",
    "warehouse space optimization",
    "metal chip storage reduction",
    "manufacturing cost reduction"
  ],
  openGraph: {
    title: "How Briquetting Machines Reduce Metal Waste Storage Costs",
    description: "Learn how briquetting machines deliver significant cost savings through reduced storage space, improved transportation efficiency, and higher scrap metal values.",
    images: [
      {
        url: "/images/blog/How Briquetting Machines Reduce Metal Waste Storage Costs.png",
        width: 1200,
        height: 630,
        alt: "Briquetting Machine Cost Savings Analysis"
      }
    ]
  }
};

const costSavingsData = [
  {
    category: "Storage Space Reduction",
    beforeBriquetting: "1000 m² warehouse space",
    afterBriquetting: "100 m² warehouse space",
    savings: "90% space reduction",
    annualCostSaving: "$45,000"
  },
  {
    category: "Transportation Costs", 
    beforeBriquetting: "20 truck loads/month",
    afterBriquetting: "2 truck loads/month",
    savings: "90% reduction in shipments",
    annualCostSaving: "$96,000"
  },
  {
    category: "Material Handling Labor",
    beforeBriquetting: "4 workers × 8 hours/day",
    afterBriquetting: "1 worker × 2 hours/day",
    savings: "94% labor reduction",
    annualCostSaving: "$85,000"
  },
  {
    category: "Scrap Metal Value",
    beforeBriquetting: "$150/ton loose chips",
    afterBriquetting: "$220/ton briquettes",
    savings: "$70/ton increase",
    annualCostSaving: "$84,000"
  }
];

const roiCalculation = [
  {
    item: "Briquetting Machine Investment",
    cost: "$180,000",
    type: "one-time"
  },
  {
    item: "Installation & Training",
    cost: "$25,000", 
    type: "one-time"
  },
  {
    item: "Annual Operating Costs",
    cost: "$35,000",
    type: "annual"
  },
  {
    item: "Total Annual Savings",
    cost: "$310,000",
    type: "annual"
  },
  {
    item: "Net Annual Benefit",
    cost: "$275,000",
    type: "annual"
  },
  {
    item: "Payback Period",
    cost: "8.9 months",
    type: "calculation"
  }
];

const industryBenefits = [
  {
    industry: "Automotive Manufacturing",
    challenges: ["High-volume machining waste", "Limited storage space", "Expensive waste disposal"],
    solutions: ["90% volume reduction", "Automated processing", "Oil recovery systems"],
    savings: "$200,000-500,000 annually"
  },
  {
    industry: "Aerospace Manufacturing", 
    challenges: ["Valuable aluminum waste", "Strict quality requirements", "High material costs"],
    solutions: ["Premium briquette pricing", "Material traceability", "Zero contamination"],
    savings: "$150,000-350,000 annually"
  },
  {
    industry: "Steel Processing",
    challenges: ["Bulk steel chip storage", "Transportation inefficiency", "Safety concerns"],
    solutions: ["Dense briquette formation", "Improved handling safety", "Reduced fire risk"],
    savings: "$180,000-400,000 annually"
  }
];

export default function BriquettingCostSavingsBlogPage() {
  return (
    <>
      {/* Blog Header */}
      <Section size="lg" className="!pt-20 sm:!pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-arzir-gray-600">
              <Link href="/blog" className="hover:text-arzir-primary transition-colors">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Cost Analysis</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              How Briquetting Machines Reduce Metal Waste Storage Costs
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-arzir-gray-600 border-b border-arzir-gray-200 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>ARZIR Engineering Team</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section size="lg">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-arzir-gray-700 leading-relaxed">
                Manufacturing facilities worldwide struggle with metal waste storage costs that can consume 
                significant portions of their operational budgets. Metal chips, turnings, and swarf from 
                machining operations traditionally require extensive warehouse space, frequent transportation, 
                and specialized handling equipment. However, briquetting technology offers a transformative 
                solution that can reduce these costs by up to 90%.
              </p>
              
              <p>
                This comprehensive analysis examines how briquetting machines deliver measurable cost savings 
                across multiple operational areas, providing manufacturing facilities with a clear path to 
                improved profitability and operational efficiency.
              </p>
            </div>

            {/* Featured Image Placeholder */}
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/images/blog/How Briquetting Machines Reduce Metal Waste Storage Costs.png"
                alt="Briquetting Machine Cost Savings Analysis"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            {/* The Problem Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                The Hidden Costs of Traditional Metal Waste Storage
              </h2>
              
              <p>
                Before examining briquetting solutions, it&apos;s essential to understand the true cost of 
                traditional metal waste storage methods. Most manufacturing facilities significantly 
                underestimate these costs by focusing only on obvious expenses while overlooking 
                indirect costs that compound over time.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">Typical Hidden Costs Include:</h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Warehouse space rental or opportunity costs ($50-80 per m² annually)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Material handling equipment (forklifts, containers, conveyors)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Labor costs for waste management (sorting, moving, loading)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Transportation inefficiency due to low material density
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    Reduced scrap metal value due to contamination and handling
                  </li>
                </ul>
              </div>
            </div>

            {/* Cost Savings Analysis */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Detailed Cost Savings Analysis
              </h2>
              
              <p>
                Our analysis of over 200 briquetting machine installations reveals consistent cost 
                savings across four primary categories. The following data represents typical results 
                for a mid-sized manufacturing facility processing 100 tons of metal waste monthly.
              </p>

              <div className="bg-white rounded-2xl p-8 overflow-x-auto shadow-sm border border-arzir-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-arzir-gray-50">
                      <th className="p-4 text-left font-bold text-black">Cost Category</th>
                      <th className="p-4 text-left font-bold text-black">Before Briquetting</th>
                      <th className="p-4 text-left font-bold text-black">After Briquetting</th>
                      <th className="p-4 text-left font-bold text-black">Savings</th>
                      <th className="p-4 text-right font-bold text-black">Annual Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costSavingsData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                        <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.category}</td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{item.beforeBriquetting}</td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{item.afterBriquetting}</td>
                        <td className="border border-arzir-gray-200 p-4 font-medium text-green-600">{item.savings}</td>
                        <td className="border border-arzir-gray-200 p-4 text-right font-bold text-arzir-primary">{item.annualCostSaving}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-arzir-primary/10">
                      <td colSpan={4} className="border border-arzir-gray-200 p-4 font-bold text-black">Total Annual Savings:</td>
                      <td className="border border-arzir-gray-200 p-4 text-right font-bold text-arzir-primary text-xl">$310,000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* ROI Calculation */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Return on Investment Calculation
              </h2>
              
              <p>
                Understanding the complete financial picture requires a thorough ROI analysis that 
                includes initial investment, implementation costs, and ongoing operational expenses.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-black">Investment Breakdown</h3>
                  {roiCalculation.map((item, index) => (
                    <div key={index} className={`flex justify-between items-center p-4 rounded-lg ${
                      item.type === 'calculation' ? 'bg-arzir-primary/10' : 
                      item.type === 'annual' && item.item === 'Total Annual Savings' ? 'bg-green-50' :
                      'bg-arzir-gray-50'
                    }`}>
                      <span className="font-medium text-black">{item.item}</span>
                      <span className={`font-bold ${
                        item.type === 'calculation' ? 'text-arzir-primary' :
                        item.item === 'Total Annual Savings' ? 'text-green-600' :
                        'text-arzir-gray-700'
                      }`}>{item.cost}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <h3 className="font-bold text-green-800 mb-2">Key Financial Metrics</h3>
                    <div className="space-y-2 text-green-700">
                      <div className="flex justify-between">
                        <span>Payback Period:</span>
                        <span className="font-bold">8.9 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>3-Year ROI:</span>
                        <span className="font-bold">302%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5-Year NPV:</span>
                        <span className="font-bold">$1.2 million</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 className="font-bold text-blue-800 mb-2">Additional Benefits</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        Improved workplace safety and cleanliness
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        Enhanced environmental compliance
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        Reduced fire and safety risks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry-Specific Benefits */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Industry-Specific Cost Benefits
              </h2>
              
              <p>
                Different manufacturing industries experience varying levels of cost savings based on 
                their specific waste characteristics, volumes, and operational requirements.
              </p>

              <div className="space-y-6">
                {industryBenefits.map((industry, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-black mb-2">
                          {industry.industry}
                        </h3>
                        <div className="text-2xl font-bold text-arzir-primary">
                          {industry.savings}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-red-600 mb-2">Typical Challenges:</h4>
                        <ul className="space-y-1">
                          {industry.challenges.map((challenge, i) => (
                            <li key={i} className="text-sm text-arzir-gray-600">• {challenge}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-green-600 mb-2">Briquetting Solutions:</h4>
                        <ul className="space-y-1">
                          {industry.solutions.map((solution, i) => (
                            <li key={i} className="text-sm text-arzir-gray-600">• {solution}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <DollarSign className="h-8 w-8 text-white" />
                          </div>
                          <div className="text-xs text-arzir-gray-500">Potential Savings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Strategy */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Implementation Strategy for Maximum Savings
              </h2>
              
              <p>
                To achieve optimal cost savings, facilities should follow a systematic implementation 
                approach that addresses both technical and operational considerations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-black">Phase 1: Assessment (Weeks 1-2)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Current waste volume and storage cost analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Material composition and contamination evaluation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Transportation and handling cost review</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-black">Phase 2: Selection (Weeks 3-4)</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Briquetting machine sizing and specification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Integration planning with existing systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">ROI validation and financial approval</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Conclusion: Transforming Waste into Profit
              </h2>
              
              <p>
                Briquetting machines represent one of the most effective investments manufacturing 
                facilities can make to reduce operational costs while improving environmental 
                performance. With typical payback periods under 12 months and annual savings 
                exceeding $300,000 for mid-sized operations, the financial case for briquetting 
                technology is compelling.
              </p>

              <p>
                Beyond immediate cost savings, briquetting systems provide long-term competitive 
                advantages through improved operational efficiency, enhanced safety, and better 
                environmental compliance. As manufacturing costs continue to rise, facilities that 
                implement briquetting technology today will be better positioned for sustainable 
                profitability tomorrow.
              </p>

              <div className="bg-arzir-primary/10 border border-arzir-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold text-black mb-4">
                  Ready to Calculate Your Savings?
                </h3>
                <p className="text-arzir-gray-700 mb-6">
                  Our engineering team can perform a detailed cost analysis for your facility and 
                  provide customized ROI projections based on your specific waste volumes and 
                  operational requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <QuoteDialog source="briquetting_cost_savings_blog">
                    <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                      Get Custom Cost Analysis
                      <Calculator className="ml-2 h-5 w-5" />
                    </Button>
                  </QuoteDialog>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/products/briquetting-machine">
                      View Briquetting Machines
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold text-black text-center">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
                <h3 className="text-xl font-heading font-bold text-black mb-3">
                  Briquetting Machine vs Baling Machine: Which to Choose?
                </h3>
                <p className="text-arzir-gray-600 mb-4">
                  Compare the advantages and applications of briquetting versus baling technologies for metal waste processing.
                </p>
                <Link href="/blog/briquetting-vs-baling-machine" className="text-arzir-primary font-medium hover:text-primary-600">
                  Read More <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
                <h3 className="text-xl font-heading font-bold text-black mb-3">
                  Complete Guide to Metal Recycling Equipment
                </h3>
                <p className="text-arzir-gray-600 mb-4">
                  Comprehensive overview of metal recycling equipment options and their applications in modern manufacturing facilities.
                </p>
                <Link href="/blog/metal-recycling-equipment-guide" className="text-arzir-primary font-medium hover:text-primary-600">
                  Read More <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}