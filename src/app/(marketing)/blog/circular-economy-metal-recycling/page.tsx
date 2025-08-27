import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Target, Recycle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Circular Economy Principles in Metal Recycling: Building Sustainable Operations",
  description: "Discover how circular economy principles transform metal recycling operations through waste reduction, resource optimization, and closed-loop manufacturing systems.",
  keywords: ["circular economy", "metal recycling", "sustainable operations", "waste reduction", "resource optimization", "closed-loop manufacturing", "recycling equipment"],
  openGraph: {
    title: "Circular Economy Principles in Metal Recycling",
    description: "Learn how circular economy principles are transforming the metal recycling industry with sustainable operations and closed-loop systems.",
    type: "article",
    publishedTime: "2025-09-15",
    authors: ["ARZIR Sustainability Team"],
  },
};

export default function CircularEconomyMetalRecyclingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <Section size="lg" className="pt-8 lg:pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Meta */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-arzir-gray-600">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                Industry News
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>September 15, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>ARZIR Sustainability Team</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
              Circular Economy Principles in Metal Recycling: Building Sustainable Operations
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Discover how circular economy principles transform metal recycling operations through waste reduction, 
              resource optimization, and closed-loop manufacturing systems.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Image */}
      <Section background="gray" size="sm">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/blog/Circular Economy Principles in Metal Recycling Building Sustainable Operations.png"
              alt="Circular Economy in Metal Recycling"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section size="xl" background="white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="space-y-6 mb-12">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                The circular economy represents a fundamental shift from the traditional linear &quot;take-make-dispose&quot; model 
                to a regenerative approach that keeps resources in use for as long as possible. In the metal recycling 
                industry, these principles are not just environmental imperatives&mdash;they&apos;re becoming competitive advantages 
                that drive profitability and operational excellence.
              </p>
              
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                As global demand for metals continues to rise while raw materials become scarcer and more expensive, 
                recycling operations that embrace circular economy principles are positioning themselves for long-term 
                success. This comprehensive guide explores how to implement these transformative concepts in your 
                metal recycling operations.
              </p>
            </div>

            {/* Core Principles Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8 flex items-center gap-3">
                <Target className="h-8 w-8 text-arzir-primary" />
                Core Circular Economy Principles
              </h2>
              
              <div className="space-y-8">
                <div className="bg-arzir-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">1. Design Out Waste and Pollution</h3>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    In metal recycling, this principle focuses on maximizing material recovery rates and minimizing 
                    contamination. Modern sorting technologies and processing techniques can achieve recovery rates 
                    exceeding 95% for many metal streams.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-arzir-gray-700">
                    <li>Advanced optical sorting systems reduce contamination</li>
                    <li>Precision shredding optimizes material liberation</li>
                    <li>Magnetic and eddy current separation maximize purity</li>
                    <li>Process water recycling eliminates waste discharge</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">2. Keep Products and Materials in Use</h3>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    This involves creating closed-loop systems where recycled metals continuously flow back into 
                    manufacturing processes without degradation of quality or utility.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-arzir-gray-700">
                    <li>Direct partnerships with manufacturers for consistent supply</li>
                    <li>Quality grading systems that maintain material value</li>
                    <li>Inventory management that prevents material degradation</li>
                    <li>Preprocessing to meet specific industry standards</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">3. Regenerate Natural Systems</h3>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    Metal recycling operations can actively contribute to environmental restoration through responsible 
                    practices and technological innovation.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-arzir-gray-700">
                    <li>Renewable energy integration for carbon-neutral operations</li>
                    <li>Habitat restoration on former industrial sites</li>
                    <li>Water treatment systems that improve local water quality</li>
                    <li>Carbon sequestration through avoided mining emissions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Strategy Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8 flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-arzir-primary" />
                Implementation Strategy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">Phase 1: Assessment and Planning</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-arzir-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Material Flow Analysis</h4>
                        <p className="text-arzir-gray-600 text-sm">Map current material streams and identify waste points</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-arzir-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Technology Audit</h4>
                        <p className="text-arzir-gray-600 text-sm">Evaluate current equipment efficiency and upgrade opportunities</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-arzir-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Partnership Development</h4>
                        <p className="text-arzir-gray-600 text-sm">Establish relationships with suppliers and end-users</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-black">Phase 2: Technology Integration</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Advanced Sorting Systems</h4>
                        <p className="text-arzir-gray-600 text-sm">Deploy AI-powered optical and sensor-based sorting</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Process Optimization</h4>
                        <p className="text-arzir-gray-600 text-sm">Implement energy-efficient processing equipment</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">6</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">Digital Integration</h4>
                        <p className="text-arzir-gray-600 text-sm">Connect systems for real-time monitoring and control</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-arzir-primary" />
                Measurable Benefits
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25-40%</div>
                  <div className="text-blue-800 font-medium mb-2">Cost Reduction</div>
                  <div className="text-blue-700 text-sm">Through improved efficiency and waste elimination</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">90%+</div>
                  <div className="text-green-800 font-medium mb-2">Recovery Rate</div>
                  <div className="text-green-700 text-sm">With advanced sorting and processing technologies</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                  <div className="text-purple-800 font-medium mb-2">Energy Savings</div>
                  <div className="text-purple-700 text-sm">Compared to primary metal production</div>
                </div>
              </div>
            </div>

            {/* Equipment Selection Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8 flex items-center gap-3">
                <Recycle className="h-8 w-8 text-arzir-primary" />
                Essential Equipment for Circular Operations
              </h2>

              <div className="space-y-6">
                <div className="border border-arzir-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-black mb-4">Advanced Shredding Systems</h3>
                  <p className="text-arzir-gray-700 mb-4">
                    Multi-stage shredding systems that optimize material liberation while preserving metal quality. 
                    Variable speed controls and intelligent monitoring ensure maximum efficiency.
                  </p>
                  <div className="flex items-center gap-2 text-arzir-primary">
                    <span className="text-sm font-medium">Learn more about our shredding solutions</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </div>
                </div>

                <div className="border border-arzir-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-black mb-4">High-Density Balers</h3>
                  <p className="text-arzir-gray-700 mb-4">
                    Optimize transportation efficiency and material handling with balers that achieve maximum density 
                    while maintaining material integrity for downstream processing.
                  </p>
                  <div className="flex items-center gap-2 text-arzir-primary">
                    <span className="text-sm font-medium">Explore baling solutions</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </div>
                </div>

                <div className="border border-arzir-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-black mb-4">Precision Cutting Equipment</h3>
                  <p className="text-arzir-gray-700 mb-4">
                    Hydraulic shears and guillotines that provide clean cuts and optimal material sizing for maximum 
                    processing efficiency and material value retention.
                  </p>
                  <div className="flex items-center gap-2 text-arzir-primary">
                    <span className="text-sm font-medium">View cutting equipment</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </div>
                </div>
              </div>
            </div>

            {/* Future Outlook Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8">Future of Circular Metal Recycling</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-arzir-gray-700 leading-relaxed">
                  The future of metal recycling lies in increasingly sophisticated circular systems that blur the 
                  lines between waste and resource. Emerging technologies like blockchain for material tracking, 
                  AI-driven predictive maintenance, and automated quality control are creating new possibilities 
                  for efficiency and sustainability.
                </p>
                
                <p className="text-lg text-arzir-gray-700 leading-relaxed">
                  As regulations tighten and environmental consciousness grows, recycling operations that have 
                  already implemented circular economy principles will find themselves with significant competitive 
                  advantages. The time to act is now&mdash;the circular economy isn&apos;t just the future of recycling, 
                  it&apos;s the key to thriving in today&apos;s changing marketplace.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-arzir-primary/5 to-blue-500/5 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Ready to Transform Your Operations?</h2>
              <p className="text-lg text-arzir-gray-700 mb-6">
                Implementing circular economy principles in your metal recycling operation isn&apos;t just an environmental 
                choice&mdash;it&apos;s a business imperative that drives efficiency, profitability, and long-term sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                  Explore Our Equipment Solutions
                </Button>
                <Button size="lg" variant="outline">
                  Request a Consultation
                </Button>
              </div>
            </div>

            {/* Share Section */}
            <div className="border-t border-arzir-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-arzir-gray-600">Share this article:</span>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
                <Link href="/blog" className="text-arzir-primary hover:text-primary-600 text-sm font-medium">
                  ← Back to all articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
