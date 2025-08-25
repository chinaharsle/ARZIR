import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, BarChart3, Truck, Scale } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Bale Density: Impact on Transport and Value | ARZIR Blog",
  description: "Learn how bale density affects transportation costs, material value, and processing efficiency in metal recycling operations.",
};

export default function BaleDensityBlogPost() {
  return (
    <>
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
            <BarChart3 className="h-4 w-4" />
            Industry News
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
            Understanding Bale Density: Impact on Transport and Value
          </h1>
          <p className="text-xl text-arzir-gray-600 leading-relaxed">
            Learn how bale density affects transportation costs, material value, and processing efficiency in metal recycling operations.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-arzir-gray-500">
            <span>By Anna Thompson</span>
            <span>•</span>
            <span>July 15, 2025</span>
            <span>•</span>
            <span>4 min read</span>
          </div>
        </div>
      </Section>

      <Section background="white" size="sm">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
            <Image 
              src="/images/blog/Understanding Bale Density Impact on Transport and Value.png" 
              alt="Understanding Bale Density Impact on Transport and Value"
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
                Bale density is one of the most critical factors affecting profitability in metal recycling operations. Higher density bales command premium prices, reduce transportation costs, and improve processing efficiency at steel mills. Understanding the relationship between density, equipment selection, and operational practices is essential for maximizing returns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Density Standards by Material Type</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-arzir-gray-50">
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Material</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Low Density</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Standard Density</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">High Density</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-arzir-gray-200 p-4 font-medium">Mixed Ferrous</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">1.0-1.5 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">1.5-2.0 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">2.0-2.5 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-success">$10-15/t</td>
                    </tr>
                    <tr className="bg-arzir-gray-25">
                      <td className="border border-arzir-gray-200 p-4 font-medium">Steel Turnings</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">0.8-1.2 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">1.2-1.8 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">1.8-2.3 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-success">$15-20/t</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-arzir-gray-200 p-4 font-medium">Aluminum</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">0.6-0.9 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">0.9-1.2 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">1.2-1.5 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-success">$20-30/t</td>
                    </tr>
                    <tr className="bg-arzir-gray-25">
                      <td className="border border-arzir-gray-200 p-4 font-medium">Copper</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">1.5-2.0 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">2.0-2.8 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">2.8-3.5 t/m³</td>
                      <td className="border border-arzir-gray-200 p-4 text-success">$50-75/t</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Transportation Cost Impact</h2>
              <p className="text-arzir-gray-700 mb-6">
                Transportation costs typically represent 15-25% of total recycling costs. Higher bale density directly reduces these costs by maximizing payload efficiency.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-arzir-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="h-6 w-6 text-arzir-primary" />
                    <h3 className="text-lg font-semibold text-black">Low Density Scenario</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-arzir-gray-600">Density:</span>
                      <span className="text-sm font-medium">1.2 t/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-arzir-gray-600">Truck Load:</span>
                      <span className="text-sm font-medium">28-30 tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-arzir-gray-600">Cost per Ton:</span>
                      <span className="text-sm font-bold text-red-600">$45-55</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-arzir-gray-600">Efficiency:</span>
                      <span className="text-sm text-red-600">75% payload</span>
                    </div>
                  </div>
                </div>

                <div className="bg-arzir-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="h-6 w-6 text-success" />
                    <h3 className="text-lg font-semibold text-black">High Density Scenario</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-arzir-gray-600">Density:</span>
                      <span className="text-sm font-medium">2.2 t/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-arzir-gray-600">Truck Load:</span>
                      <span className="text-sm font-medium">38-42 tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-arzir-gray-600">Cost per Ton:</span>
                      <span className="text-sm font-bold text-success">$28-35</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-arzir-gray-600">Efficiency:</span>
                      <span className="text-sm text-success">95% payload</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-800 text-sm">
                  <strong>Transport Savings:</strong> High-density bales can reduce transportation costs by $15-20 per ton, representing potential annual savings of $150,000-$500,000 for medium to large operations.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Mill Processing Benefits</h2>
              <p className="text-arzir-gray-700 mb-6">
                Steel mills prefer high-density bales because they improve furnace efficiency, reduce handling time, and provide more consistent melting characteristics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Scale className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <h3 className="font-semibold text-black">Furnace Efficiency</h3>
                  <p className="text-sm text-arzir-gray-600">
                    High-density bales reduce furnace volume requirements and improve heat transfer, increasing melting efficiency by 8-12%
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Truck className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <h3 className="font-semibold text-black">Handling Efficiency</h3>
                  <p className="text-sm text-arzir-gray-600">
                    Dense bales require 30-40% fewer crane cycles for furnace charging, reducing labor and equipment costs
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <BarChart3 className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <h3 className="font-semibold text-black">Consistent Quality</h3>
                  <p className="text-sm text-arzir-gray-600">
                    Uniform density provides predictable melting behavior and improved chemistry control in steelmaking
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Density Optimization Strategies</h2>
              <div className="space-y-6">
                <div className="border border-arzir-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Equipment Upgrades</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">High-Force Balers</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• 800-1200T press force capability</li>
                        <li>• Advanced compression cycles</li>
                        <li>• Improved chamber design</li>
                        <li>• Density increase: 25-40%</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Pre-Processing</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Shredding for size reduction</li>
                        <li>• Material cleaning systems</li>
                        <li>• Moisture content control</li>
                        <li>• Density increase: 15-25%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-arzir-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Operational Improvements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Material Preparation</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Contamination removal</li>
                        <li>• Size sorting and grading</li>
                        <li>• Moisture management</li>
                        <li>• Loading pattern optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Process Control</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Pressure monitoring systems</li>
                        <li>• Cycle time optimization</li>
                        <li>• Quality control checks</li>
                        <li>• Operator training programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-arzir-primary/5 p-6 rounded-xl border-l-4 border-arzir-primary">
              <h3 className="text-lg font-semibold text-black mb-2">Key Takeaway</h3>
              <p className="text-arzir-gray-700">
                Optimizing bale density is one of the highest-impact improvements recycling operations can make. A 0.5 t/m³ density increase typically improves profitability by $20-35 per ton through combined transport savings and premium pricing. Most operations can achieve 20-40% density improvements through equipment upgrades and process optimization.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-heading font-bold text-black text-center">
            Optimize Your Bale Density
          </h2>
          <p className="text-arzir-gray-600 text-center">
            Use our bale density calculator to evaluate potential improvements and ROI from density optimization.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/calculator/bale-density">
                Use Density Calculator
                <BarChart3 className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <QuoteDialog source="density_blog_cta">
              <Button variant="outline">
                Get Density Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
        </div>
      </Section>

      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/blog/steel-mill-scrap-processing-best-practices">
              ← Previous Article
            </Link>
          </Button>
          <Button asChild>
            <Link href="/blog/automotive-dismantling-equipment-solutions">
              Next Article →
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}