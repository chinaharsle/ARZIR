import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Timer, Factory, Truck, Users, Star, MapPin, Wrench, Scissors } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Double-Shaft Shredder | Heavy-Duty Industrial Waste Shredder | High Torque Machine",
  description: "ARZIR Double-Shaft Shredder - industrial heavy-duty shredding equipment for metal, tire, plastic, and bulky waste processing. High torque, auto-reverse, modular cutters.",
  keywords: [
    "double-shaft shredder",
    "industrial shredder machine",
    "waste shredding machine",
    "twin shaft shredder",
    "heavy waste shredder",
    "dual shaft shredder",
    "metal shredder machine",
    "tire shredding machine"
  ],
  openGraph: {
    title: "Double-Shaft Shredder | Heavy-Duty Industrial Waste Shredder",
    description: "Industrial double-shaft shredders for heavy-duty waste processing. Metal, tire, plastic shredding with high torque dual rotors and automatic reverse function.",
    images: [
      {
        url: "/images/products/double-shaft-shredder.png",
        width: 1200,
        height: 630,
        alt: "ARZIR Double-Shaft Shredder - Heavy-Duty Industrial Waste Shredding Equipment"
      }
    ]
  }
};

const technicalSpecs = [
  {
    model: "ARZIR DS-1000",
    rotorDiameter: "1000mm x 800mm",
    cutterCount: "80 pieces",
    motorPower: "400 kW",
    outputSize: "50-200mm",
    capacity: "5-15 t/h"
  },
  {
    model: "ARZIR DS-1500",
    rotorDiameter: "1500mm x 1200mm",
    cutterCount: "120 pieces",
    motorPower: "630 kW",
    outputSize: "60-250mm",
    capacity: "10-25 t/h"
  },
  {
    model: "ARZIR DS-2000",
    rotorDiameter: "2000mm x 1500mm",
    cutterCount: "160 pieces",
    motorPower: "900 kW",
    outputSize: "80-300mm",
    capacity: "15-35 t/h"
  },
  {
    model: "ARZIR DS-2500",
    rotorDiameter: "2500mm x 2000mm",
    cutterCount: "200 pieces",
    motorPower: "1200 kW",
    outputSize: "100-400mm",
    capacity: "20-50 t/h"
  }
];

const coreFeatures = [
  {
    icon: Scissors,
    title: "Dual Counter-Rotating Shafts",
    description: "Two counter-rotating shafts with interlocking cutters provide aggressive cutting action and high torque for processing large bulky materials",
    benefit: "Handles oversized materials and tough waste streams"
  },
  {
    icon: Zap,
    title: "Automatic Reverse Function",
    description: "Smart anti-jamming system automatically reverses rotor rotation when overload is detected, preventing blockages and damage",
    benefit: "Prevents machine jamming and reduces downtime"
  },
  {
    icon: Settings,
    title: "Modular Cutter System",
    description: "Replaceable and reversible cutting tools with hardened steel construction ensure long service life and easy maintenance",
    benefit: "Extended tool life and reduced maintenance costs"
  },
  {
    icon: Shield,
    title: "Heavy-Duty Construction",
    description: "Robust welded steel frame and cutting chamber designed for continuous operation under extreme loads and harsh conditions",
    benefit: "Reliable operation in demanding applications"
  },
  {
    icon: Timer,
    title: "Variable Speed Control",
    description: "Hydraulic drive system with variable speed control adapts processing speed to material characteristics and throughput requirements",
    benefit: "Optimized processing for different materials"
  },
  {
    icon: Wrench,
    title: "Easy Maintenance Access",
    description: "Swing-out side panels and hydraulic chamber opening provide full access to cutters and internal components for service",
    benefit: "Simplified maintenance and faster servicing"
  }
];

const painPointSolutions = [
  {
    painPoint: "Large bulky materials are difficult to process and cause equipment jamming",
    solution: "Dual counter-rotating shafts with high torque design handle oversized materials up to 2000mm effectively",
    benefit: "Processes bulky waste directly without pre-sizing"
  },
  {
    painPoint: "Equipment frequently jams when processing tough materials like tires and metals",
    solution: "Automatic reverse function detects overload and reverses rotation to clear blockages automatically",
    benefit: "Prevents jamming and reduces operational downtime"
  },
  {
    painPoint: "Inconsistent output sizes affect downstream processing and material recovery efficiency",
    solution: "Precision dual-shaft cutting with customizable screen systems delivers uniform output sizing",
    benefit: "Consistent output improves downstream processing"
  }
];

const comparisonData = [
  {
    feature: "Material Size Handling",
    arzir: "Processes materials up to 2000mm+",
    singleShaft: "Pre-sized materials up to 500mm",
    advantage: "Handles oversized materials directly"
  },
  {
    feature: "Processing Throughput",
    arzir: "5-50 tons/hour capacity range",
    singleShaft: "1-12 tons/hour capacity",
    advantage: "2-5x higher processing capacity"
  },
  {
    feature: "Material Versatility",
    arzir: "Excellent for tough, mixed materials",
    singleShaft: "Best for uniform, pre-processed materials",
    advantage: "Superior handling of diverse waste streams"
  },
  {
    feature: "Anti-Jamming Features",
    arzir: "Automatic reverse system prevents jams",
    singleShaft: "Manual intervention often required",
    advantage: "Autonomous jam prevention and clearing"
  },
  {
    feature: "Primary vs Final Processing",
    arzir: "Ideal for primary size reduction",
    singleShaft: "Optimized for final precise sizing",
    advantage: "Perfect for initial processing stage"
  },
  {
    feature: "Maintenance Complexity",
    arzir: "Dual-shaft system requires coordination",
    singleShaft: "Simple single-rotor maintenance",
    advantage: "More complex but designed for easy access"
  }
];

const applications = [
  {
    title: "Metal Recycling Operations",
    description: "Processing steel scrap, aluminum waste, copper materials, and non-ferrous metals for volume reduction and recovery",
    image: "/images/applications/metal-recycling.png",
    href: "/applications/non-ferrous-recycling",
    materials: ["Steel scrap", "Aluminum waste", "Copper materials", "Non-ferrous metals"],
    capacity: "15-35 tons/hour",
    icon: Factory
  },
  {
    title: "Tire Recycling Plants",
    description: "Shredding whole tires and rubber materials for size reduction and preparation for downstream processing",
    image: "/images/applications/tire-recycling.png",
    href: "/applications/tire-recycling",
    materials: ["Whole tires", "Rubber materials", "Steel belted tires", "OTR tires"],
    capacity: "10-25 tons/hour",
    icon: Settings
  },
  {
    title: "Wood Processing Facilities",
    description: "Processing large wood pieces, pallets, construction lumber, and biomass materials for recycling and energy recovery",
    image: "/images/applications/wood-processing.png",
    href: "/applications/wood-processing",
    materials: ["Wood pallets", "Construction lumber", "Tree branches", "Biomass materials"],
    capacity: "20-40 tons/hour",
    icon: Wrench
  },
  {
    title: "E-Waste Processing Centers",
    description: "Shredding electronic waste, computers, appliances, and complex electronic components for material recovery",
    image: "/images/applications/ewaste-processing.png",
    href: "/applications/ewaste-recycling",
    materials: ["Electronic waste", "Computer equipment", "Appliances", "Electronic components"],
    capacity: "5-15 tons/hour",
    icon: Truck
  },
  {
    title: "Mixed Waste Processing",
    description: "Processing municipal solid waste, bulky waste, and mixed commercial waste for volume reduction",
    image: "/images/applications/mixed-waste.png",
    href: "/applications/municipal-waste",
    materials: ["Municipal solid waste", "Bulky waste items", "Commercial waste", "Construction debris"],
    capacity: "25-50 tons/hour",
    icon: Shield
  }
];

const caseStudies = [
  {
    title: "Tire Recycling Plant - Europe",
    location: "Rotterdam, Netherlands",
    equipment: "ARZIR DS-2000 Double-Shaft Shredder",
    results: [
      "Processing 25 tons/hour of whole tires efficiently",
      "Achieved 70% improvement in processing efficiency vs previous equipment",
      "Automatic reverse system eliminated jamming issues completely",
      "ROI achieved within 18 months through increased throughput"
    ],
    testimonial: "The double-shaft design handles whole tires without pre-processing, dramatically improving our operational efficiency.",
    icon: Settings
  },
  {
    title: "E-Waste Processing Center - South America",
    location: "Santiago, Chile",
    equipment: "ARZIR DS-1500 Double-Shaft Shredder",
    results: [
      "Reduced electronic waste processing costs by 45%",
      "Improved material recovery rates through controlled shredding",
      "Eliminated manual pre-processing of large appliances",
      "Increased facility throughput by 60% with same labor force"
    ],
    testimonial: "The robust construction and automatic reverse function have transformed our e-waste processing capabilities.",
    icon: Factory
  },
  {
    title: "Metal Recycling Facility - Asia",
    location: "Osaka, Japan",
    equipment: "ARZIR DS-2500 Double-Shaft Shredder",
    results: [
      "Processing 40 tons/hour of mixed metal scrap",
      "Reduced material handling labor costs by 50%",
      "Achieved uniform output sizing for downstream processing",
      "Improved overall facility profitability by 35%"
    ],
    testimonial: "The high-capacity dual-shaft system has revolutionized our metal processing operations with consistent, high-quality results.",
    icon: Shield
  }
];

const operationSteps = [
  {
    step: "Material Loading",
    description: "Load materials into the large feed hopper using excavator or crane",
    duration: "Continuous feeding",
    details: "Wide hopper accommodates oversized materials up to 2000mm"
  },
  {
    step: "Dual-Shaft Cutting",
    description: "Counter-rotating shafts with interlocking cutters shred materials aggressively",
    duration: "Continuous operation",
    details: "High torque ensures effective processing of tough materials"
  },
  {
    step: "Material Discharge",
    description: "Processed materials discharge through bottom opening to conveyor system",
    duration: "Continuous discharge",
    details: "Gravity discharge ensures consistent material flow"
  },
  {
    step: "Automatic Protection",
    description: "Anti-jamming system monitors load and reverses rotation when needed",
    duration: "Automated response",
    details: "Prevents damage and maintains continuous operation"
  }
];

const maintenanceGuide = [
  {
    category: "Daily Maintenance",
    tasks: ["Visual inspection of cutter condition", "Hydraulic system pressure check", "Debris removal from cutting chamber"],
    frequency: "Daily"
  },
  {
    category: "Regular Service",
    tasks: ["Cutter rotation or replacement", "Hydraulic filter changes", "Drive system lubrication and inspection"],
    frequency: "Monthly"
  },
  {
    category: "Major Overhaul",
    tasks: ["Complete cutter replacement", "Bearing and seal replacement", "Drive system comprehensive service"],
    frequency: "Annually"
  }
];

const faqs = [
  {
    question: "What materials can a double-shaft shredder process effectively?",
    answer: "Double-shaft shredders excel at processing large, tough materials including steel scrap, aluminum waste, whole tires, wood pallets, electronic waste, mixed municipal waste, and bulky items. They handle materials up to 2000mm+ without pre-processing."
  },
  {
    question: "What is the price range for double-shaft shredders?",
    answer: "Double-shaft shredder prices range from $300,000-$1.2 million depending on size and capacity. The DS-1000 starts at $300,000, while the DS-2500 costs around $1.2 million. Contact us for detailed pricing and financing options."
  },
  {
    question: "How does double-shaft compare with single-shaft shredders?",
    answer: "Double-shaft shredders provide 2-5x higher throughput (5-50 vs 1-12 t/h), handle larger materials (2000mm+ vs 500mm), offer automatic reverse function, but require higher investment and more complex maintenance than single-shaft systems."
  },
  {
    question: "What output size range and capacity can be achieved?",
    answer: "Output sizes range from 50-400mm depending on model and configuration. Capacity ranges from 5-50 tons/hour. The dual-shaft design provides consistent material flow and uniform output for downstream processing."
  },
  {
    question: "What delivery time and after-sales support is provided?",
    answer: "Standard delivery is 14-20 weeks for most models. We provide comprehensive installation support, commissioning, operator training, maintenance guidance, and global technical support to ensure optimal performance."
  }
];

const relatedContent = [
  {
    title: "Double-Shaft vs Single-Shaft Shredders: Which to Choose?",
    description: "Comprehensive comparison guide to help you choose between single-shaft and double-shaft shredder technologies for your operation",
    href: "/blog/single-shaft-vs-double-shaft-shredders"
  },
  {
    title: "How Double-Shaft Shredders Enhance Recycling Efficiency",
    description: "Discover how double-shaft shredder technology improves processing capacity and material recovery in heavy-duty recycling operations",
    href: "/blog/double-shaft-shredders-enhance-recycling-efficiency"
  }
];

export default function DoubleShaftShredderPage() {
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
                Heavy-Duty Processing
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Double-Shaft{" "}
                <span className="text-arzir-primary">Shredder</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Industrial Heavy-Duty Equipment for{" "}
                <span className="text-arzir-primary font-semibold">High-Volume Waste Processing</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Designed for metal, tire, wood, and bulky waste shredding.{" "}
              <strong className="text-black">High torque dual rotors with automatic reverse function.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">50 t/h</div>
                <div className="text-sm text-arzir-gray-600">Max Capacity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">2000mm</div>
                <div className="text-sm text-arzir-gray-600">Max Material Size</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">Auto</div>
                <div className="text-sm text-arzir-gray-600">Reverse Function</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="double_shaft_shredder_hero">
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
                src="/images/products/single/double-shaft shredder.png"
                alt="ARZIR Double-Shaft Shredder - Heavy-Duty Industrial Waste Shredding Equipment"
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
              High Torque
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Professional Double-Shaft Shredding Solutions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-arzir-gray-600">
              <p>
                The ARZIR Double-Shaft Shredder features dual counter-rotating shafts with high torque design 
                for processing large, bulky, and tough materials. Ideal for metal recycling, tire processing, 
                wood waste, and mixed waste applications requiring aggressive primary size reduction.
              </p>
              <p>
                With automatic reverse function, modular cutter systems, and heavy-duty construction, 
                our double-shaft shredders provide exceptional reliability and throughput for demanding 
                industrial waste processing operations worldwide.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-arzir-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Metal Recycling</h3>
              <p className="text-arzir-gray-600">Steel, aluminum, copper processing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-10 w-10 text-arzir-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Tire Processing</h3>
              <p className="text-arzir-gray-600">Whole tires and rubber materials</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Wood Processing</h3>
              <p className="text-arzir-gray-600">Pallets, lumber, biomass materials</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">E-Waste Processing</h3>
              <p className="text-arzir-gray-600">Electronics and appliance shredding</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Mixed Waste</h3>
              <p className="text-arzir-gray-600">Municipal and bulky waste processing</p>
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
              Dual counter-rotating shafts, automatic reverse, modular cutters, and heavy-duty construction
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
              Four proven models to meet different heavy-duty processing requirements
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Double-Shaft Shredder Technical Specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Rotor Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cutter Count</th>
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
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.cutterCount}</td>
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
              Comprehensive solutions for heavy-duty waste processing and material recovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.slice(0, 4).map((app, index) => (
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
          
          {/* Fifth Application - Full Width */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                {(() => {
                  const IconComponent = applications[4].icon;
                  return <IconComponent className="h-10 w-10 text-white" />;
                })()}
              </div>
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-black mb-1">
                    {applications[4].title}
                  </h3>
                  <div className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium w-fit">
                    {applications[4].capacity}
                  </div>
                </div>
                <p className="text-arzir-gray-600 leading-relaxed">
                  {applications[4].description}
                </p>
                <div>
                  <p className="text-sm font-semibold text-arzir-gray-700 mb-2">Typical Materials:</p>
                  <div className="flex flex-wrap gap-2">
                    {applications[4].materials.map((material, i) => (
                      <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-xs">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={applications[4].href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
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
              How ARZIR double-shaft shredders solve heavy-duty waste processing challenges
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
              Why Choose ARZIR Double-Shaft Shredders
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Significant advantages over single-shaft and competitive double-shaft technologies
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Comparison Item</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Double-Shaft</th>
                  <th className="p-4 text-center font-bold text-arzir-gray-600 text-lg">Single-Shaft Shredder</th>
                  <th className="p-4 text-center font-bold text-green-600 text-lg">ARZIR Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-arzir-gray-25" : "bg-white"}>
                    <td className="p-4 font-semibold text-black">{item.feature}</td>
                    <td className="p-4 text-center font-bold text-arzir-primary">{item.arzir}</td>
                    <td className="p-4 text-center text-arzir-gray-600">{item.singleShaft}</td>
                    <td className="p-4 text-center font-medium text-green-600">{item.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Settings className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Custom Engineering</h3>
              <p className="text-arzir-gray-600">Tailored cutter configurations and drive systems for specific heavy-duty applications</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Users className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Global Support</h3>
              <p className="text-arzir-gray-600">Comprehensive installation, training, and ongoing technical support worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Award className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Proven Performance</h3>
              <p className="text-arzir-gray-600">Over 200 successful heavy-duty installations with proven reliability and throughput</p>
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
              Real results from double-shaft shredder implementations worldwide
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
              Common questions about double-shaft shredder selection and operation
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
              Learn more about double-shaft shredder technology and applications
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
        title="Transform Your Heavy-Duty Waste Processing Operations"
        description="Handle oversized materials and boost throughput with ARZIR double-shaft shredders. Process metals, tires, wood, and mixed waste with high torque dual rotors and automatic reverse function for maximum productivity."
        formSource="double_shaft_shredder_bottom" 
      />
    </>
  );
}