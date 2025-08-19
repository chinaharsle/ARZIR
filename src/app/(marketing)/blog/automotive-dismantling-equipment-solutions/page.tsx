import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { Car, Recycle, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Dismantling: Equipment Solutions for ELV Processing | ARZIR Blog",
  description: "Specialized equipment and techniques for processing end-of-life vehicles efficiently while meeting environmental regulations.",
};

export default function AutomotiveDismantlingBlogPost() {
  return (
    <>
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
            <Car className="h-4 w-4" />
            Applications
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
            Automotive Dismantling: Equipment Solutions for ELV Processing
          </h1>
          <p className="text-xl text-arzir-gray-600 leading-relaxed">
            Specialized equipment and techniques for processing end-of-life vehicles efficiently while meeting environmental regulations.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-arzir-gray-500">
            <span>By David Kim</span>
            <span>•</span>
            <span>July 8, 2025</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>
      </Section>

      <Section background="white" size="sm">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
            <Image 
              src="/images/blog/Automotive Dismantling Equipment Solutions for ELV Processing.jpg" 
              alt="Automotive Dismantling Equipment Solutions for ELV Processing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </Section>

      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-arzir-gray-700">
                End-of-life vehicle (ELV) processing is a complex operation requiring specialized equipment and procedures to maximize material recovery while ensuring environmental compliance. Modern automotive dismantling facilities must balance efficiency, safety, and regulatory requirements to achieve profitable operations in this growing market.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">ELV Processing Overview</h2>
              <p className="text-arzir-gray-700 mb-6">
                A typical passenger vehicle contains 75-80% recoverable materials by weight, making automotive recycling one of the most successful circular economy examples.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-arzir-gray-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-arzir-primary mb-2">65%</div>
                  <div className="text-sm font-medium text-black mb-1">Steel & Iron</div>
                  <div className="text-xs text-arzir-gray-600">Body, engine, chassis</div>
                </div>
                <div className="bg-arzir-gray-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-arzir-primary mb-2">8%</div>
                  <div className="text-sm font-medium text-black mb-1">Non-Ferrous</div>
                  <div className="text-xs text-arzir-gray-600">Aluminum, copper, zinc</div>
                </div>
                <div className="bg-arzir-gray-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-arzir-primary mb-2">15%</div>
                  <div className="text-sm font-medium text-black mb-1">Plastics</div>
                  <div className="text-xs text-arzir-gray-600">Bumpers, trim, interior</div>
                </div>
                <div className="bg-arzir-gray-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-arzir-primary mb-2">12%</div>
                  <div className="text-sm font-medium text-black mb-1">Other</div>
                  <div className="text-xs text-arzir-gray-600">Glass, rubber, fluids</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Processing Workflow</h2>
              <p className="text-arzir-gray-700 mb-6">
                Efficient ELV processing follows a systematic approach to maximize material recovery and ensure environmental compliance.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-arzir-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-black">Depollution & Fluid Removal</h3>
                    <p className="text-sm text-arzir-gray-600">
                      Remove all hazardous fluids (fuel, oil, coolant, brake fluid) and depollute airbags, batteries, and catalytic converters. Critical for environmental compliance.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">15-30 min</span>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Required by law</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-arzir-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-black">Parts Harvesting</h3>
                    <p className="text-sm text-arzir-gray-600">
                      Remove valuable reusable parts including engines, transmissions, body panels, and electronic components for resale market.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">45-90 min</span>
                      <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">High value</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-arzir-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-black">Shredding & Size Reduction</h3>
                    <p className="text-sm text-arzir-gray-600">
                      Process remaining hull through automotive shredder to create fist-sized fragments for downstream material separation.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">5-10 min</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Automated</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-arzir-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-black">Material Separation</h3>
                    <p className="text-sm text-arzir-gray-600">
                      Use magnetic separation, eddy current separation, and density separation to recover ferrous metals, non-ferrous metals, and clean materials.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">Continuous</span>
                      <span className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded">85-95% recovery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Essential Equipment Solutions</h2>
              <p className="text-arzir-gray-700 mb-6">
                Automotive dismantling requires specialized heavy-duty equipment designed for the unique challenges of vehicle processing.
              </p>

              <div className="space-y-6">
                <div className="border border-arzir-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                    <Car className="h-5 w-5 text-arzir-primary" />
                    Car Body Balers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Specifications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• 600-1500T press force</li>
                        <li>• 4.5 x 2.0m feed opening</li>
                        <li>• 60-120 second cycle time</li>
                        <li>• 20-40 cars per day capacity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Applications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Depleted vehicle hulls</li>
                        <li>• Large body components</li>
                        <li>• Transport optimization</li>
                        <li>• Mill feed preparation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Benefits</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• 80% space reduction</li>
                        <li>• 50% fewer transport trucks</li>
                        <li>• Improved material density</li>
                        <li>• Higher scrap value</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-arzir-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-arzir-primary" />
                    Automotive Shredders
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Specifications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• 1000-5000 HP motors</li>
                        <li>• 50-200 cars per hour</li>
                        <li>• 2-6 inch output size</li>
                        <li>• Dust collection systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Applications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Complete vehicle processing</li>
                        <li>• White goods shredding</li>
                        <li>• Large appliance processing</li>
                        <li>• Mixed metal size reduction</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Benefits</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Material liberation</li>
                        <li>• High throughput rates</li>
                        <li>• Automated operation</li>
                        <li>• Consistent output size</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-arzir-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-arzir-primary" />
                    Separation Equipment
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Magnetic Separation</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Ferrous metal recovery</li>
                        <li>• 95-98% efficiency</li>
                        <li>• Overhead magnets</li>
                        <li>• Magnetic drums</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Eddy Current</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Non-ferrous recovery</li>
                        <li>• Aluminum separation</li>
                        <li>• Copper recovery</li>
                        <li>• 85-90% efficiency</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Density Separation</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Heavy media separation</li>
                        <li>• Plastic/rubber removal</li>
                        <li>• Glass separation</li>
                        <li>• Fluff processing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Regulatory Compliance</h2>
              <p className="text-arzir-gray-700 mb-6">
                ELV processing is heavily regulated to protect environmental and human health. Compliance is mandatory and affects facility licensing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Environmental Requirements</h3>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>• Complete fluid removal and containment</li>
                    <li>• Hazardous material proper disposal</li>
                    <li>• Groundwater protection measures</li>
                    <li>• Air emission controls</li>
                    <li>• Waste tracking and reporting</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Operational Standards</h3>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Worker safety training and certification</li>
                    <li>• Equipment safety and maintenance</li>
                    <li>• Material handling procedures</li>
                    <li>• Record keeping and documentation</li>
                    <li>• Regular compliance audits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Economic Considerations</h2>
              <p className="text-arzir-gray-700 mb-6">
                Automotive dismantling profitability depends on material recovery rates, processing efficiency, and market conditions for recovered materials.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-arzir-gray-50">
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Revenue Stream</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Typical Value</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">% of Total</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Market Volatility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-arzir-gray-200 p-4 font-medium">Reusable Parts</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">$200-800/car</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">40-60%</td>
                      <td className="border border-arzir-gray-200 p-4 text-green-600">Low</td>
                    </tr>
                    <tr className="bg-arzir-gray-25">
                      <td className="border border-arzir-gray-200 p-4 font-medium">Ferrous Scrap</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">$80-150/car</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">20-30%</td>
                      <td className="border border-arzir-gray-200 p-4 text-orange-600">Medium</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-arzir-gray-200 p-4 font-medium">Non-Ferrous Metals</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">$50-200/car</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">15-25%</td>
                      <td className="border border-arzir-gray-200 p-4 text-red-600">High</td>
                    </tr>
                    <tr className="bg-arzir-gray-25">
                      <td className="border border-arzir-gray-200 p-4 font-medium">Catalytic Converters</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">$20-400/car</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">5-15%</td>
                      <td className="border border-arzir-gray-200 p-4 text-red-600">Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-arzir-primary/5 p-6 rounded-xl border-l-4 border-arzir-primary">
              <h3 className="text-lg font-semibold text-black mb-2">Key Takeaway</h3>
              <p className="text-arzir-gray-700">
                Successful automotive dismantling requires the right combination of equipment, processes, and regulatory compliance. Modern facilities can achieve 85-95% material recovery rates with proper equipment selection and processing procedures. Investment in specialized equipment typically pays back within 2-4 years through improved efficiency and material recovery.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-heading font-bold text-black text-center">
            Need Automotive Processing Solutions?
          </h2>
          <p className="text-arzir-gray-600 text-center">
            Our automotive recycling specialists can help you design efficient ELV processing systems.
          </p>
          <div className="flex justify-center">
            <QuoteDialog source="automotive_blog_cta">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Automotive Solutions
                <Car className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
        </div>
      </Section>

      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/blog/understanding-bale-density-transport-value">
              ← Previous Article
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">
              Back to Blog
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}