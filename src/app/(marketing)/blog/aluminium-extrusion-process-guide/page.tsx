import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ArrowRight, Clock, User, Calendar, ChevronRight, CheckCircle, Thermometer, Gauge, Cog, Target, Settings, Factory, Truck, Users, Star, Timer, Cpu, Wrench, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Aluminium Extrusion Presses Work: A Complete Guide | ARZIR Blog",
  description: "Comprehensive guide to aluminum extrusion process, equipment, and best practices. Learn how extrusion presses transform aluminum billets into precision profiles.",
  keywords: [
    "aluminium extrusion process",
    "aluminum extrusion guide",
    "how aluminum extrusion works",
    "extrusion press process",
    "aluminum profile production",
    "extrusion manufacturing process",
    "aluminum extrusion equipment",
    "extrusion press technology"
  ],
  openGraph: {
    title: "How Aluminium Extrusion Presses Work: A Complete Guide",
    description: "Complete guide to aluminum extrusion process, from billet heating to profile finishing. Learn the technology behind precision aluminum manufacturing.",
    images: [
      {
        url: "/images/blog/aluminium-extrusion-process-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Aluminium Extrusion Process Guide - ARZIR Blog"
      }
    ]
  }
};

const tableOfContents = [
  { title: "Aluminium Extrusion Overview", anchor: "extrusion-overview" },
  { title: "The Extrusion Process Step-by-Step", anchor: "extrusion-process" },
  { title: "Equipment Components & Technology", anchor: "equipment-technology" },
  { title: "Types of Aluminum Alloys", anchor: "aluminum-alloys" },
  { title: "Quality Control & Standards", anchor: "quality-control" },
  { title: "Applications & Industries", anchor: "applications-industries" }
];

const keyTakeaways = [
  "Aluminum extrusion transforms heated billets into complex profiles through high-pressure hydraulic systems",
  "Process temperatures range from 450-500°C for optimal material flow and die life",
  "Hydraulic pressures up to 35 MN enable processing of complex geometries and hard alloys",
  "Die design and material selection are critical for achieving dimensional accuracy and surface quality",
  "Modern extrusion presses achieve ±0.1mm dimensional tolerance with automated PLC control systems"
];

export default function AluminiumExtrusionProcessGuideBlog() {
  return (
    <>
      {/* Hero Section */}
      <Section size="lg" className="!pt-16 sm:!pt-20 md:!pt-24">
        <div className="space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-arzir-gray-600">
            <Link href="/" className="hover:text-arzir-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-arzir-primary">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Aluminium Extrusion Process Guide</span>
          </div>

          {/* Article Header */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm font-medium">
                  Manufacturing Guide
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Process Technology
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-heading font-bold text-black leading-tight">
                How Aluminium Extrusion Presses Work: A Complete Guide
              </h1>
              
              <p className="text-xl text-arzir-gray-600 leading-relaxed max-w-4xl">
                Comprehensive guide to aluminum extrusion process, equipment technology, and best practices 
                for precision profile manufacturing.
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-arzir-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>ARZIR Technical Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table of Contents - Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-arzir-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-heading font-bold text-black mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.anchor}`}
                      className="text-sm text-arzir-gray-600 hover:text-arzir-primary transition-colors block py-1"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Takeaways */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-arzir-primary">
              <h3 className="text-lg font-heading font-bold text-black mb-4">Key Takeaways</h3>
              <ul className="space-y-2">
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-arzir-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-arzir-gray-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Extrusion Overview */}
          <section id="extrusion-overview">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Aluminium Extrusion Overview
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Aluminum extrusion is a manufacturing process where heated aluminum billets are forced through 
                specially designed dies under high pressure to create complex cross-sectional profiles. This process 
                enables the production of lightweight, strong, and precisely dimensioned components used across 
                building, automotive, aerospace, and industrial applications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Factory className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">Direct Extrusion</h3>
                  </div>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    Most common method where heated billet is pushed through a stationary die. 
                    Offers excellent dimensional control and surface finish quality.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Settings className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">Indirect Extrusion</h3>
                  </div>
                  <p className="text-arzir-gray-600 leading-relaxed">
                    Die moves toward the billet, reducing friction. Used for special alloys 
                    and applications requiring superior surface quality.
                  </p>
                </div>
              </div>

              <div className="bg-arzir-primary/10 p-6 rounded-xl border-l-4 border-arzir-primary">
                <h3 className="text-lg font-heading font-bold text-black mb-3">Process Fundamentals</h3>
                <p className="text-arzir-gray-700 leading-relaxed">
                  The extrusion process combines precise temperature control, hydraulic pressure, and die engineering 
                  to transform solid aluminum billets into complex shapes impossible to achieve through traditional 
                  machining or forming methods. Modern extrusion presses can generate pressures up to 35 MN while 
                  maintaining dimensional tolerances within ±0.1mm.
                </p>
              </div>
            </div>
          </section>

          {/* The Extrusion Process Step-by-Step */}
          <section id="extrusion-process">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              The Extrusion Process Step-by-Step
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Understanding each stage of the aluminum extrusion process is crucial for optimizing 
                quality, efficiency, and material properties in the final product.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 relative">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                      1
                    </div>
                    <h4 className="text-lg font-heading font-bold text-black">Billet Preparation</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Thermometer className="h-5 w-5 text-arzir-primary mr-2" />
                        <span className="text-sm font-medium text-arzir-primary">450-500°C</span>
                      </div>
                      <p className="text-sm text-arzir-gray-600">
                        Aluminum billets are heated to optimal extrusion temperature in induction furnaces
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 relative">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                      2
                    </div>
                    <h4 className="text-lg font-heading font-bold text-black">Die Setup</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Target className="h-5 w-5 text-arzir-primary mr-2" />
                        <span className="text-sm font-medium text-arzir-primary">±0.1mm</span>
                      </div>
                      <p className="text-sm text-arzir-gray-600">
                        Precision dies are installed and aligned to ensure dimensional accuracy
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 relative">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                      3
                    </div>
                    <h4 className="text-lg font-heading font-bold text-black">Hydraulic Extrusion</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Gauge className="h-5 w-5 text-arzir-primary mr-2" />
                        <span className="text-sm font-medium text-arzir-primary">35 MN Max</span>
                      </div>
                      <p className="text-sm text-arzir-gray-600">
                        High-pressure hydraulic ram forces aluminum through the die opening
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 relative">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                      4
                    </div>
                    <h4 className="text-lg font-heading font-bold text-black">Cooling & Finishing</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Timer className="h-5 w-5 text-arzir-primary mr-2" />
                        <span className="text-sm font-medium text-arzir-primary">15-30 min</span>
                      </div>
                      <p className="text-sm text-arzir-gray-600">
                        Controlled cooling and stretching achieve final dimensions and properties
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-lg font-heading font-bold text-blue-800 mb-3">Critical Process Parameters</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-blue-700">Temperature Control:</strong>
                    <p className="text-blue-600 mt-1">Billet: 450-500°C, Die: 400-450°C for optimal flow</p>
                  </div>
                  <div>
                    <strong className="text-blue-700">Pressure Management:</strong>
                    <p className="text-blue-600 mt-1">10-35 MN hydraulic force depending on alloy and profile</p>
                  </div>
                  <div>
                    <strong className="text-blue-700">Speed Control:</strong>
                    <p className="text-blue-600 mt-1">0.5-30 m/min extrusion speed for quality optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Equipment Components & Technology */}
          <section id="equipment-technology">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Equipment Components & Technology
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Modern aluminum extrusion presses integrate advanced hydraulic systems, precision controls, 
                and intelligent automation to deliver consistent, high-quality results.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Gauge className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-black">Hydraulic System</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-arzir-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Variable displacement pumps for energy efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Servo-controlled pressure regulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Accumulator systems for consistent pressure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Advanced filtration and cooling systems</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Thermometer className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-black">Temperature Control</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-arzir-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Induction heating for uniform billet temperature</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Die heating and cooling systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Multi-zone temperature monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Automatic temperature compensation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-black">PLC Control System</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-arzir-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Touchscreen HMI for operator interface</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Recipe management for different alloys</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Real-time process monitoring and logging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Remote diagnostics and support capability</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Cog className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-black">Die & Tooling</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-arzir-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Hot work tool steel construction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Precision machining to ±0.02mm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Advanced surface treatments and coatings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Quick-change die systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Aluminum Alloys */}
          <section id="aluminum-alloys">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Types of Aluminum Alloys for Extrusion
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Different aluminum alloys exhibit varying extrusion characteristics, requiring specific 
                process parameters and equipment configurations for optimal results.
              </p>

              <div className="bg-white rounded-xl border border-arzir-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-arzir-gray-50 border-b border-arzir-gray-200">
                        <th className="p-4 text-left font-bold text-black">Alloy Series</th>
                        <th className="p-4 text-center font-bold text-black">Common Alloys</th>
                        <th className="p-4 text-center font-bold text-black">Extrusion Temp</th>
                        <th className="p-4 text-center font-bold text-black">Pressure Req.</th>
                        <th className="p-4 text-left font-bold text-black">Applications</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-arzir-gray-100">
                        <td className="p-4 font-semibold text-black">1000 Series</td>
                        <td className="p-4 text-center text-sm">1050, 1100</td>
                        <td className="p-4 text-center text-sm">420-480°C</td>
                        <td className="p-4 text-center text-sm">Low</td>
                        <td className="p-4 text-sm text-arzir-gray-600">Electrical conductors, decorative trim</td>
                      </tr>
                      <tr className="bg-arzir-gray-25 border-b border-arzir-gray-100">
                        <td className="p-4 font-semibold text-black">3000 Series</td>
                        <td className="p-4 text-center text-sm">3003, 3105</td>
                        <td className="p-4 text-center text-sm">450-500°C</td>
                        <td className="p-4 text-center text-sm">Medium</td>
                        <td className="p-4 text-sm text-arzir-gray-600">General purpose, building materials</td>
                      </tr>
                      <tr className="border-b border-arzir-gray-100">
                        <td className="p-4 font-semibold text-black">6000 Series</td>
                        <td className="p-4 text-center text-sm">6061, 6063</td>
                        <td className="p-4 text-center text-sm">460-520°C</td>
                        <td className="p-4 text-center text-sm">Medium</td>
                        <td className="p-4 text-sm text-arzir-gray-600">Structural, automotive, aerospace</td>
                      </tr>
                      <tr className="bg-arzir-gray-25 border-b border-arzir-gray-100">
                        <td className="p-4 font-semibold text-black">7000 Series</td>
                        <td className="p-4 text-center text-sm">7075, 7050</td>
                        <td className="p-4 text-center text-sm">480-540°C</td>
                        <td className="p-4 text-center text-sm">High</td>
                        <td className="p-4 text-sm text-arzir-gray-600">Aerospace, high-strength applications</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h3 className="text-lg font-heading font-bold text-green-800 mb-3">Easy to Extrude</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>6063:</strong> Excellent extrudability, architectural applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>1100:</strong> Pure aluminum, very soft, decorative uses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>3003:</strong> Good formability, general purpose profiles</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                  <h3 className="text-lg font-heading font-bold text-orange-800 mb-3">Challenging to Extrude</h3>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span><strong>7075:</strong> High strength, requires precise temperature control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span><strong>2024:</strong> Copper content makes extrusion difficult</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span><strong>5083:</strong> Work hardening, limited profile complexity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Control & Standards */}
          <section id="quality-control">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Quality Control & International Standards
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Maintaining consistent quality in aluminum extrusion requires adherence to international 
                standards and implementation of comprehensive quality control systems throughout the process.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                  <h3 className="text-lg font-heading font-bold text-black mb-4">International Standards</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-black">EN 755 (European)</div>
                        <div className="text-sm text-arzir-gray-600">Aluminum and aluminum alloy extruded profiles</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-black">ASTM B221 (American)</div>
                        <div className="text-sm text-arzir-gray-600">Standard specification for aluminum alloy extruded bars</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-black">JIS H4100 (Japanese)</div>
                        <div className="text-sm text-arzir-gray-600">Aluminum and aluminum alloy extruded profiles</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200">
                  <h3 className="text-lg font-heading font-bold text-black mb-4">Quality Control Measures</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Dimensional inspection:</strong> ±0.1mm tolerance verification</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Surface quality:</strong> Visual and tactile inspection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Mechanical testing:</strong> Tensile strength and hardness</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Chemical analysis:</strong> Alloy composition verification</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Process monitoring:</strong> Real-time parameter tracking</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-arzir-primary/10 p-6 rounded-xl border-l-4 border-arzir-primary">
                <h3 className="text-lg font-heading font-bold text-black mb-3">Common Quality Issues & Solutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-red-600 mb-2">Surface Defects</div>
                    <div className="text-arzir-gray-700">Scratches, pick-up marks</div>
                    <div className="text-green-600 font-medium">→ Die maintenance, lubrication</div>
                  </div>
                  <div>
                    <div className="font-semibold text-red-600 mb-2">Dimensional Variation</div>
                    <div className="text-arzir-gray-700">Out-of-tolerance profiles</div>
                    <div className="text-green-600 font-medium">→ Temperature control, die design</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Applications & Industries */}
          <section id="applications-industries">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black mb-6">
              Applications & Industries
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-arzir-gray-700 leading-relaxed">
                Aluminum extrusion technology serves diverse industries, enabling the production of 
                complex profiles that meet specific performance and aesthetic requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Factory className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">Building & Construction</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-arzir-gray-600">
                    <li>• Window and door frames</li>
                    <li>• Curtain wall systems</li>
                    <li>• Structural glazing profiles</li>
                    <li>• Thermal break systems</li>
                    <li>• Architectural cladding</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">Automotive</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-arzir-gray-600">
                    <li>• Body frame components</li>
                    <li>• Heat exchanger tubes</li>
                    <li>• Crash management systems</li>
                    <li>• Battery housings (EV)</li>
                    <li>• Trim and decorative parts</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Settings className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">Aerospace</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-arzir-gray-600">
                    <li>• Aircraft structural components</li>
                    <li>• Precision wing profiles</li>
                    <li>• Landing gear components</li>
                    <li>• Interior cabin profiles</li>
                    <li>• Satellite structures</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">Industrial</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-arzir-gray-600">
                    <li>• Machine frames and bases</li>
                    <li>• Conveyor systems</li>
                    <li>• Heat sinks and cooling</li>
                    <li>• Automation components</li>
                    <li>• LED light housings</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">Furniture</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-arzir-gray-600">
                    <li>• Office furniture frames</li>
                    <li>• Kitchen cabinet handles</li>
                    <li>• Decorative trim profiles</li>
                    <li>• Exhibition systems</li>
                    <li>• Edge banding profiles</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-arzir-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">Electronics</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-arzir-gray-600">
                    <li>• Electronic enclosures</li>
                    <li>• Heatsink profiles</li>
                    <li>• Solar panel frames</li>
                    <li>• Cable management systems</li>
                    <li>• Connector housings</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-lg font-heading font-bold text-green-800 mb-3">Market Growth & Trends</h3>
                <p className="text-green-700 leading-relaxed">
                  The global aluminum extrusion market is projected to reach $95+ billion by 2027, driven by 
                  lightweight vehicle design, sustainable building practices, and renewable energy infrastructure. 
                  Advanced extrusion technologies enable increasingly complex profiles while maintaining cost efficiency.
                </p>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-gradient-to-r from-arzir-primary/5 via-blue-50 to-arzir-primary/5 p-8 rounded-2xl">
            <div className="text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-black">
                Ready to Start Your Aluminum Manufacturing Project?
              </h2>
              <p className="text-lg text-arzir-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our extrusion experts can help you select the right equipment and process parameters 
                for your specific aluminum profile requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <QuoteDialog source="extrusion_process_guide_blog">
                  <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                    Get Expert Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </QuoteDialog>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/products/aluminium-extrusion-press">View Extrusion Presses</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}