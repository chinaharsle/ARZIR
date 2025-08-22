import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Settings, Award, Star, Users, Package } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertical Baler | Waste Baler | Small Baler Machine | ARZIR",
  description: "Space-saving vertical baler for cardboard, plastic, textiles. Perfect for small businesses, supermarkets, warehouses. Compact design, single-person operation.",
  keywords: [
    "vertical baler",
    "waste baler",
    "vertical recycling baler",
    "small baler machine",
    "cardboard baler",
    "compact baler machine",
    "baler for retail store",
    "baler for warehouse"
  ],
  openGraph: {
    title: "Vertical Baler | Space-Saving Waste Compaction Solutions | ARZIR",
    description: "Compact vertical baler for cardboard, plastic, textiles. Ideal for small businesses with limited space. Single-person operation, high-density bales.",
    images: [
      {
        url: "/images/products/single/vertical baler.png",
        width: 1200,
        height: 630,
        alt: "ARZIR Vertical Baler - Space-Saving Waste Compaction Solution"
      }
    ]
  }
};

const technicalSpecs = [
  {
    model: "ARZIR VB-20",
    pressForce: "20 tons",
    chamberSize: "800 x 600 x 1200mm",
    baleSize: "800 x 600 x 400-800mm",
    capacity: "3-5 bales/hour",
    totalPower: "5.5 kW"
  },
  {
    model: "ARZIR VB-30",
    pressForce: "30 tons",
    chamberSize: "900 x 700 x 1300mm",
    baleSize: "900 x 700 x 500-900mm",
    capacity: "4-6 bales/hour",
    totalPower: "7.5 kW"
  },
  {
    model: "ARZIR VB-50",
    pressForce: "50 tons",
    chamberSize: "1100 x 800 x 1500mm",
    baleSize: "1100 x 800 x 600-1000mm",
    capacity: "5-8 bales/hour",
    totalPower: "11 kW"
  }
];

const coreFeatures = [
  {
    icon: Package,
    title: "Multi-Material Processing",
    description: "Efficiently compresses cardboard, plastic films, PET bottles, and textiles with consistent bale quality",
    benefit: "Handle diverse waste streams in one machine"
  },
  {
    icon: Settings,
    title: "Space-Saving Design",
    description: "Vertical structure minimizes floor space requirements, perfect for facilities with limited space",
    benefit: "75% less floor space than horizontal balers"
  },
  {
    icon: Shield,
    title: "Single-Person Operation",
    description: "Simple controls and automated cycle allow one operator to manage the entire baling process",
    benefit: "Reduce labor costs and training requirements"
  }
];

const keyAdvantages = [
  {
    icon: "📏",
    title: "Minimal Floor Space",
    description: "Compact vertical design requires 70% less floor space compared to horizontal balers",
    metric: "Only 6-12 m² Required"
  },
  {
    icon: "👤",
    title: "Single-Person Operation",
    description: "Simple operation with intuitive controls allows one person to manage entire baling process",
    metric: "50% Labor Reduction"
  },
  {
    icon: "💰",
    title: "Low Operating Costs",
    description: "Energy-efficient design with minimal maintenance requirements reduces operational expenses",
    metric: "30% Lower Energy Cost"
  }
];

const applications = [
  {
    title: "Supermarkets & Retail Stores",
    description: "Compress waste cardboard and plastic packaging materials from daily operations",
    image: "🏪",
    href: "/applications/retail-waste",
    keywords: "vertical baler for cardboard, baler for retail store"
  },
  {
    title: "Warehouses & Distribution Centers",
    description: "Handle packaging materials and plastic films from shipping and receiving operations",
    image: "🏬",
    href: "/applications/warehouse-logistics",
    keywords: "baler for warehouse, packaging waste compaction"
  },
  {
    title: "Hotels & Restaurants",
    description: "Compact waste cardboard boxes and plastic packaging from food service operations",
    image: "🏨",
    href: "/applications/hospitality-waste",
    keywords: "restaurant waste baler, hotel cardboard baler"
  },
  {
    title: "Textile & Light Manufacturing",
    description: "Process fabric scraps, textile waste, and light manufacturing byproducts efficiently",
    image: "🧵",
    href: "/applications/textile-recycling",
    keywords: "textile waste baler, fabric scrap compaction"
  }
];

const painPointSolutions = [
  {
    painPoint: "Large waste volume takes up valuable space",
    solution: "Compact vertical baler compresses waste by 80-90%",
    benefit: "Dramatically reduce storage space requirements"
  },
  {
    painPoint: "High waste disposal costs eating into profits",
    solution: "Single-person operation with low energy consumption",
    benefit: "Reduce operational costs by 40-60%"
  },
  {
    painPoint: "Inconvenient recycling and transportation",
    solution: "High-density bales with standardized dimensions",
    benefit: "Streamlined logistics and better recycling rates"
  }
];

const comparisonData = [
  {
    feature: "Floor Space Required",
    arzir: "6-12 m²",
    traditional: "Manual handling",
    advantage: "70% space savings"
  },
  {
    feature: "Operating Efficiency",
    arzir: "3-8 bales/hour",
    traditional: "Manual bundling",
    advantage: "5x faster processing"
  },
  {
    feature: "Labor Requirements",
    arzir: "1 operator",
    traditional: "2-3 workers",
    advantage: "50% labor reduction"
  },
  {
    feature: "Energy Consumption",
    arzir: "5.5-11 kW",
    traditional: "Manual labor",
    advantage: "Automated efficiency"
  }
];

const caseStudies = [
  {
    title: "Supermarket Chain - UK",
    location: "London, UK",
    equipment: "ARZIR VB-30 Vertical Baler",
    results: [
      "Reduced cardboard storage space by 80%",
      "Single operator processes 200 boxes/hour",
      "ROI achieved in 8 months"
    ],
    testimonial: "The vertical baler fits perfectly in our limited back-of-house space and handles our daily cardboard waste efficiently."
  },
  {
    title: "Textile Manufacturing - India",
    location: "Mumbai, India",
    equipment: "ARZIR VB-50 Vertical Baler",
    results: [
      "Compressed fabric waste by 85%",
      "Reduced waste disposal costs by 60%",
      "Improved workplace organization"
    ],
    testimonial: "Perfect solution for our textile waste. Compact design fits in our production area without disrupting workflow."
  }
];

const operationSteps = [
  {
    step: "Material Loading",
    description: "Load cardboard, plastic, or textile waste through the top opening",
    duration: "2-5 minutes",
    details: "Simply feed materials into the large top opening - no complex preparation required"
  },
  {
    step: "Hydraulic Compression",
    description: "Activate compression cycle using simple push-button controls",
    duration: "30-60 seconds",
    details: "Automated cycle compresses materials to optimal density with consistent results"
  },
  {
    step: "Bale Ejection",
    description: "Automatic wire tying and bale ejection from front door",
    duration: "2-3 minutes",
    details: "Finished bales are automatically tied and ejected for easy collection"
  }
];

const maintenanceGuide = [
  {
    category: "Daily Checks",
    tasks: ["Visual inspection", "Oil level check", "Clean work area"],
    frequency: "Daily"
  },
  {
    category: "Weekly Service",
    tasks: ["Lubrication points", "Wire supply check", "Safety system test"],
    frequency: "Weekly"
  },
  {
    category: "Monthly Maintenance",
    tasks: ["Hydraulic system inspection", "Electrical connections", "Wear parts assessment"],
    frequency: "Monthly"
  }
];

const faqs = [
  {
    question: "What materials can a vertical baler handle?",
    answer: "Vertical balers are designed for cardboard, plastic films, PET bottles, paper, textiles, and other light materials. They're not suitable for metals or heavy materials."
  },
  {
    question: "What is the vertical baler price range?",
    answer: "Prices range from $15,000-$45,000 depending on model and features. The VB-20 starts at $15,000, VB-30 at $25,000, and VB-50 at $35,000. Contact us for detailed quotes."
  },
  {
    question: "What is the difference between vertical and horizontal baler?",
    answer: "Vertical balers require 70% less floor space, have lower initial costs, and are ideal for smaller operations. Horizontal balers offer higher throughput for large-scale operations."
  },
  {
    question: "Can it be operated by one person?",
    answer: "Yes, vertical balers are designed for single-person operation with simple push-button controls and automated cycles. Minimal training is required."
  },
  {
    question: "What is the delivery time & after-sales support?",
    answer: "Standard delivery is 8-12 weeks. We provide installation, training, and comprehensive after-sales support including spare parts and technical assistance."
  }
];

const relatedContent = [
  {
    title: "Vertical vs Horizontal Baler: Which One to Choose?",
    description: "Comprehensive comparison guide to help you choose the right baler type for your operation",
    href: "/blog/vertical-vs-horizontal-baler"
  },
  {
    title: "How Small Businesses Benefit from Vertical Balers",
    description: "Discover how small businesses reduce waste costs and improve efficiency with vertical balers",
    href: "/blog/small-business-vertical-balers"
  }
];

export default function VerticalBalerPage() {
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
                Space-Saving Waste Solution
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Vertical{" "}
                <span className="text-arzir-primary">Baler</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Space-Saving Equipment for{" "}
                <span className="text-arzir-primary font-semibold">Cardboard, Plastic & Textile Waste</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Perfect for small businesses and warehouses.{" "}
              <strong className="text-black">Compact design enables single-person operation.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">50T</div>
                <div className="text-sm text-arzir-gray-600">Max Press Force</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">8/hour</div>
                <div className="text-sm text-arzir-gray-600">Bale Capacity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">70%</div>
                <div className="text-sm text-arzir-gray-600">Space Savings</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="vertical_baler_hero">
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
                src="/images/products/single/vertical baler.png"
                alt="ARZIR Vertical Baler - Space-Saving Waste Compaction Solution"
                fill
                className="object-contain sm:object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ✓ Single Operator
            </div>
            <div className="absolute -top-4 -left-4 bg-arzir-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Space Saver
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Space-Saving Waste Compaction Solutions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-arzir-gray-600">
              <p>
                The ARZIR Vertical Baler is specifically designed for space-constrained facilities processing cardboard, 
                plastic films, PET bottles, and textile waste. Perfect for small businesses, supermarkets, warehouses, 
                and logistics centers requiring efficient waste management.
              </p>
              <p>
                Our vertical structure minimizes floor space requirements while delivering consistent high-density bales 
                that reduce storage costs and simplify recycling logistics. Single-person operation with intuitive 
                controls makes it ideal for businesses with limited staff.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl">🏪</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Retail Stores</h3>
              <p className="text-arzir-gray-600">Cardboard and plastic packaging waste compaction</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl">🏬</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Warehouses</h3>
              <p className="text-arzir-gray-600">Shipping materials and plastic film processing</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl">🏨</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Hotels & Restaurants</h3>
              <p className="text-arzir-gray-600">Food service packaging and cardboard waste</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl">🧵</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Textile Facilities</h3>
              <p className="text-arzir-gray-600">Fabric scraps and textile waste compaction</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Features & Benefits */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Core Features & Advantages
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Multi-material processing, compact design, and single-person operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {keyAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center space-y-4">
                <div className="text-4xl">{advantage.icon}</div>
                <h3 className="text-xl font-heading font-bold text-black">
                  {advantage.title}
                </h3>
                <p className="text-arzir-gray-600">
                  {advantage.description}
                </p>
                <div className="text-lg font-bold text-arzir-primary">
                  {advantage.metric}
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
              Three models to meet different capacity requirements with complete technical parameters
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Vertical Baler Technical Specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Press Force</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Chamber Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Bale Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Capacity</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Total Power</th>
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
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.totalPower}</td>
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
              Widely used in retail, warehousing, hospitality, and light manufacturing industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0">{app.image}</div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-black mb-1">
                        {app.title}
                      </h3>
                    </div>
                    <p className="text-arzir-gray-600 leading-relaxed">
                      {app.description}
                    </p>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={app.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Customer Pain Points & ARZIR Solutions */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Customer Challenges & ARZIR Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Professional solutions for waste management challenges with efficient and reliable complete solutions
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
              Why Choose ARZIR Vertical Balers
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Compared to traditional waste handling methods, ARZIR equipment offers significant advantages in efficiency, space utilization, and cost savings
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Comparison Item</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Vertical Baler</th>
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
              <p className="text-arzir-gray-600">Tailored equipment configurations based on specific business requirements</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Users className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Global Support</h3>
              <p className="text-arzir-gray-600">Professional technical service network covering 50+ countries</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center space-y-4">
              <Award className="h-12 w-12 text-arzir-primary mx-auto" />
              <h3 className="text-xl font-heading font-bold text-black">Quality Assurance</h3>
              <p className="text-arzir-gray-600">CE and ISO certified, meeting international quality standards</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Customer Case Studies */}
      <Section background="white" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Customer Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real customer cases demonstrating ARZIR equipment&apos;s exceptional performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-2 text-arzir-gray-600">
                      <span>📍</span>
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
                          <span className="text-arzir-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-l-4 border-arzir-primary">
                    <div className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-arzir-gray-700 italic">&ldquo;{study.testimonial}&rdquo;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Operation & Maintenance Guide */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Operation & Maintenance Guide
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Simple operation workflow from loading to compression to ejection, plus professional maintenance guidance
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
              Most common customer questions with professional detailed answers
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

      {/* Related Content Marketing */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Related Content
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Learn more about vertical baler technology and small business applications
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
        formSource="vertical_baler_bottom"
        title="Optimize Your Waste Management Operations"
        description="Transform your waste handling with space-saving vertical balers designed for small businesses. Achieve high-density bales while minimizing floor space requirements and operating costs."
      />
    </>
  );
}