import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Factory, Building, Shield, Thermometer, Award, Target } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Building Aluminum Solutions | ARZIR Extrusion Press",
  description: "Professional aluminum extrusion solutions for construction and building applications. Window frames, curtain walls, and architectural profiles with precision manufacturing.",
  keywords: [
    "construction aluminum extrusion",
    "building aluminum profiles",
    "window frame extrusion",
    "curtain wall aluminum",
    "architectural aluminum profiles",
    "building material extrusion",
    "construction aluminum manufacturing",
    "structural glazing profiles"
  ],
  openGraph: {
    title: "Construction & Building Aluminum Solutions",
    description: "Professional aluminum extrusion solutions for construction and building applications with precision manufacturing and superior quality.",
    images: [
      {
        url: "/images/applications/Construction Aluminum.webp",
        width: 1200,
        height: 630,
        alt: "Construction Aluminum Applications - ARZIR"
      }
    ]
  }
};

const applicationFeatures = [
  {
    title: "Window & Door Frames",
    description: "High-precision aluminum profiles for residential and commercial window and door systems",
    icon: Building,
    specifications: ["±0.1mm dimensional tolerance", "6063-T5 alloy standard", "Thermal break compatibility", "Anodizing ready surface"],
    applications: ["Residential windows", "Commercial storefronts", "High-rise buildings", "Energy-efficient systems"]
  },
  {
    title: "Curtain Wall Systems",
    description: "Structural glazing profiles for modern architectural facades and building envelopes",
    icon: Factory,
    specifications: ["Superior structural integrity", "Weather resistance", "Modular design flexibility", "Fire safety compliance"],
    applications: ["Office buildings", "Shopping centers", "Hotels & resorts", "Institutional buildings"]
  },
  {
    title: "Structural Glazing",
    description: "Precision profiles for structural glazing systems and architectural frameworks",
    icon: Shield,
    specifications: ["High strength-to-weight ratio", "Corrosion resistance", "Design flexibility", "Long-term durability"],
    applications: ["Atriums & skylights", "Canopies & awnings", "Structural glazing", "Architectural features"]
  },
  {
    title: "Architectural Profiles",
    description: "Custom decorative and functional aluminum profiles for architectural applications",
    icon: Award,
    specifications: ["Complex geometry capability", "Surface finish options", "Custom design support", "Code compliance"],
    applications: ["Handrails & balustrades", "Cladding systems", "Decorative elements", "Interior applications"]
  }
];

const technicalSpecs = [
  {
    parameter: "Alloy Types",
    specification: "6063, 6061, 6005A",
    benefit: "Optimal strength and extrudability for construction applications"
  },
  {
    parameter: "Dimensional Tolerance",
    specification: "±0.1mm typical",
    benefit: "Precise fit and assembly for building components"
  },
  {
    parameter: "Surface Finish",
    specification: "Mill, Anodized, Powder Coated",
    benefit: "Weather resistance and aesthetic appeal"
  },
  {
    parameter: "Profile Length",
    specification: "Up to 12m standard",
    benefit: "Reduces joints and improves structural integrity"
  },
  {
    parameter: "Wall Thickness",
    specification: "1.2mm - 15mm",
    benefit: "Meets structural and thermal requirements"
  },
  {
    parameter: "Production Capacity",
    specification: "500-1800 kg/hour",
    benefit: "High-volume production capability"
  }
];

const qualityStandards = [
  {
    standard: "AAMA Standards",
    description: "American Architectural Manufacturers Association specifications for windows and doors",
    compliance: "Full compliance with AAMA 611, 624, and other relevant standards"
  },
  {
    standard: "ASTM International",
    description: "Material specifications and testing methods for aluminum building products",
    compliance: "ASTM B221, B308, and E283 compliant manufacturing"
  },
  {
    standard: "ISO 9001:2015",
    description: "Quality management systems for consistent product quality",
    compliance: "Certified quality processes and continuous improvement"
  },
  {
    standard: "Energy Codes",
    description: "Building energy efficiency requirements and thermal performance",
    compliance: "Supports LEED, Energy Star, and local energy code requirements"
  }
];

const projectTypes = [
  {
    type: "Residential Buildings",
    description: "Single and multi-family residential construction projects",
    requirements: ["Energy efficiency", "Durability", "Aesthetic appeal", "Cost effectiveness"],
    solutions: ["Thermal break windows", "Sliding door systems", "Balcony railings", "Entry systems"],
    benefits: ["Reduced energy costs", "Low maintenance", "Enhanced property value", "Design flexibility"]
  },
  {
    type: "Commercial Buildings",
    description: "Office buildings, retail centers, and commercial facilities",
    requirements: ["Structural performance", "Fire safety", "Weather resistance", "Maintenance access"],
    solutions: ["Curtain wall systems", "Storefront glazing", "Canopy structures", "Interior partitions"],
    benefits: ["Professional appearance", "Long-term reliability", "Code compliance", "Operational efficiency"]
  },
  {
    type: "Institutional Projects",
    description: "Schools, hospitals, government buildings, and public facilities",
    requirements: ["Safety compliance", "Accessibility", "Durability", "Sustainability"],
    solutions: ["Educational facility windows", "Healthcare glazing", "Security applications", "Accessible entrances"],
    benefits: ["Public safety", "ADA compliance", "Sustainable design", "Long service life"]
  },
  {
    type: "High-Rise Construction",
    description: "Multi-story buildings and skyscraper construction projects",
    requirements: ["Structural integrity", "Wind load resistance", "Installation efficiency", "Maintenance access"],
    solutions: ["Structural glazing systems", "High-performance curtain walls", "Wind-resistant profiles", "Modular components"],
    benefits: ["Superior performance", "Installation efficiency", "Reduced maintenance", "Design innovation"]
  }
];

const performanceAdvantages = [
  {
    advantage: "Thermal Performance",
    description: "Advanced thermal break technology and insulation capabilities",
    metrics: ["U-values as low as 0.8 W/m²K", "Thermal bridging elimination", "Energy savings up to 40%"],
    icon: Thermometer
  },
  {
    advantage: "Structural Integrity",
    description: "Superior strength-to-weight ratio and structural performance",
    metrics: ["High load-bearing capacity", "Wind load resistance", "Seismic performance"],
    icon: Shield
  },
  {
    advantage: "Precision Manufacturing",
    description: "Advanced extrusion technology ensures consistent quality and fit",
    metrics: ["±0.1mm dimensional accuracy", "Perfect assembly fit", "Reduced field modifications"],
    icon: Target
  },
  {
    advantage: "Durability & Longevity",
    description: "Corrosion resistance and long-term performance in all climates",
    metrics: ["50+ year service life", "Weather resistance", "Minimal maintenance requirements"],
    icon: Award
  }
];

const processFlow = [
  {
    step: "Design Consultation",
    description: "Collaborate with architects and engineers to develop optimal profile designs",
    duration: "1-2 weeks",
    activities: ["Requirement analysis", "Design optimization", "Performance calculations", "Code compliance review"]
  },
  {
    step: "Tooling Development",
    description: "Create precision dies and tooling for your specific profile requirements",
    duration: "2-4 weeks", 
    activities: ["Die design", "Manufacturing", "Testing", "Quality validation"]
  },
  {
    step: "Production Setup",
    description: "Configure extrusion press and establish quality control procedures",
    duration: "1 week",
    activities: ["Machine setup", "Process optimization", "Quality procedures", "First article inspection"]
  },
  {
    step: "Volume Production",
    description: "High-capacity manufacturing with continuous quality monitoring",
    duration: "Ongoing",
    activities: ["Continuous production", "Quality control", "Inventory management", "Delivery coordination"]
  }
];

export default function ConstructionAluminumPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Construction & Building Aluminum Solutions
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Professional aluminum extrusion solutions for window frames, curtain walls, and architectural 
              profiles with precision manufacturing and superior quality standards.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                ±0.1mm precision
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                1800 kg/hour capacity
              </div>
            </div>
            <QuoteDialog source="construction_aluminum_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/Construction Aluminum.webp"
                alt="Construction Aluminum Applications"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Application Features */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Construction Applications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive aluminum extrusion solutions for all construction and building requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applicationFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Technical Specifications:</h4>
                      <ul className="space-y-1">
                        {feature.specifications.map((spec, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-sm text-arzir-gray-600">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Typical Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {feature.applications.map((app, i) => (
                          <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-xs">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Technical Specifications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing capabilities ensuring precision and quality
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="p-4 text-left font-bold text-black">Parameter</th>
                  <th className="p-4 text-left font-bold text-black">Specification</th>
                  <th className="p-4 text-left font-bold text-black">Benefit</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="p-4 font-medium text-arzir-primary">{spec.parameter}</td>
                    <td className="p-4">{spec.specification}</td>
                    <td className="p-4 text-arzir-gray-600">{spec.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Performance Advantages */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Performance Advantages
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Superior performance characteristics for demanding construction applications
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
                        {metric}
                      </div>
                    ))}
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
              Quality Standards & Compliance
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Meeting and exceeding industry standards for construction aluminum products
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
                  <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm text-green-700 font-medium">
                      {standard.compliance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Project Types */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Project Applications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Tailored solutions for diverse construction project requirements
            </p>
          </div>
          
          <div className="space-y-6">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-black mb-2">
                      {project.type}
                    </h3>
                    <p className="text-sm text-arzir-gray-600">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {project.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-arzir-gray-600">• {req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Solutions:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.solutions.map((solution, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.benefits.map((benefit, i) => (
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
              Our Process
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              From design consultation to volume production - a streamlined approach
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
        title="Ready to Start Your Construction Project?"
        description="Get expert consultation and custom quotes for your construction aluminum extrusion requirements."
        primaryButtonText="Get Custom Quote"
        secondaryButtonText="View Equipment"
        secondaryButtonHref="/products/aluminium-extrusion-press"
        formSource="construction_aluminum_cta"
      />
    </>
  );
}