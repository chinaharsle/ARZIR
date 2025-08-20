import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Gauge, Wrench, Factory, TrendingUp, Package, Users, Star, MapPin, Building2, Truck, FileText, Recycle, Warehouse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horizontal Baler | Automatic Waste Baler Machine | High-Capacity Baler | ARZIR",
  description: "Industrial horizontal balers for continuous high-volume waste processing. Automatic horizontal baler machines for cardboard, plastic, and metal recycling. Up to 100+ tons/day capacity.",
  keywords: [
    "horizontal baler",
    "waste baler machine",
    "automatic horizontal baler",
    "horizontal baler for recycling",
    "high-capacity baler machine",
    "automatic waste compactor",
    "horizontal baler specifications",
    "horizontal baler for cardboard",
    "horizontal baler for plastic",
    "recycling baler for warehouse"
  ],
  openGraph: {
    title: "Horizontal Baler | Industrial Automatic Waste Baler Machine | ARZIR",
    description: "Continuous horizontal balers for high-volume recycling operations. Process 20-100+ tons/day with automated feeding and consistent bale quality.",
    images: [
      {
        url: "/images/products/horizontal-baler.png",
        width: 1200,
        height: 630,
        alt: "ARZIR Horizontal Baler - Industrial Automatic Waste Compaction Equipment"
      }
    ]
  }
};

const technicalSpecs = [
  {
    model: "ARZIR HB-400",
    pressForce: "400 tons",
    chamberSize: "2.5 x 1.2 x 1.5m",
    baleSize: "1.1 x 1.1 x 0.6-1.6m",
    capacity: "20-40 tons/hour",
    motorPower: "90 kW"
  },
  {
    model: "ARZIR HB-600",
    pressForce: "600 tons",
    chamberSize: "3.0 x 1.3 x 1.6m",
    baleSize: "1.2 x 1.2 x 0.8-1.8m",
    capacity: "30-60 tons/hour",
    motorPower: "132 kW"
  },
  {
    model: "ARZIR HB-800",
    pressForce: "800 tons",
    chamberSize: "3.5 x 1.4 x 1.8m",
    baleSize: "1.3 x 1.3 x 1.0-2.0m",
    capacity: "50-80 tons/hour",
    motorPower: "160 kW"
  },
  {
    model: "ARZIR HB-1000",
    pressForce: "1000 tons",
    chamberSize: "4.0 x 1.5 x 2.0m",
    baleSize: "1.4 x 1.4 x 1.2-2.2m",
    capacity: "70-100+ tons/hour",
    motorPower: "200 kW"
  }
];

const keyFeatures = [
  {
    icon: Zap,
    title: "Continuous High-Volume Processing",
    description: "Automated feeding and ejection systems enable 24/7 operation processing 20-100+ tons per day with maximum efficiency"
  },
  {
    icon: Settings,
    title: "Multi-Material Capability",
    description: "Process cardboard, plastic films, PET bottles, aluminum cans, and light metal waste with consistent quality"
  },
  {
    icon: Shield,
    title: "Advanced Hydraulic System",
    description: "400-1000T compression force with precise pressure control ensures optimal bale density up to 2.5 t/m³"
  },
  {
    icon: CheckCircle,
    title: "Automated Operation",
    description: "PLC control with touchscreen interface, automatic feeding, compression, tying, and ejection systems"
  },
  {
    icon: Award,
    title: "Consistent Bale Quality",
    description: "Precise dimensional control maintains bale uniformity within ±2% tolerance for optimized transport"
  },
  {
    icon: Gauge,
    title: "Rapid Cycle Times",
    description: "40-80 second compression cycles with continuous material flow enable maximum throughput efficiency"
  }
];

const automationLevels = [
  {
    level: "Basic Manual",
    description: "Manual feeding with hydraulic compression and manual bale ejection",
    throughput: "20-40 t/day",
    investment: "$",
    features: ["Manual controls", "Basic safety", "Simple operation"]
  },
  {
    level: "Semi-Automatic",
    description: "Conveyor feeding with automatic compression cycles and assisted ejection",
    throughput: "40-70 t/day", 
    investment: "$$",
    features: ["Conveyor feed", "Auto cycle", "Safety systems", "Basic monitoring"]
  },
  {
    level: "Fully Automatic",
    description: "Complete automation with continuous feeding, compression, tying, and ejection",
    throughput: "70-100+ t/day",
    investment: "$$$",
    features: ["Full automation", "Remote monitoring", "Predictive maintenance", "Quality control"]
  }
];

const operationalBenefits = [
  {
    title: "Labor Efficiency",
    description: "Automated operation reduces labor requirements by 60-80%",
    metric: "60-80% less labor"
  },
  {
    title: "Consistent Quality",
    description: "Uniform bale dimensions improve handling and transport efficiency",
    metric: "±2% tolerance"
  },
  {
    title: "High Utilization",
    description: "Continuous operation achieves 85-95% equipment utilization",
    metric: "85-95% uptime"
  },
  {
    title: "Volume Processing",
    description: "High throughput capability handles large material volumes efficiently",
    metric: "20-100+ t/day"
  }
];

const applications = [
  {
    title: "Waste Paper & Cardboard Processing",
    description: "High-volume OCC and cardboard processing for paper mills and recycling centers",
    image: "/images/applications/cardboard-recycling.png",
    href: "/applications/cardboard-recycling",
    materials: ["Cardboard (OCC)", "Mixed paper", "Newsprint", "Office paper"],
    capacity: "30-100 tons/day",
    icon: FileText
  },
  {
    title: "Plastic Recycling Facilities",
    description: "PET bottles, plastic films, and mixed plastic waste processing for recycling operations",
    image: "/images/applications/plastic-recycling.png",
    href: "/applications/plastic-recycling",
    materials: ["PET bottles", "Plastic films", "HDPE containers", "Mixed plastics"],
    capacity: "20-80 tons/day",
    icon: Recycle
  },
  {
    title: "Large Warehouses & Distribution",
    description: "Continuous processing of packaging waste from logistics and distribution operations",
    image: "/images/applications/warehouse-logistics.png",
    href: "/applications/warehouse-logistics",
    materials: ["Shipping boxes", "Stretch wrap", "Packaging materials", "Pallets"],
    capacity: "40-120 tons/day",
    icon: Warehouse
  },
  {
    title: "Light Metal Recycling",
    description: "Aluminum cans, light metal components, and non-ferrous waste processing",
    image: "/images/applications/non-ferrous-recycling-full.jpg",
    href: "/applications/non-ferrous-recycling",
    materials: ["Aluminum cans", "Copper wire", "Brass fittings", "Light metals"],
    capacity: "25-70 tons/day",
    icon: Zap
  }
];

const painPointSolutions = [
  {
    painPoint: "Large waste volumes occupy valuable facility space",
    solution: "Automated horizontal baler enables continuous processing",
    benefit: "Reduce waste storage space by 80-90%"
  },
  {
    painPoint: "Manual packaging is labor-intensive and inefficient",
    solution: "Fully automated feeding, compression, and ejection systems",
    benefit: "Reduce labor costs by 60-80%"
  },
  {
    painPoint: "High transportation costs due to low material density",
    solution: "High-pressure compression achieves 2.5 t/m³ bale density",
    benefit: "Improve transport efficiency and reduce shipping costs"
  },
  {
    painPoint: "Inconsistent bale quality affects downstream processing",
    solution: "Precision control systems ensure uniform bale dimensions",
    benefit: "Maintain ±2% dimensional tolerance for optimal handling"
  }
];

const comparisonData = [
  {
    feature: "Daily Capacity",
    arzir: "20-100+ tons/day",
    traditional: "5-15 tons/day",
    advantage: "5-10x higher throughput"
  },
  {
    feature: "Labor Requirements",
    arzir: "1-2 operators",
    traditional: "4-8 workers",
    advantage: "60-80% labor reduction"
  },
  {
    feature: "Bale Consistency",
    arzir: "±2% tolerance",
    traditional: "Manual variation",
    advantage: "Precise dimensional control"
  },
  {
    feature: "Operating Hours",
    arzir: "24/7 continuous",
    traditional: "8-16 hours/day",
    advantage: "Maximum facility utilization"
  },
  {
    feature: "Energy Efficiency",
    arzir: "15-25 kWh/ton",
    traditional: "Manual labor",
    advantage: "Automated energy optimization"
  }
];

const caseStudies = [
  {
    title: "Paper Recycling Facility - North America",
    location: "Chicago, USA",
    equipment: "ARZIR HB-800 Horizontal Baler",
    results: [
      "Increased processing capacity from 40 to 85 tons/day",
      "Reduced labor costs by 70% with automated operation",
      "ROI achieved in 16 months through operational savings"
    ],
    testimonial: "The ARZIR horizontal baler transformed our operations. We now process double the volume with half the staff.",
    icon: Factory
  },
  {
    title: "Plastic Recycling Center - Europe",
    location: "Rotterdam, Netherlands", 
    equipment: "ARZIR HB-600 Horizontal Baler",
    results: [
      "Continuous 24/7 operation processing 60 tons/day",
      "Consistent bale quality improved transport efficiency",
      "Reduced facility space requirements by 60%"
    ],
    testimonial: "Excellent reliability and consistent bale quality. The automated system runs continuously with minimal supervision.",
    icon: Building2
  },
  {
    title: "Distribution Center - South America",
    location: "São Paulo, Brazil",
    equipment: "ARZIR HB-1000 Horizontal Baler",
    results: [
      "Handles 120 tons/day of mixed packaging waste",
      "Eliminated manual baling operations completely", 
      "Improved workplace safety and reduced injuries"
    ],
    testimonial: "Outstanding performance for our high-volume operation. The safety features and automation exceeded expectations.",
    icon: Truck
  }
];

const operationSteps = [
  {
    step: "Automated Material Feeding",
    description: "Conveyor systems continuously feed sorted materials into the compression chamber",
    duration: "Continuous",
    details: "Variable speed conveyors match material flow with baler capacity"
  },
  {
    step: "High-Pressure Compression",
    description: "Hydraulic system applies 400-1000T force for optimal material density",
    duration: "40-80 seconds",
    details: "Precise pressure control ensures consistent bale quality and dimensions"
  },
  {
    step: "Automatic Wire Tying",
    description: "Automated tying system secures bales with galvanized steel wire",
    duration: "30-45 seconds",
    details: "Multi-wire tying ensures bale integrity during transport and handling"
  },
  {
    step: "Bale Ejection & Handling",
    description: "Completed bales are automatically ejected and conveyed to storage area",
    duration: "60-90 seconds",
    details: "Automated ejection system maintains continuous operation flow"
  }
];

const faqs = [
  {
    question: "What is the horizontal baler price range?",
    answer: "Horizontal baler prices range from $150,000-$800,000 depending on capacity and automation level. Basic manual models start at $150,000, while fully automated high-capacity systems can reach $800,000. Contact us for detailed pricing based on your specific requirements."
  },
  {
    question: "What's the difference between vertical and horizontal balers?",
    answer: "Horizontal balers are designed for high-volume continuous operation (20-100+ tons/day) with automated feeding systems, while vertical balers are better for smaller operations (1-10 tons/day) with manual loading. Horizontal balers offer higher throughput, consistent bale sizes, and reduced labor requirements."
  },
  {
    question: "What materials can horizontal balers process?",
    answer: "Horizontal balers can process cardboard (OCC), mixed paper, plastic films, PET bottles, aluminum cans, light metals, and other recyclable materials. They're particularly effective for high-volume, consistent material streams in recycling and manufacturing operations."
  },
  {
    question: "Is the horizontal baler suitable for 24/7 operation?",
    answer: "Yes, ARZIR horizontal balers are designed for continuous 24/7 operation. They feature robust construction, automated systems, and predictive maintenance capabilities to ensure maximum uptime and reliability in demanding industrial environments."
  },
  {
    question: "What delivery and installation support is provided?",
    answer: "We provide complete project support including site preparation guidance, equipment delivery, professional installation, commissioning, operator training, and ongoing technical support. Installation typically takes 1-2 weeks depending on system complexity and site preparation."
  }
];

const relatedContent = [
  {
    title: "Horizontal vs Vertical Baler: Which One to Choose?",
    description: "Comprehensive comparison guide to help you choose the right baler type for your operation",
    href: "/blog/vertical-vs-horizontal-baler"
  },
  {
    title: "How Automatic Horizontal Balers Reduce Recycling Costs",
    description: "Learn how automated horizontal baling systems can significantly reduce operational costs",
    href: "/blog/automatic-horizontal-balers-reduce-costs"
  }
];

export default function HorizontalBalerPage() {
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
                High-Volume Processing Leader
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Horizontal{" "}
                <span className="text-arzir-primary">Baler</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Continuous High-Volume Processing with{" "}
                <span className="text-arzir-primary font-semibold">100+ Tons/Day Capacity</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Automated horizontal balers for continuous operation and consistent bale quality.{" "}
              <strong className="text-black">Perfect for high-volume recycling and manufacturing operations.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">100+T</div>
                <div className="text-sm text-arzir-gray-600">Daily Capacity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">24/7</div>
                <div className="text-sm text-arzir-gray-600">Continuous Operation</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">±2%</div>
                <div className="text-sm text-arzir-gray-600">Bale Tolerance</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="horizontal_baler_hero">
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
            <div className="aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/products/horizontal-baler.png"
                alt="ARZIR Horizontal Baler - Industrial Automatic Waste Baler Machine"
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
              Continuous Operation
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Industrial Horizontal Baling Solutions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-arzir-gray-600">
              <p>
                The ARZIR Horizontal Baler is engineered for continuous high-volume waste processing operations, 
                ideal for recycling centers, manufacturing facilities, and large-scale material recovery facilities 
                requiring consistent bale quality and automated operation.
              </p>
              <p>
                Unlike vertical balers designed for smaller operations, horizontal balers excel in processing 20-100+ tons 
                per day with automated feeding systems, precise bale dimensions, and continuous operation capabilities 
                that maximize facility efficiency and reduce labor requirements.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Recycling Centers</h3>
              <p className="text-arzir-gray-600">High-volume cardboard and plastic processing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Package className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Manufacturing</h3>
              <p className="text-arzir-gray-600">Continuous processing of production waste</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Distribution Centers</h3>
              <p className="text-arzir-gray-600">Automated packaging waste management</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Paper Mills</h3>
              <p className="text-arzir-gray-600">OCC and mixed paper processing</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Advanced Features */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Advanced Features That Drive Results
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Every component engineered for maximum throughput and operational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-arzir-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
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
              Four proven models to match your throughput and automation requirements
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Horizontal Baler technical specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Press Force</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Chamber Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Bale Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Capacity</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Motor Power</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr key={spec.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-arzir-primary">{spec.model}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.pressForce}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.chamberSize}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.baleSize}</td>
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
              Comprehensive solutions for diverse industrial waste processing needs
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
              How ARZIR horizontal balers solve common waste management challenges
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
              Why Choose ARZIR Horizontal Balers
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Significant advantages over traditional waste handling methods
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Comparison Item</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Horizontal Baler</th>
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
              <h3 className="text-xl font-heading font-bold text-black">Custom Automation</h3>
              <p className="text-arzir-gray-600">Tailored automation levels from manual to fully automatic operation</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Users className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Global Support</h3>
              <p className="text-arzir-gray-600">Comprehensive installation, training, and ongoing technical support</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Award className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Proven Performance</h3>
              <p className="text-arzir-gray-600">Over 200 successful installations worldwide with proven ROI</p>
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
              Real results from horizontal baler implementations worldwide
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
              Simple automated workflow from feeding to ejection
            </p>
          </div>
          
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
      </Section>

      {/* Automation Levels */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Automation Levels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {automationLevels.map((level) => (
              <div key={level.level} className="bg-arzir-gray-50 p-6 rounded-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-heading font-semibold text-black">
                      {level.level}
                    </h3>
                    <div className="text-arzir-primary font-bold text-xl">
                      {level.investment}
                    </div>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">
                    {level.description}
                  </p>
                  <div className="px-3 py-1 bg-arzir-primary/10 rounded-full w-fit">
                    <span className="text-sm font-semibold text-arzir-primary">{level.throughput}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                      Key Features
                    </div>
                    <div className="space-y-1">
                      {level.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-arzir-primary" />
                          <span className="text-xs text-arzir-gray-600">{feature}</span>
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

      {/* Operational Benefits */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Operational Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-sm border border-arzir-gray-100 text-center space-y-4">
                <div className="text-2xl font-bold text-arzir-primary">
                  {benefit.metric}
                </div>
                <h3 className="text-lg font-heading font-semibold text-black">
                  {benefit.title}
                </h3>
                <p className="text-sm text-arzir-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
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
              Common questions about horizontal baler selection and operation
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
              Learn more about horizontal baler technology and applications
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
        title="Transform Your High-Volume Waste Processing"
        description="Achieve continuous operation and maximum efficiency with ARZIR horizontal balers. Process 20-100+ tons/day with automated systems designed for consistent quality and reduced labor requirements."
        formSource="horizontal_baler_bottom" 
      />
    </>
  );
}