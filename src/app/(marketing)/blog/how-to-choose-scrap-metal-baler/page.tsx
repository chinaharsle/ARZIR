import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose the Right Scrap Metal Baler for Your Yard | ARZIR",
  description: "Complete guide to selecting the optimal scrap metal baler. Learn about press force, bale density, throughput, and sizing criteria for your recycling operation.",
  openGraph: {
    title: "How to Choose the Right Scrap Metal Baler for Your Yard",
    description: "Complete guide to selecting the optimal scrap metal baler. Learn about press force, bale density, throughput, and sizing criteria.",
    images: [
      {
        url: "/blog/How to Choose the Right Scrap Metal Baler for Your Yard.png",
        width: 1200,
        height: 630,
        alt: "Scrap Metal Baler Selection Guide - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "What Problems Are We Solving?", anchor: "problems" },
  { title: "Key Selection Criteria", anchor: "criteria" },
  { title: "Press Force Requirements", anchor: "press-force" },
  { title: "Bale Size Considerations", anchor: "bale-size" },
  { title: "Cycle Time & Energy Efficiency", anchor: "cycle-time" },
  { title: "Process & Workflow", anchor: "process" },
  { title: "Common Mistakes to Avoid", anchor: "mistakes" },
  { title: "FAQs", anchor: "faqs" }
];

const keyTakeaways = [
  "Identify your material mix, throughput, and bale density targets.",
  "Compare hydraulic power, chamber size, and control systems.",
  "Plan for maintenance, spare parts, and operator training.",
  "Consider space constraints and integration requirements.",
  "Evaluate ROI based on labor savings and material value increase."
];

const faqs = [
  {
    question: "What's the difference between hydraulic and mechanical balers?",
    answer: "Hydraulic balers offer variable pressure control, better compression ratios, and can handle mixed materials more effectively. Mechanical balers are typically faster but less versatile and suited for consistent, lighter materials."
  },
  {
    question: "How do I calculate the ROI for a new baler?",
    answer: "Consider labor cost reduction, increased material density (better transport efficiency), premium pricing for quality bales, and reduced disposal costs. Most facilities see 18-36 month payback periods."
  },
  {
    question: "What training is required for baler operators?",
    answer: "Basic hydraulic system understanding, safety procedures, routine maintenance tasks, and troubleshooting. ARZIR provides comprehensive operator training with equipment delivery and ongoing support."
  },
  {
    question: "Can I upgrade my existing baler instead of buying new?",
    answer: "Depending on age and condition, upgrades like improved controls, enhanced safety systems, or productivity modifications may be cost-effective. Our technical team can assess upgrade feasibility."
  }
];

export default function ScrapMetalBalerGuidePage() {
  return (
    <>
      {/* Breadcrumb */}
      <Section size="sm" className="!py-4 border-b border-arzir-gray-200">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-arzir-gray-500 hover:text-arzir-primary">Home</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li><Link href="/blog" className="text-arzir-gray-500 hover:text-arzir-primary">Blog</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li><Link href="/blog?category=Product+Guides" className="text-arzir-gray-500 hover:text-arzir-primary">Product Guides</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li className="text-arzir-gray-900">How to Choose the Right Scrap Metal Baler</li>
          </ol>
        </nav>
      </Section>

      {/* Article Header */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-arzir-gray-500">
              <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full font-medium">
                Product Guides
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Updated on August 10, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              How to Choose the Right Scrap Metal Baler for Your Yard
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Engineering Team</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/blog/How to Choose the Right Scrap Metal Baler for Your Yard.png" 
              alt="How to Choose the Right Scrap Metal Baler for Your Yard"
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

      {/* Key Takeaways */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <div className="bg-arzir-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-heading font-bold text-black mb-4">Key Takeaways</h2>
            <ul className="space-y-2">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-arzir-gray-700">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Table of Contents */}
      <Section background="gray" size="md">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
            <h2 className="text-xl font-heading font-bold text-black mb-4">Table of Contents</h2>
            <nav>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.anchor}`}
                      className="text-arzir-primary hover:text-primary-600 transition-colors duration-200 text-sm"
                    >
                      {index + 1}. {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section background="white" size="xl">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-black prose-p:text-arzir-gray-700 prose-p:leading-relaxed">
          
          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Selecting the right scrap metal baler is one of the most critical decisions for recycling operations. 
              The wrong choice can lead to inefficient processing, higher operating costs, and missed revenue opportunities. 
              This comprehensive guide will help you navigate the key considerations for choosing a baler that maximizes 
              your operational efficiency and profitability.
            </p>
          </div>

          {/* What Problems Are We Solving? */}
          <section id="problems" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              What Problems Are We Solving?
            </h2>
            <p>
              Modern scrap yards face increasing pressure to maximize material recovery while controlling operational costs. 
              Common challenges include:
            </p>
            <ul className="space-y-2">
              <li><strong>Inconsistent material density:</strong> Loose scrap takes up valuable transport space and reduces per-load value</li>
              <li><strong>Labor-intensive handling:</strong> Manual processing increases costs and safety risks</li>
              <li><strong>Variable material streams:</strong> Mixed ferrous/non-ferrous materials require flexible processing capabilities</li>
              <li><strong>Quality requirements:</strong> Steel mills demand consistent bale specifications for optimal furnace charging</li>
            </ul>
            <p>
              A properly selected baler addresses these challenges by creating uniform, high-density bales that command premium pricing 
              and reduce transportation costs by up to 60%.
            </p>
          </section>

          {/* Key Selection Criteria */}
          <section id="criteria" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Key Selection Criteria
            </h2>
            <p>
              The foundation of baler selection rests on four critical factors that must align with your operational requirements:
            </p>

            <div id="press-force" className="bg-arzir-gray-50 p-6 rounded-xl">
              <h3 className="text-2xl font-heading font-semibold text-black mb-4">Press Force</h3>
              <p className="mb-4">
                Press force determines the maximum bale density achievable and directly impacts material value. Here&apos;s how to match 
                press force to your material mix:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-arzir-gray-200 p-3 text-left font-semibold">Material Type</th>
                      <th className="border border-arzir-gray-200 p-3 text-left font-semibold">Recommended Press Force</th>
                      <th className="border border-arzir-gray-200 p-3 text-left font-semibold">Expected Density</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-arzir-gray-200 p-3">Light mixed scrap</td>
                      <td className="border border-arzir-gray-200 p-3">300-500 tons</td>
                      <td className="border border-arzir-gray-200 p-3">1.2-1.8 t/m³</td>
                    </tr>
                    <tr className="bg-arzir-gray-25">
                      <td className="border border-arzir-gray-200 p-3">Heavy structural steel</td>
                      <td className="border border-arzir-gray-200 p-3">800-1200 tons</td>
                      <td className="border border-arzir-gray-200 p-3">2.0-2.5 t/m³</td>
                    </tr>
                    <tr>
                      <td className="border border-arzir-gray-200 p-3">Car bodies (ELV)</td>
                      <td className="border border-arzir-gray-200 p-3">600-1000 tons</td>
                      <td className="border border-arzir-gray-200 p-3">1.8-2.3 t/m³</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="bale-size" className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-heading font-semibold text-black mb-4">Bale Size</h3>
              <p className="mb-4">
                Bale dimensions must match your customers&apos; handling equipment and furnace specifications. Standard sizes include:
              </p>
              <ul className="space-y-2">
                <li><strong>1.1 x 1.1 x 1.6m:</strong> Standard for mixed scrap, fits most truck configurations</li>
                <li><strong>1.2 x 1.2 x 1.8m:</strong> Higher volume applications, premium material streams</li>
                <li><strong>1.4 x 1.4 x 2.0m:</strong> Heavy-duty applications, large-scale operations</li>
              </ul>
              <p>
                Consider your transport equipment, customer requirements, and local weight regulations when selecting bale dimensions.
              </p>
            </div>
          </section>

          {/* Cycle Time & Energy */}
          <section id="cycle-time" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Cycle Time & Energy Efficiency
            </h2>
            <p>
              Productivity depends on the balance between cycle time and bale quality. Faster cycles don&apos;t always mean higher throughput 
              if bale density suffers. Key considerations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-black">Cycle Time Factors:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Material preparation and loading method</li>
                  <li>• Hydraulic system response and flow rates</li>
                  <li>• Compression distance and pressure holding time</li>
                  <li>• Automatic vs. manual tie systems</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-black">Energy Considerations:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Variable speed drives for pump optimization</li>
                  <li>• Energy recovery systems during decompression</li>
                  <li>• Standby mode capabilities during idle periods</li>
                  <li>• Power factor correction for reduced demand charges</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Process & Workflow */}
          <section id="process" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Process & Workflow
            </h2>
            <p>
              Understanding your material flow helps determine the optimal baler configuration and supporting equipment:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {[
                { title: "Material Receiving", desc: "Weighing, sorting, and quality control" },
                { title: "Pre-Processing", desc: "Size reduction, contamination removal" },
                { title: "Baling Operation", desc: "Loading, compaction, tying, discharge" },
                { title: "Quality & Shipping", desc: "Final inspection, labeling, logistics" }
              ].map((step, index) => (
                <div key={index} className="text-center p-4 bg-arzir-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-arzir-primary rounded-full text-white font-bold flex items-center justify-center mx-auto mb-2">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-black mb-1">{step.title}</h4>
                  <p className="text-sm text-arzir-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section id="mistakes" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Common Mistakes to Avoid
            </h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h4 className="font-semibold text-red-800 mb-3">Critical Selection Errors:</h4>
              <ul className="space-y-2 text-red-700">
                <li><strong>Oversizing based on peak capacity:</strong> Size for 80% utilization, not maximum theoretical throughput</li>
                <li><strong>Ignoring material preparation requirements:</strong> Factor in pre-processing time and equipment needs</li>
                <li><strong>Underestimating space requirements:</strong> Include material staging, maintenance access, and future expansion</li>
                <li><strong>Focusing only on purchase price:</strong> Consider total cost of ownership including operating and maintenance costs</li>
                <li><strong>Inadequate operator training:</strong> Plan for comprehensive training and ongoing support</li>
              </ul>
            </div>
          </section>

          {/* Product Promo */}
          <div className="relative overflow-hidden bg-gradient-to-r from-arzir-primary via-primary-600 to-arzir-primary rounded-2xl p-8 lg:p-12 text-white my-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    <CheckCircle className="h-4 w-4" />
                    Recommended Solution
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold">
                    ARZIR Scrap Metal Baler
                  </h3>
                  <p className="text-lg text-blue-50 leading-relaxed">
                    Industry-leading performance with proven ROI. Engineered for maximum density, 
                    reliability, and operational efficiency.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">300-1200</div>
                    <div className="text-sm text-blue-100">Ton Force Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">2.5t/m³</div>
                    <div className="text-sm text-blue-100">Max Density</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-50">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Advanced hydraulic control system</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-50">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Automated tying and discharge</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-50">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span>Energy-efficient variable drives</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="secondary" asChild className="flex-1 sm:flex-initial">
                    <Link href="/products/scrap-metal-baler">
                      View Specifications
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <QuoteDialog source="blog_scrap_baler_guide">
                    <Button variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-arzir-primary transition-all duration-200 flex-1 sm:flex-initial">
                      Get Custom Quote
                    </Button>
                  </QuoteDialog>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/blog/How to Choose the Right Scrap Metal Baler for Your Yard.png"
                    alt="ARZIR Scrap Metal Baler"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Best Seller
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-heading font-bold text-black text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                <h3 className="text-lg font-heading font-semibold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-arzir-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between py-6 border-t border-arzir-gray-200">
            <Link 
              href="/blog/maximizing-roi-metal-recycling-operations"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <div className="text-left">
                <div className="text-sm text-arzir-gray-500">Previous</div>
                <div className="font-medium">Maximizing ROI in Metal Recycling</div>
              </div>
            </Link>
            <Link 
              href="/blog/preventive-maintenance-guide-recycling-equipment"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Preventive Maintenance Guide</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section background="gray" size="lg">
        <div className="bg-white rounded-3xl p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black">
            Ready to optimize your yard?
          </h2>
          <p className="text-arzir-gray-600 max-w-2xl mx-auto">
            Our engineering team can help you select the perfect baler configuration for your specific needs and throughput requirements.
          </p>
          <QuoteDialog source="blog_bottom_cta">
            <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
              Get Expert Advice
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </QuoteDialog>
        </div>
      </Section>
    </>
  );
}