import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { DirectQuoteForm } from "@/components/forms/DirectQuoteForm";
import { ArrowRight, Calculator, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Calculators - Equipment Sizing & ROI Tools",
  description: "Free engineering calculators for recycling equipment sizing, power estimation, and ROI analysis. Professional tools for metal processing setup planning.",
};

const calculators = [
  {
    title: "Scrap Baler Sizing Calculator",
    description: "Calculate optimal baler capacity and specifications based on your material mix and throughput requirements.",
    category: "Sizing",
    estimatedTime: "~3 min",
    tags: ["Sizing", "Capacity"],
    href: "/calculator/scrap-baler-sizing",
    icon: "📦"
  },
  {
    title: "Shredder Power Calculator",
    description: "Estimate power requirements and energy costs for different shredder configurations and material types.",
    category: "Power",
    estimatedTime: "~2 min", 
    tags: ["Power", "Energy"],
    href: "/calculator/shredder-power",
    icon: "⚡"
  },
  {
    title: "ROI & Payback Calculator",
    description: "Calculate return on investment and payback period for recycling equipment installations and upgrades.",
    category: "ROI",
    estimatedTime: "~4 min",
    tags: ["ROI", "Financial"],
    href: "/calculator/roi-payback",
    icon: "📊"
  },
  {
    title: "Throughput Capacity Calculator",
    description: "Determine optimal equipment configuration to meet your daily and hourly throughput targets.",
    category: "Capacity",
    estimatedTime: "~3 min",
    tags: ["Throughput", "Planning"],
    href: "/calculator/throughput-capacity",
    icon: "🏭"
  },
  {
    title: "Bale Density Optimizer",
    description: "Optimize bale density settings for different material types to maximize transport efficiency and value.",
    category: "Optimization",
    estimatedTime: "~2 min",
    tags: ["Density", "Optimization"],
    href: "/calculator/bale-density",
    icon: "🎯"
  },
  {
    title: "Maintenance Cost Estimator",
    description: "Estimate annual maintenance costs and spare parts requirements for your equipment fleet.",
    category: "Maintenance",
    estimatedTime: "~3 min",
    tags: ["Maintenance", "Cost"],
    href: "/calculator/maintenance-cost",
    icon: "🔧"
  }
];

export default function CalculatorPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-arzir-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <Calculator className="h-10 w-10 text-arzir-primary" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black">
            Calculators
          </h1>
          <p className="text-xl lg:text-2xl text-arzir-gray-600 max-w-4xl mx-auto leading-relaxed">
            Engineer-friendly tools to size, compare, and estimate performance for recycling and metal processing setups.
          </p>
          <div className="bg-arzir-gray-50 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-sm text-arzir-gray-600">
              <strong>Free to use</strong> • No registration required • Based on engineering assumptions • For initial sizing only
            </p>
          </div>
        </div>
      </Section>

      {/* Calculator Grid */}
      <Section background="white" size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((calculator) => (
            <div key={calculator.title} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-arzir-gray-100 overflow-hidden h-full">
                {/* Header */}
                <div className="p-6 border-b border-arzir-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{calculator.icon}</div>
                    <div className="flex items-center gap-2 text-xs text-arzir-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{calculator.estimatedTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-black group-hover:text-arzir-primary transition-colors duration-300 mb-2">
                    {calculator.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-arzir-primary/10 text-arzir-primary rounded-md text-xs font-medium">
                      {calculator.category}
                    </span>
                    {calculator.tags.slice(1).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4">
                  <p className="text-arzir-gray-600 leading-relaxed text-sm mb-6">
                    {calculator.description}
                  </p>
                  
                  <Button asChild className="w-full bg-arzir-primary hover:bg-primary-600 group-hover:scale-105 transition-transform duration-200">
                    <Link href={calculator.href}>
                      Open Calculator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section background="white" size="xl">
        <div className="bg-gradient-to-r from-arzir-primary to-primary-600 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Content */}
            <div className="lg:col-span-1 p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden min-h-[600px]">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                    Ready to Work with ARZIR?
                  </h2>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Join thousands of satisfied customers worldwide who trust ARZIR for their 
                    recycling and metal processing equipment needs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-blue-100">Expert engineering consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-blue-100">24/7 global technical support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-blue-100">Comprehensive training programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-blue-100">Guaranteed spare parts availability</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">2,500+</div>
                    <div className="text-sm text-blue-200">Machines Delivered</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">100+</div>
                    <div className="text-sm text-blue-200">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-1 bg-arzir-gray-50 p-8 lg:p-12 flex flex-col justify-center min-h-[600px]">
              <div className="w-full space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-black mb-2">
                    Get Your Quote
                  </h3>
                  <p className="text-sm text-arzir-gray-600">
                    Start your recycling equipment journey with ARZIR
                  </p>
                </div>
                
                <DirectQuoteForm source="calculators_bottom" />
                
                <div className="space-y-3 pt-4">
                  <div className="flex items-center justify-center gap-2 text-xs text-arzir-gray-500">
                    <div className="w-1 h-1 bg-arzir-gray-400 rounded-full"></div>
                    <span>Free consultation included</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-arzir-gray-500">
                    <div className="w-1 h-1 bg-arzir-gray-400 rounded-full"></div>
                    <span>Custom solution design</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-arzir-gray-500">
                    <div className="w-1 h-1 bg-arzir-gray-400 rounded-full"></div>
                    <span>24-hour response guarantee</span>
                  </div>
                </div>
                
                <p className="text-xs text-arzir-gray-500 text-center pt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}