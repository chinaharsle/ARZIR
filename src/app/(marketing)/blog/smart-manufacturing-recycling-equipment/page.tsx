import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, Cpu, Settings, BarChart3, Zap, Shield, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Manufacturing Integration in Recycling Equipment: Industry 4.0 Revolution | ARZIR",
  description: "Explore how Industry 4.0 technologies including AI, automation, and real-time analytics are revolutionizing recycling equipment manufacturing and operations.",
  keywords: ["smart manufacturing", "Industry 4.0", "recycling equipment", "AI automation", "real-time analytics", "IoT integration", "predictive maintenance"],
  openGraph: {
    title: "Smart Manufacturing Integration in Recycling Equipment",
    description: "Discover how Industry 4.0 technologies are transforming recycling equipment manufacturing with AI, automation, and smart analytics.",
    type: "article",
    publishedTime: "2025-09-10",
    authors: ["ARZIR Innovation Team"],
  },
};

export default function SmartManufacturingRecyclingEquipmentPage() {
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
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                Applications
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>September 10, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>ARZIR Innovation Team</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
              Smart Manufacturing Integration in Recycling Equipment: Industry 4.0 Revolution
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Explore how Industry 4.0 technologies including AI, automation, and real-time analytics are 
              revolutionizing recycling equipment manufacturing and operations.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Image */}
      <Section background="gray" size="sm">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/blog/smart-manufacturing-recycling.jpg"
              alt="Smart Manufacturing in Recycling Equipment"
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
                The Fourth Industrial Revolution is transforming every aspect of manufacturing, and the recycling 
                equipment industry is no exception. Smart manufacturing technologies are creating unprecedented 
                opportunities for efficiency, quality, and innovation in how recycling equipment is designed, 
                produced, and operated.
              </p>
              
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                From AI-powered design optimization to real-time production monitoring, Industry 4.0 technologies 
                are enabling manufacturers to deliver superior equipment while reducing costs, improving sustainability, 
                and accelerating time-to-market. This comprehensive exploration reveals how these innovations are 
                reshaping the recycling equipment landscape.
              </p>
            </div>

            {/* Core Technologies Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8 flex items-center gap-3">
                <Cpu className="h-8 w-8 text-arzir-primary" />
                Core Industry 4.0 Technologies
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">Artificial Intelligence</h3>
                  </div>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    AI algorithms optimize equipment design, predict maintenance needs, and enhance operational 
                    efficiency through machine learning and predictive analytics.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-arzir-gray-700 text-sm">
                    <li>Predictive maintenance algorithms</li>
                    <li>Automated quality control systems</li>
                    <li>Intelligent process optimization</li>
                    <li>Real-time performance analysis</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">IoT Integration</h3>
                  </div>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    Internet of Things sensors and connectivity enable comprehensive monitoring and control of 
                    manufacturing processes and equipment performance.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-arzir-gray-700 text-sm">
                    <li>Real-time sensor monitoring</li>
                    <li>Connected production lines</li>
                    <li>Remote equipment diagnostics</li>
                    <li>Automated data collection</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">Big Data Analytics</h3>
                  </div>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    Advanced analytics transform manufacturing data into actionable insights for continuous 
                    improvement and optimization.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-arzir-gray-700 text-sm">
                    <li>Production optimization insights</li>
                    <li>Quality trend analysis</li>
                    <li>Supply chain intelligence</li>
                    <li>Customer usage patterns</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">Automation & Robotics</h3>
                  </div>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    Advanced robotics and automation systems enhance precision, consistency, and efficiency 
                    in manufacturing processes.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-arzir-gray-700 text-sm">
                    <li>Robotic assembly systems</li>
                    <li>Automated testing procedures</li>
                    <li>Precision welding and fabrication</li>
                    <li>Intelligent material handling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Manufacturing Applications Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8 flex items-center gap-3">
                <Settings className="h-8 w-8 text-arzir-primary" />
                Smart Manufacturing Applications
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-arzir-primary pl-6">
                  <h3 className="text-2xl font-semibold text-black mb-4">Design and Engineering</h3>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    Digital twins and simulation technologies enable virtual testing and optimization before 
                    physical production, reducing development time and improving product performance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-arzir-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-black mb-2">Digital Twin Technology</h4>
                      <p className="text-arzir-gray-600 text-sm">
                        Virtual replicas of equipment enable real-time monitoring and predictive maintenance
                      </p>
                    </div>
                    <div className="bg-arzir-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-black mb-2">CAD/CAM Integration</h4>
                      <p className="text-arzir-gray-600 text-sm">
                        Seamless transition from design to manufacturing with automated toolpath generation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-semibold text-black mb-4">Production Optimization</h3>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    AI-driven production planning and real-time monitoring systems optimize manufacturing 
                    workflows, reducing waste and improving efficiency.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center bg-white rounded-lg p-4 shadow-sm border">
                      <div className="text-2xl font-bold text-green-600 mb-1">30%</div>
                      <div className="text-sm text-arzir-gray-600">Faster Production</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4 shadow-sm border">
                      <div className="text-2xl font-bold text-blue-600 mb-1">25%</div>
                      <div className="text-sm text-arzir-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-4 shadow-sm border">
                      <div className="text-2xl font-bold text-purple-600 mb-1">40%</div>
                      <div className="text-sm text-arzir-gray-600">Quality Improvement</div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-semibold text-black mb-4">Quality Control & Testing</h3>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    Automated inspection systems and machine learning algorithms detect defects and ensure 
                    consistent quality standards throughout the manufacturing process.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-arzir-gray-700">
                    <li>Computer vision for automated inspection</li>
                    <li>Statistical process control with AI analysis</li>
                    <li>Non-destructive testing integration</li>
                    <li>Real-time quality feedback loops</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Operational Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8 flex items-center gap-3">
                <Shield className="h-8 w-8 text-arzir-primary" />
                Operational Benefits for End Users
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-arzir-gray-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Enhanced Equipment Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Predictive Maintenance</h4>
                      <p className="text-arzir-gray-700 text-sm mb-3">
                        AI algorithms analyze equipment data to predict maintenance needs before failures occur, 
                        reducing downtime by up to 50%.
                      </p>
                      <div className="flex items-center gap-2 text-arzir-primary text-sm">
                        <span>■</span>
                        <span>Reduced unplanned downtime</span>
                      </div>
                      <div className="flex items-center gap-2 text-arzir-primary text-sm">
                        <span>■</span>
                        <span>Optimized maintenance schedules</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Real-time Optimization</h4>
                      <p className="text-arzir-gray-700 text-sm mb-3">
                        Continuous monitoring and adjustment of operating parameters ensure optimal performance 
                        under varying conditions.
                      </p>
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <span>■</span>
                        <span>Adaptive processing control</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <span>■</span>
                        <span>Energy efficiency optimization</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Data-Driven Decision Making</h3>
                  <p className="text-arzir-gray-700 leading-relaxed mb-4">
                    Comprehensive data collection and analysis provide operators with actionable insights for 
                    improving efficiency and profitability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-black mb-1">Performance Analytics</h4>
                      <p className="text-arzir-gray-600 text-sm">Real-time dashboards and reporting</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Lightbulb className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-black mb-1">Process Insights</h4>
                      <p className="text-arzir-gray-600 text-sm">AI-generated optimization recommendations</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-black mb-1">Compliance Tracking</h4>
                      <p className="text-arzir-gray-600 text-sm">Automated regulatory compliance monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Strategy Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8">Implementation Roadmap</h2>

              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-arzir-primary"></div>
                  
                  <div className="relative pl-16 pb-8">
                    <div className="absolute left-4 w-4 h-4 bg-arzir-primary rounded-full"></div>
                    <h3 className="text-lg font-semibold text-black mb-2">Phase 1: Infrastructure Assessment</h3>
                    <p className="text-arzir-gray-700 text-sm">
                      Evaluate current systems and identify integration opportunities for smart manufacturing technologies.
                    </p>
                  </div>
                  
                  <div className="relative pl-16 pb-8">
                    <div className="absolute left-4 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-black mb-2">Phase 2: Pilot Implementation</h3>
                    <p className="text-arzir-gray-700 text-sm">
                      Deploy IoT sensors and basic analytics on select equipment to demonstrate value and refine approaches.
                    </p>
                  </div>
                  
                  <div className="relative pl-16 pb-8">
                    <div className="absolute left-4 w-4 h-4 bg-green-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-black mb-2">Phase 3: Full Integration</h3>
                    <p className="text-arzir-gray-700 text-sm">
                      Scale successful pilots across all operations with comprehensive AI and automation integration.
                    </p>
                  </div>
                  
                  <div className="relative pl-16">
                    <div className="absolute left-4 w-4 h-4 bg-purple-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-black mb-2">Phase 4: Continuous Optimization</h3>
                    <p className="text-arzir-gray-700 text-sm">
                      Leverage machine learning for continuous improvement and explore emerging technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8">Success Story: Smart Baler Integration</h2>
              
              <div className="bg-gradient-to-br from-arzir-primary/5 to-blue-500/5 rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-4">The Challenge</h3>
                    <p className="text-arzir-gray-700 leading-relaxed mb-6">
                      A major recycling facility needed to improve bale consistency and reduce operational costs 
                      while meeting strict quality requirements for their automotive industry customers.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-black mb-4">The Solution</h3>
                    <p className="text-arzir-gray-700 leading-relaxed">
                      Implementation of smart baling systems with real-time monitoring, AI-powered compression 
                      optimization, and predictive maintenance capabilities.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-4">Results Achieved</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center bg-white rounded-lg p-4">
                        <span className="text-arzir-gray-700">Bale Density Consistency</span>
                        <span className="font-semibold text-green-600">+35%</span>
                      </div>
                      <div className="flex justify-between items-center bg-white rounded-lg p-4">
                        <span className="text-arzir-gray-700">Energy Consumption</span>
                        <span className="font-semibold text-green-600">-20%</span>
                      </div>
                      <div className="flex justify-between items-center bg-white rounded-lg p-4">
                        <span className="text-arzir-gray-700">Maintenance Costs</span>
                        <span className="font-semibold text-green-600">-45%</span>
                      </div>
                      <div className="flex justify-between items-center bg-white rounded-lg p-4">
                        <span className="text-arzir-gray-700">Overall Equipment Effectiveness</span>
                        <span className="font-semibold text-green-600">+28%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Outlook Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-black mb-8">The Future of Smart Manufacturing</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-arzir-gray-700 leading-relaxed">
                  As we look toward the future, emerging technologies like 5G connectivity, edge computing, and 
                  advanced AI will further accelerate the transformation of recycling equipment manufacturing. 
                  Autonomous production lines, self-optimizing equipment, and predictive supply chains will 
                  become the new standard.
                </p>
                
                <p className="text-lg text-arzir-gray-700 leading-relaxed">
                  The companies that embrace these technologies today will be the leaders of tomorrow&apos;s recycling 
                  industry. Smart manufacturing isn&apos;t just about efficiency&mdash;it&apos;s about creating a sustainable, 
                  resilient, and profitable future for recycling operations worldwide.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-arzir-primary/5 to-blue-500/5 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Experience Smart Manufacturing</h2>
              <p className="text-lg text-arzir-gray-700 mb-6">
                Ready to transform your recycling operations with Industry 4.0 technologies? Our smart manufacturing 
                solutions combine cutting-edge equipment with intelligent automation for maximum efficiency and profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                  Explore Smart Equipment Solutions
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Technology Demo
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
