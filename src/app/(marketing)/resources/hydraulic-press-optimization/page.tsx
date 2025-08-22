import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, Wrench, Settings, Target, Gauge, Shield, Factory, DollarSign, TrendingUp, BarChart3, Calculator, Award, Zap, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hydraulic Press Optimization Guide | ARZIR Resources",
  description: "Expert techniques for maximizing hydraulic press efficiency, pressure optimization, maintenance best practices, and performance enhancement for industrial applications.",
  keywords: [
    "hydraulic press optimization",
    "hydraulic press efficiency",
    "hydraulic press maintenance",
    "hydraulic press troubleshooting",
    "hydraulic system optimization",
    "industrial press performance"
  ],
  openGraph: {
    title: "Hydraulic Press Optimization Guide",
    description: "Professional techniques and strategies for optimizing hydraulic press performance, reducing energy consumption, and maximizing operational efficiency.",
    images: [
      {
        url: "/images/resources/hydraulic-press-optimization.jpg",
        width: 1200,
        height: 630,
        alt: "Hydraulic Press Optimization Guide"
      }
    ]
  }
};

const optimizationCategories = [
  {
    category: "Pressure System Optimization",
    icon: Gauge,
    techniques: [
      {
        technique: "Pressure Profiling",
        description: "Develop custom pressure curves for different materials and applications",
        benefits: ["15-25% energy savings", "Improved product quality", "Extended die life"],
        implementation: "Use programmable controllers to create material-specific pressure profiles"
      },
      {
        technique: "Pump Selection Optimization",
        description: "Match pump capacity and type to specific application requirements",
        benefits: ["20-30% energy reduction", "Reduced heat generation", "Lower maintenance costs"],
        implementation: "Variable displacement pumps for variable load applications"
      },
      {
        technique: "Accumulator Integration",
        description: "Strategic use of accumulators for peak demand management",
        benefits: ["Reduced peak power consumption", "Improved cycle consistency", "Faster response times"],
        implementation: "Size accumulators for 80% of peak demand with proper pre-charge pressure"
      }
    ]
  },
  {
    category: "Hydraulic Circuit Design",
    icon: Settings,
    techniques: [
      {
        technique: "Circuit Layout Optimization",
        description: "Minimize pressure losses through efficient hydraulic circuit design",
        benefits: ["10-15% pressure loss reduction", "Improved system response", "Lower operating temperatures"],
        implementation: "Use larger diameter lines for main circuits, minimize bends and fittings"
      },
      {
        technique: "Valve Selection & Sizing",
        description: "Proper valve selection for optimal flow control and pressure regulation",
        benefits: ["Precise pressure control", "Reduced energy waste", "Improved safety"],
        implementation: "Use proportional valves for variable loads, check valve sizing calculations"
      },
      {
        technique: "Filtration System Design",
        description: "Implement multi-stage filtration for optimal fluid cleanliness",
        benefits: ["Extended component life", "Reduced maintenance", "Improved reliability"],
        implementation: "Return filtration: 10μm, pressure filtration: 25μm, breather: 3μm"
      }
    ]
  },
  {
    category: "Control System Enhancement",
    icon: Cpu,
    techniques: [
      {
        technique: "PLC Programming Optimization",
        description: "Advanced control algorithms for optimal press operation",
        benefits: ["Consistent product quality", "Reduced cycle times", "Automated fault detection"],
        implementation: "Implement adaptive control algorithms and real-time monitoring"
      },
      {
        technique: "Sensor Integration",
        description: "Advanced sensing for real-time process monitoring and control",
        benefits: ["Predictive maintenance", "Quality assurance", "Process optimization"],
        implementation: "Pressure, temperature, position, and vibration sensors with data logging"
      },
      {
        technique: "Energy Management Systems",
        description: "Intelligent power management and consumption optimization",
        benefits: ["25-35% energy savings", "Demand charge reduction", "Environmental compliance"],
        implementation: "Load scheduling, power factor correction, variable frequency drives"
      }
    ]
  },
  {
    category: "Maintenance Optimization",
    icon: Wrench,
    techniques: [
      {
        technique: "Predictive Maintenance",
        description: "Data-driven maintenance scheduling based on actual equipment condition",
        benefits: ["50% reduction in unplanned downtime", "30% maintenance cost savings", "Extended equipment life"],
        implementation: "Oil analysis, vibration monitoring, thermal imaging, pressure testing"
      },
      {
        technique: "Hydraulic Fluid Management",
        description: "Optimal fluid selection, monitoring, and replacement strategies",
        benefits: ["Extended fluid life", "Improved system performance", "Reduced contamination"],
        implementation: "ISO cleanliness standards, regular fluid analysis, proper storage"
      },
      {
        technique: "Component Standardization",
        description: "Standardize components across equipment for maintenance efficiency",
        benefits: ["Reduced inventory costs", "Faster repairs", "Simplified training"],
        implementation: "Create component databases, standardize seal kits, bulk purchasing"
      }
    ]
  }
];

const performanceMetrics = [
  {
    metric: "Energy Efficiency",
    baseline: "100 kWh/cycle",
    optimized: "65 kWh/cycle",
    improvement: "35% reduction",
    impact: "$18,000 annual savings"
  },
  {
    metric: "Cycle Time",
    baseline: "120 seconds",
    optimized: "85 seconds",
    improvement: "29% faster",
    impact: "40% productivity increase"
  },
  {
    metric: "Maintenance Costs",
    baseline: "$25,000/year",
    optimized: "$15,000/year",
    improvement: "40% reduction",
    impact: "$10,000 annual savings"
  },
  {
    metric: "Downtime",
    baseline: "8% unplanned",
    optimized: "2% unplanned",
    improvement: "75% reduction",
    impact: "$45,000 revenue protection"
  },
  {
    metric: "Product Quality",
    baseline: "92% yield rate",
    optimized: "98% yield rate",
    improvement: "6% improvement",
    impact: "$22,000 waste reduction"
  }
];

const troubleshootingGuide = [
  {
    problem: "Inconsistent Pressure",
    symptoms: ["Pressure fluctuations during cycle", "Variable product quality", "Pump cycling"],
    causes: ["Worn pump components", "Air in system", "Contaminated fluid", "Incorrect valve settings"],
    solutions: [
      "Check pump wear plates and pistons",
      "Bleed air from all high points",
      "Replace hydraulic fluid and filters",
      "Calibrate pressure relief valves"
    ],
    prevention: "Regular fluid analysis and pump inspection"
  },
  {
    problem: "Excessive Heat Generation",
    symptoms: ["High fluid temperature (>60°C)", "Reduced efficiency", "Frequent seal failures"],
    causes: ["Oversized pump", "Internal leakage", "Poor heat exchange", "High system pressure"],
    solutions: [
      "Right-size pump for application",
      "Repair internal leakages",
      "Improve cooling system",
      "Optimize pressure settings"
    ],
    prevention: "Temperature monitoring and proper system sizing"
  },
  {
    problem: "Slow Cycle Times",
    symptoms: ["Extended press cycles", "Reduced productivity", "Insufficient force"],
    causes: ["Undersized pump", "Restricted flow paths", "Worn components", "Air contamination"],
    solutions: [
      "Upgrade pump capacity",
      "Clear flow restrictions",
      "Replace worn seals and valves",
      "Remove air from system"
    ],
    prevention: "Regular flow testing and component inspection"
  },
  {
    problem: "Excessive Vibration",
    symptoms: ["Noisy operation", "Component loosening", "Reduced accuracy"],
    causes: ["Pump cavitation", "Misalignment", "Worn bearings", "Pressure pulsations"],
    solutions: [
      "Check suction line sizing",
      "Align pump and motor",
      "Replace worn bearings",
      "Install pulsation dampeners"
    ],
    prevention: "Vibration monitoring and proper installation"
  }
];

const energySavingStrategies = [
  {
    strategy: "Variable Speed Control",
    description: "Use variable frequency drives to match pump speed to demand",
    energySavings: "25-40%",
    implementation: "Install VFDs on pump motors with pressure feedback control",
    investmentRange: "$8,000-15,000",
    paybackPeriod: "12-18 months"
  },
  {
    strategy: "Load Sensing Systems",
    description: "Automatically adjust system pressure based on actual load requirements",
    energySavings: "20-35%",
    implementation: "Load sensing pumps with pressure compensation valves",
    investmentRange: "$12,000-25,000",
    paybackPeriod: "18-24 months"
  },
  {
    strategy: "Idle Mode Operation",
    description: "Reduce system pressure during idle periods to minimize energy waste",
    energySavings: "15-25%",
    implementation: "Programmable pressure reduction with automatic restart",
    investmentRange: "$3,000-8,000",
    paybackPeriod: "8-12 months"
  },
  {
    strategy: "Energy Recovery Systems",
    description: "Capture and reuse energy from cylinder return strokes",
    energySavings: "10-20%",
    implementation: "Energy recovery valves and regenerative circuits",
    investmentRange: "$15,000-30,000",
    paybackPeriod: "24-36 months"
  }
];

export default function HydraulicPressOptimizationPage() {
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
              Hydraulic Press Optimization Guide
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-arzir-gray-600 border-b border-arzir-gray-200 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated December 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>18 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>ARZIR Engineering Team</span>
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
                  Hydraulic press optimization is crucial for maximizing productivity, reducing energy consumption, 
                  and minimizing operational costs in industrial applications. This comprehensive guide provides 
                  expert techniques and proven strategies for enhancing hydraulic press performance across all 
                  operational aspects.
                </p>
                
                <p>
                  From pressure system optimization to predictive maintenance strategies, this guide covers 
                  everything you need to know to transform your hydraulic press operations from basic functionality 
                  to peak performance, achieving energy savings of up to 40% and productivity improvements of 50% or more.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-heading font-bold text-blue-800 mb-4">Expected Results</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Energy Savings:</span>
                    <span className="font-bold text-blue-800">25-40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Productivity:</span>
                    <span className="font-bold text-blue-800">+50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Downtime:</span>
                    <span className="font-bold text-blue-800">-75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">ROI:</span>
                    <span className="font-bold text-blue-800">12-24 mo</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-arzir-primary/10 border border-arzir-primary/20 rounded-2xl p-6">
                <h3 className="text-lg font-heading font-bold text-black mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  <a href="#optimization-techniques" className="block text-arzir-primary hover:text-primary-600 text-sm">
                    Optimization Techniques
                  </a>
                  <a href="#performance-metrics" className="block text-arzir-primary hover:text-primary-600 text-sm">
                    Performance Metrics
                  </a>
                  <a href="#troubleshooting" className="block text-arzir-primary hover:text-primary-600 text-sm">
                    Troubleshooting Guide
                  </a>
                  <a href="#energy-savings" className="block text-arzir-primary hover:text-primary-600 text-sm">
                    Energy Saving Strategies
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Optimization Techniques */}
      <Section background="gray" size="lg" id="optimization-techniques">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Expert Optimization Techniques
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Proven strategies for maximizing hydraulic press efficiency across all operational aspects
            </p>
          </div>
          
          <div className="space-y-12">
            {optimizationCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.techniques.map((technique, i) => (
                      <div key={i} className="bg-arzir-gray-50 p-6 rounded-xl">
                        <div className="space-y-4">
                          <h4 className="text-lg font-heading font-bold text-black">
                            {technique.technique}
                          </h4>
                          <p className="text-sm text-arzir-gray-600 leading-relaxed">
                            {technique.description}
                          </p>
                          
                          <div>
                            <h5 className="text-sm font-semibold text-green-600 mb-2">Benefits:</h5>
                            <ul className="space-y-1">
                              {technique.benefits.map((benefit, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-xs text-arzir-gray-600">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="border-t border-arzir-gray-200 pt-3">
                            <p className="text-xs text-arzir-gray-500 italic">
                              <strong>Implementation:</strong> {technique.implementation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Performance Metrics */}
      <Section size="lg" id="performance-metrics">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Performance Improvement Metrics
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real-world results from hydraulic press optimization implementations
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto shadow-sm border border-arzir-gray-100">
            <table className="w-full">
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="p-4 text-left font-bold text-black">Performance Metric</th>
                  <th className="p-4 text-left font-bold text-black">Baseline</th>
                  <th className="p-4 text-left font-bold text-black">Optimized</th>
                  <th className="p-4 text-left font-bold text-black">Improvement</th>
                  <th className="p-4 text-right font-bold text-black">Financial Impact</th>
                </tr>
              </thead>
              <tbody>
                {performanceMetrics.map((metric, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-black">{metric.metric}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{metric.baseline}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{metric.optimized}</td>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-green-600">{metric.improvement}</td>
                    <td className="border border-arzir-gray-200 p-4 text-right font-bold text-arzir-primary">{metric.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-green-800 mb-2">Total Savings</h3>
              <div className="text-3xl font-bold text-green-600">$95,000</div>
              <p className="text-green-700">Annual cost reduction</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-blue-800 mb-2">Energy Reduction</h3>
              <div className="text-3xl font-bold text-blue-600">35%</div>
              <p className="text-blue-700">Power consumption decrease</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-purple-800 mb-2">ROI Period</h3>
              <div className="text-3xl font-bold text-purple-600">18 mo</div>
              <p className="text-purple-700">Investment payback</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Troubleshooting Guide */}
      <Section background="gray" size="lg" id="troubleshooting">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Troubleshooting Guide
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Common hydraulic press problems, their causes, and proven solutions
            </p>
          </div>
          
          <div className="space-y-8">
            {troubleshootingGuide.map((issue, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-red-600 mb-4">
                      {issue.problem}
                    </h3>
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Symptoms:</h4>
                      <ul className="space-y-1">
                        {issue.symptoms.map((symptom, i) => (
                          <li key={i} className="text-sm text-arzir-gray-600">• {symptom}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Possible Causes:</h4>
                    <ul className="space-y-1">
                      {issue.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-arzir-gray-600">• {cause}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2">Solutions:</h4>
                    <ul className="space-y-1">
                      {issue.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-arzir-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-2">Prevention:</h4>
                    <p className="text-sm text-arzir-gray-600 italic">
                      {issue.prevention}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Energy Saving Strategies */}
      <Section size="lg" id="energy-savings">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Energy Saving Strategies
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Proven techniques for reducing energy consumption and operational costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {energySavingStrategies.map((strategy, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-black mb-2">
                      {strategy.strategy}
                    </h3>
                    <p className="text-arzir-gray-600 leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{strategy.energySavings}</div>
                      <div className="text-sm text-green-700">Energy Savings</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{strategy.paybackPeriod}</div>
                      <div className="text-sm text-blue-700">Payback Period</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-black">Implementation: </span>
                      <span className="text-sm text-arzir-gray-600">{strategy.implementation}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-black">Investment Range: </span>
                      <span className="text-sm font-bold text-arzir-primary">{strategy.investmentRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Ready to Optimize Your Hydraulic Press Operations?
            </h2>
            <p className="text-xl text-arzir-gray-600">
              Our expert engineers can assess your current operations and develop a customized optimization 
              plan to maximize efficiency, reduce energy consumption, and improve productivity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteDialog source="hydraulic_press_optimization_guide">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Optimization Assessment
                <Settings className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">
                View Hydraulic Equipment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}