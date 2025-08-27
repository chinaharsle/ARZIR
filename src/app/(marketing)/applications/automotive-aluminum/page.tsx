import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Car, Battery, Thermometer, Shield, Gauge, Target, TrendingUp, Award } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Aluminum Solutions | ARZIR Extrusion Press Technology",
  description: "Advanced aluminum extrusion solutions for automotive applications. Body frames, heat exchangers, battery housings, and lightweight components for modern vehicles.",
  keywords: [
    "automotive aluminum extrusion",
    "car body frame aluminum",
    "automotive heat exchanger",
    "electric vehicle battery housing",
    "automotive aluminum components",
    "lightweight vehicle materials",
    "automotive aluminum profiles",
    "vehicle aluminum manufacturing"
  ],
  openGraph: {
    title: "Automotive Aluminum Solutions",
    description: "Advanced aluminum extrusion solutions for automotive applications with precision manufacturing for body frames, heat exchangers, and EV components.",
    images: [
      {
        url: "/images/applications/Automotive Aluminum.png",
        width: 1200,
        height: 630,
        alt: "Automotive Aluminum Applications - ARZIR"
      }
    ]
  }
};

const automotiveApplications = [
  {
    title: "Body Frame & Chassis",
    description: "Structural aluminum components for vehicle frames and chassis systems",
    icon: Car,
    specifications: ["6061-T6 high strength alloy", "Superior crash performance", "40% weight reduction vs steel", "Optimized cross-sections"],
    applications: ["Space frames", "Body-in-white", "Subframes", "Structural reinforcements"],
    benefits: ["Improved fuel efficiency", "Enhanced safety", "Corrosion resistance", "Design flexibility"]
  },
  {
    title: "Heat Exchangers & Cooling",
    description: "Precision aluminum profiles for automotive thermal management systems",
    icon: Thermometer,
    specifications: ["3003 alloy for heat transfer", "Complex internal channels", "Brazing compatibility", "Pressure vessel compliance"],
    applications: ["Radiators", "Intercoolers", "Condensers", "Oil coolers"],
    benefits: ["Superior heat transfer", "Lightweight design", "Durability", "Cost effectiveness"]
  },
  {
    title: "Electric Vehicle Components",
    description: "Specialized aluminum solutions for electric and hybrid vehicle systems",
    icon: Battery,
    specifications: ["Battery housing profiles", "EMI shielding capability", "Thermal management", "Safety certifications"],
    applications: ["Battery enclosures", "Motor housings", "Charging infrastructure", "Thermal barriers"],
    benefits: ["Extended battery life", "Safety compliance", "Weight optimization", "Thermal efficiency"]
  },
  {
    title: "Trim & Decorative Elements",
    description: "Aesthetic and functional aluminum components for vehicle interiors and exteriors",
    icon: Award,
    specifications: ["Surface finish options", "Complex geometries", "Anodizing capability", "Design flexibility"],
    applications: ["Trim pieces", "Decorative panels", "Window frames", "Interior components"],
    benefits: ["Premium appearance", "Corrosion resistance", "Lightweight", "Manufacturing efficiency"]
  }
];

const materialProperties = [
  {
    alloy: "6061-T6",
    application: "Structural Components",
    tensileStrength: "310 MPa",
    yieldStrength: "276 MPa",
    elongation: "12%",
    benefits: ["High strength", "Excellent weldability", "Good corrosion resistance", "Heat treatable"]
  },
  {
    alloy: "6063-T5",
    application: "General Purpose Profiles",
    tensileStrength: "241 MPa", 
    yieldStrength: "214 MPa",
    elongation: "12%",
    benefits: ["Good extrudability", "Smooth surface finish", "Moderate strength", "Cost effective"]
  },
  {
    alloy: "3003-H14",
    application: "Heat Exchanger Components",
    tensileStrength: "150 MPa",
    yieldStrength: "145 MPa", 
    elongation: "8%",
    benefits: ["Excellent formability", "Superior corrosion resistance", "Good thermal conductivity", "Brazing compatible"]
  },
  {
    alloy: "5083-H111",
    application: "Marine & Heavy Duty",
    tensileStrength: "317 MPa",
    yieldStrength: "228 MPa",
    elongation: "16%",
    benefits: ["High strength", "Excellent corrosion resistance", "Non-heat treatable", "Weldable"]
  }
];

const manufacturingCapabilities = [
  {
    capability: "Complex Geometries",
    description: "Advanced die design for intricate automotive profiles",
    specifications: ["Multi-void extrusions", "Hollow sections", "Variable wall thickness", "Integrated features"],
    icon: Target
  },
  {
    capability: "High-Volume Production",
    description: "Automated production systems for automotive quantities",
    specifications: ["800-1200 kg/hour capacity", "Consistent quality", "Minimal waste", "Just-in-time delivery"],
    icon: TrendingUp
  },
  {
    capability: "Precision Tolerances",
    description: "Tight dimensional control for critical automotive applications",
    specifications: ["±0.05mm tolerance achievable", "Statistical process control", "100% inspection capability", "Traceability systems"],
    icon: Gauge
  },
  {
    capability: "Surface Finishing",
    description: "Complete finishing solutions for automotive requirements",
    specifications: ["Anodizing", "Powder coating", "Chromating", "Mechanical finishing"],
    icon: Shield
  }
];

const vehicleSegments = [
  {
    segment: "Passenger Vehicles",
    description: "Sedans, SUVs, and crossover vehicles for consumer markets",
    requirements: ["Crash safety", "Fuel efficiency", "Cost optimization", "Aesthetic appeal"],
    solutions: [
      "Body frame components with optimized cross-sections for safety and weight",
      "Heat exchanger profiles for efficient thermal management",
      "Trim and decorative elements for premium appearance",
      "Structural reinforcements for improved rigidity"
    ],
    benefits: ["30-40% weight reduction", "Improved fuel economy", "Enhanced safety ratings", "Premium brand positioning"]
  },
  {
    segment: "Electric Vehicles",
    description: "Battery electric and hybrid electric vehicle platforms",
    requirements: ["Battery protection", "Thermal management", "Weight optimization", "EMI shielding"],
    solutions: [
      "Battery housing structures with integrated cooling channels",
      "High-voltage cable protection profiles",
      "Motor housing components with thermal management",
      "Charging port housings with weather sealing"
    ],
    benefits: ["Extended range", "Enhanced safety", "Faster charging", "Regulatory compliance"]
  },
  {
    segment: "Commercial Vehicles",
    description: "Trucks, buses, and commercial transportation vehicles",
    requirements: ["Durability", "Load capacity", "Maintenance efficiency", "Operational costs"],
    solutions: [
      "Heavy-duty structural profiles for chassis applications",
      "Large-scale heat exchanger components for engine cooling", 
      "Cargo area components with corrosion resistance",
      "Maintenance access panels and covers"
    ],
    benefits: ["Increased payload", "Reduced maintenance", "Extended service life", "Lower operating costs"]
  },
  {
    segment: "Performance Vehicles",
    description: "Sports cars and high-performance automotive applications",
    requirements: ["Maximum weight reduction", "Structural rigidity", "Heat dissipation", "Precision engineering"],
    solutions: [
      "Ultra-lightweight space frame structures",
      "High-performance heat exchanger cores", 
      "Precision-machined components with tight tolerances",
      "Advanced surface treatments for durability"
    ],
    benefits: ["Superior performance", "Enhanced handling", "Track durability", "Competitive advantage"]
  }
];

const qualityStandards = [
  {
    standard: "ISO/TS 16949",
    description: "Automotive quality management system requirements",
    scope: "Complete quality system for automotive suppliers",
    benefits: ["Zero defects", "Continuous improvement", "Risk management", "Customer satisfaction"]
  },
  {
    standard: "IATF 16949:2016", 
    description: "Latest automotive quality standard",
    scope: "Enhanced requirements for automotive manufacturing",
    benefits: ["Global recognition", "Supplier approval", "Process control", "Defect prevention"]
  },
  {
    standard: "FMVSS Compliance",
    description: "Federal Motor Vehicle Safety Standards",
    scope: "Safety requirements for automotive components",
    benefits: ["Market access", "Safety compliance", "Legal protection", "Consumer confidence"]
  },
  {
    standard: "OEM Specifications",
    description: "Original Equipment Manufacturer requirements",
    scope: "Customer-specific quality and performance standards",
    benefits: ["Direct supply capability", "Long-term partnerships", "Premium pricing", "Market leadership"]
  }
];

const innovationTrends = [
  {
    trend: "Lightweighting",
    description: "Continuous drive for weight reduction in automotive applications",
    impact: "30-50% weight savings compared to steel equivalents",
    technologies: ["Advanced alloys", "Optimized cross-sections", "Hollow profiles", "Multi-material designs"],
    benefits: ["Improved fuel efficiency", "Reduced emissions", "Enhanced performance", "Cost savings"]
  },
  {
    trend: "Electrification",
    description: "Growing demand for electric vehicle components and systems",
    impact: "New product categories and specialized requirements",
    technologies: ["Battery housings", "Thermal management", "EMI shielding", "High-voltage systems"],
    benefits: ["Market expansion", "Technical leadership", "Sustainability", "Innovation partnerships"]
  },
  {
    trend: "Autonomous Vehicles",
    description: "Integration requirements for autonomous driving systems",
    impact: "Specialized profiles for sensor mounting and protection",
    technologies: ["Sensor housings", "Radar transparent materials", "Vibration dampening", "Precision mounting"],
    benefits: ["Technology leadership", "New market opportunities", "Value-added products", "Strategic partnerships"]
  },
  {
    trend: "Sustainability",
    description: "Environmental considerations and circular economy principles",
    impact: "Recyclability and lifecycle assessment requirements",
    technologies: ["Recycled content", "Lifecycle optimization", "Energy efficiency", "Circular design"],
    benefits: ["Brand positioning", "Regulatory compliance", "Cost optimization", "Market differentiation"]
  }
];

export default function AutomotiveAluminumPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Automotive Aluminum Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Advanced aluminum extrusion solutions for body frames, heat exchangers, battery housings, 
              and lightweight components driving the future of automotive innovation.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                40% weight reduction
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                1200 kg/hour capacity
              </div>
            </div>
            <QuoteDialog source="automotive_aluminum_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/Automotive Aluminum.png"
                alt="Automotive Aluminum Applications"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Automotive Applications */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Automotive Applications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive aluminum solutions for modern automotive manufacturing requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automotiveApplications.map((application, index) => (
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
              Optimized aluminum alloys for specific automotive performance requirements
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
              Advanced manufacturing technologies for automotive industry requirements
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

      {/* Vehicle Segments */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Vehicle Segment Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Tailored aluminum solutions for different automotive market segments
            </p>
          </div>
          
          <div className="space-y-6">
            {vehicleSegments.map((segment, index) => (
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
              Quality Standards & Certifications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Meeting stringent automotive industry quality and safety requirements
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
              Leading automotive innovations driving aluminum technology advancement
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

      {/* CTA Section */}
      <ApplicationCTA 
        title="Ready to Revolutionize Your Automotive Manufacturing?"
        description="Get expert consultation and custom quotes for automotive aluminum extrusion solutions tailored to your vehicle platform requirements."
        primaryButtonText="Get Automotive Quote"
        secondaryButtonText="View Equipment" 
        secondaryButtonHref="/products/aluminium-extrusion-press"
        formSource="automotive_aluminum_cta"
      />
    </>
  );
}