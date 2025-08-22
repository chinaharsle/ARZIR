import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronRight, CheckCircle, Calculator, TrendingUp, BarChart3, Factory, Target } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Recycling ROI Analysis Guide | ARZIR Resources",
  description: "Comprehensive guide to analyzing ROI for metal waste processing equipment. Includes scenarios, benchmarks, cost factors, and investment analysis frameworks.",
  keywords: [
    "metal recycling ROI analysis",
    "metal waste processing ROI",
    "recycling equipment payback analysis",
    "metal processing investment guide",
    "waste management ROI guide",
    "recycling equipment cost benefit analysis"
  ],
  openGraph: {
    title: "Metal Recycling ROI Analysis Guide",
    description: "Complete guide to analyzing return on investment for metal waste processing equipment with real scenarios and industry benchmarks.",
    images: [
      {
        url: "/images/resources/roi-analysis-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Metal Recycling ROI Analysis Guide"
      }
    ]
  }
};

const calculatorSteps = [
  {
    step: 1,
    title: "Current Operations Assessment",
    description: "Evaluate your existing metal waste volumes, storage costs, and processing methods",
    fields: [
      "Monthly metal waste volume (tons)",
      "Current storage space (m²)",
      "Storage cost per m² per month",
      "Transportation frequency",
      "Current scrap metal selling price"
    ]
  },
  {
    step: 2,
    title: "Equipment Selection",
    description: "Choose the appropriate metal processing equipment for your operations",
    fields: [
      "Equipment type (Briquetting/Baling/Shredding)",
      "Processing capacity required",
      "Material types to process",
      "Automation level required",
      "Installation requirements"
    ]
  },
  {
    step: 3,
    title: "Investment Analysis",
    description: "Calculate total investment costs including equipment, installation, and training",
    fields: [
      "Equipment purchase price",
      "Installation and commissioning",
      "Operator training costs",
      "Facility modifications",
      "Initial spare parts inventory"
    ]
  },
  {
    step: 4,
    title: "Savings Calculation",
    description: "Determine potential savings from improved processing efficiency and value recovery",
    fields: [
      "Volume reduction percentage",
      "Transportation cost savings",
      "Storage space reduction",
      "Improved scrap metal pricing",
      "Labor cost optimization"
    ]
  }
];

const roiScenarios = [
  {
    scenario: "Small Machining Shop",
    volume: "10 tons/month",
    equipment: "ARZIR BP-200 Briquetting Machine",
    investment: "$95,000",
    annualSavings: "$45,000",
    paybackPeriod: "25 months",
    details: {
      storageSavings: "$8,000",
      transportSavings: "$12,000",
      valueSavings: "$18,000",
      laborSavings: "$7,000"
    }
  },
  {
    scenario: "Medium Manufacturing Facility",
    volume: "50 tons/month",
    equipment: "ARZIR BP-500 Briquetting Machine",
    investment: "$180,000",
    annualSavings: "$125,000",
    paybackPeriod: "17 months",
    details: {
      storageSavings: "$25,000",
      transportSavings: "$35,000",
      valueSavings: "$45,000",
      laborSavings: "$20,000"
    }
  },
  {
    scenario: "Large Industrial Plant",
    volume: "150 tons/month",
    equipment: "ARZIR BP-630 Briquetting Machine",
    investment: "$250,000",
    annualSavings: "$310,000",
    paybackPeriod: "10 months",
    details: {
      storageSavings: "$60,000",
      transportSavings: "$85,000",
      valueSavings: "$120,000",
      laborSavings: "$45,000"
    }
  },
  {
    scenario: "Auto Recycling Center",
    volume: "200 vehicles/month",
    equipment: "ARZIR CB-1000 Car Body Baler",
    investment: "$320,000",
    annualSavings: "$280,000",
    paybackPeriod: "14 months",
    details: {
      storageSavings: "$40,000",
      transportSavings: "$120,000",
      valueSavings: "$80,000",
      laborSavings: "$40,000"
    }
  }
];

const costFactors = [
  {
    category: "Storage Costs",
    description: "Warehouse space rental or opportunity costs",
    calculation: "Storage area (m²) × Cost per m² × 12 months",
    typicalRange: "$30-100 per m²/year",
    optimizationPotential: "80-90% reduction"
  },
  {
    category: "Transportation Costs",
    description: "Shipping and logistics expenses for waste materials",
    calculation: "Shipments per year × Cost per shipment",
    typicalRange: "$200-800 per shipment",
    optimizationPotential: "70-90% reduction"
  },
  {
    category: "Material Handling Labor",
    description: "Labor costs for waste sorting, moving, and loading",
    calculation: "Hours per month × Hourly rate × 12 months",
    typicalRange: "$15-35 per hour",
    optimizationPotential: "50-80% reduction"
  },
  {
    category: "Material Value Recovery",
    description: "Difference in scrap metal pricing for processed vs. raw materials",
    calculation: "Volume per year × Price difference per ton",
    typicalRange: "$50-150 per ton improvement",
    optimizationPotential: "20-40% value increase"
  },
  {
    category: "Oil Recovery Value",
    description: "Recovered cutting fluids and oils for reuse",
    calculation: "Oil volume recovered × Replacement cost",
    typicalRange: "$3-8 per liter",
    optimizationPotential: "95-98% recovery rate"
  }
];

const industryBenchmarks = [
  {
    industry: "Automotive Manufacturing",
    averageVolume: "80-200 tons/month",
    typicalSavings: "$150,000-400,000/year",
    paybackPeriod: "12-20 months",
    keyBenefits: ["High-volume processing", "Premium aluminum recovery", "Automated operation"]
  },
  {
    industry: "Aerospace Manufacturing",
    averageVolume: "30-80 tons/month",
    typicalSavings: "$100,000-250,000/year",
    paybackPeriod: "15-24 months",
    keyBenefits: ["High-value materials", "Quality traceability", "Contamination control"]
  },
  {
    industry: "Steel Processing",
    averageVolume: "100-300 tons/month",
    typicalSavings: "$180,000-500,000/year",
    paybackPeriod: "10-18 months",
    keyBenefits: ["Bulk processing capability", "Transport efficiency", "Safety improvements"]
  },
  {
    industry: "General Machining",
    averageVolume: "20-60 tons/month",
    typicalSavings: "$50,000-150,000/year",
    paybackPeriod: "18-30 months",
    keyBenefits: ["Space optimization", "Oil recovery", "Process standardization"]
  }
];

export default function MetalRecyclingROICalculatorPage() {
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
              <span>ROI Tools</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Metal Recycling ROI Analysis Guide
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-arzir-gray-600 border-b border-arzir-gray-200 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated December 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>ARZIR Financial Team</span>
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
                  Understanding the return on investment for metal waste processing equipment is crucial for making 
                  informed purchasing decisions. This comprehensive analysis guide provides frameworks, real-world 
                  scenarios, and industry benchmarks to help you evaluate the financial impact of upgrading your 
                  metal recycling operations.
                </p>
                
                <p>
                  Our analysis covers all major cost factors including storage expenses, transportation costs, 
                  labor requirements, material value recovery, and operational efficiency improvements. Use these 
                  proven methodologies to build compelling business cases and secure investment approval.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6">
                <h3 className="text-lg font-heading font-bold text-green-800 mb-4">Analysis Benefits</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Proven ROI methodologies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Real-world case studies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Industry benchmarks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Financial frameworks
                  </li>
                </ul>
              </div>
              
              <div className="bg-arzir-primary/10 border border-arzir-primary/20 rounded-2xl p-6">
                <h3 className="text-lg font-heading font-bold text-black mb-4">Need Custom Analysis?</h3>
                <p className="text-arzir-gray-600 mb-4">
                  Use our analysis frameworks or request a custom ROI calculation for your specific facility and requirements.
                </p>
                <QuoteDialog source="roi_analysis_custom_calculation">
                  <Button className="w-full bg-arzir-primary hover:bg-primary-600">
                    Request Custom ROI Analysis
                    <BarChart3 className="ml-2 h-4 w-4" />
                  </Button>
                </QuoteDialog>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Calculator Steps */}
      <Section background="gray" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              ROI Analysis Framework
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures accurate and comprehensive analysis of your investment potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {calculatorSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-black">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-3">Key Data Points:</h4>
                    <ul className="space-y-2">
                      {step.fields.map((field, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-arzir-gray-600">{field}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ROI Scenarios */}
      <Section size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              ROI Scenarios & Examples
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real-world examples showing potential returns on metal processing equipment investments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roiScenarios.map((scenario, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-black mb-2">
                      {scenario.scenario}
                    </h3>
                    <div className="text-arzir-gray-600">
                      Processing Volume: <span className="font-medium">{scenario.volume}</span>
                    </div>
                    <div className="text-arzir-gray-600">
                      Equipment: <span className="font-medium text-arzir-primary">{scenario.equipment}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{scenario.investment}</div>
                      <div className="text-sm text-blue-700">Investment</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{scenario.annualSavings}</div>
                      <div className="text-sm text-green-700">Annual Savings</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{scenario.paybackPeriod}</div>
                      <div className="text-sm text-purple-700">Payback Period</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">Annual Savings Breakdown:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Storage Savings:</span>
                        <span className="font-medium text-black">{scenario.details.storageSavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Transport Savings:</span>
                        <span className="font-medium text-black">{scenario.details.transportSavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Value Recovery:</span>
                        <span className="font-medium text-black">{scenario.details.valueSavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-arzir-gray-600">Labor Optimization:</span>
                        <span className="font-medium text-black">{scenario.details.laborSavings}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Cost Factors */}
      <Section background="gray" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Key Cost Factors Analysis
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Understanding the components that drive savings in metal waste processing operations
            </p>
          </div>
          
          <div className="space-y-6">
            {costFactors.map((factor, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-black mb-2">
                      {factor.category}
                    </h3>
                    <p className="text-arzir-gray-600">
                      {factor.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Calculation Method:</h4>
                    <p className="text-sm text-arzir-gray-600 font-mono bg-arzir-gray-50 p-2 rounded">
                      {factor.calculation}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Typical Range:</h4>
                    <p className="text-sm font-bold text-arzir-primary">
                      {factor.typicalRange}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2">Optimization Potential:</h4>
                    <p className="text-sm font-bold text-green-600">
                      {factor.optimizationPotential}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industry Benchmarks */}
      <Section size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Industry Benchmarks
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Compare your potential ROI against industry-specific performance metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryBenchmarks.map((benchmark, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <Factory className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-black">
                        {benchmark.industry}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-arzir-primary">{benchmark.averageVolume}</div>
                      <div className="text-sm text-arzir-gray-600">Volume Range</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{benchmark.typicalSavings}</div>
                      <div className="text-sm text-arzir-gray-600">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{benchmark.paybackPeriod}</div>
                      <div className="text-sm text-arzir-gray-600">Payback Period</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {benchmark.keyBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
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
      </Section>

      {/* Interactive Calculator CTA */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Ready to Analyze Your ROI Potential?
            </h2>
            <p className="text-xl text-arzir-gray-600">
              Get a customized ROI analysis based on your exact operational parameters, waste volumes, 
              and facility requirements. Our team will provide detailed projections and recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-black">Custom ROI Analysis</h3>
              <p className="text-arzir-gray-600">Detailed ROI calculation for your specific situation</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-black">Financial Projections</h3>
              <p className="text-arzir-gray-600">5-year financial projections and cash flow analysis</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-black">Equipment Recommendations</h3>
              <p className="text-arzir-gray-600">Optimal equipment selection for maximum ROI</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="roi_calculator_detailed_analysis">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Detailed ROI Analysis
                <BarChart3 className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">
                View Equipment Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}