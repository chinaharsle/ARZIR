import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { DirectQuoteForm } from "@/components/forms/DirectQuoteForm";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { ArrowRight, CheckCircle, Globe, Award, MapPin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white pt-4 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile: Image first, Desktop: Text first */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] lg:aspect-[4/4] bg-arzir-gray-200 rounded-2xl overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="w-full h-full flex items-center justify-center text-arzir-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <p>Industrial Equipment Image</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Industrial Recycling & Metal Processing{" "}
              <span className="text-arzir-primary">Machinery Manufacturer</span>
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Over 12 years of expertise in designing and manufacturing high-performance 
              recycling equipment. Trusted by customers in 100+ countries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteDialog source="hero">
                <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </QuoteDialog>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">
                  Explore Products
                </Link>
              </Button>
            </div>
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm text-arzir-gray-600">12+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-success" />
                <span className="text-sm text-arzir-gray-600">100+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-success" />
                <span className="text-sm text-arzir-gray-600">ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* About Section - Redesigned */}
      <Section background="white" size="xl" className="pt-8 lg:pt-16">
        <div className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-arzir-primary/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-arzir-gray-100/50 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black mb-6">
              About ARZIR
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-4xl mx-auto leading-relaxed">
              Engineering excellence in recycling machinery since 2012
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content - Takes 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Company Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Experience Card */}
                <div className="bg-gradient-to-br from-arzir-primary to-primary-600 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-bold mb-2">12+</div>
                    <div className="text-lg font-medium text-blue-100 mb-2">Years</div>
                    <div className="text-sm text-blue-200">Industry Experience</div>
                  </div>
                </div>

                {/* Global Reach Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-arzir-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-arzir-primary/5 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-arzir-primary mb-2">100+</div>
                    <div className="text-lg font-medium text-black mb-2">Countries</div>
                    <div className="text-sm text-arzir-gray-600">Global Presence</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-lg text-arzir-gray-600 leading-relaxed">
                  ARZIR is a leading manufacturer of advanced recycling and metal processing equipment, 
                  headquartered in Nanjing, China. With over 12 years of industry experience, we specialize 
                  in designing and producing a comprehensive range of industrial machinery.
                </p>
                <p className="text-arzir-gray-600 leading-relaxed">
                  Our products have been exported to more than 100 countries and regions, earning a strong 
                  reputation for quality and reliability in global markets. We serve diverse industries from 
                  metal recycling and waste management to aluminum processing and manufacturing.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-arzir-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-sm">ISO Certified</div>
                    <div className="text-xs text-arzir-gray-600">Quality Systems</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-arzir-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-sm">Global Service</div>
                    <div className="text-xs text-arzir-gray-600">24/7 Support</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-arzir-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-arzir-primary/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-arzir-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-black text-sm">Proven Results</div>
                    <div className="text-xs text-arzir-gray-600">1000+ Projects</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button size="lg" asChild className="bg-arzir-primary hover:bg-primary-600 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Visual - Takes 5 columns */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Image Container */}
                <div className="aspect-[4/5] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="w-full h-full flex items-center justify-center text-arzir-gray-500">
                    <div className="text-center">
                      <div className="text-8xl mb-6">🏭</div>
                      <p className="text-lg font-medium">ARZIR Manufacturing</p>
                      <p className="text-sm text-arzir-gray-400">Excellence in Engineering</p>
                    </div>
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute top-6 left-6 lg:top-4 lg:left-4 bg-white rounded-2xl p-3 lg:p-4 shadow-xl border border-arzir-gray-100 z-20">
                  <div className="text-center">
                    <div className="text-lg lg:text-2xl font-bold text-arzir-primary">30,000㎡</div>
                    <div className="text-xs text-arzir-gray-600">Manufacturing Facility</div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 lg:bottom-4 lg:right-4 bg-white rounded-2xl p-3 lg:p-4 shadow-xl border border-arzir-gray-100 z-20">
                  <div className="text-center">
                    <div className="text-lg lg:text-2xl font-bold text-arzir-primary">2012</div>
                    <div className="text-xs text-arzir-gray-600">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Products Interactive Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
            Our Products
          </h2>
          <p className="text-lg text-arzir-gray-600 max-w-2xl mx-auto">
            Comprehensive range of high-performance recycling and metal processing machinery
          </p>
        </div>

        <ProductShowcase />
      </Section>
      {/* Applications Section - Redesigned */}
      <Section background="white" size="xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black mb-6">
            Industry Applications
          </h2>
          <p className="text-xl text-arzir-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real-world use cases of ARZIR machinery across recycling and metal processing industries
          </p>
        </div>

        {/* Applications Grid - Premium Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              title: "Scrap Recycling",
              description: "Maximize recovery value with high-density compaction solutions that transform waste into valuable resources",
              href: "/applications/scrap-recycling",
              image: "♻️",
              stats: "85% efficiency increase",
              color: "from-green-500 to-emerald-600"
            },
            {
              title: "Metal Fabrication",
              description: "Turn offcuts into value with efficient baling & shearing systems designed for continuous operation",
              href: "/applications/metal-fabrication", 
              image: "🔨",
              stats: "60% waste reduction",
              color: "from-blue-500 to-cyan-600"
            },
            {
              title: "Automotive Dismantling",
              description: "Faster ELV processing with robust baling & shearing equipment built for heavy-duty applications",
              href: "/applications/automotive-dismantling",
              image: "🚗",
              stats: "45% faster processing",
              color: "from-orange-500 to-red-600"
            },
            {
              title: "Aluminum Processing",
              description: "Stable extrusion and compacting for clean aluminum streams with precision engineering. Advanced technology for optimal material recovery and processing efficiency.",
              href: "/applications/aluminum-processing",
              image: "⚙️",
              stats: "95% material recovery",
              color: "from-purple-500 to-violet-600"
            },
            {
              title: "Steel Mills",
              description: "Handle mill scrap safely and consistently with industrial-grade processing equipment. Designed for continuous operation in demanding steel production environments.",
              href: "/applications/steel-mills",
              image: "🏗️",
              stats: "24/7 operation",
              color: "from-gray-500 to-slate-600"
            },
            {
              title: "Shipbreaking",
              description: "Heavy sections processing with high-tonnage equipment designed for maritime industry demands",
              href: "/applications/shipbreaking",
              image: "🚢",
              stats: "1000+ ton capacity",
              color: "from-teal-500 to-blue-600"
            }
          ].map((application, index) => (
            <div key={application.title} className="group cursor-pointer">
              <Link href={application.href}>
                <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-arzir-gray-100 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${application.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Floating Icon Background */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-arzir-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{application.image}</span>
                  </div>

                  <div className="relative z-10 space-y-6">
                    {/* Title and Stats */}
                    <div className="space-y-3">
                      <h3 className="text-2xl lg:text-3xl font-heading font-bold text-black group-hover:text-arzir-primary transition-colors duration-300">
                        {application.title}
                      </h3>
                      <div className="inline-flex items-center px-4 py-2 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-semibold">
                        {application.stats}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-arzir-gray-600 leading-relaxed text-lg pr-24">
                      {application.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-arzir-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Explore Solutions</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-arzir-primary/5 rounded-full -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Section>
      {/* Case Studies Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
            Featured Case Studies
          </h2>
          <p className="text-lg text-arzir-gray-600 max-w-2xl mx-auto">
            Representative projects showcasing our equipment performance and customer success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Metal Recycling Facility",
              location: "Brazil",
              equipment: "Scrap Metal Baler + Gantry Shear",
              results: "+45% throughput, -30% labor costs",
              image: "🏭",
              metrics: "850 tons/day capacity"
            },
            {
              title: "Automotive Dismantling",
              location: "USA",
              equipment: "Car Body Baler + Container Shear", 
              results: "+60% processing speed, ROI in 18 months",
              image: "🚗",
              metrics: "120 vehicles/day"
            },
            {
              title: "Aluminum Processing",
              location: "Germany",
              equipment: "Extrusion Press + Briquetting Machine",
              results: "+35% material recovery, -25% waste",
              image: "⚙️", 
              metrics: "500 tons/month output"
            }
          ].map((caseStudy) => (
            <div key={caseStudy.title} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200">
              <div className="aspect-[4/3] bg-arzir-gray-200 rounded-xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-5xl">
                  {caseStudy.image}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-arzir-gray-500">
                  <MapPin className="h-4 w-4" />
                  {caseStudy.location}
                </div>
                <h3 className="text-xl font-heading font-semibold">{caseStudy.title}</h3>
                <p className="text-sm text-arzir-gray-600">{caseStudy.equipment}</p>
                <div className="bg-arzir-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-success">{caseStudy.results}</p>
                  <p className="text-xs text-arzir-gray-500 mt-1">{caseStudy.metrics}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* Bottom CTA Section - Two Column Layout */}
      <Section background="gray">
        <div className="bg-white rounded-3xl p-4 sm:p-6 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-black">
                Ready to Optimize Your Operations?
              </h2>
              <p className="text-base lg:text-lg text-arzir-gray-600 leading-relaxed">
                Get expert advice on the right equipment for your specific needs. 
                Our engineers are ready to help you find the perfect solution for your facility.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm lg:text-base text-arzir-gray-600">Free consultation and site assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm lg:text-base text-arzir-gray-600">Custom solution design and engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-sm lg:text-base text-arzir-gray-600">24-hour response time guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-arzir-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-none">
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-black mb-6">Get a Quote</h3>
              <DirectQuoteForm source="bottom_form" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}