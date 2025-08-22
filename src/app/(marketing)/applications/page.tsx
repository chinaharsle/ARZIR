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
    image: "/images/applications/Construction & Demolition Recycling.jpg",
    stats: "85% recovery rate",
    alt: "Construction site metal recycling with ARZIR equipment"
  },
  {
    title: "Railway Scrapping",
    description: "Specialized equipment for railway car dismantling and locomotive recycling with heavy-duty capabilities",
    href: "/applications/railway-scrapping",
    image: "/images/applications/Railway Scrapping Solutions.jpg",
    stats: "92% material recovery",
    alt: "Railway scrapping operation using ARZIR shears"
  },
  {
    title: "E-Waste Recycling",
    description: "Advanced electronic waste processing systems for safe recovery of precious metals and components",
    href: "/applications/ewaste-recycling",
    image: "/images/applications/E-Waste Recycling Solutions.jpg",
    stats: "99% precious metal recovery",
    alt: "Electronic waste recycling facility with ARZIR equipment"
  },
  {
    title: "Non-Ferrous Recycling",
    description: "Specialized processing systems for aluminum, copper, brass, and other non-ferrous metals",
    href: "/applications/non-ferrous-recycling",
    image: "/images/applications/Non-Ferrous Recycling Solutions.jpg",
    stats: "98% purity levels",
    alt: "Non-ferrous metal recycling using ARZIR equipment"
  },
  {
    title: "Cable Recycling",
    description: "Efficient wire and cable processing systems for copper recovery with automated stripping technology",
    href: "/applications/cable-recycling",
    image: "/images/applications/Cable Recycling Solutions.jpg",
    stats: "99.5% copper recovery",
    alt: "Cable recycling facility with ARZIR processing equipment"
  },
  {
    title: "Aerospace Recycling",
    description: "Specialized aircraft dismantling and aerospace material recovery systems for high-value alloys",
    href: "/applications/aerospace-recycling",
    image: "/images/applications/Aerospace Recycling Solutions.jpg",
    stats: "Aviation certified",
    alt: "Aerospace recycling facility processing aircraft materials"
  },
  {
    title: "Metal Recycling",
    description: "Comprehensive metal processing solutions for mixed metal streams and general recycling operations",
    href: "/applications/metal-recycling",
    image: "/images/applications/metal-recycling.jpg",
    stats: "90% recovery efficiency",
    alt: "General metal recycling facility with ARZIR equipment"
  },
  {
    title: "Export Trading",
    description: "Optimize materials for international trade with standardized baling and processing equipment",
    href: "/applications/export-trading",
    image: "/images/applications/export-trading.jpg",
    stats: "Export ready format",
    alt: "Export trading facility preparing metal bales"
  },
  {
    title: "Retail Waste Management",
    description: "Efficient waste processing solutions for retail chains and commercial establishments",
    href: "/applications/retail-waste",
    image: "/images/applications/retail-waste.jpg",
    stats: "70% cost reduction",
    alt: "Retail waste management with ARZIR balers"
  },
  {
    title: "Textile Recycling",
    description: "Advanced textile waste processing and fiber recovery systems for sustainable fashion industry",
    href: "/applications/textile-recycling",
    image: "/images/applications/textile-recycling.jpg",
    stats: "85% fiber recovery",
    alt: "Textile recycling facility with ARZIR equipment"
  },
  {
    title: "Warehouse & Logistics",
    description: "Streamline warehouse operations with efficient waste management and material handling solutions",
    href: "/applications/warehouse-logistics",
    image: "/images/applications/warehouse-logistics.jpg",
    stats: "50% space saving",
    alt: "Warehouse logistics optimization with ARZIR systems"
  },
  {
    title: "Hospitality Waste",
    description: "Specialized waste processing solutions for hotels, restaurants, and hospitality industry",
    href: "/applications/hospitality-waste",
    image: "/images/applications/hospitality-waste.jpg",
    stats: "60% waste reduction",
    alt: "Hospitality waste management with ARZIR equipment"
  },
  {
    title: "Construction Aluminum",
    description: "Specialized aluminum processing for construction industry waste and architectural materials",
    href: "/applications/construction-aluminum",
    image: "/images/applications/construction-aluminum.jpg",
    stats: "95% aluminum recovery",
    alt: "Construction aluminum recycling with ARZIR equipment"
  },
  {
    title: "Automotive Aluminum",
    description: "Advanced aluminum processing solutions for automotive industry waste and component recycling",
    href: "/applications/automotive-aluminum",
    image: "/images/applications/automotive-aluminum.jpg",
    stats: "98% aluminum purity",
    alt: "Automotive aluminum recycling facility"
  },
  {
    title: "Aerospace Aluminum",
    description: "High-precision aluminum processing for aerospace industry with strict quality requirements",
    href: "/applications/aerospace-aluminum",
    image: "/images/applications/aerospace-aluminum.jpg",
    stats: "Aerospace grade quality",
    alt: "Aerospace aluminum processing with ARZIR equipment"
  },
  {
    title: "Industrial Aluminum",
    description: "Comprehensive aluminum processing solutions for industrial manufacturing and production facilities",
    href: "/applications/industrial-aluminum",
    image: "/images/applications/industrial-aluminum.jpg",
    stats: "24/7 processing capability",
    alt: "Industrial aluminum processing plant"
  },
  {
    title: "Food & Beverage Waste",
    description: "Specialized waste processing equipment for food and beverage industry packaging materials",
    href: "/applications/food-beverage-waste",
    image: "/images/applications/food-beverage-waste.jpg",
    stats: "92% recovery rate",
    alt: "Food and beverage waste processing with ARZIR equipment"
  },
  {
    title: "Mining & Extraction Waste",
    description: "Heavy-duty waste processing solutions for mining industry equipment and ore processing waste",
    href: "/applications/mining-extraction-waste",
    image: "/images/applications/mining-extraction-waste.jpg",
    stats: "88% recovery rate",
    alt: "Mining and extraction waste processing with ARZIR equipment"
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
      {/* Enhanced Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 via-white to-arzir-gray-50/30">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-arzir-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-arzir-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-transparent via-arzir-primary/3 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center space-y-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-arzir-primary/10 border border-arzir-primary/20 rounded-full text-arzir-primary font-semibold text-sm">
            <div className="w-2 h-2 bg-arzir-primary rounded-full animate-pulse"></div>
            Industrial Applications
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-black leading-tight">
              Real-World
              <span className="block text-arzir-primary">Applications</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-arzir-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how ARZIR machinery transforms recycling and metal processing 
              <span className="text-arzir-primary font-semibold"> across diverse industries</span>
            </p>
          </div>
          
          {/* Key stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-arzir-primary mb-2">24+</div>
              <div className="text-sm text-arzir-gray-600">Industries Served</div>
            </div>
            <div className="text-center border-x border-arzir-gray-200">
              <div className="text-2xl lg:text-3xl font-bold text-arzir-primary mb-2">2,500+</div>
              <div className="text-sm text-arzir-gray-600">Machines Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-arzir-primary mb-2">100+</div>
              <div className="text-sm text-arzir-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Introduction Section */}
      <Section background="white" size="xl">
        <div className="relative overflow-hidden">
          {/* Background patterns */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-arzir-primary/20 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-arzir-primary/20 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                  <CheckCircle className="h-4 w-4" />
                  Customized Solutions
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black leading-tight">
                  Tailored Equipment for
                  <span className="block text-arzir-primary">Every Application</span>
                </h2>
                
                <p className="text-lg text-arzir-gray-600 leading-relaxed">
                  We provide tailored equipment combinations and capacity planning solutions for different industrial applications. 
                  Our experienced engineering team ensures optimal workflow design and maximum efficiency for your specific requirements.
                </p>
              </div>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-arzir-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Custom Engineering</h3>
                    <p className="text-sm text-arzir-gray-600">Tailored solutions for unique requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-arzir-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Global Support</h3>
                    <p className="text-sm text-arzir-gray-600">Worldwide service and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-arzir-primary/10 via-arzir-primary/5 to-transparent rounded-3xl p-8 h-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-arzir-primary/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-arzir-primary/5 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-arzir-primary/5 rounded-full blur-xl"></div>
                
                {/* Central content */}
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-20 h-20 bg-arzir-primary rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-black mb-3">
                      Proven Excellence
                    </h3>
                    <p className="text-arzir-gray-600 leading-relaxed max-w-sm">
                      Over 12 years of delivering reliable solutions across diverse industrial applications
                    </p>
                  </div>
                  
                  {/* Mini stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-arzir-primary">95%</div>
                      <div className="text-xs text-arzir-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-arzir-primary">24/7</div>
                      <div className="text-xs text-arzir-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Applications Grid */}
      <Section background="gray" size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((application, index) => (
            <div key={application.title} className="group">
              <Link href={application.href}>
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-arzir-gray-100 overflow-hidden h-full relative">
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-arzir-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Header with Image and Stats */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {application.image.startsWith('/') ? (
                      <Image
                        src={application.image}
                        alt={application.alt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        quality={80}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGB//EACgQAAIBAwMCBAcAAAAAAAAAAAECAwAEEQUhMRJBBhMiUWEHQnGBkcE/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAT/xAAeEQACIgEFAQAAAAAAAAAAAAABAgARAyExQVGBsf/aAAwDAQACEQMRAD8AptvomsXFz5cdhM2c5wh9z2FaytNHY2zR3QmPUMB8MewPlx6Fb6lbRxJN5R6nKlxHtkKOFBP/2Q=="
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 text-arzir-gray-500">
                        <div className="text-center">
                          <div className="text-8xl mb-4">{application.image}</div>
                          <p className="text-lg font-medium">{application.title}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Enhanced stats badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-white to-white/95 backdrop-blur-md text-arzir-primary rounded-full text-sm font-bold border border-arzir-primary/30 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {application.stats}
                    </div>
                    
                    {/* Decorative number badge */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-arzir-primary/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Bottom gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative p-8 space-y-5">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-heading font-bold text-black group-hover:text-arzir-primary transition-colors duration-300 leading-tight">
                        {application.title}
                      </h3>
                      <p className="text-arzir-gray-600 leading-relaxed text-base line-clamp-3">
                        {application.description}
                      </p>
                    </div>
                    
                    {/* Enhanced CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-arzir-gray-100">
                      <div className="flex items-center text-arzir-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                        <span className="text-lg">Explore Solutions</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                      
                      {/* Interactive arrow circle */}
                      <div className="w-12 h-12 bg-arzir-primary/10 group-hover:bg-arzir-primary rounded-full flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                        <ArrowRight className="h-5 w-5 text-arzir-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom decorative element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-arzir-primary/5 to-transparent rounded-full translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose ARZIR - Simplified and Clean */}
      <Section background="white" size="xl">
        <div className="relative overflow-hidden">
          {/* Simplified background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-br from-arzir-primary/8 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-arzir-primary/5 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          {/* Clean header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
              Why Choose ARZIR?
            </h2>
            <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference that 12+ years of engineering excellence makes
            </p>
          </div>
          
          {/* Simplified advantages grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div key={advantage.title} className="group text-center">
                {/* Simple card design */}
                <div className="bg-white border border-arzir-gray-100 rounded-2xl p-8 space-y-6 hover:shadow-lg hover:border-arzir-primary/20 transition-all duration-300">
                  {/* Simple icon container */}
                  <div className="w-20 h-20 bg-arzir-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300">
                    <advantage.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-heading font-bold text-black">
                      {advantage.title}
                    </h3>
                    <p className="text-base text-arzir-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                  
                  {/* Simple number indicator */}
                  <div className="w-8 h-8 bg-arzir-gray-100 text-arzir-gray-600 rounded-full flex items-center justify-center text-sm font-semibold mx-auto">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Customer Benefits Section */}
          <div className="bg-gradient-to-r from-arzir-gray-50 to-white rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-black mb-3">
                What Our Customers Say
              </h3>
              <p className="text-arzir-gray-600">
                Real results from industry leaders who chose ARZIR
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-xl border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">45%</div>
                <div className="text-sm text-arzir-gray-600">Average Cost Reduction</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">95%</div>
                <div className="text-sm text-arzir-gray-600">Material Recovery Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">60%</div>
                <div className="text-sm text-arzir-gray-600">Productivity Increase</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-arzir-gray-100">
                <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-1">18</div>
                <div className="text-sm text-arzir-gray-600">Months ROI Payback</div>
              </div>
            </div>
            
            {/* Customer testimonial highlights */}
            <div className="mt-8 pt-6 border-t border-arzir-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Reduced Operational Costs</h4>
                    <p className="text-sm text-arzir-gray-600">Lower energy consumption and maintenance requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Faster Implementation</h4>
                    <p className="text-sm text-arzir-gray-600">Quick installation and commissioning process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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