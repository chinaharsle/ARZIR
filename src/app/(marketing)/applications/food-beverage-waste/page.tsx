import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Settings, Shield, MapPin } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food & Beverage Waste Processing Solutions | ARZIR Applications",
  description: "Specialized waste processing equipment for food and beverage industry. Efficient solutions for packaging waste, metal cans, and organic waste management with high recovery rates.",
  keywords: [
    "food industry waste processing",
    "beverage can recycling",
    "food packaging recycling",
    "commercial food waste",
    "restaurant waste management",
    "food processing equipment"
  ],
};

const equipmentSolutions = [
  {
    equipment: "Aluminum Can Balers",
    application: "Beverage can processing and recycling",
    capacity: "500-2000 cans/minute",
    benefits: ["95% volume reduction", "Premium aluminum recovery", "Automated sorting"]
  },
  {
    equipment: "Food Container Shredders",
    application: "Plastic food packaging size reduction",
    capacity: "2-5 tons/hour",
    benefits: ["Uniform size output", "Contamination removal", "Multi-material processing"]
  },
  {
    equipment: "Steel Can Processing Lines",
    application: "Tin can and steel container recycling",
    capacity: "1000-3000 cans/hour",
    benefits: ["Label removal", "Steel recovery", "Automated processing"]
  },
  {
    equipment: "Cardboard Balers",
    application: "Food packaging cardboard compression",
    capacity: "5-15 tons/hour",
    benefits: ["High density bales", "Reduced transport costs", "Easy handling"]
  }
];

const wasteStreams = [
  {
    category: "Aluminum Packaging",
    materials: ["Beverage cans", "Food containers", "Foil packaging", "Bottle caps"],
    processing: "High-speed can balers with automatic feeding systems",
    recovery: "98% aluminum recovery with premium scrap value"
  },
  {
    category: "Steel Food Containers",
    materials: ["Tin cans", "Steel food containers", "Bottle caps", "Metal lids"],
    processing: "Magnetic separation and steel container processing",
    recovery: "95% steel recovery with efficient label removal"
  },
  {
    category: "Plastic Food Packaging",
    materials: ["Food containers", "Bottles", "Plastic wrapping", "Disposable cutlery"],
    processing: "Multi-stage shredding and washing systems",
    recovery: "90% plastic recovery for recycling applications"
  },
  {
    category: "Cardboard & Paper",
    materials: ["Pizza boxes", "Food cartons", "Packaging boxes", "Paper containers"],
    processing: "Contamination removal and high-density baling",
    recovery: "85% fiber recovery for paper manufacturing"
  }
];

const caseStudies = [
  {
    title: "Major Food Chain Recycling Program",
    location: "California, USA",
    scale: "500+ restaurant locations",
    results: [
      "Processed 2,400 tons of packaging waste monthly",
      "Achieved 90% diversion from landfills",
      "Generated $180,000 annual recycling revenue",
      "Reduced waste disposal costs by 55%"
    ],
    equipment: "ARZIR Can Balers + Cardboard Processing Lines"
  },
  {
    title: "Beverage Manufacturing Facility",
    location: "São Paulo, Brazil",
    scale: "Regional production plant",
    results: [
      "Processing 50,000 aluminum cans daily",
      "98% aluminum recovery rate achieved",
      "Reduced processing costs by 40%",
      "12-month ROI payback period"
    ],
    equipment: "ARZIR High-Speed Can Processing System"
  }
];

const sustainability = [
  {
    aspect: "Circular Economy",
    description: "Transform food industry waste into valuable raw materials",
    impact: "Support closed-loop recycling systems"
  },
  {
    aspect: "Carbon Reduction",
    description: "Reduce transportation needs through volume reduction",
    impact: "40% reduction in carbon footprint"
  },
  {
    aspect: "Landfill Diversion",
    description: "Maximize material recovery from food packaging",
    impact: "Up to 95% waste diversion rate"
  },
  {
    aspect: "Resource Conservation",
    description: "Recover valuable materials for remanufacturing",
    impact: "Preserve natural resources"
  }
];

export default function FoodBeverageWastePage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Food & Beverage Waste Processing
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Specialized waste processing equipment for food and beverage industry packaging materials. 
              Transform aluminum cans, plastic containers, and cardboard packaging into valuable resources.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                92% recovery rate
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                3000+ items/hour
              </div>
            </div>
            <QuoteDialog source="food_beverage_waste_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/Food & Beverage Waste.png"
                alt="Food & Beverage Waste Processing"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Equipment Solutions */}
      <Section background="gray" size="lg" id="equipment">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Specialized Equipment Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Advanced processing systems designed specifically for food and beverage industry waste streams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipmentSolutions.map((equipment, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <Settings className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-black">
                        {equipment.equipment}
                      </h3>
                      <p className="text-green-600 font-medium">{equipment.capacity}</p>
                    </div>
                  </div>
                  
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {equipment.application}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-black">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {equipment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-arzir-primary mt-0.5 flex-shrink-0" />
                          <span className="text-arzir-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Waste Streams */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Food Industry Waste Streams
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive processing solutions for all types of food packaging materials
            </p>
          </div>
          
          <div className="space-y-8">
            {wasteStreams.map((stream, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-black mb-4">
                      {stream.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {stream.materials.map((material, i) => (
                        <span key={i} className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-black mb-2">Processing Method:</h4>
                    <p className="text-arzir-gray-600">{stream.processing}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-arzir-primary mb-2">Recovery Rate:</h4>
                    <p className="text-arzir-gray-700 font-medium">{stream.recovery}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Industry Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Real results from food and beverage industry implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-2 text-arzir-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{study.location}</span>
                      <span className="ml-4 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {study.scale}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-arzir-gray-50 rounded-lg">
                    <p className="font-semibold text-black mb-2">Equipment Solution:</p>
                    <p className="text-green-600 font-medium">{study.equipment}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-black">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-arzir-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sustainability */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Sustainability Impact
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Supporting environmental goals through efficient waste processing and resource recovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainability.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-arzir-primary/5 to-arzir-primary/10 p-6 rounded-2xl border border-arzir-primary/20">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-arzir-primary rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-black mb-2">
                      {item.aspect}
                    </h3>
                    <p className="text-arzir-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="text-sm font-medium text-arzir-primary">
                      {item.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <ApplicationCTA 
        title="Ready to Optimize Your Food & Beverage Waste Processing?"
        description="Get expert consultation and custom quotes for food industry waste processing solutions tailored to your operational requirements."
        primaryButtonText="Get Processing Quote"
        secondaryButtonText="View Equipment"
        secondaryButtonHref="/products"
        formSource="food_beverage_waste_cta"
      />
    </>
  );
}