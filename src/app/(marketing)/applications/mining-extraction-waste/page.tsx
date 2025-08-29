import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { ApplicationCTA } from "@/components/common/ApplicationCTA";
import { ArrowRight, CheckCircle, Factory, Shield, MapPin } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mining & Extraction Waste Processing Solutions | ARZIR Applications",
  description: "Heavy-duty waste processing equipment for mining industry. Specialized solutions for ore processing waste, metal extraction byproducts, and mining equipment recycling.",
  keywords: [
    "mining waste processing",
    "ore processing equipment",
    "mining scrap metal",
    "extraction waste management",
    "mining equipment recycling",
    "heavy machinery scrap"
  ],
};

const miningEquipment = [
  {
    equipment: "Heavy-Duty Shredders",
    application: "Large mining equipment and conveyor belt processing",
    capacity: "10-50 tons/hour",
    specifications: ["1500+ HP motors", "Hardened cutting chambers", "Dust suppression systems"],
    benefits: ["Process oversized materials", "Reduce transport volume", "Recover valuable metals"]
  },
  {
    equipment: "Gantry Shears",
    application: "Structural steel and heavy mining machinery cutting",
    capacity: "500-2000 ton force",
    specifications: ["Mobile and stationary units", "Remote operation capability", "Reinforced cutting blades"],
    benefits: ["Cut massive structural components", "On-site processing", "Safety focused design"]
  },
  {
    equipment: "Ore Waste Balers",
    application: "Compacting metal-bearing waste materials",
    capacity: "20-100 tons/hour",
    specifications: ["High-pressure systems", "Corrosion resistant", "Automated feeding"],
    benefits: ["Increase material density", "Improve transport efficiency", "Reduce processing costs"]
  },
  {
    equipment: "Sorting & Separation Systems",
    application: "Metal recovery from mining waste streams",
    capacity: "5-30 tons/hour",
    specifications: ["Magnetic separation", "Optical sorting", "Density separation"],
    benefits: ["Maximize metal recovery", "Reduce waste disposal", "Improve material purity"]
  }
];

const wasteTypes = [
  {
    category: "Structural Mining Equipment",
    materials: ["Conveyor systems", "Crushing equipment", "Heavy machinery frames", "Steel structures"],
    challenges: ["Massive size", "High strength materials", "Complex geometries", "Remote locations"],
    solutions: ["Mobile processing units", "On-site cutting and shredding", "Modular equipment design"]
  },
  {
    category: "Ore Processing Waste",
    materials: ["Metal-bearing tailings", "Process equipment waste", "Screening materials", "Magnetic separates"],
    challenges: ["Mixed material streams", "Contamination", "Environmental concerns", "Volume management"],
    solutions: ["Advanced sorting systems", "Density separation", "Chemical treatment integration"]
  },
  {
    category: "Infrastructure Materials",
    materials: ["Railway tracks", "Support structures", "Piping systems", "Electrical components"],
    challenges: ["Geographic dispersion", "Weather exposure", "Access difficulties", "Mixed materials"],
    solutions: ["Mobile processing equipment", "Weather-resistant systems", "Modular deployment"]
  },
  {
    category: "Vehicle & Machinery Scrap",
    materials: ["Mining trucks", "Excavators", "Dozers", "Support vehicles"],
    challenges: ["Fluid contamination", "Size constraints", "Component complexity", "Value recovery"],
    solutions: ["Fluid drainage systems", "Component separation", "Specialized dismantling"]
  }
];

const processingSolutions = [
  {
    stage: "Assessment & Planning",
    description: "Comprehensive site evaluation and processing strategy development",
    duration: "2-4 weeks",
    activities: [
      "Waste stream analysis and characterization",
      "Site accessibility and logistics evaluation",
      "Equipment sizing and capacity planning",
      "Environmental impact assessment"
    ]
  },
  {
    stage: "Equipment Deployment",
    description: "Mobile or permanent equipment installation based on site requirements",
    duration: "1-3 weeks",
    activities: [
      "Equipment transportation and setup",
      "Utility connections and commissioning",
      "Safety system implementation",
      "Operator training and certification"
    ]
  },
  {
    stage: "Processing Operations",
    description: "Continuous waste processing with quality control and monitoring",
    duration: "Ongoing",
    activities: [
      "24/7 processing operations",
      "Real-time quality monitoring",
      "Material sorting and recovery",
      "Environmental compliance tracking"
    ]
  },
  {
    stage: "Material Recovery",
    description: "Value extraction and preparation for downstream processing",
    duration: "Continuous",
    activities: [
      "Metal separation and purification",
      "Material grading and certification",
      "Transport logistics coordination",
      "Revenue optimization strategies"
    ]
  }
];

const caseStudies = [
  {
    title: "Copper Mine Waste Processing Facility",
    location: "Antofagasta, Chile",
    scale: "Large-scale mining operation",
    challenge: "Processing 200 tons/day of mixed mining equipment waste",
    solution: "Integrated mobile processing system with gantry shears and heavy-duty shredders",
    results: [
      "Processed 72,000 tons annually of mining waste",
      "Achieved 85% metal recovery rate",
      "Reduced waste disposal costs by 70%",
      "Generated $2.4M in recovered material value"
    ],
    equipment: "ARZIR Mobile Processing System + Gantry Shears"
  },
  {
    title: "Iron Ore Infrastructure Recycling",
    location: "Pilbara, Australia",
    scale: "Multi-site mining complex",
    challenge: "Decommissioning aging conveyor systems and processing equipment",
    solution: "On-site cutting and processing with mobile shredding units",
    results: [
      "Processed 150 km of conveyor systems",
      "Recovered 15,000 tons of structural steel",
      "Achieved 90% material recovery rate",
      "Completed project 30% faster than planned"
    ],
    equipment: "ARZIR Mobile Shredding Units + Sorting Systems"
  }
];

const sustainability = [
  {
    aspect: "Resource Recovery",
    description: "Maximize valuable metal recovery from mining waste streams",
    metrics: ["88% average recovery rate", "15+ metal types processed", "$50M+ annual recovery value"],
    impact: "Reduce dependency on virgin material extraction"
  },
  {
    aspect: "Environmental Remediation",
    description: "Clean up mining sites and reduce environmental impact",
    metrics: ["500+ sites processed", "75% waste volume reduction", "Zero discharge operations"],
    impact: "Restore mining areas to productive use"
  },
  {
    aspect: "Circular Economy",
    description: "Transform mining waste into valuable input materials",
    metrics: ["200+ downstream customers", "98% material utilization", "Closed-loop systems"],
    impact: "Support sustainable mining practices"
  },
  {
    aspect: "Economic Value",
    description: "Generate revenue from previously disposed waste materials",
    metrics: ["$200-500/ton recovery value", "18-month ROI", "Long-term contracts"],
    impact: "Improve mining operation profitability"
  }
];

export default function MiningExtractionWastePage() {
  return (
    <>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden bg-gradient-to-br from-arzir-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-black leading-tight">
              Mining & Extraction Waste Processing
            </h1>
            <p className="text-xl text-arzir-gray-600 leading-relaxed">
              Heavy-duty waste processing solutions for mining industry equipment and ore processing waste. 
              Specialized equipment for the most demanding mining applications.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="px-4 py-2 bg-arzir-primary/10 rounded-full text-arzir-primary font-semibold text-sm">
                88% recovery rate
              </div>
              <div className="px-4 py-2 bg-success/10 rounded-full text-success font-semibold text-sm">
                50T/h capacity
              </div>
            </div>
            <QuoteDialog source="mining_waste_hero">
              <Button size="lg" className="bg-arzir-primary hover:bg-primary-600">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </QuoteDialog>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-arzir-gray-100 to-arzir-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/applications/Mining & Extraction Waste.webp"
                alt="Mining & Extraction Waste Processing"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Specialized Equipment */}
      <Section background="gray" size="lg" id="equipment">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Heavy-Duty Mining Equipment
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Industrial-grade processing systems designed to handle the most demanding mining applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {miningEquipment.map((equipment, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <Factory className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-black">
                        {equipment.equipment}
                      </h3>
                      <p className="text-orange-600 font-medium">{equipment.capacity}</p>
                    </div>
                  </div>
                  
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {equipment.application}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-2">Technical Specifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {equipment.specifications.map((spec, i) => (
                          <span key={i} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-2">Key Benefits:</h4>
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
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mining Waste Types */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Mining Waste Categories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all types of mining and extraction waste materials
            </p>
          </div>
          
          <div className="space-y-8">
            {wasteTypes.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-black mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-arzir-gray-700">Typical Materials:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.materials.map((material, i) => (
                          <span key={i} className="px-2 py-1 bg-arzir-gray-100 text-arzir-gray-600 rounded text-sm">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-3">Processing Challenges:</h4>
                    <ul className="space-y-2">
                      {category.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-arzir-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-arzir-primary mb-3">ARZIR Solutions:</h4>
                    <ul className="space-y-2">
                      {category.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-arzir-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-arzir-gray-600">{solution}</span>
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

      {/* Processing Solutions */}
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Complete Processing Solutions
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              End-to-end waste processing from assessment to material recovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processingSolutions.map((stage, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-arzir-gray-100 relative">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-black">
                        {stage.stage}
                      </h3>
                      <div className="text-sm text-orange-600 font-medium">
                        {stage.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-arzir-gray-600 text-sm leading-relaxed">
                    {stage.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-black">Key Activities:</h4>
                    <ul className="space-y-1">
                      {stage.activities.map((activity, i) => (
                        <li key={i} className="text-xs text-arzir-gray-600 flex items-start gap-1">
                          <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index < processingSolutions.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 z-10">
                    <ArrowRight className="h-6 w-6 text-arzir-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Mining Industry Success Stories
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Proven results from major mining operations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-heading font-bold text-black">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-4 text-arzir-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{study.location}</span>
                      </div>
                      <span className="px-3 py-1 bg-arzir-primary/10 text-arzir-primary rounded-full text-sm">
                        {study.scale}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                      <h4 className="font-semibold text-red-800 mb-1">Challenge:</h4>
                      <p className="text-red-700 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-1">Solution:</h4>
                      <p className="text-blue-700 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-arzir-gray-50 rounded-lg">
                    <p className="font-semibold text-black mb-2">Equipment Configuration:</p>
                    <p className="text-orange-600 font-medium text-sm">{study.equipment}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-black">Project Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-arzir-primary flex-shrink-0 mt-0.5" />
                          <span className="text-arzir-gray-600 text-sm">{result}</span>
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
      <Section background="gray" size="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-black">
              Sustainable Mining Practices
            </h2>
            <p className="text-xl text-arzir-gray-600 max-w-3xl mx-auto">
              Supporting responsible mining through efficient waste processing and resource recovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainability.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-arzir-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-arzir-primary to-primary-600 rounded-2xl flex items-center justify-center">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-black">
                        {item.aspect}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-arzir-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-black">Key Metrics:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {item.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-arzir-primary rounded-full"></div>
                          <span className="text-sm text-arzir-gray-600">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-arzir-primary/10 border border-arzir-primary/20 rounded-lg">
                    <p className="text-arzir-primary font-medium text-sm">
                      <strong>Impact:</strong> {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <ApplicationCTA 
        title="Ready to Optimize Your Mining Waste Processing?"
        description="Get expert consultation and custom quotes for mining industry waste processing solutions tailored to your operational requirements."
        primaryButtonText="Get Mining Quote"
        secondaryButtonText="View Equipment"
        secondaryButtonHref="/products"
        formSource="mining_waste_cta"
      />
    </>
  );
}