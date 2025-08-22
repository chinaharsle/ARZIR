import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Truck, Timer, Factory, Users, Star, MapPin, Wrench } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gantry Shear | Heavy-Duty Scrap Shear | Large Metal Cutting Machine | ARZIR",
  description: "ARZIR Gantry Shear - large hydraulic shear for processing thick steel plates, long steel materials, and heavy scrap metal. Up to 2000T cutting force for steel mills and scrap yards.",
  keywords: [
    "gantry shear",
    "heavy-duty scrap shear",
    "hydraulic gantry shear",
    "large scrap cutting machine",
    "scrap metal cutting equipment",
    "heavy scrap processing equipment",
    "steel mill scrap shear"
  ],
  openGraph: {
    title: "Gantry Shear | Heavy-Duty Hydraulic Scrap Cutting Machine | ARZIR",
    description: "Large hydraulic gantry shear for processing thick steel plates and heavy scrap metal with up to 2000T cutting force.",
    images: [
      {
        url: "/images/products/gantry-shear.png",
        width: 1200,
        height: 630,
        alt: "ARZIR Gantry Shear - Heavy-Duty Scrap Metal Cutting Machine"
      }
    ]
  }
};

const technicalSpecs = [
  {
    model: "ARZIR GS-800",
    cuttingForce: "800 tons",
    bladeLength: "2000mm",
    maxThickness: "100mm",
    cuttingFrequency: "45-60 cycles/hour",
    capacity: "80-120 tons/hour",
    motorPower: "200 kW"
  },
  {
    model: "ARZIR GS-1200",
    cuttingForce: "1200 tons",
    bladeLength: "2500mm", 
    maxThickness: "150mm",
    cuttingFrequency: "40-55 cycles/hour",
    capacity: "100-150 tons/hour",
    motorPower: "315 kW"
  },
  {
    model: "ARZIR GS-1600",
    cuttingForce: "1600 tons",
    bladeLength: "3000mm",
    maxThickness: "200mm",
    cuttingFrequency: "35-50 cycles/hour",
    capacity: "120-180 tons/hour",
    motorPower: "400 kW"
  },
  {
    model: "ARZIR GS-2000",
    cuttingForce: "2000 tons",
    bladeLength: "3500mm",
    maxThickness: "300mm",
    cuttingFrequency: "30-45 cycles/hour",
    capacity: "150-220 tons/hour",
    motorPower: "500 kW"
  }
];

const keyFeatures = [
  {
    icon: Zap,
    title: "High-Tonnage Hydraulic System",
    description: "800-2000T cutting force efficiently processes thick steel plates, long steel materials, and large heavy scrap metal",
    benefit: "Handle the heaviest scrap materials"
  },
  {
    icon: Settings,
    title: "Continuous Work Capability",
    description: "Robust design enables continuous operation for high-volume processing with minimal downtime requirements",
    benefit: "Suitable for large-scale processing operations"
  },
  {
    icon: Shield,
    title: "Automated Control System", 
    description: "Advanced automation enhances operational efficiency and safety with precise cutting control and monitoring",
    benefit: "Improve efficiency and safety performance"
  },
  {
    icon: Award,
    title: "High-Precision Cutting",
    description: "Clean, accurate cuts with smooth edges reduce secondary processing requirements and improve material quality",
    benefit: "Neat cutting edges minimize waste"
  },
  {
    icon: Timer,
    title: "Durable Design",
    description: "Heavy-duty construction with premium components ensures long service life and reliable performance",
    benefit: "Extended equipment lifespan"
  },
  {
    icon: Truck,
    title: "Energy & Labor Savings",
    description: "Automated operation and efficient hydraulic systems reduce both labor requirements and energy consumption",
    benefit: "Reduce operational costs significantly"
  }
];

const applications = [
  {
    title: "Scrap Yards & Metal Recycling",
    description: "High-volume processing of thick steel plates, structural steel, and mixed heavy scrap materials",
    image: "/images/applications/scrap-recycling.png",
    href: "/applications/scrap-recycling", 
    materials: ["Thick steel plates", "Structural steel", "Heavy scrap metal", "Mixed ferrous materials"],
    capacity: "150-220 tons/hour",
    icon: Factory
  },
  {
    title: "Steel Mills & Smelting Plants",
    description: "Processing mill scale, heavy returns, and production waste for remelting operations",
    image: "/images/applications/steel-mills.png",
    href: "/applications/steel-mills",
    materials: ["Mill scale", "Heavy returns", "Production waste", "Thick steel sections"],
    capacity: "120-180 tons/hour", 
    icon: Wrench
  },
  {
    title: "Shipyards & Marine Industry",
    description: "Cutting heavy maritime steel structures, ship hull sections, and large marine components",
    image: "/images/applications/shipbreaking.png",
    href: "/applications/shipbreaking",
    materials: ["Ship hull sections", "Maritime structures", "Marine components", "Heavy marine steel"],
    capacity: "100-150 tons/hour",
    icon: Truck
  },
  {
    title: "Construction & Demolition Sites",
    description: "Processing large construction steel, demolition debris, and heavy structural components",
    image: "/images/applications/construction-demolition-recycling.png",
    href: "/applications/construction-demolition-recycling",
    materials: ["Construction steel", "Demolition debris", "Structural components", "Heavy building materials"],
    capacity: "80-120 tons/hour",
    icon: Settings
  }
];

const painPointSolutions = [
  {
    painPoint: "Large scrap steel difficult to transport due to size",
    solution: "Gantry Shear high-tonnage hydraulic system cuts thick heavy steel materials easily",
    benefit: "Easy cutting of thick and heavy steel materials"
  },
  {
    painPoint: "Manual cutting dangerous with low efficiency",
    solution: "Automated control reduces operational risk",
    benefit: "Lower operational risk"
  },
  {
    painPoint: "Standard shears cannot handle thick steel plates",
    solution: "High-efficiency design saves time and transport costs",
    benefit: "Save time and transportation costs"
  }
];

const comparisonData = [
  {
    feature: "Cutting Force",
    arzir: "800-2000 tons",
    traditional: "Manual cutting methods",
    advantage: "10-50x higher cutting power"
  },
  {
    feature: "Processing Efficiency",
    arzir: "150-220 tons/hour",
    traditional: "5-15 tons/hour",
    advantage: "15-40x higher throughput"
  },
  {
    feature: "Safety Performance",
    arzir: "Fully automated operation",
    traditional: "High-risk manual operation",
    advantage: "Eliminate operational risks"
  },
  {
    feature: "Cutting Quality",
    arzir: "Clean precise cuts",
    traditional: "Irregular flame cutting",
    advantage: "Superior cut quality and precision"
  },
  {
    feature: "Service Life",
    arzir: "15-20 years",
    traditional: "Frequent tool replacement",
    advantage: "Extended operational lifespan"
  },
  {
    feature: "Energy Consumption",
    arzir: "Efficient hydraulic system",
    traditional: "High fuel consumption",
    advantage: "25-40% energy savings"
  }
];

const caseStudies = [
  {
    title: "European Steel Mill - Germany",
    location: "Düsseldorf, Germany",
    equipment: "ARZIR GS-1600 Gantry Shear",
    results: [
      "Increased waste steel processing capacity by 60% per hour",
      "Reduced manual cutting operations and improved safety",
      "ROI achieved within 18 months through efficiency gains"
    ],
    testimonial: "The ARZIR gantry shear significantly improved our steel processing efficiency while ensuring operator safety.",
    icon: Factory
  },
  {
    title: "European Shipyard - Netherlands", 
    location: "Rotterdam, Netherlands",
    equipment: "ARZIR GS-2000 Gantry Shear",
    results: [
      "Rapid cutting of large steel plates for ship hull processing",
      "Processed 200+ tons/hour of heavy maritime steel",
      "Eliminated need for dangerous flame cutting operations"
    ],
    testimonial: "Perfect solution for our shipyard operations. The cutting power and precision exceeded our expectations.",
    icon: Truck
  },
  {
    title: "Scrap Processing Center - USA",
    location: "Detroit, USA",
    equipment: "ARZIR GS-1200 Gantry Shear",
    results: [
      "Continuous 24/7 operation processing 150 tons/hour",
      "Handled thick structural steel and heavy scrap efficiently",
      "Reduced processing costs by 40% compared to previous methods"
    ],
    testimonial: "Outstanding performance for our high-volume scrap processing operations with excellent reliability.",
    icon: Settings
  }
];

const operationSteps = [
  {
    step: "Material Loading",
    description: "Use crane or loader to position large scrap materials into the cutting chamber",
    duration: "3-5 minutes",
    details: "Proper positioning ensures optimal cutting efficiency and equipment safety"
  },
  {
    step: "Cutting Operation",
    description: "Activate hydraulic system to execute high-force cutting cycle",
    duration: "30-60 seconds",
    details: "Automated positioning system ensures precise blade alignment and cut quality"
  },
  {
    step: "Material Discharge",
    description: "Remove cut pieces and prepare for next cycle to maintain continuous operation",
    duration: "2-4 minutes", 
    details: "Efficient discharge system maintains optimal workflow and productivity"
  }
];

const maintenanceGuide = [
  {
    category: "Daily Inspection",
    tasks: ["Hydraulic system check", "Blade wear inspection", "Safety system verification"],
    frequency: "Daily"
  },
  {
    category: "Regular Maintenance",
    tasks: ["Hydraulic filter replacement", "Blade replacement/sharpening", "System pressure testing"],
    frequency: "Monthly"
  },
  {
    category: "Major Service",
    tasks: ["Hydraulic oil change", "Cylinder seal replacement", "Complete system overhaul"],
    frequency: "Annually"
  }
];

const faqs = [
  {
    question: "What is the gantry shear price range?",
    answer: "Gantry shear prices range from $450,000-$1,200,000 depending on cutting force and specifications. The GS-800 model starts at $450,000, while the GS-2000 model reaches $1,200,000. Contact us for detailed custom pricing."
  },
  {
    question: "What materials can a gantry shear cut?",
    answer: "Gantry shears can efficiently cut thick steel plates, structural steel, heavy scrap metal, ship hull sections, construction steel, and various ferrous materials up to 300mm thickness depending on the model."
  },
  {
    question: "What is the difference between gantry shear and container shear?",
    answer: "Gantry shears are designed for thicker and heavier materials with higher cutting force (800-2000T vs 400-800T), while container shears offer mobility. Gantry shears are ideal for permanent installations requiring maximum cutting power."
  },
  {
    question: "How many tons per hour can it process?",
    answer: "Processing capacity ranges from 80-220 tons/hour depending on model and material type. The GS-800 processes 80-120 t/h, while the GS-2000 achieves 150-220 t/h under optimal conditions."
  },
  {
    question: "What installation and after-sales service is provided?",
    answer: "We provide complete project support including foundation design, equipment installation, commissioning, operator training, and ongoing technical support. Installation typically takes 2-4 weeks depending on model complexity."
  }
];

const relatedContent = [
  {
    title: "Gantry Shear vs Container Shear: Which One to Choose for Heavy Scrap?",
    description: "Comprehensive comparison of gantry shears and container shears for heavy scrap processing applications",
    href: "/blog/gantry-shear-vs-container-shear"
  },
  {
    title: "How Gantry Shears Improve Scrap Metal Recycling Efficiency", 
    description: "Learn how heavy-duty gantry shear technology enhances processing efficiency for large-scale operations",
    href: "/blog/gantry-shears-improve-recycling-efficiency"
  }
];

export default function GantryShearPage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 via-white to-blue-50 !pt-16 sm:!pt-20 md:!pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-arzir-primary to-primary-600 text-white rounded-full text-sm font-medium shadow-lg">
                <Award className="h-4 w-4" />
                Heavy-Duty Processing Specialist
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Gantry{" "}
                <span className="text-arzir-primary">Shear</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Large Hydraulic Shear for{" "}
                <span className="text-arzir-primary font-semibold">Heavy Scrap Metal Processing</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Designed for steel mills, scrap yards, and shipyards.{" "}
              <strong className="text-black">Process thick steel plates and large heavy scrap with maximum efficiency.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">2000T</div>
                <div className="text-sm text-arzir-gray-600">Max Cutting Force</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">220T/h</div>
                <div className="text-sm text-arzir-gray-600">Processing Capacity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">300mm</div>
                <div className="text-sm text-arzir-gray-600">Max Thickness</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="gantry_shear_hero">
                <Button size="lg" className="bg-arzir-primary hover:bg-primary-600 w-full sm:w-auto">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </QuoteDialog>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="#specifications">
                  View Specifications
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/products/single/gantry shear.png"
                alt="ARZIR Gantry Shear - Heavy-Duty Scrap Metal Cutting Machine"
                fill
                className="object-contain sm:object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ✓ CE Certified
            </div>
            <div className="absolute -top-4 -left-4 bg-arzir-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Heavy-Duty Solution
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Professional Gantry Shear Solutions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-arzir-gray-600">
              <p>
                The ARZIR Gantry Shear is a large hydraulic cutting machine designed for processing 
                thick steel plates, long steel materials, and heavy scrap metal. Ideal for steel mills, 
                metal recycling facilities, shipyards, and construction & demolition sites.
              </p>
              <p>
                Unlike Container Shear or Alligator Shear, Gantry Shears are specifically engineered 
                for larger and thicker materials, offering superior cutting force up to 2000 tons 
                for the most demanding heavy scrap processing applications.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Scrap Yards</h3>
              <p className="text-arzir-gray-600">Heavy scrap metal and thick steel processing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Steel Mills</h3>
              <p className="text-arzir-gray-600">Mill scale and heavy returns processing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Shipyards</h3>
              <p className="text-arzir-gray-600">Heavy maritime steel structure cutting</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Construction</h3>
              <p className="text-arzir-gray-600">Building and demolition site processing</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Features & Advantages */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Core Features & Advantages
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              High-tonnage cutting force, continuous operation capability, and automated control systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-arzir-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-success">
                        <CheckCircle className="h-4 w-4" />
                        {feature.benefit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section id="specifications" background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Technical Specifications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Four proven models to meet different heavy scrap cutting requirements
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Gantry Shear Technical Specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cutting Force</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Blade Length</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Max Thickness</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cutting Frequency</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Capacity</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Motor Power</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr key={spec.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-arzir-primary">{spec.model}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.cuttingForce}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.bladeLength}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.maxThickness}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.cuttingFrequency}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.capacity}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.motorPower}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Application Scenarios
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for diverse heavy scrap cutting needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <app.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-black mb-1">
                        {app.title}
                      </h3>
                      <div className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium w-fit">
                        {app.capacity}
                      </div>
                    </div>
                    <p className="text-arzir-gray-600 leading-relaxed">
                      {app.description}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-2">Typical Materials:</p>
                      <div className="flex flex-wrap gap-2">
                        {app.materials.map((material, i) => (
                          <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-xs">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={app.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pain Points & Solutions */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Customer Challenges & ARZIR Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              How ARZIR gantry shears solve common heavy scrap cutting challenges
            </p>
          </div>
          
          <div className="space-y-8">
            {painPointSolutions.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-8 bg-gradient-to-r from-red-50 via-white to-green-50 rounded-2xl">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-red-600 mb-2">Challenge</h3>
                  <p className="text-lg text-arzir-gray-700">{item.painPoint}</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="h-8 w-8 text-arzir-primary mx-auto" />
                </div>
                <div className="text-center lg:text-right">
                  <h3 className="text-xl font-bold text-green-600 mb-2">ARZIR Solution</h3>
                  <p className="text-lg text-arzir-gray-700">{item.solution}</p>
                  <p className="text-sm font-medium text-arzir-primary mt-1">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ARZIR Competitive Advantages */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Why Choose ARZIR Gantry Shears
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Significant advantages over traditional cutting methods
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Comparison Item</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Gantry Shear</th>
                  <th className="p-4 text-center font-bold text-arzir-gray-600 text-lg">Traditional Method</th>
                  <th className="p-4 text-center font-bold text-green-600 text-lg">ARZIR Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-arzir-gray-25" : "bg-white"}>
                    <td className="p-4 font-semibold text-black">{item.feature}</td>
                    <td className="p-4 text-center font-bold text-arzir-primary">{item.arzir}</td>
                    <td className="p-4 text-center text-arzir-gray-600">{item.traditional}</td>
                    <td className="p-4 text-center font-medium text-green-600">{item.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Settings className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Custom Solutions</h3>
              <p className="text-arzir-gray-600">Tailored equipment configurations based on specific cutting requirements</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Users className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Global Support</h3>
              <p className="text-arzir-gray-600">Comprehensive installation, training, and ongoing technical support worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Award className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Proven Performance</h3>
              <p className="text-arzir-gray-600">Over 100 successful installations with proven ROI and reliability</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Customer Success Stories */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Customer Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real results from gantry shear implementations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <study.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-2 text-arzir-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{study.location}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-arzir-gray-50 rounded-lg">
                    <p className="font-semibold text-black mb-2">Equipment Configuration:</p>
                    <p className="text-arzir-primary font-medium">{study.equipment}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="font-semibold text-black">Project Results:</p>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-arzir-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-l-4 border-arzir-primary">
                    <div className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-arzir-gray-700 italic text-sm">&ldquo;{study.testimonial}&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Operation & Maintenance */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Operation & Maintenance Guide
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Simple operational workflow and professional maintenance guidance
            </p>
          </div>
          
          {/* Operation Steps */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-bold text-black text-center">
              Operation Workflow
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {operationSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl relative">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-heading font-semibold text-black">
                      {step.step}
                    </h4>
                    <p className="text-sm text-arzir-gray-600">
                      {step.description}
                    </p>
                    <div className="px-3 py-1 bg-arzir-primary/10 rounded-full mx-auto w-fit">
                      <span className="text-xs font-medium text-arzir-primary">{step.duration}</span>
                    </div>
                    <p className="text-xs text-arzir-gray-500 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="h-6 w-6 text-arzir-primary -ml-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Guide */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-bold text-black text-center">
              Maintenance Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {maintenanceGuide.map((guide, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <div className="space-y-4">
                    <h4 className="text-xl font-heading font-semibold text-black text-center">
                      {guide.category}
                    </h4>
                    <div className="text-center">
                      <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
                        {guide.frequency}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {guide.tasks.map((task, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm text-arzir-gray-600">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Common questions about gantry shear selection and operation
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-arzir-gray-50 p-8 rounded-xl border-l-4 border-arzir-primary">
                <h3 className="text-xl font-heading font-semibold text-black mb-4">
                  Q{index + 1}: {faq.question}
                </h3>
                <p className="text-arzir-gray-700 leading-relaxed">
                  <strong>A:</strong> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Related Content
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Learn more about gantry shear technology and applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedContent.map((content, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-black">
                    {content.title}
                  </h3>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {content.description}
                  </p>
                  <Button variant="outline" asChild>
                    <Link href={content.href}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ProductCTA 
        title="Transform Your Heavy Scrap Processing Operations"
        description="Achieve maximum cutting efficiency with ARZIR gantry shears. Process 150-220 tons/hour with up to 2000T cutting force designed for the heaviest scrap materials and industrial applications."
        formSource="gantry_shear_bottom" 
      />
    </>
  );
}