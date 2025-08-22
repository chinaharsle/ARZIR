import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Eye, Layers, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Sorting Technologies in Metal Recycling: AI and Optical Solutions | ARZIR Blog",
  description: "Explore cutting-edge sorting technologies including AI-powered optical sorting, eddy current separation, and sensor-based classification for maximum metal recovery.",
};

const sortingTechnologies = [
  {
    technology: "Optical Sorting Systems",
    description: "AI-powered visual recognition systems that identify metals by color, texture, and reflectivity",
    applications: ["Aluminum separation", "Copper identification", "Brass sorting", "Mixed metal streams"],
    advantages: [
      "High accuracy (95-99%)",
      "Fast processing speeds",
      "Minimal contamination",
      "Automated operation"
    ],
    limitations: [
      "High initial investment",
      "Requires clean material feed",
      "Limited by particle size",
      "Maintenance complexity"
    ],
    typical_throughput: "5-50 tons/hour",
    recovery_rate: "95-99%"
  },
  {
    technology: "X-Ray Transmission (XRT)",
    description: "Uses X-ray density differences to separate materials with varying atomic densities",
    applications: ["Heavy metal recovery", "Steel separation", "Lead identification", "Dense material sorting"],
    advantages: [
      "Works with dirty materials",
      "Detects internal composition",
      "High throughput capability",
      "Weatherproof operation"
    ],
    limitations: [
      "Safety considerations",
      "High energy consumption",
      "Limited to density differences",
      "Expensive maintenance"
    ],
    typical_throughput: "10-100 tons/hour",
    recovery_rate: "90-95%"
  },
  {
    technology: "Eddy Current Separation",
    description: "Magnetic field technology that separates non-ferrous metals from non-metallic materials",
    applications: ["Aluminum recovery", "Copper separation", "Electronic waste", "Automotive shred"],
    advantages: [
      "Proven technology",
      "Low maintenance",
      "High recovery rates",
      "Cost-effective operation"
    ],
    limitations: [
      "Size limitations",
      "Conductor metals only",
      "Particle shape sensitive",
      "Moderate accuracy"
    ],
    typical_throughput: "2-20 tons/hour",
    recovery_rate: "85-95%"
  },
  {
    technology: "Sensor-Based Sorting",
    description: "Multi-sensor systems combining various detection methods for comprehensive material identification",
    applications: ["Complex waste streams", "High-value metal recovery", "Quality control", "Contamination removal"],
    advantages: [
      "Multiple detection methods",
      "Customizable parameters",
      "High flexibility",
      "Excellent accuracy"
    ],
    limitations: [
      "Complex setup",
      "High operational costs",
      "Training requirements",
      "Technology integration"
    ],
    typical_throughput: "1-15 tons/hour",
    recovery_rate: "90-98%"
  }
];

const aiIntegration = [
  {
    application: "Material Recognition",
    description: "AI algorithms trained to identify specific metal types and grades",
    benefits: [
      "Real-time material classification",
      "Continuous learning capabilities",
      "Adaptation to new materials",
      "Reduced false positives"
    ],
    implementation: "Computer vision models trained on thousands of material samples"
  },
  {
    application: "Process Optimization",
    description: "Machine learning systems that optimize sorting parameters automatically",
    benefits: [
      "Dynamic parameter adjustment",
      "Predictive maintenance",
      "Energy efficiency optimization",
      "Quality improvement"
    ],
    implementation: "ML algorithms analyzing performance data and adjusting operations"
  },
  {
    application: "Quality Control",
    description: "AI-powered inspection systems ensuring output quality standards",
    benefits: [
      "Automated quality checking",
      "Contamination detection",
      "Grade verification",
      "Compliance monitoring"
    ],
    implementation: "Deep learning models for quality assessment and defect detection"
  },
  {
    application: "Predictive Analytics",
    description: "AI forecasting system performance and maintenance needs",
    benefits: [
      "Failure prediction",
      "Maintenance scheduling",
      "Performance forecasting",
      "Cost optimization"
    ],
    implementation: "Time series analysis and predictive modeling of equipment data"
  }
];

const implementationFactors = [
  {
    factor: "Material Characteristics",
    considerations: [
      "Particle size distribution",
      "Material composition variability",
      "Contamination levels",
      "Feed consistency"
    ],
    impact: "Determines suitable technology selection and expected performance"
  },
  {
    factor: "Throughput Requirements",
    considerations: [
      "Daily processing volumes",
      "Peak capacity needs",
      "Processing speed requirements",
      "Batch vs continuous operation"
    ],
    impact: "Influences equipment sizing and configuration decisions"
  },
  {
    factor: "Recovery Goals",
    considerations: [
      "Target recovery percentages",
      "Purity requirements",
      "Acceptable contamination levels",
      "Economic viability thresholds"
    ],
    impact: "Determines technology complexity and investment levels required"
  },
  {
    factor: "Facility Constraints",
    considerations: [
      "Available space",
      "Power requirements",
      "Environmental conditions",
      "Integration with existing equipment"
    ],
    impact: "Limits technology options and affects installation complexity"
  }
];

const performanceMetrics = [
  {
    metric: "Recovery Rate",
    description: "Percentage of target material successfully captured",
    typical_range: "85-99%",
    factors: ["Technology type", "Material characteristics", "System tuning", "Operating conditions"]
  },
  {
    metric: "Purity Level",
    description: "Percentage of desired material in the recovered output",
    typical_range: "90-98%",
    factors: ["Contamination levels", "Sorting accuracy", "Multi-stage processing", "Quality control"]
  },
  {
    metric: "Throughput Rate",
    description: "Volume of material processed per unit time",
    typical_range: "1-100 tons/hour",
    factors: ["Equipment capacity", "Material preparation", "System efficiency", "Operational practices"]
  },
  {
    metric: "Operating Costs",
    description: "Total cost per ton of material processed",
    typical_range: "$5-50/ton",
    factors: ["Energy consumption", "Maintenance requirements", "Labor costs", "Consumables"]
  }
];

const economicAnalysis = [
  {
    cost_category: "Capital Investment",
    description: "Initial equipment and installation costs",
    typical_range: "$200K - $5M",
    breakdown: [
      "Sorting equipment: 60-70%",
      "Installation & integration: 15-20%",
      "Engineering & commissioning: 10-15%",
      "Training & startup: 5-10%"
    ]
  },
  {
    cost_category: "Operating Expenses",
    description: "Ongoing costs for system operation",
    typical_range: "$10-80/ton",
    breakdown: [
      "Energy consumption: 30-40%",
      "Maintenance & parts: 25-35%",
      "Labor costs: 20-30%",
      "Consumables: 10-15%"
    ]
  },
  {
    cost_category: "Revenue Benefits",
    description: "Value improvements from better sorting",
    typical_range: "$20-200/ton",
    breakdown: [
      "Higher recovery rates: 40-50%",
      "Improved material purity: 30-40%",
      "Premium pricing: 15-25%",
      "Reduced disposal costs: 5-10%"
    ]
  }
];

const futureInnovations = [
  {
    innovation: "Hyperspectral Imaging",
    description: "Advanced spectral analysis for precise material identification",
    timeline: "2-3 years",
    potential: "99%+ accuracy for complex material mixtures"
  },
  {
    innovation: "Robotic Sorting",
    description: "AI-powered robots for intelligent material picking",
    timeline: "3-5 years",
    potential: "Flexible sorting of irregular shapes and sizes"
  },
  {
    innovation: "Blockchain Traceability",
    description: "Material tracking throughout the recycling chain",
    timeline: "1-2 years", 
    potential: "Full transparency and quality assurance"
  },
  {
    innovation: "Quantum Sensors",
    description: "Ultra-sensitive material detection capabilities",
    timeline: "5-10 years",
    potential: "Molecular-level material identification"
  }
];

export default function AdvancedSortingBlogPost() {
  return (
    <>
      {/* Article Header */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
            <Eye className="h-4 w-4" />
            Applications
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
            Advanced Sorting Technologies in Metal Recycling: AI and Optical Solutions
          </h1>
          <p className="text-xl text-arzir-gray-600 leading-relaxed">
            Explore cutting-edge sorting technologies including AI-powered optical sorting, eddy current separation, and sensor-based classification for maximum metal recovery.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-arzir-gray-500">
            <span>By ARZIR Engineering Team</span>
            <span>•</span>
            <span>August 28, 2025</span>
            <span>•</span>
            <span>11 min read</span>
          </div>
        </div>
      </Section>

      {/* Article Hero Image */}
      <Section background="white" size="sm">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-arzir-primary rounded-full flex items-center justify-center mx-auto">
                  <Layers className="h-12 w-12 text-white" />
                </div>
                <div className="text-2xl font-heading font-bold text-arzir-gray-700">
                  Advanced Sorting Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-arzir-gray-700">
                The metal recycling industry is experiencing a technological revolution with advanced sorting systems that dramatically improve recovery rates and material purity. Modern facilities are implementing AI-powered optical sorting, sophisticated sensor technologies, and automated classification systems to extract maximum value from metal waste streams. These innovations are essential for meeting growing demand for high-quality recycled metals while maintaining economic competitiveness.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Leading Sorting Technologies</h2>
              <p className="text-arzir-gray-700 mb-6">
                Each sorting technology offers unique advantages for different applications, materials, and operational requirements.
              </p>
              
              <div className="space-y-8">
                {sortingTechnologies.map((tech) => (
                  <div key={tech.technology} className="bg-white border border-arzir-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">{tech.technology}</h3>
                        <p className="text-arzir-gray-600">{tech.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-arzir-gray-800 text-sm mb-2">Applications:</h4>
                          <div className="space-y-1">
                            {tech.applications.map((app, idx) => (
                              <div key={idx} className="text-xs text-arzir-gray-600">• {app}</div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-success text-sm mb-2">Advantages:</h4>
                          <div className="space-y-1">
                            {tech.advantages.map((adv, idx) => (
                              <div key={idx} className="flex items-center gap-1">
                                <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                                <span className="text-xs text-arzir-gray-600">{adv}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-orange-600 text-sm mb-2">Limitations:</h4>
                          <div className="space-y-1">
                            {tech.limitations.map((lim, idx) => (
                              <div key={idx} className="text-xs text-arzir-gray-600">• {lim}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pt-2">
                        <div className="bg-arzir-primary/10 px-3 py-2 rounded-lg">
                          <div className="text-xs text-arzir-gray-600">Throughput</div>
                          <div className="text-sm font-medium text-arzir-primary">{tech.typical_throughput}</div>
                        </div>
                        <div className="bg-success/10 px-3 py-2 rounded-lg">
                          <div className="text-xs text-arzir-gray-600">Recovery Rate</div>
                          <div className="text-sm font-medium text-success">{tech.recovery_rate}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">AI Integration in Sorting Systems</h2>
              <p className="text-arzir-gray-700 mb-6">
                Artificial intelligence is transforming sorting operations by enabling adaptive learning, real-time optimization, and predictive capabilities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiIntegration.map((ai) => (
                  <div key={ai.application} className="bg-arzir-gray-50 p-6 rounded-xl">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-arzir-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Zap className="h-5 w-5 text-arzir-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">{ai.application}</h3>
                          <p className="text-sm text-arzir-gray-600">{ai.description}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-arzir-gray-800 text-sm mb-2">Key Benefits:</h4>
                        <div className="space-y-1">
                          {ai.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-arzir-primary flex-shrink-0" />
                              <span className="text-xs text-arzir-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border border-arzir-gray-200">
                        <div className="text-xs text-arzir-gray-500 mb-1">Implementation:</div>
                        <div className="text-xs text-arzir-gray-700">{ai.implementation}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Key Implementation Factors</h2>
              <p className="text-arzir-gray-700 mb-6">
                Successful sorting system implementation requires careful consideration of material characteristics, throughput needs, and facility constraints.
              </p>
              
              <div className="space-y-6">
                {implementationFactors.map((factor) => (
                  <div key={factor.factor} className="bg-white border border-arzir-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-black mb-3">{factor.factor}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-arzir-gray-800 text-sm mb-2">Key Considerations:</h4>
                        <div className="space-y-1">
                          {factor.considerations.map((consideration, idx) => (
                            <div key={idx} className="text-xs text-arzir-gray-600">• {consideration}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-arzir-primary text-sm mb-2">Impact on Selection:</h4>
                        <p className="text-xs text-arzir-gray-600">{factor.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Performance Metrics and Expectations</h2>
              <p className="text-arzir-gray-700 mb-6">
                Understanding key performance indicators helps facilities set realistic expectations and evaluate system effectiveness.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-arzir-gray-50">
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Metric</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Typical Range</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Key Factors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {performanceMetrics.map((metric, index) => (
                      <tr key={metric.metric} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                        <td className="border border-arzir-gray-200 p-4">
                          <div>
                            <div className="font-medium text-black">{metric.metric}</div>
                            <div className="text-sm text-arzir-gray-600">{metric.description}</div>
                          </div>
                        </td>
                        <td className="border border-arzir-gray-200 p-4">
                          <span className="inline-block px-2 py-1 bg-arzir-primary/10 text-arzir-primary rounded text-sm font-medium">
                            {metric.typical_range}
                          </span>
                        </td>
                        <td className="border border-arzir-gray-200 p-4">
                          <div className="space-y-1">
                            {metric.factors.map((factor, idx) => (
                              <div key={idx} className="text-xs text-arzir-gray-600">• {factor}</div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Economic Analysis</h2>
              <p className="text-arzir-gray-700 mb-6">
                Understanding the complete economic picture helps facilities make informed investment decisions about sorting technologies.
              </p>
              
              <div className="space-y-6">
                {economicAnalysis.map((analysis) => (
                  <div key={analysis.cost_category} className="bg-arzir-gray-50 p-6 rounded-xl">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-black">{analysis.cost_category}</h3>
                        <p className="text-sm text-arzir-gray-600">{analysis.description}</p>
                      </div>
                      <div className="bg-arzir-primary/10 px-3 py-1 rounded-lg text-sm font-medium text-arzir-primary">
                        {analysis.typical_range}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-gray-800 text-sm mb-2">Cost Breakdown:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {analysis.breakdown.map((item, idx) => (
                          <div key={idx} className="text-xs text-arzir-gray-600">• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Future Innovations</h2>
              <p className="text-arzir-gray-700 mb-6">
                Emerging technologies promise even greater sorting capabilities and efficiency improvements in the coming years.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {futureInnovations.map((innovation) => (
                  <div key={innovation.innovation} className="bg-white border border-arzir-gray-200 rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-black">{innovation.innovation}</h3>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                          {innovation.timeline}
                        </span>
                      </div>
                      <p className="text-sm text-arzir-gray-600">{innovation.description}</p>
                      <div className="bg-success/10 p-3 rounded-lg">
                        <div className="text-xs text-arzir-gray-600 mb-1">Potential Impact:</div>
                        <div className="text-sm font-medium text-success">{innovation.potential}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-arzir-primary/5 p-6 rounded-xl border-l-4 border-arzir-primary">
              <h3 className="text-lg font-semibold text-black mb-2">Strategic Recommendation</h3>
              <p className="text-arzir-gray-700">
                Investing in advanced sorting technologies is becoming essential for competitive metal recycling operations. Start with pilot systems to evaluate performance with your specific materials, then scale successful technologies. Focus on solutions that offer the best ROI for your material mix and throughput requirements. Consider future-ready systems that can integrate emerging AI capabilities as they become available.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-heading font-bold text-black text-center">
            Optimize Your Sorting Operations
          </h2>
          <p className="text-arzir-gray-600 text-center">
            Our experts can help you select and implement the most suitable sorting technologies for your facility.
          </p>
          <div className="flex justify-center gap-4">
            <QuoteDialog source="sorting_blog_cta">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Sorting Consultation
                <Eye className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/calculator/sorting-efficiency">
                Calculate Sorting ROI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/blog/iot-integration-recycling-equipment">
              ← Previous Article
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">
              Back to Blog
            </Link>
          </Button>
          <Button asChild>
            <Link href="/blog/how-to-choose-scrap-metal-baler">
              Next Article →
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}