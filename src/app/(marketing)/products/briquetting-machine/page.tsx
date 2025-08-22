import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Factory, Star, MapPin, Wrench, DollarSign, Gauge, Target, Cog } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Briquetting Machine | Metal Chip Briquetter | Swarf Compacting Press | ARZIR",
  description: "ARZIR Briquetting Machine - hydraulic press systems for metal chips, turnings, swarf compaction. Reduce volume by 90%, oil recovery 95-98%. Get quote today.",
  keywords: [
    "briquetting machine",
    "metal chip briquetter", 
    "swarf briquetting machine",
    "briquette press for recycling",
    "metal chip compacting",
    "aluminum chips briquetter",
    "steel swarf briquetting press",
    "copper chips briquetter"
  ],
  openGraph: {
    title: "Briquetting Machine | Metal Chip Briquetter | ARZIR",
    description: "Industrial briquetting machines for metal chips and turnings with 90% volume reduction, 95-98% oil recovery, and automated operation.",
    images: [
      {
        url: "/images/products/single/Briquetting Machine_.png",
        width: 1200,
        height: 630,
        alt: "ARZIR Briquetting Machine - Metal Chip Compaction System"
      }
    ]
  }
};


const technicalSpecs = [
  {
    model: "ARZIR BP-200",
    pressure: "200 tons",
    briquetteSize: "50 x 50 x 80mm",
    capacity: "300-500 kg/h",
    motorPower: "22 kW"
  },
  {
    model: "ARZIR BP-315", 
    pressure: "315 tons",
    briquetteSize: "60 x 60 x 100mm",
    capacity: "500-800 kg/h",
    motorPower: "37 kW"
  },
  {
    model: "ARZIR BP-500",
    pressure: "500 tons",
    briquetteSize: "80 x 80 x 120mm",
    capacity: "800-1200 kg/h",
    motorPower: "55 kW"
  },
  {
    model: "ARZIR BP-630",
    pressure: "630 tons",
    briquetteSize: "100 x 100 x 150mm",
    capacity: "1200-1800 kg/h",
    motorPower: "75 kW"
  }
];

const coreFeatures = [
  {
    icon: Gauge,
    title: "High-Pressure Hydraulic System",
    description: "Powerful hydraulic system compresses metal chips into high-density blocks with up to 630 tons of pressure",
    benefit: "Achieves 90% volume reduction consistently"
  },
  {
    icon: Cog,
    title: "Automated Feeding & Discharge",
    description: "Fully automated feeding system with continuous operation and automatic briquette discharge",
    benefit: "Reduces labor requirements and increases efficiency"
  },
  {
    icon: Settings,
    title: "Interchangeable Dies",
    description: "Replaceable dies support different briquette shapes and sizes for various application requirements",
    benefit: "Flexible production for different materials and customer needs"
  },
  {
    icon: Zap,
    title: "Oil Recovery Integration",
    description: "Built-in oil separation system recovers 95-98% of cutting fluids for reuse in machining operations",
    benefit: "Reduces waste disposal costs and environmental impact"
  },
  {
    icon: Shield,
    title: "Energy-Efficient Design",
    description: "Optimized hydraulic circuits and power management systems minimize energy consumption per ton",
    benefit: "Lower operating costs and environmental footprint"
  },
  {
    icon: Target,
    title: "Modular Construction",
    description: "Modular design allows easy maintenance access and component replacement for extended service life",
    benefit: "Reduced maintenance downtime and repair costs"
  }
];

const applications = [
  {
    title: "Metal Processing Factories",
    description: "Processing machining iron chips, steel turnings, aluminum swarf from CNC and turning operations",
    image: "🏭",
    href: "/applications/metal-fabrication",
    materials: ["Iron chips", "Steel turnings", "Aluminum swarf", "Machining waste"],
    capacity: "800-1800 kg/hour"
  },
  {
    title: "Automotive Component Manufacturing", 
    description: "Compacting turning waste and cutting chips from engine blocks and transmission components",
    image: "🚗",
    href: "/applications/automotive-aluminum",
    materials: ["Engine block chips", "Transmission turnings", "Aluminum components", "Steel machining waste"],
    capacity: "500-1200 kg/hour"
  },
  {
    title: "Aluminum & Copper Plants",
    description: "Processing aluminum chips and copper turnings for efficient recycling and remelting operations",
    image: "⚡",
    href: "/applications/non-ferrous-recycling",
    materials: ["Aluminum chips", "Copper turnings", "Brass swarf", "Non-ferrous waste"],
    capacity: "300-1000 kg/hour"
  },
  {
    title: "Steel Mills & Foundries",
    description: "Compacting iron powder and steel chips for efficient recycling and remelting in steel production",
    image: "🔥",
    href: "/applications/steel-mills",
    materials: ["Iron powder", "Steel chips", "Cast iron turnings", "Foundry waste"],
    capacity: "600-1500 kg/hour"
  }
];

const painPointsSolutions = [
  {
    painPoint: "Bulky waste materials occupy excessive factory floor space, reducing production efficiency",
    solution: "High-pressure hydraulic compression reduces volume by 90%, freeing up valuable floor space",
    benefit: "Dramatically improved space utilization and factory layout efficiency"
  },
  {
    painPoint: "High transportation costs and low recycling prices for loose metal chips and turnings",
    solution: "Dense briquettes increase transport efficiency and improve remelting value for steel mills",
    benefit: "Reduced transportation costs and higher scrap metal selling prices"
  },
  {
    painPoint: "Traditional compactors have low efficiency and frequent breakdowns with tough materials",
    solution: "Modular design with high-pressure hydraulic system handles tough materials reliably",
    benefit: "Higher throughput with reduced maintenance downtime and repair costs"
  }
];

const comparisonData = [
  {
    feature: "Volume Reduction",
    traditional: "Loose storage (0% reduction)",
    arzir: "90% volume reduction",
    advantage: "Massive space savings"
  },
  {
    feature: "Recovery Value",
    traditional: "Low scrap metal prices",
    arzir: "Premium remelting prices",
    advantage: "Higher revenue per ton"
  },
  {
    feature: "Energy Consumption",
    traditional: "High melting energy required",
    arzir: "30% less energy for remelting",
    advantage: "Reduced energy costs"
  },
  {
    feature: "Material Handling",
    traditional: "Manual handling required",
    arzir: "Automated feeding system",
    advantage: "Reduced labor requirements"
  },
  {
    feature: "Service Life",
    traditional: "Frequent equipment replacement",
    arzir: "10+ years operational life",
    advantage: "Lower total cost of ownership"
  }
];

const caseStudies = [
  {
    title: "European Metal Processing Plant",
    location: "Munich, Germany", 
    equipment: "ARZIR BP-500 Briquetting Machine",
    results: [
      "Reduced waste storage area by 80% through volume compaction",
      "Increased scrap metal revenue by 35% with premium briquette pricing",
      "Achieved 96% oil recovery rate, saving €50,000 annually in cutting fluids",
      "ROI realized within 18 months of installation"
    ],
    testimonial: "The ARZIR briquetting machine transformed our waste management. We now have valuable floor space back and much higher recycling revenue.",
    icon: Factory
  },
  {
    title: "Asian Automotive Parts Manufacturer",
    location: "Shanghai, China",
    equipment: "ARZIR BP-630 Briquetting Machine", 
    results: [
      "Processing 1500 kg/hour of turning waste from machining operations",
      "Steel chip recovery efficiency improved by 50% with dense briquettes",
      "Eliminated manual chip handling, reducing labor costs by 60%",
      "14-month payback period achieved through cost savings"
    ],
    testimonial: "Our machining waste is now a valuable resource instead of a disposal problem. The automation has greatly improved our operational efficiency.",
    icon: Settings
  }
];

const operationSteps = [
  {
    step: "Material Feeding",
    description: "Load metal chips and turnings into the automated feeding hopper system",
    duration: "Continuous",
    details: "Conveyor system handles various chip types with consistent feeding rates"
  },
  {
    step: "Hydraulic Compression", 
    description: "High-pressure hydraulic system compresses materials into dense briquettes",
    duration: "30-60 seconds",
    details: "Up to 630 tons of pressure creates high-density blocks for optimal melting"
  },
  {
    step: "Die Formation",
    description: "Interchangeable dies shape briquettes to customer specifications",
    duration: "Integrated process",
    details: "Various shapes and sizes available for different application requirements"
  },
  {
    step: "Automated Discharge",
    description: "Finished briquettes are automatically discharged from the press chamber",
    duration: "Continuous",
    details: "Integrated discharge system maintains continuous production flow"
  }
];

const maintenanceGuide = [
  {
    category: "Hydraulic System",
    tasks: ["Hydraulic fluid level check", "Filter replacement", "Pressure calibration", "Seal inspection"],
    frequency: "Weekly"
  },
  {
    category: "Dies & Tooling",
    tasks: ["Die wear inspection", "Die cleaning and lubrication", "Replacement scheduling", "Dimension verification"],
    frequency: "After each production run"
  },
  {
    category: "Oil Recovery System",
    tasks: ["Oil separator cleaning", "Recovery rate monitoring", "Filter maintenance", "Quality testing"],
    frequency: "Daily"
  }
];

const faqs = [
  {
    question: "What materials can be briquetted?",
    answer: "Our briquetting machines process aluminum chips, steel turnings, cast iron swarf, copper chips, and brass turnings from machining operations. Optimal chip size is 3-25mm for best results."
  },
  {
    question: "What is the price of a briquetting machine?",
    answer: "Pricing varies by model and configuration. The BP-200 ranges from $85,000-120,000, while the BP-630 ranges from $180,000-250,000. Contact us for detailed custom quotes based on your specific requirements."
  },
  {
    question: "What is the density of briquettes?",
    answer: "Briquette density ranges from 4-7 g/cm³ depending on material type and compression pressure. This high density significantly improves melting efficiency and transportation costs."
  },
  {
    question: "Difference between vertical and horizontal briquetting machines?",
    answer: "Vertical machines are more compact and suitable for smaller operations, while horizontal machines offer higher throughput and easier maintenance access. We recommend horizontal for industrial applications."
  },
  {
    question: "Do you provide installation and training?",
    answer: "Yes, we provide complete installation, commissioning, operator training, and maintenance support. Installation typically takes 2-3 weeks, followed by comprehensive training programs."
  }
];

export default function BriquettingMachinePage() {
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
                Metal Chip Processing Specialist
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Briquetting{" "}
                <span className="text-arzir-primary">Machine</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Hydraulic Press Systems for{" "}
                <span className="text-arzir-primary font-semibold">Metal Chips & Turnings Compaction</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Transform metal chips, turnings, and swarf into dense, handleable briquettes.{" "}
              <strong className="text-black">Reduce waste volume by 90% with integrated oil recovery systems.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">630T</div>
                <div className="text-sm text-arzir-gray-600">Max Pressure</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">90%</div>
                <div className="text-sm text-arzir-gray-600">Volume Reduction</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-arzir-gray-600">Oil Recovery</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="briquetting_machine_hero">
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
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/products/single/Briquetting Machine_.png"
                alt="ARZIR Briquetting Machine - Metal Chip Compaction System"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              98% Oil Recovery
            </div>
            <div className="absolute -top-4 -left-4 bg-arzir-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              630T Pressure
            </div>
          </div>
        </div>
      </Section>

      {/* Product Introduction */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Advanced Briquetting Technology
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-4xl mx-auto leading-relaxed">
              ARZIR Briquetting Machines utilize high-pressure hydraulic systems to compress metal chips, 
              turnings, and swarf into dense blocks, reducing waste volume by up to 90% while recovering 
              valuable cutting fluids for reuse in manufacturing operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Factory className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Space Savings</h3>
              <p className="text-arzir-gray-600">Reduce storage requirements by 90%</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Oil Recovery</h3>
              <p className="text-arzir-gray-600">Recover up to 98% of cutting fluids</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-black">Value Recovery</h3>
              <p className="text-arzir-gray-600">Higher scrap metal selling prices</p>
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
              Comprehensive range of models to meet various processing requirements
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="p-4 text-left font-bold text-black">Model</th>
                  <th className="p-4 text-left font-bold text-black">Pressure (tons)</th>
                  <th className="p-4 text-left font-bold text-black">Briquette Size (mm)</th>
                  <th className="p-4 text-left font-bold text-black">Capacity (kg/h)</th>
                  <th className="p-4 text-left font-bold text-black">Motor Power</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, index) => (
                  <tr key={spec.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-arzir-primary">{spec.model}</td>
                    <td className="border border-arzir-gray-200 p-4">{spec.pressure}</td>
                    <td className="border border-arzir-gray-200 p-4">{spec.briquetteSize}</td>
                    <td className="border border-arzir-gray-200 p-4">{spec.capacity}</td>
                    <td className="border border-arzir-gray-200 p-4">{spec.motorPower}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Applications - Based on Car Body Baler Design */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Application Scenarios
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Widely used in metal processing, automotive manufacturing, and recycling industries
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
                      <div className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium w-fit">
                        {app.capacity}
                      </div>
                    </div>
                    <p className="text-arzir-gray-600 leading-relaxed">
                      {app.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-black">Typical Materials:</h4>
                      <div className="flex flex-wrap gap-1">
                        {app.materials.map((material, i) => (
                          <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-xs">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
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
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Customer Challenges & ARZIR Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Professional solutions for metal waste processing challenges with efficient and reliable systems
            </p>
          </div>
          
          <div className="space-y-8">
            {painPointsSolutions.map((item, index) => (
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
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Why Choose ARZIR Briquetting Machines
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Compared to traditional waste handling methods, ARZIR equipment offers significant advantages in efficiency, value recovery, and operational costs
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-arzir-gray-200">
                  <th className="p-4 text-left font-bold text-black text-lg">Feature</th>
                  <th className="p-4 text-center font-bold text-red-600 text-lg">Traditional Methods</th>
                  <th className="p-4 text-center font-bold text-arzir-primary text-lg">ARZIR Briquetting</th>
                  <th className="p-4 text-center font-bold text-green-600 text-lg">ARZIR Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-arzir-gray-25" : "bg-white"}>
                    <td className="p-4 font-semibold text-black">{item.feature}</td>
                    <td className="p-4 text-center">{item.traditional}</td>
                    <td className="p-4 text-center font-bold text-arzir-primary">{item.arzir}</td>
                    <td className="p-4 text-center font-medium text-green-600">{item.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Real-world results from our briquetting machine installations worldwide
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
              Simple operation process with comprehensive maintenance support
            </p>
          </div>
          
          {/* Operation Steps */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-black mb-6">Briquetting Process</h3>
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
              Common questions about briquetting machines and our solutions
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

      {/* Related Resources */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Related Resources
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive guides and technical insights for metal waste processing and briquetting solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-black">
                  Metal Chip Processing Guide
                </h3>
                <p className="text-arzir-gray-600 leading-relaxed">
                  Complete technical guide covering metal chip types, processing methods, and optimization strategies for maximum recovery value.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/metal-chip-processing-guide">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-black">
                  Hydraulic Press Optimization
                </h3>
                <p className="text-arzir-gray-600 leading-relaxed">
                  Expert techniques for maximizing hydraulic press efficiency, pressure optimization, and maintenance best practices for industrial applications.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/hydraulic-press-optimization">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-black">
                  Metal Recycling ROI Calculator
                </h3>
                <p className="text-arzir-gray-600 leading-relaxed">
                  Interactive calculator to determine potential cost savings, ROI projections, and payback periods for metal waste processing equipment.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/metal-recycling-roi-calculator">
                    Use Calculator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/resources">
                View All Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Product CTA */}
      <ProductCTA 
        title="Ready to Transform Your Metal Waste Management?"
        description="Get expert consultation and custom quotes for ARZIR Briquetting Machines tailored to your specific processing requirements."
        formSource="briquetting_machine_bottom_cta"
      />
    </>
  );
}