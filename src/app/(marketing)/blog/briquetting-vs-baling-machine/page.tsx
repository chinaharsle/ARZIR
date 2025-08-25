import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronRight, CheckCircle, Settings, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Briquetting Machine vs Baling Machine: Which to Choose? | ARZIR Blog",
  description: "Complete comparison of briquetting machines vs baling machines for metal waste processing. Learn about applications, advantages, costs, and which technology is right for your facility.",
  keywords: [
    "briquetting vs baling",
    "briquetting machine vs baling machine",
    "metal waste processing comparison",
    "scrap metal compaction methods",
    "briquetter vs baler",
    "metal recycling equipment comparison"
  ],
  openGraph: {
    title: "Briquetting Machine vs Baling Machine: Which to Choose?",
    description: "Comprehensive comparison of briquetting and baling technologies to help you choose the right metal waste processing solution for your facility.",
    images: [
      {
        url: "/images/blog/Briquetting Machine vs Baling Machine Which to Choose.png",
        width: 1200,
        height: 630,
        alt: "Briquetting Machine vs Baling Machine Comparison"
      }
    ]
  }
};

const comparisonData = [
  {
    feature: "Primary Application",
    briquetting: "Metal chips, turnings, swarf compaction",
    baling: "Large metal pieces, car bodies, structural steel",
    winner: "tie"
  },
  {
    feature: "Volume Reduction",
    briquetting: "85-95% (chips to dense blocks)",
    baling: "70-85% (structural compression)",
    winner: "briquetting"
  },
  {
    feature: "Density Achievement",
    briquetting: "4-7 g/cm³ high-density briquettes",
    baling: "2-4 g/cm³ compressed bales",
    winner: "briquetting"
  },
  {
    feature: "Material Size Range",
    briquetting: "3-25mm chips and turnings",
    baling: "Large pieces, whole objects",
    winner: "tie"
  },
  {
    feature: "Processing Speed",
    briquetting: "300-1800 kg/hour continuous",
    baling: "10-40 items/hour batch process",
    winner: "briquetting"
  },
  {
    feature: "Oil Recovery",
    briquetting: "95-98% cutting fluid recovery",
    baling: "Minimal oil recovery capability",
    winner: "briquetting"
  },
  {
    feature: "Initial Investment",
    briquetting: "$85,000-250,000",
    baling: "$150,000-800,000",
    winner: "briquetting"
  },
  {
    feature: "Operating Costs",
    briquetting: "Lower energy per ton processed",
    baling: "Higher energy consumption",
    winner: "briquetting"
  },
  {
    feature: "Maintenance Requirements",
    briquetting: "Monthly service intervals",
    baling: "Weekly maintenance required",
    winner: "briquetting"
  },
  {
    feature: "Automation Level",
    briquetting: "Fully automated operation",
    baling: "Semi-automated with manual loading",
    winner: "briquetting"
  }
];

const applicationScenarios = [
  {
    scenario: "CNC Machining Shop",
    description: "High-volume production of metal chips and turnings from machining operations",
    recommendation: "Briquetting Machine",
    reasoning: "Continuous processing of uniform chip sizes with oil recovery",
    benefits: ["90% volume reduction", "Oil recovery savings", "Automated operation"],
    equipment: "ARZIR BP-315 or BP-500"
  },
  {
    scenario: "Automotive Recycling Center",
    description: "Processing end-of-life vehicles and large automotive components",
    recommendation: "Baling Machine (Car Body Baler)",
    reasoning: "Designed for whole vehicle compression and large structural components",
    benefits: ["Complete vehicle processing", "80% volume reduction", "Export bale format"],
    equipment: "ARZIR CB-1000 or CB-1500"
  },
  {
    scenario: "Steel Fabrication Facility",
    description: "Mixed waste including both chips from machining and structural offcuts",
    recommendation: "Both Technologies",
    reasoning: "Briquetting for chips, baling for large structural pieces",
    benefits: ["Optimized processing for each material type", "Maximum value recovery", "Comprehensive waste solution"],
    equipment: "ARZIR BP-500 + Structural Baler"
  },
  {
    scenario: "Aluminum Extrusion Plant",
    description: "Large volumes of aluminum chips and profile offcuts",
    recommendation: "Briquetting Machine",
    reasoning: "Superior density and melting efficiency for aluminum recycling",
    benefits: ["Premium aluminum briquette pricing", "Improved furnace efficiency", "Reduced oxidation"],
    equipment: "ARZIR BP-630 High-Capacity"
  }
];

const technologyOverview = [
  {
    technology: "Briquetting Technology",
    description: "High-pressure hydraulic compression transforms loose metal chips into dense, uniform blocks",
    howItWorks: [
      "Metal chips fed into hydraulic chamber",
      "Up to 630 tons pressure applied",
      "Material compressed into dense briquettes",
      "Automatic discharge and oil recovery"
    ],
    idealFor: ["Machining waste", "Metal chips", "Turnings and swarf", "Oil-contaminated materials"],
    keyAdvantages: ["Highest density", "Oil recovery", "Continuous operation", "Premium scrap value"]
  },
  {
    technology: "Baling Technology", 
    description: "Mechanical compression system creates large, manageable bales from bulky metal materials",
    howItWorks: [
      "Large materials loaded into chamber",
      "Powerful rams compress materials",
      "Wire ties secure compressed bales",
      "Bales ejected for transport"
    ],
    idealFor: ["Car bodies", "Structural steel", "Large metal objects", "Mixed metal waste"],
    keyAdvantages: ["Handles large items", "Simple operation", "Proven technology", "Export-ready format"]
  }
];

const costAnalysis = [
  {
    category: "Initial Investment",
    briquetting: "$85,000-250,000",
    baling: "$150,000-800,000",
    note: "Briquetting generally requires lower initial investment"
  },
  {
    category: "Operating Costs (per ton)",
    briquetting: "$15-25",
    baling: "$25-40", 
    note: "Briquetting offers lower processing costs per ton"
  },
  {
    category: "Maintenance Costs (annual)",
    briquetting: "$8,000-15,000",
    baling: "$15,000-30,000",
    note: "Briquetting has lower maintenance requirements"
  },
  {
    category: "Labor Requirements",
    briquetting: "0.5-1 operator per shift",
    baling: "1-2 operators per shift",
    note: "Briquetting requires minimal labor input"
  },
  {
    category: "Energy Consumption (kW/ton)",
    briquetting: "25-40 kW/ton",
    baling: "35-60 kW/ton",
    note: "Briquetting is more energy efficient"
  }
];

export default function BriquettingVsBalingBlogPage() {
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
              <span>Equipment Comparison</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Briquetting Machine vs Baling Machine: Which to Choose?
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-arzir-gray-600 border-b border-arzir-gray-200 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 18, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>ARZIR Technical Team</span>
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
                Choosing the right metal waste processing equipment can significantly impact your facility&apos;s 
                operational efficiency, costs, and material recovery value. Two primary technologies dominate 
                the metal waste processing market: briquetting machines and baling machines. While both serve 
                the fundamental purpose of volume reduction and material handling improvement, they operate on 
                different principles and excel in different applications.
              </p>
              
              <p>
                This comprehensive comparison examines both technologies across multiple criteria including 
                applications, costs, efficiency, and long-term value to help you make an informed decision 
                for your facility&apos;s specific needs.
              </p>
            </div>

            {/* Featured Image Placeholder */}
            <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/images/blog/Briquetting Machine vs Baling Machine Which to Choose.png"
                alt="Briquetting Machine vs Baling Machine Comparison"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Technology Overview */}
            <div className="space-y-8">
              <h2 className="text-3xl font-heading font-bold text-black">
                Understanding the Technologies
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {technologyOverview.map((tech, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-heading font-bold text-black">
                        {tech.technology}
                      </h3>
                      
                      <p className="text-arzir-gray-600 leading-relaxed">
                        {tech.description}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3">How It Works:</h4>
                        <ol className="space-y-2">
                          {tech.howItWorks.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-arzir-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {i + 1}
                              </span>
                              <span className="text-arzir-gray-600">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3">Ideal For:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tech.idealFor.map((application, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                              {application}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3">Key Advantages:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tech.keyAdvantages.map((advantage, i) => (
                            <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                              {advantage}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Comparison Table */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Head-to-Head Comparison
              </h2>
              
              <p>
                The following comprehensive comparison evaluates both technologies across ten critical 
                performance and economic factors to provide a clear picture of their relative strengths.
              </p>

              <div className="bg-white rounded-2xl p-8 overflow-x-auto shadow-sm border border-arzir-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-arzir-gray-50">
                      <th className="p-4 text-left font-bold text-black">Comparison Factor</th>
                      <th className="p-4 text-left font-bold text-black">Briquetting Machine</th>
                      <th className="p-4 text-left font-bold text-black">Baling Machine</th>
                      <th className="p-4 text-center font-bold text-black">Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                        <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.feature}</td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{item.briquetting}</td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{item.baling}</td>
                        <td className="border border-arzir-gray-200 p-4 text-center">
                          {item.winner === "briquetting" && (
                            <div className="flex items-center justify-center gap-2 text-green-600">
                              <CheckCircle className="h-5 w-5" />
                              <span className="font-medium">Briquetting</span>
                            </div>
                          )}
                          {item.winner === "baling" && (
                            <div className="flex items-center justify-center gap-2 text-blue-600">
                              <CheckCircle className="h-5 w-5" />
                              <span className="font-medium">Baling</span>
                            </div>
                          )}
                          {item.winner === "tie" && (
                            <span className="text-arzir-gray-500 font-medium">Application Specific</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Application Scenarios */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Which Technology for Your Application?
              </h2>
              
              <p>
                The optimal choice depends heavily on your specific materials, volumes, and operational 
                requirements. Here are four common scenarios with our recommendations:
              </p>

              <div className="space-y-6">
                {applicationScenarios.map((scenario, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-black mb-2">
                          {scenario.scenario}
                        </h3>
                        <p className="text-arzir-gray-600 mb-4">
                          {scenario.description}
                        </p>
                        <div className="text-sm text-arzir-gray-500">
                          Recommended Equipment: {scenario.equipment}
                        </div>
                      </div>
                      
                      <div>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-3 ${
                          scenario.recommendation === "Briquetting Machine" ? "bg-green-100 text-green-700" :
                          scenario.recommendation === "Baling Machine (Car Body Baler)" ? "bg-blue-100 text-blue-700" :
                          "bg-purple-100 text-purple-700"
                        }`}>
                          <Target className="h-4 w-4" />
                          {scenario.recommendation}
                        </div>
                        <p className="text-sm text-arzir-gray-600 mb-3">
                          <strong>Why this choice:</strong> {scenario.reasoning}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-black mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {scenario.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-arzir-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Analysis */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Total Cost of Ownership Analysis
              </h2>
              
              <p>
                Beyond initial purchase price, understanding the complete cost picture requires examining 
                operating expenses, maintenance costs, and long-term value creation potential.
              </p>

              <div className="bg-white rounded-2xl p-8 overflow-x-auto shadow-sm border border-arzir-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-arzir-gray-50">
                      <th className="p-4 text-left font-bold text-black">Cost Category</th>
                      <th className="p-4 text-left font-bold text-black">Briquetting</th>
                      <th className="p-4 text-left font-bold text-black">Baling</th>
                      <th className="p-4 text-left font-bold text-black">Analysis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costAnalysis.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                        <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.category}</td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{item.briquetting}</td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{item.baling}</td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-600 text-sm">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-green-800 mb-3">
                    Briquetting Advantages
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-green-700">Lower initial investment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-green-700">Reduced operating costs per ton</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-green-700">Oil recovery revenue stream</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-green-700">Premium scrap metal pricing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">
                    Baling Advantages
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-blue-700">Handles oversized materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-blue-700">Proven technology reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-blue-700">Export market compatibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-blue-700">Simpler operation requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Decision Matrix */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Decision Matrix: Making the Right Choice
              </h2>
              
              <p>
                Use this decision framework to evaluate which technology best fits your specific situation:
              </p>

              <div className="bg-arzir-gray-50 p-8 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-green-700 mb-4">
                      Choose Briquetting If:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Primary waste is metal chips, turnings, or swarf (3-25mm size)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Materials contain cutting fluids or oils worth recovering</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>High processing volumes (300+ kg/hour required)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Maximum density is critical for melting efficiency</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Automated operation is preferred</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-heading font-bold text-blue-700 mb-4">
                      Choose Baling If:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Processing large items like car bodies or structural steel</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Mixed material types and sizes in waste stream</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Export market requirements for baled formats</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Batch processing approach is acceptable</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Simple operation and maintenance preferred</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-black">
                Conclusion: The Right Technology for Your Needs
              </h2>
              
              <p>
                Both briquetting and baling technologies serve important roles in metal waste processing, 
                but they excel in different applications. Briquetting machines offer superior performance 
                for facilities processing machining waste, offering higher density, oil recovery, and 
                automated operation. Baling machines remain the optimal choice for facilities handling 
                large structural materials and complete vehicles.
              </p>

              <p>
                For many facilities, the decision comes down to waste stream characteristics: if your 
                primary waste consists of chips and turnings from machining operations, briquetting 
                typically provides better ROI and operational efficiency. If you&apos;re processing large 
                items or mixed materials, baling offers proven reliability and versatility.
              </p>

              <div className="bg-arzir-primary/10 border border-arzir-primary/20 rounded-2xl p-8">
                <h3 className="text-xl font-heading font-bold text-black mb-4">
                  Need Help Choosing the Right Technology?
                </h3>
                <p className="text-arzir-gray-700 mb-6">
                  Our technical team can analyze your specific waste stream, processing requirements, 
                  and budget constraints to recommend the optimal solution for your facility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <QuoteDialog source="briquetting_vs_baling_blog">
                    <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                      Get Equipment Recommendation
                      <Settings className="ml-2 h-5 w-5" />
                    </Button>
                  </QuoteDialog>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/products">
                      View All Equipment
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
                  How Briquetting Machines Reduce Metal Waste Storage Costs
                </h3>
                <p className="text-arzir-gray-600 mb-4">
                  Detailed analysis of cost savings and ROI from briquetting machine implementation in manufacturing facilities.
                </p>
                <Link href="/blog/briquetting-cost-savings" className="text-arzir-primary font-medium hover:text-primary-600">
                  Read More <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100">
                <h3 className="text-xl font-heading font-bold text-black mb-3">
                  Complete Guide to Car Body Balers
                </h3>
                <p className="text-arzir-gray-600 mb-4">
                  Everything you need to know about car body baling technology for automotive recycling operations.
                </p>
                <Link href="/blog/car-body-baler-guide" className="text-arzir-primary font-medium hover:text-primary-600">
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