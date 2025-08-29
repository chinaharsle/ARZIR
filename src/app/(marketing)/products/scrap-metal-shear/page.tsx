import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scrap Metal Shears - Container, Gantry & Alligator Cutting Equipment",
  description: "Heavy-duty scrap metal shears for industrial recycling. Container shears, gantry shears, and alligator shears with superior cutting force and precision. 300-2000T cutting capacity.",
};

const products = [
  {
    title: "Container Shear",
    description: "Mobile shearing solution for on-site processing with excellent mobility and versatility.",
    href: "/products/container-shear",
    image: "/images/products/single/container shear.webp",
    alt: "Container Shear for mobile processing"
  },
  {
    title: "Gantry Shear",
    description: "High-capacity stationary shear for heavy-duty industrial applications and maximum efficiency.",
    href: "/products/gantry-shear", 
    image: "/images/products/single/gantry shear.webp",
    alt: "Gantry Shear for stationary operations"
  },
  {
    title: "Alligator Shear",
    description: "Fast-cycling shear for cutting structural steel and plate materials with rapid processing.",
    href: "/products/alligator-shear",
    image: "/images/products/single/alligator shear.webp",
    alt: "Alligator Shear for structural steel"
  }
];

export default function ScrapMetalShearPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Scrap Metal Shears
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Heavy-duty shearing solutions for scrap yards, demolition, and recycling facilities with superior cutting performance and reliability.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                300-2000T force
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                Up to 300mm cut
              </div>
            </div>
            <QuoteDialog source="scrap_metal_shear_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/products/single/gantry shear.webp"
                alt="ARZIR Scrap Metal Shears - Heavy-Duty Cutting Equipment"
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
            ARZIR scrap metal shears process 20-500 tons per day of structural steel, plate materials, and mixed scrap metals. 
            Our comprehensive shear range serves scrap yards, demolition contractors, ship breaking facilities, and metal recycling centers. 
            Each model delivers precise cutting performance up to 300mm thickness with advanced hydraulic systems and superior blade technology.
          </p>
        </div>
      </Section>

      {/* Product Grid */}
      <Section background="gray" size="xl">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Shear Models
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
              How Does a Scrap Metal Shear Work?
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
              Understanding the hydraulic shearing process and cutting system operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Material Positioning</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Scrap materials are positioned between upper and lower blades using crane or grapple systems with precise alignment.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Hydraulic Engagement</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  High-pressure hydraulic cylinders generate 300-2000 tons of cutting force, engaging upper blade against lower blade.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Shearing Action</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Sharp hardened steel blades create concentrated stress points, resulting in clean cuts through metal up to 300mm thickness.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <h3 className="text-xl font-heading font-semibold text-black">Material Discharge</h3>
                </div>
                <p className="text-arzir-gray-600 pl-14">
                  Cut pieces are automatically discharged into collection areas, ready for further processing or transportation.
                </p>
              </div>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-arzir-gray-50 to-arzir-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">⚡</div>
                <p className="text-arzir-gray-600 font-medium">Hydraulic Shearing Process</p>
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
              Scrap metal shear specifications and cutting capacity comparison
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <caption className="sr-only">Shear machine models comparison with specifications</caption>
              <thead>
                <tr className="bg-arzir-primary text-white">
                  <th className="p-4 text-left font-semibold">Model</th>
                  <th className="p-4 text-left font-semibold">Cutting Force</th>
                  <th className="p-4 text-left font-semibold">Blade Length</th>
                  <th className="p-4 text-left font-semibold">Cut Thickness</th>
                  <th className="p-4 text-left font-semibold">Cycle Time</th>
                  <th className="p-4 text-left font-semibold">Daily Capacity</th>
                  <th className="p-4 text-left font-semibold">Power</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Container Shear CS-400</td>
                  <td className="p-4 text-arzir-gray-700">400T</td>
                  <td className="p-4 text-arzir-gray-700">1.2m</td>
                  <td className="p-4 text-arzir-gray-700">50mm</td>
                  <td className="p-4 text-arzir-gray-700">30s</td>
                  <td className="p-4 text-arzir-gray-700">20-40 tons</td>
                  <td className="p-4 text-arzir-gray-700">75kW</td>
                </tr>
                <tr className="bg-arzir-gray-25 border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Container Shear CS-800</td>
                  <td className="p-4 text-arzir-gray-700">800T</td>
                  <td className="p-4 text-arzir-gray-700">2.0m</td>
                  <td className="p-4 text-arzir-gray-700">150mm</td>
                  <td className="p-4 text-arzir-gray-700">60s</td>
                  <td className="p-4 text-arzir-gray-700">50-100 tons</td>
                  <td className="p-4 text-arzir-gray-700">110kW</td>
                </tr>
                <tr className="border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Gantry Shear GS-1200</td>
                  <td className="p-4 text-arzir-gray-700">1200T</td>
                  <td className="p-4 text-arzir-gray-700">2.5m</td>
                  <td className="p-4 text-arzir-gray-700">200mm</td>
                  <td className="p-4 text-arzir-gray-700">45s</td>
                  <td className="p-4 text-arzir-gray-700">100-200 tons</td>
                  <td className="p-4 text-arzir-gray-700">160kW</td>
                </tr>
                <tr className="bg-arzir-gray-25 border-b border-arzir-gray-100">
                  <td className="p-4 font-medium text-black">Gantry Shear GS-2000</td>
                  <td className="p-4 text-arzir-gray-700">2000T</td>
                  <td className="p-4 text-arzir-gray-700">3.5m</td>
                  <td className="p-4 text-arzir-gray-700">300mm</td>
                  <td className="p-4 text-arzir-gray-700">90s</td>
                  <td className="p-4 text-arzir-gray-700">200-500 tons</td>
                  <td className="p-4 text-arzir-gray-700">220kW</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-black">Alligator Shear AS-600</td>
                  <td className="p-4 text-arzir-gray-700">600T</td>
                  <td className="p-4 text-arzir-gray-700">1.8m</td>
                  <td className="p-4 text-arzir-gray-700">120mm</td>
                  <td className="p-4 text-arzir-gray-700">20s</td>
                  <td className="p-4 text-arzir-gray-700">80-150 tons</td>
                  <td className="p-4 text-arzir-gray-700">90kW</td>
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
              Comprehensive material cutting capabilities for scrap metal shear applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🏗️</div>
              <h3 className="text-lg font-heading font-semibold text-black">Structural Steel</h3>
              <p className="text-sm text-arzir-gray-600">I-beams, H-sections, channels, angles, rebar, construction steel</p>
              <div className="text-xs text-arzir-primary font-medium">Thickness: Up to 300mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">📋</div>
              <h3 className="text-lg font-heading font-semibold text-black">Plate Steel</h3>
              <p className="text-sm text-arzir-gray-600">Heavy plates, sheets, tank walls, ship hull sections</p>
              <div className="text-xs text-arzir-primary font-medium">Thickness: 20-250mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🚂</div>
              <h3 className="text-lg font-heading font-semibold text-black">Railway Materials</h3>
              <p className="text-sm text-arzir-gray-600">Rails, rail cars, locomotive parts, switches, crossings</p>
              <div className="text-xs text-arzir-primary font-medium">Weight: Up to 500kg/m</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">⚙️</div>
              <h3 className="text-lg font-heading font-semibold text-black">Heavy Machinery</h3>
              <p className="text-sm text-arzir-gray-600">Equipment frames, machine bases, industrial components</p>
              <div className="text-xs text-arzir-primary font-medium">Thickness: 50-200mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🚢</div>
              <h3 className="text-lg font-heading font-semibold text-black">Ship Breaking</h3>
              <p className="text-sm text-arzir-gray-600">Hull sections, bulkheads, deck plates, marine structures</p>
              <div className="text-xs text-arzir-primary font-medium">Thickness: 10-150mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🏭</div>
              <h3 className="text-lg font-heading font-semibold text-black">Industrial Scrap</h3>
              <p className="text-sm text-arzir-gray-600">Mixed metal waste, fabrication offcuts, demolition debris</p>
              <div className="text-xs text-arzir-primary font-medium">Thickness: Various sizes</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">🔧</div>
              <h3 className="text-lg font-heading font-semibold text-black">Cast Iron</h3>
              <p className="text-sm text-arzir-gray-600">Engine blocks, machine parts, pipe fittings, castings</p>
              <div className="text-xs text-arzir-primary font-medium">Thickness: 30-150mm</div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl p-6 text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-4xl">⚡</div>
              <h3 className="text-lg font-heading font-semibold text-black">Non-Ferrous</h3>
              <p className="text-sm text-arzir-gray-600">Aluminum beams, copper bus bars, brass fittings, bronze components</p>
              <div className="text-xs text-arzir-primary font-medium">Thickness: 10-100mm</div>
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
              Understanding scrap metal shear cost and ROI for recycling business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">Cost Savings</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">↓</div>
                  <div>
                    <h4 className="font-semibold text-black">Processing Time Reduction</h4>
                    <p className="text-arzir-gray-600 text-sm">70-85% faster cutting compared to torch cutting and manual methods</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">↓</div>
                  <div>
                    <h4 className="font-semibold text-black">Labor Cost Optimization</h4>
                    <p className="text-arzir-gray-600 text-sm">60% reduction in labor requirements through automated cutting operations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">↓</div>
                  <div>
                    <h4 className="font-semibold text-black">Material Yield Improvement</h4>
                    <p className="text-arzir-gray-600 text-sm">Clean cuts maximize material recovery and improve downstream processing efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
              <h3 className="text-xl font-heading font-semibold text-black mb-6">Investment Payback</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-arzir-gray-600">Small Operations (20-50 tons/day)</span>
                  <span className="font-semibold text-black">10-15 months</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-arzir-gray-600">Medium Operations (100-200 tons/day)</span>
                  <span className="font-semibold text-black">6-10 months</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-arzir-gray-600">Large Operations (300+ tons/day)</span>
                  <span className="font-semibold text-black">4-8 months</span>
                </div>
                
                <div className="border-t border-arzir-gray-200 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-arzir-primary">20-35%</div>
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
              Scrap metal shear installation guide and maintenance tips for optimal performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-black">Installation Requirements</h3>
              
              <div className="space-y-4">
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Installation Time</h4>
                  <p className="text-arzir-gray-600 text-sm">3-7 days depending on shear size and site preparation</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Space Requirements</h4>
                  <p className="text-arzir-gray-600 text-sm">Minimum 10m x 15m footprint plus 5m clearance for material handling</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Power Requirements</h4>
                  <p className="text-arzir-gray-600 text-sm">380V/50Hz, 75-220kW depending on model specifications</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Foundation</h4>
                  <p className="text-arzir-gray-600 text-sm">Reinforced concrete foundation, 1.0-2.0m deep depending on shear tonnage</p>
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
                  <p className="text-arzir-gray-600 text-sm">Hydraulic pressure, blade alignment, safety systems, oil levels</p>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Weekly Maintenance</h4>
                    <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">IMPORTANT</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Blade inspection, lubrication points, electrical connections, filter checks</p>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Monthly Service</h4>
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">ROUTINE</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Blade sharpening/replacement, hydraulic system service, torque checks</p>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-black">Annual Overhaul</h4>
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">PLANNED</span>
                  </div>
                  <p className="text-arzir-gray-600 text-sm">Complete hydraulic overhaul, structural inspection, blade replacement</p>
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
              Real-world applications from scrap yard operations to ship breaking and demolition projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-4xl">🏭</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Steel Scrap Yard</h3>
                <p className="text-sm text-arzir-gray-600">USA - Processing 300 tons/day with GS-2000 gantry shear system</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+120% efficiency</span>
                  <span className="text-green-600 font-medium">ROI: 6 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <div className="text-4xl">🚢</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Ship Breaking</h3>
                <p className="text-sm text-arzir-gray-600">India - Container shears for efficient ship hull processing operations</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+90% speed</span>
                  <span className="text-green-600 font-medium">ROI: 8 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center">
                <div className="text-4xl">🏗️</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Demolition Project</h3>
                <p className="text-sm text-arzir-gray-600">Germany - On-site structural steel processing with mobile shears</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+75% mobility</span>
                  <span className="text-green-600 font-medium">ROI: 12 months</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-arzir-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <div className="text-4xl">🚂</div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-heading font-semibold text-black">Railway Scrapping</h3>
                <p className="text-sm text-arzir-gray-600">Australia - Alligator shears for rail car dismantling operations</p>
                <div className="flex justify-between text-xs">
                  <span className="text-arzir-primary font-medium">+85% throughput</span>
                  <span className="text-green-600 font-medium">ROI: 10 months</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-arzir-gray-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-arzir-primary">800+</div>
                <div className="text-sm text-arzir-gray-600">Installations Worldwide</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-arzir-primary">95%</div>
                <div className="text-sm text-arzir-gray-600">Average Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-arzir-primary">8mo</div>
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
              Shear vs torch cutting, mobile vs stationary shears, and hydraulic vs mechanical cutting analysis
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
              <h3 className="text-2xl font-heading font-semibold text-black mb-6">Shear vs Torch Cutting</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-arzir-gray-200">
                      <th className="p-4 text-left font-semibold text-black">Aspect</th>
                      <th className="p-4 text-left font-semibold text-arzir-primary">Hydraulic Shear</th>
                      <th className="p-4 text-left font-semibold text-arzir-gray-600">Torch Cutting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Cutting Speed</td>
                      <td className="p-4 text-arzir-gray-700">20-90 seconds per cut</td>
                      <td className="p-4 text-arzir-gray-700">5-30 minutes per cut</td>
                    </tr>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Cut Quality</td>
                      <td className="p-4 text-arzir-gray-700">Clean, precise edges</td>
                      <td className="p-4 text-arzir-gray-700">Heat-affected zones</td>
                    </tr>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Operating Costs</td>
                      <td className="p-4 text-arzir-gray-700">Low (electricity only)</td>
                      <td className="p-4 text-arzir-gray-700">High (gas, consumables)</td>
                    </tr>
                    <tr className="border-b border-arzir-gray-100">
                      <td className="p-4 font-medium text-black">Safety Requirements</td>
                      <td className="p-4 text-arzir-gray-700">Standard industrial</td>
                      <td className="p-4 text-arzir-gray-700">Fire watch, ventilation</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-black">Best For</td>
                      <td className="p-4 text-arzir-gray-700">High-volume operations</td>
                      <td className="p-4 text-arzir-gray-700">Complex shapes, field work</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
                <h3 className="text-xl font-heading font-semibold text-black mb-6">Mobile vs Stationary Shears</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Cutting Capacity</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Mobile: 400-800T</span>
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Stationary: 800-2000T</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Site Flexibility</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Mobile: High</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Stationary: None</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Daily Throughput</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Mobile: 20-100T</span>
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Stationary: 200-500T</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Installation Cost</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Mobile: Lower</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Stationary: Higher</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-200">
                <h3 className="text-xl font-heading font-semibold text-black mb-6">Hydraulic vs Mechanical Shears</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Cutting Force</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Hydraulic: Variable</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Mechanical: Fixed</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Control Precision</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Hydraulic: Excellent</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Mechanical: Good</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Maintenance</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Hydraulic: Moderate</span>
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Mechanical: Lower</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-arzir-gray-600">Energy Efficiency</span>
                    <div className="flex gap-2">
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Hydraulic: High</span>
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Mechanical: Variable</span>
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
              How to choose a scrap metal shear and find the best cutting solution for your operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-black">Selection Criteria</h3>
              
              <div className="space-y-6">
                <div className="border border-arzir-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-black mb-3">1. Material Analysis</h4>
                  <div className="space-y-2 text-sm text-arzir-gray-600">
                    <p>• <strong>Light structural:</strong> 300-600T shear capacity</p>
                    <p>• <strong>Medium structural:</strong> 600-1200T shear capacity</p>
                    <p>• <strong>Heavy structural:</strong> 1200-2000T shear capacity</p>
                    <p>• <strong>Maximum thickness:</strong> Consider 50-300mm range</p>
                  </div>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-black mb-3">2. Operation Requirements</h4>
                  <div className="space-y-2 text-sm text-arzir-gray-600">
                    <p>• <strong>Mobile operations:</strong> Container shear systems</p>
                    <p>• <strong>Fixed installations:</strong> Gantry shear systems</p>
                    <p>• <strong>Fast cycling:</strong> Alligator shear models</p>
                    <p>• <strong>Heavy duty:</strong> Industrial gantry shears</p>
                  </div>
                </div>
                
                <div className="border border-arzir-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-black mb-3">3. Site & Infrastructure</h4>
                  <div className="space-y-2 text-sm text-arzir-gray-600">
                    <p>• Minimum 10m x 15m + 5m clearance</p>
                    <p>• Concrete foundation depth: 1.0-2.0m</p>
                    <p>• Power supply: 380V/50Hz, 75-220kW</p>
                    <p>• Crane capacity: 5-50 tons for material handling</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-black">Common Questions</h3>
              
              <div className="space-y-4">
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">What cutting force do I need for structural steel?</h4>
                  <p className="text-arzir-gray-600 text-sm">For typical structural steel (I-beams, channels, angles), 500-1000 tons cutting force is recommended. Heavier sections may require up to 2000 tons for clean cuts.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">How much does a scrap metal shear cost?</h4>
                  <p className="text-arzir-gray-600 text-sm">Costs range from $200,000-$1,500,000 depending on capacity and features. Include installation, training, and blade replacement costs in your budget. ROI typically achieved within 4-15 months.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">How often do blades need replacement?</h4>
                  <p className="text-arzir-gray-600 text-sm">Blade life varies from 5,000-15,000 cuts depending on material hardness and thickness. Regular inspection and proper maintenance extend blade life significantly.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">Can shears handle contaminated materials?</h4>
                  <p className="text-arzir-gray-600 text-sm">ARZIR shears handle lightly contaminated scrap, but excessive concrete, dirt, or non-metallic materials should be removed to prevent premature blade wear.</p>
                </div>
                
                <div className="bg-arzir-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">What about financing and support?</h4>
                  <p className="text-arzir-gray-600 text-sm">ARZIR offers equipment financing, comprehensive training, and 24/7 technical support. Our service network ensures minimal downtime and maximum productivity.</p>
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
              CE certified scrap metal shears with comprehensive safety standards and protection systems
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
                    <p className="text-arzir-gray-600 text-sm">Multiple emergency stops and automatic shutdown sequences with immediate blade retraction</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">🛡️</div>
                  <div>
                    <h4 className="font-semibold text-black">Blade Protection Guards</h4>
                    <p className="text-arzir-gray-600 text-sm">Physical barriers and safety curtains around cutting zones with interlock systems</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white">⚠️</div>
                  <div>
                    <h4 className="font-semibold text-black">Pressure Relief Systems</h4>
                    <p className="text-arzir-gray-600 text-sm">Automatic hydraulic pressure relief and overload protection systems</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">👐</div>
                  <div>
                    <h4 className="font-semibold text-black">Two-Hand Operation</h4>
                    <p className="text-arzir-gray-600 text-sm">Dual control system prevents accidental activation and ensures operator awareness</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">🔐</div>
                  <div>
                    <h4 className="font-semibold text-black">Access Control</h4>
                    <p className="text-arzir-gray-600 text-sm">Lockout/tagout systems and restricted access controls for maintenance operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <ProductCTA 
        formSource="scrap-metal-shear_bottom" 
      />
    </>
  );
}