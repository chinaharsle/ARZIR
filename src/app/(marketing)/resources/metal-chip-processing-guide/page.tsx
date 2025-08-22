import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronRight, CheckCircle, Settings, TrendingUp, Award, Target, Factory, Shield, BarChart3, Calculator } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Metal Chip Processing Guide | ARZIR Resources",
  description: "Comprehensive guide to metal chip processing, covering types, methods, optimization strategies, and best practices for maximum recovery value in manufacturing operations.",
  keywords: [
    "metal chip processing",
    "aluminum chip recycling",
    "steel chip recovery",
    "copper chip processing",
    "machining waste management",
    "metal turning processing"
  ],
  openGraph: {
    title: "Complete Metal Chip Processing Guide",
    description: "Expert techniques and strategies for optimizing metal chip processing operations, maximizing recovery value, and reducing waste management costs.",
    images: [
      {
        url: "/images/resources/metal-chip-processing.jpg",
        width: 1200,
        height: 630,
        alt: "Metal Chip Processing Guide"
      }
    ]
  }
};

const chipTypes = [
  {
    material: "Aluminum Chips",
    characteristics: [
      "Lightweight with high surface area",
      "Prone to oxidation when exposed to air",
      "Oil content: 5-15%",
      "Processing temperature: 660°C"
    ],
    challenges: [
      "Fire risk due to fine particles",
      "Oxidation reduces melting value",
      "High oil contamination"
    ],
    solutions: [
      "Immediate processing to prevent oxidation",
      "Oil recovery systems",
      "Briquetting for density increase"
    ],
    recoveryValue: "$1,800-2,200/ton"
  },
  {
    material: "Steel Chips",
    characteristics: [
      "High density and magnetic properties",
      "Various grades affecting value",
      "Oil content: 3-12%",
      "Processing temperature: 1,500°C"
    ],
    challenges: [
      "Mixed steel grades contamination",
      "Rust formation",
      "Bulky storage requirements"
    ],
    solutions: [
      "Magnetic separation by grade",
      "Prompt processing to prevent rust",
      "Compaction for efficient transport"
    ],
    recoveryValue: "$150-300/ton"
  },
  {
    material: "Copper Chips",
    characteristics: [
      "High conductivity and corrosion resistance",
      "Premium scrap metal value",
      "Oil content: 4-10%",
      "Processing temperature: 1,084°C"
    ],
    challenges: [
      "High theft risk due to value",
      "Contamination with other metals",
      "Oil extraction complexity"
    ],
    solutions: [
      "Secure storage systems",
      "Strict contamination control",
      "Professional oil recovery"
    ],
    recoveryValue: "$6,000-8,000/ton"
  },
  {
    material: "Cast Iron Chips",
    characteristics: [
      "Brittle with graphite content",
      "Lower melting point than steel",
      "Oil content: 2-8%",
      "Processing temperature: 1,200°C"
    ],
    challenges: [
      "Graphite separation required",
      "Quality grade variations",
      "Dust generation during handling"
    ],
    solutions: [
      "Controlled crushing and separation",
      "Grade-specific processing",
      "Dust control systems"
    ],
    recoveryValue: "$120-250/ton"
  }
];

const processingMethods = [
  {
    method: "Briquetting",
    description: "High-pressure hydraulic compression transforms loose chips into dense blocks",
    advantages: [
      "90% volume reduction",
      "95-98% oil recovery",
      "Premium scrap pricing",
      "Improved melting efficiency"
    ],
    applications: "Ideal for all chip types, especially aluminum and steel",
    equipment: "Hydraulic briquetting press (200-630 tons)",
    costRange: "$85,000-250,000"
  },
  {
    method: "Baling",
    description: "Mechanical compression creates large bales suitable for transport",
    advantages: [
      "70-80% volume reduction",
      "Simple operation",
      "Lower initial investment",
      "Good for mixed materials"
    ],
    applications: "Suitable for larger chips and mixed metal waste",
    equipment: "Hydraulic baling press",
    costRange: "$50,000-150,000"
  },
  {
    method: "Shredding",
    description: "Size reduction through cutting and tearing action",
    advantages: [
      "Uniform size reduction",
      "High throughput capacity",
      "Suitable for contaminated materials",
      "Automated operation"
    ],
    applications: "Pre-processing for mixed or oversized materials",
    equipment: "Industrial metal shredder",
    costRange: "$150,000-500,000"
  },
  {
    method: "Melting Direct",
    description: "Direct melting without prior processing",
    advantages: [
      "No pre-processing required",
      "Immediate value recovery",
      "Simple process flow",
      "Lower equipment investment"
    ],
    applications: "Clean, uniform chips with minimal contamination",
    equipment: "Industrial melting furnace",
    costRange: "$200,000-800,000"
  }
];

const optimizationStrategies = [
  {
    category: "Collection & Sorting",
    strategies: [
      "Implement segregation at source to prevent contamination",
      "Use magnetic separation for ferrous/non-ferrous classification",
      "Establish regular collection schedules to prevent oxidation",
      "Train operators on proper sorting techniques"
    ],
    benefits: "15-25% increase in recovery value"
  },
  {
    category: "Storage & Handling",
    strategies: [
      "Use covered storage to prevent moisture absorption",
      "Implement FIFO (First In, First Out) rotation system",
      "Minimize handling to reduce material loss",
      "Control storage temperature and humidity"
    ],
    benefits: "10-15% reduction in material degradation"
  },
  {
    category: "Processing Optimization",
    strategies: [
      "Optimize pressure settings for maximum density",
      "Implement oil recovery systems for value addition",
      "Use appropriate die configurations for different materials",
      "Monitor and control processing parameters"
    ],
    benefits: "20-30% increase in processing efficiency"
  },
  {
    category: "Quality Control",
    strategies: [
      "Regular material composition analysis",
      "Implement contamination detection systems",
      "Monitor briquette density and quality",
      "Maintain processing equipment properly"
    ],
    benefits: "10-20% improvement in final product quality"
  }
];

const costBenefitAnalysis = [
  {
    factor: "Storage Space",
    beforeOptimization: "1000 m² warehouse space",
    afterOptimization: "100 m² warehouse space",
    savings: "90% space reduction",
    annualValue: "$45,000"
  },
  {
    factor: "Transportation",
    beforeOptimization: "20 truckloads/month",
    afterOptimization: "2 truckloads/month",
    savings: "90% shipping reduction",
    annualValue: "$96,000"
  },
  {
    factor: "Material Value",
    beforeOptimization: "$150/ton loose chips",
    afterOptimization: "$220/ton briquettes",
    savings: "$70/ton increase",
    annualValue: "$84,000"
  },
  {
    factor: "Oil Recovery",
    beforeOptimization: "Total loss of cutting fluids",
    afterOptimization: "95% fluid recovery",
    savings: "Oil reuse value",
    annualValue: "$35,000"
  }
];

export default function MetalChipProcessingGuidePage() {
  return (
    <>
      {/* Header */}
      <Section size="lg" className="!pt-20 sm:!pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-arzir-gray-600">
              <Link href="/resources" className="hover:text-arzir-primary transition-colors">
                Resources
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Technical Guides</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Complete Metal Chip Processing Guide
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-arzir-gray-600 border-b border-arzir-gray-200 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated December 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>ARZIR Technical Team</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Introduction */}
      <Section size="lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-arzir-gray-700 leading-relaxed">
                  Metal chip processing is a critical component of modern manufacturing operations, affecting both 
                  operational costs and environmental impact. This comprehensive guide covers everything from basic 
                  chip classification to advanced processing techniques and optimization strategies.
                </p>
                
                <p>
                  Whether you&apos;re dealing with aluminum turnings from aerospace manufacturing, steel chips from 
                  automotive production, or copper swarf from electrical components, understanding proper processing 
                  methods can dramatically improve your material recovery value and reduce waste management costs.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-arzir-primary/10 border border-arzir-primary/20 rounded-2xl p-6">
                <h3 className="text-lg font-heading font-bold text-black mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  <a href="#chip-types" className="block text-arzir-primary hover:text-primary-600 text-sm">
                    Metal Chip Types & Characteristics
                  </a>
                  <a href="#processing-methods" className="block text-arzir-primary hover:text-primary-600 text-sm">
                    Processing Methods Comparison
                  </a>
                  <a href="#optimization" className="block text-arzir-primary hover:text-primary-600 text-sm">
                    Optimization Strategies
                  </a>
                  <a href="#cost-analysis" className="block text-arzir-primary hover:text-primary-600 text-sm">
                    Cost-Benefit Analysis
                  </a>
                </nav>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    90% volume reduction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Up to 98% oil recovery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    $260,000 annual savings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Metal Chip Types */}
      <Section background="gray" size="lg" id="chip-types">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Metal Chip Types & Characteristics
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Understanding the unique properties of different metal chips is essential for selecting optimal processing methods
            </p>
          </div>
          
          <div className="space-y-8">
            {chipTypes.map((chip, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-black mb-4">
                      {chip.material}
                    </h3>
                    <div className="text-2xl font-bold text-arzir-primary mb-2">
                      {chip.recoveryValue}
                    </div>
                    <div className="text-sm text-arzir-gray-500">Current market value</div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">Characteristics</h4>
                    <ul className="space-y-1">
                      {chip.characteristics.map((char, i) => (
                        <li key={i} className="text-sm text-arzir-gray-600">• {char}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-3">Challenges</h4>
                    <ul className="space-y-1">
                      {chip.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-arzir-gray-600">• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-3">Solutions</h4>
                    <ul className="space-y-1">
                      {chip.solutions.map((solution, i) => (
                        <li key={i} className="text-sm text-arzir-gray-600">• {solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Processing Methods */}
      <Section size="lg" id="processing-methods">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Processing Methods Comparison
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Choose the right processing method based on your material type, volume, and quality requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processingMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-black mb-2">
                      {method.method}
                    </h3>
                    <p className="text-arzir-gray-600 leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-3">Advantages</h4>
                    <ul className="space-y-2">
                      {method.advantages.map((advantage, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-arzir-gray-600">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <span className="text-sm font-medium text-black">Applications: </span>
                      <span className="text-sm text-arzir-gray-600">{method.applications}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-black">Equipment: </span>
                      <span className="text-sm text-arzir-gray-600">{method.equipment}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-black">Investment: </span>
                      <span className="text-sm font-bold text-arzir-primary">{method.costRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Optimization Strategies */}
      <Section background="gray" size="lg" id="optimization">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Optimization Strategies
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Proven strategies to maximize recovery value and minimize processing costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationStrategies.map((strategy, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      {index === 0 && <Target className="h-8 w-8 text-white" />}
                      {index === 1 && <Factory className="h-8 w-8 text-white" />}
                      {index === 2 && <Settings className="h-8 w-8 text-white" />}
                      {index === 3 && <Shield className="h-8 w-8 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-black">
                        {strategy.category}
                      </h3>
                      <div className="text-lg font-bold text-green-600">
                        {strategy.benefits}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {strategy.strategies.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-arzir-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Cost-Benefit Analysis */}
      <Section size="lg" id="cost-analysis">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Cost-Benefit Analysis
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real-world financial impact of implementing optimized metal chip processing
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto shadow-sm border border-arzir-gray-100">
            <table className="w-full">
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="p-4 text-left font-bold text-black">Cost Factor</th>
                  <th className="p-4 text-left font-bold text-black">Before Optimization</th>
                  <th className="p-4 text-left font-bold text-black">After Optimization</th>
                  <th className="p-4 text-left font-bold text-black">Improvement</th>
                  <th className="p-4 text-right font-bold text-black">Annual Savings</th>
                </tr>
              </thead>
              <tbody>
                {costBenefitAnalysis.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{item.factor}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{item.beforeOptimization}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{item.afterOptimization}</td>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-green-600">{item.savings}</td>
                    <td className="border border-arzir-gray-200 p-4 text-right font-bold text-arzir-primary">{item.annualValue}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-arzir-primary/10">
                  <td colSpan={4} className="border border-arzir-gray-200 p-4 font-bold text-black">Total Annual Savings:</td>
                  <td className="border border-arzir-gray-200 p-4 text-right font-bold text-arzir-primary text-xl">$260,000</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-green-800">ROI</h3>
                <div className="text-3xl font-bold text-green-600">18 months</div>
                <p className="text-green-700">Typical payback period</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-blue-800">Efficiency</h3>
                <div className="text-3xl font-bold text-blue-600">300%</div>
                <p className="text-blue-700">Processing improvement</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-purple-800">Quality</h3>
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <p className="text-purple-700">Material recovery rate</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Ready to Optimize Your Metal Chip Processing?
            </h2>
            <p className="text-xl text-arzir-gray-600">
              Get expert consultation on implementing these strategies in your facility. Our team can help you calculate 
              potential savings and design the optimal processing system for your specific requirements.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="metal_chip_processing_guide">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Processing Assessment
                <Calculator className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products/briquetting-machine">
                View Briquetting Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}