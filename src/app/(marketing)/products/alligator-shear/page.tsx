import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Timer, Factory, Truck, Users, Star, MapPin, Wrench, DollarSign, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alligator Shear | Compact Scrap Metal Cutting Machine | Portable Hydraulic Shear | ARZIR",
  description: "ARZIR Alligator Shear - compact hydraulic cutting machine for rebar, steel rods, and small metal structures. Portable design with powerful cutting force for efficient scrap processing.",
  keywords: [
    "alligator shear",
    "scrap cutting shear",
    "portable alligator shear",
    "metal shear for recycling",
    "compact scrap shear",
    "hydraulic rebar cutter",
    "small scrap cutting machine",
    "portable metal cutting shear"
  ],
  openGraph: {
    title: "Alligator Shear | Compact Scrap Metal Cutting Machine | ARZIR",
    description: "Compact hydraulic alligator shears for efficient cutting of rebar, steel rods, and small metal structures. Portable and cost-effective solution.",
    images: [
      {
        url: "/images/products/alligator-shear.png",
        width: 1200,
        height: 630,
        alt: "ARZIR Alligator Shear - Compact Scrap Metal Cutting Machine"
      }
    ]
  }
};

const technicalSpecs = [
  {
    model: "ARZIR AS-100",
    cuttingForce: "100 tons",
    maxLength: "1200mm",
    maxDiameter: "50mm rebar",
    cuttingSpeed: "15-20 cuts/min",
    motorPower: "15 kW"
  },
  {
    model: "ARZIR AS-200",
    cuttingForce: "200 tons",
    maxLength: "1500mm",
    maxDiameter: "75mm rebar",
    cuttingSpeed: "12-18 cuts/min",
    motorPower: "22 kW"
  },
  {
    model: "ARZIR AS-300",
    cuttingForce: "300 tons",
    maxLength: "1800mm",
    maxDiameter: "100mm rebar",
    cuttingSpeed: "10-15 cuts/min",
    motorPower: "37 kW"
  },
  {
    model: "ARZIR AS-400",
    cuttingForce: "400 tons",
    maxLength: "2000mm",
    maxDiameter: "120mm rebar",
    cuttingSpeed: "8-12 cuts/min",
    motorPower: "45 kW"
  }
];

const coreFeatures = [
  {
    icon: Zap,
    title: "Powerful Hydraulic Drive",
    description: "100-400T cutting force efficiently processes rebar, angle steel, round steel, and small metal structures with precision",
    benefit: "Strong cutting power for various materials"
  },
  {
    icon: Settings,
    title: "Multiple Size Options",
    description: "Four models available to match different material sizes and processing requirements from light to heavy-duty applications",
    benefit: "Flexible sizing for different waste materials"
  },
  {
    icon: Truck,
    title: "Compact & Portable Design",
    description: "Lightweight structure and compact footprint enable easy transportation and relocation between work sites",
    benefit: "Easy to move and position"
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Operation",
    description: "Low purchase cost, high efficiency processing, and minimal maintenance requirements deliver excellent ROI",
    benefit: "Low cost with high efficiency"
  },
  {
    icon: Shield,
    title: "Safe Operation",
    description: "Foot pedal control and automatic blade return ensure operator safety during cutting operations",
    benefit: "Safe and reliable operation"
  },
  {
    icon: Wrench,
    title: "Simple Maintenance",
    description: "Easy access design and robust construction minimize maintenance requirements and maximize uptime",
    benefit: "Easy maintenance and durable design"
  }
];

const applications = [
  {
    title: "Scrap Steel Recycling Centers",
    description: "Efficient cutting of scrap steel, copper, aluminum for size reduction and processing preparation",
    image: "/images/applications/scrap-recycling.png",
    href: "/applications/scrap-recycling",
    materials: ["Scrap steel pieces", "Copper pipes", "Aluminum sections", "Mixed ferrous materials"],
    capacity: "200-400 cuts/hour",
    icon: Factory
  },
  {
    title: "Rebar Processing Facilities",
    description: "Cutting rebar and steel rods to required lengths for construction and recycling applications",
    image: "/images/applications/metal-fabrication.png",
    href: "/applications/metal-fabrication",
    materials: ["Construction rebar", "Steel rods", "Reinforcement bars", "Round steel"],
    capacity: "150-300 cuts/hour",
    icon: Wrench
  },
  {
    title: "Metal Products Manufacturing",
    description: "Processing pipes, profiles, and small steel structures for manufacturing and fabrication operations",
    image: "/images/applications/metal-fabrication.png",
    href: "/applications/metal-fabrication",
    materials: ["Steel pipes", "Metal profiles", "Small structures", "Fabricated parts"],
    capacity: "100-250 cuts/hour",
    icon: Settings
  },
  {
    title: "Construction Demolition Sites",
    description: "On-site cutting of construction scrap for efficient removal and recycling processing",
    image: "/images/applications/construction-demolition-recycling.png",
    href: "/applications/construction-demolition-recycling",
    materials: ["Construction debris", "Building steel", "Demolished structures", "Site cleanup materials"],
    capacity: "80-200 cuts/hour",
    icon: Truck
  }
];

const painPointSolutions = [
  {
    painPoint: "Manual cutting is inefficient and dangerous",
    solution: "Alligator Shear hydraulic system provides safe and efficient cutting",
    benefit: "Improved safety and efficiency"
  },
  {
    painPoint: "Large cutting machines unsuitable for small metals",
    solution: "Compact alligator design perfect for lightweight and medium materials",
    benefit: "Flexible and suitable for small materials"
  },
  {
    painPoint: "Large scrap volume creates transport and storage issues",
    solution: "Efficient cutting reduces material size for easier handling",
    benefit: "Reduced transport and storage costs"
  }
];

const comparisonData = [
  {
    feature: "Cutting Speed",
    arzir: "8-20 cuts/min",
    manual: "2-5 cuts/hour",
    advantage: "20-60x faster processing"
  },
  {
    feature: "Safety Level",
    arzir: "Automated foot pedal control",
    manual: "High-risk manual operation",
    advantage: "Significantly improved safety"
  },
  {
    feature: "Operating Cost",
    arzir: "Low energy consumption",
    manual: "High labor and tool costs",
    advantage: "60-80% cost reduction"
  },
  {
    feature: "Cutting Quality",
    arzir: "Clean precise hydraulic cuts",
    manual: "Irregular torch cutting",
    advantage: "Superior cut quality"
  },
  {
    feature: "Operator Skill",
    arzir: "Minimal training required",
    manual: "Skilled operators needed",
    advantage: "Easy operation for any worker"
  },
  {
    feature: "Material Handling",
    arzir: "Quick positioning and cutting",
    manual: "Complex setup and cutting",
    advantage: "Streamlined workflow"
  }
];

const caseStudies = [
  {
    title: "Scrap Steel Processing Company - Brazil",
    location: "São Paulo, Brazil",
    equipment: "ARZIR AS-200 Alligator Shear",
    results: [
      "Cutting efficiency increased by 50% compared to manual methods",
      "Reduced operator safety risks and workplace accidents",
      "Processing capacity improved to 250 cuts per hour",
      "ROI achieved within 8 months of installation"
    ],
    testimonial: "The ARZIR alligator shear significantly improved our cutting efficiency while ensuring operator safety.",
    icon: Factory
  },
  {
    title: "Small Rebar Processing Facility - Thailand",
    location: "Bangkok, Thailand",
    equipment: "ARZIR AS-100 Alligator Shear",
    results: [
      "Reduced manual cutting risks and improved workplace safety",
      "Increased daily rebar processing capacity by 60%",
      "Lower operational costs through reduced labor requirements",
      "Consistent cut quality improved downstream processing"
    ],
    testimonial: "Perfect solution for our small facility. Easy to operate and maintain with excellent cutting performance.",
    icon: Wrench
  },
  {
    title: "Metal Recycling Center - Germany",
    location: "Munich, Germany",
    equipment: "ARZIR AS-300 Alligator Shear",
    results: [
      "Processing various scrap metals with consistent quality",
      "Reduced material preparation time by 40%",
      "Improved overall facility throughput and efficiency",
      "Excellent reliability with minimal maintenance requirements"
    ],
    testimonial: "Reliable and efficient machine that handles our diverse scrap cutting needs perfectly.",
    icon: Settings
  }
];

const operationSteps = [
  {
    step: "Material Loading",
    description: "Position material in the cutting chamber between the alligator jaws",
    duration: "30-60 seconds",
    details: "Proper positioning ensures clean cuts and operator safety"
  },
  {
    step: "Foot Pedal/Button Control",
    description: "Activate hydraulic cutting system using foot pedal or control button",
    duration: "3-8 seconds",
    details: "Safe control from operator position with emergency stop capability"
  },
  {
    step: "Hydraulic Cutting",
    description: "Powerful hydraulic jaws close to cut through material cleanly",
    duration: "2-5 seconds",
    details: "High cutting force ensures clean cuts through various materials"
  },
  {
    step: "Automatic Blade Return",
    description: "Hydraulic system automatically returns blade to open position",
    duration: "2-4 seconds",
    details: "Automatic cycle completion prepares for next cutting operation"
  }
];

const maintenanceGuide = [
  {
    category: "Daily Inspection",
    tasks: ["Hydraulic system pressure check", "Blade condition inspection", "Control system verification"],
    frequency: "Daily"
  },
  {
    category: "Regular Maintenance",
    tasks: ["Hydraulic filter replacement", "Blade sharpening/replacement", "Lubrication service"],
    frequency: "Monthly"
  },
  {
    category: "Major Service",
    tasks: ["Hydraulic oil change", "Seal replacement", "Complete system inspection"],
    frequency: "Annually"
  }
];

const faqs = [
  {
    question: "What materials can an alligator shear cut?",
    answer: "Alligator shears efficiently cut rebar, steel rods, angle steel, round steel, small pipes, copper, aluminum, and various ferrous and non-ferrous metals up to 120mm diameter depending on the model."
  },
  {
    question: "What is the alligator shear price range?",
    answer: "Alligator shear prices range from $25,000-$85,000 depending on cutting force and features. The AS-100 starts at $25,000, while the AS-400 costs around $85,000. Contact us for detailed pricing and financing options."
  },
  {
    question: "What is the cutting capacity difference between small and heavy-duty models?",
    answer: "Small models (AS-100/AS-200) handle up to 75mm diameter materials with 100-200T force, while heavy-duty models (AS-300/AS-400) cut up to 120mm diameter with 300-400T force. Choose based on your material size requirements."
  },
  {
    question: "Is it safe for single-person operation?",
    answer: "Yes, alligator shears are designed for safe single-person operation with foot pedal control, automatic blade return, emergency stops, and safety guards. Proper training ensures safe and efficient operation."
  },
  {
    question: "What is the delivery time and installation support?",
    answer: "Standard delivery is 8-12 weeks for most models. We provide complete installation support including setup, commissioning, operator training, and ongoing technical support to ensure optimal performance."
  }
];

const relatedContent = [
  {
    title: "Alligator Shear vs Other Scrap Shears: Which to Choose?",
    description: "Comprehensive comparison of alligator shears with other cutting technologies for scrap processing",
    href: "/blog/alligator-shear-vs-other-scrap-shears"
  },
  {
    title: "How Alligator Shears Improve Efficiency in Small Scrap Cutting",
    description: "Discover how compact alligator shear technology enhances processing efficiency for small and medium materials",
    href: "/blog/alligator-shears-improve-small-scrap-efficiency"
  }
];

export default function AlligatorShearPage() {
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
                Compact Cutting Specialist
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Alligator{" "}
                <span className="text-arzir-primary">Shear</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Compact Hydraulic Machine for{" "}
                <span className="text-arzir-primary font-semibold">Small Metal Cutting</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Designed for scrap recycling centers, rebar processing, and metal fabrication.{" "}
              <strong className="text-black">Cut rebar, steel rods, and small structures efficiently.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">400T</div>
                <div className="text-sm text-arzir-gray-600">Max Cutting Force</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">20/min</div>
                <div className="text-sm text-arzir-gray-600">Cutting Speed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">120mm</div>
                <div className="text-sm text-arzir-gray-600">Max Diameter</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="alligator_shear_hero">
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
                src="/images/products/single/alligator shear.png"
                alt="ARZIR Alligator Shear - Compact Scrap Metal Cutting Machine"
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
              Compact Solution
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Professional Alligator Shear Solutions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-arzir-gray-600">
              <p>
                The ARZIR Alligator Shear is a compact hydraulic cutting machine named for its 
                alligator-like jaw design. Ideal for cutting rebar, angle steel, round steel, 
                and small metal structures in recycling centers, construction sites, and metal processing facilities.
              </p>
              <p>
                Featuring compact structure, simple operation, and convenient maintenance, 
                our alligator shears offer excellent cost-effectiveness compared to larger cutting machines, 
                making them perfect for small to medium-scale metal cutting applications.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Scrap Recycling</h3>
              <p className="text-arzir-gray-600">Steel, copper, aluminum cutting and processing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Rebar Processing</h3>
              <p className="text-arzir-gray-600">Construction rebar and steel rod cutting</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Metal Fabrication</h3>
              <p className="text-arzir-gray-600">Pipes, profiles, and small structures</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Construction Sites</h3>
              <p className="text-arzir-gray-600">On-site construction scrap cutting</p>
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
              Hydraulic drive, compact design, safe operation, and cost-effective performance
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
              Four proven models to meet different small metal cutting requirements
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Alligator Shear Technical Specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cutting Force</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Max Length</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Max Diameter</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cutting Speed</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Motor Power</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr key={spec.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-arzir-primary">{spec.model}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.cuttingForce}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.maxLength}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.maxDiameter}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.cuttingSpeed}</td>
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
              Comprehensive solutions for small and medium metal cutting needs
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
              How ARZIR alligator shears solve common small metal cutting challenges
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
              Why Choose ARZIR Alligator Shears
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Significant advantages over manual cutting and flame cutting methods
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Comparison Item</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Alligator Shear</th>
                  <th className="p-4 text-center font-bold text-arzir-gray-600 text-lg">Manual Cutting</th>
                  <th className="p-4 text-center font-bold text-green-600 text-lg">ARZIR Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-arzir-gray-25" : "bg-white"}>
                    <td className="p-4 font-semibold text-black">{item.feature}</td>
                    <td className="p-4 text-center font-bold text-arzir-primary">{item.arzir}</td>
                    <td className="p-4 text-center text-arzir-gray-600">{item.manual}</td>
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
              <p className="text-arzir-gray-600">Over 500 successful installations with proven reliability and efficiency</p>
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
              Real results from alligator shear implementations worldwide
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
              Common questions about alligator shear selection and operation
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
              Learn more about alligator shear technology and applications
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
        title="Transform Your Small Metal Cutting Operations"
        description="Achieve efficient and safe cutting with ARZIR alligator shears. Process rebar, steel rods, and small structures with compact design and powerful hydraulic force for optimal productivity."
        formSource="alligator_shear_bottom" 
      />
    </>
  );
}