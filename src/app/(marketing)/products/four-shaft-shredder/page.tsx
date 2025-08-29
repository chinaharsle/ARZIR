import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Timer, Factory, Truck, Users, Star, MapPin, Wrench, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Four-Shaft Shredder | Fine Size Reduction",
  description: "Multi-shaft four-shaft shredders for fine size reduction and uniform output with superior particle size control.",
};



const technicalSpecs = [
  {
    model: "ARZIR FS-800",
    rotorCount: "4 synchronized shafts",
    cutterCount: "160 pieces",
    motorPower: "500 kW",
    screenSize: "10-80mm",
    capacity: "3-10 t/h"
  },
  {
    model: "ARZIR FS-1200",
    rotorCount: "4 synchronized shafts", 
    cutterCount: "200 pieces",
    motorPower: "750 kW",
    screenSize: "15-100mm",
    capacity: "8-20 t/h"
  },
  {
    model: "ARZIR FS-1600",
    rotorCount: "4 synchronized shafts",
    cutterCount: "240 pieces", 
    motorPower: "1000 kW",
    screenSize: "20-120mm",
    capacity: "15-30 t/h"
  },
  {
    model: "ARZIR FS-2000",
    rotorCount: "4 synchronized shafts",
    cutterCount: "280 pieces",
    motorPower: "1500 kW", 
    screenSize: "25-150mm",
    capacity: "25-40 t/h"
  }
];

const coreFeatures = [
  {
    icon: Layers,
    title: "Four-Shaft Multi-Stage Design",
    description: "Four synchronized shafts provide progressive size reduction in multiple stages for superior material liberation and consistent output quality",
    benefit: "One-pass complete processing from coarse to fine"
  },
  {
    icon: Zap,
    title: "Precision Fine Size Reduction",
    description: "Multi-stage cutting action achieves precise particle size control with integrated screening for optimal downstream processing",
    benefit: "Superior output uniformity and consistency"
  },
  {
    icon: Settings,
    title: "Advanced Material Liberation",
    description: "Progressive cutting stages effectively separate bonded materials and composites for maximum material recovery",
    benefit: "90-95% material liberation efficiency"
  },
  {
    icon: Shield,
    title: "Heavy-Duty Four-Shaft Construction", 
    description: "Robust synchronized four-shaft system designed for continuous operation with complex materials and high processing loads",
    benefit: "Reliable operation in demanding fine processing applications"
  },
  {
    icon: Timer,
    title: "Integrated Screen Control System",
    description: "Built-in screening system with interchangeable screens provides precise control over final particle size distribution",
    benefit: "Customizable output sizing for specific applications"
  },
  {
    icon: Wrench,
    title: "Synchronized Maintenance System",
    description: "Coordinated four-shaft maintenance with easy access panels and modular component design for efficient servicing",
    benefit: "Streamlined maintenance despite system complexity"
  }
];

const applications = [
  {
    title: "E-Waste Processing Centers",
    description: "Processing electronic waste, circuit boards, and complex electronic components for precious metal recovery and material separation",
    image: "/images/applications/E-Waste Recycling Solutions.webp",
    href: "/applications/ewaste-recycling",
    materials: ["Circuit boards", "Electronic components", "Computer equipment", "Mobile devices"],
    capacity: "3-15 tons/hour",
    icon: Factory
  },
  {
    title: "Automotive Shredder Residue",
    description: "Fine processing of automotive fluff and mixed materials for enhanced material recovery and separation efficiency",
    image: "/images/applications/automotive-dismantling-full.webp", 
    href: "/applications/automotive-dismantling", 
    materials: ["Automotive fluff", "Mixed composites", "Plastic components", "Metal fragments"],
    capacity: "10-25 tons/hour",
    icon: Truck
  },
  {
    title: "Complex Plastic Processing",
    description: "Multi-layer plastic processing and composite material separation for high-value plastic recycling applications",
    image: "/images/applications/plastic-processing.png",
    href: "/applications/plastic-recycling", 
    materials: ["Multi-layer plastics", "Composite materials", "Contaminated polymers", "Mixed plastic waste"],
    capacity: "5-18 tons/hour",
    icon: Settings
  },
  {
    title: "Fine Metal Processing", 
    description: "Precision fine processing of mixed metal scrap and non-ferrous materials for enhanced separation and recovery",
    image: "/images/applications/metal-processing.png",
    href: "/applications/non-ferrous-recycling",
    materials: ["Mixed metal scrap", "Non-ferrous metals", "Small metal components", "Contaminated metals"],
    capacity: "8-22 tons/hour", 
    icon: Wrench
  },
  {
    title: "Municipal Solid Waste Fine Processing",
    description: "Advanced fine processing of municipal solid waste for improved material separation and recovery efficiency",
    image: "/images/applications/municipal-waste.png",
    href: "/applications/municipal-waste",
    materials: ["Mixed municipal waste", "Packaging materials", "Paper and cardboard", "Light fraction materials"],
    capacity: "12-35 tons/hour",
    icon: Shield
  }
];

const painPointSolutions = [
  {
    painPoint: "Complex material streams require superior liberation that conventional shredding cannot achieve",
    solution: "Four-shaft multi-stage cutting progressively liberates bonded materials achieving 90-95% separation efficiency",
    benefit: "Maximum material recovery value and purity"
  },
  {
    painPoint: "Need for precise fine sizing while maintaining high processing throughput and material quality",
    solution: "Integrated four-shaft design with controlled screening provides precise sizing while maintaining capacity",
    benefit: "Consistent fine output without compromising throughput"
  },
  {
    painPoint: "Single-stage processing cannot handle diverse material mix from coarse to fine in one operation",
    solution: "Multi-stage four-shaft system processes materials from coarse input to fine output in single pass",
    benefit: "Eliminates multiple processing stages and reduces costs"
  }
];

const comparisonData = [
  {
    feature: "Material Liberation Rate",
    arzir: "90-95% superior liberation",
    doubleShaft: "75-85% standard liberation", 
    advantage: "15-20% higher material recovery"
  },
  {
    feature: "Output Uniformity",
    arzir: "95%+ uniform particle distribution",
    doubleShaft: "80-90% output consistency",
    advantage: "Superior downstream processing efficiency"
  },
  {
    feature: "Processing Stages",
    arzir: "Single-pass coarse to fine processing",
    doubleShaft: "Primary reduction requires secondary processing",
    advantage: "Eliminates multiple processing stages"
  },
  {
    feature: "Fine Material Handling",
    arzir: "Specialized for fine and precision processing",
    doubleShaft: "Optimized for primary size reduction",
    advantage: "Superior fine processing capabilities"
  },
  {
    feature: "Material Contamination Control", 
    arzir: "Progressive separation maintains purity",
    doubleShaft: "Good separation with some mixing",
    advantage: "Higher purity recovered materials"
  },
  {
    feature: "Investment Requirements",
    arzir: "Higher investment for advanced capabilities",
    doubleShaft: "Lower initial investment cost", 
    advantage: "ROI through superior material recovery"
  }
];

const caseStudies = [
  {
    title: "E-Waste Processing Facility - Europe", 
    location: "Hamburg, Germany",
    equipment: "ARZIR FS-1600 Four-Shaft Shredder",
    results: [
      "Achieved 92% precious metal recovery from electronic components",
      "Increased material recovery value by 40% through superior liberation",
      "Eliminated need for secondary fine processing stages", 
      "ROI achieved within 22 months through enhanced recovery rates"
    ],
    testimonial: "The four-shaft system delivers the precision and liberation quality essential for high-value e-waste processing.",
    icon: Factory
  },
  {
    title: "Automotive Recycling Center - North America",
    location: "Detroit, USA", 
    equipment: "ARZIR FS-2000 Four-Shaft Shredder",
    results: [
      "Processing 30 tons/hour of automotive shredder residue efficiently",
      "Improved material separation by 35% vs previous double-shaft system",
      "Enhanced plastic and metal recovery through multi-stage processing",
      "Reduced downstream processing costs by 45%"
    ],
    testimonial: "Multi-stage processing has revolutionized our ASR processing with exceptional material liberation results.",
    icon: Truck
  },
  {
    title: "Plastic Processing Facility - Asia",
    location: "Shanghai, China",
    equipment: "ARZIR FS-1200 Four-Shaft Shredder", 
    results: [
      "Processing 18 tons/hour of complex plastic composites",
      "Achieved 94% material purity through progressive separation", 
      "Eliminated contamination issues in recycled plastic output",
      "Increased facility profitability by 50% through premium material grades"
    ],
    testimonial: "The precision fine processing capabilities have transformed our plastic recycling operation quality and profitability.",
    icon: Settings
  }
];

const operationSteps = [
  {
    step: "Material Loading",
    description: "Load materials into the feed hopper using conveyors or crane systems",
    duration: "Continuous feeding",
    details: "Controlled feeding ensures optimal four-shaft processing flow"
  },
  {
    step: "Four-Shaft Multi-Stage Processing", 
    description: "Materials progress through four cutting stages from coarse to fine reduction",
    duration: "Continuous operation",
    details: "Progressive cutting achieves superior material liberation"
  },
  {
    step: "Integrated Screening",
    description: "Built-in screening system controls final particle size distribution",
    duration: "Continuous screening", 
    details: "Ensures consistent output sizing for downstream processing"
  },
  {
    step: "Material Discharge & Collection",
    description: "Processed materials discharge to collection and handling systems",
    duration: "Continuous discharge",
    details: "Clean separation maintains material quality and purity"
  }
];

const maintenanceGuide = [
  {
    category: "Daily Maintenance",
    tasks: ["Four-shaft synchronization check", "Screen condition inspection", "Material flow monitoring"],
    frequency: "Daily"
  },
  {
    category: "Synchronized Service",
    tasks: ["Four-shaft coordinated maintenance", "Screen cleaning and replacement", "Drive system inspection"],
    frequency: "Weekly"
  }, 
  {
    category: "Major Overhaul",
    tasks: ["Complete four-shaft system service", "Screen system overhaul", "Precision alignment verification"],
    frequency: "Quarterly"
  }
];




const faqs = [
  {
    question: "What materials can a four-shaft shredder process effectively?",
    answer: "Four-shaft shredders excel at processing electronic waste, complex plastics (PP, ABS, PET, PVC), wood materials, metals (aluminum, copper, small steel), municipal solid waste, and hazardous materials. They're particularly effective for composite materials requiring high liberation rates."
  },
  {
    question: "What is the price range for four-shaft shredders?",
    answer: "Four-shaft shredder prices range from $400,000-$1.5 million depending on size and complexity. The FS-800 starts at $400,000, while the FS-2000 costs around $1.5 million. Contact us for detailed pricing and financing options."
  },
  {
    question: "What output size range and throughput can be achieved?",
    answer: "Output sizes range from 10-150mm through interchangeable screens. Throughput ranges from 3-40 tons/hour depending on model. The multi-stage design provides 95%+ uniform particle distribution for consistent downstream processing."
  },
  {
    question: "How does four-shaft compare with double-shaft shredders?",
    answer: "Four-shaft shredders provide superior material liberation (90-95% vs 80-85%), better output uniformity (95%+ vs 80-90%), and single-pass processing from coarse to fine, but require higher investment and more complex maintenance than double-shaft systems."
  },
  {
    question: "What delivery time and installation support is provided?",
    answer: "Standard delivery is 16-24 weeks for most models due to the complexity of four-shaft systems. We provide comprehensive installation support, commissioning, operator training, synchronized maintenance guidance, and global technical support."
  }
];

const relatedContent = [
  {
    title: "Four-Shaft vs Double-Shaft Shredders: Which One to Choose?",
    description: "Comprehensive comparison guide to help you choose between double-shaft and four-shaft shredder technologies for your operation",
    href: "/blog/four-shaft-vs-double-shaft-shredders"
  },
  {
    title: "How Four-Shaft Shredders Improve Recycling Efficiency in E-Waste Processing",
    description: "Discover how four-shaft shredder technology enhances material liberation and processing efficiency in electronic waste recycling operations",
    href: "/blog/four-shaft-shredders-improve-ewaste-recycling-efficiency"
  }
];

export default function FourShaftShredderPage() {
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
                Multi-Stage Processing
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Four-Shaft{" "}
                <span className="text-arzir-primary">Shredder</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Precision Fine Size Reduction for{" "}
                <span className="text-arzir-primary font-semibold">Complex Material Processing</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Designed for e-waste, plastics, metals, and complex materials.{" "}
              <strong className="text-black">Multi-stage cutting with integrated screening for uniform output.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">40 t/h</div>
                <div className="text-sm text-arzir-gray-600">Max Capacity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">95%</div>
                <div className="text-sm text-arzir-gray-600">Liberation Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">4-Stage</div>
                <div className="text-sm text-arzir-gray-600">Cutting Process</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="four_shaft_shredder_hero">
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
                src="/images/products/single/four-shaft shredder.webp"
                alt="ARZIR Four-Shaft Shredder - Precision Fine Size Reduction Equipment"
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
              Multi-Stage
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Professional Four-Shaft Shredding Solutions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-arzir-gray-600">
              <p>
                The ARZIR Four-Shaft Shredder features four synchronized rotors that combine coarse and fine 
                cutting in a single pass. Ideal for electronic waste, complex plastics, metals, and municipal 
                solid waste applications requiring precise particle size control and superior material liberation.
              </p>
              <p>
                With integrated screening systems, low-speed high-torque operation, and modular maintenance design, 
                our four-shaft shredders provide exceptional efficiency and reliability for demanding industrial 
                recycling operations that require consistent fine processing results.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-10 w-10 text-arzir-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">E-Waste Processing</h3>
              <p className="text-arzir-gray-600">Circuit boards, cables, components</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-arzir-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Plastic Recycling</h3>
              <p className="text-arzir-gray-600">PP, ABS, PET, PVC materials</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Wood Processing</h3>
              <p className="text-arzir-gray-600">Pallets, furniture, composites</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Metal Processing</h3>
              <p className="text-arzir-gray-600">Aluminum, copper, steel components</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Municipal & Hazardous Waste</h3>
              <p className="text-arzir-gray-600">MSW and pre-treatment materials</p>
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
              Four synchronized shafts, integrated screening, low-speed operation, and superior material liberation
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
              Four proven models to meet different fine processing requirements
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Four-Shaft Shredder Technical Specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Rotor Count</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cutter Count</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Motor Power</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Screen Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr key={spec.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-arzir-primary">{spec.model}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.rotorCount}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.cutterCount}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.motorPower}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.screenSize}</td>
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
              Comprehensive solutions for precision fine processing and material liberation
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
          {applications.length > 4 && (() => {
            const fifthApp = applications[4];
            const IconComponent = fifthApp.icon;
            return (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-black mb-1">
                        {fifthApp.title}
                      </h3>
                      <div className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium w-fit">
                        {fifthApp.capacity}
                      </div>
                    </div>
                    <p className="text-arzir-gray-600 leading-relaxed">
                      {fifthApp.description}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-arzir-gray-700 mb-2">Typical Materials:</p>
                      <div className="flex flex-wrap gap-2">
                        {fifthApp.materials.map((material, i) => (
                          <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-xs">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={fifthApp.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })()}
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
              How ARZIR four-shaft shredders solve complex material processing challenges
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
              Why Choose ARZIR Four-Shaft Shredders
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Significant advantages over double-shaft and competitive four-shaft technologies
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Comparison Item</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Four-Shaft</th>
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
              <h3 className="text-xl font-heading font-bold text-black">Precision Engineering</h3>
              <p className="text-arzir-gray-600">Advanced four-shaft synchronization and screen integration for optimal material liberation</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Users className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Global Support</h3>
              <p className="text-arzir-gray-600">Comprehensive installation, training, and synchronized maintenance support worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Award className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Proven Performance</h3>
              <p className="text-arzir-gray-600">Over 150 successful fine processing installations with proven material liberation rates</p>
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
              Real results from four-shaft shredder implementations worldwide
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
              Multi-stage operational workflow and synchronized maintenance guidance
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
              Common questions about four-shaft shredder selection and operation
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
              Learn more about four-shaft shredder technology and applications
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
        title="Transform Your Complex Material Processing Operations"
        description="Achieve superior material liberation and precise sizing with ARZIR four-shaft shredders. Process e-waste, plastics, metals, and complex materials with multi-stage cutting and integrated screening for maximum efficiency."
        formSource="four_shaft_shredder_bottom" 
      />
    </>
  );
}