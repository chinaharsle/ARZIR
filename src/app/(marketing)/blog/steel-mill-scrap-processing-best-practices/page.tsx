import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Factory, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Mill Scrap Processing: Best Practices and Equipment Selection | ARZIR Blog",
  description: "Comprehensive guide to handling mill scrap safely and efficiently with industrial-grade processing equipment.",
};

export default function SteelMillScrapBlogPost() {
  return (
    <>
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
            <Factory className="h-4 w-4" />
            Applications
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
            Steel Mill Scrap Processing: Best Practices and Equipment Selection
          </h1>
          <p className="text-xl text-arzir-gray-600 leading-relaxed">
            Comprehensive guide to handling mill scrap safely and efficiently with industrial-grade processing equipment.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-arzir-gray-500">
            <span>By ARZIR Engineering Team</span>
            <span>•</span>
            <span>July 20, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </Section>

      <Section background="white" size="sm">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🏗️</div>
              <p className="text-lg font-medium text-arzir-gray-600">Steel Mill Processing</p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-arzir-gray-700">
                Steel mill scrap processing requires specialized equipment and procedures to handle high-temperature materials, heavy sections, and demanding production schedules. This guide covers essential best practices for safe, efficient mill scrap handling and the equipment selection criteria for optimal performance in steel mill environments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Types of Mill Scrap</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-arzir-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">Hot Mill Scale</h3>
                  <p className="text-sm text-arzir-gray-600 mb-3">
                    Iron oxide scale produced during hot rolling operations, typically 2-5% of steel production.
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-arzir-gray-500">Characteristics:</div>
                    <ul className="text-xs text-arzir-gray-600 space-y-1">
                      <li>• High temperature (300-800°C)</li>
                      <li>• Abrasive properties</li>
                      <li>• 60-70% iron content</li>
                      <li>• Fine particle size</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-arzir-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">Crop Ends & Cobble</h3>
                  <p className="text-sm text-arzir-gray-600 mb-3">
                    Steel sections cut from production ends and processing irregularities.
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-arzir-gray-500">Characteristics:</div>
                    <ul className="text-xs text-arzir-gray-600 space-y-1">
                      <li>• Large, irregular shapes</li>
                      <li>• High steel quality</li>
                      <li>• Minimal contamination</li>
                      <li>• Processing priority material</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-arzir-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">Turnings & Borings</h3>
                  <p className="text-sm text-arzir-gray-600 mb-3">
                    Machining waste from steel finishing operations and maintenance activities.
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-arzir-gray-500">Characteristics:</div>
                    <ul className="text-xs text-arzir-gray-600 space-y-1">
                      <li>• Oil contamination</li>
                      <li>• Small particle size</li>
                      <li>• Requires cleaning</li>
                      <li>• Good steel grades</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-arzir-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-black mb-3">Structural Returns</h3>
                  <p className="text-sm text-arzir-gray-600 mb-3">
                    Heavy structural sections from maintenance, demolition, and production modifications.
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-arzir-gray-500">Characteristics:</div>
                    <ul className="text-xs text-arzir-gray-600 space-y-1">
                      <li>• Large, heavy sections</li>
                      <li>• Requires size reduction</li>
                      <li>• Known steel chemistry</li>
                      <li>• High furnace value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Safety Considerations</h2>
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 mb-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Critical Safety Requirements</h3>
                <p className="text-red-700 text-sm">
                  Steel mill scrap processing involves extreme temperatures, heavy materials, and potential hazardous atmospheres. All safety protocols must be rigorously followed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-arzir-primary" />
                    <h3 className="font-semibold text-black">Temperature Safety</h3>
                  </div>
                  <ul className="text-sm text-arzir-gray-600 space-y-2">
                    <li>• Thermal protection equipment</li>
                    <li>• Temperature monitoring systems</li>
                    <li>• Cooling procedures</li>
                    <li>• Heat-resistant clothing</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-arzir-primary" />
                    <h3 className="font-semibold text-black">Material Handling</h3>
                  </div>
                  <ul className="text-sm text-arzir-gray-600 space-y-2">
                    <li>• Crane safety protocols</li>
                    <li>• Load capacity limits</li>
                    <li>• Rigging procedures</li>
                    <li>• Drop zone controls</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-arzir-primary" />
                    <h3 className="font-semibold text-black">Environmental</h3>
                  </div>
                  <ul className="text-sm text-arzir-gray-600 space-y-2">
                    <li>• Dust control systems</li>
                    <li>• Noise protection</li>
                    <li>• Ventilation requirements</li>
                    <li>• Containment procedures</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Equipment Selection Guidelines</h2>
              <p className="text-arzir-gray-700 mb-6">
                Steel mill environments demand robust, high-capacity equipment designed for continuous operation under demanding conditions.
              </p>

              <div className="space-y-6">
                <div className="border border-arzir-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Gantry Shears for Heavy Sections</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Specifications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• 800-2000T cutting force</li>
                        <li>• 2.0-3.5m blade length</li>
                        <li>• 100-300mm cut thickness</li>
                        <li>• 45-90 second cycle time</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Applications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Structural beam cutting</li>
                        <li>• Large plate processing</li>
                        <li>• Crop end sizing</li>
                        <li>• Equipment demolition</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Benefits</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Maximum cutting capacity</li>
                        <li>• Continuous duty operation</li>
                        <li>• Precise size control</li>
                        <li>• High throughput rates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-arzir-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Heavy-Duty Balers for Mill Scale</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Specifications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• 600-1200T press force</li>
                        <li>• High-temperature rated</li>
                        <li>• Abrasion-resistant design</li>
                        <li>• Continuous operation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Applications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Hot mill scale baling</li>
                        <li>• Fine material compaction</li>
                        <li>• Dust collection processing</li>
                        <li>• Transport optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Benefits</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Temperature resistance</li>
                        <li>• Dense bale formation</li>
                        <li>• Reduced transport costs</li>
                        <li>• Improved furnace feed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-arzir-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Briquetting Machines for Turnings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Specifications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• 200-800T compaction force</li>
                        <li>• Oil recovery systems</li>
                        <li>• Automated operation</li>
                        <li>• 2-10 t/h throughput</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Applications</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Steel turning processing</li>
                        <li>• Machining waste</li>
                        <li>• Oil contaminated scrap</li>
                        <li>• Fine material recovery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-arzir-primary text-sm mb-2">Benefits</h4>
                      <ul className="text-xs text-arzir-gray-600 space-y-1">
                        <li>• Oil recovery (95-98%)</li>
                        <li>• High density briquettes</li>
                        <li>• Improved melting efficiency</li>
                        <li>• Reduced material loss</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-arzir-primary/5 p-6 rounded-xl border-l-4 border-arzir-primary">
              <h3 className="text-lg font-semibold text-black mb-2">Key Takeaway</h3>
              <p className="text-arzir-gray-700">
                Successful steel mill scrap processing requires understanding material characteristics, implementing robust safety procedures, and selecting equipment designed for high-temperature, high-capacity operation. Proper equipment selection can improve furnace efficiency by 15-25% while reducing processing costs and environmental impact.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-heading font-bold text-black text-center">
            Need Steel Mill Equipment Solutions?
          </h2>
          <p className="text-arzir-gray-600 text-center">
            Our steel mill specialists can help you design optimal scrap processing systems for your facility.
          </p>
          <div className="flex justify-center">
            <QuoteDialog source="steel_mill_blog_cta">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Steel Mill Consultation
                <Factory className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
        </div>
      </Section>

      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/blog/preventive-maintenance-guide-recycling-equipment">
              ← Previous Article
            </Link>
          </Button>
          <Button asChild>
            <Link href="/blog/understanding-bale-density-transport-value">
              Next Article →
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}