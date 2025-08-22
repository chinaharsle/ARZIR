import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Wifi, Activity, CheckCircle, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Integration in Recycling Equipment: Smart Monitoring Solutions | ARZIR Blog",
  description: "Discover how IoT technology transforms recycling operations through real-time monitoring, predictive maintenance, and data-driven optimization for maximum efficiency.",
};

const iotBenefits = [
  {
    title: "Real-Time Monitoring",
    description: "Continuous tracking of equipment performance, operational status, and environmental conditions",
    features: [
      "Equipment status dashboards",
      "Performance metrics tracking",
      "Environmental condition monitoring",
      "Remote accessibility"
    ],
    impact: "30-40% improvement in response time"
  },
  {
    title: "Predictive Maintenance",
    description: "AI-powered analysis of equipment data to predict failures before they occur",
    features: [
      "Vibration analysis",
      "Temperature monitoring",
      "Oil quality sensors",
      "Automated alerts"
    ],
    impact: "25-35% reduction in unplanned downtime"
  },
  {
    title: "Energy Optimization",
    description: "Smart energy management systems that optimize power consumption automatically",
    features: [
      "Load balancing",
      "Peak demand management",
      "Idle time optimization",
      "Energy usage analytics"
    ],
    impact: "15-25% reduction in energy costs"
  },
  {
    title: "Process Optimization",
    description: "Data-driven insights to continuously improve recycling processes and throughput",
    features: [
      "Throughput analysis",
      "Quality monitoring",
      "Process bottleneck identification",
      "Automated adjustments"
    ],
    impact: "20-30% increase in processing efficiency"
  }
];

const iotSensors = [
  {
    category: "Performance Sensors",
    sensors: [
      { name: "Pressure Sensors", purpose: "Monitor hydraulic system pressure in balers and shears", data: "Real-time pressure readings, trend analysis" },
      { name: "Flow Sensors", purpose: "Track material flow rates through processing equipment", data: "Throughput rates, blockage detection" },
      { name: "Load Cells", purpose: "Measure material weight and bale density", data: "Weight data, density calculations" },
      { name: "Speed Sensors", purpose: "Monitor motor and conveyor speeds", data: "RPM data, speed variations" }
    ]
  },
  {
    category: "Condition Monitoring",
    sensors: [
      { name: "Vibration Sensors", purpose: "Detect bearing wear and mechanical imbalances", data: "Vibration patterns, frequency analysis" },
      { name: "Temperature Sensors", purpose: "Monitor equipment operating temperatures", data: "Temperature trends, thermal imaging" },
      { name: "Acoustic Sensors", purpose: "Listen for unusual sounds indicating problems", data: "Sound patterns, noise analysis" },
      { name: "Oil Quality Sensors", purpose: "Analyze hydraulic fluid condition", data: "Contamination levels, viscosity data" }
    ]
  },
  {
    category: "Environmental Sensors",
    sensors: [
      { name: "Air Quality Sensors", purpose: "Monitor dust and emissions levels", data: "Particulate levels, gas concentrations" },
      { name: "Moisture Sensors", purpose: "Track humidity levels in processing areas", data: "Humidity readings, moisture trends" },
      { name: "Light Sensors", purpose: "Optimize lighting based on operational needs", data: "Light levels, usage patterns" },
      { name: "Proximity Sensors", purpose: "Detect material presence and worker safety", data: "Position data, safety alerts" }
    ]
  }
];

const implementationSteps = [
  {
    phase: "Assessment & Planning",
    duration: "2-4 weeks",
    description: "Evaluate current infrastructure and plan IoT integration strategy",
    tasks: [
      "Conduct equipment audit",
      "Assess network infrastructure",
      "Define monitoring objectives",
      "Select IoT platform",
      "Create implementation roadmap"
    ]
  },
  {
    phase: "Infrastructure Setup",
    duration: "3-6 weeks", 
    description: "Install necessary hardware and establish connectivity",
    tasks: [
      "Install edge computing devices",
      "Deploy wireless networks",
      "Set up cloud connectivity",
      "Configure security protocols",
      "Test communication systems"
    ]
  },
  {
    phase: "Sensor Deployment",
    duration: "4-8 weeks",
    description: "Install and configure sensors across critical equipment",
    tasks: [
      "Mount sensors on equipment",
      "Calibrate sensor readings",
      "Establish data collection protocols",
      "Test sensor connectivity",
      "Validate data accuracy"
    ]
  },
  {
    phase: "Data Integration",
    duration: "2-4 weeks",
    description: "Connect all data sources and configure analytics platforms",
    tasks: [
      "Integrate sensor data streams",
      "Configure data processing pipelines",
      "Set up analytics dashboards",
      "Establish data storage systems",
      "Create reporting mechanisms"
    ]
  },
  {
    phase: "Training & Optimization",
    duration: "2-3 weeks",
    description: "Train staff and fine-tune system performance",
    tasks: [
      "Train operators on new systems",
      "Optimize alert thresholds",
      "Refine predictive models",
      "Establish maintenance protocols",
      "Document best practices"
    ]
  }
];

const costConsiderations = [
  {
    component: "Hardware Costs",
    description: "Sensors, gateways, and edge computing devices",
    typical_range: "$5,000 - $50,000",
    factors: ["Number of monitoring points", "Sensor quality and precision", "Edge computing requirements", "Network infrastructure needs"]
  },
  {
    component: "Software & Platform",
    description: "IoT platform, analytics software, and cloud services",
    typical_range: "$2,000 - $20,000/year",
    factors: ["Data volume processed", "Analytics capabilities required", "Number of users", "Integration complexity"]
  },
  {
    component: "Installation & Setup",
    description: "Professional installation and system configuration",
    typical_range: "$10,000 - $75,000",
    factors: ["Facility size", "Equipment complexity", "Network infrastructure work", "Customization requirements"]
  },
  {
    component: "Training & Support",
    description: "Staff training and ongoing technical support",
    typical_range: "$3,000 - $15,000/year",
    factors: ["Number of staff to train", "System complexity", "Support level required", "Update frequency"]
  }
];

const roiFactors = [
  {
    benefit: "Reduced Downtime",
    description: "Predictive maintenance prevents unexpected failures",
    potential_savings: "15-30% reduction in maintenance costs",
    payback_period: "12-18 months"
  },
  {
    benefit: "Energy Savings",
    description: "Optimized power consumption and peak demand management",
    potential_savings: "10-25% reduction in energy costs",
    payback_period: "18-24 months"
  },
  {
    benefit: "Improved Efficiency",
    description: "Process optimization increases throughput and quality",
    potential_savings: "20-35% increase in productivity",
    payback_period: "6-12 months"
  },
  {
    benefit: "Better Resource Management",
    description: "Data-driven decisions optimize material and labor usage",
    potential_savings: "5-15% reduction in operational costs",
    payback_period: "24-36 months"
  }
];

export default function IoTRecyclingBlogPost() {
  return (
    <>
      {/* Article Header */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
            <Wifi className="h-4 w-4" />
            Industry News
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
            IoT Integration in Recycling Equipment: Smart Monitoring Solutions
          </h1>
          <p className="text-xl text-arzir-gray-600 leading-relaxed">
            Discover how IoT technology transforms recycling operations through real-time monitoring, predictive maintenance, and data-driven optimization for maximum efficiency.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-arzir-gray-500">
            <span>By ARZIR Technology Team</span>
            <span>•</span>
            <span>August 25, 2025</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
        </div>
      </Section>

      {/* Article Hero Image */}
      <Section background="white" size="sm">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-arzir-primary rounded-full flex items-center justify-center mx-auto">
                  <Wifi className="h-12 w-12 text-white" />
                </div>
                <div className="text-2xl font-heading font-bold text-arzir-gray-700">
                  Smart IoT Recycling Solutions
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
                The Internet of Things (IoT) is revolutionizing the recycling industry by connecting equipment, sensors, and data analytics to create intelligent, self-monitoring systems. Modern recycling facilities are adopting IoT technologies to achieve unprecedented levels of operational efficiency, equipment reliability, and cost optimization. This comprehensive guide explores how IoT integration transforms traditional recycling operations into smart, data-driven facilities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Key Benefits of IoT in Recycling</h2>
              <p className="text-arzir-gray-700 mb-6">
                IoT technology offers transformative benefits across all aspects of recycling operations, from equipment monitoring to process optimization.
              </p>
              
              <div className="space-y-6">
                {iotBenefits.map((benefit) => (
                  <div key={benefit.title} className="bg-white border border-arzir-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-arzir-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity className="h-6 w-6 text-arzir-primary" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <div>
                          <h3 className="text-lg font-semibold text-black">{benefit.title}</h3>
                          <p className="text-arzir-gray-600 text-sm">{benefit.description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-arzir-gray-800 text-sm mb-2">Key Features:</h4>
                            <div className="space-y-1">
                              {benefit.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                                  <span className="text-xs text-arzir-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-success/10 p-3 rounded-lg">
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-success" />
                                <span className="text-sm font-medium text-success">{benefit.impact}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Essential IoT Sensors for Recycling Equipment</h2>
              <p className="text-arzir-gray-700 mb-6">
                Different types of sensors provide crucial data for monitoring equipment health, performance, and environmental conditions.
              </p>
              
              <div className="space-y-6">
                {iotSensors.map((category) => (
                  <div key={category.category} className="bg-arzir-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-black mb-4">{category.category}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {category.sensors.map((sensor) => (
                        <div key={sensor.name} className="bg-white p-4 rounded-lg border border-arzir-gray-200">
                          <h4 className="font-medium text-arzir-primary mb-2">{sensor.name}</h4>
                          <p className="text-sm text-arzir-gray-600 mb-2">{sensor.purpose}</p>
                          <div className="text-xs text-arzir-gray-500">
                            <strong>Data Provided:</strong> {sensor.data}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Implementation Roadmap</h2>
              <p className="text-arzir-gray-700 mb-6">
                Successful IoT integration requires careful planning and phased implementation to minimize disruption while maximizing benefits.
              </p>
              
              <div className="space-y-4">
                {implementationSteps.map((step, index) => (
                  <div key={step.phase} className="bg-white border border-arzir-gray-200 rounded-xl p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-arzir-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-black">{step.phase}</h3>
                          <span className="text-xs px-2 py-1 bg-arzir-primary/10 text-arzir-primary rounded">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-sm text-arzir-gray-600">{step.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {step.tasks.map((task, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                              <span className="text-xs text-arzir-gray-600">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Cost Considerations</h2>
              <p className="text-arzir-gray-700 mb-6">
                Understanding the investment required for IoT integration helps facilities plan budgets and evaluate ROI potential.
              </p>
              
              <div className="space-y-4">
                {costConsiderations.map((cost) => (
                  <div key={cost.component} className="bg-white border border-arzir-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-black">{cost.component}</h3>
                        <p className="text-sm text-arzir-gray-600">{cost.description}</p>
                      </div>
                      <div className="bg-arzir-primary/10 px-3 py-1 rounded-lg text-sm font-medium text-arzir-primary">
                        {cost.typical_range}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-gray-800 text-sm mb-2">Key Cost Factors:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cost.factors.map((factor, idx) => (
                          <div key={idx} className="text-xs text-arzir-gray-600">• {factor}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Return on Investment Analysis</h2>
              <p className="text-arzir-gray-700 mb-6">
                IoT investments typically provide strong returns through multiple efficiency improvements and cost reductions.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-arzir-gray-50">
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Benefit Area</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Potential Impact</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Typical Payback</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roiFactors.map((factor, index) => (
                      <tr key={factor.benefit} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                        <td className="border border-arzir-gray-200 p-4">
                          <div>
                            <div className="font-medium text-black">{factor.benefit}</div>
                            <div className="text-sm text-arzir-gray-600">{factor.description}</div>
                          </div>
                        </td>
                        <td className="border border-arzir-gray-200 p-4">
                          <span className="inline-block px-2 py-1 bg-success/10 text-success rounded text-sm font-medium">
                            {factor.potential_savings}
                          </span>
                        </td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">
                          {factor.payback_period}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-arzir-primary/5 p-6 rounded-xl border-l-4 border-arzir-primary">
              <h3 className="text-lg font-semibold text-black mb-2">Future Outlook</h3>
              <p className="text-arzir-gray-700">
                IoT technology in recycling is rapidly evolving with advances in AI, machine learning, and edge computing. Future developments include autonomous equipment operation, advanced predictive analytics, and integration with smart city infrastructure. Early adopters of IoT technology position themselves for competitive advantages in efficiency, sustainability, and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-heading font-bold text-black text-center">
            Ready to Implement IoT Solutions?
          </h2>
          <p className="text-arzir-gray-600 text-center">
            Our technology experts can help you design and implement IoT monitoring systems for your recycling equipment.
          </p>
          <div className="flex justify-center gap-4">
            <QuoteDialog source="iot_blog_cta">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get IoT Consultation
                <Wifi className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/calculator/iot-roi">
                Calculate IoT ROI
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
            <Link href="/blog/preventive-maintenance-guide-recycling-equipment">
              ← Previous Article
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">
              Back to Blog
            </Link>
          </Button>
          <Button asChild>
            <Link href="/blog/advanced-sorting-technologies">
              Next Article →
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}