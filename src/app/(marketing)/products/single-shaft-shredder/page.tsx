import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Factory, Truck, Users, Star, MapPin, Wrench, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single-Shaft Shredder | Industrial Waste Recycling Shredder | Uniform Output Machine",
  description: "ARZIR Single-Shaft Shredder - industrial shredding equipment for plastics, wood, textiles, and mixed waste recycling. Uniform output, efficient operation, and customizable screens.",
  keywords: [
    "single-shaft shredder",
    "industrial shredder machine",
    "waste recycling shredder",
    "shredding machine",
    "plastic shredder equipment",
    "wood shredder machine",
    "textile shredding equipment",
    "uniform output shredder"
  ],
  openGraph: {
    title: "Single-Shaft Shredder | Industrial Waste Recycling Shredder",
    description: "Industrial single-shaft shredders for uniform waste processing. Plastic, wood, textile recycling with customizable output sizes and hydraulic ram feeding.",
    images: [
      {
        url: "/images/products/shredder.webp",
        width: 1200,
        height: 630,
        alt: "ARZIR Single-Shaft Shredder - Industrial Waste Recycling Equipment"
      }
    ]
  }
};

const technicalSpecs = [
  {
    model: "ARZIR SS-800",
    rotorDiameter: "800mm x 600mm",
    bladeCount: "32 pieces",
    motorPower: "90 kW",
    outputSize: "20-150mm",
    capacity: "1-3 t/h"
  },
  {
    model: "ARZIR SS-1000",
    rotorDiameter: "1000mm x 800mm",
    bladeCount: "40 pieces",
    motorPower: "132 kW",
    outputSize: "25-200mm",
    capacity: "2-5 t/h"
  },
  {
    model: "ARZIR SS-1200",
    rotorDiameter: "1200mm x 1000mm",
    bladeCount: "48 pieces",
    motorPower: "200 kW",
    outputSize: "30-250mm",
    capacity: "3-8 t/h"
  },
  {
    model: "ARZIR SS-1500",
    rotorDiameter: "1500mm x 1200mm",
    bladeCount: "60 pieces",
    motorPower: "315 kW",
    outputSize: "40-300mm",
    capacity: "5-12 t/h"
  }
];

const coreFeatures = [
  {
    icon: Zap,
    title: "Single Rotor + Fixed Knife Design",
    description: "Single rotating shaft with fixed counter-knives ensures uniform output particle size and consistent material processing",
    benefit: "Guaranteed uniform output for downstream processing"
  },
  {
    icon: Settings,
    title: "Interchangeable Screen System",
    description: "Quick-change screens from 20-300mm allow precise control of output particle size for different recycling requirements",
    benefit: "Customizable output size for various applications"
  },
  {
    icon: Truck,
    title: "Hydraulic Ram Feeding System",
    description: "Automated hydraulic pusher maintains consistent material feed rate and prevents bridging for continuous operation",
    benefit: "Stable feeding ensures consistent processing"
  },
  {
    icon: DollarSign,
    title: "Energy Efficient Operation",
    description: "Optimized cutting geometry and controlled material flow reduce energy consumption and operating costs",
    benefit: "Lower operational costs and energy usage"
  },
  {
    icon: Shield,
    title: "Safe and Reliable Operation",
    description: "Enclosed cutting chamber with safety interlocks and emergency stops ensure operator safety during operation",
    benefit: "Enhanced safety for operators and maintenance"
  },
  {
    icon: Wrench,
    title: "Easy Maintenance Design",
    description: "Quick-access cutting chamber and wear-resistant components minimize maintenance time and maximize uptime",
    benefit: "Reduced maintenance costs and downtime"
  }
];

const applications = [
  {
    title: "Plastic Recycling Plants",
    description: "Processing plastic films, PET bottles, PP containers, ABS parts for uniform particle size preparation",
    image: "/images/applications/plastic-recycling.png",
    href: "/applications/plastic-recycling",
    materials: ["Plastic films", "PET bottles", "PP containers", "ABS plastic parts"],
    capacity: "2-8 tons/hour",
    icon: Factory
  },
  {
    title: "Wood Processing Facilities",
    description: "Shredding wood chips, pallets, lumber waste, and biomass materials for recycling and energy recovery",
    image: "/images/applications/wood-processing.png",
    href: "/applications/wood-processing",
    materials: ["Wood chips", "Wooden pallets", "Lumber waste", "Biomass materials"],
    capacity: "3-10 tons/hour",
    icon: Wrench
  },
  {
    title: "Textile Recycling Centers",
    description: "Processing fabric waste, clothing, carpets, and fiber materials for material recovery and recycling",
    image: "/images/applications/Textile Recycling.webp",
    href: "/applications/textile-recycling",
    materials: ["Fabric waste", "Used clothing", "Carpet materials", "Textile fibers"],
    capacity: "1-5 tons/hour",
    icon: Settings
  },
  {
    title: "Municipal Solid Waste Facilities",
    description: "Size reduction of mixed municipal waste for improved processing efficiency and waste management",
    image: "/images/applications/municipal-waste.png",
    href: "/applications/municipal-waste",
    materials: ["Mixed MSW", "Packaging waste", "Paper materials", "Light metal components"],
    capacity: "4-12 tons/hour",
    icon: Truck
  }
];

const painPointSolutions = [
  {
    painPoint: "Large waste volume creates storage and transport difficulties",
    solution: "Single-shaft shredder reduces material volume by 70-80% through efficient size reduction",
    benefit: "Reduced storage space and transport costs"
  },
  {
    painPoint: "Need for uniform particle size for downstream processing",
    solution: "Interchangeable screen system provides precise control over output particle size",
    benefit: "Consistent output meets processing requirements"
  },
  {
    painPoint: "High maintenance costs and frequent equipment breakdowns",
    solution: "Robust single-rotor design with wear-resistant components reduces maintenance frequency",
    benefit: "Lower maintenance costs and higher uptime"
  }
];

const comparisonData = [
  {
    feature: "Output Uniformity",
    arzir: "95-98% uniform particle size",
    doubleShaft: "80-90% uniform output",
    advantage: "Superior output consistency"
  },
  {
    feature: "Energy Consumption",
    arzir: "15-25 kWh/ton",
    doubleShaft: "25-35 kWh/ton",
    advantage: "30-40% lower energy usage"
  },
  {
    feature: "Maintenance Complexity",
    arzir: "Simple single-rotor design",
    doubleShaft: "Complex dual-rotor system",
    advantage: "Easier maintenance and service"
  },
  {
    feature: "Floor Space Required",
    arzir: "Compact footprint design",
    doubleShaft: "Larger installation space",
    advantage: "50% smaller footprint"
  },
  {
    feature: "Initial Investment",
    arzir: "Lower capital cost",
    doubleShaft: "Higher equipment cost",
    advantage: "20-30% cost savings"
  },
  {
    feature: "Operating Costs",
    arzir: "Low maintenance & energy",
    doubleShaft: "Higher operational expenses",
    advantage: "25-40% operational savings"
  }
];

const caseStudies = [
  {
    title: "Plastic Recycling Facility - Brazil",
    location: "São Paulo, Brazil",
    equipment: "ARZIR SS-1200 Single-Shaft Shredder",
    results: [
      "Processing capacity increased to 6 tons/hour of mixed plastics",
      "Output uniformity improved to 96% within specified particle range",
      "Energy consumption reduced by 35% compared to previous equipment",
      "ROI achieved within 14 months of installation"
    ],
    testimonial: "The single-shaft shredder delivers the uniform output quality essential for our pelletizing process.",
    icon: Factory
  },
  {
    title: "Wood Processing Company - Canada",
    location: "Vancouver, Canada",
    equipment: "ARZIR SS-1000 Single-Shaft Shredder",
    results: [
      "Processed 8 tons/hour of wood waste and pallets efficiently",
      "Reduced storage space requirements by 75% through volume reduction",
      "Maintenance downtime decreased by 60% vs previous equipment",
      "Improved material flow to downstream biomass processing"
    ],
    testimonial: "Reliable operation and consistent particle size have transformed our wood waste processing efficiency.",
    icon: Wrench
  },
  {
    title: "Municipal Waste Facility - Germany",
    location: "Munich, Germany",
    equipment: "ARZIR SS-1500 Single-Shaft Shredder",
    results: [
      "Processing 10 tons/hour of mixed municipal solid waste",
      "Achieved 80% volume reduction for improved waste management",
      "Operating costs reduced by 30% through energy efficiency",
      "Enhanced downstream sorting efficiency through uniform sizing"
    ],
    testimonial: "The shredder's reliability and output quality have significantly improved our waste processing operations.",
    icon: Settings
  }
];

const operationSteps = [
  {
    step: "Material Loading",
    description: "Load materials into the hopper using conveyor or crane systems",
    duration: "Continuous feeding",
    details: "Materials are fed automatically or manually depending on facility setup"
  },
  {
    step: "Hydraulic Pushing",
    description: "Hydraulic ram pushes material into the cutting chamber consistently",
    duration: "Automated cycle",
    details: "Prevents material bridging and ensures steady processing flow"
  },
  {
    step: "Shredding Process",
    description: "Single rotor with cutting blades shreds material against fixed knives",
    duration: "Continuous operation",
    details: "Controlled cutting action produces uniform particle sizes"
  },
  {
    step: "Screen Sorting",
    description: "Materials pass through interchangeable screens for size control",
    duration: "Integrated process",
    details: "Only materials meeting size requirements pass through to discharge"
  }
];

const maintenanceGuide = [
  {
    category: "Daily Maintenance",
    tasks: ["Blade condition visual inspection", "Hydraulic system pressure check", "Screen cleaning and inspection"],
    frequency: "Daily"
  },
  {
    category: "Regular Service",
    tasks: ["Blade sharpening or replacement", "Hydraulic filter replacement", "Drive system lubrication"],
    frequency: "Monthly"
  },
  {
    category: "Major Overhaul",
    tasks: ["Complete blade replacement", "Screen system overhaul", "Electrical system inspection"],
    frequency: "Annually"
  }
];

const faqs = [
  {
    question: "What materials can a single-shaft shredder process effectively?",
    answer: "Single-shaft shredders excel at processing plastics (films, bottles, containers), wood waste, textiles, paper, cardboard, light metals, and mixed municipal solid waste. They are particularly effective for materials requiring uniform output particle size."
  },
  {
    question: "What is the price range for single-shaft shredders?",
    answer: "Single-shaft shredder prices range from $120,000-$450,000 depending on size and capacity. The SS-800 starts at $120,000, while the SS-1500 costs around $450,000. Contact us for detailed pricing and financing options."
  },
  {
    question: "What output size range can be achieved with screen changes?",
    answer: "Output sizes range from 20-300mm depending on screen selection. Screen changes take 30-60 minutes and allow precise control of particle size for different downstream processing requirements."
  },
  {
    question: "How does single-shaft compare with double-shaft shredders?",
    answer: "Single-shaft shredders provide more uniform output (95-98% vs 80-90%), use less energy (15-25 vs 25-35 kWh/ton), require simpler maintenance, and have lower capital costs. Double-shaft offers higher throughput for primary size reduction."
  },
  {
    question: "What delivery time and installation support is provided?",
    answer: "Standard delivery is 10-14 weeks for most models. We provide complete installation support including setup, commissioning, operator training, and maintenance guidance to ensure optimal performance."
  }
];

const relatedContent = [
  {
    title: "Single-Shaft vs Double-Shaft Shredders: Which One to Choose?",
    description: "Comprehensive comparison of single-shaft and double-shaft shredder technologies for waste processing applications",
    href: "/blog/single-shaft-vs-double-shaft-shredders"
  },
  {
    title: "How Single-Shaft Shredders Improve Recycling Efficiency",
    description: "Discover how single-shaft shredder technology enhances processing efficiency and output quality in recycling operations",
    href: "/blog/single-shaft-shredders-improve-recycling-efficiency"
  }
];

export default function SingleShaftShredderPage() {
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
                Uniform Output Specialist
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Single-Shaft{" "}
                <span className="text-arzir-primary">Shredder</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Industrial Shredding Equipment for{" "}
                <span className="text-arzir-primary font-semibold">Uniform Waste Processing</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Designed for plastic, wood, textile, and mixed waste recycling.{" "}
              <strong className="text-black">Precise particle size control with interchangeable screens.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">12 t/h</div>
                <div className="text-sm text-arzir-gray-600">Max Capacity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">98%</div>
                <div className="text-sm text-arzir-gray-600">Output Uniformity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">300mm</div>
                <div className="text-sm text-arzir-gray-600">Max Output Size</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="single_shaft_shredder_hero">
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
                src="/images/products/single/single-shaft-shredder.webp"
                alt="ARZIR Single-Shaft Shredder - Industrial Waste Recycling Equipment"
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
              Uniform Output
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Professional Single-Shaft Shredding Solutions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-arzir-gray-600">
              <p>
                The ARZIR Single-Shaft Shredder is a precision waste processing machine that uses 
                a single rotating shaft with fixed counter-knives to produce uniform particle sizes. 
                Ideal for plastics, wood, textiles, and mixed waste recycling applications requiring 
                consistent output quality.
              </p>
              <p>
                Featuring interchangeable screens, hydraulic ram feeding, and energy-efficient operation, 
                our single-shaft shredders provide excellent cost-effectiveness for fine shredding and 
                downstream processing preparation in recycling facilities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Plastic Recycling</h3>
              <p className="text-arzir-gray-600">Films, bottles, containers uniform processing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Wood Processing</h3>
              <p className="text-arzir-gray-600">Wood chips, pallets, biomass materials</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Textile Recycling</h3>
              <p className="text-arzir-gray-600">Fabric waste, clothing, carpet materials</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Municipal Waste</h3>
              <p className="text-arzir-gray-600">Mixed MSW size reduction and processing</p>
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
              Single rotor design, interchangeable screens, hydraulic feeding, and energy efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
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
              Four proven models to meet different waste processing requirements
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Single-Shaft Shredder Technical Specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Rotor Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Blade Count</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Motor Power</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Output Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr key={spec.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-arzir-primary">{spec.model}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.rotorDiameter}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.bladeCount}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.motorPower}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.outputSize}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.capacity}</td>
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
              Comprehensive solutions for uniform waste processing and recycling needs
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
              How ARZIR single-shaft shredders solve common waste processing challenges
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
              Why Choose ARZIR Single-Shaft Shredders
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Significant advantages over double-shaft and multi-shaft shredder technologies
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Comparison Item</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Single-Shaft</th>
                  <th className="p-4 text-center font-bold text-arzir-gray-600 text-lg">Double-Shaft Shredder</th>
                  <th className="p-4 text-center font-bold text-green-600 text-lg">ARZIR Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-arzir-gray-25" : "bg-white"}>
                    <td className="p-4 font-semibold text-black">{item.feature}</td>
                    <td className="p-4 text-center font-bold text-arzir-primary">{item.arzir}</td>
                    <td className="p-4 text-center text-arzir-gray-600">{item.doubleShaft}</td>
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
              <p className="text-arzir-gray-600">Tailored screen configurations and cutting systems for specific material requirements</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Users className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Global Support</h3>
              <p className="text-arzir-gray-600">Comprehensive installation, training, and ongoing technical support worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Award className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Proven Performance</h3>
              <p className="text-arzir-gray-600">Over 300 successful installations with proven reliability and efficiency</p>
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
              Real results from single-shaft shredder implementations worldwide
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
                  {index < 3 && (
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
              Common questions about single-shaft shredder selection and operation
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
              Learn more about single-shaft shredder technology and applications
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
        title="Transform Your Waste Processing Operations"
        description="Achieve uniform particle sizes and efficient recycling with ARZIR single-shaft shredders. Process plastics, wood, textiles, and mixed materials with precision control and energy efficiency for optimal productivity."
        formSource="single_shaft_shredder_bottom" 
      />
    </>
  );
}