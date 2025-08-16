import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
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

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black">
            About ARZIR
          </h1>
          <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Engineering high-performance recycling machinery for a sustainable future. 
            Trusted by industry leaders worldwide for over 12 years.
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 aspect-[21/9] bg-arzir-gray-200 rounded-3xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-arzir-gray-500">
            <div className="text-center">
              <div className="text-8xl mb-4">🏭</div>
              <p className="text-lg">ARZIR Manufacturing Facility</p>
            </div>
          </div>
        </div>
      </Section>
      {/* Company Overview */}
      <Section background="white" size="xl">
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
              <div className="w-full h-full flex items-center justify-center text-arzir-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏭</div>
                  <p>Advanced Manufacturing</p>
                </div>
              </div>
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
              <div className="w-full h-full flex items-center justify-center text-arzir-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌍</div>
                  <p>Global Network</p>
                </div>
              </div>
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
              <div className="w-full h-full flex items-center justify-center text-arzir-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔬</div>
                  <p>R&D Innovation</p>
                </div>
              </div>
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
      </Section>
      {/* Mission, Vision & Values */}
      <Section background="gray" size="xl">
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
              <p className="text-arzir-gray-600 leading-relaxed text-lg">
                To be the global leader in recycling machinery manufacturing, recognized for innovation, 
                quality, and customer success in creating a more sustainable world through advanced technology.
              </p>
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
      </Section>
      {/* Our History */}
      <Section background="white" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            A decade of growth, innovation, and global expansion in recycling machinery manufacturing
          </p>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
            <button 
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-arzir-primary hover:bg-arzir-primary hover:text-white"
              id="prevHistory"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
            <button 
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-arzir-primary hover:bg-arzir-primary hover:text-white"
              id="nextHistory"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable timeline container */}
          <div className="overflow-hidden px-8">
            <div className="flex gap-8 pb-8 snap-x snap-mandatory overflow-x-auto scrollbar-hide" id="historyContainer">
              {[
                {
                  year: "2012",
                  title: "Company Founded",
                  description: "ARZIR established in Nanjing, China, with a vision to revolutionize recycling machinery manufacturing.",
                  image: "🏭",
                  highlight: "Foundation Year"
                },
                {
                  year: "2014",
                  title: "First International Export",
                  description: "Successfully exported our first recycling baler to Southeast Asia, marking the beginning of global expansion.",
                  image: "🚢",
                  highlight: "Global Reach"
                },
                {
                  year: "2015",
                  title: "New Manufacturing Facility",
                  description: "Opened state-of-the-art 30,000㎡ production facility with advanced manufacturing capabilities.",
                  image: "🏗️",
                  highlight: "Scale Up"
                },
                {
                  year: "2017",
                  title: "ISO Certification",
                  description: "Achieved ISO 9001 certification, demonstrating our commitment to quality management systems.",
                  image: "🏆",
                  highlight: "Quality Excellence"
                },
                {
                  year: "2019",
                  title: "Global Service Network",
                  description: "Established international offices and service centers to better serve customers worldwide.",
                  image: "🌍",
                  highlight: "Service Excellence"
                },
                {
                  year: "2024",
                  title: "Innovation Leadership",
                  description: "Leading the industry with cutting-edge technology and sustainable manufacturing practices.",
                  image: "🚀",
                  highlight: "Future Ready"
                }
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex-shrink-0 w-80 snap-center">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-arzir-gray-200 h-full relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-arzir-primary/5 rounded-full -translate-y-12 translate-x-12"></div>
                    
                    <div className="relative z-10">
                      {/* Year badge */}
                      <div className="inline-flex items-center justify-center px-4 py-2 bg-arzir-primary text-white rounded-full text-sm font-semibold mb-4">
                        {milestone.year}
                      </div>
                      
                      {/* Icon */}
                      <div className="text-5xl mb-6 text-center">
                        {milestone.image}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-heading font-bold text-black mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-arzir-gray-600 leading-relaxed mb-4">
                        {milestone.description}
                      </p>
                      
                      {/* Highlight tag */}
                      <div className="inline-flex items-center px-3 py-1 bg-arzir-gray-100 text-arzir-gray-700 rounded-full text-xs font-medium">
                        {milestone.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-arzir-gray-300 hover:bg-arzir-primary transition-colors duration-200"
                data-index={index}
              />
            ))}
          </div>
        </div>

        {/* Client-side script for interactivity */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const container = document.getElementById('historyContainer');
              const prevBtn = document.getElementById('prevHistory');
              const nextBtn = document.getElementById('nextHistory');
              const indicators = document.querySelectorAll('[data-index]');
              
              if (!container || !prevBtn || !nextBtn) return;
              
              const scrollAmount = 320; // card width + gap
              
              nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
              });
              
              prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
              });
              
              // Update indicators based on scroll position
              container.addEventListener('scroll', () => {
                const scrollLeft = container.scrollLeft;
                const cardWidth = 320;
                const currentIndex = Math.round(scrollLeft / cardWidth);
                
                indicators.forEach((indicator, index) => {
                  if (index === currentIndex) {
                    indicator.classList.add('bg-arzir-primary');
                    indicator.classList.remove('bg-arzir-gray-300');
                  } else {
                    indicator.classList.remove('bg-arzir-primary');
                    indicator.classList.add('bg-arzir-gray-300');
                  }
                });
              });
              
              // Click indicators to scroll to position
              indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                  container.scrollTo({ left: index * scrollAmount, behavior: 'smooth' });
                });
              });
            });
          `
        }} />
      </Section>
      {/* Our Team */}
      <Section background="gray">
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
              image: "👨‍💼"
            },
            {
              name: "Sarah Wang",
              role: "Chief Technology Officer", 
              bio: "Leading our R&D initiatives with 12+ years in mechanical engineering.",
              image: "👩‍🔬"
            },
            {
              name: "David Liu",
              role: "VP of Sales & Marketing",
              bio: "Expert in international business development and customer relationship management.",
              image: "👨‍💻"
            },
            {
              name: "Anna Zhang",
              role: "Head of Quality Assurance",
              bio: "Ensuring excellence through systematic quality control and ISO compliance.",
              image: "👩‍🏭"
            },
            {
              name: "Robert Kim",
              role: "International Sales Director",
              bio: "Building global partnerships with extensive experience in export markets.",
              image: "👨‍🌾"
            },
            {
              name: "Lisa Brown",
              role: "Customer Service Manager",
              bio: "Dedicated to exceptional customer support and after-sales service excellence.",
              image: "👩‍💼"
            }
          ].map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-200">
              <div className="aspect-[4/3] bg-arzir-gray-200 rounded-xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  {member.image}
                </div>
              </div>
              <h4 className="text-lg font-heading font-semibold text-black mb-1">{member.name}</h4>
              <p className="text-sm text-arzir-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-arzir-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      {/* Global Presence */}
      <Section background="white" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black mb-6">
            Global Presence
          </h2>
          <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving customers worldwide with local support and international expertise
          </p>
        </div>

        <div className="space-y-16">
          {/* World Map Visualization */}
          <div className="relative">
            <div className="aspect-[2/1] bg-gradient-to-br from-arzir-gray-50 to-arzir-gray-100 rounded-3xl overflow-hidden relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-arzir-primary rounded-full"></div>
                <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-arzir-primary rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-arzir-primary rounded-full"></div>
              </div>
              
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-12">
                <Globe className="h-24 w-24 text-arzir-primary mb-6" />
                <h3 className="text-3xl font-heading font-bold text-black mb-4">
                  100+ Countries Served
                </h3>
                <p className="text-lg text-arzir-gray-600 max-w-2xl">
                  From our headquarters in Nanjing, China, we've expanded globally with 
                  strategic partnerships and service centers across all continents
                </p>
              </div>

              {/* Floating location markers */}
              <div className="absolute top-1/4 left-1/4 animate-pulse">
                <div className="w-4 h-4 bg-arzir-primary rounded-full shadow-lg"></div>
              </div>
              <div className="absolute top-1/3 right-1/3 animate-pulse" style={{animationDelay: '0.5s'}}>
                <div className="w-4 h-4 bg-arzir-primary rounded-full shadow-lg"></div>
              </div>
              <div className="absolute bottom-1/3 left-1/2 animate-pulse" style={{animationDelay: '1s'}}>
                <div className="w-4 h-4 bg-arzir-primary rounded-full shadow-lg"></div>
              </div>
              <div className="absolute top-1/2 left-1/6 animate-pulse" style={{animationDelay: '1.5s'}}>
                <div className="w-4 h-4 bg-arzir-primary rounded-full shadow-lg"></div>
              </div>
              <div className="absolute bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '2s'}}>
                <div className="w-4 h-4 bg-arzir-primary rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Regional Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                region: "Asia Pacific", 
                count: "45+", 
                icon: "🌏",
                description: "Leading presence in growing Asian markets",
                highlight: "Primary Region"
              },
              { 
                region: "Europe", 
                count: "25+", 
                icon: "🇪🇺",
                description: "Strong partnerships across European Union",
                highlight: "Key Markets"
              },
              { 
                region: "Americas", 
                count: "20+", 
                icon: "🌎",
                description: "Expanding footprint in North and South America",
                highlight: "Growth Focus"
              },
              { 
                region: "Middle East & Africa", 
                count: "15+", 
                icon: "🌍",
                description: "Emerging opportunities in diverse markets",
                highlight: "New Frontiers"
              }
            ].map((region) => (
              <div key={region.region} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-arzir-gray-200 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-arzir-primary/5 rounded-full -translate-y-8 translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {region.icon}
                    </div>
                    <div className="text-3xl font-bold text-arzir-primary mb-2">
                      {region.count}
                    </div>
                    <div className="text-lg font-semibold text-black mb-2">
                      {region.region}
                    </div>
                    <p className="text-sm text-arzir-gray-600 mb-3 leading-relaxed">
                      {region.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-xs font-medium">
                      {region.highlight}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Markets Highlight */}
          <div className="bg-gradient-to-r from-arzir-gray-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-4">
                Key International Markets
              </h3>
              <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto">
                Strategic partnerships and local service centers in major industrial regions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { country: "Brazil", flag: "🇧🇷", market: "South America Leader" },
                { country: "USA", flag: "🇺🇸", market: "North America Hub" },
                { country: "Germany", flag: "🇩🇪", market: "European Gateway" },
                { country: "UAE", flag: "🇦🇪", market: "Middle East Center" },
                { country: "India", flag: "🇮🇳", market: "Asia Growth Market" },
                { country: "South Africa", flag: "🇿🇦", market: "Africa Operations" }
              ].map((market) => (
                <div key={market.country} className="text-center group">
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-arzir-gray-100">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                      {market.flag}
                    </div>
                    <div className="font-semibold text-black mb-1">
                      {market.country}
                    </div>
                    <div className="text-xs text-arzir-gray-600">
                      {market.market}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      {/* Certifications & Awards */}
      <Section background="gray">
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
      </Section>
      {/* Bottom CTA */}
      <Section background="white" size="xl">
        <div className="bg-gradient-to-r from-arzir-primary to-primary-600 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left Column - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                  Ready to Work with ARZIR?
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  Join thousands of satisfied customers worldwide who trust ARZIR for their 
                  recycling and metal processing equipment needs.
                </p>
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
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full">
                <h3 className="text-2xl font-heading font-bold text-black mb-2">
                  Get Your Quote
                </h3>
                <p className="text-arzir-gray-600 mb-8">
                  Tell us about your project and we'll respond within 24 hours.
                </p>
                
                <QuoteDialog source="about_page_form">
                  <div className="space-y-4">
                    {/* Form Preview - This will trigger the actual form dialog */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-arzir-gray-700 mb-2">
                          Name *
                        </label>
                        <div className="w-full px-4 py-3 border border-arzir-gray-200 rounded-lg bg-arzir-gray-50 text-arzir-gray-500 cursor-pointer hover:bg-arzir-gray-100 transition-colors">
                          Your full name
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-arzir-gray-700 mb-2">
                            Email *
                          </label>
                          <div className="w-full px-4 py-3 border border-arzir-gray-200 rounded-lg bg-arzir-gray-50 text-arzir-gray-500 cursor-pointer hover:bg-arzir-gray-100 transition-colors">
                            name@company.com
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-arzir-gray-700 mb-2">
                            Company
                          </label>
                          <div className="w-full px-4 py-3 border border-arzir-gray-200 rounded-lg bg-arzir-gray-50 text-arzir-gray-500 cursor-pointer hover:bg-arzir-gray-100 transition-colors">
                            Company name
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-arzir-gray-700 mb-2">
                          WhatsApp
                        </label>
                        <div className="w-full px-4 py-3 border border-arzir-gray-200 rounded-lg bg-arzir-gray-50 text-arzir-gray-500 cursor-pointer hover:bg-arzir-gray-100 transition-colors">
                          +1234567890
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-arzir-gray-700 mb-2">
                          Message *
                        </label>
                        <div className="w-full px-4 py-3 h-24 border border-arzir-gray-200 rounded-lg bg-arzir-gray-50 text-arzir-gray-500 cursor-pointer hover:bg-arzir-gray-100 transition-colors flex items-start">
                          Tell us about your project requirements...
                        </div>
                      </div>
                      
                      <button className="w-full bg-arzir-primary hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </QuoteDialog>
                
                <p className="text-sm text-arzir-gray-500 mt-4 text-center">
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