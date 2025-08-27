import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Truck, Timer, Factory, Users, Star, MapPin, Wrench, Container } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Container Shear | Hydraulic Scrap Shear | Portable Metal Cutting",
  description: "ARZIR Container Shear - hydraulic scrap cutting machine with containerized design for easy transport and on-site operation. Cut steel beams, car bodies, and large metal waste efficiently.",
  keywords: [
    "container shear",
    "scrap shear machine",
    "hydraulic container shear",
    "portable scrap metal shear",
    "mobile scrap shear",
    "hydraulic metal cutting shear",
    "scrap metal recycling shear"
  ],
  openGraph: {
    title: "Container Shear | Hydraulic Scrap Shear Machine",
    description: "Containerized hydraulic shear for efficient cutting of large scrap metal with easy transport and quick setup.",
    images: [
      {
        url: "/images/products/container-shear.png",
        width: 1200,
        height: 630,
        alt: "ARZIR Container Shear - Hydraulic Scrap Metal Cutting Machine"
      }
    ]
  }
};

const technicalSpecs = [
  {
    model: "ARZIR CS-400",
    cuttingForce: "400 tons",
    bladeLength: "1200mm",
    cuttingFrequency: "40-60 cycles/hour",
    capacity: "15-25 tons/hour",
    motorPower: "75 kW"
  },
  {
    model: "ARZIR CS-600",
    cuttingForce: "600 tons", 
    bladeLength: "1500mm",
    cuttingFrequency: "35-50 cycles/hour",
    capacity: "20-35 tons/hour",
    motorPower: "90 kW"
  },
  {
    model: "ARZIR CS-800",
    cuttingForce: "800 tons",
    bladeLength: "1800mm", 
    cuttingFrequency: "30-45 cycles/hour",
    capacity: "25-45 tons/hour",
    motorPower: "110 kW"
  }
];

const keyFeatures = [
  {
    icon: Truck,
    title: "Containerized Design",
    description: "Self-contained hydraulic shear system fits in standard shipping container for easy transport and quick deployment",
    benefit: "Portable operation anywhere"
  },
  {
    icon: Zap,
    title: "Powerful Hydraulic Cutting",
    description: "400-800T cutting force efficiently processes steel beams, car bodies, rebar, pipes, and large scrap metal",
    benefit: "Handle oversized materials"
  },
  {
    icon: Timer,
    title: "Rapid Setup & Operation",
    description: "Quick hydraulic setup within 30 minutes enables immediate on-site cutting operations with minimal preparation",
    benefit: "Minimize downtime"
  },
  {
    icon: Settings,
    title: "Multi-Material Capability",
    description: "Versatile cutting performance handles steel, aluminum, copper, and mixed metal materials efficiently",
    benefit: "Universal material processing"
  },
  {
    icon: Shield,
    title: "Safe Remote Operation",
    description: "Remote control operation and safety systems keep operators away from cutting zone for maximum safety",
    benefit: "Enhanced operator safety"
  },
  {
    icon: Award,
    title: "High Processing Efficiency",
    description: "Continuous operation capability with fast cycle times maximizes daily throughput and productivity",
    benefit: "Maximize productivity"
  }
];

const applications = [
  {
    title: "Scrap Yards & Metal Recycling",
    description: "Efficient cutting of oversized scrap metal for processing and transport optimization",
    image: "/images/applications/scrap-recycling.png",
    href: "/applications/scrap-recycling",
    materials: ["Steel beams", "Structural steel", "Heavy plate", "Mixed ferrous scrap"],
    capacity: "20-45 tons/hour",
    icon: Factory
  },
  {
    title: "Automotive Dismantling",
    description: "Quick processing of car bodies, engine blocks, and automotive components",
    image: "/images/applications/automotive-dismantling-full.jpg",
    href: "/applications/automotive-dismantling",
    materials: ["Car bodies", "Engine blocks", "Chassis", "Automotive parts"],
    capacity: "15-30 vehicles/day",
    icon: Truck
  },
  {
    title: "Port & Container Terminals",
    description: "On-site processing of large metal waste and container processing applications",
    image: "/images/applications/scrap-recycling.png", 
    href: "/applications/scrap-recycling",
    materials: ["Container parts", "Port equipment", "Marine scrap", "Large metal waste"],
    capacity: "25-40 tons/hour",
    icon: Container
  },
  {
    title: "Construction & Demolition",
    description: "Mobile cutting solution for construction waste and demolition site processing",
    image: "/images/applications/construction-demolition-recycling.png",
    href: "/applications/construction-demolition-recycling", 
    materials: ["Rebar", "Structural steel", "Construction waste", "Demolition debris"],
    capacity: "20-35 tons/hour",
    icon: Wrench
  }
];

const painPointSolutions = [
  {
    painPoint: "Large scrap metal difficult to transport, low manual cutting efficiency",
    solution: "Container Shear provides fast cutting to improve processing efficiency",
    benefit: "Reduce transport costs by 60-70%"
  },
  {
    painPoint: "Traditional cutting methods consume high energy and pose safety risks",
    solution: "Hydraulic drive system offers safe and stable operation",
    benefit: "Improve safety and reduce energy consumption"
  },
  {
    painPoint: "Fixed equipment limits processing location flexibility",
    solution: "Containerized structure enables easy mobility and reduces transport costs",
    benefit: "Process materials on-site, save logistics costs"
  },
  {
    painPoint: "Setup time affects operational efficiency and project schedules",
    solution: "Quick setup system enables operation within 30 minutes",
    benefit: "Minimize downtime and maximize productivity"
  }
];

const comparisonData = [
  {
    feature: "Cutting Force",
    arzir: "400-800 tons",
    traditional: "200-500 tons",
    advantage: "60% higher cutting power"
  },
  {
    feature: "Mobility",
    arzir: "Full containerized transport",
    traditional: "Fixed installation",
    advantage: "Complete portability"
  },
  {
    feature: "Setup Time", 
    arzir: "30 minutes",
    traditional: "Several days installation",
    advantage: "99% faster deployment"
  },
  {
    feature: "Processing Capacity",
    arzir: "15-45 tons/hour",
    traditional: "10-25 tons/hour",
    advantage: "80% higher throughput"
  },
  {
    feature: "Energy Efficiency",
    arzir: "Advanced hydraulic system",
    traditional: "Standard hydraulics",
    advantage: "25% energy savings"
  },
  {
    feature: "Service Life",
    arzir: "15-20 years",
    traditional: "10-15 years",
    advantage: "Extended operational life"
  }
];

const caseStudies = [
  {
    title: "European Scrap Processing Center",
    location: "Hamburg, Germany",
    equipment: "ARZIR CS-600 Container Shear",
    results: [
      "Increased cutting capacity from 20 to 35 tons/hour",
      "Reduced setup time from 2 days to 30 minutes",
      "Enhanced mobility for multi-site operations"
    ],
    testimonial: "The containerized design revolutionized our operations. We can now process materials efficiently at multiple locations.",
    icon: Factory
  },
  {
    title: "South American Port Terminal",
    location: "Santos, Brazil",
    equipment: "ARZIR CS-800 Container Shear",
    results: [
      "Processed 45 tons/hour of large metal waste",
      "Eliminated need for permanent installation",
      "Reduced operational costs by 40%"
    ],
    testimonial: "Perfect solution for our port operations. The mobility and power combination is exactly what we needed.",
    icon: Container
  },
  {
    title: "Automotive Recycling Facility",
    location: "Detroit, USA",
    equipment: "ARZIR CS-400 Container Shear",
    results: [
      "Processing 25 vehicles per day efficiently",
      "Improved safety with remote operation",
      "ROI achieved within 18 months"
    ],
    testimonial: "Excellent performance for automotive dismantling. The safety features and cutting power exceeded our expectations.",
    icon: Truck
  }
];

const operationSteps = [
  {
    step: "Material Loading",
    description: "Load large scrap metal pieces into the cutting chamber using crane or loader equipment",
    duration: "5-10 minutes",
    details: "Proper positioning ensures optimal cutting efficiency and equipment safety"
  },
  {
    step: "Hydraulic System Activation", 
    description: "Start hydraulic system and position cutting blade for optimal material engagement",
    duration: "30-60 seconds",
    details: "Automated positioning system ensures precise blade alignment"
  },
  {
    step: "Cutting Operation",
    description: "Execute cutting cycle with powerful hydraulic force to process material efficiently",
    duration: "45-90 seconds",
    details: "High-pressure hydraulic system delivers consistent cutting performance"
  },
  {
    step: "Material Discharge",
    description: "Remove cut pieces and prepare for next cycle, maintaining continuous operation",
    duration: "3-5 minutes",
    details: "Efficient discharge system maintains optimal workflow"
  }
];

const maintenanceGuide = [
  {
    category: "Daily Inspection",
    tasks: ["Hydraulic oil level check", "Blade condition inspection", "Safety system verification"],
    frequency: "Daily"
  },
  {
    category: "Regular Maintenance",
    tasks: ["Hydraulic filter replacement", "Blade sharpening/replacement", "System pressure testing"],
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
    question: "What materials can a container shear cut?",
    answer: "Container shears can efficiently cut steel beams, car bodies, rebar, pipes, structural steel, aluminum sections, copper materials, and various ferrous and non-ferrous metals up to specified thickness limits."
  },
  {
    question: "What is the container shear price range?",
    answer: "Container shear prices range from $280,000-$650,000 depending on cutting force and specifications. The CS-400 model starts at $280,000, while the CS-800 model reaches $650,000. Contact us for detailed custom pricing."
  },
  {
    question: "What is the difference between container shear and guillotine shear?",
    answer: "Container shears are mobile, containerized units designed for portability and quick setup, while guillotine shears are typically stationary installations. Container shears offer complete mobility but guillotine shears may have higher cutting capacity for fixed operations."
  },
  {
    question: "How many tons per hour can it process?",
    answer: "Processing capacity ranges from 15-45 tons/hour depending on model and material type. The CS-400 processes 15-25 t/h, CS-600 handles 20-35 t/h, and CS-800 achieves 25-45 t/h under optimal conditions."
  },
  {
    question: "Is mobile container shear available?",
    answer: "Yes, all ARZIR container shears are designed for mobility. They fit in standard shipping containers and can be quickly deployed at different sites. Setup takes only 30 minutes with hydraulic outriggers and connections."
  }
];

const relatedContent = [
  {
    title: "Container Shear vs Guillotine Shear: Which is Better for Scrap Processing?",
    description: "Comprehensive comparison of container shears and guillotine shears for scrap metal processing applications",
    href: "/blog/container-shear-vs-guillotine-shear"
  },
  {
    title: "How Container Shears Improve Scrap Metal Recycling Efficiency", 
    description: "Learn how containerized shear technology enhances processing efficiency and operational flexibility",
    href: "/blog/container-shears-improve-recycling-efficiency"
  }
];

export default function ContainerShearPage() {
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
                Mobile Cutting Specialist
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Container{" "}
                <span className="text-arzir-primary">Shear</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Hydraulic Scrap Cutting Machine with{" "}
                <span className="text-arzir-primary font-semibold">Containerized Mobility</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Fast cutting of large scrap metal with containerized design for easy transport and on-site operation.{" "}
              <strong className="text-black">Perfect for mobile scrap processing and multi-site operations.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">800T</div>
                <div className="text-sm text-arzir-gray-600">Max Cutting Force</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">45T/h</div>
                <div className="text-sm text-arzir-gray-600">Processing Capacity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">30min</div>
                <div className="text-sm text-arzir-gray-600">Quick Setup</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="container_shear_hero">
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
                src="/images/products/single/container shear.png"
                alt="ARZIR Container Shear - Hydraulic Scrap Metal Cutting Machine"
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
              Mobile Solution
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Professional Container Shear Solutions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-arzir-gray-600">
              <p>
                The ARZIR Container Shear is a hydraulic cutting machine designed for fast processing 
                of large scrap metal, featuring containerized construction for easy transport and on-site operation. 
                Ideal for cutting steel beams, car bodies, rebar, pipes, and large metal waste.
              </p>
              <p>
                This portable solution combines powerful hydraulic cutting capability with complete mobility, 
                enabling efficient scrap processing at multiple locations while reducing transport costs 
                and improving operational flexibility for recycling centers and metal processing facilities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Scrap Yards</h3>
              <p className="text-arzir-gray-600">Efficient cutting of oversized scrap metal</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Auto Dismantling</h3>
              <p className="text-arzir-gray-600">Quick processing of car bodies and components</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Container className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Port Terminals</h3>
              <p className="text-arzir-gray-600">Large metal waste processing at container terminals</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Construction</h3>
              <p className="text-arzir-gray-600">Mobile cutting for demolition and construction waste</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Advanced Features */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Core Features & Advantages
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Powerful hydraulic cutting, containerized mobility, and operational efficiency
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
              Three models to meet different cutting requirements with complete technical parameters
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Container Shear Technical Specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cutting Force</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Blade Length</th>
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
              Comprehensive solutions for diverse industrial scrap cutting needs
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
              How ARZIR container shears solve common scrap cutting challenges
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
              Why Choose ARZIR Container Shears
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Significant advantages over traditional cutting equipment
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Comparison Item</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Container Shear</th>
                  <th className="p-4 text-center font-bold text-arzir-gray-600 text-lg">Traditional Shear</th>
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
              <p className="text-arzir-gray-600">Over 150 successful installations with proven ROI and reliability</p>
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
              Real results from container shear implementations worldwide
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
              Complete operational workflow and professional maintenance guidance
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
              Common questions about container shear selection and operation
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
              Learn more about container shear technology and applications
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
        title="Transform Your Scrap Cutting Operations"
        description="Achieve mobile processing efficiency with ARZIR container shears. Cut 15-45 tons/hour with containerized mobility and 30-minute setup designed for multi-site operations."
        formSource="container_shear_bottom" 
      />
    </>
  );
}