import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, TrendingUp, Calculator, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maximizing ROI in Metal Recycling Operations | ARZIR Blog",
  description: "Discover proven strategies to increase profitability through equipment optimization, process improvements, and smart material handling techniques.",
};

const roiStrategies = [
  {
    strategy: "Equipment Optimization",
    impact: "25-40% ROI increase",
    description: "Right-sizing equipment for throughput and automating repetitive processes",
    actions: ["Capacity analysis", "Automation assessment", "Energy efficiency upgrades"]
  },
  {
    strategy: "Material Flow Optimization", 
    impact: "15-30% ROI increase",
    description: "Streamlining material handling and reducing processing bottlenecks",
    actions: ["Layout optimization", "Conveyor systems", "Storage solutions"]
  },
  {
    strategy: "Quality Improvement",
    impact: "20-35% ROI increase", 
    description: "Increasing bale density and material purity for higher market value",
    actions: ["Density optimization", "Contamination control", "Sorting improvements"]
  },
  {
    strategy: "Operational Efficiency",
    impact: "10-25% ROI increase",
    description: "Reducing downtime, maintenance costs, and operational waste",
    actions: ["Preventive maintenance", "Operator training", "Process monitoring"]
  }
];

const costReductionAreas = [
  {
    area: "Energy Consumption",
    potential: "15-25% savings",
    methods: ["Variable speed drives", "Energy monitoring", "Power factor correction"]
  },
  {
    area: "Labor Costs",
    potential: "20-40% savings", 
    methods: ["Automation", "Process optimization", "Cross-training"]
  },
  {
    area: "Maintenance Costs",
    potential: "30-50% savings",
    methods: ["Preventive maintenance", "Condition monitoring", "Spare parts optimization"]
  },
  {
    area: "Material Handling",
    potential: "10-30% savings",
    methods: ["Conveyor systems", "Automated sorting", "Layout optimization"]
  }
];

const revenueEnhancement = [
  {
    method: "Increase Bale Density",
    description: "Higher density bales command premium prices and reduce transport costs",
    impact: "15-30% price premium"
  },
  {
    method: "Improve Material Purity",
    description: "Cleaner materials with less contamination achieve higher market values",
    impact: "20-40% price increase"
  },
  {
    method: "Expand Material Types",
    description: "Processing additional material streams increases revenue opportunities",
    impact: "25-50% volume increase"
  },
  {
    method: "Market Timing",
    description: "Strategic inventory management to capitalize on price fluctuations",
    impact: "10-20% price optimization"
  }
];

const implementationSteps = [
  {
    phase: "Assessment",
    duration: "1-2 weeks",
    activities: ["Current state analysis", "Equipment evaluation", "Process mapping"],
    outcome: "Baseline understanding and improvement opportunities identified"
  },
  {
    phase: "Planning",
    duration: "2-4 weeks", 
    activities: ["ROI calculations", "Investment prioritization", "Implementation timeline"],
    outcome: "Detailed improvement plan with expected returns"
  },
  {
    phase: "Implementation",
    duration: "3-12 months",
    activities: ["Equipment upgrades", "Process changes", "Training programs"],
    outcome: "Improvements deployed and operational"
  },
  {
    phase: "Optimization",
    duration: "Ongoing",
    activities: ["Performance monitoring", "Continuous improvement", "Regular reviews"],
    outcome: "Sustained performance gains and further optimization"
  }
];

export default function MaximizingROIBlogPost() {
  return (
    <>
      {/* Article Header */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
            <TrendingUp className="h-4 w-4" />
            Buying Tips
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
            Maximizing ROI in Metal Recycling Operations
          </h1>
          <p className="text-xl text-arzir-gray-600 leading-relaxed">
            Discover proven strategies to increase profitability through equipment optimization, process improvements, and smart material handling techniques.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-arzir-gray-500">
            <span>By Sarah Chen</span>
            <span>•</span>
            <span>August 5, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </Section>

      {/* Article Hero Image */}
      <Section background="white" size="sm">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
            <Image 
              src="/images/blog/Maximizing ROI in Metal Recycling Operations.webp" 
              alt="Maximizing ROI in Metal Recycling Operations"
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

      {/* Article Content */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-arzir-gray-700">
                In today&apos;s competitive scrap metal market, maximizing return on investment (ROI) requires a systematic approach to operational excellence. Whether you&apos;re running a small scrap yard or a large-scale processing facility, the principles of profitable operation remain consistent: optimize equipment utilization, streamline processes, and focus on value-added activities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Key ROI Enhancement Strategies</h2>
              <p className="text-arzir-gray-700 mb-6">
                Successful metal recycling operations focus on four primary areas for ROI improvement. Each area offers significant potential for increased profitability when properly implemented.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roiStrategies.map((strategy) => (
                  <div key={strategy.strategy} className="bg-arzir-gray-50 p-6 rounded-xl">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-heading font-semibold text-black">
                          {strategy.strategy}
                        </h3>
                        <div className="px-3 py-1 bg-arzir-primary/10 rounded-full">
                          <span className="text-sm font-semibold text-arzir-primary">{strategy.impact}</span>
                        </div>
                      </div>
                      <p className="text-sm text-arzir-gray-600">
                        {strategy.description}
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-arzir-gray-500 uppercase tracking-wider">
                          Key Actions
                        </div>
                        <div className="space-y-1">
                          {strategy.actions.map((action, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-arzir-primary" />
                              <span className="text-xs text-arzir-gray-600">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Cost Reduction Opportunities</h2>
              <p className="text-arzir-gray-700 mb-6">
                Identifying and implementing cost reduction measures is often the fastest path to improved ROI. Focus on these high-impact areas for immediate results.
              </p>
              
              <div className="space-y-4">
                {costReductionAreas.map((area) => (
                  <div key={area.area} className="border border-arzir-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-black">{area.area}</h3>
                      <span className="text-sm font-bold text-success">{area.potential}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {area.methods.map((method, idx) => (
                        <span key={idx} className="px-3 py-1 bg-arzir-gray-100 text-arzir-gray-700 rounded-md text-sm">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Revenue Enhancement Tactics</h2>
              <p className="text-arzir-gray-700 mb-6">
                While cost reduction is important, revenue enhancement often provides the greatest ROI impact. Focus on these proven methods to increase your revenue per ton processed.
              </p>
              
              <div className="space-y-6">
                {revenueEnhancement.map((method) => (
                  <div key={method.method} className="flex gap-6 p-6 bg-white border border-arzir-gray-200 rounded-xl">
                    <div className="w-12 h-12 bg-arzir-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-arzir-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-black">{method.method}</h3>
                        <span className="text-sm font-bold text-success">{method.impact}</span>
                      </div>
                      <p className="text-arzir-gray-600">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Implementation Roadmap</h2>
              <p className="text-arzir-gray-700 mb-6">
                Successful ROI improvement requires a structured approach. Follow this proven implementation roadmap to maximize your chances of success.
              </p>
              
              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
                  <div key={step.phase} className="relative">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-4">
                          <h3 className="text-lg font-semibold text-black">{step.phase}</h3>
                          <span className="text-sm text-arzir-gray-500">({step.duration})</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap gap-2">
                            {step.activities.map((activity, idx) => (
                              <span key={idx} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-sm">
                                {activity}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-arzir-gray-600 italic">
                            <strong>Outcome:</strong> {step.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < implementationSteps.length - 1 && (
                      <div className="absolute top-12 left-6 w-px h-8 bg-arzir-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-arzir-primary/5 p-6 rounded-xl border-l-4 border-arzir-primary">
              <h3 className="text-lg font-semibold text-black mb-2">Key Takeaway</h3>
              <p className="text-arzir-gray-700">
                ROI maximization in metal recycling is achievable through systematic improvements in equipment, processes, and operations. Start with quick wins in cost reduction while planning longer-term investments in automation and efficiency. Most operations can achieve 20-50% ROI improvements within 12-18 months of focused effort.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-heading font-bold text-black text-center">
            Need Help Maximizing Your ROI?
          </h2>
          <p className="text-arzir-gray-600 text-center">
            Our ROI calculator can help you evaluate potential returns from equipment upgrades and process improvements.
          </p>
          <div className="flex justify-center gap-4">
            <QuoteDialog source="roi_blog_cta">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get ROI Analysis
                <Calculator className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/calculator/roi-payback">
                Use ROI Calculator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section background="white" size="md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/blog">
              ← Back to Blog
            </Link>
          </Button>
          <Button asChild>
            <Link href="/blog/preventive-maintenance-guide-recycling-equipment">
              Next Article →
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}