import { Section } from "@/components/common/Section";
import { Clock, User, Calendar, ChevronLeft, ChevronRight, CheckCircle, TrendingUp, Truck, Factory, Recycle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Car Body Balers Transform Vehicle Recycling | ARZIR Blog",
  description: "Discover how car body balers revolutionize automotive recycling with 80% volume reduction, improved efficiency, and maximum ROI. Complete transformation guide.",
  keywords: [
    "car body baler transformation",
    "vehicle recycling innovation",
    "automotive recycling revolution",
    "ELV processing efficiency",
    "car baler benefits",
    "recycling technology advancement"
  ],
  openGraph: {
    title: "How Car Body Balers Transform Vehicle Recycling",
    description: "Discover how car body balers revolutionize automotive recycling with 80% volume reduction and maximum ROI.",
    images: [
      {
        url: "/images/blog/car-body-balers-transform-recycling.jpg",
        width: 1200,
        height: 630,
        alt: "Car Body Balers Transform Vehicle Recycling - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "The Traditional Challenge", anchor: "traditional-challenge" },
  { title: "Revolutionary Technology", anchor: "revolutionary-technology" },
  { title: "Transformation Benefits", anchor: "transformation-benefits" },
  { title: "Industry Impact", anchor: "industry-impact" },
  { title: "Future Outlook", anchor: "future-outlook" },
  { title: "Implementation Guide", anchor: "implementation-guide" }
];

const keyTakeaways = [
  "80% volume reduction dramatically cuts transportation costs",
  "Car body balers process 20-40 vehicles per day efficiently",
  "Standardized bales meet international quality requirements",
  "ROI typically achieved within 18-36 months",
  "Technology enables global export market access"
];

const transformationMetrics = [
  {
    metric: "Volume Reduction",
    before: "100%",
    after: "20%",
    improvement: "80% reduction"
  },
  {
    metric: "Processing Time",
    before: "8 hours/vehicle",
    after: "2 hours/vehicle",
    improvement: "75% faster"
  },
  {
    metric: "Transportation Cost",
    before: "$200/ton",
    after: "$60/ton",
    improvement: "70% savings"
  },
  {
    metric: "Storage Space",
    before: "1000 m²",
    after: "200 m²",
    improvement: "80% less space"
  }
];

const industryApplications = [
  {
    sector: "Auto Recycling Centers",
    transformation: "From manual dismantling to automated processing",
    benefits: ["Higher throughput", "Improved safety", "Better profitability"],
    icon: Factory
  },
  {
    sector: "Scrap Metal Dealers", 
    transformation: "From loose material to standardized bales",
    benefits: ["Premium pricing", "Export opportunities", "Efficient logistics"],
    icon: TrendingUp
  },
  {
    sector: "Steel Mills",
    transformation: "From irregular feed to consistent material",
    benefits: ["Optimized furnace charging", "Predictable quality", "Supply reliability"],
    icon: Recycle
  },
  {
    sector: "Export Traders",
    transformation: "From volume constraints to container optimization",
    benefits: ["80% shipping savings", "Global market access", "Competitive advantage"],
    icon: Truck
  }
];

const implementationSteps = [
  {
    phase: "Assessment",
    duration: "2-4 weeks",
    activities: ["Site evaluation", "Volume analysis", "ROI calculation", "Equipment sizing"]
  },
  {
    phase: "Planning",
    duration: "4-6 weeks", 
    activities: ["Layout design", "Utility planning", "Permits", "Training program"]
  },
  {
    phase: "Installation",
    duration: "8-12 weeks",
    activities: ["Equipment delivery", "Site preparation", "Installation", "Commissioning"]
  },
  {
    phase: "Operation",
    duration: "Ongoing",
    activities: ["Production ramp-up", "Optimization", "Maintenance", "Performance monitoring"]
  }
];

const faqs = [
  {
    question: "What makes car body balers transformative for recycling?",
    answer: "Car body balers transform recycling by compressing complete vehicles into dense, standardized bales that reduce volume by 80%, dramatically cutting transportation costs and enabling access to global export markets."
  },
  {
    question: "How quickly can facilities see ROI from car body balers?",
    answer: "Most facilities achieve ROI within 18-36 months through reduced transportation costs, improved material pricing, and increased processing efficiency. Larger operations often see faster payback periods."
  },
  {
    question: "Can existing facilities be upgraded with car body balers?",
    answer: "Yes, car body balers can be integrated into existing operations. Our team provides comprehensive site assessment and custom integration plans to maximize efficiency within current layouts."
  },
  {
    question: "What training is required for operators?",
    answer: "Comprehensive 3-5 day training programs cover operation, safety, maintenance, and troubleshooting. Ongoing support ensures operators maintain optimal performance and safety standards."
  }
];

export default function CarBodyBalersTransformRecyclingPage() {
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
            <li><Link href="/blog?category=Industry+Insights" className="text-arzir-gray-500 hover:text-arzir-primary">Industry Insights</Link></li>
            <li className="text-arzir-gray-400">/</li>
            <li className="text-arzir-gray-900">How Car Body Balers Transform Vehicle Recycling</li>
          </ol>
        </nav>
      </Section>

      {/* Article Header */}
      <Section size="lg" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-arzir-gray-500">
              <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full font-medium">
                Industry Insights
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Published August 19, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              How Car Body Balers Transform Vehicle Recycling
            </h1>
            <div className="flex items-center justify-center gap-2 text-arzir-gray-600">
              <User className="h-4 w-4" />
              <span>ARZIR Engineering Team</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto relative">
            <Image 
              src="/images/products/recycling-baler.png" 
              alt="Car Body Balers Transform Vehicle Recycling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
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
              The automotive recycling industry is experiencing a revolutionary transformation through the adoption 
              of car body balers. These powerful machines are changing how end-of-life vehicles are processed, 
              creating unprecedented efficiency gains and opening new market opportunities for recycling facilities worldwide.
            </p>
          </div>

          {/* The Traditional Challenge */}
          <section id="traditional-challenge" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              The Traditional Challenge
            </h2>
            <p>
              Traditional vehicle recycling faced significant challenges that limited profitability and efficiency:
            </p>
            <ul className="space-y-2">
              <li><strong>Volume constraints:</strong> Loose car bodies consume enormous storage and transportation space</li>
              <li><strong>High logistics costs:</strong> Inefficient transportation due to low material density</li>
              <li><strong>Limited market access:</strong> Difficulty meeting international quality standards</li>
              <li><strong>Safety concerns:</strong> Manual processing increases worker safety risks</li>
              <li><strong>Inconsistent pricing:</strong> Variable quality leads to unpredictable material values</li>
            </ul>
            <p>
              These challenges created a cycle where recycling facilities struggled to maximize value from 
              end-of-life vehicles, often accepting lower margins due to operational inefficiencies.
            </p>
          </section>

          {/* Revolutionary Technology */}
          <section id="revolutionary-technology" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Revolutionary Technology
            </h2>
            <p>
              Car body balers represent a fundamental shift in vehicle recycling technology. Using powerful 
              hydraulic systems generating 600-1500 tons of force, these machines compress complete vehicle 
              bodies into standardized, high-density bales.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-heading font-semibold text-black mb-4">Technical Innovation</h3>
              <p className="mb-4">
                Modern car body balers incorporate advanced features that revolutionize processing:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Variable hydraulic systems:</strong> Optimized pressure for different vehicle types</li>
                <li>• <strong>Automated controls:</strong> PLC systems for consistent operation</li>
                <li>• <strong>Safety systems:</strong> Advanced protection for operator safety</li>
                <li>• <strong>Quality monitoring:</strong> Ensuring consistent bale specifications</li>
              </ul>
            </div>
          </section>

          {/* Transformation Benefits */}
          <section id="transformation-benefits" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Transformation Benefits
            </h2>
            <p>
              The transformation achieved through car body balers delivers measurable improvements across 
              all aspects of vehicle recycling operations:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-arzir-gray-50">
                    <th className="border border-arzir-gray-200 p-3 text-left font-semibold">Metric</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold">Before</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold">After</th>
                    <th className="border border-arzir-gray-200 p-3 text-center font-semibold">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {transformationMetrics.map((metric, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                      <td className="border border-arzir-gray-200 p-3 font-medium text-black">{metric.metric}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-red-600">{metric.before}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center text-green-600">{metric.after}</td>
                      <td className="border border-arzir-gray-200 p-3 text-center font-bold text-arzir-primary">{metric.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Industry Impact */}
          <section id="industry-impact" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Industry Impact
            </h2>
            <p>
              Car body balers are transforming multiple sectors within the recycling ecosystem:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {industryApplications.map((application, index) => (
                <div key={index} className="bg-arzir-gray-50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <application.icon className="h-6 w-6 text-arzir-primary" />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h4 className="font-semibold text-black text-lg">{application.sector}</h4>
                      <p className="text-arzir-gray-600 text-sm italic">{application.transformation}</p>
                      <ul className="space-y-1">
                        {application.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-arzir-gray-700 flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Future Outlook */}
          <section id="future-outlook" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Future Outlook
            </h2>
            <p>
              The transformation driven by car body balers is accelerating, with several trends shaping the future:
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-black mb-3">Emerging Trends:</h4>
              <ul className="space-y-2">
                <li><strong>Automation integration:</strong> AI-powered systems for optimal processing</li>
                <li><strong>IoT connectivity:</strong> Real-time monitoring and predictive maintenance</li>
                <li><strong>Sustainability focus:</strong> Carbon footprint reduction through efficient logistics</li>
                <li><strong>Global standardization:</strong> International quality certifications</li>
                <li><strong>Mobile solutions:</strong> Portable balers for on-site processing</li>
              </ul>
            </div>
          </section>

          {/* Implementation Guide */}
          <section id="implementation-guide" className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-black border-b border-arzir-gray-200 pb-4">
              Implementation Guide
            </h2>
            <p>
              Successfully implementing car body baler technology requires careful planning and execution:
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {implementationSteps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-black mb-2">{step.phase}</h4>
                    <p className="text-sm text-arzir-primary font-medium mb-3">{step.duration}</p>
                    <ul className="text-sm text-arzir-gray-600 space-y-1">
                      {step.activities.map((activity, i) => (
                        <li key={i}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </Section>

      {/* FAQ */}
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
                <div className="font-medium">Maximizing ROI in Recycling</div>
              </div>
            </Link>
            <Link 
              href="/blog/car-baler-vs-car-shredder"
              className="flex items-center gap-2 text-arzir-primary hover:text-primary-600 transition-colors text-right"
            >
              <div className="text-right">
                <div className="text-sm text-arzir-gray-500">Next</div>
                <div className="font-medium">Car Baler vs Car Shredder</div>
              </div>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}