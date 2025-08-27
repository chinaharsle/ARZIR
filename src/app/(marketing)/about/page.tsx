import { Button } from "@/components/ui/button";
import { DirectQuoteForm } from "@/components/forms/DirectQuoteForm";
import { TimelineCarousel } from "./components/TimelineCarousel";
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Heart,
  Award,
  Globe,
  Lightbulb,
  Shield,
  Leaf
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

// Metadata for better SEO and performance
export const metadata = {
  title: "About - Leading Recycling Machinery Manufacturer",
  description: "Learn about ARZIR's 12+ years of excellence in manufacturing recycling and metal processing equipment. Serving 100+ countries with innovation and quality.",
  keywords: "ARZIR, recycling machinery, metal processing, manufacturing, industrial equipment",
  openGraph: {
    title: "About ARZIR - Leading Recycling Machinery Manufacturer",
    description: "Learn about ARZIR's 12+ years of excellence in manufacturing recycling and metal processing equipment. Serving 100+ countries with innovation and quality.",
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Force Full Screen */}
      <div 
        className="relative w-full overflow-hidden" 
        style={{ 
          height: '100vh',
          minHeight: '100vh',
          maxHeight: '100vh'
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/factory.jpg"
            alt="ARZIR Manufacturing Factory - Advanced Production Facility"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            fetchPriority="high"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiEiQVFhkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyoizDvj7V8fEK5vBa5Lxh9AVFt9Q6mF5jRAhR5EhHMKu8vqDgFPdNBOHbYRGPhLGO3iGgKDWSqz44Lp+hRRWGcqRG0E26SbLYf8sCo4Gj/2Q=="
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        
        {/* Content Container - Full Width */}
        <div className="relative h-full flex items-center justify-center px-2 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <div className="w-full max-w-none text-center text-white">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-bold leading-tight px-4">
                <span className="text-white">About </span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  ARZIR
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-base md:text-lg text-gray-200 max-w-5xl mx-auto leading-relaxed font-medium px-4">
                Engineering high-performance recycling machinery for a sustainable future
              </p>
              
              {/* Key Statistics - Full Width Layout */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 pt-2 md:pt-4 px-4">
                <div className="text-center flex-1 max-w-xs">
                  <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">12+</div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="hidden sm:block w-px h-8 md:h-10 lg:h-12 bg-gray-400/50"></div>
                <div className="text-center flex-1 max-w-xs">
                  <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Countries Served</div>
                </div>
                <div className="hidden sm:block w-px h-8 md:h-10 lg:h-12 bg-gray-400/50"></div>
                <div className="text-center flex-1 max-w-xs">
                  <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1">30,000㎡</div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">Manufacturing Facility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white animate-bounce">
            <span className="text-sm font-medium mb-3 text-white drop-shadow-lg">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-white/10 backdrop-blur-sm shadow-lg">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse drop-shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Overview */}
      <section className="bg-white py-section" id="company-overview">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black mb-6">
            Company Overview
          </h2>
          <p className="text-xl text-arzir-gray-600 max-w-4xl mx-auto leading-relaxed">
            Engineering excellence in recycling machinery since 2012
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Block 1 - Manufacturing */}
          <div className="bg-gradient-to-br from-white to-arzir-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-arzir-gray-200 rounded-2xl mb-6 overflow-hidden">
              <Image
                src="/images/company overview/World-Class Manufacturing.jpg"
                alt="Advanced Manufacturing - CNC & Automation"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover"
                loading="lazy"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGB//EACgQAAIBAwMCBAcAAAAAAAAAAAECAwAEEQUhMRJBBhMiUWEHQnGBkcE/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAT/xAAeEQACAgEFAQAAAAAAAAAAAAABAgARAyExQVGBsf/aAAwDAQACEQMRAD8AptvomsXFz5cdhM2c5wh9z2FaytNHY2zR3QmPUMB8MewPlx6Fb6lbRxJN5R6nKlxHtkKOFBP/2Q=="
                decoding="async"
              />
            </div>
            <h3 className="text-xl font-heading font-bold text-black mb-4">World-Class Manufacturing</h3>
            <p className="text-arzir-gray-600 leading-relaxed mb-4">
              Our 30,000㎡ state-of-the-art facility in Nanjing combines advanced CNC machining, automated assembly lines, and strict 6S management practices.
            </p>
            <div className="text-sm text-arzir-primary font-medium">ISO 9001:2015 Certified</div>
          </div>

          {/* Block 2 - Global Reach */}
          <div className="bg-gradient-to-br from-white to-arzir-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-arzir-gray-200 rounded-2xl mb-6 overflow-hidden">
              <Image
                src="/images/company overview/Global Market Leader.jpg"
                alt="Global Network - 100+ Countries"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover"
                loading="lazy"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGB//EACgQAAIBAwMCBAcAAAAAAAAAAAECAwAEEQUhMRJBBhMiUWEHQnGBkcE/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAT/xAAeEQACAgEFAQAAAAAAAAAAAAABAgARAyExQVGBsf/aAAwDAQACEQMRAD8AptvomsXFz5cdhM2c5wh9z2FaytNHY2zR3QmPUMB8MewPlx6Fb6lbRxJN5R6nKlxHtkKOFBP/2Q=="
                decoding="async"
              />
            </div>
            <h3 className="text-xl font-heading font-bold text-black mb-4">Global Market Leader</h3>
            <p className="text-arzir-gray-600 leading-relaxed mb-4">
              Serving customers in 100+ countries across 6 continents with comprehensive solutions for recycling and metal processing industries.
            </p>
            <div className="text-sm text-arzir-primary font-medium">100+ Countries Served</div>
          </div>

          {/* Block 3 - Innovation */}
          <div className="bg-gradient-to-br from-white to-arzir-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-arzir-gray-200 rounded-2xl mb-6 overflow-hidden">
              <Image
                src="/images/company overview/Continuous Innovation.jpg"
                alt="R&D Innovation - Technology Excellence"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover"
                loading="lazy"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAAwDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGB//EACgQAAIBAwMCBAcAAAAAAAAAAAECAwAEEQUhMRJBBhMiUWEHQnGBkcE/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAT/xAAeEQACAgEFAQAAAAAAAAAAAAABAgARAyExQVGBsf/aAAwDAQACEQMRAD8AptvomsXFz5cdhM2c5wh9z2FaytNHY2zR3QmPUMB8MewPlx6Fb6lbRxJN5R6nKlxHtkKOFBP/2Q=="
                decoding="async"
              />
            </div>
            <h3 className="text-xl font-heading font-bold text-black mb-4">Continuous Innovation</h3>
            <p className="text-arzir-gray-600 leading-relaxed mb-4">
              Our dedicated R&D team continuously develops cutting-edge technologies to enhance performance, efficiency, and sustainability.
            </p>
            <div className="text-sm text-arzir-primary font-medium">12+ Years Experience</div>
          </div>
        </div>

        {/* Company Description */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-arzir-gray-600 leading-relaxed mb-8">
            ARZIR is a leading manufacturer of advanced recycling and metal processing equipment, headquartered in Nanjing, China. 
            Since our establishment in 2012, we have specialized in designing and producing a comprehensive range of industrial machinery 
            including recycling balers, scrap metal shears, shredders, aluminium extrusion presses, and briquetting machines.
          </p>
          <p className="text-lg text-arzir-gray-600 leading-relaxed mb-8">
            With over 12 years of industry experience, our products have been exported to more than 100 countries and regions, 
            earning a strong reputation for quality and reliability in global markets. We serve diverse industries from metal 
            recycling and waste management to aluminum processing and manufacturing.
          </p>
          <Button asChild size="lg" className="bg-arzir-primary hover:bg-primary-600">
            <Link href="/products">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        </div>
      </section>
      {/* Mission, Vision & Values */}
      <section className="bg-arzir-gray-50 py-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black mb-6">
            Our Foundation
          </h2>
          <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            The principles that drive our innovation and commitment to excellence
          </p>
        </div>

        {/* Mission - Full Width Feature */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-arzir-primary to-primary-600 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-8">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-4xl font-heading font-bold mb-6">Our Mission</h3>
              <p className="text-lg lg:text-xl leading-relaxed text-blue-100">
                To deliver innovative recycling and metal processing equipment that empowers our customers 
                to achieve higher efficiency, safety, and profitability while supporting environmental sustainability 
                and the circular economy transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Values - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-arzir-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-arzir-primary/10 rounded-2xl mb-6">
                <Eye className="h-8 w-8 text-arzir-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-black mb-6">Our Vision</h3>
              <p className="text-arzir-gray-600 leading-relaxed text-lg mb-6">
                To be the global leader in recycling machinery manufacturing, recognized for innovation, 
                quality, and customer success in creating a more sustainable world through advanced technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-arzir-gray-50">
                  <div className="w-2 h-2 bg-arzir-primary rounded-full"></div>
                  <span className="text-sm text-arzir-gray-700">Leading technology innovation</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-arzir-gray-50">
                  <div className="w-2 h-2 bg-arzir-primary rounded-full"></div>
                  <span className="text-sm text-arzir-gray-700">Global market expansion</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-arzir-gray-50">
                  <div className="w-2 h-2 bg-arzir-primary rounded-full"></div>
                  <span className="text-sm text-arzir-gray-700">Sustainable future focus</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-arzir-gray-50">
                  <div className="w-2 h-2 bg-arzir-primary rounded-full"></div>
                  <span className="text-sm text-arzir-gray-700">Customer success driven</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-arzir-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-arzir-primary/10 rounded-2xl mb-6">
                <Heart className="h-8 w-8 text-arzir-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-black mb-6">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-arzir-gray-50 hover:bg-arzir-primary/5 transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 bg-arzir-primary/10 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-arzir-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Innovation</div>
                    <div className="text-sm text-arzir-gray-600">Pioneering technology solutions</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl bg-arzir-gray-50 hover:bg-arzir-primary/5 transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 bg-arzir-primary/10 rounded-lg">
                    <Shield className="h-5 w-5 text-arzir-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Reliability</div>
                    <div className="text-sm text-arzir-gray-600">Trusted performance always</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl bg-arzir-gray-50 hover:bg-arzir-primary/5 transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 bg-arzir-primary/10 rounded-lg">
                    <Leaf className="h-5 w-5 text-arzir-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Sustainability</div>
                    <div className="text-sm text-arzir-gray-600">Environmental responsibility</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl bg-arzir-gray-50 hover:bg-arzir-primary/5 transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 bg-arzir-primary/10 rounded-lg">
                    <Award className="h-5 w-5 text-arzir-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Excellence</div>
                    <div className="text-sm text-arzir-gray-600">Uncompromising quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* Our Journey */}
      <section className="bg-white py-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
              A decade of growth, innovation, and global expansion in recycling machinery manufacturing
            </p>
          </div>

          <Suspense fallback={<div className="h-96 bg-arzir-gray-100 rounded-2xl animate-pulse"></div>}>
            <TimelineCarousel />
          </Suspense>
        </div>
      </section>
      {/* Our Team */}
      <section className="bg-arzir-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
            Our Team
          </h2>
          <p className="text-lg text-arzir-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals driving innovation and excellence at ARZIR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Michael Chen",
              role: "Chief Executive Officer",
              bio: "15+ years in industrial machinery with expertise in global market expansion.",
              image: "/images/our team/Michael Chen.png"
            },
            {
              name: "Sarah Wang",
              role: "Chief Technology Officer", 
              bio: "Leading our R&D initiatives with 12+ years in mechanical engineering.",
              image: "/images/our team/Sarah Wang.png"
            },
            {
              name: "David Liu",
              role: "VP of Sales & Marketing",
              bio: "Expert in international business development and customer relationship management.",
              image: "/images/our team/David Liu.png"
            },
            {
              name: "Anna Zhang",
              role: "Head of Quality Assurance",
              bio: "Ensuring excellence through systematic quality control and ISO compliance.",
              image: "/images/our team/Anna Zhang.png"
            },
            {
              name: "Robert Kim",
              role: "International Sales Director",
              bio: "Building global partnerships with extensive experience in export markets.",
              image: "/images/our team/Robert Kim.png"
            },
            {
              name: "Lisa Brown",
              role: "Customer Service Manager",
              bio: "Dedicated to exceptional customer support and after-sales service excellence.",
              image: "/images/our team/Lisa Brown.png"
            }
          ].map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-200">
              <div className="aspect-[4/3] bg-arzir-gray-200 rounded-xl mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-heading font-semibold text-black mb-1">{member.name}</h4>
              <p className="text-sm text-arzir-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-arzir-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
      {/* Global Presence */}
      <section className="bg-white py-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black mb-6">
            Global Presence
          </h2>
          <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving customers worldwide with local support and international expertise
          </p>
        </div>

        <div className="space-y-16">
          {/* Global Sales Statistics - Clean Design */}
          <div className="relative">
            <div className="bg-gradient-to-br from-arzir-primary/5 to-blue-50 rounded-3xl p-8 lg:p-12 text-center">
              <Globe className="h-16 w-16 text-arzir-primary mx-auto mb-6" />
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-4">
                Global Sales Network
              </h3>
              <p className="text-lg text-arzir-gray-600 max-w-2xl mx-auto mb-8">
                Over 2,500 machines delivered worldwide with comprehensive after-sales support
              </p>
              
              {/* Sales Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-arzir-primary mb-2">950</div>
                  <div className="text-sm font-medium text-black mb-1">Asia Pacific</div>
                  <div className="text-xs text-arzir-gray-600">Primary Market</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-arzir-primary mb-2">120</div>
                  <div className="text-sm font-medium text-black mb-1">Europe</div>
                  <div className="text-xs text-arzir-gray-600">Growing Market</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-arzir-primary mb-2">85</div>
                  <div className="text-sm font-medium text-black mb-1">North America</div>
                  <div className="text-xs text-arzir-gray-600">Key Region</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-arzir-primary mb-2">345</div>
                  <div className="text-sm font-medium text-black mb-1">Other Regions</div>
                  <div className="text-xs text-arzir-gray-600">Africa, Americas, ME</div>
                </div>
              </div>
              
              <div className="mt-8 inline-flex items-center px-6 py-3 bg-arzir-primary text-white rounded-full text-lg font-semibold">
                2,500+ Total Machines Delivered
              </div>
            </div>
          </div>



        </div>
        </div>
      </section>
      {/* Certifications & Awards */}
      <section className="bg-arzir-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-black mb-4">
            Certifications & Awards
          </h2>
          <p className="text-lg text-arzir-gray-600 max-w-2xl mx-auto">
            Recognized for excellence in quality, innovation, and environmental responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "ISO 9001:2015",
              issuer: "Quality Management System",
              year: "2017",
              image: "🏆"
            },
            {
              name: "CE Certification",
              issuer: "European Conformity",
              year: "2018",
              image: "✅"
            },
            {
              name: "Innovation Award",
              issuer: "China Machinery Industry",
              year: "2020",
              image: "🥇"
            },
            {
              name: "Export Excellence",
              issuer: "China Export Council",
              year: "2022",
              image: "🌟"
            }
          ].map((cert) => (
            <div key={cert.name} className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-200">
              <div className="text-5xl mb-4">{cert.image}</div>
              <h4 className="font-heading font-semibold text-black mb-2">{cert.name}</h4>
              <p className="text-sm text-arzir-gray-600 mb-1">{cert.issuer}</p>
              <p className="text-xs text-arzir-primary font-medium">{cert.year}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
      {/* Bottom CTA */}
      <section className="bg-white py-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container">
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
                
                <DirectQuoteForm source="about_page_form" />
                
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
        </div>
      </section>
    </>
  );
}