import { Section } from "@/components/common/Section";
import { DirectQuoteForm } from "@/components/forms/DirectQuoteForm";
import { ArrowRight, CheckCircle, Globe, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Applications - Recycling & Metal Processing Solutions",
  description: "Explore ARZIR applications across scrap recycling, metal fabrication, automotive dismantling, aluminum processing, and waste management industries.",
};

const applications = [
  {
    title: "Scrap Recycling",
    description: "Maximize recovery value with high-density compaction solutions that transform waste into valuable resources",
    href: "/applications/scrap-recycling",
    image: "/images/applications/scrap-recycling.png",
    stats: "85% efficiency increase",
    alt: "Scrap recycling yard using ARZIR balers and shears"
  },
  {
    title: "Metal Fabrication",
    description: "Turn offcuts into value with efficient baling & shearing systems designed for continuous operation",
    href: "/applications/metal-fabrication", 
    image: "/images/applications/metal-fabrication-full.jpg",
    stats: "60% waste reduction",
    alt: "Metal fabrication shop with ARZIR equipment"
  },
  {
    title: "Automotive Dismantling",
    description: "Faster ELV processing with robust baling & shearing equipment built for heavy-duty applications",
    href: "/applications/automotive-dismantling",
    image: "/images/applications/automotive-dismantling-full.jpg",
    stats: "45% faster processing",
    alt: "Automotive dismantling facility using ARZIR balers"
  },
  {
    title: "Aluminum Processing",
    description: "Stable extrusion and compacting solutions for clean aluminum streams with optimal material recovery",
    href: "/applications/aluminum-processing",
    image: "/images/applications/aluminum-processing-full.jpg",
    stats: "95% material recovery",
    alt: "Aluminum processing plant with ARZIR equipment"
  },
  {
    title: "Steel Mills",
    description: "Handle mill scrap safely with industrial-grade processing equipment designed for continuous operation",
    href: "/applications/steel-mills",
    image: "/images/applications/steel-mills-full.jpg",
    stats: "24/7 operation",
    alt: "Steel mill using ARZIR scrap processing equipment"
  },
  {
    title: "Shipbreaking",
    description: "Safe vessel dismantling solutions with specialized equipment for maritime recycling operations",
    href: "/applications/shipbreaking",
    image: "/images/applications/shipbreaking-full.jpg",
    stats: "98% material recovery",
    alt: "Shipbreaking yard with ARZIR heavy-duty shears"
  },
  {
    title: "Construction & Demolition Recycling",
    description: "Efficient processing of construction debris with advanced sorting and recovery systems",
    href: "/applications/construction-demolition-recycling",
    image: "🏗️",
    stats: "85% recovery rate",
    alt: "Construction site metal recycling with ARZIR equipment"
  },
  {
    title: "Railway Scrapping",
    description: "Specialized equipment for railway car dismantling and locomotive recycling with heavy-duty capabilities",
    href: "/applications/railway-scrapping",
    image: "🚂",
    stats: "92% material recovery",
    alt: "Railway scrapping operation using ARZIR shears"
  },
  {
    title: "E-Waste Recycling",
    description: "Advanced electronic waste processing systems for safe recovery of precious metals and components",
    href: "/applications/ewaste-recycling",
    image: "💻",
    stats: "99% precious metal recovery",
    alt: "Electronic waste recycling facility with ARZIR equipment"
  },
  {
    title: "Non-Ferrous Recycling",
    description: "Specialized processing systems for aluminum, copper, brass, and other non-ferrous metals",
    href: "/applications/non-ferrous-recycling",
    image: "🟡",
    stats: "98% purity levels",
    alt: "Non-ferrous metal recycling using ARZIR equipment"
  },
  {
    title: "Cable Recycling",
    description: "Efficient wire and cable processing systems for copper recovery with automated stripping technology",
    href: "/applications/cable-recycling",
    image: "🔌",
    stats: "99.5% copper recovery",
    alt: "Cable recycling facility with ARZIR processing equipment"
  },
  {
    title: "Aerospace Recycling",
    description: "Specialized aircraft dismantling and aerospace material recovery systems for high-value alloys",
    href: "/applications/aerospace-recycling",
    image: "✈️",
    stats: "Aviation certified",
    alt: "Aerospace recycling facility processing aircraft materials"
  }
];

const advantages = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Heavy-duty frames and long service life"
  },
  {
    icon: CheckCircle,
    title: "Performance", 
    description: "High bale density and consistent throughput"
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "Commissioning, training, and spare parts worldwide"
  }
];

export default function ApplicationsPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black">
            Applications
          </h1>
          <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-world use cases of ARZIR machinery across recycling and metal processing industries.
          </p>
        </div>
      </Section>

      {/* Introduction */}
      <Section background="white" size="lg">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-arzir-gray-600 leading-relaxed">
            We provide tailored equipment combinations and capacity planning solutions for different industrial applications. 
            Our experienced engineering team ensures optimal workflow design and maximum efficiency for your specific requirements.
          </p>
        </div>
      </Section>

      {/* Applications Grid */}
      <Section background="gray" size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((application) => (
            <div key={application.title} className="group">
              <Link href={application.href}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-arzir-gray-100 overflow-hidden h-full">
                  {/* Header with Image and Stats */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {application.image.startsWith('/') ? (
                      <Image
                        src={application.image}
                        alt={application.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 text-arzir-gray-500">
                        <div className="text-center">
                          <div className="text-8xl mb-4">{application.image}</div>
                          <p className="text-lg font-medium">{application.title}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-arzir-primary rounded-full text-xs font-semibold border border-arzir-primary/20">
                      {application.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-heading font-bold text-black group-hover:text-arzir-primary transition-colors duration-300">
                      {application.title}
                    </h3>
                    <p className="text-arzir-gray-600 leading-relaxed text-sm line-clamp-3">
                      {application.description}
                    </p>
                    <div className="flex items-center text-arzir-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300 pt-2">
                      <span>Explore Solutions</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Why ARZIR */}
      <Section background="white" size="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
            Why ARZIR
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="text-center space-y-4">
              <div className="w-16 h-16 bg-arzir-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <advantage.icon className="h-8 w-8 text-arzir-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-black">
                {advantage.title}
              </h3>
              <p className="text-arzir-gray-600">
                {advantage.description}
              </p>
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
                
                <DirectQuoteForm source="applications_bottom" />
                
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