import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Factory, Cog, Zap, Settings, Award, Target, TrendingUp, Gauge } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Aluminum Solutions | ARZIR Manufacturing Equipment Components",
  description: "Advanced aluminum extrusion solutions for industrial manufacturing. Machine frames, conveyor systems, automation components, and heat dissipation profiles for industrial applications.",
  keywords: [
    "industrial aluminum extrusion",
    "machine frame aluminum",
    "conveyor system profiles",
    "automation aluminum components",
    "industrial heat sinks",
    "manufacturing equipment aluminum",
    "industrial aluminum profiles",
    "machinery aluminum extrusion"
  ],
  openGraph: {
    title: "Industrial Aluminum Solutions | ARZIR",
    description: "Advanced aluminum extrusion solutions for industrial manufacturing with precision manufacturing for machine frames, conveyor systems, and automation components.",
    images: [
      {
        url: "/images/applications/Industrial Aluminum.png",
        width: 1200,
        height: 630,
        alt: "Industrial Aluminum Applications - ARZIR"
      }
    ]
  }
};

const industrialApplications = [
  {
    title: "Machine Frames & Structures",
    description: "Robust aluminum structural profiles for industrial machinery frames and equipment housings",
    icon: Factory,
    specifications: ["6061-T6 structural grade", "High load-bearing capacity", "Modular design compatibility", "Precision mounting surfaces"],
    applications: ["CNC machine frames", "Production line structures", "Equipment housings", "Support frameworks"],
    benefits: ["70% lighter than steel", "Corrosion resistance", "Easy machining", "Excellent strength-to-weight ratio"]
  },
  {
    title: "Conveyor Systems",
    description: "Specialized aluminum profiles for conveyor belts, roller systems, and material handling equipment",
    icon: Settings,
    specifications: ["Smooth surface finish", "Integrated mounting features", "Wear-resistant treatments", "Custom cross-sections"],
    applications: ["Conveyor rails", "Support structures", "Guide rails", "Transfer systems"],
    benefits: ["Reduced maintenance", "Smooth operation", "Flexible installation", "Long service life"]
  },
  {
    title: "Automation Components",
    description: "Precision aluminum profiles for industrial automation and robotic system components",
    icon: Cog,
    specifications: ["Tight dimensional tolerances", "T-slot compatibility", "EMI shielding capability", "Integrated cable management"],
    applications: ["Robotic frames", "Linear actuator housings", "Control panel frames", "Sensor mounts"],
    benefits: ["High precision assembly", "System modularity", "Easy reconfiguration", "Reduced wiring complexity"]
  },
  {
    title: "Heat Management Systems",
    description: "Advanced thermal management aluminum profiles for industrial cooling and heat dissipation",
    icon: Zap,
    specifications: ["High thermal conductivity", "Optimized fin geometry", "Surface area maximization", "Pressure drop minimization"],
    applications: ["Heat sinks", "Cooling channels", "Thermal interfaces", "Temperature control systems"],
    benefits: ["Superior heat transfer", "Energy efficiency", "Compact design", "Thermal stability"]
  }
];

const materialProperties = [
  {
    alloy: "6061-T6",
    application: "Structural Components", 
    tensileStrength: "310 MPa",
    yieldStrength: "276 MPa",
    elongation: "12%",
    benefits: ["High strength", "Excellent machinability", "Good weldability", "Corrosion resistant"]
  },
  {
    alloy: "6063-T5",
    application: "General Purpose Profiles",
    tensileStrength: "241 MPa",
    yieldStrength: "214 MPa", 
    elongation: "12%",
    benefits: ["Good extrudability", "Smooth surface finish", "Cost effective", "Anodizing compatible"]
  },
  {
    alloy: "6082-T6",
    application: "Heavy-Duty Applications",
    tensileStrength: "340 MPa",
    yieldStrength: "290 MPa",
    elongation: "10%",
    benefits: ["Superior strength", "Excellent fatigue resistance", "Good formability", "Weldable"]
  },
  {
    alloy: "1050-H14",
    application: "Heat Dissipation",
    tensileStrength: "105 MPa",
    yieldStrength: "85 MPa",
    elongation: "12%", 
    benefits: ["High thermal conductivity", "Excellent formability", "Corrosion resistant", "Electrical conductivity"]
  }
];

const manufacturingCapabilities = [
  {
    capability: "Complex Geometries",
    description: "Advanced die design for intricate industrial profile requirements",
    specifications: ["Multi-void extrusions", "Integrated features", "Hollow sections", "Variable wall thickness"],
    icon: Target
  },
  {
    capability: "High-Volume Production",
    description: "Automated production systems for industrial manufacturing quantities",
    specifications: ["800-1500 kg/hour capacity", "Consistent quality", "Just-in-time delivery", "Inventory management"],
    icon: TrendingUp
  },
  {
    capability: "Precision Tolerances",
    description: "Tight dimensional control for critical industrial applications",
    specifications: ["±0.1mm tolerance standard", "Statistical process control", "100% inspection capability", "Quality documentation"],
    icon: Gauge
  },
  {
    capability: "Surface Finishing",
    description: "Complete finishing solutions for industrial requirements",
    specifications: ["Mill finish", "Anodizing", "Powder coating", "Mechanical finishing"],
    icon: Award
  }
];

const industrySegments = [
  {
    segment: "Manufacturing Equipment",
    description: "Production machinery, assembly lines, and manufacturing systems",
    requirements: ["Structural integrity", "Precision alignment", "Maintenance accessibility", "Modular design"],
    solutions: [
      "Machine base frames with integrated mounting points and cable management",
      "Modular structural systems for flexible production line configurations",
      "Precision guide rails and support structures for automated systems",
      "Equipment housings with access panels and maintenance features"
    ],
    benefits: ["Reduced assembly time", "Improved maintenance efficiency", "System modularity", "Enhanced productivity"]
  },
  {
    segment: "Material Handling",
    description: "Conveyor systems, sorting equipment, and logistics automation",
    requirements: ["Smooth operation", "Load capacity", "Wear resistance", "Easy maintenance"],
    solutions: [
      "Conveyor frame systems with integrated drive mechanisms",
      "Roller support structures with precision alignment features",
      "Guide rail systems for material flow control",
      "Transfer system components with adjustable configurations"
    ],
    benefits: ["Operational efficiency", "Reduced downtime", "System reliability", "Cost-effective maintenance"]
  },
  {
    segment: "Process Equipment",
    description: "Chemical processing, food production, and pharmaceutical equipment",
    requirements: ["Corrosion resistance", "Hygiene compliance", "Temperature stability", "Chemical compatibility"],
    solutions: [
      "Process vessel frames with corrosion-resistant treatments",
      "Sanitary design profiles for food and pharmaceutical applications", 
      "Temperature-controlled housings with thermal management",
      "Clean room compatible structures with smooth surfaces"
    ],
    benefits: ["Regulatory compliance", "Product quality", "Process reliability", "Easy cleaning"]
  },
  {
    segment: "Energy & Power",
    description: "Power generation, renewable energy systems, and electrical equipment",
    requirements: ["High strength", "Environmental resistance", "Electrical safety", "Thermal management"],
    solutions: [
      "Solar panel mounting systems with weather-resistant treatments",
      "Electrical enclosure frames with EMI shielding capabilities",
      "Power equipment cooling systems with optimized heat transfer",
      "Grid infrastructure components with long-term durability"
    ],
    benefits: ["System reliability", "Environmental durability", "Safety compliance", "Energy efficiency"]
  }
];

const performanceAdvantages = [
  {
    advantage: "Weight Reduction",
    description: "Significant weight savings compared to traditional steel structures",
    metrics: ["70% lighter than steel", "Improved portability", "Reduced foundation requirements"],
    icon: TrendingUp
  },
  {
    advantage: "Corrosion Resistance", 
    description: "Natural oxide layer provides excellent corrosion protection",
    metrics: ["50+ year service life", "No protective coatings required", "Chemical resistance"],
    icon: Award
  },
  {
    advantage: "Machinability",
    description: "Excellent machining characteristics for precision manufacturing",
    metrics: ["High cutting speeds", "Superior surface finish", "Tight tolerances achievable"],
    icon: Target
  },
  {
    advantage: "Thermal Properties",
    description: "Superior thermal conductivity for heat management applications", 
    metrics: ["5x better than steel", "Uniform temperature distribution", "Thermal stability"],
    icon: Zap
  }
];

const designFeatures = [
  {
    feature: "T-Slot Compatibility",
    description: "Standard T-slot profiles for modular construction and easy reconfiguration",
    applications: ["Machine frames", "Workbenches", "Automation systems", "Test fixtures"],
    benefits: ["System flexibility", "Easy modifications", "Reduced fastener inventory", "Quick assembly"]
  },
  {
    feature: "Integrated Cable Management",
    description: "Built-in channels and routing features for organized cable management",
    applications: ["Control panels", "Robotic systems", "Conveyor controls", "Sensor networks"],
    benefits: ["Clean installations", "Protected wiring", "Easy maintenance", "Professional appearance"]
  },
  {
    feature: "Mounting Interfaces",
    description: "Precision-machined mounting surfaces and attachment points",
    applications: ["Component mounting", "Sensor installation", "Drive attachments", "Accessory mounting"],
    benefits: ["Precise alignment", "Secure attachment", "Reduced machining", "System integration"]
  },
  {
    feature: "Thermal Management",
    description: "Optimized cross-sections for enhanced heat dissipation and thermal control",
    applications: ["Heat sinks", "Cooling channels", "Thermal barriers", "Temperature control"],
    benefits: ["Improved cooling", "Temperature stability", "Energy efficiency", "System reliability"]
  }
];

const qualityStandards = [
  {
    standard: "ISO 9001:2015",
    description: "Quality management systems for consistent product quality and continuous improvement",
    scope: "Complete quality system covering design, production, and delivery processes",
    benefits: ["Consistent quality", "Process control", "Customer satisfaction", "Continuous improvement"]
  },
  {
    standard: "ASTM B221", 
    description: "Standard specification for aluminum and aluminum-alloy extruded profiles",
    scope: "Material specifications, dimensional tolerances, and mechanical properties",
    benefits: ["Material consistency", "Property verification", "Industry compliance", "Quality assurance"]
  },
  {
    standard: "EN 755",
    description: "European standard for aluminum and aluminum alloy extruded profiles",
    scope: "Technical delivery conditions for aluminum extrusions",
    benefits: ["European market access", "Technical compliance", "Quality standards", "Market acceptance"]
  },
  {
    standard: "ISO 14001",
    description: "Environmental management systems for sustainable manufacturing",
    scope: "Environmental impact management and sustainability practices", 
    benefits: ["Environmental responsibility", "Regulatory compliance", "Sustainable practices", "Waste reduction"]
  }
];

const innovationTrends = [
  {
    trend: "Industry 4.0 Integration",
    description: "Smart manufacturing and IoT integration in industrial aluminum applications",
    impact: "Enhanced monitoring, predictive maintenance, and system optimization",
    technologies: ["IoT sensors", "Predictive analytics", "Digital twins", "Smart monitoring"],
    benefits: ["Predictive maintenance", "System optimization", "Reduced downtime", "Data-driven decisions"]
  },
  {
    trend: "Sustainable Manufacturing",
    description: "Focus on environmental sustainability and circular economy principles",
    impact: "Reduced environmental footprint and improved resource efficiency",
    technologies: ["Recycled content", "Energy efficiency", "Waste reduction", "Lifecycle optimization"],
    benefits: ["Environmental compliance", "Cost optimization", "Brand sustainability", "Resource efficiency"]
  },
  {
    trend: "Automation Advancement",
    description: "Increasing automation and robotics in manufacturing processes", 
    impact: "Growing demand for precision aluminum components and systems",
    technologies: ["Robotic integration", "Automated assembly", "Precision positioning", "Smart controls"],
    benefits: ["Production efficiency", "Quality consistency", "Labor optimization", "System flexibility"]
  },
  {
    trend: "Thermal Management",
    description: "Advanced thermal management solutions for high-power industrial equipment",
    impact: "Enhanced cooling solutions and energy efficiency requirements",
    technologies: ["Advanced geometries", "Heat pipe integration", "Phase change materials", "Thermal optimization"],
    benefits: ["Improved cooling", "Energy efficiency", "System reliability", "Performance enhancement"]
  }
];

const processFlow = [
  {
    step: "Requirements Analysis",
    description: "Collaborate with engineers to understand specific industrial application needs",
    duration: "1-2 weeks",
    activities: ["Load analysis", "Environmental requirements", "Integration planning", "Performance specifications"]
  },
  {
    step: "Profile Design",
    description: "Engineer optimized aluminum profiles for specific industrial requirements",
    duration: "2-3 weeks",
    activities: ["CAD modeling", "Stress analysis", "Optimization", "Prototype validation"]
  },
  {
    step: "Tooling Development",
    description: "Create precision dies and tooling for industrial profile manufacturing",
    duration: "3-4 weeks",
    activities: ["Die design", "Manufacturing", "Testing", "Quality validation"]
  },
  {
    step: "Production & Delivery",
    description: "High-capacity manufacturing with quality control and delivery coordination",
    duration: "Production dependent",
    activities: ["Continuous production", "Quality inspection", "Surface treatment", "Logistics coordination"]
  }
];

export default function IndustrialAluminumPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Industrial Aluminum Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Advanced aluminum extrusion solutions for machine frames, conveyor systems, automation 
              components, and heat dissipation profiles driving industrial manufacturing efficiency.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                70% weight reduction
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                1500 kg/hour capacity
              </div>
            </div>
            <QuoteDialog source="industrial_aluminum_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/Industrial Aluminum.png"
                alt="Industrial Aluminum Applications"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Industrial Applications */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Industrial Applications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive aluminum solutions for modern industrial manufacturing requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrialApplications.map((application, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <application.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {application.title}
                    </h3>
                  </div>
                  
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {application.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Technical Specifications:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {application.specifications.map((spec, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-sm text-arzir-gray-600">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-black mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {application.applications.map((app, i) => (
                            <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-black mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-1">
                          {application.benefits.map((benefit, i) => (
                            <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Material Properties */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Material Properties & Alloys
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Optimized aluminum alloys for specific industrial performance requirements
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="p-4 text-left font-bold text-black">Alloy</th>
                  <th className="p-4 text-left font-bold text-black">Application</th>
                  <th className="p-4 text-center font-bold text-black">Tensile Strength</th>
                  <th className="p-4 text-center font-bold text-black">Yield Strength</th>
                  <th className="p-4 text-center font-bold text-black">Elongation</th>
                  <th className="p-4 text-left font-bold text-black">Key Benefits</th>
                </tr>
              </thead>
              <tbody>
                {materialProperties.map((material, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="p-4 font-bold text-arzir-primary">{material.alloy}</td>
                    <td className="p-4">{material.application}</td>
                    <td className="p-4 text-center">{material.tensileStrength}</td>
                    <td className="p-4 text-center">{material.yieldStrength}</td>
                    <td className="p-4 text-center">{material.elongation}</td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {material.benefits.map((benefit, i) => (
                          <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Manufacturing Capabilities */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Manufacturing Capabilities
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing technologies for industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingCapabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-arzir-gray-100 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-black">
                    {capability.capability}
                  </h3>
                  <p className="text-sm text-arzir-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                  <div className="space-y-1">
                    {capability.specifications.map((spec, i) => (
                      <div key={i} className="text-xs text-arzir-primary font-medium">
                        • {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Performance Advantages */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Performance Advantages
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Superior performance characteristics for demanding industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-arzir-gray-100 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto">
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-black">
                    {advantage.advantage}
                  </h3>
                  <p className="text-sm text-arzir-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                  <div className="space-y-1">
                    {advantage.metrics.map((metric, i) => (
                      <div key={i} className="text-xs text-arzir-primary font-medium">
                        • {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Design Features */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Design Features & Innovation
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Advanced design features optimized for industrial manufacturing needs
            </p>
          </div>
          
          <div className="space-y-6">
            {designFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-black mb-2">
                      {feature.feature}
                    </h3>
                    <p className="text-sm text-arzir-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {feature.applications.map((app, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <h4 className="text-sm font-semibold text-black mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {feature.benefits.map((benefit, i) => (
                        <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industry Segments */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Industry Segment Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Tailored aluminum solutions for different industrial market segments
            </p>
          </div>
          
          <div className="space-y-6">
            {industrySegments.map((segment, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-black mb-2">
                        {segment.segment}
                      </h3>
                      <p className="text-arzir-gray-600 leading-relaxed">
                        {segment.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Key Requirements:</h4>
                      <div className="space-y-1">
                        {segment.requirements.map((req, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-blue-500 flex-shrink-0 mt-1" />
                            <span className="text-sm text-arzir-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {segment.benefits.map((benefit, i) => (
                          <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-3">Our Solutions:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {segment.solutions.map((solution, i) => (
                        <div key={i} className="flex items-start gap-2 p-3 bg-arzir-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-arzir-primary rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-sm text-arzir-gray-700">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Quality Standards */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Quality Standards & Compliance
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Meeting and exceeding industry standards for industrial aluminum products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-black">
                    {standard.standard}
                  </h3>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {standard.description}
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-blue-700 font-medium">
                      <strong>Scope:</strong> {standard.scope}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {standard.benefits.map((benefit, i) => (
                        <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Innovation Trends */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Industry Innovation Trends
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Leading industrial innovations driving aluminum technology advancement
            </p>
          </div>
          
          <div className="space-y-6">
            {innovationTrends.map((trend, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-black mb-2">
                      {trend.trend}
                    </h3>
                    <p className="text-sm text-arzir-gray-600 leading-relaxed">
                      {trend.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-arzir-primary mb-2">Market Impact:</h4>
                    <p className="text-sm text-arzir-gray-600">{trend.impact}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {trend.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Strategic Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {trend.benefits.map((benefit, i) => (
                        <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Flow */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              From requirements analysis to delivery - a systematic approach to industrial solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processFlow.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-arzir-gray-200 relative">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-black">
                    {step.step}
                  </h3>
                  <div className="text-sm font-medium text-arzir-primary">
                    Timeline: {step.duration}
                  </div>
                  <p className="text-sm text-arzir-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-1">
                    {step.activities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-xs text-arzir-gray-600">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {index < processFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-arzir-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <ApplicationCTA 
        title="Ready to Optimize Your Industrial Manufacturing?"
        description="Get expert consultation and custom quotes for industrial aluminum extrusion solutions tailored to your manufacturing requirements."
        primaryButtonText="Get Industrial Quote"
        secondaryButtonText="View Equipment"
        secondaryButtonHref="/products/aluminium-extrusion-press"
        formSource="industrial_aluminum_cta"
      />
    </>
  );
}