import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Plane, Zap, Shield, Settings, Award, Target, Timer, TrendingUp, Gauge, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aerospace Aluminum Solutions | ARZIR Precision Extrusion Technology",
  description: "Advanced aluminum extrusion solutions for aerospace applications. Aircraft structures, precision components, and aerospace-grade profiles with stringent quality standards.",
  keywords: [
    "aerospace aluminum extrusion",
    "aircraft aluminum profiles",
    "aerospace aluminum components",
    "aviation aluminum extrusion",
    "aircraft structural profiles",
    "aerospace grade aluminum",
    "aviation aluminum manufacturing",
    "lightweight aerospace materials"
  ],
  openGraph: {
    title: "Aerospace Aluminum Solutions | ARZIR",
    description: "Advanced aluminum extrusion solutions for aerospace applications with precision manufacturing and aerospace-grade quality standards.",
    images: [
      {
        url: "/images/applications/aerospace-aluminum.jpg",
        width: 1200,
        height: 630,
        alt: "Aerospace Aluminum Applications - ARZIR"
      }
    ]
  }
};

const aerospaceApplications = [
  {
    title: "Aircraft Structural Components",
    description: "Critical structural aluminum profiles for aircraft fuselage, wing frames, and load-bearing components",
    icon: Plane,
    specifications: ["7075-T6 high strength alloy", "AS9100 quality standards", "±0.05mm precision tolerance", "Full traceability documentation"],
    applications: ["Fuselage frames", "Wing ribs", "Bulkheads", "Landing gear components"],
    benefits: ["Weight reduction up to 45%", "Superior fatigue resistance", "Corrosion protection", "Regulatory compliance"]
  },
  {
    title: "Engine & Propulsion Systems",
    description: "High-performance aluminum profiles for aircraft engine components and propulsion systems",
    icon: Settings,
    specifications: ["Heat-resistant alloys", "Precision machining ready", "Vibration dampening", "High-temperature stability"],
    applications: ["Engine casings", "Heat shields", "Intake components", "Exhaust systems"],
    benefits: ["Thermal management", "Reduced noise levels", "Enhanced durability", "Maintenance efficiency"]
  },
  {
    title: "Interior & Cabin Systems",
    description: "Lightweight aluminum profiles for aircraft interior structures and cabin systems",
    icon: Users,
    specifications: ["Fire-retardant treatments", "Smooth surface finish", "Lightweight design", "EMI shielding capability"],
    applications: ["Seat frames", "Cabin partitions", "Overhead bins", "Interior panels"],
    benefits: ["Passenger comfort", "Weight optimization", "Safety compliance", "Design flexibility"]
  },
  {
    title: "Landing Gear & Actuation",
    description: "High-strength aluminum components for landing gear systems and flight control actuators",
    icon: Target,
    specifications: ["Ultra-high strength alloys", "Fatigue-resistant design", "Precision tolerances", "Surface treatments"],
    applications: ["Landing gear struts", "Actuator housings", "Control surfaces", "Hydraulic components"],
    benefits: ["Operational reliability", "Extended service life", "Reduced maintenance", "Performance optimization"]
  }
];

const materialProperties = [
  {
    alloy: "7075-T6",
    application: "Structural Components",
    tensileStrength: "572 MPa",
    yieldStrength: "503 MPa",
    elongation: "11%",
    benefits: ["Ultra-high strength", "Excellent machinability", "Superior fatigue life", "Aerospace certified"]
  },
  {
    alloy: "6061-T6", 
    application: "General Purpose",
    tensileStrength: "310 MPa",
    yieldStrength: "276 MPa", 
    elongation: "12%",
    benefits: ["Good weldability", "Corrosion resistant", "Heat treatable", "Cost effective"]
  },
  {
    alloy: "2024-T3",
    application: "Aircraft Structures",
    tensileStrength: "483 MPa",
    yieldStrength: "345 MPa",
    elongation: "18%",
    benefits: ["High strength-to-weight", "Excellent fatigue properties", "Damage tolerance", "Proven aerospace use"]
  },
  {
    alloy: "7050-T7451",
    application: "Thick Section Components",
    tensileStrength: "524 MPa", 
    yieldStrength: "469 MPa",
    elongation: "11%",
    benefits: ["Stress corrosion resistance", "Uniform properties", "Large cross-sections", "Premium aerospace grade"]
  }
];

const manufacturingCapabilities = [
  {
    capability: "Precision Extrusion",
    description: "Ultra-precise aluminum extrusion for aerospace dimensional requirements",
    specifications: ["±0.025mm tolerance capability", "Complex hollow sections", "Integrated features", "Multi-cavity profiles"],
    icon: Target
  },
  {
    capability: "Quality Assurance", 
    description: "Comprehensive quality control meeting aerospace industry standards",
    specifications: ["AS9100 certified processes", "100% dimensional inspection", "Material traceability", "Statistical process control"],
    icon: Award
  },
  {
    capability: "Surface Treatments",
    description: "Specialized surface treatments for aerospace environmental requirements",
    specifications: ["Anodizing Type II & III", "Chemical film treatments", "Primer coatings", "Corrosion protection"],
    icon: Shield
  },
  {
    capability: "Testing & Validation",
    description: "Extensive testing protocols for aerospace material certification",
    specifications: ["Mechanical property testing", "Fatigue life validation", "Environmental testing", "NDT inspection"],
    icon: Gauge
  }
];

const aircraftSegments = [
  {
    segment: "Commercial Aviation",
    description: "Large passenger aircraft and commercial jet applications",
    requirements: ["Weight optimization", "Fuel efficiency", "Passenger safety", "Maintenance cost reduction"],
    solutions: [
      "Fuselage structural frames with optimized weight-to-strength ratios",
      "Wing components with integrated stiffeners and ribs", 
      "Interior systems designed for passenger comfort and safety",
      "Engine components with thermal management features"
    ],
    benefits: ["15-20% weight reduction", "Improved fuel economy", "Enhanced safety ratings", "Lower operating costs"]
  },
  {
    segment: "Military & Defense",
    description: "Military aircraft, defense systems, and tactical applications", 
    requirements: ["Mission reliability", "Durability", "Performance optimization", "Maintenance efficiency"],
    solutions: [
      "High-strength structural components for combat aircraft",
      "Specialized profiles for weapons systems and avionics",
      "Armor-compatible structures with ballistic protection",
      "Maintenance-friendly designs for field operations"
    ],
    benefits: ["Mission readiness", "Extended service life", "Operational flexibility", "Reduced logistics burden"]
  },
  {
    segment: "General Aviation",
    description: "Private aircraft, business jets, and recreational aviation",
    requirements: ["Cost effectiveness", "Performance", "Reliability", "Customization capability"],
    solutions: [
      "Standard and custom profiles for airframe construction",
      "Interior components with premium finish options",
      "Engine accessories and cooling system components", 
      "Landing gear and control system elements"
    ],
    benefits: ["Competitive pricing", "Performance enhancement", "Customization options", "Quality assurance"]
  },
  {
    segment: "Space & Satellite",
    description: "Space launch vehicles, satellites, and space exploration systems",
    requirements: ["Zero failure tolerance", "Extreme environment resistance", "Weight minimization", "Long-term reliability"],
    solutions: [
      "Ultra-lightweight structures for payload optimization",
      "Components designed for vacuum and radiation exposure",
      "Thermal management systems for space environments",
      "Precision mechanisms for deployment systems"
    ],
    benefits: ["Mission success", "Payload maximization", "Environmental durability", "System reliability"]
  }
];

const qualityStandards = [
  {
    standard: "AS9100D",
    description: "Aerospace Quality Management System requirements",
    scope: "Complete quality system for aerospace manufacturing and supply chain",
    benefits: ["Risk management", "Continuous improvement", "Configuration management", "Customer satisfaction"]
  },
  {
    standard: "NADCAP Certification", 
    description: "National Aerospace and Defense Contractors Accreditation Program",
    scope: "Special process accreditation for aerospace manufacturing",
    benefits: ["Process excellence", "Global recognition", "Customer confidence", "Supplier qualification"]
  },
  {
    standard: "FAA/EASA Compliance",
    description: "Federal Aviation Administration and European Aviation Safety Agency",
    scope: "Airworthiness and safety requirements for aircraft components",
    benefits: ["Regulatory approval", "Market access", "Safety assurance", "Legal compliance"]
  },
  {
    standard: "ASTM B221",
    description: "Standard Specification for Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles",
    scope: "Material specifications and testing requirements for aerospace aluminum",
    benefits: ["Material consistency", "Property verification", "Quality assurance", "Industry acceptance"]
  }
];

const innovationTrends = [
  {
    trend: "Advanced Materials",
    description: "Development of new aluminum alloys with enhanced properties for aerospace applications",
    impact: "Improved performance characteristics and expanded application possibilities", 
    technologies: ["Scandium-modified alloys", "Rapid solidification", "Powder metallurgy", "Nanostructured materials"],
    benefits: ["Higher strength-to-weight ratios", "Enhanced corrosion resistance", "Improved formability", "Extended service life"]
  },
  {
    trend: "Digital Manufacturing",
    description: "Integration of digital technologies in aerospace aluminum manufacturing",
    impact: "Enhanced precision, traceability, and quality control throughout production",
    technologies: ["Digital twins", "AI-powered quality control", "Automated inspection", "Predictive maintenance"],
    benefits: ["Zero-defect manufacturing", "Reduced lead times", "Enhanced traceability", "Predictive quality"]
  },
  {
    trend: "Sustainable Aviation",
    description: "Focus on environmental sustainability and circular economy principles",
    impact: "Reduced environmental footprint and improved lifecycle sustainability",
    technologies: ["Recycled content integration", "Energy-efficient processing", "Lifecycle optimization", "Green manufacturing"],
    benefits: ["Environmental compliance", "Cost optimization", "Brand sustainability", "Regulatory alignment"]
  },
  {
    trend: "Electric Aircraft",
    description: "Growing demand for electric and hybrid-electric aircraft systems",
    impact: "New component requirements and specialized aluminum applications",
    technologies: ["Battery housing structures", "Electric motor components", "Thermal management systems", "Lightweight frameworks"],
    benefits: ["Market expansion", "Technical innovation", "Environmental benefits", "Future readiness"]
  }
];

const performanceMetrics = [
  {
    metric: "Weight Reduction",
    description: "Significant weight savings compared to traditional materials",
    value: "Up to 45%",
    comparison: "vs. steel equivalents",
    impact: "Improved fuel efficiency and increased payload capacity",
    icon: TrendingUp
  },
  {
    metric: "Strength-to-Weight Ratio",
    description: "Superior structural performance per unit weight",
    value: "3-5x Higher",
    comparison: "vs. steel structures", 
    impact: "Enhanced structural efficiency and design flexibility",
    icon: Target
  },
  {
    metric: "Fatigue Life", 
    description: "Extended operational life under cyclic loading conditions",
    value: "10⁷+ Cycles",
    comparison: "high-cycle fatigue",
    impact: "Reduced maintenance requirements and operational costs",
    icon: Timer
  },
  {
    metric: "Precision Tolerance",
    description: "Dimensional accuracy meeting stringent aerospace requirements", 
    value: "±0.025mm",
    comparison: "standard capability",
    impact: "Perfect fit and assembly with minimal machining required",
    icon: Gauge
  }
];

const processFlow = [
  {
    step: "Material Certification",
    description: "Verify aluminum alloy composition and properties meet aerospace specifications",
    duration: "2-3 days",
    activities: ["Chemical analysis", "Mechanical testing", "Certification review", "Traceability documentation"]
  },
  {
    step: "Precision Die Design", 
    description: "Engineer custom extrusion dies for specific aerospace profile requirements",
    duration: "3-4 weeks",
    activities: ["Profile optimization", "Stress analysis", "Thermal modeling", "Die manufacturing"]
  },
  {
    step: "Controlled Extrusion",
    description: "Execute precision extrusion process with real-time quality monitoring", 
    duration: "Production dependent",
    activities: ["Temperature control", "Pressure monitoring", "Speed optimization", "Dimensional verification"]
  },
  {
    step: "Quality Validation",
    description: "Comprehensive testing and inspection to aerospace quality standards",
    duration: "1-2 weeks", 
    activities: ["Dimensional inspection", "Property testing", "Surface quality check", "Documentation package"]
  }
];

export default function AerospaceAluminumPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Aerospace Aluminum Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Advanced aluminum extrusion solutions for aircraft structures, precision components, and 
              aerospace-grade profiles meeting the most stringent quality and safety standards.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                AS9100 Certified
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                ±0.025mm precision
              </div>
            </div>
            <QuoteDialog source="aerospace_aluminum_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/aerospace-aluminum.jpg"
                alt="Aerospace Aluminum Applications"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Aerospace Applications */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Aerospace Applications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive aluminum solutions for critical aerospace manufacturing requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aerospaceApplications.map((application, index) => (
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
              Aerospace Material Properties
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Premium aluminum alloys optimized for aerospace performance requirements
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
              Advanced manufacturing technologies for aerospace industry requirements
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

      {/* Aircraft Segments */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Aircraft Segment Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Tailored aluminum solutions for different aerospace market segments
            </p>
          </div>
          
          <div className="space-y-6">
            {aircraftSegments.map((segment, index) => (
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

      {/* Performance Metrics */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Performance Metrics
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Quantifiable advantages of aerospace aluminum solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-arzir-gray-100 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-black">
                    {metric.metric}
                  </h3>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-arzir-primary">{metric.value}</div>
                    <div className="text-sm text-arzir-gray-600">{metric.comparison}</div>
                  </div>
                  <p className="text-sm text-arzir-gray-600 leading-relaxed">
                    {metric.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                      {metric.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Quality Standards */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Aerospace Quality Standards
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Meeting the highest aerospace industry quality and safety standards
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
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Aerospace Innovation Trends
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Leading aerospace innovations driving aluminum technology advancement
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
                    <h4 className="text-sm font-semibold text-arzir-primary mb-2">Industry Impact:</h4>
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
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Aerospace Manufacturing Process
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Rigorous process ensuring aerospace quality and traceability standards
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
                    Duration: {step.duration}
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
        title="Ready to Elevate Your Aerospace Manufacturing?"
        description="Get expert consultation and custom quotes for aerospace aluminum extrusion solutions meeting the most stringent industry standards."
        primaryButtonText="Get Aerospace Quote"
        secondaryButtonText="View Equipment" 
        secondaryButtonHref="/products/aluminium-extrusion-press"
        formSource="aerospace_aluminum_cta"
      />
    </>
  );
}