import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ProductCTA } from "@/components/common/ProductCTA";
import { ArrowRight, CheckCircle, Shield, Zap, Settings, Award, Gauge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Scrap Metal Baler | High-Density Compaction Equipment",
  description: "ARZIR scrap metal balers deliver up to 1200 tons press force and 2.5 t/m³ density. Proven performance in recycling facilities worldwide. 300-1200T models available. Get quote today.",
  keywords: [
    "scrap metal baler",
    "industrial baler machine", 
    "metal compaction equipment",
    "recycling baler",
    "high-density baler",
    "ARZIR baler",
    "scrap processing equipment"
  ],
  openGraph: {
    title: "Industrial Scrap Metal Baler | High-Density Compaction",
    description: "ARZIR scrap metal balers deliver up to 1200 tons press force and 2.5 t/m³ density. Proven ROI for recycling facilities worldwide.",
    images: [
      {
        url: "/images/products/recycling-baler.png",
        width: 1200,
        height: 630,
        alt: "ARZIR Scrap Metal Baler - High-Density Compaction Equipment"
      }
    ]
  }
};

const keyFeatures = [
  {
    icon: Zap,
    title: "High-Density Baling",
    description: "Up to 1200 tons of pressure for maximum compaction and optimal bale density up to 2.5 t/m³"
  },
  {
    icon: Shield,
    title: "Robust Build",
    description: "Heavy-duty steel frame construction designed for continuous operation and long-term reliability"
  },
  {
    icon: Settings,
    title: "Easy Operation", 
    description: "PLC control with touchscreen interface for intuitive operation and automated tie systems"
  },
  {
    icon: CheckCircle,
    title: "Low Maintenance",
    description: "Optimized hydraulic system design reduces downtime and maintenance requirements"
  },
  {
    icon: Award,
    title: "Energy Efficiency",
    description: "Advanced hydraulic technology reduces power consumption while maintaining high output"
  },
  {
    icon: Gauge,
    title: "Fast Cycle Times",
    description: "Rapid compression cycles from 45-90 seconds enable high throughput processing"
  }
];

const specifications = [
  {
    model: "ARZIR-300",
    pressForce: "300 tons",
    baleSize: "1.1 x 1.1 x 1.6m",
    cycleTime: "45-60s",
    motorPower: "45 kW",
    dimensions: "8.5 x 3.2 x 4.2m",
    weight: "12 tons"
  },
  {
    model: "ARZIR-500", 
    pressForce: "500 tons",
    baleSize: "1.2 x 1.2 x 1.8m",
    cycleTime: "50-70s",
    motorPower: "75 kW",
    dimensions: "10.2 x 3.5 x 4.8m",
    weight: "18 tons"
  },
  {
    model: "ARZIR-800",
    pressForce: "800 tons",
    baleSize: "1.3 x 1.3 x 2.0m", 
    cycleTime: "60-80s",
    motorPower: "110 kW",
    dimensions: "12.5 x 4.0 x 5.2m",
    weight: "28 tons"
  },
  {
    model: "ARZIR-1200",
    pressForce: "1200 tons",
    baleSize: "1.4 x 1.4 x 2.2m",
    cycleTime: "70-90s", 
    motorPower: "160 kW",
    dimensions: "15.0 x 4.5 x 5.8m",
    weight: "42 tons"
  }
];

const workflowSteps = [
  {
    step: "Loading",
    description: "Material is loaded into the compression chamber via crane, loader, or conveyor system"
  },
  {
    step: "Compressing",
    description: "Hydraulic ram applies up to 1200 tons pressure to achieve maximum bale density"
  },
  {
    step: "Tying",
    description: "Automatic wire tie system secures the bale with galvanized steel wire"
  },
  {
    step: "Discharging",
    description: "Completed bale is ejected and ready for transport to steel mills or processors"
  }
];

const applications = [
  {
    title: "Scrap Recycling",
    description: "Mixed ferrous and non-ferrous scrap processing",
    image: "/images/applications/scrap-recycling.png",
    href: "/applications/scrap-recycling"
  },
  {
    title: "Automotive Dismantling",
    description: "End-of-life vehicle body and component processing",
    image: "/images/applications/automotive-dismantling-full.jpg", 
    href: "/applications/automotive-dismantling"
  },
  {
    title: "Foundries",
    description: "Foundry returns and casting scrap compaction",
    image: "/images/applications/steel-mills-full.jpg",
    href: "/applications/steel-mills"
  },
  {
    title: "Metal Fabrication",
    description: "Manufacturing offcuts and fabrication waste",
    image: "/images/applications/metal-fabrication-full.jpg",
    href: "/applications/metal-fabrication"
  }
];

const caseStudies = [
  {
    title: "Steel Recycling Plant - Brazil",
    location: "São Paulo, Brazil",
    results: "+45% throughput, -30% labor costs",
    metrics: "850 tons/day capacity",
    equipment: "ARZIR-800 Baler + Gantry Shear"
  },
  {
    title: "Automotive Scrap Yard - USA", 
    location: "Detroit, Michigan",
    results: "+60% processing speed, ROI in 18 months",
    metrics: "120 vehicles/day",
    equipment: "ARZIR-1200 Car Body Baler"
  },
  {
    title: "Metal Recycling Facility - Germany",
    location: "Hamburg, Germany",
    results: "+55% material recovery, -25% transport costs",
    metrics: "1200 tons/day capacity",
    equipment: "ARZIR-800 + ARZIR-500 Dual Setup"
  },
  {
    title: "Shipbreaking Yard - India",
    location: "Alang, Gujarat",
    results: "+40% processing efficiency, 22-month ROI",
    metrics: "300 tons steel/day",
    equipment: "ARZIR-1200 Heavy-Duty Baler"
  }
];

const faqs = [
  {
    question: "What materials can the scrap metal baler process?",
    answer: "The baler handles ferrous metals (steel, iron), non-ferrous metals (aluminum, copper, brass), mixed scrap, automotive bodies, appliances, and light structural steel. Material should be reasonably clean and free of excessive contamination."
  },
  {
    question: "What's the typical ROI for a scrap metal baler installation?",
    answer: "Most facilities see ROI within 18-36 months through increased material density (higher transport efficiency), reduced labor costs, and premium pricing for high-quality bales. Larger operations often achieve faster payback."
  },
  {
    question: "How much space is required for installation?",
    answer: "Space requirements vary by model: ARZIR-300 needs ~100m², ARZIR-800 needs ~200m², ARZIR-1200 needs ~300m². This includes equipment, material staging, and crane/loader access areas."
  },
  {
    question: "What maintenance is required and how often?",
    answer: "Regular maintenance includes hydraulic oil changes (1000 hours), filter replacement (500 hours), lubrication (daily), and visual inspections. Major overhauls typically occur every 5000-8000 operating hours."
  },
  {
    question: "Can the baler be customized for specific requirements?",
    answer: "Yes, we offer customization options including different bale sizes, special tie systems, custom feeding arrangements, enhanced safety features, and integration with existing material handling systems."
  }
];

export default function ScrapMetalBalerPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 via-white to-blue-50 !pt-16 sm:!pt-20 md:!pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-arzir-primary to-primary-600 text-white rounded-full text-sm font-medium shadow-lg">
                <Award className="h-4 w-4" />
                Industry Leading Performance
              </div>
              <h1 className="text-4xl lg:text-7xl font-heading font-bold text-black leading-tight">
                Industrial Scrap Metal{" "}
                <span className="text-arzir-primary">Baler</span>
              </h1>
              <h2 className="text-xl lg:text-3xl text-arzir-gray-700 font-medium leading-relaxed">
                Transform Your Scrap Processing with{" "}
                <span className="text-arzir-primary font-semibold">Up to 1200T Force</span>
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-arzir-gray-600 leading-relaxed">
              Maximize material density and reduce transport costs with ARZIR&apos;s proven high-performance balers.{" "}
              <strong className="text-black">ROI typically achieved in 24 months.</strong>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-arzir-primary">1200T</div>
                <div className="text-sm text-arzir-gray-600">Max Press Force</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-success">2.5t/m³</div>
                <div className="text-sm text-arzir-gray-600">Bale Density</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-arzir-gray-100 col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-arzir-gray-600">Installations</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <QuoteDialog source="scrap_metal_baler_hero">
                <Button size="lg" className="bg-arzir-primary hover:bg-primary-600 w-full sm:w-auto">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </QuoteDialog>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="#specifications">
                  View Specifications
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/products/single/scrap metal baler.png"
                alt="ARZIR Scrap Metal Baler - Industrial Recycling Equipment"
                fill
                className="object-contain sm:object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ✓ CE Certified
            </div>
            <div className="absolute -top-4 -left-4 bg-arzir-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              #1 Choice
            </div>
          </div>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section background="white" size="lg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Why ARZIR Balers Lead the Industry
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Over 200 successful installations worldwide. Proven ROI and unmatched reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-black">Proven ROI</h3>
              <p className="text-arzir-gray-600">
                <strong className="text-black">18-36 month payback</strong> through increased material density, 
                reduced transport costs, and premium pricing for high-quality bales.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-black">Superior Performance</h3>
              <p className="text-arzir-gray-600">
                <strong className="text-black">Up to 2.5 t/m³ density</strong> with 300-1200T press force range. 
                Process ferrous, non-ferrous, and mixed scrap streams efficiently.
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-black">Built to Last</h3>
              <p className="text-arzir-gray-600">
                <strong className="text-black">Heavy-duty construction</strong> designed for continuous operation. 
                Minimal maintenance requirements and maximum uptime.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Features & Benefits */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Advanced Features That Drive Results
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Every component engineered for maximum performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {feature.title}
                    </h3>
                    <p className="text-arzir-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section background="white" size="md">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black">
              Trusted by Industry Leaders Worldwide
            </h2>
            <p className="text-arzir-gray-600 max-w-2xl mx-auto">
              Join 200+ facilities that have transformed their operations with ARZIR balers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-arzir-primary">200+</div>
              <div className="text-sm text-arzir-gray-600">Global Installations</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-success">98%</div>
              <div className="text-sm text-arzir-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-arzir-gray-600">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-arzir-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section id="specifications" background="white" size="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Choose Your Perfect Configuration
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Four proven models to match your throughput and material requirements
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-arzir-gray-200 rounded-lg">
              <caption className="sr-only">ARZIR Scrap Metal Baler technical specifications</caption>
              <thead>
                <tr className="bg-arzir-gray-50">
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Model</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Press Force</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Bale Size</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Cycle Time</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Motor Power</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Dimensions</th>
                  <th className="border border-arzir-gray-200 p-4 text-left font-semibold text-black">Weight</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={spec.model} className={index % 2 === 0 ? "bg-white" : "bg-arzir-gray-25"}>
                    <td className="border border-arzir-gray-200 p-4 font-medium text-arzir-primary">{spec.model}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.pressForce}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.baleSize}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.cycleTime}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.motorPower}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.dimensions}</td>
                    <td className="border border-arzir-gray-200 p-4 text-arzir-gray-700">{spec.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            How the Scrap Metal Baler Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-arzir-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-black">
                    {step.step}
                  </h3>
                  <p className="text-sm text-arzir-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-arzir-primary -ml-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="group">
                <Link href={app.href}>
                  <div className="bg-arzir-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center space-y-4">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-black group-hover:text-arzir-primary transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-sm text-arzir-gray-600">
                      {app.description}
                    </p>
                    <div className="flex items-center justify-center text-arzir-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                      <span className="text-sm">View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Customer Success Stories */}
      <Section background="gray" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Customer Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white p-8 rounded-xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-black">
                    {study.title}
                  </h3>
                  <div className="text-sm text-arzir-gray-600">
                    📍 {study.location}
                  </div>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-black">Equipment:</strong> {study.equipment}
                    </div>
                    <div className="text-success font-medium">
                      {study.results}
                    </div>
                    <div className="text-arzir-gray-600">
                      <strong>Capacity:</strong> {study.metrics}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white" size="lg">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-arzir-gray-200 pb-6">
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

      {/* Bottom CTA */}
      <ProductCTA 
        title="Transform Your Scrap Processing with ARZIR Balers"
        description="Join hundreds of recycling facilities worldwide who trust ARZIR for high-performance scrap metal baling solutions."
        formSource="scrap-metal-baler_bottom" 
      />
    </>
  );
}
