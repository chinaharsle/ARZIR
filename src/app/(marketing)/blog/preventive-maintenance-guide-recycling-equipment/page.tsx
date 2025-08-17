import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Wrench, CheckCircle, Calendar } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preventive Maintenance Guide for Recycling Equipment | ARZIR Blog",
  description: "Essential maintenance schedules, common issues, and best practices to extend equipment life and minimize downtime in recycling operations.",
};

const maintenanceSchedules = [
  {
    equipment: "Hydraulic Balers",
    daily: ["Visual inspection", "Oil level check", "Pressure readings"],
    weekly: ["Hydraulic filter check", "Tie wire supply", "Safety systems test"],
    monthly: ["Hydraulic fluid analysis", "Cylinder inspection", "Electrical connections"],
    quarterly: ["Major service", "Seal replacement", "Calibration check"],
    annually: ["Complete overhaul", "Structural inspection", "Certification renewal"]
  },
  {
    equipment: "Shredders",
    daily: ["Cutting tool inspection", "Vibration check", "Output quality"],
    weekly: ["Screen condition", "Belt tension", "Lubrication points"],
    monthly: ["Bearing inspection", "Motor analysis", "Conveyor maintenance"],
    quarterly: ["Tool replacement", "Drive system service", "Safety audit"],
    annually: ["Major rebuild", "Foundation check", "Performance review"]
  },
  {
    equipment: "Metal Shears",
    daily: ["Blade condition", "Hydraulic pressure", "Safety barriers"],
    weekly: ["Blade gap measurement", "Oil contamination check", "Control calibration"],
    monthly: ["Cylinder service", "Electrical inspection", "Wear plate check"],
    quarterly: ["Blade replacement", "Major hydraulic service", "Training update"],
    annually: ["Structural overhaul", "Certification", "Upgrade assessment"]
  }
];

const commonIssues = [
  {
    issue: "Hydraulic System Failures",
    causes: ["Contaminated fluid", "Worn seals", "Overheating", "Improper pressure"],
    prevention: ["Regular fluid changes", "Filter maintenance", "Temperature monitoring", "Pressure relief checks"],
    earlyWarnings: ["Sluggish operation", "Fluid leaks", "Unusual noise", "Pressure drops"]
  },
  {
    issue: "Cutting Tool Wear",
    causes: ["Abrasive materials", "Improper clearances", "Overloading", "Poor lubrication"],
    prevention: ["Material screening", "Regular adjustment", "Load monitoring", "Proper lubrication"],
    earlyWarnings: ["Poor cut quality", "Increased power draw", "Vibration", "Chip formation"]
  },
  {
    issue: "Electrical Failures",
    causes: ["Moisture ingress", "Overheating", "Vibration damage", "Age deterioration"],
    prevention: ["Enclosure sealing", "Ventilation maintenance", "Vibration isolation", "Regular inspection"],
    earlyWarnings: ["Erratic operation", "Overheating", "Arcing", "Control malfunctions"]
  },
  {
    issue: "Structural Fatigue",
    causes: ["Cyclic loading", "Overloading", "Poor foundation", "Material buildup"],
    prevention: ["Load monitoring", "Proper operation", "Foundation maintenance", "Regular cleaning"],
    earlyWarnings: ["Cracks", "Misalignment", "Unusual vibration", "Bolt loosening"]
  }
];

const bestPractices = [
  {
    category: "Documentation",
    practices: [
      "Maintain detailed maintenance logs",
      "Track performance metrics",
      "Document all repairs and modifications",
      "Keep warranty and service records",
      "Update procedures based on experience"
    ]
  },
  {
    category: "Training",
    practices: [
      "Regular operator training programs",
      "Maintenance technician certification",
      "Safety procedure updates",
      "Equipment-specific training",
      "Emergency response drills"
    ]
  },
  {
    category: "Inventory Management",
    practices: [
      "Maintain critical spare parts inventory",
      "Establish supplier relationships",
      "Track parts usage patterns",
      "Implement just-in-time ordering",
      "Regular inventory audits"
    ]
  },
  {
    category: "Performance Monitoring",
    practices: [
      "Real-time performance tracking",
      "Predictive maintenance technologies",
      "Trend analysis and reporting",
      "Benchmark against industry standards",
      "Continuous improvement programs"
    ]
  }
];

const maintenanceCosts = [
  {
    approach: "Reactive Maintenance",
    description: "Fix when broken",
    cost: "High",
    downtime: "Maximum",
    reliability: "Poor",
    benefits: ["Lower initial cost"],
    drawbacks: ["Unexpected failures", "Higher total cost", "Poor planning"]
  },
  {
    approach: "Preventive Maintenance", 
    description: "Scheduled maintenance",
    cost: "Medium",
    downtime: "Moderate",
    reliability: "Good",
    benefits: ["Predictable costs", "Reduced failures", "Better planning"],
    drawbacks: ["Some unnecessary work", "Resource intensive"]
  },
  {
    approach: "Predictive Maintenance",
    description: "Condition-based maintenance",
    cost: "Medium-High",
    downtime: "Minimum",
    reliability: "Excellent",
    benefits: ["Optimal timing", "Maximum uptime", "Cost effective"],
    drawbacks: ["High technology cost", "Skills required"]
  }
];

const implementationTips = [
  {
    tip: "Start Small",
    description: "Begin with critical equipment and expand the program gradually",
    timeframe: "Month 1-3"
  },
  {
    tip: "Use Technology",
    description: "Implement CMMS (Computerized Maintenance Management System) for tracking",
    timeframe: "Month 2-4"
  },
  {
    tip: "Train Your Team",
    description: "Invest in training for both operators and maintenance personnel",
    timeframe: "Ongoing"
  },
  {
    tip: "Measure Results",
    description: "Track key metrics like uptime, costs, and equipment performance",
    timeframe: "Month 3+"
  },
  {
    tip: "Continuous Improvement",
    description: "Regularly review and refine maintenance procedures based on results",
    timeframe: "Ongoing"
  }
];

export default function PreventiveMaintenanceBlogPost() {
  return (
    <>
      {/* Article Header */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white !pt-2 lg:!pt-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
            <Wrench className="h-4 w-4" />
            Maintenance & Service
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-black leading-tight">
            Preventive Maintenance Guide for Recycling Equipment
          </h1>
          <p className="text-xl text-arzir-gray-600 leading-relaxed">
            Essential maintenance schedules, common issues, and best practices to extend equipment life and minimize downtime in recycling operations.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-arzir-gray-500">
            <span>By Mike Rodriguez</span>
            <span>•</span>
            <span>July 28, 2025</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>
      </Section>

      {/* Article Hero Image */}
      <Section background="white" size="sm">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🔧</div>
              <p className="text-lg font-medium text-arzir-gray-600">Preventive Maintenance</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section background="white" size="lg">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-arzir-gray-700">
                Preventive maintenance is the cornerstone of profitable recycling operations. Well-maintained equipment operates at peak efficiency, experiences fewer breakdowns, and has a significantly longer service life. This comprehensive guide provides practical maintenance schedules, identifies common issues, and outlines best practices for keeping your recycling equipment running smoothly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Equipment-Specific Maintenance Schedules</h2>
              <p className="text-arzir-gray-700 mb-6">
                Different types of recycling equipment require specific maintenance approaches. Here are detailed schedules for the most common equipment types.
              </p>
              
              <div className="space-y-8">
                {maintenanceSchedules.map((schedule, index) => (
                  <div key={schedule.equipment} className="border border-arzir-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-black mb-4">{schedule.equipment}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-arzir-primary text-sm uppercase tracking-wider">Daily</h4>
                        <div className="space-y-1">
                          {schedule.daily.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-success mt-1 flex-shrink-0" />
                              <span className="text-xs text-arzir-gray-600">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-arzir-primary text-sm uppercase tracking-wider">Weekly</h4>
                        <div className="space-y-1">
                          {schedule.weekly.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-success mt-1 flex-shrink-0" />
                              <span className="text-xs text-arzir-gray-600">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-arzir-primary text-sm uppercase tracking-wider">Monthly</h4>
                        <div className="space-y-1">
                          {schedule.monthly.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-success mt-1 flex-shrink-0" />
                              <span className="text-xs text-arzir-gray-600">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-arzir-primary text-sm uppercase tracking-wider">Quarterly</h4>
                        <div className="space-y-1">
                          {schedule.quarterly.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-success mt-1 flex-shrink-0" />
                              <span className="text-xs text-arzir-gray-600">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-arzir-primary text-sm uppercase tracking-wider">Annually</h4>
                        <div className="space-y-1">
                          {schedule.annually.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-success mt-1 flex-shrink-0" />
                              <span className="text-xs text-arzir-gray-600">{task}</span>
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
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Common Issues and Prevention</h2>
              <p className="text-arzir-gray-700 mb-6">
                Understanding common failure modes and their early warning signs allows you to address issues before they become costly breakdowns.
              </p>
              
              <div className="space-y-6">
                {commonIssues.map((issue, index) => (
                  <div key={issue.issue} className="bg-arzir-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-black mb-4">{issue.issue}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 text-sm mb-2">Common Causes</h4>
                        <ul className="space-y-1">
                          {issue.causes.map((cause, idx) => (
                            <li key={idx} className="text-xs text-arzir-gray-600">• {cause}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 text-sm mb-2">Prevention</h4>
                        <ul className="space-y-1">
                          {issue.prevention.map((prevent, idx) => (
                            <li key={idx} className="text-xs text-arzir-gray-600">• {prevent}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-medium text-orange-600 text-sm mb-2">Early Warning Signs</h4>
                        <div className="flex flex-wrap gap-2">
                          {issue.earlyWarnings.map((warning, idx) => (
                            <span key={idx} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                              {warning}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Maintenance Approach Comparison</h2>
              <p className="text-arzir-gray-700 mb-6">
                Different maintenance philosophies offer varying benefits and costs. Understanding these approaches helps you choose the right strategy for your operation.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-arzir-gray-50">
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Approach</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cost</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Downtime</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Reliability</th>
                      <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {maintenanceCosts.map((approach, index) => (
                      <tr key={approach.approach} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                        <td className="border border-arzir-gray-200 p-4">
                          <div>
                            <div className="font-medium text-black">{approach.approach}</div>
                            <div className="text-sm text-arzir-gray-600">{approach.description}</div>
                          </div>
                        </td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{approach.cost}</td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{approach.downtime}</td>
                        <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{approach.reliability}</td>
                        <td className="border border-arzir-gray-200 p-4">
                          <div className="space-y-1">
                            {approach.benefits.map((benefit, idx) => (
                              <div key={idx} className="text-xs text-success">+ {benefit}</div>
                            ))}
                            {approach.drawbacks.map((drawback, idx) => (
                              <div key={idx} className="text-xs text-red-600">- {drawback}</div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Best Practices for Success</h2>
              <p className="text-arzir-gray-700 mb-6">
                Implementing these proven best practices will maximize the effectiveness of your preventive maintenance program.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bestPractices.map((category, index) => (
                  <div key={category.category} className="bg-white border border-arzir-gray-200 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-black mb-4">{category.category}</h3>
                    <div className="space-y-3">
                      {category.practices.map((practice, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-arzir-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-arzir-gray-700">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-black mb-4">Implementation Roadmap</h2>
              <p className="text-arzir-gray-700 mb-6">
                Follow this step-by-step approach to successfully implement a preventive maintenance program in your facility.
              </p>
              
              <div className="space-y-4">
                {implementationTips.map((tip, index) => (
                  <div key={tip.tip} className="flex gap-4 p-4 bg-arzir-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-arzir-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-black">{tip.tip}</h3>
                        <span className="text-xs px-2 py-1 bg-arzir-primary/10 text-arzir-primary rounded">
                          {tip.timeframe}
                        </span>
                      </div>
                      <p className="text-sm text-arzir-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-arzir-primary/5 p-6 rounded-xl border-l-4 border-arzir-primary">
              <h3 className="text-lg font-semibold text-black mb-2">Key Takeaway</h3>
              <p className="text-arzir-gray-700">
                Preventive maintenance is an investment that pays dividends through increased uptime, lower repair costs, and extended equipment life. Start with critical equipment, implement systematic schedules, and gradually expand your program. Most facilities see 20-30% reduction in maintenance costs and 15-25% improvement in equipment availability within the first year.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Content */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-heading font-bold text-black text-center">
            Need Maintenance Support?
          </h2>
          <p className="text-arzir-gray-600 text-center">
            Our service team can help you develop and implement effective maintenance programs for your equipment.
          </p>
          <div className="flex justify-center gap-4">
            <QuoteDialog source="maintenance_blog_cta">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Maintenance Support
                <Wrench className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
            <Button variant="outline" size="lg" asChild>
              <Link href="/calculator/maintenance-cost">
                Calculate Maintenance Costs
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
            <Link href="/blog/maximizing-roi-metal-recycling-operations">
              ← Previous Article
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">
              Back to Blog
            </Link>
          </Button>
          <Button asChild>
            <Link href="/blog/steel-mill-scrap-processing-best-practices">
              Next Article →
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}