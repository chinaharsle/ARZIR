import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recycling Balers - How Does Hydraulic Baling Process Work | ARZIR",
  description: "Professional recycling baler specifications and scrap metal baler capacity from 300T-1500T. Learn how recycling baler works, cost analysis, installation guide, and buying tips for best baler selection.",
};

const products = [
  {
    title: "Scrap Metal Baler",
    description: "Heavy-duty baler for mixed ferrous and non-ferrous scrap with high bale density.",
    href: "/products/scrap-metal-baler",
    image: "📦",
    alt: "Scrap Metal Baler compressing mixed scrap"
  },
  {
    title: "Car Body Baler", 
    description: "Designed for ELV processing with robust compression chambers and faster cycles.",
    href: "/products/car-body-baler",
    image: "🚗",
    alt: "Car Body Baler compacting end-of-life vehicles"
  },
  {
    title: "Vertical Baler",
    description: "Space-saving vertical baler for low-to-medium throughput operations.",
    href: "/products/vertical-baler",
    image: "📦",
    alt: "Vertical Baler for compact operations"
  },
  {
    title: "Horizontal Baler",
    description: "Continuous horizontal baler for high throughput and consistent bale sizes.",
    href: "/products/horizontal-baler",
    image: "📦",
    alt: "Horizontal Baler for continuous compaction"
  }
];



export default function RecyclingBalerPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Recycling Balers
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              High-density balers engineered for ferrous and non-ferrous scrap with reliable compaction and throughput.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                1.2-2.8 t/m³ density
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                300-1500T force
              </div>
            </div>
            <QuoteDialog source="recycling_baler_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/products/recycling-baler.png"
                alt="ARZIR Recycling Balers - High-Density Compaction Equipment"
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
            ARZIR recycling balers process 5-200 tons per day of mixed ferrous and non-ferrous materials. 
            Our baler range serves scrap yards, automotive dismantling facilities, foundries, and metal fabrication shops. 
            Each model is engineered for specific throughput requirements and material types, ensuring optimal bale density 
            and consistent quality for downstream processing.
          </p>
        </div>
      </Section>

      {/* Product Grid */}
      <Section background="gray" size="xl">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Baler Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.title} className="group h-full">
                <Link href={product.href}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-arzir-gray-100 overflow-hidden h-full flex flex-col">
                    {/* Product Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-50 to-arzir-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-6xl filter drop-shadow-lg">{product.image}</span>
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
              How Does a Recycling Baler Work?
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Understanding the hydraulic baling process and waste compaction system operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Feeding</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Scrap materials are loaded into the compression chamber via crane, conveyor, or manual loading systems.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Compressing</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Hydraulic cylinders generate 300-1500 tons of pressure, compacting materials to achieve optimal density ratios.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Baling</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Automatic wire tying system secures the compressed material into standardized bale dimensions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Ejecting</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Finished bales are automatically ejected from the chamber, ready for transport and melting.
                </p>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-arzir-gray-50 to-arzir-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">⚙️</div>
                <p className="text-arzir-gray-600 font-medium">Hydraulic Baling Process</p>
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
              Recycling baler specifications and scrap metal baler capacity comparison
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <caption className="sr-only">Baler machine models comparison with specifications</caption>
              <thead>
                <tr className="bg-arzir-primary text-white">
                  <th className="p-4 text-left font-semibold">Model</th>
                  <th className="p-4 text-left font-semibold">Press Force</th>
                  <th className="p-4 text-left font-semibold">Bale Density</th>
                  <th className="p-4 text-left font-semibold">Bale Size</th>
                  <th className="p-4 text-left font-semibold">Daily Capacity</th>
                  <th className="p-4 text-left font-semibold">Power</th>
                  <th className="p-4 text-left font-semibold">Suitable Materials</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Vertical Baler VB-300</td>
                  <td className="p-4 text-arzir-gray-700">300T</td>
                  <td className="p-4 text-arzir-gray-700">1.2-1.8 t/m³</td>
                  <td className="p-4 text-arzir-gray-700">1.1×1.1×0.8m</td>
                  <td className="p-4 text-arzir-gray-700">5-15 tons</td>
                  <td className="p-4 text-arzir-gray-700">45kW</td>
                  <td className="p-4 text-arzir-gray-700">Light scrap, cardboard</td>
                </tr>
                <tr className="bg-arzir-gray-25 border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Horizontal Baler HB-600</td>
                  <td className="p-4 text-arzir-gray-700">600T</td>
                  <td className="p-4 text-arzir-gray-700">1.5-2.2 t/m³</td>
                  <td className="p-4 text-arzir-gray-700">1.2×1.2×1.0m</td>
                  <td className="p-4 text-arzir-gray-700">20-40 tons</td>
                  <td className="p-4 text-arzir-gray-700">75kW</td>
                  <td className="p-4 text-arzir-gray-700">Mixed scrap, aluminum</td>
                </tr>
                <tr className="border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Heavy Duty Baler HD-1200</td>
                  <td className="p-4 text-arzir-gray-700">1200T</td>
                  <td className="p-4 text-arzir-gray-700">2.0-2.8 t/m³</td>
                  <td className="p-4 text-arzir-gray-700">1.3×1.3×1.2m</td>
                  <td className="p-4 text-arzir-gray-700">50-100 tons</td>
                  <td className="p-4 text-arzir-gray-700">110kW</td>
                  <td className="p-4 text-arzir-gray-700">Heavy scrap, car bodies</td>
                </tr>
                <tr className="bg-arzir-gray-25">
                  <td className="p-4 font-medium text-black">Industrial Baler IB-1500</td>
                  <td className="p-4 text-arzir-gray-700">1500T</td>
                  <td className="p-4 text-arzir-gray-700">2.2-3.0 t/m³</td>
                  <td className="p-4 text-arzir-gray-700">1.4×1.4×1.3m</td>
                  <td className="p-4 text-arzir-gray-700">80-200 tons</td>
                  <td className="p-4 text-arzir-gray-700">160kW</td>
                  <td className="p-4 text-arzir-gray-700">Steel, copper, heavy metals</td>
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
              Comprehensive material handling for recycling baler applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🔩</div>
              <h3 className="text-lg font-heading font-semibold text-black">Scrap Metal</h3>
              <p className="text-sm text-arzir-gray-600">Mixed ferrous and non-ferrous metals, structural steel, machine parts</p>
              <div className="text-xs text-arzir-primary font-medium">Density: 1.8-2.8 t/m³</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">⚡</div>
              <h3 className="text-lg font-heading font-semibold text-black">Aluminum</h3>
              <p className="text-sm text-arzir-gray-600">Aluminum cans, extrusions, sheets, automotive parts, UBC</p>
              <div className="text-xs text-arzir-primary font-medium">Density: 0.8-1.5 t/m³</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🔧</div>
              <h3 className="text-lg font-heading font-semibold text-black">Steel</h3>
              <p className="text-sm text-arzir-gray-600">HMS 1&2, rebar, plate steel, structural beams, machinery</p>
              <div className="text-xs text-arzir-primary font-medium">Density: 2.0-3.0 t/m³</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🟤</div>
              <h3 className="text-lg font-heading font-semibold text-black">Copper</h3>
              <p className="text-sm text-arzir-gray-600">Copper wire, tubes, fittings, radiators, electric motors</p>
              <div className="text-xs text-arzir-primary font-medium">Density: 2.5-4.0 t/m³</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">📦</div>
              <h3 className="text-lg font-heading font-semibold text-black">Cardboard</h3>
              <p className="text-sm text-arzir-gray-600">OCC, mixed paper, packaging materials, corrugated boxes</p>
              <div className="text-xs text-arzir-primary font-medium">Density: 0.3-0.8 t/m³</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">♻️</div>
              <h3 className="text-lg font-heading font-semibold text-black">Plastic</h3>
              <p className="text-sm text-arzir-gray-600">PET bottles, HDPE containers, plastic films, mixed plastics</p>
              <div className="text-xs text-arzir-primary font-medium">Density: 0.2-0.6 t/m³</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🚗</div>
              <h3 className="text-lg font-heading font-semibold text-black">Car Bodies</h3>
              <p className="text-sm text-arzir-gray-600">End-of-life vehicles, auto body panels, chassis components</p>
              <div className="text-xs text-arzir-primary font-medium">Density: 1.5-2.5 t/m³</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🔌</div>
              <h3 className="text-lg font-heading font-semibold text-black">E-Waste</h3>
              <p className="text-sm text-arzir-gray-600">Computer cases, appliances, electronic components, cables</p>
              <div className="text-xs text-arzir-primary font-medium">Density: 0.8-1.8 t/m³</div>
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
              Understanding recycling baler cost and ROI for recycling business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">Cost Savings</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">↓</div>
                  <div>
                    <h4 className="font-semibold text-black">Transportation Cost Reduction</h4>
                    <p className="text-arzir-gray-600 text-sm">60-80% reduction in shipping costs through higher bale density and standardized dimensions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">↓</div>
                  <div>
                    <h4 className="font-semibold text-black">Storage Space Optimization</h4>
                    <p className="text-arzir-gray-600 text-sm">75% reduction in storage area requirements with compacted bales vs loose materials</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">↓</div>
                  <div>
                    <h4 className="font-semibold text-black">Labor Cost Reduction</h4>
                    <p className="text-arzir-gray-600 text-sm">50% reduction in material handling labor through automation and improved efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
              <h3 className="text-xl font-heading font-semibold text-black mb-6">Investment Payback</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-arzir-gray-600">Small Operations (5-15 tons/day)</span>
                  <span className="font-semibold text-black">12-18 months</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-arzir-gray-600">Medium Operations (20-50 tons/day)</span>
                  <span className="font-semibold text-black">8-12 months</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-arzir-gray-600">Large Operations (100+ tons/day)</span>
                  <span className="font-semibold text-black">6-10 months</span>
                </div>
                
                <div className="border-t border-arzir-gray-200 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-arzir-primary">15-25%</div>
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
              Recycling baler installation guide and maintenance tips for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">Installation Requirements</h3>
              
              <div className="space-y-4">
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Installation Time</h4>
                  <p className="text-arzir-gray-600 text-sm">2-5 days depending on baler size and site preparation</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Space Requirements</h4>
                  <p className="text-arzir-gray-600 text-sm">Minimum 6m x 8m footprint plus 3m clearance on all sides</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Power Requirements</h4>
                  <p className="text-arzir-gray-600 text-sm">380V/50Hz, 45-160kW depending on model specifications</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Foundation</h4>
                  <p className="text-arzir-gray-600 text-sm">Reinforced concrete foundation, 0.5-1.0m deep depending on baler tonnage</p>
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
                  <p className="text-arzir-gray-600 text-sm">Hydraulic oil level, wire tension, safety systems</p>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Weekly Maintenance</h4>
                    <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">IMPORTANT</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Lubrication points, filter inspection, electrical connections</p>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Monthly Service</h4>
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">ROUTINE</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Hydraulic oil change, blade inspection, pressure testing</p>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Annual Overhaul</h4>
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">PLANNED</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Complete hydraulic system service, structural inspection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies / Application Stories */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Case Studies & Application Stories
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Real-world applications from recycling baler for auto dismantling to industrial baler for recycling plant
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-4xl">🏭</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Steel Recycling Plant</h3>
                <p className="text-sm text-arzir-gray-600">Germany - 150 tons/day capacity improvement with HD-1200 baler</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+85% efficiency</span>
                  <span className="text-green-600 font-medium">ROI: 8 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-4xl">🚗</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Auto Dismantling</h3>
                <p className="text-sm text-arzir-gray-600">USA - Processing 200 ELV per month with specialized car body baler</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+120% throughput</span>
                  <span className="text-green-600 font-medium">ROI: 10 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center">
                <div className="text-4xl">♻️</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Waste Management</h3>
                <p className="text-sm text-arzir-gray-600">UK - Municipal recycling center with multiple vertical balers</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+95% density</span>
                  <span className="text-green-600 font-medium">ROI: 12 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <div className="text-4xl">📦</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Logistics Warehouse</h3>
                <p className="text-sm text-arzir-gray-600">Australia - Cardboard and packaging material processing</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+70% space saving</span>
                  <span className="text-green-600 font-medium">ROI: 14 months</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-arzir-gray-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-arzir-primary">500+</div>
                <div className="text-sm text-arzir-gray-600">Installations Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-arzir-primary">85%</div>
                <div className="text-sm text-arzir-gray-600">Average Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-arzir-primary">12mo</div>
                <div className="text-sm text-arzir-gray-600">Average ROI Period</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison with Alternatives */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Comparison with Alternatives
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Baler vs shredder, manual vs automatic baler, and recycling baler vs compactor analysis
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
              <h3 className="text-2xl font-heading font-semibold text-black mb-6">Baler vs Shredder</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-arzir-gray-200">
                      <th className="p-4 text-left font-semibold text-black">Aspect</th>
                      <th className="p-4 text-left font-semibold text-arzir-primary">Recycling Baler</th>
                      <th className="p-4 text-left font-semibold text-arzir-gray-600">Shredder</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Output Form</td>
                      <td className="p-4 text-arzir-gray-700">Dense, uniform bales</td>
                      <td className="p-4 text-arzir-gray-700">Small fragments/chips</td>
                    </tr>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Transportation</td>
                      <td className="p-4 text-arzir-gray-700">Efficient, stackable</td>
                      <td className="p-4 text-arzir-gray-700">Requires containers</td>
                    </tr>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Energy Consumption</td>
                      <td className="p-4 text-arzir-gray-700">Lower (45-160kW)</td>
                      <td className="p-4 text-arzir-gray-700">Higher (200-500kW)</td>
                    </tr>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Material Loss</td>
                      <td className="p-4 text-arzir-gray-700">Minimal (&lt;2%)</td>
                      <td className="p-4 text-arzir-gray-700">Moderate (5-8%)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-black">Best For</td>
                      <td className="p-4 text-arzir-gray-700">Intact materials, clean scrap</td>
                      <td className="p-4 text-arzir-gray-700">Contaminated materials, size reduction</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
                <h3 className="text-xl font-heading font-semibold text-black mb-6">Manual vs Automatic Baler</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Labor Requirements</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">Manual: High</span>
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Auto: Low</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Daily Capacity</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Manual: 5-20T</span>
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Auto: 50-200T</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Consistency</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Manual: Variable</span>
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Auto: Uniform</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Initial Investment</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Manual: Lower</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Auto: Higher</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
                <h3 className="text-xl font-heading font-semibold text-black mb-6">Recycling Baler vs Compactor</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Final Product</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">Baler: Tied bales</span>
                      <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">Compactor: Loose</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Density Achievement</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Baler: 1.5-3.0 t/m³</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Compactor: 0.8-1.5 t/m³</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Transport Efficiency</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Baler: Excellent</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Compactor: Good</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Material Handling</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">Baler: Automated</span>
                      <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">Compactor: Manual</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Buying Guide */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Buying Guide
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              How to choose a recycling baler and find the best baler for scrap metal operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-black">Selection Criteria</h3>
              
              <div className="space-y-6">
                <div className="border border-arzir-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-black mb-3">1. Material Volume Assessment</h4>
                  <div className="space-y-2 text-sm text-arzir-gray-600">
                    <p>• <strong>5-15 tons/day:</strong> Vertical Baler VB-300</p>
                    <p>• <strong>20-40 tons/day:</strong> Horizontal Baler HB-600</p>
                    <p>• <strong>50-100 tons/day:</strong> Heavy Duty Baler HD-1200</p>
                    <p>• <strong>100+ tons/day:</strong> Industrial Baler IB-1500</p>
                  </div>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-black mb-3">2. Material Type Consideration</h4>
                  <div className="space-y-2 text-sm text-arzir-gray-600">
                    <p>• <strong>Light materials:</strong> 300-600T press force</p>
                    <p>• <strong>Mixed scrap:</strong> 600-1000T press force</p>
                    <p>• <strong>Heavy steel:</strong> 1200-1500T press force</p>
                    <p>• <strong>Car bodies:</strong> Specialized ELV baler</p>
                  </div>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-black mb-3">3. Space & Infrastructure</h4>
                  <div className="space-y-2 text-sm text-arzir-gray-600">
                    <p>• Minimum 6m x 8m + 3m clearance</p>
                    <p>• Concrete foundation depth: 0.5-1.0m</p>
                    <p>• Power supply: 380V/50Hz</p>
                    <p>• Crane access for loading (recommended)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-black">Common Questions</h3>
              
              <div className="space-y-4">
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">What size baler do I need for my scrap yard?</h4>
                  <p className="text-arzir-gray-600 text-sm">Baler size depends on daily throughput and material types. For mixed ferrous/non-ferrous scrap processing 20-50 tons daily, an HB-600 (600T) horizontal baler provides optimal balance of capacity and efficiency.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">How much does a scrap baler cost?</h4>
                  <p className="text-arzir-gray-600 text-sm">Costs range from $150,000-$800,000 depending on specifications. Include installation, training, and first-year maintenance in your budget. ROI typically achieved within 6-18 months.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">What maintenance is required?</h4>
                  <p className="text-arzir-gray-600 text-sm">Daily oil level checks, weekly lubrication, monthly hydraulic service, and annual overhauls. Maintenance costs typically 3-5% of purchase price annually.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Can I process contaminated materials?</h4>
                  <p className="text-arzir-gray-600 text-sm">ARZIR balers handle light contamination, but excessive oils or foreign materials should be removed. Pre-sorting improves bale quality and extends equipment life.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">What about financing options?</h4>
                  <p className="text-arzir-gray-600 text-sm">ARZIR partners with equipment financing providers offering lease and loan options. Contact our sales team for customized financing solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Safety Standards & Certifications */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black">
              Safety Standards & Certifications
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              CE certified recycling baler with comprehensive baler machine safety standards
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
                    <p className="text-arzir-gray-600 text-sm">Multiple emergency stops and automatic shutdown sequences</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">👐</div>
                  <div>
                    <h4 className="font-semibold text-black">Two-Hand Operation</h4>
                    <p className="text-arzir-gray-600 text-sm">Dual control system prevents accidental activation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white">⚠️</div>
                  <div>
                    <h4 className="font-semibold text-black">Overload Protection</h4>
                    <p className="text-arzir-gray-600 text-sm">Automatic pressure relief and system protection</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">🔒</div>
                  <div>
                    <h4 className="font-semibold text-black">Safety Barriers</h4>
                    <p className="text-arzir-gray-600 text-sm">Physical guards and light curtains around danger zones</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">🔐</div>
                  <div>
                    <h4 className="font-semibold text-black">Door Interlocks</h4>
                    <p className="text-arzir-gray-600 text-sm">Automatic machine lockout when access doors are open</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ProductCTA 
        
        formSource="recycling-baler_bottom" 
      />
    </>
  );
}
