import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Shredders - Single, Double & Four-Shaft Metal Processing",
  description: "High-performance industrial shredders for metal and waste processing. Single-shaft, double-shaft, and four-shaft shredders with superior throughput capacity. 1-50 tons/hour processing.",
};

const products = [
  {
    title: "Single-Shaft Shredder",
    description: "Versatile single-shaft design for mixed material processing with excellent flexibility and efficiency.",
    href: "/products/single-shaft-shredder",
    image: "/images/products/single/single-shaft-shredder.webp",
    alt: "Single-Shaft Shredder for versatile processing"
  },
  {
    title: "Double-Shaft Shredder",
    description: "Dual-shaft configuration for enhanced processing capacity and consistent output quality.",
    href: "/products/double-shaft-shredder",
    image: "/images/products/single/double-shaft shredder.webp",
    alt: "Double-Shaft Shredder for high capacity"
  },
  {
    title: "Four-Shaft Shredder",
    description: "Multi-shaft design for fine size reduction and uniform output with precision control.",
    href: "/products/four-shaft-shredder",
    image: "/images/products/single/four-shaft shredder.webp",
    alt: "Four-Shaft Shredder for fine processing"
  }
];

export default function ShredderPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Industrial Shredders
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Powerful shredders engineered for metal, e-waste, and mixed material processing with precision size reduction and maximum throughput efficiency.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                1-50 tons/hour
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                200-2000 kW
              </div>
            </div>
            <QuoteDialog source="shredder_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/products/single/shredder.webp"
                alt="ARZIR Industrial Shredders - Advanced Size Reduction Equipment"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Category Introduction */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-arzir-gray-600 leading-relaxed">
            ARZIR industrial shredders process 1-50 tons per hour of metals, e-waste, automotive materials, and mixed scrap. 
            Our comprehensive shredder range serves recycling facilities, automotive dismantling operations, electronics recycling centers, and waste management companies. 
            Each model delivers precise size reduction with advanced cutting technology and superior durability for continuous operation.
          </p>
        </div>
      </Section>

      {/* Product Grid */}
      <Section background="gray" size="xl">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Shredder Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.title} className="group h-full">
                <Link href={product.href}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-arzir-gray-100 overflow-hidden h-full flex flex-col">
                    {/* Product Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-50 to-arzir-gray-100 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6 space-y-3 flex-1 flex flex-col">
                      <h3 className="text-lg font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-sm text-arzir-gray-600 leading-relaxed flex-1">
                        {product.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full mt-auto">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Working Principle */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              How Does an Industrial Shredder Work?
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Understanding the shredding process and size reduction system operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Material Feeding</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Materials are fed into the shredder chamber via conveyor belt, crane, or direct loading with controlled feeding rates.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Cutting Action</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Rotating shafts with cutting tools engage material, applying tearing and cutting forces to break down large pieces into smaller fragments.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Size Control</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Screen plates or discharge openings control final output size, ensuring consistent particle dimensions for downstream processing.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Material Discharge</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Processed material is discharged via conveyor system, ready for separation processes or further size reduction if required.
                </p>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-arzir-gray-50 to-arzir-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🔄</div>
                <p className="text-arzir-gray-600 font-medium">Mechanical Shredding Process</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Parameters & Models */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Technical Parameters & Models
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Industrial shredder specifications and processing capacity comparison
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <caption className="sr-only">Shredder machine models comparison with specifications</caption>
              <thead>
                <tr className="bg-arzir-primary text-white">
                  <th className="p-4 text-left font-semibold">Model</th>
                  <th className="p-4 text-left font-semibold">Power Range</th>
                  <th className="p-4 text-left font-semibold">Throughput</th>
                  <th className="p-4 text-left font-semibold">Output Size</th>
                  <th className="p-4 text-left font-semibold">Rotor Speed</th>
                  <th className="p-4 text-left font-semibold">Best Application</th>
                  <th className="p-4 text-left font-semibold">Chamber Size</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Single-Shaft SS-500</td>
                  <td className="p-4 text-arzir-gray-700">200-500kW</td>
                  <td className="p-4 text-arzir-gray-700">1-8 t/h</td>
                  <td className="p-4 text-arzir-gray-700">50-300mm</td>
                  <td className="p-4 text-arzir-gray-700">15-25 rpm</td>
                  <td className="p-4 text-arzir-gray-700">E-waste, mixed materials</td>
                  <td className="p-4 text-arzir-gray-700">1200×800mm</td>
                </tr>
                <tr className="bg-arzir-gray-25 border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Single-Shaft SS-800</td>
                  <td className="p-4 text-arzir-gray-700">400-800kW</td>
                  <td className="p-4 text-arzir-gray-700">3-15 t/h</td>
                  <td className="p-4 text-arzir-gray-700">30-200mm</td>
                  <td className="p-4 text-arzir-gray-700">12-20 rpm</td>
                  <td className="p-4 text-arzir-gray-700">Automotive, bulky waste</td>
                  <td className="p-4 text-arzir-gray-700">1800×1200mm</td>
                </tr>
                <tr className="border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Double-Shaft DS-1000</td>
                  <td className="p-4 text-arzir-gray-700">500-1000kW</td>
                  <td className="p-4 text-arzir-gray-700">5-25 t/h</td>
                  <td className="p-4 text-arzir-gray-700">25-150mm</td>
                  <td className="p-4 text-arzir-gray-700">20-40 rpm</td>
                  <td className="p-4 text-arzir-gray-700">Metal scrap, industrial waste</td>
                  <td className="p-4 text-arzir-gray-700">2000×1500mm</td>
                </tr>
                <tr className="bg-arzir-gray-25 border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Double-Shaft DS-1500</td>
                  <td className="p-4 text-arzir-gray-700">800-1500kW</td>
                  <td className="p-4 text-arzir-gray-700">10-30 t/h</td>
                  <td className="p-4 text-arzir-gray-700">20-100mm</td>
                  <td className="p-4 text-arzir-gray-700">15-35 rpm</td>
                  <td className="p-4 text-arzir-gray-700">High volume operations</td>
                  <td className="p-4 text-arzir-gray-700">2500×2000mm</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-black">Four-Shaft FS-2000</td>
                  <td className="p-4 text-arzir-gray-700">1000-2000kW</td>
                  <td className="p-4 text-arzir-gray-700">15-50 t/h</td>
                  <td className="p-4 text-arzir-gray-700">10-80mm</td>
                  <td className="p-4 text-arzir-gray-700">25-50 rpm</td>
                  <td className="p-4 text-arzir-gray-700">Fine sizing, uniform output</td>
                  <td className="p-4 text-arzir-gray-700">3000×2500mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Materials Compatibility */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Materials Compatibility
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive material processing capabilities for industrial shredder applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🔌</div>
              <h3 className="text-lg font-heading font-semibold text-black">E-Waste</h3>
              <p className="text-sm text-arzir-gray-600">Circuit boards, computers, phones, appliances, cables, electronic components</p>
              <div className="text-xs text-arzir-primary font-medium">Output: 10-100mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🚗</div>
              <h3 className="text-lg font-heading font-semibold text-black">Automotive</h3>
              <p className="text-sm text-arzir-gray-600">Car bodies, engines, transmissions, bumpers, dashboards, mixed auto parts</p>
              <div className="text-xs text-arzir-primary font-medium">Output: 30-200mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🔩</div>
              <h3 className="text-lg font-heading font-semibold text-black">Mixed Metal Scrap</h3>
              <p className="text-sm text-arzir-gray-600">Steel, aluminum, copper, brass, mixed ferrous and non-ferrous materials</p>
              <div className="text-xs text-arzir-primary font-medium">Output: 25-150mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🏠</div>
              <h3 className="text-lg font-heading font-semibold text-black">White Goods</h3>
              <p className="text-sm text-arzir-gray-600">Refrigerators, washing machines, dryers, air conditioners, large appliances</p>
              <div className="text-xs text-arzir-primary font-medium">Output: 50-300mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🛞</div>
              <h3 className="text-lg font-heading font-semibold text-black">Tires & Rubber</h3>
              <p className="text-sm text-arzir-gray-600">Truck tires, car tires, rubber products, conveyor belts, hoses</p>
              <div className="text-xs text-arzir-primary font-medium">Output: 20-100mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🛢️</div>
              <h3 className="text-lg font-heading font-semibold text-black">Industrial Waste</h3>
              <p className="text-sm text-arzir-gray-600">Manufacturing waste, packaging materials, production offcuts, mixed waste</p>
              <div className="text-xs text-arzir-primary font-medium">Output: 30-200mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🧱</div>
              <h3 className="text-lg font-heading font-semibold text-black">Construction Materials</h3>
              <p className="text-sm text-arzir-gray-600">Wood, drywall, insulation, composite materials, building debris</p>
              <div className="text-xs text-arzir-primary font-medium">Output: 50-300mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">♻️</div>
              <h3 className="text-lg font-heading font-semibold text-black">Plastic Materials</h3>
              <p className="text-sm text-arzir-gray-600">Plastic containers, films, pipes, automotive plastics, mixed polymers</p>
              <div className="text-xs text-arzir-primary font-medium">Output: 15-80mm</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Cost & ROI */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Cost & ROI Analysis
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Understanding industrial shredder cost and ROI for recycling business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">Cost Savings</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">↓</div>
                  <div>
                    <h4 className="font-semibold text-black">Processing Volume Increase</h4>
                    <p className="text-arzir-gray-600 text-sm">5-15x throughput improvement compared to manual disassembly and cutting</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">↓</div>
                  <div>
                    <h4 className="font-semibold text-black">Material Liberation</h4>
                    <p className="text-arzir-gray-600 text-sm">Improved separation efficiency increases value recovery by 20-40%</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">↓</div>
                  <div>
                    <h4 className="font-semibold text-black">Labor Cost Reduction</h4>
                    <p className="text-arzir-gray-600 text-sm">80% reduction in manual processing labor requirements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
              <h3 className="text-xl font-heading font-semibold text-black mb-6">Investment Payback</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-arzir-gray-600">Small Operations (1-8 tons/day)</span>
                  <span className="font-semibold text-black">12-18 months</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-arzir-gray-600">Medium Operations (10-25 tons/day)</span>
                  <span className="font-semibold text-black">8-14 months</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-arzir-gray-600">Large Operations (30+ tons/day)</span>
                  <span className="font-semibold text-black">6-12 months</span>
                </div>
                
                <div className="border-t border-arzir-gray-200 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-arzir-primary">25-45%</div>
                    <div className="text-sm text-arzir-gray-600">Annual ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Installation & Maintenance */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Installation & Maintenance
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Industrial shredder installation guide and maintenance tips for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">Installation Requirements</h3>
              
              <div className="space-y-4">
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Installation Time</h4>
                  <p className="text-arzir-gray-600 text-sm">5-10 days depending on shredder size and auxiliary equipment</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Space Requirements</h4>
                  <p className="text-arzir-gray-600 text-sm">Minimum 15m x 20m footprint plus 8m clearance for material handling</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Power Requirements</h4>
                  <p className="text-arzir-gray-600 text-sm">380V/50Hz, 200-2000kW depending on model and configuration</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Foundation</h4>
                  <p className="text-arzir-gray-600 text-sm">Reinforced concrete foundation, 1.5-3.0m deep with vibration isolation</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">Maintenance Schedule</h3>
              
              <div className="space-y-4">
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Daily Checks</h4>
                    <span className="text-xs bg-arzir-primary text-white px-2 py-1 rounded">CRITICAL</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Cutting tool inspection, lubrication levels, bearing temperatures, safety systems</p>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Weekly Maintenance</h4>
                    <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">IMPORTANT</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Tool wear assessment, screen condition, belt tension, electrical connections</p>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Monthly Service</h4>
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">ROUTINE</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Cutting tool replacement, bearing lubrication, drive system service</p>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Annual Overhaul</h4>
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">PLANNED</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Complete drive system overhaul, rotor rebuilding, structural inspection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies / Application Stories */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Case Studies & Application Stories
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Real-world applications from e-waste recycling to automotive dismantling and mixed material processing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-4xl">🔌</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">E-Waste Facility</h3>
                <p className="text-sm text-arzir-gray-600">USA - Processing 25 tons/day of electronics with four-shaft shredder</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+300% recovery</span>
                  <span className="text-green-600 font-medium">ROI: 9 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-4xl">🚗</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Auto Recycling</h3>
                <p className="text-sm text-arzir-gray-600">Germany - Double-shaft shredder for 150 vehicles/month processing</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+250% throughput</span>
                  <span className="text-green-600 font-medium">ROI: 11 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center">
                <div className="text-4xl">♻️</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Mixed Waste Plant</h3>
                <p className="text-sm text-arzir-gray-600">UK - Single-shaft processing of industrial and commercial waste</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+180% efficiency</span>
                  <span className="text-green-600 font-medium">ROI: 13 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <div className="text-4xl">🏠</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Appliance Recycling</h3>
                <p className="text-sm text-arzir-gray-600">Australia - White goods processing with specialized shredder systems</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+200% liberation</span>
                  <span className="text-green-600 font-medium">ROI: 10 months</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-arzir-gray-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-arzir-primary">1200+</div>
                <div className="text-sm text-arzir-gray-600">Installations Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-arzir-primary">92%</div>
                <div className="text-sm text-arzir-gray-600">Average Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-arzir-primary">11mo</div>
                <div className="text-sm text-arzir-gray-600">Average ROI Period</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison with Alternatives */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Comparison with Alternatives
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Shredder vs crusher, single vs multi-shaft systems, and mechanical vs hydraulic processing analysis
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
              <h3 className="text-2xl font-heading font-semibold text-black mb-6">Shredder vs Crusher</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-arzir-gray-200">
                      <th className="p-4 text-left font-semibold text-black">Aspect</th>
                      <th className="p-4 text-left font-semibold text-arzir-primary">Industrial Shredder</th>
                      <th className="p-4 text-left font-semibold text-arzir-gray-600">Crusher</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Action Type</td>
                      <td className="p-4 text-arzir-gray-700">Cutting and tearing</td>
                      <td className="p-4 text-arzir-gray-700">Compression and impact</td>
                    </tr>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Material Handling</td>
                      <td className="p-4 text-arzir-gray-700">Mixed materials, complex shapes</td>
                      <td className="p-4 text-arzir-gray-700">Brittle materials, simple shapes</td>
                    </tr>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Output Control</td>
                      <td className="p-4 text-arzir-gray-700">Precise size control</td>
                      <td className="p-4 text-arzir-gray-700">Variable output sizes</td>
                    </tr>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Contamination Tolerance</td>
                      <td className="p-4 text-arzir-gray-700">High tolerance</td>
                      <td className="p-4 text-arzir-gray-700">Low tolerance</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-black">Best For</td>
                      <td className="p-4 text-arzir-gray-700">Recycling, waste processing</td>
                      <td className="p-4 text-arzir-gray-700">Mining, aggregate production</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
                <h3 className="text-xl font-heading font-semibold text-black mb-6">Single vs Multi-Shaft</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Processing Speed</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Single: Moderate</span>
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Multi: High</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Output Uniformity</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Single: Variable</span>
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Multi: Consistent</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Maintenance</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Single: Lower</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Multi: Higher</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Initial Investment</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Single: Lower</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Multi: Higher</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
                <h3 className="text-xl font-heading font-semibold text-black mb-6">Processing Comparison</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Material Liberation</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">Excellent</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Throughput Rate</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">1-50 t/h</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Size Reduction Ratio</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">5:1 to 20:1</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Energy Efficiency</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">15-40 kWh/t</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Buying Guide */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Buying Guide
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              How to choose an industrial shredder and find the best size reduction solution for your operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-black">Selection Criteria</h3>
              
              <div className="space-y-6">
                <div className="border border-arzir-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-black mb-3">1. Material Type Assessment</h4>
                  <div className="space-y-2 text-sm text-arzir-gray-600">
                    <p>• <strong>E-waste & electronics:</strong> Single or four-shaft shredders</p>
                    <p>• <strong>Automotive materials:</strong> Double-shaft shredders</p>
                    <p>• <strong>Mixed materials:</strong> Single-shaft versatile systems</p>
                    <p>• <strong>Fine sizing needs:</strong> Four-shaft precision systems</p>
                  </div>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-black mb-3">2. Throughput Requirements</h4>
                  <div className="space-y-2 text-sm text-arzir-gray-600">
                    <p>• <strong>1-8 tons/hour:</strong> Single-shaft SS-500 series</p>
                    <p>• <strong>5-25 tons/hour:</strong> Double-shaft DS-1000 series</p>
                    <p>• <strong>15-50 tons/hour:</strong> Four-shaft FS-2000 series</p>
                    <p>• <strong>Custom volumes:</strong> Engineered solutions available</p>
                  </div>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-black mb-3">3. Site & Infrastructure</h4>
                  <div className="space-y-2 text-sm text-arzir-gray-600">
                    <p>• Minimum 15m x 20m + 8m clearance</p>
                    <p>• Concrete foundation depth: 1.5-3.0m</p>
                    <p>• Power supply: 380V/50Hz, 200-2000kW</p>
                    <p>• Dust collection and noise control systems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-black">Common Questions</h3>
              
              <div className="space-y-4">
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">How do I choose between single and double-shaft shredders?</h4>
                  <p className="text-arzir-gray-600 text-sm">Single-shaft shredders offer versatility and lower maintenance for mixed materials. Double-shaft provides higher throughput and better control for consistent output size.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">What power requirements should I expect?</h4>
                  <p className="text-arzir-gray-600 text-sm">Power consumption depends on material type and throughput. Typical range is 15-40 kWh per ton processed. Harder materials and finer output require more power.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">How often do cutting tools need replacement?</h4>
                  <p className="text-arzir-gray-600 text-sm">Tool life varies by material: 500-2000 tons for abrasive materials, 1000-5000 tons for clean metals. Regular maintenance extends tool life significantly.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Can shredders handle contaminated materials?</h4>
                  <p className="text-arzir-gray-600 text-sm">Yes, shredders process contaminated scrap, but excessive dirt, concrete, or non-metallic materials will increase wear and reduce efficiency.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">What size reduction ratios are achievable?</h4>
                  <p className="text-arzir-gray-600 text-sm">Typical reduction ratios range from 5:1 to 20:1 depending on input material and shredder configuration. Multiple-pass processing can achieve higher ratios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Safety Standards & Certifications */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Safety Standards & Certifications
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              CE certified industrial shredders with comprehensive safety standards and protection systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">International Certifications</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl text-center space-y-3 border border-arzir-gray-200">
                  <div className="text-3xl">🇪🇺</div>
                  <h4 className="font-semibold text-black">CE Marking</h4>
                  <p className="text-xs text-arzir-gray-600">European Conformity</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl text-center space-y-3 border border-arzir-gray-200">
                  <div className="text-3xl">📋</div>
                  <h4 className="font-semibold text-black">ISO 9001</h4>
                  <p className="text-xs text-arzir-gray-600">Quality Management</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl text-center space-y-3 border border-arzir-gray-200">
                  <div className="text-3xl">🔒</div>
                  <h4 className="font-semibold text-black">ISO 14001</h4>
                  <p className="text-xs text-arzir-gray-600">Environmental</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl text-center space-y-3 border border-arzir-gray-200">
                  <div className="text-3xl">⚡</div>
                  <h4 className="font-semibold text-black">UL Listed</h4>
                  <p className="text-xs text-arzir-gray-600">Electrical Safety</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">Safety Features</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">🛑</div>
                  <div>
                    <h4 className="font-semibold text-black">Emergency Stop Systems</h4>
                    <p className="text-arzir-gray-600 text-sm">Multiple emergency stops with immediate rotor stopping and power isolation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">🔒</div>
                  <div>
                    <h4 className="font-semibold text-black">Access Control Systems</h4>
                    <p className="text-arzir-gray-600 text-sm">Interlocked access doors and maintenance platforms with safety lockout systems</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white">⚠️</div>
                  <div>
                    <h4 className="font-semibold text-black">Overload Protection</h4>
                    <p className="text-arzir-gray-600 text-sm">Automatic overload detection and rotor reversal to prevent damage and jamming</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">🌪️</div>
                  <div>
                    <h4 className="font-semibold text-black">Dust Collection</h4>
                    <p className="text-arzir-gray-600 text-sm">Integrated dust collection systems and explosion prevention measures</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">🔧</div>
                  <div>
                    <h4 className="font-semibold text-black">Maintenance Safety</h4>
                    <p className="text-arzir-gray-600 text-sm">Safe maintenance access, tool changing systems, and lockout/tagout procedures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ProductCTA 
        formSource="shredder_bottom" 
      />
    </>
  );
}