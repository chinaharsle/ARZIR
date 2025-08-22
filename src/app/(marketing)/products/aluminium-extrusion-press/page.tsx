import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Timer, Factory, Truck, Users, Star, MapPin, Wrench, DollarSign, TrendingUp, Gauge, Target, Cog, Thermometer, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aluminium Extrusion Press | Precision Hydraulic Profile Manufacturing Equipment | ARZIR",
  description: "ARZIR Aluminium Extrusion Press - industrial hydraulic extrusion equipment for aluminum profile manufacturing. High precision, energy-efficient, automated control systems.",
  keywords: [
    "aluminum extrusion machine",
    "aluminium profile press",
    "aluminium extrusion manufacturing",
    "hydraulic extrusion press",
    "aluminum profile production equipment",
    "precision extrusion press",
    "energy-efficient extrusion machine",
    "automated extrusion system"
  ],
  openGraph: {
    title: "Aluminium Extrusion Press | Precision Hydraulic Profile Manufacturing Equipment | ARZIR",
    description: "Industrial aluminium extrusion presses for high-precision aluminum profile manufacturing with advanced hydraulic control and automation systems.",
    images: [
      {
        url: "/images/products/aluminium-extrusion-press.png",
        width: 1200,
        height: 630,
        alt: "ARZIR Aluminium Extrusion Press - Precision Hydraulic Profile Manufacturing Equipment"
      }
    ]
  }
};

const technicalSpecs = [
  {
    model: "ARZIR AEP-1000",
    maxPressure: "10 MN",
    billetDiameter: "150-200mm",
    extrusionSpeed: "0.5-15 m/min",
    motorPower: "800 kW",
    outputCapacity: "300-500 kg/h"
  },
  {
    model: "ARZIR AEP-1800",
    maxPressure: "18 MN",
    billetDiameter: "180-250mm",
    extrusionSpeed: "0.8-20 m/min",
    motorPower: "1200 kW",
    outputCapacity: "500-800 kg/h"
  },
  {
    model: "ARZIR AEP-2500",
    maxPressure: "25 MN",
    billetDiameter: "200-300mm",
    extrusionSpeed: "1.0-25 m/min",
    motorPower: "1600 kW",
    outputCapacity: "800-1200 kg/h"
  },
  {
    model: "ARZIR AEP-3500",
    maxPressure: "35 MN",
    billetDiameter: "250-350mm",
    extrusionSpeed: "1.2-30 m/min",
    motorPower: "2200 kW",
    outputCapacity: "1200-1800 kg/h"
  }
];

const coreFeatures = [
  {
    icon: Gauge,
    title: "Hydraulic Extrusion System",
    description: "Advanced hydraulic system provides consistent high pressure and stability for uniform aluminum profile extrusion",
    benefit: "Guaranteed dimensional accuracy and surface quality"
  },
  {
    icon: Zap,
    title: "Quick Die Change System",
    description: "Rapid die replacement mechanism reduces changeover time and increases production efficiency",
    benefit: "Improved production flexibility and reduced downtime"
  },
  {
    icon: Cpu,
    title: "PLC Automated Control",
    description: "Integrated PLC control system with touchscreen interface for precise process control and monitoring",
    benefit: "Enhanced operational efficiency and quality consistency"
  },
  {
    icon: Thermometer,
    title: "Precision Temperature Control",
    description: "Advanced heating and cooling systems maintain optimal billet and die temperatures throughout extrusion",
    benefit: "Superior profile quality and reduced material waste"
  },
  {
    icon: Settings,
    title: "Variable Speed Control",
    description: "Infinitely variable extrusion speeds allow optimization for different alloys and profile complexities",
    benefit: "Maximized throughput with optimal quality"
  },
  {
    icon: Shield,
    title: "Energy-Efficient Design",
    description: "Optimized hydraulic circuits and heat recovery systems minimize energy consumption per ton of output",
    benefit: "Reduced operating costs and environmental impact"
  }
];

const applications = [
  {
    title: "Building & Construction",
    description: "Window frames, door profiles, curtain wall systems, and structural glazing components for architectural applications",
    image: "/images/applications/construction-aluminum.png",
    href: "/applications/construction-aluminum",
    materials: ["Window frames", "Door profiles", "Curtain walls", "Structural glazing"],
    capacity: "500-1800 kg/hour",
    icon: Factory
  },
  {
    title: "Automotive Industry",
    description: "Car body frames, radiator tubing, heat exchangers, and lightweight structural components for vehicles",
    image: "/images/applications/automotive-aluminum.png",
    href: "/applications/automotive-aluminum",
    materials: ["Body frames", "Radiator tubes", "Heat sinks", "Structural components"],
    capacity: "800-1200 kg/hour",
    icon: Truck
  },
  {
    title: "Aerospace Applications",
    description: "Lightweight aluminum profiles for aircraft structures, precision components, and aerospace-grade extrusions",
    image: "/images/applications/aerospace-aluminum.png",
    href: "/applications/aerospace-aluminum",
    materials: ["Aircraft structures", "Precision components", "Aerospace profiles", "Lightweight frames"],
    capacity: "300-800 kg/hour",
    icon: Settings
  },
  {
    title: "Industrial Manufacturing",
    description: "Machine frames, conveyor systems, industrial automation components, and heat dissipation profiles",
    image: "/images/applications/industrial-aluminum.png",
    href: "/applications/industrial-aluminum",
    materials: ["Machine frames", "Conveyor systems", "Heat sinks", "Automation components"],
    capacity: "600-1500 kg/hour",
    icon: Wrench
  },
  {
    title: "Furniture & Decoration",
    description: "Aluminum furniture frames, decorative profiles, edge banding, and architectural trim applications",
    image: "/images/applications/furniture-aluminum.png",
    href: "/applications/furniture-aluminum",
    materials: ["Furniture frames", "Decorative profiles", "Edge banding", "Architectural trim"],
    capacity: "400-1000 kg/hour",
    icon: Users
  }
];

const painPointsSolutions = [
  {
    challenge: "Profile dimensional accuracy inconsistencies affecting product quality and customer satisfaction",
    solution: "High-precision hydraulic control system with real-time pressure and temperature monitoring",
    benefit: "Achieves ±0.1mm dimensional tolerance consistently"
  },
  {
    challenge: "Low production efficiency and high labor costs impacting profitability",
    solution: "Automated production line with PLC control and minimal operator intervention required",
    benefit: "Increases efficiency by 40-60% while reducing labor requirements"
  },
  {
    challenge: "High energy consumption and operational costs reducing competitive advantage",
    solution: "Energy-efficient hydraulic design with heat recovery and optimized power consumption",
    benefit: "Reduces energy costs by 25-35% compared to conventional systems"
  }
];

const comparisonData = [
  {
    feature: "Dimensional Precision",
    conventional: "±0.5mm tolerance",
    arzir: "±0.1mm tolerance",
    advantage: "5x better accuracy"
  },
  {
    feature: "Energy Consumption",
    conventional: "45-60 kWh/ton",
    arzir: "28-40 kWh/ton",
    advantage: "30-35% energy savings"
  },
  {
    feature: "Production Efficiency",
    conventional: "60-75% uptime",
    arzir: "85-95% uptime",
    advantage: "20-30% higher efficiency"
  },
  {
    feature: "Automation Level",
    conventional: "Manual operation",
    arzir: "Fully automated PLC control",
    advantage: "Reduced labor requirements"
  },
  {
    feature: "Maintenance Frequency",
    conventional: "Weekly maintenance",
    arzir: "Monthly maintenance cycles",
    advantage: "4x longer intervals"
  }
];

const globalBenefits = [
  {
    icon: Target,
    title: "Precision Excellence",
    description: "International standard compliance (EN, ASTM) with superior dimensional accuracy"
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Optimized power consumption reduces operational costs by 25-35%"
  },
  {
    icon: Settings,
    title: "Production Flexibility",
    description: "Handles multiple aluminum alloy types and complex profile geometries"
  }
];

const caseStudies = [
  {
    title: "European Building Materials Producer",
    location: "Munich, Germany",
    equipment: "ARZIR AEP-2500 Aluminium Extrusion Press",
    results: [
      "Increased production capacity from 800 to 1400 kg/hour",
      "Improved dimensional accuracy to ±0.05mm tolerance",
      "Reduced energy consumption by 32% per ton produced",
      "Achieved EN 755 certification for all product lines",
      "ROI realized within 22 months of installation"
    ],
    testimonial: "The ARZIR extrusion press has transformed our manufacturing capability. We now produce architectural profiles that exceed European quality standards.",
    icon: Factory
  },
  {
    title: "Asian Automotive Components Manufacturer",
    location: "Shanghai, China",
    equipment: "ARZIR AEP-1800 Aluminium Extrusion Press",
    results: [
      "Automotive production efficiency improved by 45%",
      "Heat exchanger tube production increased to 950 kg/hour",
      "Material waste reduced by 25% through precise control",
      "Operator requirements reduced from 4 to 2 per shift",
      "18-month payback period achieved"
    ],
    testimonial: "Our automotive component quality has never been better. The precision and automation have made us more competitive globally.",
    icon: Truck
  }
];

const operationSteps = [
  {
    step: "Billet Heating",
    description: "Aluminum billets are heated to optimal extrusion temperature (450-500°C)",
    duration: "45-60 minutes",
    details: "Uniform heating ensures consistent material flow and profile quality"
  },
  {
    step: "Die Setup & Loading",
    description: "Install appropriate die and load heated billet into extrusion chamber",
    duration: "10-15 minutes",
    details: "Quick-change die system minimizes setup time between production runs"
  },
  {
    step: "Hydraulic Extrusion",
    description: "High-pressure hydraulic system forces aluminum through die to form profile",
    duration: "2-8 minutes",
    details: "Precise pressure and speed control ensure dimensional accuracy"
  },
  {
    step: "Cooling & Stretching",
    description: "Extruded profiles are cooled and stretched to final dimensions",
    duration: "15-30 minutes",
    details: "Controlled cooling and stretching achieve required mechanical properties"
  }
];

const maintenanceGuide = [
  {
    category: "Hydraulic System",
    tasks: ["Hydraulic fluid level and quality check", "Filter replacement and cleaning", "Pressure system calibration"],
    frequency: "Weekly"
  },
  {
    category: "Die Maintenance",
    tasks: ["Die cleaning and inspection", "Surface treatment and reconditioning", "Dimensional accuracy verification"],
    frequency: "After each production run"
  },
  {
    category: "Electrical & Control",
    tasks: ["PLC system diagnostics", "Temperature sensor calibration", "Safety system testing"],
    frequency: "Monthly"
  }
];

const faqs = [
  {
    question: "What is the price of an aluminium extrusion press?",
    answer: "Pricing varies by model and configuration. The AEP-1000 ranges from $380,000-450,000, while the AEP-3500 ranges from $800,000-1,200,000. Contact us for detailed custom quotes based on your specific production requirements."
  },
  {
    question: "What is the capacity of your extrusion presses?",
    answer: "Our presses range from 300-1800 kg/hour depending on the model and profile complexity. The AEP-1000 handles 300-500 kg/hour, while our largest AEP-3500 can process up to 1800 kg/hour for standard profiles."
  },
  {
    question: "Can it produce customized profiles?",
    answer: "Yes, our extrusion presses can produce virtually any aluminum profile design. We work with customers to develop custom dies for specific applications and can handle complex geometries including hollow sections, multi-cavity profiles, and precision tolerances."
  },
  {
    question: "What is the difference between small and large extrusion presses?",
    answer: "Small presses (AEP-1000/1800) are ideal for precision profiles and lower volumes, while large presses (AEP-2500/3500) handle higher production volumes and larger profile cross-sections. Selection depends on your production requirements and profile sizes."
  },
  {
    question: "Do you provide installation and training?",
    answer: "Yes, we provide complete installation, commissioning, operator training, and maintenance support. Installation typically takes 6-8 weeks, followed by 2-3 weeks of comprehensive operator and maintenance training programs."
  }
];

const relatedContent = [
  {
    title: "How Aluminium Extrusion Presses Work: A Complete Guide",
    description: "Comprehensive guide to aluminum extrusion process, equipment, and best practices",
    href: "/blog/aluminium-extrusion-process-guide"
  },
  {
    title: "Aluminium Extrusion Press vs Die Casting: Which to Choose?",
    description: "Detailed comparison of extrusion and die casting for aluminum component manufacturing",
    href: "/blog/extrusion-vs-die-casting-aluminum"
  }
];

export default function AluminiumExtrusionPressPage() {
  return (
    <>
      {/* Hero Section - Based on Car Body Baler Design */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 via-white to-blue-50 !pt-16 sm:!pt-20 md:!pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-arzir-primary to-primary-600 text-white rounded-full text-sm font-medium shadow-lg">
                <Award className="h-4 w-4" />
                Precision Manufacturing Specialist
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Aluminium{" "}
                <span className="text-arzir-primary">Extrusion Press</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                High-Precision Hydraulic Equipment for{" "}
                <span className="text-arzir-primary font-semibold">Aluminum Profile Manufacturing</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Advanced hydraulic control with PLC automation for building, automotive, aerospace, and industrial applications.{" "}
              <strong className="text-black">High-precision aluminum profile manufacturing equipment.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">35 MN</div>
                <div className="text-sm text-arzir-gray-600">Max Pressure</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">±0.1mm</div>
                <div className="text-sm text-arzir-gray-600">Precision</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">1800 kg/h</div>
                <div className="text-sm text-arzir-gray-600">Max Capacity</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="aluminium_extrusion_press_hero">
                <Button size="lg" className="bg-arzir-primary hover:bg-primary-600 w-full sm:w-auto">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </QuoteDialog>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="#specifications">View Specifications</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] relative">
              <Image
                src="/images/products/single/Extrusion Press.png"
                alt="ARZIR Aluminium Extrusion Press - Precision Hydraulic Profile Manufacturing Equipment"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              High Precision
            </div>
            <div className="absolute -top-4 -left-4 bg-arzir-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              35 MN Pressure
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Advanced Aluminum Extrusion Technology
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-4xl mx-auto leading-relaxed">
              ARZIR Aluminium Extrusion Presses deliver high-precision aluminum profile manufacturing 
              with advanced hydraulic control systems and intelligent automation for consistent, 
              high-quality results across multiple industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Building & Construction</h3>
              <p className="text-arzir-gray-600">Window frames, curtain walls, and structural profiles</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Automotive Industry</h3>
              <p className="text-arzir-gray-600">Body frames, radiators, and lightweight components</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Aerospace Applications</h3>
              <p className="text-arzir-gray-600">Precision components and lightweight structures</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Features & Benefits */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Core Features & Advantages
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Advanced hydraulic technology delivers superior performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-black">
                    {feature.title}
                  </h3>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-arzir-primary">
                      <CheckCircle className="h-4 w-4" />
                      {feature.benefit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section background="gray" size="lg" id="specifications">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Technical Specifications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive range of models to meet various production requirements
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="p-4 text-left font-bold text-black">Model</th>
                  <th className="p-4 text-left font-bold text-black">Max Pressure</th>
                  <th className="p-4 text-left font-bold text-black">Billet Diameter</th>
                  <th className="p-4 text-left font-bold text-black">Extrusion Speed</th>
                  <th className="p-4 text-left font-bold text-black">Motor Power</th>
                  <th className="p-4 text-left font-bold text-black">Output Capacity</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr key={spec.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-arzir-primary">{spec.model}</td>
                    <td className="border border-arzir-gray-200 p-4">{spec.maxPressure}</td>
                    <td className="border border-arzir-gray-200 p-4">{spec.billetDiameter}</td>
                    <td className="border border-arzir-gray-200 p-4">{spec.extrusionSpeed}</td>
                    <td className="border border-arzir-gray-200 p-4">{spec.motorPower}</td>
                    <td className="border border-arzir-gray-200 p-4">{spec.outputCapacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Industry Applications */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Industry Applications
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Versatile solutions for diverse aluminum profile manufacturing industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">🏢</div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-black mb-1">
                      Building & Construction
                    </h3>
                  </div>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    Window frames, door profiles, curtain wall systems, and structural glazing components for architectural applications
                  </p>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/applications/construction-aluminum">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">🚗</div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-black mb-1">
                      Automotive Industry
                    </h3>
                  </div>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    Car body frames, radiator tubing, heat exchangers, and lightweight structural components for vehicles
                  </p>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/applications/automotive-aluminum">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">✈️</div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-black mb-1">
                      Aerospace Applications
                    </h3>
                  </div>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    Lightweight aluminum profiles for aircraft structures, precision components, and aerospace-grade extrusions
                  </p>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/applications/aerospace-aluminum">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">🏭</div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-black mb-1">
                      Industrial Manufacturing
                    </h3>
                  </div>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    Machine frames, conveyor systems, industrial automation components, and heat dissipation profiles
                  </p>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/applications/industrial-aluminum">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pain Points & Solutions */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Solving Industry Challenges
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Addressing key pain points in aluminum profile manufacturing
            </p>
          </div>
          
          <div className="space-y-8">
            {painPointsSolutions.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-8 bg-gradient-to-r from-red-50 via-white to-green-50 rounded-2xl">
                <div className="text-center lg:text-left space-y-2">
                  <h3 className="text-xl font-bold text-red-600 mb-2">Challenge</h3>
                  <p className="text-arzir-gray-700">{item.challenge}</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-arzir-primary mx-auto" />
                </div>
                <div className="text-center lg:text-left space-y-2">
                  <h3 className="text-xl font-bold text-green-600 mb-2">ARZIR Solution</h3>
                  <p className="text-arzir-gray-700">{item.solution}</p>
                  <p className="text-sm font-medium text-arzir-primary mt-1">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose ARZIR - Comparison */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Why Choose ARZIR Aluminium Extrusion Presses
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Superior performance compared to conventional extrusion systems
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Feature</th>
                  <th className="p-4 text-center font-bold text-red-600 text-lg">Conventional Press</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Extrusion Press</th>
                  <th className="p-4 text-center font-bold text-green-600 text-lg">ARZIR Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-arzir-gray-25" : "bg-white"}>
                    <td className="p-4 font-semibold text-black">{item.feature}</td>
                    <td className="p-4 text-center">{item.conventional}</td>
                    <td className="p-4 text-center font-bold text-arzir-primary">{item.arzir}</td>
                    <td className="p-4 text-center font-medium text-green-600">{item.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center space-y-4">
                <benefit.icon className="h-12 w-12 text-arzir-primary mx-auto" />
                <h3 className="text-xl font-heading font-bold text-black">{benefit.title}</h3>
                <p className="text-arzir-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Customer Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real-world results from our extrusion press installations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <study.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-black">{study.title}</h3>
                      <div className="flex items-center gap-2 text-arzir-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{study.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-arzir-gray-50 rounded-lg">
                    <p className="text-arzir-primary font-medium">{study.equipment}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-black">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-arzir-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-l-4 border-arzir-primary">
                    <div className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <p className="text-arzir-gray-700 italic">"{study.testimonial}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Operation & Maintenance */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Operation & Maintenance Guide
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Efficient operation process with comprehensive maintenance support
            </p>
          </div>
          
          {/* Operation Steps */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-black mb-6">Extrusion Process</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {operationSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl relative">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-heading font-bold text-black">{step.step}</h4>
                    <div className="px-3 py-1 bg-arzir-primary/10 rounded-full mx-auto w-fit">
                      <span className="text-xs font-medium text-arzir-primary">{step.duration}</span>
                    </div>
                    <p className="text-sm text-arzir-gray-600">{step.description}</p>
                    <p className="text-xs text-arzir-gray-500 italic">{step.details}</p>
                  </div>
                  {index < operationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 z-10">
                      <ArrowRight className="h-6 w-6 text-arzir-primary -ml-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Maintenance Guide */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-black mb-6">Maintenance Schedule</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {maintenanceGuide.map((guide, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="text-lg font-heading font-bold text-black">{guide.category}</h4>
                      <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
                        {guide.frequency}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {guide.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-arzir-gray-600">{task}</span>
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
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Common questions about aluminium extrusion presses and our solutions
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-arzir-gray-50 p-8 rounded-xl border-l-4 border-arzir-primary">
                <h3 className="text-xl font-heading font-semibold text-black mb-4">
                  Q{index + 1}: {faq.question}
                </h3>
                <p className="text-arzir-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Related Resources
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Learn more about aluminum extrusion processes and applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {relatedContent.map((content, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-black">
                    {content.title}
                  </h3>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {content.description}
                  </p>
                  <Link 
                    href={content.href}
                    className="inline-flex items-center gap-2 text-arzir-primary font-medium hover:text-primary-600 transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Product CTA */}
      <ProductCTA 
        title="Ready to Enhance Your Aluminum Manufacturing?"
        description="Get expert consultation and custom quotes for ARZIR Aluminium Extrusion Presses tailored to your specific production requirements."
        formSource="aluminium_extrusion_press_bottom_cta"
      />
    </>
  );
}