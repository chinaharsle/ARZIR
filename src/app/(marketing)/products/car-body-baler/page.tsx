import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Star, Users, Truck, Factory } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Body Baler | Scrap Car Baler | Auto Body Baling Machine",
  description: "ARZIR Car Body Baler - specialized equipment for end-of-life vehicle recycling. Process 20-40 cars/day with 600-1500T force. Mobile & stationary models available. Get quote today.",
  keywords: [
    "car body baler",
    "scrap car baler", 
    "auto body baling machine",
    "car crusher baler",
    "end-of-life vehicle recycling",
    "ELV processing equipment",
    "ARZIR car baler"
  ],
  openGraph: {
    title: "Car Body Baler | Scrap Car Baler | ELV Processing Equipment",
    description: "Specialized car body balers for efficient end-of-life vehicle processing. 600-1500T force, process 20-40 cars/day, mobile & stationary options.",
    images: [
      {
        url: "/images/products/recycling-baler.webp",
        width: 1200,
        height: 630,
        alt: "ARZIR Car Body Baler - End-of-Life Vehicle Processing Equipment"
      }
    ]
  }
};

const technicalSpecs = [
  {
    model: "ARZIR CB-600",
    pressForce: "600 tons",
    chamberSize: "4.5 x 2.0 x 1.8m",
    baleSize: "1.2 x 1.2 x 1.6m",
    capacity: "15-20 cars/day",
    totalPower: "90 kW"
  },
  {
    model: "ARZIR CB-1000", 
    pressForce: "1000 tons",
    chamberSize: "5.0 x 2.2 x 2.0m",
    baleSize: "1.3 x 1.3 x 1.8m",
    capacity: "25-30 cars/day",
    totalPower: "132 kW"
  },
  {
    model: "ARZIR CB-1500",
    pressForce: "1500 tons",
    chamberSize: "5.5 x 2.5 x 2.2m",
    baleSize: "1.4 x 1.4 x 2.0m",
    capacity: "35-40 cars/day",
    totalPower: "200 kW"
  }
];

const coreFeatures = [
  {
    icon: Zap,
    title: "Powerful Hydraulic System",
    description: "600-1500T compression force handles complete vehicles, frames, engine components, and body panels efficiently",
    benefit: "Process entire vehicles with maximum density"
  },
  {
    icon: Settings,
    title: "Multi-Vehicle Capability", 
    description: "Designed to handle passenger cars, SUVs, light trucks, and various vehicle sizes with optimized compression chamber",
    benefit: "Flexible processing for different vehicle types"
  },
  {
    icon: Shield,
    title: "Fast Compression Cycle",
    description: "60-120 second compression cycles with automated systems significantly boost daily processing capacity",
    benefit: "Process 20-40 vehicles per day efficiently"
  }
];

const keyAdvantages = [
  {
    icon: "💰",
    title: "Reduce Transport Costs",
    description: "80% volume reduction after compression dramatically lowers transportation and storage expenses",
    metric: "80% Volume Reduction"
  },
  {
    icon: "🚛", 
    title: "Mobile Version Available",
    description: "Mobile units support on-site operations with flexible recycling capabilities for various work environments",
    metric: "On-Site Processing"
  },
  {
    icon: "🔧",
    title: "Simple Operation & Maintenance",
    description: "Fully automated control system with easy operation and maintenance, reducing labor costs significantly",
    metric: "50% Labor Reduction"
  }
];

const applications = [
  {
    title: "Auto Recycling Centers",
    description: "Large-scale ELV processing facilities for complete vehicle dismantling and recycling operations",
    image: "🏭",
    href: "/applications/automotive-dismantling",
    keywords: "car baler for recycling, scrap auto body baler"
  },
  {
    title: "Scrap Steel Processing",
    description: "Vehicle frame and metal component compression providing high-quality raw materials for steel mills",
    image: "⚡",
    href: "/applications/scrap-recycling", 
    keywords: "scrap vehicle recycling"
  },
  {
    title: "Large Recycling Centers",
    description: "Industrial-scale metal processing facilities for high-volume scrap metal operations",
    image: "🔄",
    href: "/applications/metal-recycling",
    keywords: "large metal recycling centers"
  },
  {
    title: "Export Trading",
    description: "Compressed vehicle bales save container shipping space and improve export logistics efficiency",
    image: "🚢",
    href: "/applications/export-trading",
    keywords: "compressed car bales for export"
  }
];

const painPointSolutions = [
  {
    painPoint: "Large vehicle size creates transport challenges",
    solution: "High-pressure hydraulic compression reduces volume by 80%",
    benefit: "Dramatically lower transportation costs"
  },
  {
    painPoint: "Excessive storage space requirements",
    solution: "Compressed into standard stackable bales",
    benefit: "Save 80% storage space"
  },
  {
    painPoint: "Low efficiency manual dismantling",
    solution: "Fully automated control with rapid processing",
    benefit: "300% efficiency improvement"
  }
];

const comparisonData = [
  {
    feature: "Press Force",
    arzir: "600-1500T",
    competitors: "300-800T",
    advantage: "Superior compression power"
  },
  {
    feature: "Processing Capacity", 
    arzir: "20-40 cars/day",
    competitors: "10-20 cars/day",
    advantage: "Double processing efficiency"
  },
  {
    feature: "Service Life",
    arzir: "15-20 years",
    competitors: "8-12 years",
    advantage: "Extended operational lifespan"
  },
  {
    feature: "Energy Consumption",
    arzir: "90-200kW",
    competitors: "120-250kW",
    advantage: "Lower energy consumption"
  }
];

const caseStudies = [
  {
    title: "Brazilian Auto Recycling Facility",
    location: "São Paulo, Brazil",
    equipment: "ARZIR CB-1000 Car Body Baler",
    results: [
      "Daily processing capacity increased from 15 to 30 vehicles",
      "Transportation costs reduced by 60%",
      "Investment payback achieved in 18 months"
    ],
    testimonial: "ARZIR equipment significantly improved our processing efficiency with very fast ROI."
  },
  {
    title: "European ELV Processing Center",
    location: "Hamburg, Germany", 
    equipment: "ARZIR CB-1500 Mobile Car Baler",
    results: [
      "On-site processing capacity of 40 vehicles/day",
      "Storage space requirements reduced by 75%",
      "Labor costs decreased by 50%"
    ],
    testimonial: "The mobile unit allows us to flexibly process vehicles at multiple collection points."
  }
];

const operationSteps = [
  {
    step: "Vehicle Preparation",
    description: "Drain fluids, remove batteries and hazardous materials",
    duration: "15-20 minutes",
    details: "Includes oil, coolant, fuel drainage to ensure safe processing"
  },
  {
    step: "Vehicle Loading",
    description: "Use crane or loader to position vehicle body in compression chamber",
    duration: "5-8 minutes", 
    details: "Precise positioning ensures optimal compression and equipment safety"
  },
  {
    step: "Hydraulic Compression",
    description: "Activate hydraulic system for high-pressure compression",
    duration: "60-120 seconds",
    details: "Adjust compression parameters based on vehicle type and target density"
  },
  {
    step: "Bale Ejection & Tying",
    description: "Complete compression, tie bale and eject finished product",
    duration: "8-12 minutes",
    details: "Automated tying system ensures bale stability"
  }
];

const maintenanceGuide = [
  {
    category: "Daily Maintenance",
    tasks: ["Hydraulic oil level check", "Lubrication points service", "Equipment cleaning"],
    frequency: "Daily"
  },
  {
    category: "Regular Service",
    tasks: ["Filter replacement", "Hydraulic system inspection", "Safety device testing"],
    frequency: "Monthly"
  },
  {
    category: "Major Overhaul", 
    tasks: ["Hydraulic oil change", "Seal replacement", "Electrical system service"],
    frequency: "Annually"
  }
];

const faqs = [
  {
    question: "What is the car body baler price range?",
    answer: "Pricing varies by model and configuration. The 600T model ranges from $180,000-220,000, while the 1500T model ranges from $350,000-450,000. Contact us for detailed custom quotes."
  },
  {
    question: "How many cars can it process per hour?",
    answer: "Depending on vehicle type and operator experience, 2-4 vehicles can be processed per hour. Daily capacity ranges from 20-40 vehicles based on equipment model and operating hours."
  },
  {
    question: "What's the difference between mobile vs stationary car balers?",
    answer: "Mobile units provide on-site processing for multi-location collection, while stationary units offer higher capacity for large recycling facilities. Mobile units typically cost 15-20% more than stationary models."
  },
  {
    question: "What is the typical delivery time?",
    answer: "Standard models have 12-16 week delivery times, while custom configurations require 18-24 weeks. We prioritize production scheduling based on your urgency requirements."
  },
  {
    question: "What installation and training support is included?",
    answer: "Complete on-site installation, commissioning, operator training, and maintenance guidance are included. Training typically takes 3-5 days to ensure operators fully master equipment operation."
  }
];

const relatedContent = [
  {
    title: "How Car Body Balers Transform Vehicle Recycling",
    description: "Discover how car body balers are revolutionizing the automotive recycling industry",
    href: "/blog/car-body-balers-transform-recycling"
  },
  {
    title: "Car Baler vs Car Shredder: Which to Choose?",
    description: "Detailed comparison of car body balers and shredders with application scenarios",
    href: "/blog/car-baler-vs-car-shredder"
  }
];

export default function CarBodyBalerPage() {
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
                ELV Processing Specialist
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Car Body{" "}
                <span className="text-arzir-primary">Baler</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Specialized Equipment for{" "}
                <span className="text-arzir-primary font-semibold">End-of-Life Vehicle Processing</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Designed for auto recycling centers and metal facilities.{" "}
              <strong className="text-black">Powerful hydraulic systems compress complete vehicles efficiently.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">1500T</div>
                <div className="text-sm text-arzir-gray-600">Max Press Force</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">40/day</div>
                <div className="text-sm text-arzir-gray-600">Vehicle Capacity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">80%</div>
                <div className="text-sm text-arzir-gray-600">Volume Reduction</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="car_body_baler_hero">
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
                src="/images/products/single/Car Body Baler.webp"
                alt="ARZIR Car Body Baler - End-of-Life Vehicle Processing Equipment"
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
              Industry Leader
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Professional Car Body Compression Solutions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-arzir-gray-600">
              <p>
                The ARZIR Car Body Baler is specifically designed for complete end-of-life vehicle compression, 
                serving auto recycling centers, scrap steel processing facilities, and large-scale metal recycling operations.
                Our powerful hydraulic systems enable efficient processing of entire vehicles.
              </p>
              <p>
                The equipment handles vehicle frames, engine components, body panels, and various automotive parts, 
                compressing them into high-density bales that solve the challenges of large vehicle volumes, 
                transportation difficulties, and excessive storage space requirements.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Auto Recycling Centers</h3>
              <p className="text-arzir-gray-600">Complete vehicle recycling with improved processing efficiency</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Scrap Steel Processing</h3>
              <p className="text-arzir-gray-600">Efficient compression of vehicle frames and metal components</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Recycling Centers</h3>
              <p className="text-arzir-gray-600">On-site rapid processing for cost savings and efficiency</p>
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
              Powerful hydraulic systems, rapid compression, cost savings, and simple operation
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
              Three models to meet different processing capacity requirements with complete technical parameters
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Car Body Baler Technical Specifications</caption>
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
              Widely used in automotive recycling, scrap steel processing, export trading and other industries
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
              Professional solutions for vehicle processing challenges with efficient and reliable complete solutions
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
              Why Choose ARZIR Car Balers
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Compared to standard car balers, ARZIR equipment offers significant advantages in performance, efficiency, and lifespan
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Comparison Item</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Car Baler</th>
                  <th className="p-4 text-center font-bold text-arzir-gray-600 text-lg">Standard Car Baler</th>
                  <th className="p-4 text-center font-bold text-green-600 text-lg">ARZIR Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-arzir-gray-25" : "bg-white"}>
                    <td className="p-4 font-semibold text-black">{item.feature}</td>
                    <td className="p-4 text-center font-bold text-arzir-primary">{item.arzir}</td>
                    <td className="p-4 text-center text-arzir-gray-600">{item.competitors}</td>
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
              <p className="text-arzir-gray-600">Personalized equipment configurations based on customer requirements</p>
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
          
          {/* Case Studies */}
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
              Complete operational workflow from loading to compression to ejection, plus professional maintenance guidance
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
      <Section background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Related Content
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Learn more about car body baler technology and industry applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedContent.map((content, index) => (
              <div key={index} className="bg-gradient-to-br from-arzir-gray-50 to-blue-50 p-8 rounded-2xl border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
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
        formSource="car_body_baler_bottom"
        title="Transform Your ELV Processing Operations"
        description="Maximize value from end-of-life vehicles with our specialized car body balers. Achieve higher bale densities, reduce transport costs, and process 20-40 vehicles per day with robust compression chambers designed for automotive recycling."
      />
    </>
  );
}